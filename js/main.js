// search class selector
const searchEl = document.querySelector(".search");

// const searchInputEl = document.querySelector(".search input");
const searchInputEl = searchEl.querySelector("input");

// 익명 함수 선언 과 event 등록
searchEl.addEventListener("click", function() {
    // Logic...
    searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function() {
    // class 를 추가해주는 것
    searchEl.classList.add("focused");
    // html 속성을 추가 해주는 것 
    searchInputEl.setAttribute("placeholder", "통합 검색");
});

// focus 해제 시가 blur 이다.
searchInputEl.addEventListener("blur", function() {
    // class 를 삭제 해주는 것 
    searchEl.classList.remove("focused");
    // html 속성을 추가 해주는 것 
    searchInputEl.setAttribute("placeholder", "");
});

// badges의 선택자 현재 scroll 시 badges를 사라지게 하기 위해서 선택자를 가지고 온다.
const badgeEl = document.querySelector("header .badges");

// window는 현재 브라우저의 하나의 탭을 의미한다. 화면 자체라고 이해를 해도된다.
// _.throttle()은 lodash의 라이브러리 함수이다. 0.3초의 부하를 주어서 실행을 하겠다는 것이다.
window.addEventListener("scroll", _.throttle(function() {
    console.log("scroll!", window.scrollY);
    // scroll시 y의 값이 갱신이 된다.
    if (window.scrollY > 500) {
        // badge display none
        // javascript css style add
        // badgeEl.style.display = 'none';
        // gsap.to(요소 , 지속시간, 옵션(애니메이션 처리 옵션));
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        //badge display 
        // badgeEl.style.display = 'block';
        // gsap.to(요소 , 지속시간, 옵션(애니메이션 처리 옵션));
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
// _.throttle(function(), delay time);