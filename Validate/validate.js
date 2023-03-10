let nameMessage=document.getElementById('nameMessage');
let phoneMessage=document.getElementById('phoneMessage');
let ageMessage=document.getElementById('ageMessage');
let dateMessage=document.getElementById('dateMessage');
let submitMessage=document.getElementById('submitMessage');


function userName(){
    let userText=document.getElementById("user-Name").value;
    if(userText=='')
    {   
        nameMessage.innerHTML='name is required'; 
        nameMessage.style.color="red"
        nameMessage.style.width="150px";
        nameMessage.style.border="solid black";
        nameMessage.style.borderRadius="5px";
        nameMessage.style.marginLeft="10%";
        return false;
    }
    if(userText.match(/\d/))
    {
        nameMessage.style.border="solid black";
        nameMessage.style.borderRadius="5px";
        nameMessage.style.width="150px";
        nameMessage.style.color="red"
        nameMessage.style.marginLeft="10%";
        nameMessage.innerHTML='only give the character';
        return false;
    }
    nameMessage.innerHTML='';
    nameMessage.style.border="none";
    return true;
}


function userPhone(){
    let phoneText=document.getElementById('user-Phone').value;
    if(phoneText=='')
    {
        phoneMessage.innerHTML='required';
        phoneMessage.style.color="red"
        phoneMessage.style.width="150px";
        phoneMessage.style.border="solid black";
        phoneMessage.style.borderRadius="5px";
        phoneMessage.style.marginLeft="20%";
        return false;
    }
    if(phoneText.length!==10)
    {
        phoneMessage.innerHTML='Phone-no should be ten digits'
        phoneMessage.style.border="solid black";
        phoneMessage.style.borderRadius="5px";
        phoneMessage.style.width="200px";
        phoneMessage.style.color="red"
        phoneMessage.style.marginLeft="10%";
       
        return false;
    }
    phoneMessage.innerHTML='';
    phoneMessage.style.border="none";
    return true;
}


function userAge(){
let ageText=document.getElementById("user-Age").value;
if(ageText.length=='')
{
    return false;
}
if(ageText.match(/[a-z]/))
{
    ageMessage.innerHTML='only numbers';
    ageMessage.style.border="solid black";
    ageMessage.style.borderRadius="5px";
    ageMessage.style.width="200px";
    ageMessage.style.color="red"
    ageMessage.style.marginLeft="10%";
    return false;
}
if(!(ageText>=18 && ageText<=60))
{
    ageMessage.innerHTML='age between 18 to 60';
    ageMessage.style.border="solid black";
    ageMessage.style.borderRadius="5px";
    ageMessage.style.width="200px";
    ageMessage.style.color="red"
    ageMessage.style.marginLeft="10%";
    return false;
}
ageMessage.innerHTML='';
ageMessage.style.border="none";
return true;
}

function userDate(){
    let dateText=document.getElementById("user-Date").value;
    let currentDate="2023-03-14";
    if(dateText<=currentDate && dateText!=''){
      dateMessage.innerHTML='';
      return true;
    }
    dateMessage.innerHTML='Date is Not Valid:)';
    dateMessage.style.color="red";
    return false;
}
     

function Submit()
{
     if(userName() && userPhone() && userAge() && userDate())
     {
     submitMessage.innerHTML='';
     alert("Done");
     return true;
     }
     else
     {
        submitMessage.innerHTML='Fill the all field in correct order';
        submitMessage.style.color="red";
        return false;
     }
}
