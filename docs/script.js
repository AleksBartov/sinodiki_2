/*

     планы:

1) страницу приветствия/регистрации/входа

  хранить часть данных в локалСтор и для автозагрузки сравнивать с данными в Моби


2) режим редактирования


3) режим поминовения


4) адаптивный дизайн


5) заменить кнопку редактирования панели на информацию о синодике (кол-во, группы и т.д.)


6) вставить в форму поле "родство/связь"


7) решить в полях с датами формат ввода


8) скорость поминовения


9) гаснет экран при режиме поминовения


*/



//localStorage.clear();


//alert(document.querySelectorAll('.loader svg path')[1].getTotalLength());




/* -----------------------------------

---- обьявляем переменные ---------------------------------- */





const myKey = 'apiKey=2p8S-XYXJGzaPbRYMNWXb24YTrqsbZdV';


const endings = [

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


let last_known_scroll_position = 0;

let ticking = false;


let deepestPoint;


const pannel = document.getElementsByClassName('pannel')[0];


const btnAdd = document.getElementsByClassName('addBtnDiv')[0];


const formInputs = document.getElementsByTagName('input');


const allLabels = [...document.getElementsByTagName('label')];


const allSelects = [...document.getElementsByTagName('select')];


const inputForSearch = document.getElementsByClassName('inputForSearch')[0];


const sandwich = document.getElementsByClassName('sandwich')[0];


const cross = document.getElementsByClassName('cross')[0];


const hMenu = document.getElementsByClassName('hMenu')[0];


const addListTag = document.getElementsByClassName('addListTag')[0];


const allListTag = document.getElementsByClassName('allListTag')[0];


const changeListTag = document.getElementsByClassName('changeListTag')[0];


const startListTag = document.getElementsByClassName('startListTag')[0];


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



/* -----------------------------------

---- Конец обьявления переменных ---------------------------------- */



/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@ обьявляем функции @@@@@@@@@@

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@@@@@ */

    


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

  deepestPoint = scroll_pos;

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


  myAlert('данные сохраняются');


  const radios = newCreatedData

   .filter(d=>d.type == 'radio' && d.checked)

   .map(r=>r.value);


  const selects = allSelects

   .map(d=>d.value)

   .filter(v=>v!=="0");


  const texts = newCreatedData

   .filter(d=>d.type == 'text')

   .map(i=>i.value);



const data = [...radios, ...texts, ...selects];


 const [live, sex, name, surname, fathername, dateOfBirth, dateOfBapt, dateOfSaint, dateDeath, dateOfVows, dateOfOrdinationDiak, dateOfOrdinationPriest, dateOfOrdinationBish, dateOfEnthron, ...other] = data;


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

    count

  });


  // сохраняем данные и в мобиЛаб:


  const options = { 

  method: 'POST',

  headers: {

'Content-Type': 'application/json'

  },

  body: newData

};



fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/iereiAleksandrBartov?${myKey}`, options)

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



})

.catch(e=>console.log(e));


  // конец работы с мобиЛаб

  

  allLabels.forEach(data=>{

data.style.transform = 'translate(6%, 112%)';

data.style.fontSize = '1.4rem';

});


   

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


  disabledGone('живой');

    forMaleLive.classList.remove('hiddening');

forFemaleLive.classList.add('hiddening');

forMaleDeath.classList.add('hiddening');

forFemaleDeath.classList.add('hiddening');

  } else if(deathChoice.checked && sexFChoice.checked) {


  disabledGone('усопшая');

    forMaleDeath.classList.add('hiddening');

forFemaleLive.classList.add('hiddening');

forMaleLive.classList.add('hiddening');

forFemaleDeath.classList.remove('hiddening');

  } else if(liveChoice.checked && sexFChoice.checked){

  disabledGone('живая');

    forFemaleLive.classList.remove('hiddening');

forMaleLive.classList.add('hiddening');

forMaleDeath.classList.add('hiddening');

forFemaleDeath.classList.add('hiddening');

  } else if(deathChoice.checked && sexMChoice.checked) {

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

  const arrMatches = searching(this.value, loadedArr);

  const html = arrMatches.map(person=>{

  const regex = new RegExp(this.value,'gi');

  const personName = person.name.replace(regex, `<span class='yellow'>${this.value}</span>`);

  const personSurname = person.surname.replace(regex, `<span class='yellow'>${this.value}</span>`);

  return `

      <div class='searchedItem' onclick='showAllInfo(${person})'>${personName} ${personSurname}</div>

  `;

}).join(' ');

searchResults.innerHTML = html;

}



function showAllInfo(p) {

  console.log(p);

  alert(p)

}







// открытие-закрытие меню


function openingMenu() {


  cancelReq(myReq);

 

  hMenu.classList.add('opened');



[...document.querySelectorAll('#playIcon path')].forEach(p=>p.classList.add('hiddening'));


document.querySelector('#playIconFirstPath').classList.remove('hiddening');



removeEventListener('scroll', getCenterOfPage);

   

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


[...document.querySelectorAll('.hml')].forEach(link=>{

link.classList.remove('activLink');

link.classList.add('invsbLink')

});



this.classList.add('activLink');


allItems.style.opacity = 0;

searchingForChange.style.opacity = 0;

allItems.classList.add('hiddening');

searchingForChange.classList.add('hiddening');

  formHolder.style.opacity = 1;

formHolder.classList.remove('hiddening');

hMenu.classList.remove('opened');

}







// открытие поиска для правки


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

formHolder.classList.add('hiddening');

  

hMenu.classList.remove('opened');


console.log(loadedArr)

}







// открытие поминовения


function closingMenuAndStartPray() {


  [...document.querySelectorAll('.hml')].forEach(link=>{

link.classList.remove('activLink');

link.classList.add('invsbLink')

});



this.classList.add('activLink');


  allItems.style.opacity = 0;

searchingForChange.style.opacity = 0;

  formHolder.style.opacity = 0;

allItems.classList.add('hiddening');

searchingForChange.classList.add('hiddening');

formHolder.classList.add('hiddening');

hMenu.classList.remove('opened');


}







// открытие общего списка имен


function closingMenuAndAddingField(){



[...document.querySelectorAll('.hml')].forEach(link=>{

link.classList.remove('activLink');

link.classList.add('invsbLink')

});


this.classList.add('activLink');


setTimeout(()=>{

oZdravii.classList.remove('start1');

oUpokoenii.classList.remove('start2');

}, 200);

  

formHolder.style.opacity = 0;

searchingForChange.style.opacity = 0;

formHolder.classList.add('hiddening');

searchingForChange.classList.add('hiddening');

hMenu.classList.remove('opened');

allItems.style.opacity = 1;

allItems.classList.remove('hiddening');


 


  fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/iereiAleksandrBartov?${myKey}`)

.then(data=>data.json())

.then(allNamesArr=>{


  loadedArr = allNamesArr;


  oZdravii.innerHTML = `

     <svg viewBox='0 0 100 100'>

       <g fill="transparent" stroke="#ffffff" stroke-width="1px" stroke-linejoin="round" stroke-linecap="round">

               <path d="M49.75,90.5 A 40.5 40.5 0 1 1 50 90.5" />

               <path d="M48,20 V25 H43 M43,29 H48 V34 H26 M26,38 H48 V63 L43,60 M43,65 L48,68 V86 A 36 36 0 1 1 52 86 V69.5 L57,72.5 M57,67.5 L52,64.5 V38 H74 M74,34 H52 V29 H57 M57,25 H52 V20" />

             </g>

           </svg>

     </br>

    <h3 style='color:#CB3C25'><strong>О ЗДРАВИИ</strong></h4>

    </br>

    </br>

    <div class='showedPersonsList'>${allNamesArr

  .sort()

  .filter(data=>data.live == 'о здравии')

  .map(data=>{


  return (`<div class='commonBox'>

    <div class='commonBox_name'>${data.other.join(' ')} ${namesEndEditor(data.name)}</div>

    <div class='commonBox_other'>(${ data.surname &&  data.comment[0] ? [data.surname, ...data.comment].join(', ') : data.surname && !data.comment[0] ? data.surname : data.comment})</div>

    </div>

  `);

}).join('</br>')}

  </br></br></br></br>+ + +</br></br></br></br>

</div>

`;


  oUpokoenii.innerHTML = `

    <svg viewBox='0 0 100 100'>

       <g fill="transparent" stroke="#ffffff" stroke-width="1px" stroke-linejoin="round" stroke-linecap="round">

               <path d="M49.75,90.5 A 40.5 40.5 0 1 1 50 90.5" />

               <path d="M48,20 V25 H43 M43,29 H48 V34 H26 M26,38 H48 V63 L43,60 M43,65 L48,68 V86 A 36 36 0 1 1 52 86 V69.5 L57,72.5 M57,67.5 L52,64.5 V38 H74 M74,34 H52 V29 H57 M57,25 H52 V20" />

             </g>

           </svg>

     </br>

    <h3 style='color:#01142F'><strong>О УПОКОЕНИИ</strong></h4>

    </br></br>

    <div class='showedPersonsList'>${allNamesArr

  .sort()

  .filter(data=>data.live == 'о упокоении')

  .map(data=>{


  return (`<div class='commonBox'>

    <div class='commonBox_name'>${data.other.join(' ')} ${namesEndEditor(data.name)}</div>

   <div class='commonBox_other'>(${ data.surname &&  data.comment[0] ? [data.surname, ...data.comment].join(', ') : data.surname && !data.comment[0] ? data.surname : data.comment})</div>

    </div>

  `);

}).join('</br>')}</br></br></br></br>+ + +</br></br></br></br></div>

`


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



// функция плей --------------



function playMode () {

  this.classList.toggle('pauseMode');


  //console.log(oZdravii.getBoundingClientRect());


[...document.querySelectorAll('#playIcon path')].forEach(p=>p.classList.toggle('hiddening'));


  if(this.classList.contains('pauseMode')) {


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


// ---- функция скроллинга вверх--------------



  function scrollToTop() {


   const oZdrPlay = document.getElementsByClassName('showedPersonsList')[0];


   const oUpkPlay = document.getElementsByClassName('showedPersonsList')[1];


   if(oZdraviiClicked) {

   let counter = 0;

   function scrollSinodikOZdravii(){

    window.scrollTo({top: counter, behavior: 'smooth'});

    counter++

if(counter<oZdrPlay.clientHeight)

     myReq = requestAn(scrollSinodikOZdravii);

     }

myReq = requestAn(scrollSinodikOZdravii);


//cancelReq(myReq);


    } else {


      let counter = 0;

   function scrollSinodikOUpokoenii(){

    window.scrollTo({top: counter, behavior: 'smooth'});

    counter++

if(counter<oUpkPlay.clientHeight)

myReq = requestAn(scrollSinodikOUpokoenii);

     }

myReq = requestAn(scrollSinodikOUpokoenii);

//cancelReq(myReq);

    }

  }



// ------- режим поминовения. определяет если в центре ---------------


function getCenterOfPage() {

[...document.querySelectorAll('.commonBox')].forEach(div=>{

  

  if((div.offsetTop-window.scrollY) < (screen.height/8)){

div.style.opacity = 0; 

 } else if((div.offsetTop-window.scrollY) > (screen.height/2.5)){

div.style.opacity = 0; 

 } else {

  div.style.opacity = 1;

 }

});

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


inputForSearch.addEventListener('keyup', displayMatches);


btnAdd.addEventListener('click', setDataTest);


sandwich.addEventListener('click', openingMenu);


cross.addEventListener('click', closingMenu);


addListTag.addEventListener('click', closingMenuAndAllListField);


allListTag.addEventListener('click', closingMenuAndAddingField);


changeListTag.addEventListener('click', closingMenuAndGoSearch);


startListTag.addEventListener('click', closingMenuAndStartPray);


[...document.getElementsByTagName('textarea')].forEach(txarea=>txarea.addEventListener('focus', pushLabelUp), {once: true});


[...formInputs].forEach(input=>input.addEventListener('focus', pushLabelUp), {once: true});


allRadio.forEach(radio=>radio.addEventListener('change', setSelects));


// назначаем слушателей дейтпикерам


[...document.querySelectorAll(".datePicker")].forEach(input=>{

input.addEventListener('keydown', dashInsertAuto);

input.addEventListener('blur', validateDate);

});


[...document.querySelectorAll('.saintDatePicker')].forEach(input=>{

input.addEventListener('keydown', dashInsertAuto);

input.addEventListener('blur', validateDateforSaintDay);

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



editIcon.addEventListener('click', scrollToTop);



/* ========================

======== конец назначение слушателей ==============================

==== */



/* тут начинается работа work begins here */



/* ---------------------------при загрузке страницы первым делов запрашиваем данные ----------------------------- */




fetch(`https://api.mlab.com/api/1/databases/sinodik/collections/iereiAleksandrBartov?${myKey}`)

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


  oZdravii.innerHTML = `

     <svg viewBox='0 0 100 100'>

       <g fill="transparent" stroke="#ffffff" stroke-width="1px" stroke-linejoin="round" stroke-linecap="round">

               <path d="M49.75,90.5 A 40.5 40.5 0 1 1 50 90.5" />

               <path d="M48,20 V25 H43 M43,29 H48 V34 H26 M26,38 H48 V63 L43,60 M43,65 L48,68 V86 A 36 36 0 1 1 52 86 V69.5 L57,72.5 M57,67.5 L52,64.5 V38 H74 M74,34 H52 V29 H57 M57,25 H52 V20" />

             </g>

           </svg>

     </br>

    <h3 style='color:#CB3C25'><strong>О ЗДРАВИИ</strong></h4>

    </br>

    </br>

    <div class='showedPersonsList'>${allNamesArr

  .sort()

  .filter(data=>data.live == 'о здравии')

  .map(data=>{


  return (`<div class='commonBox'>

    <div class='commonBox_name'>${data.other.join(' ')} ${namesEndEditor(data.name)}</div>

    <div class='commonBox_other'>(${ data.surname &&  data.comment[0] ? [data.surname, ...data.comment].join(', ') : data.surname && !data.comment[0] ? data.surname : data.comment})</div>

    </div>

  `);

}).join('</br>')}

  </br></br></br></br>+ + +</br></br></br></br>

</div>

`;


  oUpokoenii.innerHTML = `

    <svg viewBox='0 0 100 100'>

       <g fill="transparent" stroke="#ffffff" stroke-width="1px" stroke-linejoin="round" stroke-linecap="round">

               <path d="M49.75,90.5 A 40.5 40.5 0 1 1 50 90.5" />

               <path d="M48,20 V25 H43 M43,29 H48 V34 H26 M26,38 H48 V63 L43,60 M43,65 L48,68 V86 A 36 36 0 1 1 52 86 V69.5 L57,72.5 M57,67.5 L52,64.5 V38 H74 M74,34 H52 V29 H57 M57,25 H52 V20" />

             </g>

           </svg>

     </br>

    <h3 style='color:#01142F'><strong>О УПОКОЕНИИ</strong></h4>

    </br></br>

    <div class='showedPersonsList'>${allNamesArr

  .sort()

  .filter(data=>data.live == 'о упокоении')

  .map(data=>{


  return (`<div class='commonBox'>

    <div class='commonBox_name'>${data.other.join(' ')} ${namesEndEditor(data.name)}</div>

    <div class='commonBox_other'>(${ data.surname &&  data.comment[0] ? [data.surname, ...data.comment].join(', ') : data.surname && !data.comment[0] ? data.surname : data.comment})</div>

    </div>

  `);

}).join('</br>')}</br></br></br></br>+ + +</br></br></br></br></div>

`


})

.catch(e=>console.log(e));






//  +++КОНЕЦ И БОГУ СЛАВА!+++ //