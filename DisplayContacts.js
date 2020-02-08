var noOfContacts=0,j=1;
var arrayOfObj=[];
var contactString="";

/*var img;

var src = "contacts.png"
var fname="Vishnu";
var lname="Sastry H. K."
var phone="8552598696"
var email="hkvsastry@gmail.com"
var comp="Rayabhari Technologies"*/


var obj, strobj, contactInfo, contactInfoObj;

/*obj = { Image: src, Fname: fname, LName: lname, Phone: phone, Email: email, Company: comp };
strobj = JSON.stringify(obj);
localStorage.setItem("Contact1", strobj);
console.log(localStorage)*/



/*
// Retrieving data:
contactInfo = localStorage.getItem("Contact1");
contactInfoObj= JSON.parse(contactInfo);
img= document.createElement("img");
img.src = contactInfoObj.Image;

document.getElementById("imgid").appendChild(img);
document.getElementById("fnameid").innerHTML = contactInfoObj.Fname;
document.getElementById("lnameid").innerHTML=contactInfoObj.LName;
document.getElementById("phoneid").innerHTML= contactInfoObj.Phone;
document.getElementById("emailid").innerHTML= contactInfoObj.Email;
document.getElementById("compid").innerHTML= contactInfoObj.Company;
//console.log(document.querySelector('#demo1'));

*/
var contacts = []
function toggleSidebar(status) {

}

//contaact structure:  {"name":"some name","phone:'5589485456"}

function openMainPage()
{
  //window.location.href="Contact Manager Main.html"
  renderContacts();
}

function renderContacts() 
{
 // window.location.href = "Contact Manager Main.html"
  //console.log(localStorage)
  
  //for (j = 1; j < noOfContacts; j++) 
  {
    contactInfo = localStorage.getItem("Contact"+j);
    contactInfoObj = JSON.parse(contactInfo);
    document.createElement("button")
    /*img= document.createElement("img");
    img.src = contactInfoObj.Image;
    
    document.getElementById("imgid").appendChild(img);*/
   document.getElementById("fnameid").innerHTML = contactInfoObj.Fname;
    document.getElementById("lnameid").innerHTML = contactInfoObj.LName;
    document.getElementById("phoneid").innerHTML = contactInfoObj.Phone;
    document.getElementById("emailid").innerHTML = contactInfoObj.Email;
    document.getElementById("compid").innerHTML = contactInfoObj.Company;
    console.log(localStorage)

    
  }
}

  /*function renderContacts()
  {
    alert("rennder")
    var htmlFormattedString=''
    for(var i=0;i<contacts.length;i++)
    {
  
      var contactStringData=(contacts[i].name)
  
      htmlFormattedString+='<div onClick="alert(\''+contactStringData+'\')" style="padding:5px;border-bottom:1px solid #ccc">Name: <b>'+contacts[i]['name']+'</b>, Phone: '+contacts[i]['phone']+"</div>"
    }
    document.getElementById('contactsDisplayArea').innerHTML=htmlFormattedString
  }*/
  /* console.log(contacts)
   var htmlFormattedString='';
   console.log(htmlFormattedString)
   
   for(var i=0;i<contacts.length;i++)
   {
 
     var contactStringData=(contacts[i].name)
 
     htmlFormattedString+='<div onClick="alert(\''+contactStringData+'\')" style="padding:5px;border-bottom:1px solid #ccc">Name: <b>'+contacts[i]['name']+'</b>, Phone: '+contacts[i]['phone']+"</div>"
   }*/

  //sdocument.getElementById('contactsDisplayArea').innerHTML=htmlFormattedString;


function updateSidebar() {
document.getElementById("imgid").innerHTML="bhjguh0;"
}

function addContact(fname, lname, phone, email, address, company) 
{
  //TO-DO add validations
  //window.location.href="AddContact.htm";
  /*console.log(contacts);
  contacts.push({"fname":fname,"lname":lname,"phone":phone,"email":email,"address":address,"company":company});
  console.log(contacts);
  renderContacts();*/
  alert("ADDContact")
  obj = {"Fname": "fname", "LName": lname, "Phone": phone, "Email": email, "Address": address, "Company": company };
  console.log(obj)
  strobj = JSON.stringify(obj);
  console.log(strobj)
  arrayOfObj.push(obj);
  contactString="Contact"+noOfContacts;
  noOfContacts=noOfContacts+1;
  localStorage.setItem(contactString, strobj); 
  console.log(localStorage)
  renderContacts();

}