import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,f as a}from"./app-PQRTICEt.js";const t={},o=a(`<h2 id="新建用户" tabindex="-1"><a class="header-anchor" href="#新建用户"><span>新建用户</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> adduser <span class="token string">&#39;USERNAME&#39;</span>
$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token string">&#39;GROUPNAME&#39;</span> <span class="token string">&#39;USERNAME&#39;</span>

<span class="token comment"># 删除用户---</span>
$ <span class="token function">sudo</span> deluser <span class="token string">&#39;USERNAME&#39;</span> <span class="token function">sudo</span>
$ <span class="token function">sudo</span> deluser --remove-home <span class="token string">&#39;USERNAME&#39;</span>
$ <span class="token function">sudo</span> deluser --remove-all-files <span class="token string">&#39;USERNAME&#39;</span>  <span class="token comment"># 删除用户所有</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迁移用户主目录命令：usermod-d /data0/home/mypic-m mypic /data0/home/mypic 为目标目录-m表示移动主目录mypic为用户名 移动后用户mypic原本默认 对应/home/mypic的主目录将被移动到/data0/home/mypic。 查看/etc/passwd文件后发现主目录已经修改成功。 注意如果要修改创建用户时候默认主目录位置，可以修改/etc/default/useradd文件中Home的路径 如将#HOME=/home 修改为HOME=/data0/home 则后续创建用户时候默认主目录创建位置即在/data0/home下面 du -slh /data0/home/mypic 查看mypic目录占用空间 df -h 查看系统使用空间状况</p>`,3),c=[o];function i(p,d){return e(),n("div",null,c)}const l=s(t,[["render",i],["__file","新建文件.html.vue"]]),u=JSON.parse(`{"path":"/coding/ubuntu/tinyrecord/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6.html","title":"","lang":"en-US","frontmatter":{"description":"新建用户 迁移用户主目录命令：usermod-d /data0/home/mypic-m mypic /data0/home/mypic 为目标目录-m表示移动主目录mypic为用户名 移动后用户mypic原本默认 对应/home/mypic的主目录将被移动到/data0/home/mypic。 查看/etc/passwd文件后发现主目录已经修改成功。...","head":[["meta",{"property":"og:url","content":"https://2-mo.github.io/coding/ubuntu/tinyrecord/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"Tiu Mo's Blog"}],["meta",{"property":"og:description","content":"新建用户 迁移用户主目录命令：usermod-d /data0/home/mypic-m mypic /data0/home/mypic 为目标目录-m表示移动主目录mypic为用户名 移动后用户mypic原本默认 对应/home/mypic的主目录将被移动到/data0/home/mypic。 查看/etc/passwd文件后发现主目录已经修改成功。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-05T17:25:52.000Z"}],["meta",{"property":"article:author","content":"Tiu Mo"}],["meta",{"property":"article:modified_time","content":"2024-08-05T17:25:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-05T17:25:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiu Mo\\",\\"url\\":\\"https://2-mo.github.io\\"}]}"]]},"headers":[{"level":2,"title":"新建用户","slug":"新建用户","link":"#新建用户","children":[]}],"git":{"createdTime":1720419990000,"updatedTime":1722878752000,"contributors":[{"name":"2-mo","email":"1982800736@qq.com","commits":2}]},"readingTime":{"minutes":0.66,"words":199},"filePathRelative":"coding/ubuntu/tinyrecord/新建文件.md","localizedDate":"July 8, 2024","excerpt":"<h2>新建用户</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">sudo</span> adduser <span class=\\"token string\\">'USERNAME'</span>\\n$ <span class=\\"token function\\">sudo</span> <span class=\\"token function\\">usermod</span> <span class=\\"token parameter variable\\">-aG</span> <span class=\\"token string\\">'GROUPNAME'</span> <span class=\\"token string\\">'USERNAME'</span>\\n\\n<span class=\\"token comment\\"># 删除用户---</span>\\n$ <span class=\\"token function\\">sudo</span> deluser <span class=\\"token string\\">'USERNAME'</span> <span class=\\"token function\\">sudo</span>\\n$ <span class=\\"token function\\">sudo</span> deluser --remove-home <span class=\\"token string\\">'USERNAME'</span>\\n$ <span class=\\"token function\\">sudo</span> deluser --remove-all-files <span class=\\"token string\\">'USERNAME'</span>  <span class=\\"token comment\\"># 删除用户所有</span>\\n</code></pre></div>","autoDesc":true}`);export{l as comp,u as data};
