var teacherName = "";
var classval = "";
var subject = "";
var phonenumber = "";
var Gender = "";
function  CreateObject() {
    teacherName = document.getElementById('teachername').value;
    classval = document.getElementById('cls').value;
    subject = document.getElementById('sub').value;
    phonenumber = document.getElementById('phn').value;
    Gender = document.getElementById('gen').value;

    //var submitid = document.getElementById('submitid');


    //$("#submitid").css({"display":'block'});
    if (teacherName != "" && classval != "" ){     
    document.getElementById("teachername").readOnly = true;
    document.getElementById("cls").readOnly = true;
    document.getElementById("sub").readOnly = true;
    document.getElementById("phn").readOnly = true;
    document.getElementById("gen").readOnly = true;
    }
    printteacher();
    }
    function Tval(){
        teacherName = document.getElementById('teachername').value;
        if (teacherName == "" ) {
            teid.textContent = "Teacher name is mandatory";
            teid.style.color = "red";
           // document.getElementById("teachername").focus();
        }
        else if(!isNaN(teacherName)){
            teid.textContent = "Enter Alphabets only";
            teid.style.color = "red";
        }
        else{
            teid.textContent = "";
        }
    }
    function Cval(){
        classval = document.getElementById('cls').value;
        if (classval == "") {
            clid.textContent = "class is mandatory ";
            clid.style.color = "red";
            //document.getElementById("cls").focus();
        }
        else{
            clid.textContent = "";
        }
    }
    function Pval(){
        phonenumber = document.getElementById('phn').value;
        if ((isNaN(phonenumber))) {
            phid.textContent = "enter numbers only ";
            phid.style.color = "red";
            //document.getElementById("phn").focus();
        }
        else{
            phid.textContent = "";
        }
    }
function printteacher() {
    debugger;
    var obj = {};
    obj.TeacherName =$("#teachername").val();
    obj.Class =$("#cls").val();
    obj.Subject =$("#sub").val();
    obj.PhoneNumber =$("#phn").val();
    obj.Gender =$("#gen").val();
    }