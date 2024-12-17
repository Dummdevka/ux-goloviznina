let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/projects/ux-goloviznina
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +1 ~/projects/ux-goloviznina
badd +6 react-frontend/src/App.js
badd +12 react-frontend/src/pages/General.jsx
badd +14 react-frontend/src/components/Widget.jsx
badd +3 react-frontend/src/components/Select.jsx
badd +2 react-frontend/src/components/Filter.jsx
badd +7 react-frontend/src/components/Container.jsx
badd +8 react-frontend/src/components/Sidebar.jsx
badd +24 old/styles.css
badd +8 react-frontend/src/Layout.jsx
badd +13 react-frontend/src/pages/Messages.jsx
badd +59 react-frontend/src/index.css
badd +17 react-frontend/src/pages/Message.jsx
badd +8 react-frontend/src/components/Message.jsx
badd +6 react-frontend/src/components/Message.css
badd +54 react-frontend/src/components/MessagePanel.jsx
badd +148 react-frontend/node_modules/@react-spectrum/dropzone/dist/vars.c3c1eaaa.css
badd +3 react-frontend/src/components/MessagePanel.css
badd +3 react-frontend/src/components/Table.jsx
badd +15 react-frontend/src/pages/Discover.jsx
badd +3 react-frontend/src/components/Filter.css
badd +6 react-frontend/src/components/Widget.css
argglobal
%argdel
$argadd ~/projects/ux-goloviznina
edit react-frontend/src/pages/Discover.jsx
argglobal
balt react-frontend/src/pages/Messages.jsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 19 - ((18 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 19
normal! 047|
lcd ~/projects/ux-goloviznina
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
