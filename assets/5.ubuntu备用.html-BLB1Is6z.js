import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c,a as n,b as s,d as e,e as t}from"./app-6RihEZ5B.js";const d={},u={start:"3"},p=n("li",null,"安装ubuntu（双系统选择'其它选项'）[如何在戴尔PC上作为双启动安装Ubuntu和Windows 8或10 | Dell 中国](https://www.dell.com/support/kbdoc/zh-cn/000131253/如何安装-ubuntu-8-dell#step 13)",-1),r={href:"https://blog.csdn.net/m0_54792870/article/details/112980817",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,"安装cuda https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=Ubuntu&target_version=20.04&target_type=deb_local",-1),v=t(`<h3 id="_7-挂载磁盘" tabindex="-1"><a class="header-anchor" href="#_7-挂载磁盘"><span>7.挂载磁盘</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有磁盘</span>
$ <span class="token function">sudo</span> <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>

<span class="token comment"># 查询UUID</span>
$ <span class="token function">sudo</span> blkid /dev/sda3

<span class="token comment"># 编辑/etc/fstab</span>
$ <span class="token function">sudo</span> gedit /etc/fstab <span class="token comment"># 或者用vim</span>

<span class="token comment"># &lt;file system&gt; &lt;mount point&gt; &lt;type&gt; &lt;options&gt; &lt;dump&gt; &lt;pass&gt;</span>
<span class="token string">&#39;add&#39;</span> <span class="token assign-left variable">UUID</span><span class="token operator">=</span>eb7568d0-fa94-4a1a-9fe6-75ff37faa310 /home/leng/NewDisk ext4 defaults <span class="token number">0</span> <span class="token number">2</span>

<span class="token comment"># 查看挂载</span>
$ <span class="token function">sudo</span> <span class="token function">mount</span> <span class="token parameter variable">-a</span>  <span class="token comment"># 挂载后原来文件夹中的东西覆盖，取消挂载才能看到</span>
$ <span class="token function">df</span> <span class="token parameter variable">-h</span> <span class="token comment"># 查看挂载</span>

$ <span class="token function">du</span> <span class="token parameter variable">-sh</span>  <span class="token comment"># 查看当前文件夹大小</span>

<span class="token comment"># 移除挂载</span>
$ <span class="token function">sudo</span> <span class="token function">umount</span> /dev/sda3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 复制 /home 至 / </span>
$ <span class="token function">mkdir</span> home_bak
$ <span class="token function">cp</span> <span class="token parameter variable">-Rvp</span> /home /home_bak

<span class="token comment"># 取消/home分区的挂载</span>
$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/fstab

<span class="token string">&#39;#&#39;</span> <span class="token assign-left variable">UUID</span><span class="token operator">=</span>eb7568d0-fa94-4a1a-9fe6-75ff37faa310 /home/leng/NewDisk ext4 defaults <span class="token number">0</span> <span class="token number">2</span>
$ <span class="token function">umount</span> /home
$ <span class="token function">mv</span> home_bak home
$ <span class="token function">umount</span> /home

$ <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-切换cuda版本" tabindex="-1"><a class="header-anchor" href="#_8-切换cuda版本"><span>8.切换CUDA版本</span></a></h3><p>https://blog.csdn.net/u013905398/article/details/103799621</p><p>更新软链接</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> /usr/local/
$ <span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> cuda
$ <span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/cuda-11.3 /usr/local/cuda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在home/下修改.bashrc的注释，即环境变量</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># # for CUDA 8.0</span>
<span class="token comment"># export PATH=/usr/local/cuda-8.0/bin:$PATH </span>
<span class="token comment"># export LD_LIBRARY_PATH=/usr/local/cuda-8.0/lib64/$LD_LIBRARY_PATH</span>

<span class="token comment"># export LD_LIBRARY_PATH=”$LD_LIBRARY_PATH:/usr/local/cuda/lib64”</span>
<span class="token comment"># export CUDA_HOME=/usr/local/cuda</span>

<span class="token comment"># added by cuda 11.3 installer</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/usr/local/cuda-11.3/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/cuda-11.3/lib64:<span class="token variable">$LD_LIBRARY_PATH</span>&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CUDA_HOME</span><span class="token operator">=</span>/usr/local/cuda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>然后更新 .bashrc</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">source</span> .bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>遇到的问题：</p><p>Failed to initialize NVML: Driver/library version mismatch</p><p>重启就好了</p><h3 id="创建新用户" tabindex="-1"><a class="header-anchor" href="#创建新用户"><span>创建新用户</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> adduser xxxx
$ <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">sudo</span> username  <span class="token comment"># 添加到 sudo 组</span>
$ <span class="token function">su</span> - username  <span class="token comment"># 切换用户</span>
$ <span class="token function">sudo</span> <span class="token function">whoami</span> <span class="token comment"># 显示当前</span>
$ <span class="token function">sudo</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span> /root  <span class="token comment"># 测试权限</span>

$ <span class="token function">sudo</span> deluser <span class="token variable"><span class="token variable">\`</span>username<span class="token variable">\`</span></span> <span class="token function">sudo</span>

$ <span class="token function">sudo</span> deluser --remove-home tt
$ <span class="token function">sudo</span> deluser --remove-all-files tt  <span class="token comment"># 删除用户所有</span>


Ubuntu更改密码步骤：
 <span class="token number">1</span>、进入Ubuntu，打开一个终端，输入 <span class="token function">sudo</span> su转为root用户。 注意，必须先转为root用户！！！
 <span class="token number">2</span>、sudo <span class="token function">passwd</span> user<span class="token punctuation">(</span>user 是对应的用户名<span class="token punctuation">)</span>
 <span class="token number">3</span>、输入新密码，确认密码。
 <span class="token number">4</span>、修改密码成功，重启，输入新密码进入Ubuntu。



Ubuntu更改用户名步骤：
 <span class="token number">1</span>、进入Ubuntu，打开一个终端，输入 <span class="token function">sudo</span> su转为root用户。 注意，必须先转为root用户！！！
 <span class="token number">2</span>、gedit /etc/passwd ,找到代表你的那一行，修改用户名为新的用户名。 注意：只修改用户名！后面的全名、目录等不要动！
 <span class="token number">3</span>、gedit /etc/shadow，找到代表你的那一行，修改用户名为新用户名
 <span class="token number">4</span>、gedit /etc/group，你应该发现你的用户名在很多个组中，全部修改！
 <span class="token number">5</span>、修改完，保存，重启。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),b={id:"在linux-ubuntu-下安装arial、times-new-roman等字体",tabindex:"-1"},h={class:"header-anchor",href:"#在linux-ubuntu-下安装arial、times-new-roman等字体"},k={href:"https://www.cnblogs.com/xia-weiwen/p/10336896.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>在Linux下做文档、作图的时候，可能需要用到Arial和Times New Roman等字体。但是由于版权问题，Linux一般是不直接提供这些字体的。</p><p>注意字体也是有版权的！不过有版权也不代表一定会收费。</p><p>如何安装呢？</p><p>以Ubuntu为例，执行以下指令即可：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ttf-mscorefonts-installer <span class="token comment"># 安装</span>
$ <span class="token function">sudo</span> fc-cache <span class="token comment"># 生效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>由于前面提到版权问题，虽然这部分字体不收费，但是安装时需要用户同意一些协议，同意即可。</p><p>执行完成后，用以下指令确认成功：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ fc-match Arial <span class="token comment"># 查看Arial</span>
$ fc-match Times <span class="token comment"># 查看Times New Roman</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，如果有字体查看器，可以直接去查看。<br> 再或者，如果有编辑器之类的软件，可以在选择字体列表里看到新出现的字体。</p><p>需要使用这些字体的软件，如果在安装之前就打开了，那么安装完字体后，这些软件需要重启才能看到新安装的字体。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># findfont: Font family [&#39;Times New Roman&#39;] not found. </span>
<span class="token comment"># Falling back to DejaVu Sans.</span>

$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> font-manager
$ <span class="token function">rm</span> ~/.cache/matplotlib <span class="token parameter variable">-rf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换到root账户" tabindex="-1"><a class="header-anchor" href="#切换到root账户"><span>切换到root账户</span></a></h3><p>因为修改普通账户的用户名，所以建议切换到<code>root</code>用户，这样可以避免一些权限的问题和其他不必要的影响。新申请或安装的机器<code>root</code>用户是没有密码的，所以可以先为<code>root</code>账户设置密码：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 如果设置了密码可跳过此步</span>
ubuntu@VM-0-4-ubuntu:~$ <span class="token function">sudo</span> <span class="token function">passwd</span> root
<span class="token comment"># 为用户修改密码也可以使用此命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后切换到<code>root</code>用户(需要输入密码）：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ubuntu@VM-0-4-ubuntu:~$ <span class="token function">su</span> root
Password:
root@VM-0-4-ubuntu:/home/ubuntu<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改用户名" tabindex="-1"><a class="header-anchor" href="#修改用户名"><span>修改用户名</span></a></h3><p>修改用户名我们需要进行四步操作：</p><h4 id="_1-修改-etc-passwd文件-vim-etc-passwd" tabindex="-1"><a class="header-anchor" href="#_1-修改-etc-passwd文件-vim-etc-passwd"><span>1.修改<code>/etc/passwd</code>文件: <code>vim /etc/passwd</code></span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>\`\`<span class="token variable"><span class="token variable">\`</span><span class="token function">bash</span>
ubuntu:x:500:500::/home/ubuntu:/bin/bash
<span class="token comment"># 把用户名ubuntu改成：你想要的用户名，其他都不要修改</span>
test:x:500:500::/home/test:/bin/bash
<span class="token comment"># 打开文件后回发现很多内容，可以利用替换指令进行修改</span>
<span class="token comment"># :1,$s/ubuntu/test/g</span>
<span class="token comment"># 解释: 替换第 1 行开始到最后一行中每一行所有 ubuntu 为 test</span>
<span class="token variable">\`</span></span>\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后输入<code>:wq!</code>保存退出</p><p><em>ps：这里网上有帖子说用<code>gedit</code>进行修改，不过在新申请或安装的机器中是没有<code>gedit</code>的，所以可以使用<code>vim/vi</code>来代替</em></p><h4 id="_2-修改-etc-shadow文件-vim-etc-shadow" tabindex="-1"><a class="header-anchor" href="#_2-修改-etc-shadow文件-vim-etc-shadow"><span>2.修改<code>/etc/shadow</code>文件: <code>vim /etc/shadow</code></span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ubunt:<span class="token variable">$6</span><span class="token variable">$ULolz</span><span class="token punctuation">..</span>.EMVYj/:18222:0:99999:7:::
<span class="token comment"># 把用户名ubuntu改成：你想要的用户名，其他都不要修改</span>
test:<span class="token variable">$6</span><span class="token variable">$ULolz</span><span class="token punctuation">..</span>.EMVYj/:18222:0:99999:7:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-修改-etc-group文件-vim-etc-group" tabindex="-1"><a class="header-anchor" href="#_3-修改-etc-group文件-vim-etc-group"><span>3.修改<code>/etc/group</code>文件: <code>vim /etc/group</code></span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ubunt:x:1:root,bin,ubuntu
<span class="token comment">#...</span>
<span class="token comment"># 这个文件中的原用户名有很多，可以使用第一步中提到的替换指令修改:</span>
:1,<span class="token variable">$s</span>/ubuntu/test/g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-修改用户目录" tabindex="-1"><a class="header-anchor" href="#_4-修改用户目录"><span>4.修改用户目录</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mv</span> /home/ubuntu /home/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，我们就修改完用户名了，可以切换到新的用户名测试一下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@VM-0-4-ubuntu:~$ <span class="token function">su</span> <span class="token builtin class-name">test</span>
test@VM-0-4-ubuntu:~$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>作者：云中的Jason 链接：https://www.jianshu.com/p/170521ab7403 来源：简书 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>`,31);function f(_,x){const a=l("ExternalLinkIcon");return o(),c("div",null,[n("ol",u,[p,n("li",null,[s("安装显卡驱动"),n("a",r,[s("Ubuntu安装显卡驱动详细步骤_m0_54792870的博客-CSDN博客"),e(a)])]),m]),v,n("h1",b,[n("a",h,[n("span",null,[n("a",k,[s("在Linux（Ubuntu）下安装Arial、Times New Roman等字体"),e(a)])])])]),g])}const U=i(d,[["render",f],["__file","5.ubuntu备用.html.vue"]]),A=JSON.parse(`{"path":"/coding/ubuntu/5.ubuntu%E5%A4%87%E7%94%A8.html","title":"在Linux（Ubuntu）下安装Arial、Times New Roman等字体","lang":"en-US","frontmatter":{"description":"安装ubuntu（双系统选择'其它选项'）[如何在戴尔PC上作为双启动安装Ubuntu和Windows 8或10 | Dell 中国](https://www.dell.com/support/kbdoc/zh-cn/000131253/如何安装-ubuntu-8-dell#step 13) 安装显卡驱动Ubuntu安装显卡驱动详细步骤_m0_5479...","head":[["meta",{"property":"og:url","content":"https://2-mo.github.io/coding/ubuntu/5.ubuntu%E5%A4%87%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Tiu Mo's Blog"}],["meta",{"property":"og:title","content":"在Linux（Ubuntu）下安装Arial、Times New Roman等字体"}],["meta",{"property":"og:description","content":"安装ubuntu（双系统选择'其它选项'）[如何在戴尔PC上作为双启动安装Ubuntu和Windows 8或10 | Dell 中国](https://www.dell.com/support/kbdoc/zh-cn/000131253/如何安装-ubuntu-8-dell#step 13) 安装显卡驱动Ubuntu安装显卡驱动详细步骤_m0_5479..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-28T11:09:57.000Z"}],["meta",{"property":"article:author","content":"Tiu Mo"}],["meta",{"property":"article:modified_time","content":"2024-06-28T11:09:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在Linux（Ubuntu）下安装Arial、Times New Roman等字体\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-28T11:09:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiu Mo\\",\\"url\\":\\"https://2-mo.github.io\\"}]}"]]},"headers":[{"level":3,"title":"7.挂载磁盘","slug":"_7-挂载磁盘","link":"#_7-挂载磁盘","children":[]},{"level":3,"title":"8.切换CUDA版本","slug":"_8-切换cuda版本","link":"#_8-切换cuda版本","children":[]},{"level":3,"title":"创建新用户","slug":"创建新用户","link":"#创建新用户","children":[]},{"level":3,"title":"切换到root账户","slug":"切换到root账户","link":"#切换到root账户","children":[]},{"level":3,"title":"修改用户名","slug":"修改用户名","link":"#修改用户名","children":[]}],"git":{"createdTime":1719572997000,"updatedTime":1719572997000,"contributors":[{"name":"2-mo","email":"1982800736@qq.com","commits":1}]},"readingTime":{"minutes":4.69,"words":1406},"filePathRelative":"coding/ubuntu/5.ubuntu备用.md","localizedDate":"June 28, 2024","excerpt":"<ol start=\\"3\\">\\n<li>安装ubuntu（双系统选择'其它选项'）[如何在戴尔PC上作为双启动安装Ubuntu和Windows 8或10 | Dell 中国](https://www.dell.com/support/kbdoc/zh-cn/000131253/如何安装-ubuntu-8-dell#step 13)</li>\\n<li>安装显卡驱动<a href=\\"https://blog.csdn.net/m0_54792870/article/details/112980817\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Ubuntu安装显卡驱动详细步骤_m0_54792870的博客-CSDN博客</a></li>\\n<li>安装cuda https://developer.nvidia.com/cuda-downloads?target_os=Linux&amp;target_arch=x86_64&amp;Distribution=Ubuntu&amp;target_version=20.04&amp;target_type=deb_local</li>\\n</ol>","autoDesc":true}`);export{U as comp,A as data};
