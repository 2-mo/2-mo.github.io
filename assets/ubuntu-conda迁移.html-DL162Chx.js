import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,f as a}from"./app-CeN5l-4y.js";const s={},t=a(`<ol><li>/userdata/archiconda3/etc/profile.d/conda.sh</li><li>/userdata/archiconda3/bin/conda</li><li>/opt/miniconda3/bin/conda-env</li><li>/userdata/archiconda3/bin/activate</li><li>/userdata/archiconda3/bin/deactivate</li><li>/userdata/archiconda3/bin/pip</li><li>/userdata/archiconda3/bin/pip3</li><li>/userdata/archiconda3/envs/&#39;YOURENVNAME&#39;/bin/pip</li></ol><p>$ source ~/.bashrc</p><p>上面一堆坑，别弄！</p><p>为了使多个用户共享环境，可以做一下设置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>groupadd anaconda  # 创建anaconda组
chgrp -R anaconda /home/conda # 组内共享这个目录下的文件
chmod 777 -R /home/anaconda # 设置权限
adduser username anaconda # 添加用户进组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><p>输入conda，如果没反应，进行一下步骤</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vim /etc/profile

# 在末尾添加 
export PATH=&quot;$PATH:/home/conda/bin&quot;  

#输入下面指令激活
source /etc/profile 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.condarc</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>show_channel_urls: true
  
channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
  - defaults

envs_dirs:
  - /home/guest/.conda/envs
  - /opt/miniconda3/env
pkgs_dirs:
  - /home/guest/.conda/pkgs
  - /opt/miniconda3/pkgs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）创建~/.pip目录 ，新建 ~/.pip/pip.conf文件，内容如下：</p><p>[global]</p><p>timeout =6000</p><p>index-url =http://pypi.douban.com/simple/</p><p>[install]</p><p>use-mirrors =true</p><p>mirrors =http://pypi.douban.com/simple/</p><p>trusted-host =pypi.douban.com</p><p><strong>也可以简写为：</strong></p><p>[global]</p><p>index-url =http://pypi.douban.com/simple/</p><p>[install]</p><p>trusted-host =pypi.douban.com</p><p>~/.profile</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># ~/.profile: executed by the command interpreter for login shells.
# This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
# exists.
# see /usr/share/doc/bash/examples/startup-files for examples.
# the files are located in the bash-doc package.

# the default umask is set in /etc/profile; for setting the umask
# for ssh logins, install and configure the libpam-umask package.
#umask 022

# if running bash
if [ -n &quot;$BASH_VERSION&quot; ]; then
    # include .bashrc if it exists
    if [ -f &quot;$HOME/.bashrc&quot; ]; then
	. &quot;$HOME/.bashrc&quot;
    fi
fi

# set PATH so it includes user&#39;s private bin if it exists
if [ -d &quot;$HOME/bin&quot; ] ; then
    PATH=&quot;$HOME/bin:$PATH&quot;
fi

# set PATH so it includes user&#39;s private bin if it exists
if [ -d &quot;$HOME/.local/bin&quot; ] ; then
    PATH=&quot;$HOME/.local/bin:$PATH&quot;
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改系统时区</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>.运行tzselect，选择Asia（亚洲）

<span class="token number">2</span>.选择China，然后选定北京时间

$ <span class="token function">sudo</span> <span class="token function">cp</span> /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime

$ <span class="token function">date</span>  <span class="token comment"># 查看时间</span>


另一种方式：
$ timedatectl list-timezones  <span class="token comment"># 查看时区列表</span>
$ <span class="token function">sudo</span> timedatectl set-timezone Asia/Shanghai


$ timedatectl  <span class="token comment"># 查看时钟是否与互联网同步</span>
$ <span class="token function">sudo</span> timedatectl set-ntp on  <span class="token comment"># 开启ntp服务同步时间，但是似乎没作用</span>

$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> ntpdate
$ <span class="token function">sudo</span> ntpdate cn.pool.ntp.org

$ <span class="token function">date</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;2023-03-20 10:22:00&#39;</span>  <span class="token comment"># 最后手动改了</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),d=[t];function l(c,o){return e(),i("div",null,d)}const p=n(s,[["render",l],["__file","ubuntu-conda迁移.html.vue"]]),v=JSON.parse(`{"path":"/coooder/ubuntu/process/ubuntu-conda%E8%BF%81%E7%A7%BB.html","title":"","lang":"en-US","frontmatter":{"description":"/userdata/archiconda3/etc/profile.d/conda.sh /userdata/archiconda3/bin/conda /opt/miniconda3/bin/conda-env /userdata/archiconda3/bin/activate /userdata/archiconda3/bin/deactivat...","head":[["meta",{"property":"og:url","content":"https://2-mo.github.io/coooder/ubuntu/process/ubuntu-conda%E8%BF%81%E7%A7%BB.html"}],["meta",{"property":"og:site_name","content":"Tiu Mo's Blog"}],["meta",{"property":"og:description","content":"/userdata/archiconda3/etc/profile.d/conda.sh /userdata/archiconda3/bin/conda /opt/miniconda3/bin/conda-env /userdata/archiconda3/bin/activate /userdata/archiconda3/bin/deactivat..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-01T07:46:43.000Z"}],["meta",{"property":"article:author","content":"Tiu Mo"}],["meta",{"property":"article:modified_time","content":"2024-09-01T07:46:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-01T07:46:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tiu Mo\\",\\"url\\":\\"https://2-mo.github.io\\"}]}"]]},"headers":[{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{"createdTime":1720419990000,"updatedTime":1725176803000,"contributors":[{"name":"2-mo","email":"1982800736@qq.com","commits":1}]},"readingTime":{"minutes":1.39,"words":417},"filePathRelative":"coooder/ubuntu/process/ubuntu-conda迁移.md","localizedDate":"July 8, 2024","excerpt":"<ol>\\n<li>/userdata/archiconda3/etc/profile.d/conda.sh</li>\\n<li>/userdata/archiconda3/bin/conda</li>\\n<li>/opt/miniconda3/bin/conda-env</li>\\n<li>/userdata/archiconda3/bin/activate</li>\\n<li>/userdata/archiconda3/bin/deactivate</li>\\n<li>/userdata/archiconda3/bin/pip</li>\\n<li>/userdata/archiconda3/bin/pip3</li>\\n<li>/userdata/archiconda3/envs/'YOURENVNAME'/bin/pip</li>\\n</ol>","autoDesc":true}`);export{p as comp,v as data};
