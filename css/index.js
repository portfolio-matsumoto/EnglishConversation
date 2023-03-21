
$(function(){
		//アレンジメニューのカルーセル 引用
		$(".slide").carouFredSel({
			
			circular:true,
			direction:"left",
			scroll:{
				duration:1000,
				fx:"scroll",
				easing:"swing",
				item:3
			},
			auto:{
				play:true,
				timeoutDuration:2500,
				/*pauseOnHover:"immediate"*/
				pauseOnHover:"true"
			},
			items:{
				start:0
			}
		});
	
		//全ページ共通　スムーススクロール
		$(window).on("scroll", function() {
			if ($(this).scrollTop() > 100) {
				$(".pagetop").fadeIn(800);
			} else {
				$(".pagetop").fadeOut(800);
			}
	});
	
	//TOPページ　要素の高さをそろえる
	$(function(){
		$(".box1,.box2,.box3").heightLine();
	
	});

	//TOPページ　要素の高さをそろえる
	$(function(){
		$(".box1 .text,.box2 .text,.box3 .text").heightLine();
	});
	
	//TOPページ　ナビゲーションついてくる
	$(function(){
		$("header .inner").stickyfloat({
			lockBottom:false
			});
	});
	
	//コース＆受講料・よくある質問共通　アコーディオン
	$(function(){

		//.accordion1の中のp要素がクリックされたら
		$('.accordion1 p').click(function(){

			//クリックされた.accordion1の中のp要素に隣接する要素が開いたり閉じたりする。
			$(this).next().slideToggle();

		});
	});
	
});

