{
  title: '%s',
  slug: '%s',
  svg: `%s`,
  get path() {
    return this.svg.match(/<g\s+id="mono">\s+<path\s+fill="none"\s+d="([^"]*)/)[1];
  }
}