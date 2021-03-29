var i=0;

function modalAbout(){
   if (!i){
    document.getElementById("myModal").style.display="inline";
     i=1;
   }
   else{
    document.getElementById("myModal").style.display="none";
    i=0;
   }

}