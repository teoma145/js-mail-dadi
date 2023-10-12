const buttonel = document.getElementById('button');
const matchel =document.getElementById('matchel');
const myarray =[
    'mariorossi@gmail.com,',
    'mariorossi@gmail.com',
    'marcoromani@gmail.com',
    'mirkosabati@gmail.com',
]
 
buttonel.addEventListener('click',function(){
 let mailel = document.getElementById('mailel').value;
 let match = false;
  for(let x = 0; x < myarray.length; x++){
    let currmail = myarray[x];
    if (currmail === mailel){
     match=true;
    }
  }
  if(match == true){
   matchel.innerHTML=`La tua email è stata trovata`
  }
  else{
    matchel.innerHTML=`La tua email non è stata trovata`
  }
})



//DADI

let dicebutton = document.getElementById('dicebutton')
let risultato= document.getElementById('risultato')
let tuorisultato = document.getElementById('tuorisultato')
let risultatopc = document.getElementById('risultatopc')
dicebutton.addEventListener('click',function(){
    const miodado =  Math.floor(getRandomNumber(1, 6));
    const dadopc =  Math.floor(getRandomNumber(1, 6));
    if (miodado < dadopc){
       risultato.innerHTML=`Hai perso`
    } 
    else if(miodado === dadopc){
        risultato.innerHTML=`Hai Pareggiato`
    }
    else{
        risultato.innerHTML=`Hai vinto`
    }
    tuorisultato.innerHTML=`Il tuo numero è ${miodado}`;
    risultatopc.innerHTML=`Il numero del tuo sfidante è ${dadopc}`;
})




function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}




