'use script' ;


// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10.
//  Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать
//   на клетки пока он не найдет все загаданные компьютером клетки.

// Реализуйте описанную игру.

// Модифицируйте предыдущую задачу, добавив 
// таймер обратного отсчета. Если игрок не успеет угадать числа за отведенное время - он проиграл.
let table = document.querySelector('#tbl');
let p = document.querySelector('#p') ;
let arr = [];
let arrLog = [];

+(function creatTable()
{
    for ( let i =1 ; i <=10 ; i++)
{
    let tr = document.createElement('tr');
    for (let k = 1 ; k <= 10 ;k++)
    {
let td = document.createElement('td');
tr.appendChild(td)
    }
    table.appendChild(tr) ;
    logicGame() ;
}})();



+(function arrRandom()
{
    for ( let i =1 ; i <=10 ; i++)
{
    let a = Math.round(Math.random()*100);
  
    arr.push(a);
}})();
console.log(arr)
const arrTd =document.querySelectorAll('td')
function logicGame()
{
    const arrTd =document.querySelectorAll('td')
    let k = 0  
    let r = 0
    for (let y of arrTd)
{ 

       y.dataset.value = ++k ;

    y.addEventListener('click' ,function(){ 
        this.className='red'
for (let u of arr)
{
 
    if(u === Number(this.dataset.value))
{
r++;
console.log(r);
    this.classList.add('green');
  
}



}})}
res(r)
};
console.log(arrLog.length);


function res(r)
{
    if  (r == 10 ) 
{
    p.innerHTML='YOU WIN';
}};
let t = 100
function time ()
{

    let timer = setInterval(() => {
        --t ;
        p.textContent = t ;
        if( t == 0 )
        {let arrTd =document.querySelectorAll('td')
            for (c of arrTd)
            {
                c.style.border = '4px solid black';
            }
            clearInterval(timer)
             p.innerHTML='YOU LOOSER';}
    }, 1000);
    

}
time ()