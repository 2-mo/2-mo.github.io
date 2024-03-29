import{_ as i,X as t,Y as l,a3 as s,$ as a,a0 as c,a1 as o,Z as n,E as p}from"./framework-5a8052d6.js";const d={},u=n(`<h1 id="服务器配置及使用" tabindex="-1"><a class="header-anchor" href="#服务器配置及使用" aria-hidden="true">#</a> 服务器配置及使用</h1><h2 id="配置基础环境-sudo-用户" tabindex="-1"><a class="header-anchor" href="#配置基础环境-sudo-用户" aria-hidden="true">#</a> 配置基础环境（sudo 用户）</h2><h3 id="基础设置" tabindex="-1"><a class="header-anchor" href="#基础设置" aria-hidden="true">#</a> 基础设置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">vim</span>  <span class="token comment"># 安装vim，vi太难用</span>

$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> net-tools

$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gpustat

$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> tmux

$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">screen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置ssh监控端口" tabindex="-1"><a class="header-anchor" href="#配置ssh监控端口" aria-hidden="true">#</a> 配置ssh监控端口</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/ssh/sshd_config
<span class="token string">&#39;add&#39;</span> ListenAddress <span class="token number">0.0</span>.0.0:5122<span class="token punctuation">(</span>YOUR_PORT<span class="token punctuation">)</span>

<span class="token comment"># 例如：</span>
ListenAddress <span class="token number">0.0</span>.0.0:8989
ListenAddress <span class="token number">0.0</span>.0.0:22

$ <span class="token function">service</span> sshd restart  <span class="token comment"># （如果selinux不设置为disabled，则无法生效）</span>

$ <span class="token function">sudo</span> <span class="token function">netstat</span> -anp<span class="token operator">|</span><span class="token function">grep</span> sshd  <span class="token comment"># 查看端口号</span>

<span class="token comment"># 如果系统升级过ssh，即使修改配置文件/etc/ssh/sshd_config也不会生效，</span>
<span class="token comment"># 升级openssh后，配置文件被修改到/usr/local/etc/sshd_config，</span>
<span class="token comment"># 所以修改这个/usr/local/etc/sshd_config</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="挂载磁盘看情况" tabindex="-1"><a class="header-anchor" href="#挂载磁盘看情况" aria-hidden="true">#</a> 挂载磁盘<code>看情况</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有磁盘</span>
$ <span class="token function">sudo</span> <span class="token function">fdisk</span> <span class="token parameter variable">-l</span>

<span class="token comment"># 查询UUID</span>
$ <span class="token function">sudo</span> blkid /dev/sda3

<span class="token comment"># 编辑/etc/fstab</span>
$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/fstab <span class="token comment"># 或者用 gedit</span>

<span class="token comment"># &lt;file system&gt; &lt;mount point&gt; &lt;type&gt; &lt;options&gt; &lt;dump&gt; &lt;pass&gt;</span>
<span class="token string">&#39;add&#39;</span> <span class="token assign-left variable">UUID</span><span class="token operator">=</span>eb7568d0-fa94-4a1a-9fe6-75ff37faa310 /home/leng/NewDisk ext4 defaults <span class="token number">0</span> <span class="token number">2</span>

<span class="token comment"># 查看挂载</span>
$ <span class="token function">sudo</span> <span class="token function">mount</span> <span class="token parameter variable">-a</span>  <span class="token comment"># 挂载后原来文件夹中的东西覆盖，取消挂载才能看到</span>
$ <span class="token function">df</span> <span class="token parameter variable">-h</span> <span class="token comment"># 查看挂载</span>

$ <span class="token function">du</span> <span class="token parameter variable">-sh</span>  <span class="token comment"># 查看当前文件夹大小</span>

<span class="token comment"># 移除挂载</span>
$ <span class="token function">sudo</span> <span class="token function">umount</span> /dev/sda3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 复制 /home 至 / </span>
$ <span class="token function">mkdir</span> home_bak
$ <span class="token function">cp</span> <span class="token parameter variable">-Rvp</span> /home /home_bak

<span class="token comment"># 取消/home分区的挂载</span>
$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/fstab

<span class="token string">&#39;#&#39;</span> <span class="token assign-left variable">UUID</span><span class="token operator">=</span>eb7568d0-fa94-4a1a-9fe6-75ff37faa310 /home/leng/NewDisk ext4 defaults <span class="token number">0</span> <span class="token number">2</span>
$ <span class="token function">umount</span> /home
$ <span class="token function">mv</span> home_bak home
$ <span class="token function">umount</span> /home

$ <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo usermod -d /userHome/guest -m guest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装-cuda-可选" tabindex="-1"><a class="header-anchor" href="#安装-cuda-可选" aria-hidden="true">#</a> 安装 cuda <code>可选</code></h3><p>建议安装 11.7 <code>2023-0506 2132</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&#39;https://developer.nvidia.com/cuda-downloads&#39;</span>  <span class="token comment"># 最新版本</span>

<span class="token string">&#39;https://developer.nvidia.com/cuda-toolkit-archive&#39;</span>  <span class="token comment"># 之前版本</span>

$ <span class="token function">wget</span> https://developer.download.nvidia.com/compute/cuda/12.1.0/local_installers/cuda_12.1.0_530.30.02_linux.run
$ <span class="token function">sudo</span> <span class="token function">sh</span> cuda_12.1.0_530.30.02_linux.run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>export PATH=/usr/local/cuda<span class="token punctuation">-</span>12.1/bin$<span class="token punctuation">{</span>PATH<span class="token punctuation">:</span>+<span class="token punctuation">:</span>$<span class="token punctuation">{</span>PATH<span class="token punctuation">}</span><span class="token punctuation">}</span>
export LD_LIBRARY_PATH=/usr/local/cuda<span class="token punctuation">-</span>12.1/lib64$<span class="token punctuation">{</span>LD_LIBRARY_PATH<span class="token punctuation">:</span>+<span class="token punctuation">:</span>$<span class="token punctuation">{</span>LD_LIBRARY_PATH<span class="token punctuation">}</span><span class="token punctuation">}</span>

export PATH=/usr/local/cuda/bin$<span class="token punctuation">{</span>PATH<span class="token punctuation">:</span>+<span class="token punctuation">:</span>$<span class="token punctuation">{</span>PATH<span class="token punctuation">}</span><span class="token punctuation">}</span>
export LD_LIBRARY_PATH=/usr/local/cuda/lib64$<span class="token punctuation">{</span>LD_LIBRARY_PATH<span class="token punctuation">:</span>+<span class="token punctuation">:</span>$<span class="token punctuation">{</span>LD_LIBRARY_PATH<span class="token punctuation">}</span><span class="token punctuation">}</span>


<span class="token comment">###</span>
export PATH=$PATH<span class="token punctuation">:</span>/usr/local/cuda/bin
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH<span class="token punctuation">:</span>/usr/local/cuda/lib64
export LIBRARY_PATH=$LIBRARY_PATH<span class="token punctuation">:</span>/usr/local/cuda/lib64 
                                         
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="配置conda" tabindex="-1"><a class="header-anchor" href="#配置conda" aria-hidden="true">#</a> 配置conda</h3><h4 id="下载miniconda" tabindex="-1"><a class="header-anchor" href="#下载miniconda" aria-hidden="true">#</a> 下载miniconda</h4>`,4),v={href:"https://docs.conda.io/en/latest/miniconda.html",target:"_blank",rel:"noopener noreferrer"},m=n(`<h4 id="终端安装" tabindex="-1"><a class="header-anchor" href="#终端安装" aria-hidden="true">#</a> 终端安装</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">wget</span> https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
$ <span class="token function">sh</span> Miniconda3-latest-Linux-x86_64.sh
$ <span class="token builtin class-name">source</span> .bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置anaconda组" tabindex="-1"><a class="header-anchor" href="#设置anaconda组" aria-hidden="true">#</a> 设置anaconda组</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">groupadd</span> anaconda  <span class="token comment"># 创建anaconda组</span>
$ <span class="token function">sudo</span> adduser <span class="token string">&#39;USERNAME&#39;</span> anaconda <span class="token comment"># 添加用户进组</span>

<span class="token comment"># 添加新用户后需再设置一次 权限</span>
$ <span class="token function">sudo</span> <span class="token function">chgrp</span> <span class="token parameter variable">-R</span> anaconda /opt <span class="token comment"># 组内共享这个目录下的文件</span>
$ <span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> <span class="token parameter variable">-R</span> /opt <span class="token comment"># 设置权限</span>


<span class="token comment"># 设置数据文件夹</span>
$ <span class="token function">sudo</span> <span class="token function">chgrp</span> <span class="token parameter variable">-R</span> anaconda /data
$ <span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> <span class="token parameter variable">-R</span> /data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建新用户" tabindex="-1"><a class="header-anchor" href="#创建新用户" aria-hidden="true">#</a> 创建新用户</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> adduser <span class="token string">&#39;USERNAME&#39;</span>
$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token string">&#39;GROUPNAME&#39;</span> <span class="token string">&#39;USERNAME&#39;</span>

<span class="token comment"># 删除用户</span>
$ <span class="token function">grep</span> <span class="token function">bash</span> /etc/passwd <span class="token comment"># 查看用户</span>
$ <span class="token function">sudo</span> deluser <span class="token string">&#39;USERNAME&#39;</span> <span class="token function">sudo</span>  <span class="token comment"># 移除sudo</span>
$ <span class="token function">sudo</span> deluser --remove-home <span class="token string">&#39;USERNAME&#39;</span>
<span class="token function">sudo</span> <span class="token function">groupdel</span> <span class="token string">&#39;GROUPNAME&#39;</span>
$ <span class="token function">sudo</span> deluser --remove-all-files <span class="token string">&#39;USERNAME&#39;</span>  <span class="token comment"># 删除用户所有</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bashrc" tabindex="-1"><a class="header-anchor" href="#bashrc" aria-hidden="true">#</a> .bashrc</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">cp</span> /home/guest/.bashrc /home/nemo/.bashrc 
$ <span class="token function">sudo</span> <span class="token function">chown</span> nemo:nemo /home/nemo/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>export PATH=$PATH<span class="token punctuation">:</span>/usr/local/cuda/bin/

<span class="token comment"># &gt;&gt;&gt; conda initialize &gt;&gt;&gt;</span>
<span class="token comment"># !! Contents within this block are managed by &#39;conda init&#39; !!</span>
__conda_setup=&quot;$(&#39;/opt/miniconda3/bin/conda&#39; &#39;shell.bash&#39; &#39;hook&#39; 2<span class="token punctuation">&gt;</span> /dev/null)&quot;
if <span class="token punctuation">[</span> $<span class="token punctuation">?</span> <span class="token punctuation">-</span>eq 0 <span class="token punctuation">]</span>; then
    eval &quot;$__conda_setup&quot;
else
    if <span class="token punctuation">[</span> <span class="token punctuation">-</span>f &quot;/opt/miniconda3/etc/profile.d/conda.sh&quot; <span class="token punctuation">]</span>; then
        . &quot;/opt/miniconda3/etc/profile.d/conda.sh&quot;
    else
        export PATH=&quot;/opt/miniconda3/bin<span class="token punctuation">:</span>$PATH&quot;
    fi
fi
unset __conda_setup
<span class="token comment"># &lt;&lt;&lt; conda initialize &lt;&lt;&lt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="condarc-user" tabindex="-1"><a class="header-anchor" href="#condarc-user" aria-hidden="true">#</a> .condarc <mark>User</mark></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> ~/.condarc
$ <span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">show_channel_urls</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">channels</span><span class="token punctuation">:</span>
<span class="token comment">#  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/</span>
<span class="token comment">#  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/</span>
<span class="token comment">#  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/</span>
  <span class="token punctuation">-</span> defaults

<span class="token key atrule">envs_dirs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> /home/&#39;YOURNAME&#39;/.conda/envs
<span class="token key atrule">pkgs_dirs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> /home/&#39;YOURNAME&#39;/.conda/pkgs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="pip-user" tabindex="-1"><a class="header-anchor" href="#pip-user" aria-hidden="true">#</a> .pip <mark>User</mark></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> .pip <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> .pip <span class="token operator">&amp;&amp;</span> <span class="token function">vim</span> pip.conf 
<span class="token string">&#39;or&#39;</span> <span class="token function">mkdir</span> .pip<span class="token punctuation">;</span> <span class="token builtin class-name">cd</span> .pip<span class="token punctuation">;</span> <span class="token function">vim</span> pip.conf 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>global<span class="token punctuation">]</span>
timeout =6000
index<span class="token punctuation">-</span>url =http<span class="token punctuation">:</span>//pypi.douban.com/simple/
<span class="token punctuation">[</span>install<span class="token punctuation">]</span>
use<span class="token punctuation">-</span>mirrors =true 
mirrors =http<span class="token punctuation">:</span>//pypi.douban.com/simple/ 
trusted<span class="token punctuation">-</span>host =pypi.douban.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="conda-user" tabindex="-1"><a class="header-anchor" href="#conda-user" aria-hidden="true">#</a> conda <mark>User</mark></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ conda create <span class="token parameter variable">-n</span> <span class="token string">&#39;ENV_NMAE&#39;</span>
$ conda activate <span class="token string">&#39;ENV_NMAE&#39;</span>

<span class="token comment"># https://pytorch.org/get-started/locally/</span>

$ conda <span class="token function">install</span> pytorch torchvision torchaudio pytorch-cuda<span class="token operator">=</span><span class="token number">11.7</span> <span class="token parameter variable">-c</span> pytorch <span class="token parameter variable">-c</span> nvidia
$ pip <span class="token function">install</span> opencv-contrib-python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看cuda及cudnn能否使用" tabindex="-1"><a class="header-anchor" href="#查看cuda及cudnn能否使用" aria-hidden="true">#</a> 查看cuda及cuDNN能否使用</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 判断是否安装了cuda</span>
$ python
$ <span class="token function">import</span> torch
$ print<span class="token punctuation">(</span>torch.cuda.is_available<span class="token punctuation">(</span><span class="token punctuation">))</span>  <span class="token comment">#返回True则说明已经安装了cuda</span>
<span class="token comment"># 判断是否安装了cuDNN</span>
$ from torch.backends <span class="token function">import</span>  cudnn 
$ print<span class="token punctuation">(</span>cudnn.is_available<span class="token punctuation">(</span><span class="token punctuation">))</span>  <span class="token comment">#返回True则说明已经安装了cuDNN</span>

ctrl+d 退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">&quot;http://10.16.0.81:8888/&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token string">&quot;http://10.16.0.81:8888/&quot;</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/cuda/bin<span class="token variable">\${<span class="token environment constant">PATH</span><span class="token operator">:+</span><span class="token operator">:</span>\${<span class="token environment constant">PATH</span>}</span><span class="token punctuation">}</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/usr/local/cuda/lib64<span class="token variable">\${LD_LIBRARY_PATH<span class="token operator">:+</span><span class="token operator">:</span>\${LD_LIBRARY_PATH}</span><span class="token punctuation">}</span>

<span class="token comment"># &gt;&gt;&gt; conda initialize &gt;&gt;&gt;</span>
<span class="token comment"># !! Contents within this block are managed by &#39;conda init&#39; !!</span>
<span class="token assign-left variable">__conda_setup</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>&#39;/opt/miniconda3/bin/conda<span class="token string">&#39; &#39;</span>shell.bash<span class="token string">&#39; &#39;</span>hook&#39; <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null<span class="token variable">)</span></span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable">$__conda_setup</span>&quot;</span>
<span class="token keyword">else</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;/opt/miniconda3/etc/profile.d/conda.sh&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">.</span> <span class="token string">&quot;/opt/miniconda3/etc/profile.d/conda.sh&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/opt/miniconda3/bin:<span class="token environment constant">$PATH</span>&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">unset</span> __conda_setup
<span class="token comment"># &lt;&lt;&lt; conda initialize &lt;&lt;&lt;</span>
conda activate tai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.如何把一个挂载好的200g目录，假设是/data 变成/work
（1）df -Th （查看/data挂载目录的磁盘大小有200g满足需求）
得到 /dev/mapper/centos-swap 200.0G 33M 2.000G 2% /data
（2）umount /data （把/data和挂载磁盘卸载）
（3）mv /data /work （对/data文件改名为目标目录/work）
（4）vim /etc/fstab (编辑fstab，实现永久挂载)
UUID=498ccf9b-926b-43f9-9839-2099cd9b0878 /boot xfs defaults 0 0
/dev/mapper/centos-swap /data xfs defaults 0 0
修改：把其中的/data 变成 /work
（5）mount -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="免密链接" tabindex="-1"><a class="header-anchor" href="#免密链接" aria-hidden="true">#</a> 免密链接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 本地终端</span>
$ ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;ANYTHING&quot;</span>  <span class="token comment"># 一路 Enter</span>
$ <span class="token function">vim</span> <span class="token string">&quot;USERPATH/.ssh/id_rsa.pub&quot;</span> <span class="token comment">#e.g. /Users/tiumo/.ssh/id_rsa.pub # 打开密钥，手动复制</span>

<span class="token comment"># 远程终端</span>
$ <span class="token function">mkdir</span> .ssh 
$ <span class="token builtin class-name">cd</span> .ssh
$ <span class="token function">vim</span> authorized_keys  <span class="token comment">#/home/leng/.ssh/authorized_keys #手动粘贴</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function b(k,h){const e=p("ExternalLinkIcon");return t(),l("div",null,[u,s(" ![image-20230320203122342](步骤.assets/:Users:tiumo:Library:Application Support:typora-user-images:image-20230320203122342.png) "),r,a("p",null,[a("a",v,[c("Miniconda — conda documentation"),o(e)])]),s(' <img src="步骤.assets/:Users:tiumo:Library:Application Support:typora-user-images:image-20230320144038499.png" alt="image-20230320144038499" style="zoom:50%;" /> '),m])}const f=i(d,[["render",b],["__file","index.html.vue"]]);export{f as default};
