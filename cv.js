function addNewEField() {

let newNode = document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("eField");
newNode.classList.add("mt-2");
newNode.setAttribute("placeholder","Enter here");
let eOb = document.getElementById('e');
let eAddButtonOb = document.getElementById("eAddButton");

eOb.insertBefore(newNode , eAddButtonOb);
}

function addNewSField() {
    let newNode = document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("sField");
newNode.classList.add("mt-2");
newNode.setAttribute("placeholder","Enter here");

let sOb = document.getElementById('s');
let sAddButtonOb = document.getElementById("sAddButton");

sOb.insertBefore(newNode , sAddButtonOb);
}

function addNewLField() {
    let newNode = document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("lField");
newNode.classList.add("mt-2");
newNode.setAttribute("placeholder","Enter here");

let lOb = document.getElementById('l');
let lAddButtonOb = document.getElementById("lAddButton");

lOb.insertBefore(newNode , lAddButtonOb);
}

function addNewPField() {
    let newNode = document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("pField");
newNode.classList.add("mt-2");
newNode.setAttribute("placeholder","Enter here");

let pOb = document.getElementById('p');
let pAddButtonOb = document.getElementById("pAddButton");

pOb.insertBefore(newNode , pAddButtonOb);
}


function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML=nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //document.getElementById("ldT").innerHTML = document.getElementById("linkedField").value;
    //document.getElementById("inT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;


    let eFields = document.getElementsByClassName("eField");
    let educationT = document.getElementById("educationT");
    let eStr = "";
    for (let ele of eFields) {
        eStr += `<li>${ele.value}</li>`;
    }
    educationT.innerHTML = eStr;

    let sFields = document.getElementsByClassName("sField");
    let skillsT = document.getElementById("skillsT");
    let eStr1 = "";
    for (let ele of sFields) {
        eStr1 += `<li>${ele.value}</li>`;
    }
    skillsT.innerHTML = eStr1;

    let lFields = document.getElementsByClassName("lField");
    let languagesT = document.getElementById("languagesT");
    let eStr2 = "";
    for (let ele of lFields) {
        eStr2 += `<li>${ele.value}</li>`;
    }
    languagesT.innerHTML = eStr2;

    let pFields = document.getElementsByClassName("pField");
    let proT = document.getElementById("proT");
    let eStr3 = "";
    for (let ele of pFields) {
        eStr3 += `<li>${ele.value}</li>`;
    }
    proT.innerHTML = eStr3;

    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    
    reader.onloadend = function () {
        console.log(reader.result);
        document.getElementById("imgtemplate").src = reader.result;
    };

    reader.readAsDataURL(file);

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';
}

function printCV() {
    window.print();
}