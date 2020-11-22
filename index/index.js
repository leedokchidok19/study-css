//Test 확인
//alert('test code');//실행 확인
//console.log(`test vlaue : ${e}`);//값 확인

//hearder>nav 햄버거 버튼 - 화면 크기에 맞춰서 상단 메뉴 보이기/숨기기
const toggleBtn = document.querySelector('.navbar__toggleBtn');//햄버거 버튼
const menu = document.querySelector('.navbar__menu');//메뉴
//햄버거 버튼이 보일 때 클릭하면 숨겨진 메뉴가 보이는 이벤트
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

//section>article SNS 버튼 - SNS 버튼 클릭하면 SNS 이동
const snsBtn = document.querySelectorAll('.snsBtn');//SNS 버튼
snsBtn.forEach(item =>{//SNS 버튼들에 click 이벤트 주고 클릭하면 이동 및 경고
    item.addEventListener('click', (e) => {
        const a_tag = e.target.parentNode;
        if(a_tag.attributes[1].nodeValue === '#'){
            e.preventDefault();
            alert(`${a_tag.dataset.sns} 계정 등록이 안 되어 있습니다.`);   
        }
    });
});

//carousel - 수직 이벤트
const vertical_carousel = document.querySelector('.carousel.vertical');//수직 슬라이드 화면
const vertical_items = document.querySelectorAll('.carousel.vertical > article');//수직 슬라이드 화면 아이템
const v_length = vertical_items.length;//슬라이드 아이템 총 개수
let i = 0;//슬라이드 번호
vertical_carousel.addEventListener('wheel', (event) => {
    console.log(`y축 값 : ${event.deltaY}`);
    vertical_items.forEach(item => {
        item.classList.remove('active');
    });
    if(event.deltaY < 0){//스크롤이 위로 올라갈 때
        i--;
    }
    if(event.deltaY > 0){//스크롤이 아래로 내려갈 때
        i++;
    }
    //
    if(i >= v_length){//슬라이드 총 개수를 넘어갈 경우
        i=1;//마지막 -> 첫 번째 슬라이드
    }
    if(i < 0){
        i=v_length-1;//첫 번째 -> 마지막 슬라이드
    }
    console.log(`i : ${i}`);
    vertical_items[i].classList.add('active');

});