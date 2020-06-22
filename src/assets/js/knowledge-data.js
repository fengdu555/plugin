let knowledgeData = [
  {
    title: 'watch-知识点',
    content: [
      { text: 'watch: {', className: 'part01' },
      { text: 'code(val) {', className: 'part02'},
      { text: 'console.log(val)', className: 'part03'},
      { text: '}', className: 'part02'},
      { text: '}', className: 'part01'},
      { text: 'watch知识点，这里的val打印出来就是对应的code值', className: 'text'}
    ]
  },
  {
    title: 'less-循环',
    content: [
      { text: '@pl10: 10px;', className: 'part01' },
      { text: '.loop(@n, @i:1) when (@i <= @n) {', className: 'part01' },
      { text: '.part0@{i}{', className: 'part02'},
      { text: 'padding-left: @pl10*@i;', className: 'part03'},
      { text: '}', className: 'part02'},
      { text: '.loop(@n, (@i + 1));', className: 'part02'},
      { text: '}', className: 'part01'},
      { text: '调用方法(里面数字自定义的，看需求);', className: 'text'},
      { text: '.loop(10, 1);', className: 'part02'},
      { text: 'less循环用法', className: 'text'}
    ]
  },
  {
    title: '正则-限制只允许数字',
    content: [
      { text: '正则--限制 非数字', className: 'part01' },
      { text: "let val = inputVal.replace(/[^\d]/g,'')", className: 'part01' },
      { text: '正则--限制，只允许是数字', className: 'text'}
    ]
  },
  {
    title: 'ref属性和querySelector使用',
    content: [
      { text: '$refs 配合querySelector使用获取子集', className: 'part01' },
      { text: "let canvas = this.$refs['box'].querySelector('canvas');", className: 'part01' },
      { text: '$refs 配合querySelector使用获取子集', className: 'text'}
    ]
  },
  {
    title: 'css使用贝塞尔曲线做动画',
    content: [
      { text: '<div class="ball puff"></div>', className: 'part01' },
      { text: ".ball {", className: 'part01' },
      { text: "width: 40px;", className: 'part02' },
      { text: "height: 40px;", className: 'part02' },
      { text: "border-radius: 20px;", className: 'part02' },
      { text: "margin: 40px auto;", className: 'part02' },
      { text: "background-color: #2ae0c8;", className: 'part02' },
      { text: "}", className: 'part01' },
      { text: ".puff {", className: 'part01' },
      { text: "animation: puff;", className: 'part02' },
      { text: "animation-duration: 0.5s;", className: 'part02' },
      { text: "/*forwards停在运动后的位置*/", className: 'part02' },
      { text: "animation-fill-mode: forwards;", className: 'part02' },
      { text: "/* infinite无限运动 */;", className: 'part02' },
      { text: "/* animation-iteration-count: infinite; */;", className: 'part02' },
      { text: "animation-timing-function: cubic-bezier(.18,.89,.32,1.27)", className: 'part02' },
      { text: "}", className: 'part01' },
      { text: "@keyframes puff {", className: 'part01' },
      { text: "from{transform: scale(0, 0);}", className: 'part02' },
      { text: "to {transform: scale(1, 1);}", className: 'part02' },
      { text: "}", className: 'part01' },
      { text: 'css使用贝塞尔曲线做动画改变cubic-bezier里的值,改变效果的话就改变scale属性', className: 'text'},
      { text: 'http://yisibl.github.io/cubic-bezier/#.17,.67,.83,.67', className: 'text'}
    ]
  }
]
module.exports = knowledgeData