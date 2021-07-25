//CALLS MODALS ON BUTTON CLICKS


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
         
         //PREVENT SUBMISSION OF FORMS WITH INCORRECT FIELDS

         
         function validateEmail(emailid)  
         {  
            if (emailid==null || emailid==""){return false;}
                
                else{
         var atposition=emailid.prototype.indexOf("@");  
         var dotposition=emailid.lastIndexOf(".");  
         if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
            
           return false;  
           }  
        }

           return true;
         }  

         
         function validateSignupForm(e){ 
            
           
           
           
;         var firstName=document.getElementById("firstname"); 
 
         var lastName=document.getElementById("lastname"); 
         var emailid=document.getElementById("signupEmail"); 
         var password=document.getElementById("signupPassword");
           
         if (firstName.value==null || firstName.value==""){  
           
           firstName.className+=" error";
           
           document.getElementById("firstNameError").className+=" err-msg";
           document.getElementById("firstNameError").innerText="PLEASE ENTER VALID FIRST NAME"
           
          console.log(firstName.className);
          
         }

         if (lastName.value==null || lastName.value==""){  
           
            lastName.className+=" error";
            
            document.getElementById("lastNameError").className+=" err-msg";
            document.getElementById("lastNameError").innerText="PLEASE ENTER VALID LAST NAME"
            
          
           
          }

          if(validateEmail(emailid)==false)
          {
            emailid.className+=" error";
            document.getElementById("emailError").className+=" err-msg";
            document.getElementById("emailError").innerText="PLEASE ENTER VALID EMAIL"
          }

          if(password.value.length<6)
          {
            password.className+=" error";
            document.getElementById("pwSignupError").className+=" err-msg";
            document.getElementById("pwSignupError").innerText="PASSWORD MUST BE 6 CHARACTERS LONG";
          }
         
        
        //  if(password.length<6){  
        //    alert("Password must be at least 6 characters long.");  
        //    return false;  
        //    }  
         }
         
         document.getElementById("signupForm").addEventListener("submit",function(e){
            e.preventDefault();
            validateSignupForm();
         });
         
         
         