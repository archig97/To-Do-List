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
         
         function validateSignupForm(e){ 

           
         var firstName=document.getElementById("firstname");  
         var lastName=document.getElementById("lastname");  
         var password=document.getElementById("signupPassword");
           
         if (firstName==null || firstName==""){  
            e.preventDefault();
           firstName.className+=" err";
           firstName.innerText="PLEASE ENTER VALID FIRST NAME" ;
          
         }
         
        //  if (lastName==null || lastName==""){  
        //    alert("Last Name can't be blank");  
        //    return false;  
        //  }
        //  if(password.length<6){  
        //    alert("Password must be at least 6 characters long.");  
        //    return false;  
        //    }  
         }
         
         document.getElementById("signupForm").addEventListener("submit",validateSignupForm(e));
         
         
         