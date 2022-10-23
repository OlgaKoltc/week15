
function colorMe(){
    document.querySelector('#name').style.backgroundColor = 'blue'
}
function colorMeBack(){
    document.querySelector('#name').style.backgroundColor = 'white'
}

// let input = document.querySelectorAll('input');
// input.addEventListener('onmouseover',function(){
//     document.querySelector('input').style.backgroundColor.value = 'blue';
// });
let btn = document.querySelector('#next');
btn.addEventListener('click', checkPassword);
function checkPassword(){
    let password1 = document.getElementById('password1').value;
   if (password1.length >= 8){ 
    document.querySelector('#error').innerHTML = ('Подтвердите пароль')
   } else {
    document.querySelector('#error').innerHTML = ('Ваш пароль слишком короткий')
   }
}
let btn2 = document.querySelector('#enter');
btn2.addEventListener('click', sayWelcome);
function sayWelcome() {
    let user = document.querySelector('#name').value
    if (user !== '') { 
        alert (`Добро пожаловать, ${user}!`)
    }
    else {
        
        alert('Пожалуйста заполните все поля формы')
    }
}