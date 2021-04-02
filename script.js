$(function(){
	const windowInnerWidth = window.innerWidth;
	
	$('.elements').css({
		'transition': '1s'
	});

	if (windowInnerWidth >= 768){
		$('#e1').css({
			'transform': 'translate(50px, -180px) rotate(15deg)'
		});
		$('#e2').css({
			'transform': 'translate(-150px, 50px) rotate(45deg)'
		});
		$('#e3').css({
			'transform': 'translate(100px, 250px) rotate(-45deg)'
		});
		$('#e4').css({
			'transform': 'translate(550px, -150px) rotate(-35deg)'
		});
		$('#e5').css({
			'transform': 'translate(550px, 250px) rotate(75deg)'
		});
	}
	else{
		$('#e1').css({
			'transform': 'translate(50px, -180px) rotate(15deg)'
		});
		$('#e2').css({
			'transform': 'translate(-150px, -400px) rotate(45deg)'
		});
		$('#e3').css({
			'transform': 'translate(-10px, 150px) rotate(-45deg)'
		});
		$('#e4').css({
			'transform': 'translate(550px, -350px) rotate(-35deg)'
		});
		$('#e5').css({
			'transform': 'translate(550px, 150px) rotate(75deg)'
		});
	}
});

