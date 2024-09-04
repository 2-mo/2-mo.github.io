import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as t,c as l,a as e,b as n,d as p,f as d}from"./app-CVEjEd1F.js";const r={},o=e("h1",{id:"pypi-发布记录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pypi-发布记录"},[e("span",null,"PyPI 发布记录")])],-1),c={href:"https://packaging.python.org/en/latest/tutorials/packaging-projects/",target:"_blank",rel:"noopener noreferrer"},u=d(`<h2 id="_1-准备工作" tabindex="-1"><a class="header-anchor" href="#_1-准备工作"><span>1.准备工作</span></a></h2><h3 id="_1-1-注册账号" tabindex="-1"><a class="header-anchor" href="#_1-1-注册账号"><span>1.1.注册账号</span></a></h3><p>https://pypi.org 注册正式账号</p><p>https://test.pypi.org 注册测试账号（两个账号完全不通用）</p><p>双重验证（2FA）用苹果<code>自带相机</code>扫码便可获得验证码</p><p>Account setting -&gt; Add API tokens [Entire account (all projects)]</p><p><code>token及时保存，关闭页面后不再显示</code></p><p>配置<kbd>token</kbd> <mark>token</mark></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> ~/.pypirc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>testpypi<span class="token punctuation">]</span>
  username = tiu
  password = pypi<span class="token punctuation">-</span>xxxx

<span class="token punctuation">[</span>pypi<span class="token punctuation">]</span>
  username = 2<span class="token punctuation">-</span>mo
  password = pypi<span class="token punctuation">-</span>xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-2-安装依赖"><span>1.2.安装依赖</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1.更新pip</span>
$ python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> pip

<span class="token comment"># 2.安装编译工具</span>
$ python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> build

<span class="token comment"># 3.安装发布工具</span>

$ python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> twine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-项目构建" tabindex="-1"><a class="header-anchor" href="#_2-项目构建"><span>2. 项目构建</span></a></h2><h3 id="_2-1-目录结构" tabindex="-1"><a class="header-anchor" href="#_2-1-目录结构"><span>2.1.目录结构</span></a></h3><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>packaging_tutorial/
├── LICENSE
├── pyproject.toml
├── README.md
├── src/
│   └── example_package_YOUR_USERNAME_HERE/
│       ├── __init__.py
│       └── example.py
└── tests/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>pyproject.toml</code> 模版：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>project<span class="token punctuation">]</span>
name = &quot;example_package_YOUR_USERNAME_HERE&quot;
version = &quot;0.0.1&quot;
authors = <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> name=&quot;Example Author&quot;<span class="token punctuation">,</span> email=&quot;author@example.com&quot; <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
description = &quot;A small example package&quot;
readme = &quot;README.md&quot;
requires<span class="token punctuation">-</span>python = &quot;<span class="token punctuation">&gt;</span>=3.8&quot;
classifiers = <span class="token punctuation">[</span>
    <span class="token string">&quot;Programming Language :: Python :: 3&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;License :: OSI Approved :: MIT License&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Operating System :: OS Independent&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token punctuation">[</span>project.urls<span class="token punctuation">]</span>
Homepage = &quot;https<span class="token punctuation">:</span>//github.com/pypa/sampleproject&quot;
Issues = &quot;https<span class="token punctuation">:</span>//github.com/pypa/sampleproject/issues&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>LICENSE</code> 模版：</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>Copyright (c) 2018 The Python Packaging Authority

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-编译项目" tabindex="-1"><a class="header-anchor" href="#_3-编译项目"><span>3.编译项目</span></a></h2><h3 id="_3-1-编译" tabindex="-1"><a class="header-anchor" href="#_3-1-编译"><span>3.1.编译</span></a></h3><p>与 <code>pyproject.toml</code> 同级目录下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ python3 <span class="token parameter variable">-m</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>得到：</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>dist/
├── example_package_YOUR_USERNAME_HERE-0.0.1-py3-none-any.whl
└── example_package_YOUR_USERNAME_HERE-0.0.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-上传" tabindex="-1"><a class="header-anchor" href="#_3-2-上传"><span>3.2.上传</span></a></h3><h4 id="测试开发" tabindex="-1"><a class="header-anchor" href="#测试开发"><span>测试开发</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ python3 <span class="token parameter variable">-m</span> twine upload <span class="token parameter variable">--repository</span> testpypi dist/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>出现这种表示成功：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Uploading distributions to https://test.pypi.org/legacy/
Enter your username: __token__
Uploading example_package_YOUR_USERNAME_HERE-0.0.1-py3-none-any.whl
<span class="token number">100</span>% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ <span class="token number">8.2</span>/8.2 kB • 00:01 • ?
Uploading example_package_YOUR_USERNAME_HERE-0.0.1.tar.gz
<span class="token number">100</span>% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ <span class="token number">6.8</span>/6.8 kB • 00:00 • ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可在 https://test.pypi.org/project/example_package_YOUR_USERNAME_HERE 查看</p><h4 id="正式部署" tabindex="-1"><a class="header-anchor" href="#正式部署"><span>正式部署</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ twine upload dist/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-安装" tabindex="-1"><a class="header-anchor" href="#_3-3-安装"><span>3.3.安装</span></a></h3><h4 id="测试开发-1" tabindex="-1"><a class="header-anchor" href="#测试开发-1"><span>测试开发</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> --index-url https://test.pypi.org/simple/ --no-deps example-package-YOUR-USERNAME-HERE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="正式部署-1" tabindex="-1"><a class="header-anchor" href="#正式部署-1"><span>正式部署</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token punctuation">[</span>your-package<span class="token punctuation">]</span>

<span class="token comment"># 若配置了清华源等需要设置默认源</span>
$ pip <span class="token function">install</span> <span class="token punctuation">[</span>your-package<span class="token punctuation">]</span> <span class="token parameter variable">-i</span> https://pypi.org/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-本地测试" tabindex="-1"><a class="header-anchor" href="#_3-4-本地测试"><span>3.4.本地测试</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ python3 <span class="token parameter variable">-m</span> build
$ python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">-e</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function m(v,h){const a=i("ExternalLinkIcon");return t(),l("div",null,[o,e("p",null,[n("参考链接："),e("a",c,[n("Packaging Python Projects - Python Packaging User Guide"),p(a)])]),u])}const k=s(r,[["render",m],["__file","PyPI 发布记录.html.vue"]]),_=JSON.parse(`{"path":"/coooder/ubuntu/process/PyPI%20%E5%8F%91%E5%B8%83%E8%AE%B0%E5%BD%95.html","title":"PyPI 发布记录","lang":"en-US","frontmatter":{"description":"PyPI 发布记录 参考链接：Packaging Python Projects - Python Packaging User Guide 1.准备工作 1.1.注册账号 https://pypi.org 注册正式账号 https://test.pypi.org 注册测试账号（两个账号完全不通用） 双重验证（2FA）用苹果自带相机扫码便可获得验证码 ...","head":[["meta",{"property":"og:url","content":"https://2-mo.github.io/coooder/ubuntu/process/PyPI%20%E5%8F%91%E5%B8%83%E8%AE%B0%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"Tiu Mo's Blog"}],["meta",{"property":"og:title","content":"PyPI 发布记录"}],["meta",{"property":"og:description","content":"PyPI 发布记录 参考链接：Packaging Python Projects - Python Packaging User Guide 1.准备工作 1.1.注册账号 https://pypi.org 注册正式账号 https://test.pypi.org 注册测试账号（两个账号完全不通用） 双重验证（2FA）用苹果自带相机扫码便可获得验证码 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-01T07:46:43.000Z"}],["meta",{"property":"article:author","content":"Tiu Mo"}],["meta",{"property":"article:modified_time","content":"2024-09-01T07:46:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PyPI 发布记录\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-01T07:46:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiu Mo\\",\\"url\\":\\"https://2-mo.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1.准备工作","slug":"_1-准备工作","link":"#_1-准备工作","children":[{"level":3,"title":"1.1.注册账号","slug":"_1-1-注册账号","link":"#_1-1-注册账号","children":[]},{"level":3,"title":"1.2.安装依赖","slug":"_1-2-安装依赖","link":"#_1-2-安装依赖","children":[]}]},{"level":2,"title":"2. 项目构建","slug":"_2-项目构建","link":"#_2-项目构建","children":[{"level":3,"title":"2.1.目录结构","slug":"_2-1-目录结构","link":"#_2-1-目录结构","children":[]}]},{"level":2,"title":"3.编译项目","slug":"_3-编译项目","link":"#_3-编译项目","children":[{"level":3,"title":"3.1.编译","slug":"_3-1-编译","link":"#_3-1-编译","children":[]},{"level":3,"title":"3.2.上传","slug":"_3-2-上传","link":"#_3-2-上传","children":[]},{"level":3,"title":"3.3.安装","slug":"_3-3-安装","link":"#_3-3-安装","children":[]},{"level":3,"title":"3.4.本地测试","slug":"_3-4-本地测试","link":"#_3-4-本地测试","children":[]}]}],"git":{"createdTime":1720419990000,"updatedTime":1725176803000,"contributors":[{"name":"2-mo","email":"1982800736@qq.com","commits":1}]},"readingTime":{"minutes":1.9,"words":569},"filePathRelative":"coooder/ubuntu/process/PyPI 发布记录.md","localizedDate":"July 8, 2024","excerpt":"\\n<p>参考链接：<a href=\\"https://packaging.python.org/en/latest/tutorials/packaging-projects/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Packaging Python Projects - Python Packaging User Guide</a></p>\\n<h2>1.准备工作</h2>\\n<h3>1.1.注册账号</h3>\\n<p>https://pypi.org 注册正式账号</p>\\n<p>https://test.pypi.org 注册测试账号（两个账号完全不通用）</p>","autoDesc":true}`);export{k as comp,_ as data};
