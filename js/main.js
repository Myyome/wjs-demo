$(function(){
	var windowWidth=$(window).width();
	function resize(){
		var isPhone=windowWidth<768;
		$('#main_ad > .carousel-inner > .item').each(function(index,item) {
			var imgSrc=isPhone?$(item).data('img-xs'):$(item).data('img-lg');
			if(isPhone){
				$(item).css('backgroundImage', '');
				$(item).html('<img src="'+imgSrc+'" alt="" />');
			}
			else{
				$(item).css('backgroundImage', 'url('+imgSrc+')');
				$(item).html('');
			}
		});
	}
	$(window).on('resize',resize);
	resize();


		var $item=$('#news .list-group a');
		var $P=$('#news .col-sm-offset-2 p');
		$item.on('click',function(){
			var $this=$(this);
			var data=$this.data('text');
			$this.addClass('active').siblings('a').removeClass('active');
			$P.text(data);
		})
		var $oUl=$('#Tab .nav-tabs');
		var $warp=$('#Tab .warp');
		var width=30;
		$oUl.children().each(function(index, el) {
			width+=$(el).innerWidth();
		});
		$oUl.css('width',width);
		if($oUl.innerWidth()>$warp.innerWidth()){
			$warp.css('overflow-x','scroll');
		}

		var $carousel=$('.carousel');
		var startX=0;
		var endX=0;
		$carousel.on('touchstart',function(e){
			startX=e.originalEvent.touches[0].clientX;
			//console.log(e.originalEvent.touches[0].clientX);
			
		})
		$carousel.on('touchmove',function(e){
			endX=e.originalEvent.touches[0].clientX;
			})
		$carousel.on('touchend',function(){
			if(endX==0)return;
			var dis=Math.abs(startX-endX);
			console.log(startX);
			console.log(endX);
			if(startX-endX>0 && dis>20){
				$carousel.carousel('next');
			}
			else if(startX-endX<0 && dis>20){
				$carousel.carousel('prev');
			}
			endX=0;      //endX的值 直到下一次触发touchmove前 会一直储存在变量中，所以执行完后要清0；
		})
})