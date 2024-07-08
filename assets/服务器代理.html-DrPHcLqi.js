import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as r,a as n,b as s,d as a,f as i}from"./app-ZUefdkfJ.js";const c={},o=n("h3",{id:"可以连外网的机器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可以连外网的机器"},[n("span",null,"可以连外网的机器")])],-1),p={href:"https://cloud.tencent.com/developer/article/1475747",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> tinyproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>主要改下允许连接的主机IP就可以</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/tinyproxy/tinyproxy.conf
<span class="token comment"># Allow 127.0.0.1</span>
Allow <span class="token number">10.10</span>.6.0/24
Allow <span class="token number">192.168</span>.8.0/24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动 TinyProxy</span>
$ <span class="token function">service</span> tinyproxy start

<span class="token comment"># 停止 TinyProxy</span>
$ <span class="token function">service</span> tinyproxy stop

<span class="token comment"># 重启 TinyProxy</span>
$ <span class="token function">service</span> tinyproxy restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 测试（无外网机器）</span>
$ <span class="token function">curl</span> <span class="token parameter variable">--proxy</span> <span class="token number">10.16</span>.0.81:8888 <span class="token parameter variable">-k</span> https://www.hi-linux.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内网机器" tabindex="-1"><a class="header-anchor" href="#内网机器"><span>内网机器</span></a></h3><p>临时使用：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">vim</span> <span class="token parameter variable">-o</span> Acquire::http::proxy<span class="token operator">=</span><span class="token string">&quot;http://10.16.0.81:8888/&quot;</span>

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">curl</span> <span class="token parameter variable">-o</span> Acquire::http::proxy<span class="token operator">=</span><span class="token string">&quot;http://10.16.0.81:8888/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置apt</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ sudo vim /etc/apt/apt.conf.d/proxy.conf
Acquire::http::Proxy &quot;http://(&lt;账号&gt;:&lt;密码&gt;@)10.16.0.81:8888&quot;;
Acquire::https::Proxy &quot;http://(&lt;账号&gt;:&lt;密码&gt;@)10.16.0.81:8888&quot;;

Acquire::http::Proxy &quot;http://10.16.0.81:8888&quot;;
Acquire::https::Proxy &quot;http://10.16.0.81:8888&quot;;

$ sudo apt-get update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置系统全局</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ sudo vim /etc/profile
    export http_proxy=&#39;http://代理服务器IP:端口号&#39;
    export https_proxy=&#39;http://代理服务器IP:端口号&#39;

export http_proxy=&#39;http://10.16.0.81:8888&#39;
export https_proxy=&#39;http://10.16.0.81:8888&#39;

$ source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置conda</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ sudo gedit ~/.condarc

auto_activate_base: false
ssl_verify: true
channels:
  - defaults
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
show_channel_urls: true
proxy_servers:
  https: http://10.16.0.81:8888

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置pip</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pip代理设置：（永久）

如果没有这个文件夹

mkdir $HOME/.config/.pip

sudo gedit $HOME/.config/.pip/pip.conf

添加：（经试验这里pip需要指定http）

[global]
proxy=http://10.16.0.81:8888
index-url = https://pypi.tuna.tsinghua.edu.cn/simple

pip代理：（临时）

pip install scipy==1.1.0 --proxy=&quot;http://10.16.0.81:8888&quot;

如果上述pip代理不好使，开启系统代理即可：

1.在bashrc文件中添加export http_proxy=&quot;http://127.0.0.1:19964&quot; 

2.注意需要保存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="miniconda" tabindex="-1"><a class="header-anchor" href="#miniconda"><span>miniconda</span></a></h2>`,17),v={href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>连接外网</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1:7890
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function b(h,g){const e=l("ExternalLinkIcon");return d(),r("div",null,[o,n("p",null,[n("a",p,[s("推荐一款轻量级 HTTP/HTTPS 代理 TinyProxy - 腾讯云开发者社区-腾讯云 (tencent.com)"),a(e)])]),u,n("p",null,[n("a",v,[s("https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"),a(e)])]),m])}const k=t(c,[["render",b],["__file","服务器代理.html.vue"]]),f=JSON.parse(`{"path":"/coding/ubuntu/process/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BB%A3%E7%90%86.html","title":"服务器代理","lang":"en-US","frontmatter":{"title":"服务器代理","description":"可以连外网的机器 推荐一款轻量级 HTTP/HTTPS 代理 TinyProxy - 腾讯云开发者社区-腾讯云 (tencent.com) 主要改下允许连接的主机IP就可以 内网机器 临时使用： 配置apt 配置系统全局 配置conda 配置pip miniconda https://repo.anaconda.com/miniconda/Minico...","head":[["meta",{"property":"og:url","content":"https://2-mo.github.io/coding/ubuntu/process/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BB%A3%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Tiu Mo's Blog"}],["meta",{"property":"og:title","content":"服务器代理"}],["meta",{"property":"og:description","content":"可以连外网的机器 推荐一款轻量级 HTTP/HTTPS 代理 TinyProxy - 腾讯云开发者社区-腾讯云 (tencent.com) 主要改下允许连接的主机IP就可以 内网机器 临时使用： 配置apt 配置系统全局 配置conda 配置pip miniconda https://repo.anaconda.com/miniconda/Minico..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-08T06:26:30.000Z"}],["meta",{"property":"article:author","content":"Tiu Mo"}],["meta",{"property":"article:modified_time","content":"2024-07-08T06:26:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务器代理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-08T06:26:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiu Mo\\",\\"url\\":\\"https://2-mo.github.io\\"}]}"]]},"headers":[{"level":3,"title":"可以连外网的机器","slug":"可以连外网的机器","link":"#可以连外网的机器","children":[]},{"level":3,"title":"内网机器","slug":"内网机器","link":"#内网机器","children":[]},{"level":2,"title":"miniconda","slug":"miniconda","link":"#miniconda","children":[]}],"git":{"createdTime":1720419990000,"updatedTime":1720419990000,"contributors":[{"name":"2-mo","email":"1982800736@qq.com","commits":1}]},"readingTime":{"minutes":1.22,"words":365},"filePathRelative":"coding/ubuntu/process/服务器代理.md","localizedDate":"July 8, 2024","excerpt":"<h3>可以连外网的机器</h3>\\n<p><a href=\\"https://cloud.tencent.com/developer/article/1475747\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">推荐一款轻量级 HTTP/HTTPS 代理 TinyProxy - 腾讯云开发者社区-腾讯云 (tencent.com)</a></p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt-get</span> <span class=\\"token parameter variable\\">-y</span> <span class=\\"token function\\">install</span> tinyproxy\\n</code></pre></div>","autoDesc":true}`);export{k as comp,f as data};
