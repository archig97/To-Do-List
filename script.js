//CALLS MODALS ON BUTTON CLICKS

let userNo = Number(localStorage.getItem('noOfUsers'));
         //LOGIN
         var loginModal = document.getElementById('loginModal');
         var loginBtn = document.getElementById("loginBtn");
         var buttonToClose = document.getElementById("btnCloseLogin");
         
         // When the user clicks the button, open the modal 
         loginBtn.addEventListener("click",function() {
             loginModal.style.display = "block";
         });
        //click x to close modal
         buttonToClose.addEventListener("click",function() {
            loginModal.style.display = "none";
        });
         
         //SIGNUP MODAL
         
         var signupModal = document.getElementById('signupModal');
         var signupBtn = document.getElementById("signupBtn");
         var buttonToCloseSignup = document.getElementById("btnCloseSignup")

         signupBtn.addEventListener("click",function() {
            signupModal.style.display = "block";
        });

        buttonToCloseSignup.addEventListener("click",function() {
            signupModal.style.display = "none";
        });
         
         
         
         
         
         //------------------------------------------------------------------------------------------------------
         
         //VALIDATING EMAIL ADDRESS

         
         function validateEmail(emailid)
    {
        if (emailid==null || emailid=="")
            return false;
        else{
            if(emailid && emailid.indexOf('@')<=0)
                return false;
            if(emailid && (emailid.charAt(emailid.length-4)!='.') && (emailid.charAt(emailid.length-3)!='.'))
                return false;
        }

        return true;

    }

    //VALIDATING SIGNUP FORM
         
         function validateSignupForm(e){ 
            
           
           var flag=true;
           
        var firstName=document.getElementById("firstname"); 
 
         var lastName=document.getElementById("lastname"); 
         var emailid=document.getElementById("signupEmail"); 
         var password=document.getElementById("signupPassword");
           
         if (firstName.value==null || firstName.value==""){  
           flag=false;
           firstName.className+=" error";
           
           document.getElementById("firstNameError").className+=" err-msg";
           document.getElementById("firstNameError").innerText="PLEASE ENTER VALID FIRST NAME"
           
          console.log(firstName.className);
          
         }

         if (lastName.value==null || lastName.value==""){  
            flag=false;
            lastName.className+=" error";
            
            document.getElementById("lastNameError").className+=" err-msg";
            document.getElementById("lastNameError").innerText="PLEASE ENTER VALID LAST NAME"
            
          
           
          }

          if(validateEmail(emailid.value)==false)
          {
            flag=false;
            emailid.className+=" error";
            document.getElementById("emailError").className+=" err-msg";
            document.getElementById("emailError").innerText="PLEASE ENTER VALID EMAIL"
          }

          if(password.value.length<6)
          {
            flag=false;
            password.className+=" error";
            document.getElementById("pwSignupError").className+=" err-msg";
            document.getElementById("pwSignupError").innerText="PASSWORD MUST BE 6 CHARACTERS LONG";
          }
         
        if(flag)
        {
            var currentUserFname="user"+localStorage.getItem('noOfUsers')+"fname";
            localStorage.setItem(currentUserFname,firstName.value);

            var currentUserLname="user"+localStorage.getItem('noOfUsers')+"lname";
            localStorage.setItem(currentUserLname,lastName.value);

            var currentUserEmail="user"+localStorage.getItem('noOfUsers')+"email";
            localStorage.setItem(currentUserEmail,emailid.value);

            var currentUserPassword="user"+localStorage.getItem('noOfUsers')+"password";
            localStorage.setItem(currentUserPassword,password.value);

            localStorage.setItem('noOfUsers',(userNo+1).toString());


            
        }
        
         }

         //VALIDATING LOGIN FORM
         function validateLoginForm(e){

            var emailid=document.getElementById("loginEmail"); 
         var password=document.getElementById("loginpw");
            if(validateEmail(emailid.value)==false)
          {
            emailid.className+=" error";
            document.getElementById("loginEmailError").className+=" err-msg";
            document.getElementById("loginEmailError").innerText="PLEASE ENTER VALID EMAIL"
          }

          if(password.value.length<6)
          {
            password.className+=" error";
            document.getElementById("loginpwError").className+=" err-msg";
            document.getElementById("loginpwError").innerText="PASSWORD MUST BE 6 CHARACTERS LONG";
          }
         }
         
         document.getElementById("signupForm").addEventListener("submit",function(e){
            e.preventDefault();
            validateSignupForm();
         });

         document.getElementById("loginForm").addEventListener("submit",function(e){
            e.preventDefault();
            validateLoginForm();
         });
         
         
         