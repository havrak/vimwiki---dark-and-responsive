# CSS/JS/html for vimwiki
* dark theme by default
* syntax highlighting via google prettify
* straightforward css, actually editable by end user
* mobile friendly
	* this includes tables which get reformated

Live version of might be available on [havrak.xyz](havrak.xyz).


Basic setup in .vimrc (vimwiki is stored in ~/.vim/vimwiki):
```vim
let g:vimwiki_list = [{'path': '~/.vim/vimwiki/', 'path_html': '~/.vim/vimwiki/html', "auto_diary_index": 1,'template_path': '~/.vim/vimwiki/templates','template_default': 'def_template', 'template_ext': '.html'}]
let g:vimwiki_listsyms = '✗✓'
let g:vimwiki_conceallevel = 2
let g:vimwiki_valid_html_tags = 'b,i,s,u,sub,sup,kbd,br,hr,pre,script'

```

Easiest way to setup is via symlinks
```bash
git clone https://github.com/havrak/vimwiki---dark-and-responsive
mv https://github.com/havrak/vimwiki---dark-and-responsive .vim/vimwiki_template
ln -sf $HOME/.vim/vimwiki_template/templates/ $HOME/.vim/vimwiki/
ln -sf $HOME/.vim/vimwiki_template/html/ $HOME/.vim/vimwiki/html/
```

Code snippets use standart annotation:
```vimwiki
<pre class ="prettyprint lang-cpp">
{{{cpp
	#include <iostream>

	int main(void){
		return 0;
	}
}}}
</pre>
```

## Screenshots
![Normal layout](./images/pic1.png)
![Table](./images/pic2.png)
![Code Snippet](./images/pic3.png)
