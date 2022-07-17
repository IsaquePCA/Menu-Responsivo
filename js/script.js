function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').scr = "assets/img/menu_white_36dp.svg";
    }else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').scr = "assets/img/close_white_36dp.svg";
    }
}

// temas

function escuro() {
    let header = document.querySelector('header')
    let main = document.querySelector('main')
    let title1 = document.querySelector('.title1')
    let title2 = document.querySelector('.title2')
    let title3 = document.querySelector('.title3')
    let title4 = document.querySelector('.title4')


    let para1 = document.querySelector('.para1')
    let para2 = document.querySelector('.para2')
    let para3 = document.querySelector('.para3')
    let para4 = document.querySelector('.para4')
    let para5 = document.querySelector('.para5')
    let para6 = document.querySelector('.para6')
    let para7 = document.querySelector('.para7')
    let para8 = document.querySelector('.para8')
    let para9 = document.querySelector('.para9')
    
    


    header.style.backgroundColor = '#000'
    main.style.backgroundColor = '#000'


    title1.style.color = '#fff'
    title2.style.color = '#fff'
    title3.style.color = '#fff'
    title4.style.color = '#fff'



    para1.style.color = '#fff'
    para2.style.color = '#fff'
    para3.style.color = '#fff'
    para4.style.color = '#fff'
    para5.style.color = '#fff'
    para6.style.color = '#fff'
    para7.style.color = '#fff'
    para8.style.color = '#fff'
    para9.style.color = '#fff'
}


function claro() {
    let header = document.querySelector('header')
    let main = document.querySelector('main')

    header.style.backgroundColor = 'cyan'
    main.style.backgroundColor = '#fff'

    let title1 = document.querySelector('.title1')
    let title2 = document.querySelector('.title2')
    let title3 = document.querySelector('.title3')
    let title4 = document.querySelector('.title4')


    let para1 = document.querySelector('.para1')
    let para2 = document.querySelector('.para2')
    let para3 = document.querySelector('.para3')
    let para4 = document.querySelector('.para4')
    let para5 = document.querySelector('.para5')
    let para6 = document.querySelector('.para6')
    let para7 = document.querySelector('.para7')
    let para8 = document.querySelector('.para8')
    let para9 = document.querySelector('.para9')


    title1.style.color = '#000'
    title2.style.color = '#000'
    title3.style.color = '#000'
    title4.style.color = '#000'



    para1.style.color = '#000'
    para2.style.color = '#000'
    para3.style.color = '#000'
    para4.style.color = '#000'
    para5.style.color = '#000'
    para6.style.color = '#000'
    para7.style.color = '#000'
    para8.style.color = '#000'
    para9.style.color = '#000'

}