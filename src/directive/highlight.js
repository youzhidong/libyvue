// highlight.js  代码高亮指令
import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/atelier-savanna-light.css'

let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code')
    setTimeout(() => {
      blocks.forEach((block) => {
        hljs.highlightBlock(block)
      })
    }, 200)
  })
}

export default Highlight
