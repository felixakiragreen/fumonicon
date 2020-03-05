const data = require('./_data/fumonicons.json')
const { htmlFriendlyToTitle } = require('./scripts/utils.js')

const titleRegexp = /(.+) fumonicon$/

module.exports = {
  rules: {
    elm: {
      svg: 1,
      'svg > title': 1,
      g: true,
      path: true,
      '*': false,
    },
    attr: [
      {
        // ensure that the SVG elm has the appropriate attrs
        role: 'img',
        viewBox: '0 0 240 240',
        width: '100%',
        height: '100%',
        xmlns: 'http://www.w3.org/2000/svg',

        'rule::selector': 'svg',
      },
      {
        // ensure that the title elm has the appropriate attr
        'rule::selector': 'svg > title',
        'rule::whitelist': true,
      },
    ],
    custom: [
      function(reporter, $, ast) {
        const iconTitleText = $.find('title').text()
        if (!titleRegexp.test(iconTitleText)) {
          reporter.error('<title> should follow the format "[ICON_NAME] icon"')
        } else {
          const titleMatch = iconTitleText.match(titleRegexp)
          // titleMatch = [ "[ICON_NAME] icon", "[ICON_NAME]" ]
          const rawIconName = titleMatch[1]
          const iconName = htmlFriendlyToTitle(rawIconName)
          const icon = data.icons.find(icon => icon.title === iconName)
          if (icon === undefined) {
            reporter.error(
              `No icon with title "${iconName}" found in fumonicons.json`
            )
          }
        }
      },
    ],
  },
}
