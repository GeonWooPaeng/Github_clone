// toggle(menu-bar) 눌렀을 때 메뉴 나오게 하기

//즉시 실행 함수(js의 전체 영역을 더럽히지 않기 위해)
// 함수를 정의하자마자 바로 호출하는 것 (https://beomy.tistory.com/9)
(function(window, document) {
	//전체 영역에서 window, document객체를 받고
	//인수로 전달한다.
	//해당 범위 안의 코드는 엄격한 js문법으로 작성하겠다는 선언
	'use strict';

	//요소를 담고있다: $
	const $toggles = document.querySelectorAll('.toggle'); //NodeList(유사배열)
	const $toggleBtn = document.getElementById('toggle-btn');

	//button을 클릭했을 때 함수 실행
	$toggleBtn.addEventListener('click', function () {
		toggleElements();
	});

	window.addEventListener('resize', function () {
		//window(브라우저)가 resize(크기가 늘어나고 줄어들때)될 때
		if (window.innerWidth > 1024) {
			//Off toggle element
			offElements();
		}
	});

	function toggleElements() {
		//toggle이 보이고 사라지는 것 만드는 함수
		//$toggles(유사배열)반복 할때 마다 function 실행
		[].forEach.call($toggles, function (toggle) {
			// toggle에 .toggle에 .on 있으면 빼고 없으면 넣어준다.
			toggle.classList.toggle('on'); //classList: class제어 
		})
	}

	function offElements() {
		[].forEach.call($toggles, function (toggle){
			//toggle에 있는 .on를 지우겠다
			toggle.classList.remove('on');
		})
	}
})(window, document)






























