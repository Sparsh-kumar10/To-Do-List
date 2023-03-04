const tasks = document.querySelectorAll('.task');
const menu = document.getElementsByClassName('btns')
// console.log(menu[0].classList.add('block'))
// let a=0;
for (i = 0; i < tasks.length; i++) {
    
}
const taskDetail=document.querySelectorAll('taskDetail');
const morebtn=document.querySelectorAll('.morebtn');
for(let i=0;i<morebtn.length;i++){
    morebtn[i].addEventListener('click',function(){
        morebtn[i].parentNode.parentNode.parentNode.classList.toggle('active')
        if(morebtn[i].innerHTML==='more'){
            morebtn[i].innerHTML='less'
        }
        else{
            morebtn[i].innerHTML='more'
        }
    })
    let a = i
    morebtn[i].addEventListener('click', function () {
        if(menu[a].classList.contains('block')){
            menu[a].classList.remove('block');
        }
        else{
            menu[a].classList.add('block');
        }
    })
}
