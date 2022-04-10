import{_ as a,r as p,c as e,d as t,F as o,e as n,o as c}from"./app.9fe46299.js";const r={},l=n(`<h1 id="_4-1-klib" tabindex="-1"><a class="header-anchor" href="#_4-1-klib" aria-hidden="true">#</a> 4.1 klib</h1><h2 id="_4-1-1-stdio-c" tabindex="-1"><a class="header-anchor" href="#_4-1-1-stdio-c" aria-hidden="true">#</a> 4.1.1 stdio.c</h2><h3 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h3><p>stdio\u4E3A\u6807\u51C6\u8F93\u5165\u8F93\u51FA\u5E93\uFF0C\u4E3A\u7CFB\u7EDF\u548C\u5176\u4ED6\u5E94\u7528\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u7684\u6807\u51C6\u8F93\u5165\u8F93\u51FA\u51FD\u6570\u3002\u6240\u6709\u8F93\u5165\u548C\u8F93\u51FA\u90FD\u7531\u62BD\u8C61\u7684\u5B57\u8282\u6D41\u6765\u5B8C\u6210\u3002\u4F46\u662F\u6211\u4EEC\u6240\u5B8C\u6210\u7684\u7CFB\u7EDF\u529F\u80FD\u7B80\u5355\uFF0C\u5E76\u672A\u5B9E\u73B0\u6807\u51C6\u8F93\u5165\u8F93\u51FA\u7684\u5168\u90E8\u5E93\u51FD\u6570\u548C\u5B8F\uFF0C\u56E0\u6B64\u53EA\u5B9E\u73B0\u4E86printf\u5BB6\u65CF\u7684\u4E00\u4E9B\u683C\u5F0F\u5316\u8F93\u51FA\u51FD\u6570\u3002</p><h3 id="\u63A5\u53E3\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u8BF4\u660E" aria-hidden="true">#</a> \u63A5\u53E3\u8BF4\u660E</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u5411\u6807\u51C6\u8F93\u51FA\u6D41\u8F93\u51FA\u683C\u5F0F\u5316\u5B57\u7B26\u4E32,\u8FD4\u56DE\u8F93\u51FA\u5B57\u7B26\u4E2A\u6570</span>
<span class="token keyword">int</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>fmt<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5411\u6307\u5B9A\u8F93\u51FA\u6D41out\u8F93\u51FA\u683C\u5F0F\u5316\u5B57\u7B26\u4E32,\u8FD4\u56DE\u8F93\u51FA\u5B57\u7B26\u4E2A\u6570</span>
<span class="token keyword">int</span> <span class="token function">sprintf</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>out<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>fmt<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5411\u6307\u5B9A\u8F93\u51FA\u6D41out\u8F93\u51FA\u683C\u5F0F\u5316\u5B57\u7B26\u4E32,\u8F93\u51FA\u957F\u5EA6\u6700\u957F\u4E3An,\u8FD4\u56DE\u8F93\u51FA\u5B57\u7B26\u4E2A\u6570</span>
<span class="token keyword">int</span> <span class="token function">snprintf</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>out<span class="token punctuation">,</span> <span class="token class-name">size_t</span> n<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>fmt<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5411\u6307\u5B9A\u8F93\u51FA\u6D41out\u8F93\u51FA\u683C\u5F0F\u5316\u5B57\u7B26\u4E32,\u6307\u5B9A\u53C2\u6570\u5217\u8868\uFF0C\u8FD4\u56DE\u8F93\u51FA\u5B57\u7B26\u4E2A\u6570</span>
<span class="token keyword">int</span> <span class="token function">vsprintf</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>out<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>fmt<span class="token punctuation">,</span> va_list ap<span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">//\u5411\u6307\u5B9A\u8F93\u51FA\u6D41out\u8F93\u51FA\u683C\u5F0F\u5316\u5B57\u7B26\u4E32,\u8F93\u51FA\u957F\u5EA6\u6700\u957F\u4E3An,\u6307\u5B9A\u53C2\u6570\u5217\u8868\uFF0C\u8FD4\u56DE\u8F93\u51FA\u5B57\u7B26\u4E2A\u6570</span>
<span class="token keyword">int</span> <span class="token function">vsnprintf</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>out<span class="token punctuation">,</span> <span class="token class-name">size_t</span> n<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>fmt<span class="token punctuation">,</span> va_list ap<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u8BBE\u8BA1\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u601D\u8DEF" aria-hidden="true">#</a> \u8BBE\u8BA1\u601D\u8DEF</h3><p>\u6807\u51C6\u8F93\u51FA\u51FD\u6570\u770B\u4F3C\u5F88\u591A\uFF0C\u4F46\u662F\u53EA\u9700\u8981\u5B9E\u73B0\u5176\u4E2D\u6700\u6CDB\u7528\u7684\u4E00\u79CD\uFF0C\u4E5F\u5C31\u662F<code>vsnprintf</code>\uFF0C\u5373\u53EF\u8F7B\u6613\u5B9E\u73B0\u5176\u4ED6\u8F93\u51FA\u51FD\u6570\u3002<code>vsnprintf</code>\u51FD\u6570\u5411\u6307\u5B9A\u8F93\u51FA\u6D41\u8F93\u51FA\u683C\u5F0F\u5316\u5B57\u7B26\u4E32,\u8F93\u51FA\u957F\u5EA6\u6709\u9650\u5236,\u6307\u5B9A\u53C2\u6570\u5217\u8868\u5E76\u8FD4\u56DE\u8F93\u51FA\u5B57\u7B26\u4E2A\u6570\u3002\u4F8B\u5982\uFF0C<code>vsprintf</code>\u51FD\u6570\u53EA\u9700\u5C06\u8F93\u51FA\u957F\u5EA6\u9650\u5236\u4E3A<code>INT_MAX</code>,\u5C31\u53EF\u4EE5\u770B\u4F5C\u662F\u65E0\u9650\u5236\u5E76\u8C03\u7528<code>vsnprintf</code>\u3002\u800C\u4E0D\u5B9A\u53C2\u6570\u7684<code>snprintf</code>\u53EA\u9700\u8981\u5C06\u4E0D\u5B9A\u53C2\u6570\u8F6C\u5316\u4E3A<code>va_list</code>\u5373\u53EF\u8C03\u7528<code>vsnprintf</code>\u3002</p><h3 id="\u8BBE\u8BA1\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u7EC6\u8282" aria-hidden="true">#</a> \u8BBE\u8BA1\u7EC6\u8282</h3><h4 id="_1-\u5982\u4F55\u8BBE\u8BA1\u53D8\u91CF\u8BC6\u522B\u683C\u5F0F\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_1-\u5982\u4F55\u8BBE\u8BA1\u53D8\u91CF\u8BC6\u522B\u683C\u5F0F\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 1.\u5982\u4F55\u8BBE\u8BA1\u53D8\u91CF\u8BC6\u522B\u683C\u5F0F\u5B57\u7B26\u4E32</h4><p>\u683C\u5F0F\u5B57\u7B26\u4E32\u5982\u4E0B FORMAT: %[flags][width][.precision][length]specifier \u5177\u4F53\u7EC6\u8282\u5982\u4E0B</p><details class="custom-block details"><summary>flags</summary><table><thead><tr><th>\u5B57\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>space</td><td>\u4F7F\u5F97\u8F93\u51FA\u524D\u7F001\u4E2A\u7A7A\u683C\u3002</td></tr><tr><td>0</td><td>\u5982\u679Cwidth\u9009\u9879\u524D\u7F00\u4EE50\uFF0C\u5219\u5728\u5DE6\u4FA7\u75280\u586B\u5145\u76F4\u81F3\u8FBE\u5230\u5BBD\u5EA6\u8981\u6C42\u3002</td></tr></tbody></table></details><details class="custom-block details"><summary>width</summary><p>width\u7ED9\u51FA\u663E\u793A\u6570\u503C\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF0C\u5178\u578B\u7528\u4E8E\u5236\u8868\u8F93\u51FA\u65F6\u586B\u5145\u56FA\u5B9A\u5BBD\u5EA6\u7684\u8868\u76EE\u3002\u5B9E\u9645\u8F93\u51FA\u5B57\u7B26\u7684\u4E2A\u6570\u4E0D\u8DB3\u57DF\u5BBD\uFF0C\u5219\u6839\u636E\u53F3\u5BF9\u9F50\u8FDB\u884C\u586B\u5145\u3002\u5982\u679C\u8BE5\u63CF\u8FF0\u7B26\u4E3A*\uFF0C\u5219\u4ECE\u53C2\u6570\u5217\u8868\u53D6\u4E0B\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3Awidth\u3002</p></details><details class="custom-block details"><summary>precision</summary><p>Precision\u6307\u660E\u8F93\u51FA\u7684\u6700\u5927\u957F\u5EA6\uFF0C\u4F9D\u8D56\u4E8E\u7279\u5B9A\u7684\u683C\u5F0F\u5316\u7C7B\u578B\u3002\u5BF9\u4E8E%d\u3001%i\u3001%p\u3001%x\u7684\u6574\u578B\u6570\u503C\uFF0C\u662F\u6307\u6700\u5C0F\u6570\u5B57\u4F4D\u6570\uFF0C\u4E0D\u8DB3\u7684\u4F4D\u8981\u5728\u5DE6\u4FA7\u88650\uFF0C\u5982\u679C\u8D85\u8FC7\u4E5F\u4E0D\u622A\u65AD\u3002\u5982\u679C\u8BE5\u63CF\u8FF0\u7B26\u4E3A*\uFF0C\u5219\u4ECE\u53C2\u6570\u5217\u8868\u53D6\u4E0B\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3APrecision\u3002</p></details><details class="custom-block details"><summary>length</summary><p>\u5728\u6B64\u4E0D\u505A\u5904\u7406</p></details><details class="custom-block details"><summary>specifier</summary><p>\u652F\u6301%d\u3001%i\u3001%p\u3001%x\u7684\u6574\u578B\u6570\u503C\uFF0C%c\uFF0C%s\u7684\u5B57\u7B26\u7C7B\u578B</p></details><h4 id="_2-\u53C2\u6570\u5982\u4F55\u8BC6\u522B" tabindex="-1"><a class="header-anchor" href="#_2-\u53C2\u6570\u5982\u4F55\u8BC6\u522B" aria-hidden="true">#</a> 2.\u53C2\u6570\u5982\u4F55\u8BC6\u522B</h4><p>\u5BF9\u4E8E\u5B57\u7B26\u578B\u53C2\u6570\u548C\u5B57\u7B26\u4E32\u578B\u53C2\u6570\uFF0C\u53EA\u9700\u8981\u901A\u8FC7<code>stdarg.h</code>\u63D0\u4F9B\u7684<code>va_arg</code>\u65B9\u6CD5\u5C06\u5176\u8F6C\u6362\u4E3A<code>char</code>\u548C<code>char*</code>\u5373\u53EF\u3002\u5BF9\u4E8E\u6570\u503C\u7C7B\u578B\uFF0C\u5148\u5C06\u5176\u8F6C\u5316\u4E3AInt\u7C7B\u578B\uFF0C\u518D\u901A\u8FC7\u8C03\u7528print_num\u65B9\u6CD5\u5C06Int\u8F93\u51FA\u4E3A\u5B57\u7B26\u4E32\u5230\u4E13\u7528\u7684<code>vbuf</code>(virables buffer)\u3002\u968F\u540E\u518D\u8FDB\u884C\u586B\u5145\u64CD\u4F5C\u3002</p><h3 id="\u6D41\u7A0B\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u56FE" aria-hidden="true">#</a> \u6D41\u7A0B\u56FE</h3><h4 id="vsnprintf\u4E3B\u4F53\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#vsnprintf\u4E3B\u4F53\u6D41\u7A0B" aria-hidden="true">#</a> vsnprintf\u4E3B\u4F53\u6D41\u7A0B</h4>`,20),i=n(`<h2 id="_4-1-2-string-c" tabindex="-1"><a class="header-anchor" href="#_4-1-2-string-c" aria-hidden="true">#</a> 4.1.2 string.c</h2><h3 id="\u6982\u8FF0-1" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-1" aria-hidden="true">#</a> \u6982\u8FF0</h3><p>string\u4F5C\u4E3A\u4E32\u5904\u7406\u7684\u6807\u51C6\u5E93\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u5BF9\u5B57\u7B26\u4E32str\u7684\u76F8\u5173\u64CD\u4F5C\u4EE5\u53CA\u5BF9\u5185\u5B58\u5757mem\u7684\u76F8\u5173\u64CD\u4F5C\uFF0C\u5728\u5404\u79CD\u7A0B\u5E8F\u4E2D\u7684\u4F7F\u7528\u7387\u4E5F\u662F\u975E\u5E38\u9AD8\u7684\uFF0C\u6240\u4EE5string\u8FD9\u90E8\u5206\u51FD\u6570\u662F\u5341\u5206\u91CD\u8981\u7684</p><h3 id="\u63A5\u53E3\u8BF4\u660E-1" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u8BF4\u660E-1" aria-hidden="true">#</a> \u63A5\u53E3\u8BF4\u660E</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u83B7\u53D6\u5B57\u7B26\u4E32s\u957F\u5EA6\uFF0C\u8FD4\u56DE\u4E3A\u957F\u5EA6</span>
<span class="token class-name">size_t</span> <span class="token function">strlen</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5C06\u5B57\u7B26\u4E32src\u62F7\u8D1D\u5230dst\u7684\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u5DF2\u5B8C\u6210\u62F7\u8D1D\u7684\u5B57\u7B26\u4E32\u6307\u9488</span>
<span class="token keyword">char</span> <span class="token operator">*</span><span class="token function">strcpy</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>dst<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5C06\u5B57\u7B26\u4E32src\u4E2Dn\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\u62F7\u8D1D\u5230dst\u4E2D\u7684\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u5DF2\u5B8C\u6210\u62F7\u8D1D\u7684\u5B57\u7B26\u4E32\u6307\u9488</span>
<span class="token keyword">char</span> <span class="token operator">*</span><span class="token function">strncpy</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>dst<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>src<span class="token punctuation">,</span> <span class="token class-name">size_t</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5C06\u5B57\u7B26\u4E32dst\u4E0Esrc\u7684\u8FDE\u63A5\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u5DF2\u8FDE\u63A5\u7684\u5B57\u7B26\u4E32\u6307\u9488</span>
<span class="token keyword">char</span> <span class="token operator">*</span><span class="token function">strcat</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>dst<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5C06\u5B57\u7B26\u4E32\u5B57\u7B26\u6BD4\u8F83\u7684\u64CD\u4F5C\uFF0Cs1\u5927\u8FD4\u56DE1\uFF0Cs2\u5927\u8FD4\u56DE-1\uFF0C\u4E24\u5B57\u7B26\u4E32\u76F8\u540C\u8FD4\u56DE0</span>
<span class="token keyword">int</span> <span class="token function">strcmp</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>s1<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5C06\u5B57\u7B26\u4E32\u524Dn\u4E2A\u5B57\u7B26\u8FDB\u884C\u6BD4\u8F83\u7684\u64CD\u4F5C\uFF0Cs1\u5927\u8FD4\u56DE1\uFF0Cs2\u5927\u8FD4\u56DE-1\uFF0C\u4E24\u5B57\u7B26\u4E32\u76F8\u540C\u8FD4\u56DE0</span>
<span class="token keyword">int</span> <span class="token function">strncmp</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>s1<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>s2<span class="token punctuation">,</span> <span class="token class-name">size_t</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5C06\u5185\u5B58\u5757v\u7684\u524Dn\u4E2A\u5B57\u7B26\u586B\u5145\u4E3Ac\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u5185\u5B58\u533A\u7684\u6307\u9488v</span>
<span class="token keyword">void</span> <span class="token operator">*</span><span class="token function">memset</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>v<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">,</span> <span class="token class-name">size_t</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5C06\u5185\u5B58\u5757in\u62F7\u8D1D\u5230out\u7684\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u5185\u5B58\u533A\u7684\u6307\u9488out</span>
<span class="token keyword">void</span> <span class="token operator">*</span><span class="token function">memcpy</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>out<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>in<span class="token punctuation">,</span> <span class="token class-name">size_t</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5728\u8003\u8651\u91CD\u53E0\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06\u5185\u5B58\u5757in\u62F7\u8D1D\u5230out\u7684\u64CD\u4F5C\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6307\u5411\u5185\u5B58\u533A\u7684\u6307\u9488dest</span>
<span class="token keyword">void</span> <span class="token operator">*</span><span class="token function">memmove</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>dest<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>src<span class="token punctuation">,</span> <span class="token class-name">size_t</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5C06\u5185\u5B58\u5757\u4E2D\u524Dn\u4E2A\u5B57\u7B26\u7684\u5185\u5BB9\u8FDB\u884C\u6BD4\u8F83\uFF0Cs1\u5927\u8FD4\u56DE1\uFF0Cs2\u5927\u8FD4\u56DE-1\uFF0C\u4E24\u5B57\u7B26\u4E32\u76F8\u540C\u8FD4\u56DE0\uFF0C\u82E5\u975E\u6CD5\u5219\u8FD4\u56DE-2</span>
<span class="token keyword">int</span> <span class="token function">memcmp</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>s1<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>s2<span class="token punctuation">,</span> <span class="token class-name">size_t</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="\u8BBE\u8BA1\u601D\u8DEF-1" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u601D\u8DEF-1" aria-hidden="true">#</a> \u8BBE\u8BA1\u601D\u8DEF</h3><p>\u5BF9\u4E8E\u8FD9\u4E9B\u5E73\u5E38\u4F7F\u7528\u7387\u6781\u9AD8\u7684\u51FD\u6570\uFF0C\u867D\u7136\u6BD4\u8F83\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u662F\u9700\u8981\u5BF9\u5176\u505A\u4E00\u4E9B\u4F18\u5316\uFF0C\u8BA9\u5176\u4F7F\u7528\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u80FD\u591F\u66F4\u52A0\u5FEB\u901F</p><h3 id="\u8BBE\u8BA1\u7EC6\u8282-1" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u7EC6\u8282-1" aria-hidden="true">#</a> \u8BBE\u8BA1\u7EC6\u8282</h3><h4 id="_1-\u9488\u5BF9void\u6307\u9488\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-\u9488\u5BF9void\u6307\u9488\u7684\u64CD\u4F5C" aria-hidden="true">#</a> 1.\u9488\u5BF9void\u6307\u9488\u7684\u64CD\u4F5C</h4><p>\u5BF9\u4E8E\u5185\u5B58\u64CD\u4F5Cmem\u7684\u90E8\u5206\uFF0C\u9700\u8981\u5BF9void\u7C7B\u578B\u6307\u9488\u8FDB\u884C\u53D8\u6362\uFF0C\u53D8\u6210char\u7C7B\u578B\u7684\u6307\u9488\uFF0C\u9700\u8981\u5BF9\u5176\u8FDB\u884C\u76F4\u63A5\u8F6C\u6362\uFF0C\u800C\u4E0D\u662F\u6BCF\u4E00\u6B21\u5FAA\u73AF\u90FD\u8FDB\u884C\u4E00\u6B21\u8F6C\u6362\uFF0C\u8FD9\u6837\u5341\u5206\u6D88\u8017\u65F6\u95F4\u4E0E\u6027\u80FD \u5E94\u8BE5\u91C7\u7528\u5982\u4E0B\u8BBE\u8BA1\uFF1A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>dst <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>s1<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>src <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>s2<span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u800C\u4E0D\u662F</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
dst <span class="token operator">=</span> out<span class="token punctuation">;</span>
src <span class="token operator">=</span> in<span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>dst <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>src<span class="token punctuation">;</span>
  dst <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>dst <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  src <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>src <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="_2-\u5BF9\u4E8Ememcpy\u548Cmemmove\u7684\u8BBE\u8BA1\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#_2-\u5BF9\u4E8Ememcpy\u548Cmemmove\u7684\u8BBE\u8BA1\u7EC6\u8282" aria-hidden="true">#</a> 2.\u5BF9\u4E8Ememcpy\u548Cmemmove\u7684\u8BBE\u8BA1\u7EC6\u8282</h4><p>memcpy\u548Cmemmove\u53EF\u4EE5\u8FBE\u5230\u57FA\u672C\u76F8\u540C\u7684\u6548\u679C\uFF0C\u4F46\u662Fmemmove\u53EF\u4EE5\u5728\u5185\u5B58\u91CD\u53E0\uFF08overlap\uFF09\u7684\u60C5\u51B5\u4E0B\u8FDB\u884C\u6B63\u786E\u62F7\u8D1D\uFF0C\u800Cmemcpy\u7684\u7ED3\u679C\u4E0D\u5B9A\uFF0C\u6545\u5728memmove\u4E2D\u6DFB\u52A0\u4E86\u4ECE\u540E\u5411\u524D\u62F7\u8D1D\u7684\u64CD\u4F5C\uFF1A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//\u5982\u679Csrc\u5728dst\u524D\u9762</span>
  dst <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>dst <span class="token operator">+</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  src <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>src <span class="token operator">+</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u6837\u5C31\u907F\u514D\u4E86\u4ECE\u524D\u9762\u8FDB\u884C\u62F7\u8D1D\u7ED3\u679C\u5BFC\u81F4\u88AB\u8986\u76D6\u7684\u60C5\u51B5</p>`,17);function u(k,d){const s=p("FlowChart");return c(),e(o,null,[l,t(s,{id:"flowchart-382ee242",code:"st%3D%3Estart%3A%20%E8%BF%9B%E5%85%A5%E5%87%BD%E6%95%B0%0Aop1%3D%3Eoperation%3A%20%E5%8F%98%E9%87%8F%E5%88%9D%E5%A7%8B%E5%8C%96%0Acond1%3D%3Econdition%3A%20%E6%A0%BC%E5%BC%8F%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%9C%AA%E7%BB%93%E6%9D%9F%0Acond2%3D%3Econdition%3A%20%E9%81%87%E5%88%B0%25%0Aop2%3D%3Eoperation%3A%20%E7%9B%B4%E6%8E%A5%E8%BE%93%E5%87%BA%E5%88%B0%E8%BE%93%E5%87%BA%E6%B5%81%0Aop3%3D%3Eoperation%3A%20%E5%A4%84%E7%90%86flags%0Aop4%3D%3Eoperation%3A%20%E5%A4%84%E7%90%86width%0Aop5%3D%3Eoperation%3A%20%E5%A4%84%E7%90%86precision%0Aop6%3D%3Eoperation%3A%20%E5%A4%84%E7%90%86specifier%0Ae%3D%3Eend%3A%20%E8%BE%93%E5%87%BA%0A%0Ast-%3Eop1-%3Econd1(yes)-%3Econd2(yes)-%3Eop3-%3Eop4-%3Eop5-%3Eop6-%3Econd1%0Acond1(no)-%3Ee%0Acond2(no)-%3Eop2-%3Econd1%0A",preset:"vue"}),i],64)}var b=a(r,[["render",u],["__file","4.1-klib.html.vue"]]);export{b as default};
