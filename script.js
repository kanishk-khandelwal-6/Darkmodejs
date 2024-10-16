function theme(){
     var btnch=document.getElementById('btn').style;
    var change=document.body.style;

    if(change.background==""){
        change.background="#131313"
        change.color="cyan"
        btnch.color="cyan"
        btnch.borderColor="#fff"
    }else {
        change.background=""
        change.color=""
         btnch.color=""
          btnch.borderColor=""
    }
   
}

btnch.addEventListener('change',()=>{

    icon.toggle("fa-solid fa-moon-over-sun")
      
        })


// function menuopen(){
// document.getElementById('sidebar').style.right="0px"
// }