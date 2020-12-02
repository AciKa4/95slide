$(document).ready(function(){

  
    navIspis();
    mobileNav();


    let lokacija = window.location.pathname;

    window.onload = function() {
        if(lokacija.indexOf('index.html') != -1) {
            Jela();
            skrol();
            strelicaUp();
            formaDani();
            formaSati();
            formaOsobe();
            ispisBlog();
        }
      
    if(lokacija.indexOf('menu.html') != -1) {
        skrol();
        strelicaUp();
    }
    /*
    if(lokacija.indexOf('contact') != -1) {
   
    }
    if(lokacija.indexOf('trips') != -1) {
    
    } */
    }
    // scroll
    var rootElement = document.documentElement;
    var strelica = document.querySelector(".up");
    function skrol(){    
        if(document.body.scrollTop > 220 || rootElement.scrollTop > 220){
            strelica.style.display="block";
        }
        else{
            strelica.style.display="none";
        }
        document.addEventListener("scroll",skrol); 
    }

    function strelicaUp(){
        strelica.addEventListener("click",function(){
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }
    
    //ispis navigacije
    function navIspis() {
        var meniN=[["index.html","Home"],["menu.html","Our Menu"],["author.html","Author"],["contact.html","Contact"],["#","Docs"]];
        var meniDiv = document.querySelector(".meni");

         for(let i=0;i<meniN.length;i++){
         var liElem = document.createElement("li");
         var aElem = document.createElement("a");
         aElem.setAttribute('href',meniN[i][0]);
         aElem.classList.add('nav-link');
         aElem.textContent= meniN[i][1];
        liElem.classList.add('nav-item');
        liElem.appendChild(aElem);
        meniDiv.appendChild(liElem);
        }
        }

    //responsive navigacija
        function mobileNav(){  
            $('.hamb').click(function(){
                $(".meni li").slideToggle('slow');
            });
        }
        
        // breakfast,lunch,dinner,desserts 
        let nizSlikeJela = [["img/cook_breakfast.png","Breakfast"],["img/cook_lunch.png","Lunch"],["img/cook_dinner.png","Dinner"],["img/cook_dessert.png","Desserts"]];
        let nizImeJela = ["Breakfast","Lunch","Dinner","Desserts"];
        function Jela(){
                let jela = document.querySelector(".jela");
                for(let i=0;i<nizImeJela.length;i++){
                    jela.innerHTML+=`<div class="col-md-3 col-sm-6 col-xs-12  pt-5">
                    <div class="service-item">
                        <a href="menu.html" class="text-center">
                        <img src="${nizSlikeJela[i][0]}" alt="${nizSlikeJela[i][1]}" class="center">
                        <h4>${nizImeJela[i]}</h4>
                        </a>
                    </div>
                </div>`
                }
        }
        
        //forma dinamicko ispisivanje

        //za dane
        var dani = document.querySelector("#dani");
        var nizDanVrednost = ["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        var nizDanTekst  = Array.from(nizDanVrednost);
        nizDanTekst.shift();
        nizDanTekst.unshift("Select day");

        function formaDani(){
            for(let i=0;i<nizDanTekst.length;i++){
                var opcijaDan = document.createElement("option");
                opcijaDan.setAttribute('value',nizDanVrednost[i]);
                opcijaDan.textContent=nizDanTekst[i];      
                dani.appendChild(opcijaDan);   
            }
        }

        // za sate
        var sat = document.querySelector("#sat");
        var satiVrednost = ["","10-00","12-00","14-00","16-00","18-00","20-00","22-00"];
        var satiTekst = Array.from(satiVrednost);
        satiTekst.shift();
        satiTekst.unshift("Select hour");

        function formaSati(){
            for(let i=0;i<satiVrednost.length;i++){
                var opcijaSat = document.createElement("option");
                opcijaSat.setAttribute('value',satiVrednost[i]);
                opcijaSat.textContent=satiTekst[i];      
                sat.appendChild(opcijaSat);   
            }
        }
        // za osobe
        var osobe = document.querySelector("#osobe");
        var osobeVrednost = ["","1-Person","2-Persons","3-Persons","4-Persons","5-Persons","6-Persons"];
        var osobeTekst = Array.from(osobeVrednost);
        osobeTekst.shift();
        osobeTekst.unshift("How many persons?");

        function formaOsobe(){
            for(let i=0;i<osobeVrednost.length;i++){
                var opcijaOsobe = document.createElement("option");
                opcijaOsobe.setAttribute('value',osobeVrednost[i]);
                opcijaOsobe.textContent=osobeTekst[i];      
                osobe.appendChild(opcijaOsobe);   
            }
        }

        //ispisivanje blog dela dinamicki
        var blog = document.querySelector(".blogovi");
        var nazivBloga=["Private Parties","Live Music","Food Tasting Event","Love is in the air"];
        var sadrzajBloga = [
            "95 Slide Restaurant is happy to be the venue for your reunion, party, luncheon.With two banquet rooms, 95 Slide Restaurant can transform a space into the perfect  site for your gathering.",
            "An ordinary dinner can turn into an unforgettable night out that you will remember for the rest of your life. Good time always starts with a good meal, and a nice music is just a bonus.",
            "You could try multitude of menus: vegetarian,ethnic, gluten-free, locally-sourced, based on a specific meat, cheese or pasta, soup-driven, centeredon a specific region and much more.",
            "You don’t have to wait for Valentine’s Day to create a romantic tradition.Come to us for dinner and maybe you will meet the love of your life. You will thank us later"];
        
        function ispisBlog(){
            let br=1;
            for(let i=0;i<nazivBloga.length;i++){
                blog.innerHTML+=`
                    <div class="col-md-12 col-lg-6 col-xl-6">
                        <div class="blog-post">
                            <img src="img/blog_post_0${br}.jpg" alt="">
                            <div class="right-content">
                                <h4>${nazivBloga[i]}</h4>
                                <p class="blogt">${sadrzajBloga[i]}</p>                     
                            </div>
                        </div>
                    </div>
                `
                br++;
            }
        }
        

});


