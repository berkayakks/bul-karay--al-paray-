$(document).ready(function(){
	
	
	$("button").click(function(){
		
		$("button").text("tekrar karıştır");
		$("#sonuc").text("BOL ŞANSLAR");
	
		var sayi
		var sayac=0;
		var dizi=[];
		while(sayac<3){
			sayi=Math.floor(Math.random()*3)
			if (dizi.indexOf(sayi)==-1) {
				dizi.push(sayi);
				sayac++;
			}
		}
		if (dizi[0]==0) {
			 $(".kartlar1").attr("src","img/kırmızı1.png");
		}
		if (dizi[0]==1) {
			$(".kartlar1").attr("src","img/kırmızı1.png");
		}
		if (dizi[0]==2) {
			$(".kartlar1").attr("src","img/kare.png");
		}
		if (dizi[1]==0) {
			 $(".kartlar2").attr("src","img/kırmızı1.png");
		}
		if (dizi[1]==1) {
			$(".kartlar2").attr("src","img/kırmızı1.png");
		}
		if (dizi[1]==2) {
			$(".kartlar2").attr("src","img/kare.png");
		}
		if (dizi[2]==0) {
			 $(".kartlar3").attr("src","img/kırmızı1.png");
		}
		if (dizi[2]==1) {
			$(".kartlar3").attr("src","img/kırmızı1.png");
		}
		if (dizi[2]==2) {
			
			$(".kartlar3").attr("src","img/kare.png");
		}


		$(".resim").remove();//sürekli artmasın diye öncekileri kaldırdım
		for(var i=0;i<3;i++){
			$("#kartlar").before("<div class='resim'><img src='img/kart-arkası.jpg'></div>");
		}
		$(".resim").click(function(){
			
			//$(this).fadeTo('fast',0);
			$(this).addClass("animated rollOut");
			if(dizi[$(this).index()-1]==2){
				$("#sonuc").text("tebrikler kazandın");
				
				$(".resim").fadeOut(500);
			}
			else{

				$("#sonuc").text("tekrar dene");
				

			}
			

		});

	});

});