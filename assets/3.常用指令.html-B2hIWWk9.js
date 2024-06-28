import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as i,c as l,a as n,b as c,d as p,e as s}from"./app-6RihEZ5B.js";const o={},r=s(`<h4 id="使用国内镜像源" tabindex="-1"><a class="header-anchor" href="#使用国内镜像源"><span>使用国内镜像源</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ pip3 <span class="token function">install</span> pk_name<span class="token punctuation">(</span>要安装的包<span class="token punctuation">)</span> <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Channel</th><th>URL</th></tr></thead><tbody><tr><td>阿里云</td><td>https://mirrors.aliyun.com/pypi/simple/</td></tr><tr><td>中国科技大学</td><td>https://pypi.mirrors.ustc.edu.cn/simple/</td></tr><tr><td>豆瓣</td><td>https://pypi.douban.com/simple/</td></tr><tr><td>清华大学</td><td>https://pypi.tuna.tsinghua.edu.cn/simple/</td></tr><tr><td>中国科学技术大学</td><td>https://pypi.mirrors.ustc.edu.cn/simple/</td></tr></tbody></table><h4 id="重邮镜像源" tabindex="-1"><a class="header-anchor" href="#重邮镜像源"><span>重邮镜像源</span></a></h4>`,4),d={href:"https://mirrors.cqupt.edu.cn/",target:"_blank",rel:"noopener noreferrer"},u=s(`<h4 id="查看显卡占用" tabindex="-1"><a class="header-anchor" href="#查看显卡占用"><span>查看显卡占用</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">0.1</span> <span class="token parameter variable">-d</span> nvidia-smi   <span class="token comment">#每隔0.1秒刷新一次</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="linux-文件操作-常用命令" tabindex="-1"><a class="header-anchor" href="#linux-文件操作-常用命令"><span>Linux 文件操作-常用命令</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">du</span> <span class="token parameter variable">-sh</span> *  <span class="token comment"># 查看占用空间的文件</span>
$ <span class="token function">df</span>  <span class="token comment"># 显示磁盘相关信息</span>

$ <span class="token function">ls</span>  <span class="token comment"># 列出当前文件夹内容</span>
$ <span class="token builtin class-name">cd</span> YOUR_DIR_PATH  <span class="token comment"># 进入路径</span>
$ <span class="token function">mkdir</span> YOUR_DIR_NAME  <span class="token comment"># 创建文件夹</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="conda-常用命令" tabindex="-1"><a class="header-anchor" href="#conda-常用命令"><span>conda 常用命令</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建虚拟环境</span>
$ conda create <span class="token parameter variable">-n</span> your_env_name <span class="token assign-left variable">python</span><span class="token operator">=</span>X.X（3.6、3.7、3.8 etc.）

<span class="token comment"># 激活虚拟环境</span>
$ <span class="token builtin class-name">source</span> activate your_env_name<span class="token punctuation">(</span>虚拟环境名称<span class="token punctuation">)</span> <span class="token string">&#39;or&#39;</span> $ conda activate env_name

<span class="token comment"># 退出虚拟环境</span>
$ <span class="token builtin class-name">source</span> deactivate your_env_name<span class="token punctuation">(</span>虚拟环境名称<span class="token punctuation">)</span> <span class="token string">&#39;or&#39;</span> $ conda deactivate env_name

<span class="token comment"># 查看当前存在哪些虚拟环境</span>
$ conda <span class="token function">env</span> list <span class="token string">&#39;or&#39;</span> $ conda info <span class="token parameter variable">-e</span> <span class="token string">&#39;or&#39;</span> $ conda info <span class="token parameter variable">--envs</span>
$ conda list <span class="token comment"># 查看当前环境中安装了哪些库</span>
$ conda list pk_name <span class="token comment"># 查询当前环境下的指定库的版本号</span>

<span class="token comment"># 重置虚拟环境</span>
$ conda list <span class="token parameter variable">--revisions</span>  <span class="token comment"># 查看虚拟环境版本</span>
<span class="token comment"># 重置到指定版本</span>
$ conda <span class="token function">install</span> <span class="token parameter variable">--revision</span><span class="token operator">=</span>REVNUM <span class="token string">&#39;or&#39;</span> $ conda <span class="token function">install</span> <span class="token parameter variable">--rev</span> REVNUM

<span class="token comment"># 通过已有的配置文件来创建虚拟环境</span>
$ conda <span class="token function">env</span> <span class="token builtin class-name">export</span> <span class="token operator">&gt;</span> environment.yaml <span class="token comment"># 导出当前虚拟环境</span>
$ conda <span class="token function">env</span> create <span class="token parameter variable">-f</span> environment.yaml 
<span class="token comment"># 通过已有的配置文件来创建虚拟环境,注意如果是通过其他用户的environment.yaml来创建虚拟环境,则需要提前修改一下environment.yaml文件中的&#39;prefix对应的值&#39;为当前用户可写的目录,否则会提示没有权限错误.</span>

<span class="token comment"># 删除</span>
$ conda <span class="token function">env</span> remove <span class="token parameter variable">-n</span> env_name<span class="token punctuation">(</span>虚拟环境名称<span class="token punctuation">)</span> pk_name（需删除的包名称） <span class="token comment"># 删除指定虚拟环境中的指定包</span>
$ conda remove <span class="token parameter variable">-n</span> your_env_name<span class="token punctuation">(</span>虚拟环境名称<span class="token punctuation">)</span> <span class="token parameter variable">--all</span> <span class="token comment"># 删除整个虚拟环境</span>

<span class="token comment"># 安装包</span>
$ conda <span class="token function">install</span> package_name<span class="token punctuation">(</span>包名<span class="token punctuation">)</span>
$ conda <span class="token function">install</span> package_name <span class="token parameter variable">-c</span> https://pypi.mirrors.ustc.edu.cn/simple/ <span class="token comment"># 添加安装渠道</span>
$ conda <span class="token function">install</span> <span class="token assign-left variable">pytorch</span><span class="token operator">=</span><span class="token number">1.8</span> <span class="token parameter variable">-c</span> pytorch <span class="token comment"># 安装指定版本的包</span>
$ conda <span class="token function">install</span> <span class="token parameter variable">-n</span> env_name<span class="token punctuation">(</span>环境名<span class="token punctuation">)</span> package_name<span class="token punctuation">(</span>包名<span class="token punctuation">)</span> <span class="token comment"># 在conda指定的某个环境中安装包</span>

<span class="token comment"># 更新</span>
$ conda update conda <span class="token comment"># #检查更新当前conda</span>
$ conda update anaconda <span class="token comment"># 更新anaconda</span>
$ conda update <span class="token parameter variable">--all</span> <span class="token comment"># 更新所有库</span>
$ conda update python <span class="token comment"># 更新python</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="conda虚拟环境设置环境变量" tabindex="-1"><a class="header-anchor" href="#conda虚拟环境设置环境变量"><span>conda虚拟环境设置环境变量</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ conda <span class="token function">env</span> config vars list
$ conda conda <span class="token function">env</span> config vars <span class="token builtin class-name">set</span> <span class="token assign-left variable">my_var</span><span class="token operator">=</span>value 
$ conda activate test-env  <span class="token comment"># 设置后激活确保环境变量生效 </span>
$ conda <span class="token function">env</span> config vars <span class="token builtin class-name">unset</span> my_var <span class="token parameter variable">-n</span> test-env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程查看tensorboard" tabindex="-1"><a class="header-anchor" href="#远程查看tensorboard"><span>远程查看Tensorboard</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">16006</span>:127.0.0.1:6006 username@remote_server_ip
<span class="token string">&#39;or&#39;</span> $ <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">8008</span>:localhost:6006 用户名@远程服务器ip
$ tensorboard <span class="token parameter variable">--logdir</span><span class="token operator">=</span>/path/your/log/directory/ 

<span class="token comment"># 测试未成功 2021-0117-</span>
$ tensorboard <span class="token parameter variable">--host</span> <span class="token punctuation">[</span>YOUR IP ADDR<span class="token punctuation">]</span> <span class="token parameter variable">--logdir</span> <span class="token punctuation">[</span>YOUR LOG DIR<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pycharm-自定义变量" tabindex="-1"><a class="header-anchor" href="#pycharm-自定义变量"><span>Pycharm 自定义变量</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># PyCharm -&gt; Preferences -&gt; Live Templates</span>
<span class="token number">1</span>. <span class="token string">&#39;add&#39;</span> Template Group <span class="token keyword">then</span> <span class="token string">&#39;add&#39;</span> Live Template
<span class="token number">2</span>. Abbreviation: <span class="token function">time</span>  <span class="token comment"># 触发词</span>
<span class="token number">3</span>. Template: <span class="token variable">$date</span>$  <span class="token comment"># 名称</span>
<span class="token number">4</span>. Edit variables -<span class="token operator">&gt;</span> Expression: date<span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd EEE HH:mm:ss&quot;</span><span class="token punctuation">)</span>
<span class="token number">5</span>. No applicable contexts. Define -<span class="token operator">&gt;</span> Applicable <span class="token keyword">in</span> Everywhere
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置ssh监控端口" tabindex="-1"><a class="header-anchor" href="#配置ssh监控端口"><span>配置ssh监控端口</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/ssh/sshd_config
<span class="token string">&#39;add&#39;</span> ListenAddress <span class="token number">0.0</span>.0.0:5122<span class="token punctuation">(</span>YOUR_PORT<span class="token punctuation">)</span>

<span class="token comment"># 例如：</span>
ListenAddress <span class="token number">0.0</span>.0.0:5122
ListenAddress <span class="token number">0.0</span>.0.0:22

$ <span class="token function">service</span> sshd restart  <span class="token comment"># （如果selinux不设置为disabled，则无法生效）</span>

$ <span class="token function">sudo</span> <span class="token function">netstat</span> -anp<span class="token operator">|</span><span class="token function">grep</span> sshd  <span class="token comment"># 查看端口号</span>

<span class="token comment"># 如果系统升级过ssh，即使修改配置文件/etc/ssh/sshd_config也不会生效，</span>
<span class="token comment"># 升级openssh后，配置文件被修改到/usr/local/etc/sshd_config，</span>
<span class="token comment"># 所以修改这个/usr/local/etc/sshd_config</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="校外连接" tabindex="-1"><a class="header-anchor" href="#校外连接"><span>校外连接</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>.安装VPN软件EasyConnect -<span class="token operator">&gt;</span> https://vpn.cqupt.edu.cn/
<span class="token number">2</span>.安装lemon -<span class="token operator">&gt;</span> https://lemon.qq.com（App Store版无此功能）
<span class="token number">3</span>.开机启动项中开启两个守护进程
    a.<span class="token string">&quot;com.sangfor.ECAgentProxy.plist&quot;</span>
    b.<span class="token string">&quot;com.sangfor.EasyMonitor&quot;</span>

$ <span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">5122</span> myName@hostname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令行启动向日葵" tabindex="-1"><a class="header-anchor" href="#命令行启动向日葵"><span>命令行启动向日葵</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> /usr/local/sunlogin/bin/sunloginclient  <span class="token comment"># 一般会报错</span>

<span class="token comment"># 所以换个方式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="显卡驱动相关" tabindex="-1"><a class="header-anchor" href="#显卡驱动相关"><span>显卡驱动相关</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 开机卡在 /dev/sda3：clean，***files,***blocks，且磁盘未满</span>
$ <span class="token function">sudo</span> <span class="token function">cp</span> /etc/X11/xorg.conf /etc/X11/xorg.conf_backup  
$ <span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/X11/xorg.conf  

<span class="token comment"># 安装显卡驱动</span>
-<span class="token operator">&gt;</span> 点击“软件和更新”，进入管理器，选择“附加驱动”选项卡

<span class="token comment"># 添加环境变量</span>
$ <span class="token function">sudo</span> <span class="token function">vim</span> ~/.bashrc
$ <span class="token builtin class-name">source</span> ~/.bashrc

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$LD_LIBRARY_PATH</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span><span class="token variable">$LD_LIBRARY_PATH</span>:/usr/local/cuda/lib64
<span class="token keyword">else</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/usr/local/cuda/lib64
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token environment constant">$PATH</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/cuda/bin
<span class="token keyword">else</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/cuda/bin
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$CUDA_HOME</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">CUDA_HOME</span><span class="token operator">=</span><span class="token variable">$CUDA_HOME</span>:/usr/local/cuda
<span class="token keyword">else</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">CUDA_HOME</span><span class="token operator">=</span>/usr/local/cuda
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function m(v,b){const a=t("ExternalLinkIcon");return i(),l("div",null,[r,n("p",null,[n("a",d,[c("重庆邮电大学开源镜像站 | CQUPT OpenSource Mirror"),p(a)])]),u])}const g=e(o,[["render",m],["__file","3.常用指令.html.vue"]]),f=JSON.parse(`{"path":"/coding/ubuntu/3.%E5%B8%B8%E7%94%A8%E6%8C%87%E4%BB%A4.html","title":"","lang":"en-US","frontmatter":{"description":"使用国内镜像源 重邮镜像源 重庆邮电大学开源镜像站 | CQUPT OpenSource Mirror 查看显卡占用 Linux 文件操作-常用命令 conda 常用命令 conda虚拟环境设置环境变量 远程查看Tensorboard Pycharm 自定义变量 配置ssh监控端口 校外连接 命令行启动向日葵 显卡驱动相关","head":[["meta",{"property":"og:url","content":"https://2-mo.github.io/coding/ubuntu/3.%E5%B8%B8%E7%94%A8%E6%8C%87%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"Tiu Mo's Blog"}],["meta",{"property":"og:description","content":"使用国内镜像源 重邮镜像源 重庆邮电大学开源镜像站 | CQUPT OpenSource Mirror 查看显卡占用 Linux 文件操作-常用命令 conda 常用命令 conda虚拟环境设置环境变量 远程查看Tensorboard Pycharm 自定义变量 配置ssh监控端口 校外连接 命令行启动向日葵 显卡驱动相关"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-28T11:09:57.000Z"}],["meta",{"property":"article:author","content":"Tiu Mo"}],["meta",{"property":"article:modified_time","content":"2024-06-28T11:09:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-28T11:09:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiu Mo\\",\\"url\\":\\"https://2-mo.github.io\\"}]}"]]},"headers":[{"level":3,"title":"远程查看Tensorboard","slug":"远程查看tensorboard","link":"#远程查看tensorboard","children":[]},{"level":3,"title":"Pycharm 自定义变量","slug":"pycharm-自定义变量","link":"#pycharm-自定义变量","children":[]},{"level":3,"title":"配置ssh监控端口","slug":"配置ssh监控端口","link":"#配置ssh监控端口","children":[]},{"level":3,"title":"校外连接","slug":"校外连接","link":"#校外连接","children":[]},{"level":3,"title":"命令行启动向日葵","slug":"命令行启动向日葵","link":"#命令行启动向日葵","children":[]}],"git":{"createdTime":1719572997000,"updatedTime":1719572997000,"contributors":[{"name":"2-mo","email":"1982800736@qq.com","commits":1}]},"readingTime":{"minutes":3.21,"words":964},"filePathRelative":"coding/ubuntu/3.常用指令.md","localizedDate":"June 28, 2024","excerpt":"<h4>使用国内镜像源</h4>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ pip3 <span class=\\"token function\\">install</span> pk_name<span class=\\"token punctuation\\">(</span>要安装的包<span class=\\"token punctuation\\">)</span> <span class=\\"token parameter variable\\">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple\\n</code></pre></div>","autoDesc":true}`);export{g as comp,f as data};
