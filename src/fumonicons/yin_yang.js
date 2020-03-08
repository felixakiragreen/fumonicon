export default{title:"yin_yang",slug:"yin_yang",svg:'<svg  role="img"\n  width="100%"\n  height="100%"\n  viewBox="0 0 240 240"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <title>\n    yin_yang fumonicon\n  </title>\n  <g class="color" style="fill-rule:evenodd">\n    <path\n      d="M120,0l103.923,60l0,120l-103.923,60l-103.923,-60l0,-120l103.923,-60Z"\n      style="fill:#808080;"\n    />\n    <path\n      d="M16.077,180l0,-120l103.923,-60l51.962,30l0,60l-103.924,60l0,60l-51.961,-30Z"\n    />\n    <path\n      d="M120,30l25.981,15l0,30l-25.981,15l-25.981,-15l0,-30l25.981,-15Z"\n      style="fill:#fff;"\n    />\n    <path\n      d="M171.962,30l51.961,30l0,120l-103.923,60l-51.962,-30l0,-60l103.924,-60l0,-60Z"\n      style="fill:#fff;"\n    />\n    <path\n      d="M120,150l25.981,15l0,30l-25.981,15l-25.981,-15l0,-30l25.981,-15Z"\n    />\n  </g>\n</svg>\n',get path(){return this.svg.match(/<g\s+id="mono">\s+<path\s+fill="none"\s+d="([^"]*)/)[1]}};