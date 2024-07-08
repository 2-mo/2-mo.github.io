import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,f as e}from"./app-ZUefdkfJ.js";const t={},i=e(`<h1 id="ubuntu-配置-git-服务器" tabindex="-1"><a class="header-anchor" href="#ubuntu-配置-git-服务器"><span><code>ubuntu</code> 配置 <code>git</code> 服务器</span></a></h1><h2 id="远程服务器设置" tabindex="-1"><a class="header-anchor" href="#远程服务器设置"><span>远程服务器设置</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span> <span class="token comment"># 安装git</span>
<span class="token function">sudo</span> adduser <span class="token function">git</span> <span class="token comment"># 创建一个git用户, 用来运行git服务</span>

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gitweb
https://github.com/kogakure/gitweb-theme  <span class="token comment"># 主题地址</span>
https://blog.csdn.net/weixin_34008933/article/details/92391431  <span class="token comment"># 教程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>收集所有需要登录的用户的公钥，就是他们自己的 <code>id_rsa.pub</code> 文件， 把所有公钥导入到 <code>/home/git/.ssh/authorized_keys</code> 文件里，一行一个</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/git
<span class="token function">sudo</span> <span class="token function">git</span> init <span class="token parameter variable">--bare</span> Visual-Lab
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> git:git Visual-Lab
<span class="token builtin class-name">cd</span> Visual-Lab
<span class="token function">sudo</span> <span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出于安全考虑，创建的git用户不允许登录shell</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 <code>git:x:1001:1001:,,,:/home/git:/bin/bash</code> 为 <code>git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell</code></p><p>这样，git用户可以正常通过ssh使用git，但无法登录shell，因为我们为git用户指定的git-shell每次一登录就自动退出.</p><p>远程仓库地址为 <code>git@server:/data/git/sample.git</code></p><h2 id="用户权限管理工具" tabindex="-1"><a class="header-anchor" href="#用户权限管理工具"><span>用户权限管理工具</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> python-setuptools  
<span class="token function">git</span> clone https://github.com/res0nat0r/gitosis.git  
<span class="token builtin class-name">cd</span> gitosis/
<span class="token function">sudo</span> python setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="本地设置" tabindex="-1"><a class="header-anchor" href="#本地设置"><span>本地设置</span></a></h3><p>设置git用户名及邮箱</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;mo1031@live.com&quot;</span> 
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name USER_NAME
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email USER_EMAIL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># git clone git@server:/srv/sample.git</span>
<span class="token function">git</span> clone git@10.16.104.13:/data/git/Visual-Lab.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑权限</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /home/git/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),l=[i];function o(c,d){return n(),a("div",null,l)}const r=s(t,[["render",o],["__file","git_server.html.vue"]]),g=JSON.parse(`{"path":"/coding/ubuntu/base/git_server.html","title":"ubuntu 配置 git 服务器","lang":"en-US","frontmatter":{"description":"ubuntu 配置 git 服务器 远程服务器设置 收集所有需要登录的用户的公钥，就是他们自己的 id_rsa.pub 文件， 把所有公钥导入到 /home/git/.ssh/authorized_keys 文件里，一行一个 出于安全考虑，创建的git用户不允许登录shell 修改 git:x:1001:1001:,,,:/home/git:/bin/...","head":[["meta",{"property":"og:url","content":"https://2-mo.github.io/coding/ubuntu/base/git_server.html"}],["meta",{"property":"og:site_name","content":"Tiu Mo's Blog"}],["meta",{"property":"og:title","content":"ubuntu 配置 git 服务器"}],["meta",{"property":"og:description","content":"ubuntu 配置 git 服务器 远程服务器设置 收集所有需要登录的用户的公钥，就是他们自己的 id_rsa.pub 文件， 把所有公钥导入到 /home/git/.ssh/authorized_keys 文件里，一行一个 出于安全考虑，创建的git用户不允许登录shell 修改 git:x:1001:1001:,,,:/home/git:/bin/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-08T06:26:30.000Z"}],["meta",{"property":"article:author","content":"Tiu Mo"}],["meta",{"property":"article:modified_time","content":"2024-07-08T06:26:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ubuntu 配置 git 服务器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-08T06:26:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiu Mo\\",\\"url\\":\\"https://2-mo.github.io\\"}]}"]]},"headers":[{"level":2,"title":"远程服务器设置","slug":"远程服务器设置","link":"#远程服务器设置","children":[]},{"level":2,"title":"用户权限管理工具","slug":"用户权限管理工具","link":"#用户权限管理工具","children":[{"level":3,"title":"本地设置","slug":"本地设置","link":"#本地设置","children":[]}]}],"git":{"createdTime":1720419990000,"updatedTime":1720419990000,"contributors":[{"name":"2-mo","email":"1982800736@qq.com","commits":1}]},"readingTime":{"minutes":0.94,"words":282},"filePathRelative":"coding/ubuntu/base/git_server.md","localizedDate":"July 8, 2024","excerpt":"\\n<h2>远程服务器设置</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt-get</span> <span class=\\"token function\\">install</span> <span class=\\"token function\\">git</span> <span class=\\"token comment\\"># 安装git</span>\\n<span class=\\"token function\\">sudo</span> adduser <span class=\\"token function\\">git</span> <span class=\\"token comment\\"># 创建一个git用户, 用来运行git服务</span>\\n\\n<span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt</span> <span class=\\"token function\\">install</span> gitweb\\nhttps://github.com/kogakure/gitweb-theme  <span class=\\"token comment\\"># 主题地址</span>\\nhttps://blog.csdn.net/weixin_34008933/article/details/92391431  <span class=\\"token comment\\"># 教程</span>\\n</code></pre></div>","autoDesc":true}`);export{r as comp,g as data};
