import{_ as n,e}from"./app.c7979cc2.js";const a={},s=e(`<h1 id="_1-\u5185\u5B58\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_1-\u5185\u5B58\u7BA1\u7406" aria-hidden="true">#</a> 1. \u5185\u5B58\u7BA1\u7406</h1><p>\u5806\u533A\u662F\u5982\u4F55\u5206\u914D\u7684\uFF1F</p><p>\u5982\u56FE\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>      heap_end&lt;---+--------------+
                  |   metadata   +---&gt;pool&amp;chunk(pages),etc.
    meta_start&lt;---+--------------+      (for kernel)
                  |              |
                  |              |
                  |              |
                  |     free     |
                  |    spaces    |
                  |  (for user)  |
                  |              |
                  |              |
    heap_start&lt;---+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,4);function r(l,p){return s}var c=n(a,[["render",r],["__file","index.html.vue"]]);export{c as default};
