set autoindent expandtab tabstop=2 shiftwidth=2
set number
set cc=80
set nohls
set lcs+=space:·
set list
" prevent typescript lag by changing regex
set re=2
syntax on
set nocompatible
filetype on
colorscheme desert

augroup vimrcEx
  au!

  autocmd FileType text setlocal textwidth=78
augroup END

if has('syntax') && has('eval')
  packadd! matchit
endif

" Uncomment the following to have Vim jump to the last position when
" reopening a file
if has("autocmd")
  au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$")
    \| exe "normal! g'\"" | endif
endif

set showcmd
set scrolloff=25
" Make cll insert console log?
imap cll console.log()<Esc><S-f>(a
