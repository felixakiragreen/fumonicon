export default{title:"time",slug:"time",svg:'<svg  role="img"\n  width="100%"\n  height="100%"\n  viewBox="0 0 240 240"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <title>\n    time fuminicon\n  </title>\n  <g id="color" style="fill-rule:evenodd">\n    <path\n      id="time-bg"\n      d="M240,120l-60,103.923l-120,0l-60,-103.923l60,-103.923l120,0l60,103.923Z"\n      fill="var(--fumonicon-time-bg, var(--grey-700, #808080))"\n    />\n    <path\n      id="time-past"\n      d="M60,16.077l-60,103.923l60,103.923l20,-34.641l-30,-51.961l60,0l10,-17.321l-10,-17.321l-60,0l30,-51.961l-20,-34.641Z"\n      fill="var(--fumonicon-time-past, var(--red-300, #f3768b))"\n    />\n    <path\n      id="time-present"\n      d="M60,223.923l120,0l-60,-103.923l-60,103.923Zm60,-103.923l-60,-103.923l120,0l-60,103.923Z"\n      fill="var(--fumonicon-time-present, var(--yellow-300, #efcd44))"\n    />\n    <path\n      id="time-future"\n      d="M180,223.923l60,-103.923l-60,-103.923l-20,34.641l30,51.961l-60,0l-10,17.321l10,17.321l60,0l-30,51.961l20,34.641Z"\n      fill="var(--fumonicon-time-future, var(--green-300, #adff2f))"\n    />\n  </g>\n</svg>\n',get path(){return this.svg.match(/<g\s+id="mono">\s+<path\s+fill="none"\s+d="([^"]*)/)[1]}};