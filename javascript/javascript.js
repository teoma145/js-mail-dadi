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






