/*

     планы:

1) страницу приветствия/регистрации/входа

  хранить часть данных в локалСтор и для автозагрузки сравнивать с данными в Моби


4) адаптивный дизайн


6) вставить в форму поле "родство/связь"


8) скорость поминовения


9) гаснет экран при режиме поминовения


10) шишкин сугубая


11) после ввода инпута лейблы


13) верификация имени и тп. не должно быть пробелов


15) после создания группы убрать свечение кнопки


18) первое редактирование идет по плану. далее путаница при расставлении данных в таблицу ( вместо муж пола женский );



22) тип инпута в создании гр. почему показывает перейти


23) не удаляет вновь созданную большую группу 


24) темная<=>светлая темы


25) в календаре запретить прокрутку по краям


26) система оповещения годовщин


*/


/* main colors:


#CB3C25 = rgba(203, 60, 37,.5)

#01142F = rgba(1, 20, 47,.5)


*/


// localStorage.clear();


//alert(document.querySelectorAll('.loader svg path')[1].getTotalLength());




/* -----------------------------------

---- обьявляем переменные ---------------------------------- */





const myKey = 'apiKey=sKw_oqVSmdk0cj8XolfkSyap__JKRPLt';


let myCollection = 'iereiAleksandrBartov';


let enter = false;

let reg = false;


/*  iereiAleksandrBartov  */


let speed = 20;  /* чем меньше число, тем выше скорость */



const endings = [

  ['мин', 'мина'],

  ['сий', 'сия'],

  ['гей', 'гия'],

  ['ман', 'мана'],

  ['тор', 'тора'],

  ['Зоя', 'Зои'],

  ['дра', 'дры'],

  ['иил', 'иила'],

  ['ест', 'еста'],

  ['лья', 'льи'],

  ['рон', 'рона'],

  ['ера', 'еры'],

  ['рей', 'рея'],

  ['сим', 'сима'],

  ['рья', 'рьи'],

  ['вел', 'вла'],

  ['дор', 'дора'],

  ['нья', 'ньи'],

  ['арк', 'арка'],

  ['ид','ида'],

  ['фан','фана'],

  ['ара','ары'],

  ['ий','ия'],

  ['на','ны'],

  ['лл','лла'],

  ['та','ты'],

  ['ида','иды'],

  ['ис','иса'],

  ['нн','нна'],

  ['овь','ови'],

  ['жда','жды'],

  ['ика','ики'],

  ['еб','еба'],

  ['фим','фима'],

  ['рх','рха'],

  ['ия','ии'],

  ['лав','лава'],

  ['ндр','ндра'],

  ['имир','имира'],

  ['льга','льги'],

  ['тин','тина'],

  ['аил','аила'],

  ['фон','фона'],

  ['лег','лега'],

  ['Лев','Льва'],

  ['авва','аввы'],

  ['лла','ллы'],

  ['нна','нны'],

  ['орь', 'оря'],

  ['сей', 'сея'],

  ['имма', 'иммы'],

  ['адий', 'адия'],

  ['лай', 'лая']

];


const logoLetters = document.querySelectorAll(".test");


let groupsOrder = [];


let userGroup = '';


let renamedGroup;



let last_known_scroll_position = 0;

let countSearched;

let IDtoEdit;

let ticking = false, playModeStart = false;


let pausePressed = false;


let bckgrnd;

let oUpok;


let deepestPoint, lastCounterState;


let editMode = false;


let groupsArr = new Set();


let groupToDel;


const allFormFields = [...document.querySelectorAll('.thisIsWhatToSave')];



const pannel = document.getElementsByClassName('pannel')[0];


const btnAdd = document.getElementsByClassName('addBtnDiv')[0];


const formInputs = document.getElementsByTagName('input');


const main = document.getElementsByTagName('main')[0];


const allLabels = [...document.getElementsByTagName('label')];


const allSelects = [...document.getElementsByTagName('select')];


const inputForSearch = document.getElementsByClassName('inputForSearch')[0];


const sandwich = document.getElementsByClassName('sandwich')[0];


const cross = document.getElementsByClassName('cross')[1];


const hMenu = document.getElementsByClassName('hMenu')[0];


const addListTag = document.getElementsByClassName('addListTag')[0];


const addGroupTag = document.getElementsByClassName('addGroupTag')[0];


const allListTag = document.getElementsByClassName('allListTag')[0];


const changeListTag = document.getElementsByClassName('changeListTag')[0];


const changeGroupTag = document.getElementsByClassName('changeGroupTag')[0];


const exitTag = document.getElementsByClassName('exitTag')[0];


const formHolder = document.getElementsByClassName('formHolder')[0];


const allItems = document.getElementsByClassName('allItems')[0];


const searchingForChange = document.getElementsByClassName('searchingForChange')[0];


const searchResults = document.getElementsByClassName('searchResults')[0];


const allRadio = document.querySelectorAll("input[type='radio']");


const pannelsSVG = [...document.querySelectorAll(".pannel svg")];


const newCreatedData = [...document.getElementsByClassName('newCreatedData')];


// код слайдера

let oZdraviiClicked = false;

let startx, scrollLeft, walk;

let startx2, scrollLeft2, walk2;


const start = Date.now();


let myReq;


   const requestAn = window.requestAnimationFrame;


   const cancelReq = window.cancelAnimationFrame;


  let getStartet = true;


  let user;


  let startGroupsArr;


if(!localStorage.getItem('myOrder')) {

  startGroupsArr = '';

  // alert('there is not any data in localStore!');

} else {

  startGroupsArr = localStorage.getItem('myOrder').split(',');

  // alert(startGroupsArr);

}




/* -----------------------------------

---- Конец обьявления переменных ---------------------------------- */




/* тут начинается работа work begins here */


/* ---------------------------при загрузке страницы первым делов запрашиваем данные ----------------------------- */


if(!localStorage.getItem('registeredInMySinodiki')) {


oZdravii.classList.add('hiddening');

oUpokoenii.classList.add('hiddening');


sandwich.classList.add('hiddening');


allItems.classList.add('hiddening');


setTimeout(()=>{

document.getElementsByClassName('loader')[0].classList.add('loaderGone');

}, 2200);


setTimeout(()=>{

document.getElementsByClassName('loader')[0].style.display = 'none';


  let div = document.createElement("div");

div.innerHTML = `

  <svg viewBox='0 0 100 100'>

       <g fill="transparent" stroke="rgba(255,255,255,.04)" stroke-width="1px" stroke-linejoin="round" stroke-linecap="round">

               <path d="M49.75,90.5 A 40.5 40.5 0 1 1 50 90.5" />

               <path d="M48,20 V25 H43 M43,29 H48 V34 H26 M26,38 H48 V63 L43,60 M43,65 L48,68 V86 A 36 36 0 1 1 52 86 V69.5 L57,72.5 M57,67.5 L52,64.5 V38 H74 M74,34 H52 V29 H57 M57,25 H52 V20" />

             </g>

           </svg>

   <span id='enterTag' onclick='showLogFields()'>вход</span>

   <span id='regTag' onclick='showRegFields()'>регистрация</span>

   <input type='password' id='passInputLog' placeholder='введите пароль' />

    <svg class='lineDivider' viewBox='0 0 100 100'>

       <g fill="transparent" stroke="#ffffff" stroke-width=".41px" stroke-linejoin="round">

               <path d="M5,95 H95" />

             </g>

           </svg>

   <button onclick='checkPassAndEnter()' id='logBtn'>войти</button>


<input type='email' id='emailInputReg' class='hiddening' placeholder='ваш email' />

    <svg class='lineDivider hiddening' viewBox='0 0 100 100'>

       <g fill="transparent" stroke="#ffffff" stroke-width=".41px" stroke-linejoin="round">

               <path d="M5,95 H95" />

             </g>

           </svg>

<input type='password' id='passInputReg' class='hiddening' placeholder='придумайте пароль' />

   <svg class='lineDivider lastDivider hiddening' viewBox='0 0 100 100'>

       <g fill="transparent" stroke="#ffffff" stroke-width=".41px" stroke-linejoin="round">

               <path d="M5,95 H95" />

             </g>

           </svg>

   <button onclick='newUserReg()' class='hiddening' id='regBtn'>зарегистрироваться</button>

`;

div.classList.add('singInPage');


 main.append(div);


}, 3000);



  

} else {


// берем почту и пароль из локала, если и enter = true


myCollection = `${localStorage.getItem('myMail')}${localStorage.getItem('myPass')}`;


fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{

  const step = Date.now();

  if(step-start>4000){

document.getElementsByClassName('loader')[0].classList.add('loaderGone');


  setTimeout(()=>{

oZdravii.classList.remove('start1');

oUpokoenii.classList.remove('start2');

document.getElementsByClassName('loader')[0].style.display = 'none';

}, 700);

}else{

  setTimeout(()=>{

    document.getElementsByClassName('loader')[0].classList.add('loaderGone');


  setTimeout(()=>{

oZdravii.classList.remove('start1');

oUpokoenii.classList.remove('start2');

document.getElementsByClassName('loader')[0].style.display = 'none';

}, 700);

  }, 2500);

}


  loadedArr = allNamesArr;


  groupeDefine();


  /*

setTimeout(downloadNewDataFromMobi(allNamesArr), 0);

  */


})

.catch(e=>console.log(e));


}




/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@ обьявляем функции @@@@@@@@@@

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@@@@ */


  function showYellowLabel(e) {

    if(e.target.value!=='' && e.target.value.length===1) {

      //alert(e.target.value);

      let span = document.createElement('span');

   span.classList.add('yellowLabel');

   span.innerHTML = e.target.placeholder;

  span.style.color = '#EDB021';

  span.style.fontSize = '.7rem';

  span.style.position = 'absolute';

  span.style.top = '.5px';

  span.style.left = '5px';

       //alert(this.outerHTML);

e.target.parentNode.prepend(span);

    } else if(e.target.value.length===0){

      [...e.target.parentNode.querySelectorAll(".yellowLabel")].forEach(s=>s.remove());

    }

  }




 function checkLabel() {

  [...document.querySelectorAll("input")]

   .filter(i=>i.type!=='radio')

   .forEach(i=>{

     if(i.value!=='') {

   // alert('hi!');

   let span = document.createElement('span');

   span.classList.add('yellowLabel');

   span.innerHTML = i.placeholder;

  span.style.color = '#EDB021';

  span.style.fontSize = '.7rem';

  span.style.position = 'absolute';

  span.style.top = '.5px';

  span.style.left = '5px';

       

i.parentNode.prepend(span);

     }

   });


  [...document.querySelectorAll("textarea")]

   .forEach(i=>{

     if(i.value!=='') {

   // alert('hi!');

   let span = document.createElement('span');

   span.classList.add('yellowLabel');

   span.innerHTML = i.placeholder;

  span.style.color = '#EDB021';

  span.style.fontSize = '.7rem';

  span.style.position = 'absolute';

  span.style.top = '.5px';

  span.style.left = '5px';

      

i.parentNode.prepend(span);

     }

   });

}





//---функция открытия формы редактирования---------



function showEditform() {



[...document.querySelectorAll("input")]

.filter(i=>i.type!=='radio')

.forEach(i=>addEventListener('keyup', showYellowLabel));



[...document.querySelectorAll("textarea")].forEach(i=>addEventListener('keyup', showYellowLabel));


allSelects.filter(d=>d.id!=='groupsSelect').forEach(s=>addEventListener('change', selectRules));


editMode = true;


[...document.querySelectorAll('.searchedItem')].forEach(d=>d.removeEventListener('click', showEditform, false));


window.scrollTo({top: 0, behavior: 'smooth'});


// пробую заполнить имеющийся шаблон

searchingForChange.classList.add('hiddening');

formHolder.style.opacity = 1;

formHolder.classList.remove('hiddening');


document.querySelectorAll('.formTitle')[0].innerHTML = loadedArr

        .filter(p=>p.count==this.id).map(p=>{

   countSearched = p.count;

   IDtoEdit = p._id.$oid;

   


   return `

    <div id='deleteName'>удалить запись</div>

    <div id='editCancel'>отменить редактирование</div>

    <h3>${p.other} ${p.name} ${p.surname}</h3>

    <h5>( режим редактирования )</h5>

`});


//--------------------------- -----------------------------


 let person = loadedArr

        .filter(p=>p.count==this.id)[0];


 console.log(person);


 let {

    id,

    live,

    sex,

    name,

    surname,

    fathername,

    dateOfBirth,

    dateOfBapt,

    dateOfSaint,

    dateDeath,

    dateOfVows,

    dateOfOrdinationDiak,

    dateOfOrdinationPriest,

    dateOfOrdinationBish,

    dateOfEnthron,

    comment,

    other,

    count,

    group

 } = person;



// установили пол и жизнь

[...allRadio].forEach(r=>{

  //r.checked = false;

  if(r.value === live) r.checked = true;

  if(r.value === sex) r.checked = true;

   //setSelects();

});


  setSelects();


// установили селекты


[...document.getElementsByTagName('select')].filter(s=>!s.parentElement.classList.contains('hiddening')).forEach(s=>{

     [...s.children].filter(op=>op.value==other[0] || op.value==other[1]).forEach(o=>o.selected=true);

  });



// устанавливаем группы


group == undefined ? console.log('that is old style') : group.forEach(g=>{

  [...document.querySelectorAll(".optionForGroup")].filter(o=>o.value===g).forEach(o=>o.selected=true);


});


// заполнили инпуты


[...document.querySelectorAll("input")]

   .filter(i=>i.type!=='radio')

   .forEach(i=>{

    const matchName = i.name;

    Object.keys(person)

     .forEach(key=>{

       if(key==matchName) i.value = person[key]

     });

});



[...document.querySelectorAll(".datePicker")].forEach(input=>{

     if(input.value) {

       let div = document.createElement("div");

div.innerHTML = `

  <svg viewBox="0 0 100 100">

       <circle cx="50" cy="50" r="20" fill="#CB3C25"/>

       <g fill="transparent" stroke="#ffffff" stroke-width="4px" stroke-linejoin="round" stroke-linecap="round">

               <path d="M44,44 L56,56 M44,56 L56,44" />

             </g>

           </svg>

`;

div.classList.add("miniCrossForDate");

div.onclick = delDate;


input.parentElement.append(div);

     }

});


// комментарий textarea заполнили



[...document.querySelectorAll("textarea")].forEach(t=>{

    const matchName = t.name;

    Object.keys(person)

     .forEach(key=>{

       if(key==matchName) t.value = person[key]

     });

});


// ----------------------------



//прячем боттон и меняем текст на ней ------------------------ -------------------------------


btnAdd.innerHTML = 'сохранить изменения';


// btnAdd.disabled = true;


btnAdd.classList.add('hiddening');


// ------- на любое изменение добовляем слушателя и тогда отображаем кнопку


setTimeout(()=>{


checkLabel();


allFormFields.forEach(el=>el.addEventListener('change', lookAtFofmChange, false));


groupsSelect.addEventListener('change', lookAtFofmChange, false);

}, 200);



setTimeout(()=>{

  editCancel.addEventListener('click', exitEditModeWithoutSave);


deleteName.addEventListener('click', deleteNote);

}, 0);


}





// функция выхода ••••••••••••

// •••••••••••••••••••••••••••


function accountExit() {

  [...formInputs].forEach(i=>i.value = '');

  localStorage.clear();

document.getElementsByClassName('loader')[0].style.display = 'block';

document.getElementsByClassName('loader')[0].classList.remove('loaderGone');


const myKey = [...document.querySelectorAll('.hml')]

   .filter(link=>link.classList.contains('activLink'))[0].dataset.key;


document.querySelectorAll(`div[data-key='${myKey}']`)[0].classList.add('hiddening');


setTimeout(()=>{

   closingMenu();

document.getElementsByClassName('loader')[0].classList.add('loaderGone');

document.getElementsByClassName('singInPage')[0].classList.remove('hiddening');

sandwich.classList.add('hiddening');

}, 1500);


setTimeout(()=>{

  document.getElementsByClassName('loader')[0].style.display = 'none';

}, 1700);

}




// new user registration f •••• •••••••••••••••••••••••••••••••


function newUserReg() {


  myAlert(`идет проверка данных

 и регистрация!`);


  const myPass = passInputReg.value;

  const myMail = emailInputReg.value;


  if(!myPass || !myMail) {

    document.getElementsByClassName('msgDiv')[0].innerHTML = `Пожалуста, введите email и пароль!`;

setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);

  return;

  }


  let newData = JSON.stringify({

    myMail,

    myPass,

    enter: true

  });


  const options = { 

  method: 'POST',

  headers: {

'Content-Type': 'application/json'

  },

  body: newData

};


fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/users?${myKey}`, options)

.then(data=>data.json())

.then(user=>{

localStorage.clear();

JSON.stringify(localStorage.setItem('myMail', user.myMail));

JSON.stringify(localStorage.setItem('myPass', user.myPass));

JSON.stringify(localStorage.setItem('enter', user.enter));

JSON.stringify(localStorage.setItem('registeredInMySinodiki', 'true'));


myCollection = `${user.myMail}${user.myPass}`; 


fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{


document.getElementsByClassName('msgDiv')[0].innerHTML = `Регистрация завершена!`;

setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);

  document.getElementsByClassName('singInPage')[0].classList.add('hiddening');


oZdravii.classList.remove('hiddening');

oUpokoenii.classList.remove('hiddening');


sandwich.classList.remove('hiddening');


allItems.classList.remove('hiddening');

  

oZdravii.classList.remove('start1');

oUpokoenii.classList.remove('start2');


  loadedArr = allNamesArr;


  groupeDefine();

})

.catch(e=>console.log(e));


})

.catch(err=>console.log(`что-то не так при сохранении нового юзера! ${err}`));

}


// end newUserRegistration •£££••••~~~~~*******>%%########%%






// tag's change functions •••••  •••••••••••••••••••••••••••••••


function showLogFields() {

  enterTag.style.color = 'rgba(255,255,255,1)';

  enterTag.style.borderBottom = 'none';

  enterTag.style.borderTop = '1px solid #BDC6BC';


  regTag.style.color = 'rgba(255,255,255,.2)';

  regTag.style.borderTop = 'none';

  regTag.style.borderBottom = '1px solid #BDC6BC';


  logBtn.classList.remove('hiddening');

passInputLog.classList.remove('hiddening');

document.getElementsByClassName('lineDivider')[0].classList.remove('hiddening');


regBtn.classList.add('hiddening');

passInputReg.classList.add('hiddening');

emailInputReg.classList.add('hiddening');

document.getElementsByClassName('lineDivider')[1].classList.add('hiddening');

document.getElementsByClassName('lineDivider')[2].classList.add('hiddening');


}


// -----------------------------



function showRegFields() {

  regTag.style.color = 'rgba(255,255,255,1)';

  regTag.style.borderBottom = 'none';

  regTag.style.borderTop = '1px solid #BDC6BC';


  enterTag.style.color = 'rgba(255,255,255,.2)';

  enterTag.style.borderTop = 'none';

  enterTag.style.borderBottom = '1px solid #BDC6BC';


  logBtn.classList.add('hiddening');

passInputLog.classList.add('hiddening');

document.getElementsByClassName('lineDivider')[0].classList.add('hiddening');


regBtn.classList.remove('hiddening');

passInputReg.classList.remove('hiddening');

emailInputReg.classList.remove('hiddening');

document.getElementsByClassName('lineDivider')[1].classList.remove('hiddening');

document.getElementsByClassName('lineDivider')[2].classList.remove('hiddening');

  

}


// tag's change functions end •••••  •••••••••••••••••••••••••••••••




function checkPassAndEnter() {


  myAlert('загрузка...');

 

  fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/users?${myKey}`)

.then(data=>data.json())

.then(users=>{

    user = users.filter(user=>user.myPass===passInputLog.value)[0];


    if(!user) {


document.getElementsByClassName('msgDiv')[0].innerHTML = `некорректный пароль!

попробуйте еще раз!`;

setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);


      // alert('данные неверны!');


    } else {

      

      myCollection = `${user.myMail}${user.myPass}`;


fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{


document.getElementsByClassName('msgDiv')[0].innerHTML = `загрузка завершена!`;

setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);


localStorage.clear();

JSON.stringify(localStorage.setItem('myMail', user.myMail));

JSON.stringify(localStorage.setItem('myPass', user.myPass));

JSON.stringify(localStorage.setItem('enter', user.enter));

JSON.stringify(localStorage.setItem('registeredInMySinodiki', 'true'));


document.getElementsByClassName('singInPage')[0].classList.add('hiddening');


oZdravii.classList.remove('hiddening');

oUpokoenii.classList.remove('hiddening');


sandwich.classList.remove('hiddening');


allItems.classList.remove('hiddening');

  

oZdravii.classList.remove('start1');

oUpokoenii.classList.remove('start2');


  loadedArr = allNamesArr;


  groupeDefine();


  /*

setTimeout(downloadNewDataFromMobi(allNamesArr), 0);

  */


})

.catch(e=>console.log(e));

    }

})

.catch(err=>console.log(`что-то не так при попытке найти пароль среди юзеров! ${err}`));

}




function deleteSearchInpt() {

  this.classList.add('invsbLink');

inputForSearch.value = '';

searchResults.innerHTML = '';

}



// функция преобразования запятой в названии группы•••••



function commaChange(title) {

  if([...title].includes(',')) {

     const titleWithoutComma = [...title].map(l=>{

       if(l===',') {

         return l = '@';

       }

       return l;

     }).join('');

     return titleWithoutComma;

  }

     return title;

}



//console.log(commaChange('крестные, крестники, дети и все'));




// конец функции преобразования запятой•••••••••••••••••





// ---- функция скроллинга вверх--------------

  

  function scrollToTop() {



   const oZdrPlay = document.getElementsByClassName('showedPersonsList')[0];


   const oUpkPlay = document.getElementsByClassName('showedPersonsList')[1];


  

   let startPlay = Date.now();

   let startPosition = window.scrollY;


   if(oZdraviiClicked) {

   let counter = 0;

   function scrollSinodikOZdravii(){


   counter = ((Date.now()-startPlay)/speed)+startPosition;

    window.scrollTo({top: counter, behavior: 'smooth'});


   lastCounterState = counter;

 

if(counter<oZdrPlay.clientHeight){

     myReq = requestAn(scrollSinodikOZdravii);

} else {

  closePlayMode();

}

     }

myReq = requestAn(scrollSinodikOZdravii);


    } else {


      let counter = 0;

   function scrollSinodikOUpokoenii(){

    counter = ((Date.now()-startPlay)/speed)+startPosition;

    window.scrollTo({top: counter, behavior: 'smooth'});


  lastCounterState = counter;

    

if(counter<oUpkPlay.clientHeight){

myReq = requestAn(scrollSinodikOUpokoenii);

} else {

  closePlayMode();

}


     }

myReq = requestAn(scrollSinodikOUpokoenii);

    }

  }







// """"" изменение порядка показа групп """"""


function changingGroupOrder() {



  const indexOfChoosenSel = [...document.querySelectorAll('.selectForGroupOrder')].indexOf(this);


  const selectedGroup = [...this.childNodes].filter(o=>o.selected)[0].value;


  const indexOfTheSameSel = startGroupsArr.indexOf(selectedGroup);


[...[...document.querySelectorAll('.selectForGroupOrder')][indexOfTheSameSel].childNodes].forEach(o=>{

  if(o.value === startGroupsArr[indexOfChoosenSel]) o.selected = true

});



setTimeout(()=>{

  startGroupsArr = [...document.querySelectorAll('.selectForGroupOrder')].map(s=>{

return [...s.childNodes].filter(o=>o.selected)[0].value;

});


  JSON.stringify(localStorage.setItem('myOrder', startGroupsArr));


downloadNewDataFromMobi(loadedArr);


}, 0);


}



// &&&&)))(((( конец порядка ::::::::::::::::::::





// ------- режим поминовения. определяет если в центре ---------------


function getCenterOfPage() {

[...document.querySelectorAll('.commonBox')].forEach(div=>{

  

  if((div.offsetTop-window.scrollY) < (screen.height/8)){

div.style.opacity = 0; 

 } else if((div.offsetTop-window.scrollY) > (screen.height/2)){

div.style.opacity = 0; 

 } else {

  div.style.opacity = 1;

 }

});


if(oZdraviiClicked) {

[...document.querySelectorAll('.groupLine')]

    .filter(t=>t.classList.contains('oZ'))

    .forEach(t=>{

  if((t.offsetTop-window.scrollY) < -70) groupsTitle.innerHTML = t.innerHTML

});

} else {

  [...document.querySelectorAll('.groupLine')]

    .filter(t=>t.classList.contains('oU'))

    .forEach(t=>{

  if((t.offsetTop-window.scrollY) < -70) {

groupsTitle.innerHTML = t.innerHTML

groupsTitle.style.color = '#01142F';

}

});

}


}






// ••••••••••••••••••••••••••••



function downloadNewDataFromMobi(allNamesArr) {


setTimeout(()=>{


  let checker = new Set(); // чтобы не повторять имя в другой группе



let actualArr = startGroupsArr || [...groupsArr];


  oZdravii.innerHTML = `

    

     <div class='allListHeader'>

     <svg viewBox='0 0 100 100'>

       <g fill="transparent" stroke="#ffffff" stroke-width="1px" stroke-linejoin="round" stroke-linecap="round">

               <path d="M49.75,90.5 A 40.5 40.5 0 1 1 50 90.5" />

               <path d="M48,20 V25 H43 M43,29 H48 V34 H26 M26,38 H48 V63 L43,60 M43,65 L48,68 V86 A 36 36 0 1 1 52 86 V69.5 L57,72.5 M57,67.5 L52,64.5 V38 H74 M74,34 H52 V29 H57 M57,25 H52 V20" />

             </g>

           </svg>

     </br>

    <h3 style='color:#CB3C25'><strong>О ЗДРАВИИ</strong></h4>

    </div>

    </br>

    </br>

    <div class='showedPersonsList'>${actualArr

    .map(g=>{


      if(allNamesArr

  .filter(data=>data.live == 'о здравии' && data.group!==undefined && data.group.includes(g) && ![...checker].includes(data.count)).length<1) return;

      

      return `

        <span class='groupLine oZ'>${g}</span>

        <div>

          ${allNamesArr

  .filter(data=>data.live == 'о здравии' && data.group!==undefined && data.group.includes(g) && ![...checker].includes(data.count))

  .sort((a,b)=>a.surname>b.surname)

  .map(data=>{


  checker.add(data.count);


  return (`<div class='commonBox'>

    <div class='commonBox_name'>${data.other.join(' ')} ${namesEndEditor(data.name)}</div>

    <div class='commonBox_other'>(${ data.surname &&  data.comment[0] ? [data.surname, ...data.comment].join(', ') : data.surname && !data.comment[0] ? data.surname : data.comment})</div>

    </div>

  `);

}).join('</br>')}

        </div>

      `

    })

    .join('</br>')}

  </br></br></br>+ + +</br></br>КОНЕЦ И БОГУ СЛАВА!</br></br>+ + +</br></br></br></br></br></br>

    

</div>

`;

}, 0);





setTimeout(()=>{


  let checker = new Set(); 



let actualArr = startGroupsArr || [...groupsArr];


  oUpokoenii.innerHTML = `


    <div class='allListHeader'>

    <svg viewBox='0 0 100 100'>

       <g fill="transparent" stroke="#ffffff" stroke-width="1px" stroke-linejoin="round" stroke-linecap="round">

               <path d="M49.75,90.5 A 40.5 40.5 0 1 1 50 90.5" />

               <path d="M48,20 V25 H43 M43,29 H48 V34 H26 M26,38 H48 V63 L43,60 M43,65 L48,68 V86 A 36 36 0 1 1 52 86 V69.5 L57,72.5 M57,67.5 L52,64.5 V38 H74 M74,34 H52 V29 H57 M57,25 H52 V20" />

             </g>

           </svg>

     </br>

    <h3 style='color:#01142F'><strong>О УПОКОЕНИИ</strong></h4>

    </div>

    </br></br>

    <div class='showedPersonsList'>${actualArr

    .map(g=>{


      if(allNamesArr

  .filter(data=>data.live == 'о упокоении' && data.group!==undefined && data.group.includes(g) && ![...checker].includes(data.count)).length<1) return;


      return `

        <span class='groupLine oU'>${g}</span>

        <div>

          ${allNamesArr

  .filter(data=>data.live == 'о упокоении' && data.group!==undefined && data.group.includes(g) && ![...checker].includes(data.count))

  .sort((a, b)=>a.sex<b.sex)

  .map(data=>{


  checker.add(data.count);


  return (`<div class='commonBox'>

    <div class='commonBox_name'>${data.other.join(' ')} ${namesEndEditor(data.name)}</div>

    <div class='commonBox_other'>(${ data.surname &&  data.comment[0] ? [data.surname, ...data.comment].join(', ') : data.surname && !data.comment[0] ? data.surname : data.comment})</div>

    </div>

  `);

}).join('</br>')}

        </div>

      `

    })

    .join('</br>')}

  </br></br></br>+ + +</br></br>КОНЕЦ И БОГУ СЛАВА!</br></br>+ + +</br></br></br></br></br></br>

</div>

`;

}, 0);


// localStorage.clear();


}




// переименование группы ____

//_____________________________


function toRenameGroup() {

  groupToRename = [...this.childNodes].filter(c=>c.selected)

.map(o=>o.value)[0];


  if(groupToRename==='0') return;


  myAlert(`переименовать группу ${groupToRename}:</br><input autofocus id='rename' value='${groupToRename}' /></br>

 <div class='btnsDeleteName'>

<button id='renameGroupCancelBtn'>отмена</button><button id='renameGroupOkBtn'>сохранить</button>

</div>

`);

renameGroupCancelBtn.addEventListener('click', cancelDel);


renameGroupOkBtn.addEventListener('click', okGroupRename);

}




// окончат переименование <<<~~~ >>>~~~~~~~~<<<<<<~~~~~>>>>>


  function okGroupRename() {



   renamedGroup =  [...document.getElementsByClassName('msgDiv')[0].childNodes].filter(n=>n.nodeName==='INPUT').map(n=>n.value);


    document.getElementsByClassName('msgDiv')[0].innerHTML = `сохраняем изменения`;

  // ------



   loadedArr.filter(p=>p.group && p.group.includes(groupToRename))

    .forEach(person=>{

      const IDmobi = person._id.$oid;


   let {

   thatId, live, sex, name, surname, fathername, dateOfBirth, dateOfBapt, dateOfSaint, dateDeath, dateOfVows, dateOfOrdinationDiak, dateOfOrdinationPriest, dateOfOrdinationBish, dateOfEnthron, comment, other, count, group

   } = person;


   group = group.filter(g=>g!==groupToRename);


   group.push(renamedGroup[0]);


   JSON.stringify(localStorage.setItem('myOrder', startGroupsArr));



   let editData = JSON.stringify({

    live,

    sex,

    name, 

    surname, 

    fathername,

    dateOfBirth,

    dateOfBapt,

    dateOfSaint,

    dateDeath,

    dateOfVows,

    dateOfOrdinationDiak,

    dateOfOrdinationPriest,

    dateOfOrdinationBish,

    dateOfEnthron,

    comment,

    other,

    count,

    group

  });


  const options = { 

  method: 'PUT',

  headers: {

'Content-Type': 'application/json'

  },

  body: editData

};


  

  fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}/${IDmobi}?${myKey}`, options)

.then(data=>data.json())

.then(person=>{

// загружаем обновленные данные

// обновляем и список групп

  

})

.catch(err=>console.log(err));


  });



  setTimeout(()=>{

    fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{


   startGroupsArr = startGroupsArr.filter(g=>g!==groupToRename);


  console.log(startGroupsArr);


startGroupsArr.push(renamedGroup[0]);

  

  console.log(startGroupsArr);



  JSON.stringify(localStorage.setItem('myOrder', startGroupsArr));

  

  loadedArr = allNamesArr;

  groupeDefine();


  setTimeout(downloadNewDataFromMobi(allNamesArr), 0);


  document.getElementsByClassName('msgDiv')[0].innerHTML = `Группа переименована!`;

setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);


})

.catch(e=>console.log(e));

  }, 0);


 

  }

  


// >>>>> удаление группы <<<<<

// >>>>>>>>>>>>>>>>><<<<<<<<<<<<


function toDeleteGroup() {

  groupToDel = [...this.childNodes].filter(c=>c.selected)

.map(o=>o.value)[0];


  if(groupToDel==='0') return;


  myAlert(`вы уверены, что хотите удалить группу:</br><strong>'${groupToDel}'</strong>?</br>

 <div class='btnsDeleteName'>

<button id='deleteGroupCancelBtn'>отмена</button><button id='deleteGroupOkBtn'>удалить</button>

</div>

`);


  deleteGroupCancelBtn.addEventListener('click', cancelDel);


deleteGroupOkBtn.addEventListener('click', okGroupDel);



}


// окончательное удаление-----


function okGroupDel(){

  document.getElementsByClassName('msgDiv')[0].innerHTML = `удаляем группу ${groupToDel}!`;


  groupsArr.delete(groupToDel);


  loadedArr.filter(p=>p.group && p.group.includes(groupToDel))

    .forEach(person=>{

      const IDmobi = person._id.$oid;



   let {

   thatId, live, sex, name, surname, fathername, dateOfBirth, dateOfBapt, dateOfSaint, dateDeath, dateOfVows, dateOfOrdinationDiak, dateOfOrdinationPriest, dateOfOrdinationBish, dateOfEnthron, comment, other, count, group

   } = person;


   group = group.filter(g=>g!==groupToDel);

   


   let editData = JSON.stringify({

    live,

    sex,

    name, 

    surname, 

    fathername,

    dateOfBirth,

    dateOfBapt,

    dateOfSaint,

    dateDeath,

    dateOfVows,

    dateOfOrdinationDiak,

    dateOfOrdinationPriest,

    dateOfOrdinationBish,

    dateOfEnthron,

    comment,

    other,

    count,

    group

  });


  const options = { 

  method: 'PUT',

  headers: {

'Content-Type': 'application/json'

  },

  body: editData

};


  

  fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}/${IDmobi}?${myKey}`, options)

.then(data=>data.json())

.then(person=>{

// загружаем обновленные данные

// обновляем и список групп


})

.catch(err=>console.log(`что-то не так! ${err}`));


  });



 

  setTimeout(()=>{

    fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{


  startGroupsArr = startGroupsArr.filter(g=>g!==groupToDel);


  console.log(`обновленный список групп: ${startGroupsArr}`);


  JSON.stringify(localStorage.setItem('myOrder', startGroupsArr));

  loadedArr = allNamesArr;

  groupsArr.clear();


  loadedArr.filter(p=>p.group)

           .map(p=>p.group)

           .forEach(arr=>{

    for ( const g of arr ) {

      groupsArr.add(g);

    }

  });

  setTimeout(groupeDefine, 0);


  setTimeout(downloadNewDataFromMobi(allNamesArr), 0);


  document.getElementsByClassName('msgDiv')[0].innerHTML = `Группа ${groupToDel} удалена!`;


setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);


})

.catch(e=>console.log(`что-то не так! ${e}`));

  }, 0);

  

}


// >>>>> удаление конец <<<<<




// •••••• формируем список групп ••••••••


function groupeDefine(){


  groupsArr.clear();

  

  let counter = 0;

  

  fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{



  allNamesArr.filter(p=>p.group)

           .map(p=>p.group)

           .forEach(arr=>{

    for ( const g of arr ) {

      groupsArr.add(g);

    }

  });


   if(startGroupsArr==='') startGroupsArr = [...groupsArr];


    groupsSelect.innerHTML = 

    startGroupsArr.map(g=>{

      return `

        <option class='optionForGroup' value='${g==undefined ? 0 : g}'>${g==undefined ? '' : g}</option>`;

    }).join('');




    groupDel.innerHTML = `

    <option value='0'></option>

    ${startGroupsArr.map(g=>{

      return `

        <option value='${g==undefined ? 0 : g}'>${g==undefined ? '' : g}</option>`;

    }).join('')}

    `;


    groupRename.innerHTML = `

    <option value='0'></option>

    ${startGroupsArr.map(g=>{

      return `

        <option value='${g==undefined ? 0 : g}'>${g==undefined ? '' : g}</option>`;

    }).join('')}

    `;


   if(getStartet) {

      downloadNewDataFromMobi(loadedArr);

     getStartet = false;

   }


   if(startGroupsArr!==''){


      setTimeout(()=>{

document.getElementsByClassName('listGroupsForOrder')[0].innerHTML = startGroupsArr.map(gr=>{

      counter++;


      return `

         <div class='selectsHolder groupChangeSelects'>

      <label><strong>${counter}</strong></label>

     <select class='selectForGroupOrder'>

     ${startGroupsArr.map(g=>{

     if(startGroupsArr[counter-1]===g){

            return `

        <option value='${g==undefined ? 0 : g}' selected>${g==undefined ? '' : g}</option>`

      }else{return `

        <option value='${g==undefined ? 0 : g}'>${g==undefined ? '' : g}</option>`}

    }).join('')}

  </select>

   </div>`;

    }).join('');


  [...document.querySelectorAll('.selectForGroupOrder')].forEach(s=>s.addEventListener('change', changingGroupOrder, false));


  }, 0);


   }else{


    setTimeout(()=>{

document.getElementsByClassName('listGroupsForOrder')[0].innerHTML = [...groupsArr].map(gr=>{

      counter++;


      return `

         <div class='selectsHolder groupChangeSelects'>

      <label><strong>${counter}</strong></label>

     <select class='selectForGroupOrder'>

     ${[...groupsArr].map(g=>{

     if([...groupsArr][counter-1]===g){

            return `

        <option value='${g==undefined ? 0 : g}' selected>${g==undefined ? '' : g}</option>`

      }else{return `

        <option value='${g==undefined ? 0 : g}'>${g==undefined ? '' : g}</option>`}

    }).join('')}

  </select>

   </div>`;

    }).join('');


  }, 0);

  }

})

.catch(err=>console.log(`something wrong: ${err}`));

  }


  // ••••• конец работы с группами••••••







// функция удаления записи @@@@@@@@@ >>>>>>>><<<<<<<<<<< ##########<<<


function deleteNote() {


  const personToDel = loadedArr

        .filter(p=>p._id.$oid===IDtoEdit)[0];


  myAlert(`вы уверены, что хотите удалить запись:</br>${personToDel.other} ${personToDel.name} ${personToDel.surname}?</br>

 <div class='btnsDeleteName'>

<button id='deleteCancelBtn'>отмена</button><button id='deleteOkBtn'>удалить</button>

</div>

`);


  deleteCancelBtn.addEventListener('click', cancelDel);


deleteOkBtn.addEventListener('click', okDel);



}




function cancelDel(){

   alertFon.classList.remove('showAlert');

} 



function okDel(){


[...document.querySelectorAll(".yellowLabel")].forEach(s=>s.remove());

  document.getElementsByClassName('msgDiv')[0].innerHTML = `удаляем запись!`;



const options = { 

  method: 'DELETE',

  headers: {

'Content-Type': 'application/json'

  }

};


  

  fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}/${IDtoEdit}?${myKey}`, options)

.then(data=>data.json())

.then(person=>{

   document.getElementsByClassName('msgDiv')[0].innerHTML = `запись ${person.other} ${person.name} ${person.surname} удалена!`;


setTimeout(()=>{alertFon.classList.remove('showAlert');},1500);



editMode = false;


searchingForChange.classList.remove('hiddening');

formHolder.style.opacity = 0;

formHolder.classList.add('hiddening');


[...document.querySelectorAll('.searchedItem')].forEach(d=>d.addEventListener('click', showEditform));


btnAdd.innerHTML = 'добавить';


liveChoice.checked = false;

sexMChoice.checked = false;

deathChoice.checked = false;

sexFChoice.checked = false;


document.querySelectorAll('.formTitle')[0].innerHTML = `<h3>Создание новой записи</h3>

    <h5>( прежде всего выбирите тип синодика и пол )</h5>`;


  addForm.reset();

btnAdd.classList.add('hiddening');


forMaleLive.classList.add('hiddening');

forFemaleLive.classList.add('hiddening');

forMaleDeath.classList.add('hiddening');

forFemaleDeath.classList.add('hiddening');


newCreatedData

  .filter(d=>d.type != 'radio')

  .forEach(i=>i.disabled=true);



// после того, как данные изменены, обновляем ариейобщий и поле поиска нужно опустошить


fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{


  loadedArr = allNamesArr;

  document.getElementsByClassName('inputForSearch')[0].value = '';

  document.getElementsByClassName('searchResults')[0].innerHTML = '';


}).catch(e=>console.log(e));



 }).catch(err=>console.log(err));

}



// конец удаления ~~~~~~~~~~~~~





// создание новой группы •••••• •••••••••••••••••••••••••••••••


function newGroupCreate() {


let selectedPersons = []; 


if([...groupSelect].filter(o=>o.selected).length==0) {

  myAlert('группа не может быть пустой! выберите по крайней мере одно имя!');

  setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);

  } else if(groupName.value==='') {

    myAlert('введите название группы!');

  setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);

  } else if(startGroupsArr.includes(groupName.value)) {

    myAlert(`группа ${groupName.value} уже существует. введите другое название!`);

  groupName.value = '';

  setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);

  } else {

[...groupSelect].filter(o=>o.selected).map(o=>o.value).forEach(c=>{

    selectedPersons.push(loadedArr.filter(person=>person.count==c));

});

   setTimeout(editForGroup(selectedPersons, groupName.value), 0);


  if(startGroupsArr!==''){

startGroupsArr.push(groupName.value);

  console.log(startGroupsArr);

JSON.stringify(localStorage.setItem('myOrder', startGroupsArr));

  }else{

   startGroupsArr = [groupName.value];

  console.log(startGroupsArr);

JSON.stringify(localStorage.setItem('myOrder', startGroupsArr));

  }


  }

}


// конец созд группы •••••••••• •••••••••••••••••••••••••••••••



function editForGroup(arr, grTitle){


  myAlert('данные сохраняются');

  arr

   .map(a=>a[0])

   .forEach(person=>{

      const IDmobi = person._id.$oid;



   let {

   thatId, live, sex, name, surname, fathername, dateOfBirth, dateOfBapt, dateOfSaint, dateDeath, dateOfVows, dateOfOrdinationDiak, dateOfOrdinationPriest, dateOfOrdinationBish, dateOfEnthron, comment, other, count, group

   } = person;


   if(group == undefined) group = [];


   group.push(grTitle);


   let editData = JSON.stringify({

    live,

    sex,

    name, 

    surname, 

    fathername,

    dateOfBirth,

    dateOfBapt,

    dateOfSaint,

    dateDeath,

    dateOfVows,

    dateOfOrdinationDiak,

    dateOfOrdinationPriest,

    dateOfOrdinationBish,

    dateOfEnthron,

    comment,

    other,

    count,

    group

  });


  const options = { 

  method: 'PUT',

  headers: {

'Content-Type': 'application/json'

  },

  body: editData

};


  

  fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}/${IDmobi}?${myKey}`, options)

.then(data=>data.json())

.then(person=>{

})

.catch(e=>console.log(e));

     }

    );


// загружаем обновленные данные

// обновляем и список групп


  setTimeout(()=>{

  fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{

  loadedArr = allNamesArr;

  groupeDefine();

  downloadNewDataFromMobi(allNamesArr);


[...groupSelect].forEach(o=>o.selected=false);

document.getElementsByClassName('msgDiv')[0].innerHTML = `Группа ${grTitle} создана!`;

groupName.value = '';

  setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);

}).catch(e=>console.log(e));

}, 0);


}



// удаление даты в кипере


function delDate(){

 if(editMode) {

   lookAtFofmChange();

  }

this.previousElementSibling.value = '';

[...this.parentNode.querySelectorAll(".yellowLabel")].forEach(s=>s.remove());

this.remove();

}





// ---- функция проверки селектов и отключения ненужных полей формы


function selectRules() {


  [...document.getElementsByTagName('option')].forEach(o=>{

      if(o.value==='патр.'&&o.selected) {

   [...formInputs].forEach(i=>i.disabled=false);

  if(oUpok) {dateOfDeathInput.disabled=false}else{dateOfDeathInput.disabled=true}

  } else if((o.value==='еп.'||o.value==='митр.'||o.value==='архиеп.')&&o.selected) {

  [...formInputs].forEach(i=>i.disabled=false);

  dateOfEnthronInput.disabled = true;

  if(oUpok) {dateOfDeathInput.disabled=false}else{dateOfDeathInput.disabled=true}

  }else if((o.value==='иер.'||o.value==='прот.')&&o.selected) {


  [...formInputs].forEach(i=>i.disabled=false);

  dateOfEnthronInput.disabled = true;

  dateOfOrdinationBishInput.disabled = true;

dateOfVowsInput.disabled = true;

  if(oUpok) {dateOfDeathInput.disabled=false}else{dateOfDeathInput.disabled=true}

  }else if((o.value==='диак.'||o.value==='протод.')&&o.selected) {


  [...formInputs].forEach(i=>i.disabled=false);

  dateOfEnthronInput.disabled = true;

  dateOfOrdinationBishInput.disabled = true;

dateOfVowsInput.disabled = true;

dateOfOrdinationPriestInput.disabled = true;

  if(oUpok) {dateOfDeathInput.disabled=false}else{dateOfDeathInput.disabled=true}

  }else if((o.value==='иг.'||o.value==='схииг.'||o.value==='иером.'||o.value==='священноинок')&&o.selected) {

  [...formInputs].forEach(i=>i.disabled=false);

  dateOfEnthronInput.disabled = true;

  dateOfOrdinationBishInput.disabled = true;

  if(oUpok) {dateOfDeathInput.disabled=false}else{dateOfDeathInput.disabled=true}

  }

});

 

}



//----- конец функции --------


    


function namesEndEditor(name){


   let newName;

   for(let i = 0; i < endings.length; i++){

      let end = endings[i][0];

      let newEnd = endings[i][1];

      const regex = new RegExp(`${end}$`,'g');

  const changedName = name.replace(regex, `${newEnd}`);

     if(changedName!=name) newName = changedName;

    }

  return newName;

}




function doSomething(scroll_pos) {

  if(scroll_pos >= 120) {


    let counterForLettersUp = 0;

    [...logoLetters].forEach((l, index)=>{


  counterForLettersUp = `${index}00`;

  setTimeout(()=>{

    l.style.opacity = 0;

    l.style.transform = 'scale(.2) translateY(-70%)';

    l.style.filter = 'blur(5px)';

  }, counterForLettersUp);

});


deadLine0.classList.remove('scrollUp1');

deadLine1.classList.remove('scrollUp1');

deadLine2.classList.remove('scrollUp2');

deadLine3.classList.remove('scrollUp3');

    liveLine0.classList.add('scrollDown1');

liveLine1.classList.add('scrollDown1');

liveLine2.classList.add('scrollDown2');

liveLine3.classList.add('scrollDown3');


    setTimeout(()=>{

      downSvgHolder.style.opacity = 0;

upSvgHolder.style.opacity = 1;

    }, 1000);

  } else {


  let counterForLettersDown = 0;

    [...logoLetters].forEach((l, index)=>{


  counterForLettersDown = `${index}00`;

  setTimeout(()=>{

    l.style.opacity = 1;

    l.style.transform = 'scale(1) translateY(0%)';

    l.style.filter = 'blur(0px)';

  }, counterForLettersDown);

});


liveLine0.classList.remove('scrollDown1');

liveLine1.classList.remove('scrollDown1');

liveLine2.classList.remove('scrollDown2');

liveLine3.classList.remove('scrollDown3');


deadLine0.classList.add('scrollUp1');

deadLine1.classList.add('scrollUp1');

deadLine2.classList.add('scrollUp2');

deadLine3.classList.add('scrollUp3');


setTimeout(()=>{

      downSvgHolder.style.opacity = 1;

upSvgHolder.style.opacity = 0;

    }, 1000);

  }

}




// функция проверки радио на выбор


function allowShow(){

  const checked = [...allRadio]

.filter(r=>r.checked);

  

  if(checked.length==2) {

    return {

      type: checked[0].value,

      sex : checked[1].value

    };

  }

  return false;

}


// конец



//функция автовставки тире

function dashInsertAuto(e){

  if(e.keyCode==8) return;

  if(this.value.length === 2){

    this.value = `${this.value}-`

  } else if(this.value.length === 5){

    this.value = `${this.value}-`

  }

}

// функция проверки введенной даты

function validateDate(){

  this.value.match('^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$') || this.value === '' ? this.classList.remove('errorBackground') : invalidData('некорректные данные!', this);

}


function validateDateforSaintDay(){

  this.value.match('[([01|03|05|07|08|10|12]/[01-31])|([04|06|09|11]/[01-30])|(02/[01-29])]') || this.value === '' ? this.classList.remove('errorBackground') : invalidData('некорректные данные!', this);

}


// функция оповещения ошибки ввода


function invalidData(msg, el) {

  alert(msg);

  el.classList.add('errorBackground');

}


//функция добавления нового лица



function setDataTest() { 


  [...document.querySelectorAll(".yellowLabel")].forEach(s=>s.remove());


  myAlert('данные сохраняются');


  if([...document.getElementsByClassName('miniCrossForDate')].length>0) {

[...document.getElementsByClassName('miniCrossForDate')].forEach(d=>d.remove());

}


  const radios = newCreatedData

   .filter(d=>d.type == 'radio' && d.checked)

   .map(r=>r.value);


  const selects = allSelects

   .filter(d=>d.id!=='groupsSelect' && d.id!=='groupDel' && d.id!=='groupRename' && !d.classList.contains('selectForGroupOrder'))

   .map(d=>d.value)

   .filter(v=>v!=="0");


  const texts = newCreatedData

   .filter(d=>d.type == 'text' && d.id!=='rename')

   .map(i=>i.value);


  let group = new Set();


  userGroup = [...document.getElementsByClassName('optionForGroup')]

     .filter(o=>o.selected)

     .map(o=>o.value)

     .forEach(v=>{

       if(v==0) return;

       group.add(v);

     });



const data = [...radios, ...texts, ...selects];


 const [live, sex, name, surname, fathername, dateOfBirth, dateOfBapt, dateOfSaint, dateDeath, dateOfVows, dateOfOrdinationDiak, dateOfOrdinationPriest, dateOfOrdinationBish, dateOfEnthron, ...other] = data;



  // если данные редактируются


    if(this.innerHTML === 'сохранить изменения') {

  let comment = [...document.getElementsByTagName('textarea')].map(i=>i.value);

  

  let count = countSearched;


  let editData = JSON.stringify({

    live,

    sex,

    name,

    surname,

    fathername,

    dateOfBirth,

    dateOfBapt,

    dateOfSaint,

    dateDeath,

    dateOfVows,

    dateOfOrdinationDiak,

    dateOfOrdinationPriest,

    dateOfOrdinationBish,

    dateOfEnthron,

    comment,

    other,

    count,

    group: [...group]

  });


  const options = { 

  method: 'PUT',

  headers: {

'Content-Type': 'application/json'

  },

  body: editData

};


  

  fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}/${IDtoEdit}?${myKey}`, options)

.then(data=>data.json())

.then(person=>{


document.getElementsByTagName('body')[0].scrollTop = 0;


document.getElementsByClassName('msgDiv')[0].innerHTML = `Изменения для ${person.other}${person.name} сохранены!`;


  setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);


editMode = false;


searchingForChange.classList.remove('hiddening');

formHolder.style.opacity = 0;

formHolder.classList.add('hiddening');


[...document.querySelectorAll('.searchedItem')].forEach(d=>d.addEventListener('click', showEditform));


btnAdd.innerHTML = 'добавить';


liveChoice.checked = false;

sexMChoice.checked = false;

deathChoice.checked = false;

sexFChoice.checked = false;


document.querySelectorAll('.formTitle')[0].innerHTML = `<h3>Создание новой записи</h3>

    <h5>( прежде всего выбирите тип синодика и пол )</h5>`;


  addForm.reset();

btnAdd.classList.add('hiddening');


forMaleLive.classList.add('hiddening');

forFemaleLive.classList.add('hiddening');

forMaleDeath.classList.add('hiddening');

forFemaleDeath.classList.add('hiddening');


newCreatedData

  .filter(d=>d.type != 'radio')

  .forEach(i=>i.disabled=true);



// после того, как данные изменены, обновляем ариейобщий и поле поиска нужно опустошить


fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{


  loadedArr = allNamesArr;

  


/*

document.getElementsByClassName('inputForSearch')[0].value = '';

*/

  document.getElementsByClassName('searchResults')[0].innerHTML = '';


}).catch(e=>console.log(e));




})

.catch(e=>console.log(e));


  return;

}


  // конец варианта редактирования



  let addForSex, count = Date.now(), comment = [...document.getElementsByTagName('textarea')].map(i=>i.value);

  

  sex == 'муж' ? addForSex = 'добавлен' : addForSex = 'добавлена';

  

  let newData = JSON.stringify({

    live,

    sex,

    name,

    surname,

    fathername,

    dateOfBirth,

    dateOfBapt,

    dateOfSaint,

    dateDeath,

    dateOfVows,

    dateOfOrdinationDiak,

    dateOfOrdinationPriest,

    dateOfOrdinationBish,

    dateOfEnthron,

    comment,

    other,

    count,

    group: [...group]

  });


  // сохраняем данные и в мобиЛаб:

  const options = { 

  method: 'POST',

  headers: {

'Content-Type': 'application/json'

  },

  body: newData

};


fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`, options)

.then(data=>data.json())

.then(person=>{


document.getElementsByTagName('body')[0].scrollTop = 0;


document.getElementsByClassName('msgDiv')[0].innerHTML = `${person.other}${person.name} ${addForSex} в синодик ${person.live}!`;


  setTimeout(()=>{

alertFon.classList.remove('showAlert');

  }, 2000);

  addForm.reset();

btnAdd.classList.add('hiddening');


forMaleLive.classList.add('hiddening');

forFemaleLive.classList.add('hiddening');

forMaleDeath.classList.add('hiddening');

forFemaleDeath.classList.add('hiddening');


newCreatedData

  .filter(d=>d.type != 'radio')

  .forEach(i=>i.disabled=true);




fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{


  loadedArr = allNamesArr;


}).catch(e=>console.log(e));




})

.catch(e=>console.log(e));


  // конец работы с мобиЛаб

  

}




// функция снятия дисейблов


function disabledGone(status){

  btnAdd.classList.remove('hiddening');


  newCreatedData

    .forEach(i=>i.disabled=false);


  if(status==='живой'){

    newCreatedData

    .filter(i=>i.name=='dateDeath')

    .forEach(i=>i.disabled=true);

  } else if(status==='живая'){

     newCreatedData

     .filter(i=>i.classList.contains('forMenOnly')||i.name=='dateDeath')

     .forEach(i=>i.disabled=true);

  } else if(status==='усопший'){

     return;

  } else {

     newCreatedData

     .filter(i=>i.classList.contains('forMenOnly'))

     .forEach(i=>i.disabled=true);

  }

}





// функция установки селектов


function setSelects() {

  if(liveChoice.checked && sexMChoice.checked) {


  oUpok = false;


  disabledGone('живой');

    forMaleLive.classList.remove('hiddening');

forFemaleLive.classList.add('hiddening');

forMaleDeath.classList.add('hiddening');

forFemaleDeath.classList.add('hiddening');

  } else if(deathChoice.checked && sexFChoice.checked) {


  oUpok = true;


  disabledGone('усопшая');

    forMaleDeath.classList.add('hiddening');

forFemaleLive.classList.add('hiddening');

forMaleLive.classList.add('hiddening');

forFemaleDeath.classList.remove('hiddening');

  } else if(liveChoice.checked && sexFChoice.checked){


  oUpok = false; 

  disabledGone('живая');

    forFemaleLive.classList.remove('hiddening');

forMaleLive.classList.add('hiddening');

forMaleDeath.classList.add('hiddening');

forFemaleDeath.classList.add('hiddening');

  } else if(deathChoice.checked && sexMChoice.checked) {


    oUpok = true; 

    disabledGone('усопший');


forMaleDeath.classList.remove('hiddening');

forFemaleLive.classList.add('hiddening');

forMaleLive.classList.add('hiddening');

forFemaleDeath.classList.add('hiddening');

  }

}


// функция подьема Лейбла


function pushLabelUp() {

  const matchForLabel = this.name;

  allLabels.filter(label=>label.htmlFor == matchForLabel).forEach(data=>{

data.style.transform = 'translate(6%, 50%)';

data.style.fontSize = '.85rem';

data.style.opacity = 1;

});

}




// функции поиска


function searching(wordToMatch, arr){

  return arr

         .filter(person=>{

    const regex = new RegExp(wordToMatch, 'gi');

    return person.name.match(regex)  || person.surname.match(regex);

  });

}


function displayMatches() {

  if(this.value.length>1){delSearchCross.classList.remove('invsbLink')}else{delSearchCross.classList.add('invsbLink')}

  const arrMatches = searching(this.value, loadedArr);

  const html = arrMatches.map(person=>{

  const regex = new RegExp(this.value,'gi');

  const personName = person.name.replace(regex, `<span class='yellow'>${this.value}</span>`);

  const personSurname = person.surname.replace(regex, `<span class='yellow'>${this.value}</span>`);


  if(person.live==='о здравии'){

     bckgrnd = 'rgba(203, 60, 37,.8)'

  } else {

     bckgrnd = 'rgba(1, 20, 47,.8)'

  }


  return `

      <div id='${person.count}' class='searchedItem' style='border-left: 10px solid ${bckgrnd}' >

  <div>${person.other}</br>${personName}</br>${personSurname}

  </div>

  <div>${person.comment}</div>

  </div>

  `;

}).join(' ');

searchResults.innerHTML = html;


[...document.querySelectorAll('.searchedItem')].forEach(d=>d.addEventListener('click', showEditform, false));


}


// функция сохранения измененных данных ---------------------  ----------------------------  ----------------------------


function saveChangedItem() {

  alert('измененные данные успешно слхранены');

}



// кнопка закрыть формы редактирования --------


function closeItemSearched(){

  [...document.querySelectorAll('.searchedItem')].filter(i=>i.classList.contains('formToEdit')).forEach(i=>{

i.classList.remove('formToEdit');


  i.innerHTML = loadedArr

        .filter(p=>p.count==countSearched)

        .map(person=>{

         return `

  <div>${person.other}</br>${person.name}</br>${person.surname}

  </div>

  <div>${person.comment}</div>

      `

       });

});



setTimeout(()=>{

[...document.querySelectorAll('.searchedItem')].forEach(d=>d.addEventListener('click', showEditform, false));

},0);

}



//кнопка отмены редактирования


  function exitEditModeWithoutSave(){


[...document.querySelectorAll(".yellowLabel")].forEach(s=>s.remove());


  if([...document.getElementsByClassName('miniCrossForDate')].length>0) {

[...document.getElementsByClassName('miniCrossForDate')].forEach(d=>d.remove());

}


  editMode = false;


 addForm.reset();


allFormFields.forEach(el=>el.removeEventListener('change', lookAtFofmChange));

groupsSelect.removeEventListener('change', lookAtFofmChange, false);


 searchingForChange.classList.remove('hiddening');

formHolder.style.opacity = 0;

formHolder.classList.add('hiddening');



[...document.querySelectorAll('.searchedItem')].forEach(d=>d.addEventListener('click', showEditform));


btnAdd.innerHTML = 'добавить';

  btnAdd.classList.add('hiddening');


  forMaleLive.classList.add('hiddening');

forFemaleLive.classList.add('hiddening');

forMaleDeath.classList.add('hiddening');

forFemaleDeath.classList.add('hiddening');


newCreatedData

  .filter(d=>d.type != 'radio')

  .forEach(i=>i.disabled=true);


liveChoice.checked = false;

sexMChoice.checked = false;

deathChoice.checked = false;

sexFChoice.checked = false;


document.querySelectorAll('.formTitle')[0].innerHTML = `<h3>Создание новой записи</h3>

    <h5>( прежде всего выбирите тип синодика и пол )</h5>`;


}






// -- просто отобразить кнопку и удалить слушателя 


function lookAtFofmChange(){


//alert('ты изменил? я не слушаю');

btnAdd.classList.remove('hiddening');

allFormFields.forEach(el=>el.removeEventListener('change', lookAtFofmChange));

groupsSelect.removeEventListener('change', lookAtFofmChange, false);


}







// открытие-закрытие меню


function openingMenu() {


[...document.querySelectorAll(".yellowLabel")].forEach(s=>s.remove());


[...document.querySelectorAll("input")]

.filter(i=>i.type!=='radio')

.forEach(i=>removeEventListener('keyup', showYellowLabel));


[...document.querySelectorAll("textarea")].forEach(i=>removeEventListener('keyup', showYellowLabel));


groupsTitle.innerHTML = '';



[...document.querySelectorAll('.selectForGroupOrder')].forEach(s=>s.removeEventListener('change', changingGroupOrder, false));



if([...document.getElementsByClassName('miniCrossForDate')].length>0) {

[...document.getElementsByClassName('miniCrossForDate')].forEach(d=>d.remove());

}



allSelects.forEach(s=>removeEventListener('change', selectRules));

groupsSelect.removeEventListener('change', lookAtFofmChange, false);


  allFormFields.forEach(el=>el.removeEventListener('change', lookAtFofmChange));


  editMode = false;


  addForm.reset();

  


btnAdd.innerHTML = 'добавить';


btnAdd.classList.add('hiddening');


  forMaleLive.classList.add('hiddening');

forFemaleLive.classList.add('hiddening');

forMaleDeath.classList.add('hiddening');

forFemaleDeath.classList.add('hiddening');


newCreatedData

  .filter(d=>d.type != 'radio')

  .forEach(i=>i.disabled=true);


liveChoice.checked = false;

sexMChoice.checked = false;

deathChoice.checked = false;

sexFChoice.checked = false;


[...document.querySelectorAll('.searchedItem')].forEach(d=>d.addEventListener('click', showEditform));


document.querySelectorAll('.formTitle')[0].innerHTML = `<h3>Создание новой записи</h3>

    <h5>( прежде всего выбирите тип синодика и пол )</h5>`;


  pannelToClose();


  closePlayMode();

 

  hMenu.classList.add('opened');



[...document.querySelectorAll('#playIcon path')].forEach(p=>p.classList.add('hiddening'));


document.querySelector('#playIconFirstPath').classList.remove('hiddening');

   

   [...document.querySelectorAll('.commonBox')].forEach(div=>{

   div.style.opacity = 1;

   div.style.margin = '-3px auto';

});



[...document.querySelectorAll('.commonBox_name')].forEach(div=>{

   div.classList.remove('fontSizePlus');

});

  

pannelsSVG.forEach(icon=>icon.classList.remove('pauseMode'));


  document.getElementsByTagName('body')[0].scrollTop = 0;

  [...document.querySelectorAll('.hml')].forEach((link, i)=>{

  setTimeout(()=>{

link.classList.remove('invsbLink');

  }, `${i}00`);


});

}



function closingMenu() {

  hMenu.classList.remove('opened');

[...document.querySelectorAll('.hml')].forEach(link=>link.classList.add('invsbLink'));

}






// открытие формы добавления новых имен


function closingMenuAndAllListField() {


[...document.querySelectorAll("input")]

.filter(i=>i.type!=='radio')

.forEach(i=>addEventListener('keyup', showYellowLabel));



[...document.querySelectorAll("textarea")].forEach(i=>addEventListener('keyup', showYellowLabel));



allSelects.forEach(s=>addEventListener('change', selectRules));


[...document.querySelectorAll('.hml')].forEach(link=>{

link.classList.remove('activLink');

link.classList.add('invsbLink')

});



this.classList.add('activLink');


allItems.style.opacity = 0;

searchingForChange.style.opacity = 0;

allItems.classList.add('hiddening');


document.getElementsByClassName('newGroupCreateForm')[0].classList.add('hiddening');

searchingForChange.classList.add('hiddening');

  document.getElementsByClassName('groupsChangeDiv')[0].classList.add('hiddening');

  formHolder.style.opacity = 1;

formHolder.classList.remove('hiddening');


hMenu.classList.remove('opened');

}



// открытие редактирования групп


function closingMenuAndChangeGroup() {


  [...document.querySelectorAll('.hml')].forEach(link=>{

link.classList.remove('activLink');

link.classList.add('invsbLink')

});


this.classList.add('activLink');


searchingForChange.style.opacity = 0;

searchingForChange.classList.add('hiddening');

allItems.style.opacity = 0;

formHolder.style.opacity = 0;

allItems.classList.add('hiddening');

document.getElementsByClassName('newGroupCreateForm')[0].classList.add('hiddening');

formHolder.classList.add('hiddening');


document.getElementsByClassName('groupsChangeDiv')[0].classList.remove('hiddening');

  

hMenu.classList.remove('opened');


[...document.querySelectorAll('.selectForGroupOrder')].forEach(s=>s.addEventListener('change', changingGroupOrder, false));


}



// открытие поиска для правки имен


function closingMenuAndGoSearch() {


[...document.querySelectorAll('.hml')].forEach(link=>{

link.classList.remove('activLink');

link.classList.add('invsbLink')

});


this.classList.add('activLink');


searchingForChange.style.opacity = 1;

searchingForChange.classList.remove('hiddening');

allItems.style.opacity = 0;

formHolder.style.opacity = 0;

allItems.classList.add('hiddening');

document.getElementsByClassName('newGroupCreateForm')[0].classList.add('hiddening');

formHolder.classList.add('hiddening');

document.getElementsByClassName('groupsChangeDiv')[0].classList.add('hiddening');

  

hMenu.classList.remove('opened');


}



// ---------------------------- ------------------------------- функция открытия формы создания групп ------------------------- -------------------------------

// ••••••••••••••••••••••••••••


function openGroupCreatePage() {

   [...document.querySelectorAll('.hml')].forEach(link=>{

link.classList.remove('activLink');

link.classList.add('invsbLink')

});


this.classList.add('activLink');



formHolder.style.opacity = 0;

searchingForChange.style.opacity = 0;

formHolder.classList.add('hiddening');

searchingForChange.classList.add('hiddening');

document.getElementsByClassName('groupsChangeDiv')[0].classList.add('hiddening');

hMenu.classList.remove('opened');

allItems.style.opacity = 0;

allItems.classList.add('hiddening');


document.getElementsByClassName('newGroupCreateForm')[0].classList.remove('hiddening');



// заполняем селект именами


groupSelect.innerHTML = loadedArr.map(person=>{

  return `

    <option value='${person.count}'>${person.other} ${person.name} ${person.surname}</option>

  `

}).join('');




}


// ----------------------------

// ----------------------------

// ••••••••••••••••••••••••••••





// открытие общего списка имен


function closingMenuAndAddingField(){



[...document.querySelectorAll('.hml')].forEach(link=>{

link.classList.remove('activLink');

link.classList.add('invsbLink')

});


this.classList.add('activLink');


setTimeout(()=>{

oZdravii.classList.remove('start1');

oZdravii.classList.add('first');

oUpokoenii.classList.remove('start2');

oUpokoenii.classList.add('second');

}, 200);

  

formHolder.style.opacity = 0;

searchingForChange.style.opacity = 0;

formHolder.classList.add('hiddening');

document.getElementsByClassName('newGroupCreateForm')[0].classList.add('hiddening');

searchingForChange.classList.add('hiddening');

document.getElementsByClassName('groupsChangeDiv')[0].classList.add('hiddening');

hMenu.classList.remove('opened');

allItems.style.opacity = 1;

allItems.classList.remove('hiddening');


  fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/${myCollection}?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{


  loadedArr = allNamesArr;

downloadNewDataFromMobi(allNamesArr);


})

.catch(e=>console.log(e));


}




function oZdrStrtHandler(e){

  e.preventDefault();

  startx = e.pageX - allItems.offsetLeft;

  

}


function oZdrMoveHandler(e){

  e.preventDefault();

  const x = e.pageX - allItems.offsetLeft;

  walk = (x - startx)/5

  //sandwich.innerHTML = walk;

  oZdravii.style.transform = `translate(${walk-50}%, -40%) scale(.725)`;

}



function oZdrEndHandler(e){

  e.preventDefault();

  if(walk<1&&walk>-1) {

  

  oZdraviiClicked = true;


  oZdravii.style.transform = 'translate(-50%, 0%) scale(1)';

  //oZdravii.style.height = 'auto';

  oZdravii.style.overflow = 'visible'

  oZdravii.style.border = 'none';

  oZdravii.style.backgroundColor = 'transparent';

  oZdravii.style.color = '#ffffff';

  oZdravii.style.top = '50px';


pannel.classList.remove('hiddening');


oZdravii.removeEventListener('touchstart', oZdrStrtHandler);

oZdravii.removeEventListener('touchmove', oZdrMoveHandler);

oZdravii.removeEventListener('touchend', oZdrEndHandler);

oUpokoenii.classList.add('hiddening');

setTimeout(()=>pannel.classList.add('slideUp'), 600);


    return;

  }

  if(walk < -7) {

oZdravii.style.transform = 'translate(-105%, -40%) scale(.6)';

oZdravii.style.filter = 'blur(1px)';

oZdravii.style.zIndex = '90';


oUpokoenii.style.transform = 'translate(-50%, -40%) scale(.725)';

oUpokoenii.style.filter = 'blur(0px)';

oUpokoenii.style.zIndex = '95';

  }else{

oZdravii.style.transform = 'translate(-50%, -40%) scale(.725)';

oZdravii.style.filter = 'blur(0px)';

  }


  walk = 0;

}


// слушатели для заупокойного


function oUpokStrtHandler(e){

  e.preventDefault();

  startx = e.pageX - allItems.offsetLeft;

}


function oUpokMoveHandler(e){

  e.preventDefault();

  const x = e.pageX - allItems.offsetLeft;

  walk = (x - startx)/5

  

  oUpokoenii.style.transform = `translate(${walk-50}%, -40%) scale(.725)`;

}



function oUpokEndHandler(e){

  e.preventDefault();

  if(walk<1&&walk>-1) {

    

  oUpokoenii.style.transform = 'translate(-50%, 0%) scale(1)';

  //oUpokoenii.style.height = 'auto';

  oUpokoenii.style.overflow = 'visible'

  oUpokoenii.style.border = 'none';

  oUpokoenii.style.backgroundColor = 'transparent';

  oUpokoenii.style.color = '#ffffff';

  oUpokoenii.style.top = '50px';


pannel.classList.remove('hiddening');

oUpokoenii.removeEventListener('touchstart', oUpokStrtHandler);

oUpokoenii.removeEventListener('touchmove', oUpokMoveHandler);

oUpokoenii.removeEventListener('touchend', oUpokEndHandler);

oZdravii.classList.add('hiddening');

setTimeout(()=>pannel.classList.add('slideUp'), 600);

    return;

  }

  if(walk > 7) {

oUpokoenii.style.transform = 'translate(5%, -40%) scale(.6)';

oUpokoenii.style.filter = 'blur(1px)';

oUpokoenii.style.zIndex = '90';


oZdravii.style.transform = 'translate(-50%, -40%) scale(.725)';

oZdravii.style.filter = 'blur(0px)';

oZdravii.style.zIndex = '95';

  }else{

oUpokoenii.style.transform = 'translate(-50%, -40%) scale(.725)';

oUpokoenii.style.filter = 'blur(0px)';

  }

  walk = 0;

}





// функция закрытия панели


function pannelToClose (){


playModeStart = false;

cancelReq(myReq);


[...document.querySelectorAll('#playIcon path')].forEach(p=>p.classList.add('hiddening'));


document.querySelector('#playIconFirstPath').classList.remove('hiddening');


  pannelsSVG.forEach(icon=>icon.classList.remove('pauseMode'));



removeEventListener('scroll', getCenterOfPage);

   

   [...document.querySelectorAll('.commonBox')].forEach(div=>{

   div.style.opacity = 1;

   div.style.margin = '-3px auto';

});



[...document.querySelectorAll('.commonBox_name')].forEach(div=>{

   div.classList.remove('fontSizePlus');

});

  

  if(oZdraviiClicked) {

oZdravii.style.transform = 'translate(-50%, -40%) scale(.725)';

  //oZdravii.style.height = '100%';

  oZdravii.style.overflow = 'hidden';

  oZdravii.style.top = '50%';

  oZdravii.style.border = '1px solid #ffffff';

  oZdravii.style.backgroundColor = '#BDC6BC';

  oZdravii.style.color = '#333e4e';


oUpokoenii.classList.remove('hiddening');


setTimeout(()=>{

pannel.classList.remove('slideUp');

}, 600);


oZdravii.addEventListener('touchstart', oZdrStrtHandler, false);

oZdravii.addEventListener('touchmove', oZdrMoveHandler, false);

oZdravii.addEventListener('touchend', oZdrEndHandler, false);


  oZdraviiClicked = false;

  } else {


oUpokoenii.style.transform = 'translate(-50%, -40%) scale(.725)';

  //oUpokoenii.style.height = '100%';

  oUpokoenii.style.overflow = 'hidden';

  oUpokoenii.style.top = '50%';

  oUpokoenii.style.border = '1px solid #ffffff';

  oUpokoenii.style.backgroundColor = '#BDC6BC';

  oUpokoenii.style.color = '#333e4e';


oZdravii.classList.remove('hiddening');


setTimeout(()=>{

pannel.classList.remove('slideUp');

}, 600);


oUpokoenii.addEventListener('touchstart', oUpokStrtHandler, false);

oUpokoenii.addEventListener('touchmove', oUpokMoveHandler, false);

oUpokoenii.addEventListener('touchend', oUpokEndHandler, false);

  }

}




// функция перехода от панели к форме




function fromPannelToAdd() {



playModeStart = false;



cancelReq(myReq);



[...document.querySelectorAll('#playIcon path')].forEach(p=>p.classList.add('hiddening'));



document.querySelector('#playIconFirstPath').classList.remove('hiddening');



pannelsSVG.forEach(icon=>icon.classList.remove('pauseMode'));



removeEventListener('scroll', getCenterOfPage);


   


   [...document.querySelectorAll('.commonBox')].forEach(div=>{


   div.style.opacity = 1;


   div.style.margin = '-3px auto';


});




[...document.querySelectorAll('.commonBox_name')].forEach(div=>{


   div.classList.remove('fontSizePlus');


});




pannel.classList.remove('slideUp');


  


setTimeout(()=>{


  document.getElementsByClassName('fromToFon')[0].classList.add('fromToFonStep1');



setTimeout(()=>{


[...document.querySelectorAll('.hml')].forEach(link=>{


link.classList.remove('activLink');


link.classList.add('invsbLink')


});



document.getElementsByClassName('addListTag')[0].classList.add('activLink');



allItems.style.opacity = 0;


searchingForChange.style.opacity = 0;


allItems.classList.add('hiddening');


searchingForChange.classList.add('hiddening');


  formHolder.style.opacity = 1;


formHolder.classList.remove('hiddening');


}, 500);



setTimeout(()=>{


  document.getElementsByClassName('fromToFon')[0].classList.add('fromToFonStep2');


}, 900);



setTimeout(pannelToClose, 400);



}, 500);




setTimeout(()=>{


  document.getElementsByClassName('fromToFon')[0].classList.add('hiddening');



document.getElementsByClassName('fromToFon')[0].classList.remove('fromToFonStep1');



document.getElementsByClassName('fromToFon')[0].classList.remove('fromToFonStep2');



setTimeout(()=>{


  document.getElementsByClassName('fromToFon')[0].classList.remove('hiddening');


}, 4000);


}, 2500);



}





// алерт-функция -----------


  function myAlert(msg) {

alertFon.classList.add('showAlert');

    alertFon.innerHTML = `<div class='msgDiv'>${msg}</div>`;


  }



// ----- показ кнопки в режиме поминовения --------------------



    function showPauseInPlayMode () {

modePlayPauseBtn.classList.toggle('invsbLink');

modePlayCloseBtn.classList.toggle('invsbLink');


   // if duering of three second touch event not fires, hide buttons! --------


   setTimeout(()=>{

      if(playModeStart){

      modePlayPauseBtn.classList.add('invsbLink');

modePlayCloseBtn.classList.add('invsbLink'); 

        }

   }, 3000);

}


// ----- стоп/старт автоскрлл и показ кнопки плей -----------------


   function stopPlayAndShowBtn () {


     if(playModeStart) {

       cancelReq(myReq);

       playModeStart = false;

       pausePressed = true;

       modePlayPauseBtn.innerHTML = 'поминать';

     } else {

       scrollToTop();

       playModeStart = true;

       pausePressed = false;

       modePlayPauseBtn.innerHTML = 'пауза';

     }

}



// функция плей --------------



function playMode () {

  this.classList.toggle('pauseMode');



[...document.querySelectorAll('#playIcon path')].forEach(p=>p.classList.toggle('hiddening'));


  if(this.classList.contains('pauseMode')) {


    playModeStart = true;


    scrollToTop();


    setTimeout(()=>{

      modePlayPauseBtn.classList.remove('invsbLink');

modePlayCloseBtn.classList.remove('invsbLink');

    }, 1500);


setTimeout(()=>{

   modePlayPauseBtn.classList.add('invsbLink');

modePlayCloseBtn.classList.add('invsbLink');

}, 4500);


    setTimeout(()=>{

pannel.classList.remove('slideUp');


[...document.getElementsByClassName('showedPersonsList')].forEach(d=>d.addEventListener('touchstart', showPauseInPlayMode));

}, 600);


[...document.querySelectorAll('.commonBox')].forEach(div=>{

   div.style.opacity = 0;

   div.style.margin = '20px auto';

});


[...document.querySelectorAll('.commonBox_name')].forEach(div=>{

   div.classList.add('fontSizePlus');

});


addEventListener('scroll', getCenterOfPage);


    let counterForLettersUp = 0;

    [...logoLetters].forEach((l, index)=>{


  counterForLettersUp = `${index}00`;

  setTimeout(()=>{

    l.style.opacity = 0;

    l.style.transform = 'scale(.2) translateY(-70%)';

    l.style.filter = 'blur(5px)';

  }, counterForLettersUp);

});


deadLine0.classList.remove('scrollUp1');

deadLine1.classList.remove('scrollUp1');

deadLine2.classList.remove('scrollUp2');

deadLine3.classList.remove('scrollUp3');

    liveLine0.classList.add('scrollDown1');

liveLine1.classList.add('scrollDown1');

liveLine2.classList.add('scrollDown2');

liveLine3.classList.add('scrollDown3');


    setTimeout(()=>{

      downSvgHolder.style.opacity = 0;

upSvgHolder.style.opacity = 1;

    }, 1000);



  } else {


   playModeStart = false;



   cancelReq(myReq);

   removeEventListener('scroll', getCenterOfPage);

   

[...document.querySelectorAll('.commonBox')].forEach(div=>{

   div.style.opacity = 1;

   div.style.margin = '-3px auto';

});



[...document.querySelectorAll('.commonBox_name')].forEach(div=>{

   div.classList.remove('fontSizePlus');

});



  let counterForLettersDown = 0;

    [...logoLetters].forEach((l, index)=>{


  counterForLettersDown = `${index}00`;

  setTimeout(()=>{

    l.style.opacity = 1;

    l.style.transform = 'scale(1) translateY(0%)';

    l.style.filter = 'blur(0px)';

  }, counterForLettersDown);

});


liveLine0.classList.remove('scrollDown1');

liveLine1.classList.remove('scrollDown1');

liveLine2.classList.remove('scrollDown2');

liveLine3.classList.remove('scrollDown3');


deadLine0.classList.add('scrollUp1');

deadLine1.classList.add('scrollUp1');

deadLine2.classList.add('scrollUp2');

deadLine3.classList.add('scrollUp3');


setTimeout(()=>{

      downSvgHolder.style.opacity = 1;

upSvgHolder.style.opacity = 0;

    }, 1000);

  }

}


// конец плей фции -------------




// ----- выход из режима поминовения --------


function closePlayMode() {

   playModeStart = false;


   groupsTitle.innerHTML = '';


  modePlayPauseBtn.innerHTML = 'пауза';


   window.scrollTo({top: 0, behavior: 'smooth'});


   [...document.querySelectorAll('#playIcon path')].forEach(p=>p.classList.toggle('hiddening'));


   cancelReq(myReq);

   removeEventListener('scroll', getCenterOfPage);

   

[...document.querySelectorAll('.commonBox')].forEach(div=>{

   div.style.opacity = 1;

   div.style.margin = '-3px auto';

});



[...document.querySelectorAll('.commonBox_name')].forEach(div=>{

   div.classList.remove('fontSizePlus');

});



  let counterForLettersDown = 0;

    [...logoLetters].forEach((l, index)=>{


  counterForLettersDown = `${index}00`;

  setTimeout(()=>{

    l.style.opacity = 1;

    l.style.transform = 'scale(1) translateY(0%)';

    l.style.filter = 'blur(0px)';

  }, counterForLettersDown);

});


liveLine0.classList.remove('scrollDown1');

liveLine1.classList.remove('scrollDown1');

liveLine2.classList.remove('scrollDown2');

liveLine3.classList.remove('scrollDown3');


deadLine0.classList.add('scrollUp1');

deadLine1.classList.add('scrollUp1');

deadLine2.classList.add('scrollUp2');

deadLine3.classList.add('scrollUp3');


setTimeout(()=>{

      downSvgHolder.style.opacity = 1;

upSvgHolder.style.opacity = 0;

    }, 1000);


modePlayPauseBtn.classList.add('invsbLink');

modePlayCloseBtn.classList.add('invsbLink');


 


pannel.classList.add('slideUp');


  playIcon.classList.remove('pauseMode');


[...document.getElementsByClassName('showedPersonsList')].forEach(d=>d.removeEventListener('touchstart', showPauseInPlayMode));

}





// ---- показываем инфу о синодике ------------


function showInfo () {

  this.classList.toggle('pauseMode');

document.querySelectorAll(".modalWindow")[0].classList.toggle("modalOut");


  oZdraviiClicked ? getInfo('о здравии') : getInfo('о упокоении');

}



// --- функция заполнения модального окна ----------------


   function getInfo(type) {

     document.querySelectorAll(".modalWindow .holder")[0].innerHTML = `

      <p>тип синодика: <strong>${type}</strong></p></br>

      <p>количество записей: <strong>${loadedArr.filter(p=>p.live===type).length}</strong></p>

     `;

   }





/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@ конец обьявления функций @@@@@@@@@@

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@@@@ */




/* начальные установки @@@@@@

@@@@@@@&&&&&&@&@&!₽&&&&&&&&&&&

&&&&& */


upSvgHolder.style.opacity = 0;


btnAdd.classList.add('hiddening');


formHolder.style.opacity = 0;

searchingForChange.style.opacity = 0;

formHolder.classList.add('hiddening');

searchingForChange.classList.add('hiddening');

hMenu.classList.remove('opened');

allItems.style.opacity = 1;

allItems.classList.remove('hiddening');


/* конец начальных установок @@@@@@

@@@@@@@&&&&&&@&@&!₽&&&&&&&&&&&

&&&&& */



/* ========================

======== назначение слушателей ==============================

==== */



window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

   window.requestAnimationFrame(function() {

 doSomething(last_known_scroll_position);

      ticking = false;

    });

    ticking = true;

  }

});


modePlayPauseBtn.addEventListener('click', stopPlayAndShowBtn);


modePlayCloseBtn.addEventListener('click', closePlayMode);


inputForSearch.addEventListener('keyup', displayMatches);


btnAdd.addEventListener('click', setDataTest);


createGroupBtn.addEventListener('click', newGroupCreate);


sandwich.addEventListener('click', openingMenu);


cross.addEventListener('click', closingMenu);


addListTag.addEventListener('click', closingMenuAndAllListField);


allListTag.addEventListener('click', closingMenuAndAddingField);


addGroupTag.addEventListener('click', openGroupCreatePage);


changeListTag.addEventListener('click', closingMenuAndGoSearch);


changeGroupTag.addEventListener('click', closingMenuAndChangeGroup);


exitTag.addEventListener('click', accountExit, false);




[...document.getElementsByTagName('textarea')].forEach(txarea=>txarea.addEventListener('keyup', pushLabelUp, {once: true}));


[...formInputs].forEach(input=>input.addEventListener('keyup', pushLabelUp, {once: true}));



allRadio.forEach(radio=>radio.addEventListener('change', setSelects));



// назначаем слушателей дейтпикерам


let thatIndex;


[...document.querySelectorAll(".datePicker")].forEach((input, i)=>{

input.addEventListener('click', (e)=>{


  // less days for saintDay -------------------------------


if(input.classList.contains('saintDay')) {

years.classList.add('hiddening');

year_screen.innerHTML = '';

fonCenterPointer.style.bottom = '216px';

centerPointer.style.bottom = '210px';

   }


// ---------------------------


  e.preventDefault();

  thatIndex = i;


calHolder.classList.remove('hiddening');


setTimeout(()=>{

years.classList.remove('yearsOut');

months.classList.remove('monthsOut');

days.classList.remove('daysOut');

}, 0);


}, false);

});



oZdravii.addEventListener('touchstart', oZdrStrtHandler, false);


oZdravii.addEventListener('touchmove', oZdrMoveHandler, false);


oZdravii.addEventListener('touchend', oZdrEndHandler, false);



oUpokoenii.addEventListener('touchstart', oUpokStrtHandler, false);


oUpokoenii.addEventListener('touchmove', oUpokMoveHandler, false);


oUpokoenii.addEventListener('touchend', oUpokEndHandler, false);



// ---------конец слайдера -----


// слушатели панели


addIcon.addEventListener('click', fromPannelToAdd);



closeIcon.addEventListener('click', pannelToClose);



playIcon.addEventListener('click', playMode);



infoIcon.addEventListener('click', showInfo);


document.getElementsByClassName('cross')[0].addEventListener('click', ()=>{

   infoIcon.classList.remove('pauseMode');


document.getElementsByClassName("modalWindow")[0].classList.add("modalOut");

});


document.getElementsByClassName('loader')[0].addEventListener('touchstart', e=>e.preventDefault());



groupDel.addEventListener('change', toDeleteGroup, false);


groupRename.addEventListener('change', toRenameGroup, false);


delSearchCross.addEventListener('click', deleteSearchInpt, false);


/* ========================

======== конец назначение слушателей ==============================

==== */





/*

------------------------------

 попытаемся вставить календарь

 ----------------------------

*/



const yearsArr = [];

const monthsArr = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

const daysArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


const mainDiv = document.getElementById('calHolder');


const years = document.getElementsByClassName('years')[0];

const months = document.getElementsByClassName('months')[0];

const days = document.getElementsByClassName('days')[0];





let counterForYears = -2700;

let counterForMonths = 0;

let counterForDays = -3000;

let yearsStep = 25;

let monthsStep = 30;

let daysStep = 30;

let strtx; let wlk;

let walkForYears = 0;

let walkForMonths = 0;

let walkForDays = 0;



for(let i = 1900; i < 2021; i++){

  yearsArr.push(i);

}



document.getElementsByClassName('btnOK')[0].addEventListener('click', ()=>{

  if(editMode) lookAtFofmChange();

  setTimeout(getDate, 0);

  setTimeout(()=>{


years.classList.add('yearsOut');

months.classList.add('monthsOut');

days.classList.add('daysOut');


years.classList.remove('hiddening');

fonCenterPointer.style.bottom = '291px';

centerPointer.style.bottom = '285px';

year_screen.innerHTML = '2007';

}, 0);

  

});


function getDate(){


  [...document.querySelectorAll(".datePicker")].forEach((input, i)=>{


  let month; let day;



if(day_screen.innerHTML==1){

      day='01';

    }else if(day_screen.innerHTML==2){

      day='02';

    }else if(day_screen.innerHTML==3){

      day='03';

    }else if(day_screen.innerHTML==4){

      day='04';

    }else if(day_screen.innerHTML==5){

      day='05';

    }else if(day_screen.innerHTML==6){

      day='06';

    }else if(day_screen.innerHTML==7){

      day='07';

    }else if(day_screen.innerHTML==8){

      day='08';

    }else if(day_screen.innerHTML==9){

      day='09';

    }else{day = day_screen.innerHTML}


  if(month_screen.innerHTML=='январь'){

      month='01';

    }else if(month_screen.innerHTML=='февраль'){

      month='02';

    }else if(month_screen.innerHTML=='март'){

      month='03';

    }else if(month_screen.innerHTML=='апрель'){

      month='04';

    }else if(month_screen.innerHTML=='май'){

      month='05';

    }else if(month_screen.innerHTML=='июнь'){

      month='06';

    }else if(month_screen.innerHTML=='июль'){

      month='07';

    }else if(month_screen.innerHTML=='август'){

      month='08';

    }else if(month_screen.innerHTML=='сентябрь'){

      month='09';

    }else if(month_screen.innerHTML=='октябрь'){

      month='10';

    }else if(month_screen.innerHTML=='ноябрь'){

      month='11';

    }else{

      month='12';

    }


  if(thatIndex === i) {

input.value = `${day}.${month}.${year_screen.innerHTML}`;


let div = document.createElement("div");

div.innerHTML = `

  <svg viewBox='0 0 100 100'>

       <circle cx='50' cy='50' r='20' fill="#CB3C25"/>

       <g fill="transparent" stroke="#ffffff" stroke-width="4px" stroke-linejoin="round" stroke-linecap="round">

               <path d="M44,44 L56,56 M44,56 L56,44" />

             </g>

           </svg>

`;

div.classList.add('miniCrossForDate');

div.onclick = delDate;


input.parentElement.append(div);


let span = document.createElement('span');

   span.classList.add('yellowLabel');

   span.innerHTML = input.placeholder;

  span.style.color = '#EDB021';

  span.style.fontSize = '.7rem';

  span.style.position = 'absolute';

  span.style.top = '.5px';

  span.style.left = '5px';

       //alert(this.outerHTML);

input.parentNode.prepend(span);


}


});


mainDiv.classList.add('hiddening');


}




crossCalendar.addEventListener('click', ()=>{

  mainDiv.classList.add('hiddening');


setTimeout(()=>{

years.classList.add('yearsOut');

months.classList.add('monthsOut');

days.classList.add('daysOut');

}, 0);

years.classList.remove('hiddening');

fonCenterPointer.style.bottom = '291px';

centerPointer.style.bottom = '285px';

year_screen.innerHTML = '2007';

});




years.addEventListener('touchstart', yearsStart, false);

months.addEventListener('touchstart', monthsStart, false);

days.addEventListener('touchstart', daysStart, false);


years.addEventListener('touchmove', yearsMove, false);

months.addEventListener('touchmove', monthsMove, false);

days.addEventListener('touchmove', daysMove, false);


years.addEventListener('touchend', yearsEnd, false);

months.addEventListener('touchend', monthsEnd, false);

days.addEventListener('touchend', daysEnd, false);


function yearsStart(e){

  e.preventDefault();

  strtx = e.pageX - mainDiv.offsetLeft;

}


function yearsMove(e){

  e.preventDefault();

  

  const x = e.pageX - mainDiv.offsetLeft;

  wlk = (x - strtx)/40;

  walkForYears+=wlk;

  years.style.transform = `translate(-50%, -50%) rotate(${walkForYears}deg)`;

  


}


function yearsEnd(e){

  e.preventDefault();

setTimeout(centeredYearSpanFinder, 200);

  let endPosition = walkForYears -(walkForYears%yearsStep);

  walkForYears = endPosition;

  setTimeout(checkPositionYear, 0);

years.style.transform = `translate(-50%, -50%) rotate(${walkForYears}deg)`;


}




function monthsStart(e){

  e.preventDefault();

  strtx = e.pageX - mainDiv.offsetLeft;

}


function monthsMove(e){

  e.preventDefault();

  const x = e.pageX - mainDiv.offsetLeft;

  wlk = (x - strtx)/50;

  walkForMonths+=wlk;

  months.style.transform = `translate(-50%, -50%) rotate(${walkForMonths}deg)`;

}


function monthsEnd(e){

  e.preventDefault();

  setTimeout(centeredMonthSpanFinder, 200);

  let endPosition = walkForMonths -(walkForMonths%monthsStep);

 

  walkForMonths = endPosition;


months.style.transform = `translate(-50%, -50%) rotate(${walkForMonths}deg)`;

}





function daysStart(e){

  e.preventDefault();

  strtx = e.pageX - mainDiv.offsetLeft;

}


function daysMove(e){

  e.preventDefault();

  const x = e.pageX - mainDiv.offsetLeft;

  wlk = (x - strtx)/25;

  walkForDays+=wlk;

  days.style.transform = `translate(-50%, -50%) rotate(${walkForDays}deg)`;

}


function daysEnd(e){

  e.preventDefault();

  setTimeout(centeredDaySpanFinder, 200);

  let endPosition = walkForDays -(walkForDays%daysStep);

 

  walkForDays = endPosition;

  setTimeout(checkPositionDay, 0);


days.style.transform = `translate(-50%, -50%) rotate(${walkForDays}deg)`;

}






years.innerHTML = yearsArr.map(y=>{

  counterForYears+=yearsStep;

  return `

    <span class='yearInCircle opacityToZero' style='transform: translateX(-50%) rotate(${counterForYears}deg)'>${y}</span>

  `;

}).join('');



months.innerHTML = monthsArr.map(m=>{

  counterForMonths+=monthsStep;

  return `

    <span class='monthInCircle' style='transform: translateX(-50%) rotate(${counterForMonths}deg)'>${m}</span>

  `;

}).join('');



days.innerHTML = daysArr.map(d=>{

  counterForDays+=daysStep;

  return `

    <span class='dayInCircle opacityToZero' style='transform: translateX(-50%) rotate(${counterForDays}deg)'>${d}</span>

  `;

}).join('');



const yearSpanArr = [...document.querySelectorAll('.yearInCircle')];


const monthSpanArr = [...document.querySelectorAll('.monthInCircle')];


const daySpanArr = [...document.querySelectorAll('.dayInCircle')];



let sliceYearsStart = 100;

let sliceYearsEnd = 115;


startYearsPosition();


function startYearsPosition() {

  yearSpanArr

  .slice(sliceYearsStart, sliceYearsEnd)

  .forEach(s=>s.classList.remove('opacityToZero'));

}



let sliceDaysStart = 93;

let sliceDaysEnd = 105;


startDaysPosition();


function startDaysPosition() {

  daySpanArr

  .slice(sliceDaysStart, sliceDaysEnd)

  .forEach(s=>s.classList.remove('opacityToZero'));

}



function checkPositionYear() {

 

  yearSpanArr

  .forEach(s=>s.classList.add('opacityToZero'));

  

sliceYearsStart-=(walkForYears/yearsStep);

   sliceYearsEnd-=(walkForYears/yearsStep);


  //alert(sliceYearsStart);


  setTimeout(()=>{

    yearSpanArr

  .slice(sliceYearsStart, sliceYearsEnd)

  .forEach(s=>s.classList.remove('opacityToZero'));


  sliceYearsStart = 100;

  sliceYearsEnd = 115;

  },0);

}



function checkPositionDay() {

 

  daySpanArr

  .forEach(s=>s.classList.add('opacityToZero'));

  

    sliceDaysStart-=(walkForDays/daysStep);

    sliceDaysEnd-=(walkForDays/daysStep);


  setTimeout(()=>{

    daySpanArr

  .slice(sliceDaysStart, sliceDaysEnd)

  .forEach(s=>s.classList.remove('opacityToZero'));


  sliceDaysStart = 93;

  sliceDaysEnd = 105;

  },0);

}





function centeredYearSpanFinder(){


  if(window.innerHeight > window.innerWidth){


  year_screen.innerHTML = yearSpanArr.filter(s=>{

  return s.getBoundingClientRect().left > ((screen.width/2)-(s.getBoundingClientRect().width/2))-20 && s.getBoundingClientRect().left < ((screen.width/2)-(s.getBoundingClientRect().width/2))+20 && !s.classList.contains('opacityToZero') && (s.getBoundingClientRect().bottom < screen.height)

}).map(s=>s.innerHTML);


  } else {

    year_screen.innerHTML = yearSpanArr.filter(s=>{

  return s.getBoundingClientRect().left > ((screen.height/2)-(s.getBoundingClientRect().width/2))-20 && s.getBoundingClientRect().left < ((screen.height/2)-(s.getBoundingClientRect().width/2))+20 && !s.classList.contains('opacityToZero') && (s.getBoundingClientRect().bottom < screen.width)

}).map(s=>s.innerHTML);

  }

}



function centeredMonthSpanFinder(){


  if(window.innerHeight > window.innerWidth){

  

month_screen.innerHTML = monthSpanArr.filter(s=>{

  return s.getBoundingClientRect().left > ((screen.width/2)-(s.getBoundingClientRect().width/2))-10 && s.getBoundingClientRect().left < ((screen.width/2)-(s.getBoundingClientRect().width/2))+10 && (s.getBoundingClientRect().bottom < screen.height)

}).map(s=>s.innerHTML);


  } else {

    month_screen.innerHTML = monthSpanArr.filter(s=>{

  return s.getBoundingClientRect().left > ((screen.height/2)-(s.getBoundingClientRect().width/2))-10 && s.getBoundingClientRect().left < ((screen.height/2)-(s.getBoundingClientRect().width/2))+10 && (s.getBoundingClientRect().bottom < screen.width)

}).map(s=>s.innerHTML);

  }


}



function centeredDaySpanFinder(){


  if(window.innerHeight > window.innerWidth){



  day_screen.innerHTML = daySpanArr.filter(s=>{

  return s.getBoundingClientRect().left > ((screen.width/2)-(s.getBoundingClientRect().width/2))-10 && s.getBoundingClientRect().left < ((screen.width/2)-(s.getBoundingClientRect().width/2))+10 && !s.classList.contains('opacityToZero') && (s.getBoundingClientRect().bottom < screen.height)

}).map(s=>s.innerHTML);


  } else {

  day_screen.innerHTML = daySpanArr.filter(s=>{

  return s.getBoundingClientRect().left > ((screen.height/2)-(s.getBoundingClientRect().width/2))-10 && s.getBoundingClientRect().left < ((screen.height/2)-(s.getBoundingClientRect().width/2))+10 && !s.classList.contains('opacityToZero') && ((s.getBoundingClientRect().bottom + 50) < screen.width)

}).map(s=>s.innerHTML);

  }


}


//  +++КОНЕЦ И БОГУ СЛАВА!+++ //