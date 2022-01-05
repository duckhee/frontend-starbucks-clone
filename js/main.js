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