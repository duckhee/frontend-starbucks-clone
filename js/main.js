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

// fade-in이라는 모든 요소의 값을 가져온다. .visual class 안에 잇는 fade-in class를 가진 요소를 가져온다.
const fadeEls = document.querySelectorAll(".visual .fade-in");
// forEach로 값을 가져오는 것
fadeEls.forEach(function(fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

// swiper setting
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 화면 전환이 위아래로 진행이 된다는 것
    autoplay: true, // 자동 재생 설정
    loop: true // 반복적으로 동작하게 하기 위한 설정
});

// swiper setting
new Swiper('.promotion .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3, // 한번에 3개의 슬라이드를 보여주겠다는 것
    spaceBetween: 10, // 좌우 10px 만큼의 띄워주겠다는 것
    centeredSlides: true, // 중앙에서 보여주겠다는 것
    loop: true,
    autoplay: {
        delay: 5000 // ms delay 설정
    },
    pagination: {
        el: '.promotion .swiper-pagination', // paging 처리를 위한 선택자
        clickable: true // click이 사용 가능한지 사용자의 페이지 번호 요소 제어 가능 여부 
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

// get .promotion class element
const promotionEl = document.querySelector(".promotion");
// get .toggle-promotion class element
const togglePromotionEl = document.querySelector(".toggle-promotion");

// 값 변경이 가능하게 하기 위해서 let으로 선언
let isHidePromotion = false;
// toggle 기능 추가
togglePromotionEl.addEventListener("click", function() {
    // 현재 값을 반전 값으로 변환을 해준다.
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion) {
        // class 요소에 해당 값 추가
        promotionEl.classList.add("hide");
    } else {
        // class 요소에 해당 값 삭제
        promotionEl.classList.remove("hide");
    }
});

// 
function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// floating object video icon function
function floatingObject(selector, delay, size) {
    // animation 
    gsap.to(selector, random(1.5, 2.5), {
        y: size, // y축에 이동하는 범위 설정
        repeat: -1, // 무한 반복하기 위한 것
        yoyo: true, // 위에서 아래로 아래에서 위로 올라가는 효과를 추가하는 것
        ease: Power1.easeInout, // ease 및 Timing 옵션으로 애니메이션의 효과를 조정 가능
        delay: random(0, delay)
    });
}


floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl) {
    // scroll magic의 메소드 중에 하나이다.
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 입력 해주면된다.
            triggerHook: .8 // 
        })
        .setClassToggle()
        .addTo();
});