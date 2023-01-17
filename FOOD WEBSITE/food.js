        // for menubtn
        
        var menubar = document.getElementById('menubar');
        var navbar = document.getElementById('navbar');

        menubar.addEventListener ('click', function(){
           
            navbar.classList.toggle('mobile-menu');
        })
        

        // for fixed navbar
        window.onscroll = () =>{

            menubar.classList.remove('fa-times');
            navbar.classList.remove('mobile-menu');
          
            if(window.scrollY > 60){
              document.querySelector('#scroll-top').classList.add('mobile-menu');
            }else{
              document.querySelector('#scroll-top').classList.remove('mobile-menu');
            }
          
          }


        
        // for sign up
        var signUpForm= document.getElementById('signUpForm');
        var signUp = document.getElementById('sign-up')

        function signUp(){
            sign-up.document.write(signUpForm);
            
        }


        // for faq

        var questions = document.querySelectorAll(".faq-question");
        var i;

        for (i = 0; i < questions.length; i++) {
            questions[i].addEventListener("click", function () {

                this.classList.toggle("active");

                var body = this.nextElementSibling;
                if (body.style.display === "block") {
                    body.style.display = "none";
                } 
                else {
                    body.style.display = "block";
                }

            });
        } 


    

        