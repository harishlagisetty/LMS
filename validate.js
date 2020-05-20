//function logout(){
   // localStorage.setItem("Logedin", "false");
         // window.location.href = "login page.html";
         var timeoutID;
 
function logout() {
    this.addEventListener("mousemove", resetTimer, true);
    this.addEventListener("mousedown", resetTimer, true);
    this.addEventListener("keypress", resetTimer, true);
    this.addEventListener("DOMMouseScroll", resetTimer, true);
    this.addEventListener("mousewheel", resetTimer, true);
    this.addEventListener("touchmove", resetTimer, true);
    this.addEventListener("MSPointerMove", resetTimer, true);
 
    startTimer();
}
logout();
 
function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive,5000);
}
 
function resetTimer(e) {
    window.clearTimeout(timeoutID);
 
    goActive();
}
 
function goInactive() {
  window.location.href = "login page.html";// do something
}
 
function goActive() {
   logout(); // do something  
}

function validateUser(username, password,p,Usertype) {
   // if (username == "Admin" && password == p) {
   //   localStorage.setItem("Logedin", "true");
   //   window.location.href = "teacher1.html";
   // }
  //  else if (username == "Student" && password == p) {
    //  localStorage.setItem("Logedin", "true");
   //   window.location.href = "learningmaterials1.html";
   // }
    var Users = ["Admin", "Student", "Teacher","harish"];
     Users.forEach(myFunction);

    function myFunction(item) {
       if (Usertype == "Admin") {
         if (username == item && password == p) {
          localStorage.setItem("Logedin", "true");
           window.location.href = "teacher1.html";
         }
         else if(username != item && password != p){
          $("#error").html('please enter valid credentials');
         }
        }
         else if (Usertype == "Student") {
           if (username == item && password == p) {
            localStorage.setItem("Logedin", "true");
             window.location.href = "learningmaterials1.html";
           }
           else if(username != item && password != p){
            $("#error").html('please enter valid credentials');
           }
         }
       }
     
  }
  function timeout(sesionTimeval){
      setTimeout(function(){ logout(); }, sesionTimeval);
  }