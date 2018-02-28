console.log('hello Nico')


function verifName(champ)
{
   if(champ.value.length < 2 || champ.value.length > 10)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(f)
{
   var nameOk = verifPseudo(f.name);
   var emailOk = verifEmail(f.email);
  
   
   if(nameOk && emailOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}



var slides = document.querySelectorAll('#owl .suite');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
    slides[currentSlide].className = 'suite';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'suite showing';
}