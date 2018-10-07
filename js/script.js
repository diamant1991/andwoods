$(document).ready(function() {
	$('.bl5').masonry({itemSelector: '.grid-item',columnWidth: '.grid-sizer',gutter: '.gutter-sizer',stagger: 30,percentPosition: true});
	$("img.lazy").lazyload({effect: 'fadeIn',effectspeed: 1000,threshold: 200});
	$('img[data-original]').load(function() {
		$('.bl5').masonry('destroy');
		$('.bl5').masonry({itemSelector: '.grid-item',columnWidth: '.grid-sizer',gutter: '.gutter-sizer',stagger: 30,percentPosition: true});
	});	   
});


function loadvideo(){
  sales1.innerHTML = '<div class="imgbox"><div class="myvideo"><iframe allowfullscreen="" frameborder="0" height="480" src="https://www.youtube.com/embed/MfENCa8vQ34?autoplay=1&amp;rel=0&amp;vq=hd720" width="853"></iframe></div></div>';
}

$(document).ready(function() {

	$("input[name='tel'], input[name='telephone']").mask("+ 7 ( 999 ) 999 - 99 - 99");

  var div, n,
      v = document.getElementsByClassName("youtube-player");
  for (n = 0; n < v.length; n++) {
      div = document.createElement("div");
      //div.setAttribute("data-id", v[n].dataset.id);
      div.setAttribute("data-id", v[n].id);
      //div.innerHTML = labnolThumb(v[n].dataset.id);
      div.innerHTML = labnolThumb(v[n].id);
      div.onclick = labnolIframe;
      v[n].appendChild(div);
  }
  function labnolThumb(id) {
      var thumb = '<img src="images/loader.gif" data-original="https://i.ytimg.com/vi/ID/maxresdefault.jpg" alt="Шкаф для одежды" width="30" height="30">',
          play = '<div class="playbefore absolute"><div class="play"><i class="fa fa-play" aria-hidden="true"></i></div></div>';
      return thumb.replace("ID", id) + play;
  }
  function labnolIframe() {
      var iframe = document.createElement("iframe");
      var embed = "https://www.youtube.com/embed/ID?autoplay=1&amp;vq=hd720";
      iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "1");
      this.parentNode.replaceChild(iframe, this);
  }

  $('.colorbox2').on('click', function() {
    $('#colorbox2').modal('show');
  });
  $('.colorbox3').on('click', function() {
    $('#colorbox3').modal('show');
  });
  $('.colorbox4').on('click', function() {
    $('#colorbox4').modal('show');
  });
});

(function($){var pushy=$('.pushy.left'),pushyleft=$('.pushy.left'),pushyright=$('.pushy.riight'),body=$('body'),container=$('#containerr'),push=$('.push'),pushyLeft='pushy-left',pushyOpenLeft='pushy-open-left',pushyOpenRight='pushy-open-right',siteOverlay=$('.site-overlay'),menuBtn=$('.btn.leeft, .pushy-link'),menuBtnRight=$('.menu-btn.riight'),menuSpeed=200,menuWidth='200px',submenuClass='.pushy-submenu',submenuOpenClass='pushy-submenu-open',submenuClosedClass='pushy-submenu-closed',submenu=$(submenuClass);function togglePushy(side){if(side=='left'){body.toggleClass(pushyOpenLeft);}else{body.toggleClass(pushyOpenRight);}}function openPushyFallback(side){if(side=='left'){body.addClass(pushyOpenLeft);pushy.animate({left:"0px"},menuSpeed);container.animate({left:menuWidth},menuSpeed);push.animate({left:menuWidth},menuSpeed);}else{body.addClass(pushyOpenRight);pushy.animate({right:'0px'},menuSpeed);container.animate({right:menuWidth},menuSpeed);push.animate({right:menuWidth},menuSpeed);}}function closePushyFallback(){if(pushy.hasClass(pushyLeft)){body.removeClass(pushyOpenLeft);pushy.animate({left:"-"+menuWidth},menuSpeed);container.animate({left:"0px"},menuSpeed);push.animate({left:"0px"},menuSpeed);}else{body.removeClass(pushyOpenRight);pushy.animate({right:"-"+menuWidth},menuSpeed);container.animate({right:"0px"},menuSpeed);push.animate({right:"0px"},menuSpeed);}}function toggleSubmenu(){$(submenuClass).addClass(submenuClosedClass);$(submenuClass).on('click',function(){if($('#containerr').width()>=991){return;}var selected=$(this);if(selected.hasClass(submenuClosedClass)){$(submenuClass).addClass(submenuClosedClass).removeClass(submenuOpenClass);selected.removeClass(submenuClosedClass).addClass(submenuOpenClass);}else{selected.addClass(submenuClosedClass).removeClass(submenuOpenClass);}});}function toggleSubmenuFallback(){$(submenuClass).addClass(submenuClosedClass);submenu.children('a.togtogle').on('click',function(event){if($('#containerr').width()>=991){return;}event.preventDefault();$(this).toggleClass(submenuOpenClass).next('.pushy-submenu div').slideToggle(200).end().parent(submenuClass).siblings(submenuClass).children('a').removeClass(submenuOpenClass).next('.pushy-submenu div').slideUp(200);});}var cssTransforms3d=(function csstransforms3d(){var el=document.createElement('p'),supported=false,transforms={'webkitTransform':'-webkit-transform','OTransform':'-o-transform','msTransform':'-ms-transform','MozTransform':'-moz-transform','transform':'transform'};document.body.insertBefore(el,null);for(var t in transforms){if(el.style[t]!==undefined){el.style[t]='translate3d(1px,1px,1px)';supported=window.getComputedStyle(el).getPropertyValue(transforms[t]);}}document.body.removeChild(el);return(supported!==undefined&&supported.length>0&&supported!=="none");})();if(cssTransforms3d){pushy.css({'visibility':'visible'});pushyright.css({'visibility':'visible'});toggleSubmenu();opened3d=false;menuBtn.on('click',function(){if($('#containerr').width()>=991){return;}pushy=pushyleft;togglePushy('left');opened3d='left';});menuBtnRight.on('click',function(){if($('#containerr').width()>=991){return;}pushy=pushyright;togglePushy('right');opened3d='right';});siteOverlay.on('click',function(){if($('#containerr').width()>=991){return;}togglePushy(opened3d);});}else{body.addClass('no-csstransforms3d');if(pushy.hasClass(pushyLeft)){pushy.css({left:"-"+menuWidth});}else{pushy.css({right:"-"+menuWidth});}if(pushyright.hasClass(pushyLeft)){pushyright.css({left:"-"+menuWidth});}else{pushyright.css({right:"-"+menuWidth});}pushy.css({'visibility':'visible'});pushyright.css({'visibility':'visible'});container.css({"overflow-x":"hidden"});var opened=false;toggleSubmenuFallback();menuBtn.on('click',function(){if($('#containerr').width()>=991){return;}pushy=pushyleft;if(opened){closePushyFallback();opened=false;}else{openPushyFallback('left');opened=true;}});menuBtnRight.on('click',function(){if($('#containerr').width()>=991){return;}pushy=pushyright;if(opened){closePushyFallback();opened=false;}else{openPushyFallback('right');opened=true;}});siteOverlay.on('click',function(){if(opened){closePushyFallback();opened=false;}else{openPushyFallback();opened=true;}});}}(jQuery));


