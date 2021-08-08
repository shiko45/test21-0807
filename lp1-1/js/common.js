$(function(){
  $('img[src], iframe[src]').each(function(){
    let src = $(this).attr('src');
    src = src + '?ts=' + (new Date()).getTime();
    $(this).attr('src', src);
  });
})