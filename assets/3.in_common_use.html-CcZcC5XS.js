import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as t,a as n,b as c,d as p,f as s}from"./app-xx3uLWHx.js";const o={},d=s(`<h4 id="使用国内镜像源" tabindex="-1"><a class="header-anchor" href="#使用国内镜像源"><span>使用国内镜像源</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ pip3 <span class="token function">install</span> pk_name<span class="token punctuation">(</span>要安装的包<span class="token punctuation">)</span> <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Channel</th><th>URL</th></tr></thead><tbody><tr><td>阿里云</td><td>https://mirrors.aliyun.com/pypi/simple/</td></tr><tr><td>中国科技大学</td><td>https://pypi.mirrors.ustc.edu.cn/simple/</td></tr><tr><td>豆瓣</td><td>https://pypi.douban.com/simple/</td></tr><tr><td>清华大学</td><td>https://pypi.tuna.tsinghua.edu.cn/simple/</td></tr><tr><td>中国科学技术大学</td><td>https://pypi.mirrors.ustc.edu.cn/simple/</td></tr></tbody></table><h4 id="重邮镜像源" tabindex="-1"><a class="header-anchor" href="#重邮镜像源"><span>重邮镜像源</span></a></h4>`,4),r={href:"https://mirrors.cqupt.edu.cn/",target:"_blank",rel:"noopener noreferrer"},u=s(`<h4 id="查看显卡占用" tabindex="-1"><a class="header-anchor" href="#查看显卡占用"><span>查看显卡占用</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">0.1</span> <span class="token parameter variable">-d</span> nvidia-smi   <span class="token comment">#每隔0.1秒刷新一次</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="linux-文件操作-常用命令" tabindex="-1"><a class="header-anchor" href="#linux-文件操作-常用命令"><span>Linux 文件操作-常用命令</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">du</span> <span class="token parameter variable">-sh</span> *  <span class="token comment"># 查看占用空间的文件</span>
$ <span class="token function">df</span>  <span class="token comment"># 显示磁盘相关信息</span>

$ <span class="token function">ls</span>  <span class="token comment"># 列出当前文件夹内容</span>
$ <span class="token builtin class-name">cd</span> YOUR_DIR_PATH  <span class="token comment"># 进入路径</span>
$ <span class="token function">mkdir</span> YOUR_DIR_NAME  <span class="token comment"># 创建文件夹</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程查看tensorboard" tabindex="-1"><a class="header-anchor" href="#远程查看tensorboard"><span>远程查看Tensorboard</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token parameter variable">-L</span> <span class="token number">16006</span>:127.0.0.1:6006 username@remote_server_ip
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="显卡驱动相关" tabindex="-1"><a class="header-anchor" href="#显卡驱动相关"><span>显卡驱动相关</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 开机卡在 /dev/sda3：clean，***files,***blocks，且磁盘未满</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-挂载磁盘" tabindex="-1"><a class="header-anchor" href="#_7-挂载磁盘"><span>7.挂载磁盘</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看分区</span>
<span class="token function">sudo</span> <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>  

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>然后更新 .bashrc</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cp</span> /home/gaoxb/.bashrc /home/chentaiyue/.bashrc
$ <span class="token builtin class-name">source</span> .bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>遇到的问题：</p><p>Failed to initialize NVML: Driver/library version mismatch</p><p>重启就好了</p><h3 id="创建新用户" tabindex="-1"><a class="header-anchor" href="#创建新用户"><span>创建新用户</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> adduser xxxx
$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">sudo</span> username  <span class="token comment"># 添加到 sudo 组</span>
$ <span class="token function">sudo</span> deluser username <span class="token function">sudo</span>  <span class="token comment"># 从sudo组移除</span>

$ getent group <span class="token function">sudo</span>  <span class="token comment"># 查看所有sudo 用户</span>
$ <span class="token function">groups</span> user_name  <span class="token comment"># 查看单个用户组</span>

$ <span class="token function">cp</span> /home/gaoxb/.bashrc /home/chentaiyue/.bashrc
$ <span class="token builtin class-name">source</span> .bashrc
$ <span class="token function">sudo</span> addgroup groupname
$ <span class="token function">sudo</span> adduser username groupname

$ <span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token number">1000</span>:1012 /opt/anaconda3


$ <span class="token function">su</span> - username  <span class="token comment"># 切换用户</span>
$ <span class="token function">sudo</span> <span class="token function">whoami</span> <span class="token comment"># 显示当前</span>
$ <span class="token function">sudo</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span> /root  <span class="token comment"># 测试权限</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="限制用户" tabindex="-1"><a class="header-anchor" href="#限制用户"><span>限制用户</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">who</span> <span class="token comment"># 查看当前在线用户</span>

<span class="token comment"># 限制用户内存</span>
$ <span class="token function">sudo</span> <span class="token function">vi</span> /etc/security/limits.conf 

<span class="token string">&#39;add&#39;</span>
* hard core <span class="token number">0</span> 
* hard rss <span class="token number">5000000</span>  <span class="token comment"># 单位为kb </span>
* hard nproc <span class="token number">20</span> 

$ <span class="token function">sudo</span> <span class="token function">vi</span> /etc/pam.d/login

<span class="token string">&#39;add&#39;</span>
session required /lib/security/pam_limits.so 

<span class="token comment"># 退出账户在重新登陆，使用下述命令可以查看内存配额</span>
$ <span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-a</span>

<span class="token comment"># 限制用户磁盘空间</span>

<span class="token comment"># touch /home/quota.user</span>
<span class="token comment"># touch /home/quota.group</span>
<span class="token comment"># chmod 600 /home/quota.user</span>
<span class="token comment"># chmod 600 /home/quota.group</span>
<span class="token comment"># quotacheck -acugvm</span>

Once done, perform the fix quotas script again.

<span class="token comment"># /scripts/fixquotas –force</span>

https://www.cnblogs.com/GodZhe/p/10911635.html

$ <span class="token function">sync</span>  <span class="token comment"># 释放内存</span>
$ <span class="token function">free</span> <span class="token parameter variable">-m</span> <span class="token comment"># 查看内存 </span>

systemctl restart lighdm  <span class="token comment"># 重启显示</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ssh</span> gaorui@10.16.125.247
<span class="token function">ssh</span> guest@10.16.74.91

put 源文件位置 目标位置
get 源文件位置 目标位置

<span class="token function">scp</span> <span class="token parameter variable">-p</span> 源文件位置 主机名@IP地址：目标位置

RTX A6000

<span class="token number">169.254</span>.82.253

0102768	
WDcqupt19900910

<span class="token function">sudo</span> adduser username
<span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">sudo</span> username

<span class="token function">docker</span> pull
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> 容器名字 <span class="token parameter variable">-idt</span> 镜像id
<span class="token function">docker</span> restart 容器名字
<span class="token function">docker</span> attach 容器名字
<span class="token function">docker</span> commit 容器id 新镜像名：tag
<span class="token function">docker</span> save 镜像名 <span class="token parameter variable">-o</span> 压缩包名


<span class="token function">vim</span> name.txt                         打开文件

lspci <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> vga                   查看显卡
nvcc <span class="token parameter variable">-V</span>                                  查看cuda
nvidia-smi

<span class="token function">du</span> <span class="token parameter variable">-sh</span> *                                  查看占用空间大小

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span>                                 创建文件夹
<span class="token function">cp</span> <span class="token parameter variable">-r</span> a.file b.file                       复制
<span class="token function">mv</span> a.file b.file                          移动

<span class="token builtin class-name">echo</span> 内容<span class="token operator">&gt;&gt;</span>文件
<span class="token function">touch</span> 文件名

<span class="token function">unzip</span> a.file <span class="token parameter variable">-d</span> path                   解压
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> a.tar                               解压
<span class="token function">tar</span> <span class="token parameter variable">-zcvf</span> 新路径  打包目录          压缩

chomd a+u                             （降低）更改权限
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/abs/xxx/g&#39;</span> <span class="token function">file</span>              修改文件内容（abs为被替换内容，xxx为替换内容）

<span class="token builtin class-name">source</span> ~/.bashrc
<span class="token function">vi</span> ~/.condarc

dos2unix xxx.sh                     将windows脚本转化为linux脚本

<span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">0.5</span> <span class="token parameter variable">-d</span> nvidia-smi

tmux new <span class="token parameter variable">-s</span> roclinux 新窗口
Ctrl+B；C                  新窗口
Ctrl+B；d                  退出
tmux <span class="token function">ls</span>                      查看
tmux a <span class="token parameter variable">-t</span> roclinux      恢复


os.path.dirname<span class="token punctuation">(</span><span class="token punctuation">)</span> 去掉文件名，返回目录
os.path.abspath<span class="token punctuation">(</span><span class="token punctuation">)</span> 返回绝对目录
os.listdir<span class="token punctuation">(</span><span class="token punctuation">)</span>             返回当前文件夹下的子目录
A.endswith<span class="token punctuation">(</span><span class="token string">&#39;s&#39;</span><span class="token punctuation">)</span>        判断文件A的格式是否是s

lambda x: x

np.fromfile<span class="token punctuation">(</span>file_path, <span class="token assign-left variable">dtype</span><span class="token operator">=</span> , <span class="token assign-left variable">count</span><span class="token operator">=</span>-1<span class="token punctuation">)</span>读取bin文件
np.setdiff1d<span class="token punctuation">(</span><span class="token punctuation">[</span>A<span class="token punctuation">]</span>,<span class="token punctuation">[</span>B<span class="token punctuation">]</span><span class="token punctuation">)</span>   B中没有而A中有的元素
np.squeeze<span class="token punctuation">(</span>A, <span class="token assign-left variable">axis</span><span class="token operator">=</span><span class="token punctuation">)</span> 删除A的维度等于1的维度
np.expand_dims<span class="token punctuation">(</span>A, i<span class="token punctuation">)</span> 对矩阵A在i维度上增加一个维度
x<span class="token punctuation">[</span>:, np.newaxis, :, :<span class="token punctuation">]</span>    增加维度
np.concatenate<span class="token punctuation">((</span>a,b,<span class="token punctuation">..</span>.<span class="token punctuation">)</span>, <span class="token assign-left variable">axis</span><span class="token operator">=</span><span class="token punctuation">)</span> 在维度i上将多个矩阵拼接（注：多个矩阵在维度i上可以不等，但在其他维度上必须一致）
np.hstack<span class="token punctuation">(</span><span class="token punctuation">)</span>                以列为单位进行拼接
np.vstack<span class="token punctuation">(</span><span class="token punctuation">)</span>                以行为单位进行拼接
np.split<span class="token punctuation">(</span>A, <span class="token punctuation">[</span>n,m,k<span class="token punctuation">]</span>,i<span class="token punctuation">)</span>   在维度i上拆分  
np.identity<span class="token punctuation">(</span><span class="token punctuation">)</span>              单位矩阵
np.eye<span class="token punctuation">(</span><span class="token punctuation">)</span>                    类单位阵
np.linalg.norm<span class="token punctuation">(</span>A, <span class="token assign-left variable">ord</span><span class="token operator">=</span><span class="token number">1</span>/2/np.inf<span class="token punctuation">)</span> 矩阵A的ord范式
np.trace<span class="token punctuation">(</span>A<span class="token punctuation">)</span>               矩阵的迹
np.mgrid<span class="token punctuation">[</span>:,:<span class="token punctuation">]</span>             生成矩阵
np.ravel<span class="token punctuation">(</span><span class="token punctuation">)</span>                 拉直
np.c_<span class="token punctuation">[</span>A,B<span class="token punctuation">]</span>                配对
np.random.rand      均匀分布
np.random.randn    正态分布
np.random.randint（1,100,<span class="token punctuation">[</span><span class="token number">5,5</span><span class="token punctuation">]</span>）  随机整数

tf.concat<span class="token punctuation">(</span><span class="token punctuation">[</span>a, b, c<span class="token punctuation">]</span>, i<span class="token punctuation">)</span>    对a,b,c在i维度上拼接
tf.split<span class="token punctuation">(</span>A, <span class="token punctuation">[</span>n,m,k<span class="token punctuation">]</span>, i<span class="token punctuation">)</span>    对A在i维度上拆分成三块分别为n,m,k的子块

torch.from_numpy<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function v(m,b){const a=i("ExternalLinkIcon");return l(),t("div",null,[d,n("p",null,[n("a",r,[c("重庆邮电大学开源镜像站 | CQUPT OpenSource Mirror"),p(a)])]),u])}const f=e(o,[["render",v],["__file","3.in_common_use.html.vue"]]),g=JSON.parse(`{"path":"/coooder/ubuntu/base/3.in_common_use.html","title":"","lang":"en-US","frontmatter":{"description":"使用国内镜像源 重邮镜像源 重庆邮电大学开源镜像站 | CQUPT OpenSource Mirror 查看显卡占用 Linux 文件操作-常用命令 远程查看Tensorboard Pycharm 自定义变量 显卡驱动相关 7.挂载磁盘 8.切换CUDA版本 https://blog.csdn.net/u013905398/article/detail...","head":[["meta",{"property":"og:url","content":"https://2-mo.github.io/coooder/ubuntu/base/3.in_common_use.html"}],["meta",{"property":"og:site_name","content":"Tiu Mo's Blog"}],["meta",{"property":"og:description","content":"使用国内镜像源 重邮镜像源 重庆邮电大学开源镜像站 | CQUPT OpenSource Mirror 查看显卡占用 Linux 文件操作-常用命令 远程查看Tensorboard Pycharm 自定义变量 显卡驱动相关 7.挂载磁盘 8.切换CUDA版本 https://blog.csdn.net/u013905398/article/detail..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-01T07:46:43.000Z"}],["meta",{"property":"article:author","content":"Tiu Mo"}],["meta",{"property":"article:modified_time","content":"2024-09-01T07:46:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-01T07:46:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiu Mo\\",\\"url\\":\\"https://2-mo.github.io\\"}]}"]]},"headers":[{"level":3,"title":"远程查看Tensorboard","slug":"远程查看tensorboard","link":"#远程查看tensorboard","children":[]},{"level":3,"title":"Pycharm 自定义变量","slug":"pycharm-自定义变量","link":"#pycharm-自定义变量","children":[]},{"level":3,"title":"7.挂载磁盘","slug":"_7-挂载磁盘","link":"#_7-挂载磁盘","children":[]},{"level":3,"title":"8.切换CUDA版本","slug":"_8-切换cuda版本","link":"#_8-切换cuda版本","children":[]},{"level":3,"title":"创建新用户","slug":"创建新用户","link":"#创建新用户","children":[]}],"git":{"createdTime":1720419990000,"updatedTime":1725176803000,"contributors":[{"name":"2-mo","email":"1982800736@qq.com","commits":1}]},"readingTime":{"minutes":5.26,"words":1577},"filePathRelative":"coooder/ubuntu/base/3.in_common_use.md","localizedDate":"July 8, 2024","excerpt":"<h4>使用国内镜像源</h4>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ pip3 <span class=\\"token function\\">install</span> pk_name<span class=\\"token punctuation\\">(</span>要安装的包<span class=\\"token punctuation\\">)</span> <span class=\\"token parameter variable\\">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple\\n</code></pre></div>","autoDesc":true}`);export{f as comp,g as data};
