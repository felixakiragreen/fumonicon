#!/usr/bin/env node
/**
 * @fileoverview
 * Compiles our icons into static .js files that can be imported in the browser
 * and are tree-shakeable.
 * The static .js files go in icons/{filename}.js.
 * Also generates an index.js that exports all icons by title, but is not tree-shakeable
 */

const fs = require('fs')
const path = require('path')
const util = require('util')
const minify = require('terser').minify

const UTF8 = 'utf8'

const dataFile = path.resolve(`${__dirname}/../src/fumonicons.json`)
const svgsDir = path.resolve(`${__dirname}/../svgs`)

const indexFile = path.resolve(`${__dirname}/../src/icons.js`)
const iconsDir = path.resolve(`${__dirname}/../src/fumonicons`)

const indexTemplateFile = `${__dirname}/templates/index.js`
const iconObjectTemplateFile = `${__dirname}/templates/icon-object.js`

const indexTemplate = fs.readFileSync(indexTemplateFile, UTF8)
const iconObjectTemplate = fs.readFileSync(iconObjectTemplateFile, UTF8)

const data = require(dataFile)
const { titleToFilename } = require('./utils')

// Local helper functions
function escape(value) {
  return value.replace(/'/g, "\\'")
}
function iconToKeyValue(icon) {
  return `export const ${icon.title} = ${iconToObject(icon)}`
}
function iconToObject(icon) {
  return util.format(
    iconObjectTemplate,
    escape(icon.title),
    escape(icon.slug),
    escape(icon.svg)
  )
}

// 'main'
const fumonicons = []
data.fumonicons.forEach(icon => {
  const filename = titleToFilename(icon.title)
  icon.svg = fs
    .readFileSync(`${svgsDir}/${filename}.svg`, UTF8)
    .replace(/\r?\n/, '')
  icon.slug = filename
  fumonicons.push(icon)

  // write the static .js file for the icon
  const { error, code } = minify(`export default ${iconToObject(icon)}`, {
    ecma: 2017,
  })

  if (error) {
    console.error(error)
    process.exit(1)
  } else {
    fs.writeFileSync(`${iconsDir}/${filename}.js`, code)
  }
})

// write our generic index.js
const rawIndexJs = util.format(
  indexTemplate,
  fumonicons.map(iconToKeyValue).join(';\n')
)
const { error, code } = minify(rawIndexJs, { ecma: 2017 })
if (error) {
  console.error(error)
  process.exit(1)
} else {
  fs.writeFileSync(indexFile, code)
}
