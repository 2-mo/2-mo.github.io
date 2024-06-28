import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as o,a as n,b as s,d as e,e as t}from"./app-6RihEZ5B.js";const p={},u=t(`<h1 id="安装ubuntu系统" tabindex="-1"><a class="header-anchor" href="#安装ubuntu系统"><span>安装ubuntu系统</span></a></h1><h2 id="_0-准备工作" tabindex="-1"><a class="header-anchor" href="#_0-准备工作"><span>0.准备工作</span></a></h2><h3 id="_0-1-下载镜像及启动盘制作工具" tabindex="-1"><a class="header-anchor" href="#_0-1-下载镜像及启动盘制作工具"><span>0.1 下载镜像及启动盘制作工具</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 下载链接 </span>
https://ubuntu.com/download/desktop  <span class="token comment"># Ubuntu 镜像，LTS 表示长期支持版，两年更新一次</span>
https://cn.ultraiso.net/xiazai.html  <span class="token comment"># UltralISO</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_0-1-制作ubuntu启动盘" tabindex="-1"><a class="header-anchor" href="#_0-1-制作ubuntu启动盘"><span>0.1.制作Ubuntu启动盘</span></a></h3><p>u盘 需格式化为FAT32格式（有些U盘不支持，可能出问题）</p>`,6),d={href:"https://www.cnblogs.com/silentdoer/p/13044305.html",target:"_blank",rel:"noopener noreferrer"},r=n("p",null,"建议制作UEFI启动盘，后面会少很多事，而且启动时可以选择启动系统",-1),m=n("h3",{id:"mac系统使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mac系统使用"},[n("span",null,"mac系统使用")])],-1),h={href:"https://etcher.balena.io/#download-etcher",target:"_blank",rel:"noopener noreferrer"},b=t(`<h5 id="步骤如下" tabindex="-1"><a class="header-anchor" href="#步骤如下"><span>步骤如下</span></a></h5><blockquote><ol><li>使用 UltralISO 打开 Ubuntu ISO文件</li><li>点击 “启动→🛡️写入硬盘映像...”</li><li>写入方式选择USB-HDD+或者USB-HDD均可（一般用USB-HDD+） a.【隐藏启动分区最好选择无，省的以后格式化麻烦】 b.【刻录校验可要可不要】</li><li>点击 “便捷启动→写入新的驱动器引导扇区→Syslinux” a. 【这一步的作用是让开机启动时能够以U盘启动 Linux安装系统，否则U盘就相当于是存了数据而不是启动盘】 b. 【重要，这里我遇到了找到多于1个分区，而无法写入Syslinux】 i. 解决办法为在便捷启动里先选择分区表编辑器 ii. 选择第一项，然后将其至为活动状态，然后写入（提示写入成功后点击返回） iii. 注意隐藏状态不要是YES</li><li>点击“写入” ，选择“是”</li></ol></blockquote><h3 id="_0-2-前置工作" tabindex="-1"><a class="header-anchor" href="#_0-2-前置工作"><span>0.2.前置工作</span></a></h3><blockquote><ol><li><p>打开“磁盘管理”，压缩系统卷。</p></li><li><p>启动时按 （DELL-&gt;F2） 键进入 BIOS设置。确保 BIOS 设为 <strong>UEFI</strong>，禁用 <strong>Legacy option ROMS</strong> 和 <strong>secure boot</strong>。</p></li><li><p>启动时进入BIOS（DELL-&gt;F12），选择UEFI -&gt; USB启</p></li></ol></blockquote><h2 id="_1-安装ubuntu系统" tabindex="-1"><a class="header-anchor" href="#_1-安装ubuntu系统"><span>1. 安装Ubuntu系统</span></a></h2><h3 id="_1-1-安装系统" tabindex="-1"><a class="header-anchor" href="#_1-1-安装系统"><span>1.1 安装系统</span></a></h3><p>安装时有选项</p><ul><li><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ubuntu<span class="token punctuation">(</span>safa graphics<span class="token punctuation">)</span> <span class="token comment"># 选这个</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>然后跟随ubuntu安装指引安装（建议使用英文）</p><h3 id="_1-2-配置系统" tabindex="-1"><a class="header-anchor" href="#_1-2-配置系统"><span>1.2 配置系统</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">vim</span>  <span class="token comment"># vim 编辑所需</span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> net-tools  <span class="token comment"># 网络相关命令所需 </span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">screen</span>  <span class="token comment"># 远程离线运行所需</span>

$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3-pip  <span class="token comment"># pip 安装所需</span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> python3-distutils  <span class="token comment"># pip 的支持模块(可选)</span>

<span class="token comment"># 安装中文输入法（可选）</span>
$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ibus-libpinyin 
$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ibus-clutter
<span class="token comment"># 然后到设置中添加输入法，如果不成功reboot再添加</span>

<span class="token comment"># ssh 连接</span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openssh-server  <span class="token comment"># 安装ssh服务端</span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openssh-client  <span class="token comment"># 安装ssh客户端(可选)</span>
$ <span class="token function">sudo</span> /etc/init.d/ssh start  <span class="token comment"># 启动ssh服务</span>

$ <span class="token function">ip</span> a <span class="token string">&#39;or&#39;</span> $ ifconfig. <span class="token comment"># 查看ip地址</span>
<span class="token comment"># ssh 连接</span>
$ <span class="token function">ssh</span> username@ip_address

<span class="token comment"># 若重装服务器链接报错，删除 key in /Users/your_name/.ssh/known_hosts 即可</span>
$ ssh-keygen <span class="token parameter variable">-R</span> <span class="token number">172.16</span>.152.209<span class="token punctuation">(</span>your_host_ip<span class="token punctuation">)</span>

<span class="token comment"># 卸载不需要的库</span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> remove pk_name<span class="token punctuation">(</span>需要卸载的库名称<span class="token punctuation">)</span>  <span class="token comment"># 卸载 pk_name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-安装conda" tabindex="-1"><a class="header-anchor" href="#_1-3-安装conda"><span>1.3 安装conda</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 下载地址：</span>
<span class="token string">&#39;https://www.anaconda.com/products/individual#download-section&#39;</span>  <span class="token comment"># 官网地址-&gt;下载速可能较慢</span>
<span class="token string">&#39;https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/&#39;</span>  <span class="token comment"># 清华大学开源软件镜像站</span>

<span class="token comment"># 安装</span>
$ <span class="token builtin class-name">cd</span> your_software_dir  <span class="token comment"># eg: /home/leng/Downloads/</span>
$ <span class="token function">bash</span> Anaconda3-2021.05-Linux-x86_64.sh
<span class="token comment"># 然后按终端中提示安装</span>

<span class="token comment"># 修改环境变量(可选)</span>
$ <span class="token function">vim</span> ~/.bashrc
<span class="token string">&#39;add&#39;</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/home/leng/anaconda3/bin:<span class="token environment constant">$PATH</span>&quot;</span>  <span class="token comment"># 修改为anaconda3的安装路径</span>
$ <span class="token builtin class-name">source</span> ~/.bashrc

<span class="token comment"># 检查是否安装成功/查看版本</span>
$ conda <span class="token parameter variable">--version</span> <span class="token string">&#39;or&#39;</span> $ conda <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="另一种安装方式" tabindex="-1"><a class="header-anchor" href="#另一种安装方式"><span>另一种安装方式</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/Anaconda3-2019.10-Linux-x86_64.sh <span class="token comment">#从清华源上下载安装包</span>
$ <span class="token function">chmod</span> +x Anaconda3-2019.10-Linux-x86_64.sh <span class="token comment">#添加执行权限</span>
<span class="token comment">#如果想多用户使用推荐安装到/opt/anaconda3 目录中(需要sudo权限)</span>
$ <span class="token function">sudo</span> <span class="token function">bash</span> Anaconda3-2019.10-Linux-x86_64.sh <span class="token parameter variable">-b</span> <span class="token parameter variable">-p</span> /opt/anaconda3 <span class="token comment">#执行安装</span>
$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;. /opt/anaconda3/etc/profile.d/conda.sh \\n conda activate&#39;</span> <span class="token operator">|</span><span class="token function">tee</span> <span class="token parameter variable">-a</span> ~/.bashrc  <span class="token comment">#添加环境变量到当前用户的&quot;.bashrc&quot;文件中</span>

<span class="token comment">#其他用户想使用anaconda也是执行上一条相同的命令即可</span>
$ <span class="token builtin class-name">source</span> ~/.bashrc <span class="token comment">#使环境变量生效.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-ubuntu-安装-pycharm-可选" tabindex="-1"><a class="header-anchor" href="#_1-4-ubuntu-安装-pycharm-可选"><span>1.4 Ubuntu 安装 Pycharm（可选）</span></a></h3>`,16),v={href:"https://www.jetbrains.com/edu-products/download/#section=pycharm-edu",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> your_software_dir  <span class="token comment"># eg: /home/leng/Downloads/</span>
$ <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> pycharm-edu-2021.1.2.tar.gz pycharm/  <span class="token comment"># 解压文件</span>
$ <span class="token function">sudo</span> <span class="token function">mv</span> pycharm/ /opt/pycharm/

$ <span class="token function">sh</span> /opt/pycharm/pycharm-edu-2021.1.2/bin/pycharm.sh  <span class="token comment"># 启动 PyCharm(在ubuntu终端)</span>

<span class="token comment"># 然后在启动页面点击设置icon选择‘Create Desktop Entry...’ -&gt; 创建桌面图标</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function g(_,f){const a=l("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[s("使用UltralISO制作ubuntu安装u盘参考链接："),n("a",d,[s("用UltraISO制作Ubuntu16|18|20.04 U盘启动盘"),e(a)])]),r,m,n("p",null,[n("a",h,[s("https://etcher.balena.io/#download-etcher"),e(a)])]),b,n("p",null,[s("下载链接："),n("a",v,[s("Get Your Educational Tool - JetBrains"),e(a)])]),k])}const y=i(p,[["render",g],["__file","0.安装ubuntu系统.html.vue"]]),$=JSON.parse(`{"path":"/coding/ubuntu/0.%E5%AE%89%E8%A3%85ubuntu%E7%B3%BB%E7%BB%9F.html","title":"安装ubuntu系统","lang":"en-US","frontmatter":{"description":"安装ubuntu系统 0.准备工作 0.1 下载镜像及启动盘制作工具 0.1.制作Ubuntu启动盘 u盘 需格式化为FAT32格式（有些U盘不支持，可能出问题） 使用UltralISO制作ubuntu安装u盘参考链接：用UltraISO制作Ubuntu16|18|20.04 U盘启动盘 建议制作UEFI启动盘，后面会少很多事，而且启动时可以选择启动系...","head":[["meta",{"property":"og:url","content":"https://2-mo.github.io/coding/ubuntu/0.%E5%AE%89%E8%A3%85ubuntu%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:site_name","content":"Tiu Mo's Blog"}],["meta",{"property":"og:title","content":"安装ubuntu系统"}],["meta",{"property":"og:description","content":"安装ubuntu系统 0.准备工作 0.1 下载镜像及启动盘制作工具 0.1.制作Ubuntu启动盘 u盘 需格式化为FAT32格式（有些U盘不支持，可能出问题） 使用UltralISO制作ubuntu安装u盘参考链接：用UltraISO制作Ubuntu16|18|20.04 U盘启动盘 建议制作UEFI启动盘，后面会少很多事，而且启动时可以选择启动系..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-28T11:09:57.000Z"}],["meta",{"property":"article:author","content":"Tiu Mo"}],["meta",{"property":"article:modified_time","content":"2024-06-28T11:09:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装ubuntu系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-28T11:09:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiu Mo\\",\\"url\\":\\"https://2-mo.github.io\\"}]}"]]},"headers":[{"level":2,"title":"0.准备工作","slug":"_0-准备工作","link":"#_0-准备工作","children":[{"level":3,"title":"0.1 下载镜像及启动盘制作工具","slug":"_0-1-下载镜像及启动盘制作工具","link":"#_0-1-下载镜像及启动盘制作工具","children":[]},{"level":3,"title":"0.1.制作Ubuntu启动盘","slug":"_0-1-制作ubuntu启动盘","link":"#_0-1-制作ubuntu启动盘","children":[]},{"level":3,"title":"mac系统使用","slug":"mac系统使用","link":"#mac系统使用","children":[]},{"level":3,"title":"0.2.前置工作","slug":"_0-2-前置工作","link":"#_0-2-前置工作","children":[]}]},{"level":2,"title":"1. 安装Ubuntu系统","slug":"_1-安装ubuntu系统","link":"#_1-安装ubuntu系统","children":[{"level":3,"title":"1.1 安装系统","slug":"_1-1-安装系统","link":"#_1-1-安装系统","children":[]},{"level":3,"title":"1.2 配置系统","slug":"_1-2-配置系统","link":"#_1-2-配置系统","children":[]},{"level":3,"title":"1.3 安装conda","slug":"_1-3-安装conda","link":"#_1-3-安装conda","children":[]},{"level":3,"title":"1.4 Ubuntu 安装 Pycharm（可选）","slug":"_1-4-ubuntu-安装-pycharm-可选","link":"#_1-4-ubuntu-安装-pycharm-可选","children":[]}]}],"git":{"createdTime":1719572997000,"updatedTime":1719572997000,"contributors":[{"name":"2-mo","email":"1982800736@qq.com","commits":1}]},"readingTime":{"minutes":3.29,"words":988},"filePathRelative":"coding/ubuntu/0.安装ubuntu系统.md","localizedDate":"June 28, 2024","excerpt":"\\n<h2>0.准备工作</h2>\\n<h3>0.1 下载镜像及启动盘制作工具</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 下载链接 </span>\\nhttps://ubuntu.com/download/desktop  <span class=\\"token comment\\"># Ubuntu 镜像，LTS 表示长期支持版，两年更新一次</span>\\nhttps://cn.ultraiso.net/xiazai.html  <span class=\\"token comment\\"># UltralISO</span>\\n</code></pre></div>","autoDesc":true}`);export{y as comp,$ as data};
