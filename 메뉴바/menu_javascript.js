
function toggleMenu() {
    let navigation = document.querySelector('.navi');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');

}

$(document).ready( function() {
    $("#headers").load("common/header.html");  //헤더 인클루드
    $("#footers").load("common/footer.html");  //푸터부분 인클루드
                }
    );