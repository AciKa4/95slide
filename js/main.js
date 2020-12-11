$(document).ready(function(){

    navIspis();
    mobileNav();
    Futer();


//poziv funkcija za index stranu
if ($(".jela").length > 0) {
    Jela();
    skrol();
    strelicaUp();
    formaIndex();
    ispisBlog();
}
//poziv funkcija za our  menu stranu
if($(".meniSlajder").length > 0){
    Meni();
    strelicaUp();
    skrol();      
}

function skrol(){
    $(window).scroll(function(){    
    var rootElement = document.documentElement;
    var strelica = document.querySelector(".up");
    if(document.body.scrollTop > 220 || rootElement.scrollTop > 220){
    strelica.style.display="block";
    }
    else{
    strelica.style.display="none";
    }
    });
}

function strelicaUp(){
    var strelica = document.querySelector(".up");
    strelica.addEventListener("click",function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
}

//ispis navigacije
function navIspis() {
    var meniN=[["index.html","Home"],["ourmenu.html","Our Menu"],["author.html","Author"],["contact.html","Contact"],["doc.pdf","Docs"]];
    var meniDiv = document.querySelector(".meni");
    var meniResp = document.querySelector(".meniResp");

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
    //za responsive navigaciju
    for(let i=0;i<meniN.length;i++){
        var liElem = document.createElement("li");
        var aElem = document.createElement("a");
        aElem.setAttribute('href',meniN[i][0]);
        aElem.classList.add('nav-link');
        aElem.textContent= meniN[i][1];
        liElem.classList.add('nav-item');
        liElem.appendChild(aElem);
        meniResp.appendChild(liElem);
    }
}

//responsive navigacija
function mobileNav(){  
    var width = $(document).width();
    $(".meniResp li").hide();
    $('.hamb').click(function(){
     $(".meniResp li").stop().slideToggle('slow');
    });
}

// breakfast,lunch,dinner,desserts   (index stranica)     
function Jela(){
    let nizSlikeJela = [["img/cook_breakfast.png","Breakfast"],["img/cook_lunch.png","Lunch"],["img/cook_dinner.png","Dinner"],["img/cook_dessert.png","Desserts"]];
    let nizImeJela = ["Breakfast","Lunch","Dinner","Desserts"];
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

//forma dinamicko ispisivanje (index stranica)       
function formaIndex(){
//za dane
    var dani = document.querySelector("#dan");
    var nizDanVrednost = ["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var nizDanTekst  = Array.from(nizDanVrednost);
    nizDanTekst.shift();
    nizDanTekst.unshift("Select day");
    for(let i=0;i<nizDanTekst.length;i++){
        var opcijaDan = document.createElement("option");
        opcijaDan.setAttribute('value',nizDanVrednost[i]);
        opcijaDan.textContent=nizDanTekst[i];      
        dani.appendChild(opcijaDan);   
    }

// za sate
    var sat = document.querySelector("#sat");
    var satiVrednost = ["","10-00","12-00","14-00","16-00","18-00","20-00","22-00"];
    var satiTekst = Array.from(satiVrednost);
    satiTekst.shift();
    satiTekst.unshift("Select hour");
        for(let i=0;i<satiVrednost.length;i++){
            var opcijaSat = document.createElement("option");
            opcijaSat.setAttribute('value',satiVrednost[i]);
            opcijaSat.textContent=satiTekst[i];      
            sat.appendChild(opcijaSat);   
        }

// za osobe 
    var osobe = document.querySelector("#osobe");
    var osobeVrednost = ["","1-Person","2-Persons","3-Persons","4-Persons","5-Persons","6-Persons"];
    var osobeTekst = Array.from(osobeVrednost);
    osobeTekst.shift();
    osobeTekst.unshift("How many persons?");
        for(let i=0;i<osobeVrednost.length;i++){
            var opcijaOsobe = document.createElement("option");
            opcijaOsobe.setAttribute('value',osobeVrednost[i]);
            opcijaOsobe.textContent=osobeTekst[i];      
            osobe.appendChild(opcijaOsobe);   
        }
}
//ispisivanje Blog dela dinamicki (index stranica)
function ispisBlog(){
    var blog = document.querySelector(".blogovi");
    var nazivBloga=["Private Parties","Live Music","Food Tasting Event","Love is in the air"];
    var sadrzajBloga = [
    "95 Slide Restaurant is happy to be the venue for your reunion, party, luncheon.With two banquet rooms, 95 Slide Restaurant can transform a space into the perfect  site for your gathering.",
    "An ordinary dinner can turn into an unforgettable night out that you will remember for the rest of your life. Good time always starts with a good meal, and a nice music is just a bonus.",
    "You could try multitude of menus: vegetarian,ethnic, gluten-free, locally-sourced, based on a specific meat, cheese or pasta, soup-driven, centeredon a specific region and much more.",
    "You don’t have to wait for Valentine’s Day to create a romantic tradition.Come to us for dinner and maybe you will meet the love of your life. You will thank us later"];

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

//dinamicki deo  footera
function Futer(){
    var nizSoc = ["fa fa-facebook","fa fa-twitter","fa fa-linkedin","fa fa-sitemap"];
    var nizHref = ["https://www.facebook.com/","https://twitter.com/?lang=en","https://rs.linkedin.com/","sitemap.xml"]
    var blok = document.querySelector(".futer");
    var ul = document.createElement("ul");
    ul.classList.add('social-icons','pt-2');

    for(let i=0;i<nizSoc.length;i++){   
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute('href',nizHref[i]);
        a.setAttribute('target','_blank');
        var ielem = document.createElement("i");
        ielem.className = nizSoc[i];
        a.appendChild(ielem);
        li.appendChild(a);
        ul.appendChild(li);
        }
        blok.appendChild(ul);
}

//Regularni izraz i validacija prve forme (index stranica)
var cuvanjePodataka = [];
var validnostDan = $("#formaDan");
var validnostSat = $("#formaSat");
var validnostOsoba = $("#formaOsoba");
validnostDan.hide();
validnostOsoba.hide();
validnostSat.hide();

$(".btn").click(function(){
    var dan = $('#dan option:selected').val();
    var sat = $("#sat option:selected").val();
    var osoba= $("#osobe option:selected").val();
    var email = $("#email");
    var ime = $("#name");
    var br = 0;
    var imePrezimeRegex =  /^[a-zA-Z]{3,15}(\s[a-zA-Z]{3,15})+$/;
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

 //ime
    if(ime.val() == ''){
        ime.css({
        'border':'1px solid  #e60000'
        });
        ime.val("");
        ime.attr('placeholder','Name can not be empty');
    }

    else if(!imePrezimeRegex.test(ime.val())){
        ime.css({
        'border':'1px solid  #e60000'
        });
        ime.val("");
        ime.attr('placeholder','e.g. Aleksandar Arsic');
    }
    else {
    ime.css({
        'border':'1px solid  #fff'
        });
        br++;
    }
    //email
    if(email.val() == ''){
        email.css({
        'border':'1px solid  #e60000'
        });
        email.val("");
        email.attr('placeholder','Email adress can not be empty');
    }
    else if(!emailRegex.test(email.val())){
        email.css({
        'border':'1px solid  #e60000'
        });
        email.val("");
        email.attr('placeholder','e.g. aleksandar14@gmail.com');
    }
    else {
        email.css({
        'border':'1px solid  #fff'
        });
        br++
    }
//dani
if(dan == ''){
    validnostDan.show();
}
else {
    validnostDan.hide();
    br++;
}
//sati
if(sat == ''){
    validnostSat.show();
}
else {
    validnostSat.hide();
    br++;
}
//osobe
if(osoba == ''){
    validnostOsoba.show();
}
else {
    validnostOsoba.hide();
    br++;
}
//podaci za prvu formu (index)
var podaci = $("#podaci");
if(br == 5){
    podaci.show();
    podaci.html('Dear ' +ime.val()+', '+'Your table is booked for '+ dan +' '+'in '+sat+' '+'hours '+'for '+osoba);
    ime.val(""); 
    ime.attr('placeholder','Full name');
    email.val("");
    email.attr('placeholder','Email');
    $('#dan option:first').attr('selected',true);
    $('#dan option:first').text('Select a day');

    $('#sat option:first').attr('selected',true);
    $('#sat option:first').text('Select a hour');

    $('#osobe option:first').attr('selected',true);
    $('#osobe option:first').text('How many persons?');
    br = 0;
}
else{
    podaci.hide();
}

//Regularni izraz i validacija druge forme (contact stranica)
var email1 = $("#email1");
var ime1 = $("#name1");
var validacija = $("#forma2");

// telefon
    var telefonRegex = /^\d{8,13}$/
    var tel = $("#phone");

    if(tel.val() == ''){
        tel.css({
        'border':'1px solid  #e60000'
        });
        tel.val("");
        tel.attr('placeholder','Phone  can not be empty');
    }
    else if(!telefonRegex.test(tel.val())){
        tel.css({
        'border':'1px solid  #e60000'
        });
        tel.val("");
        tel.attr('placeholder','Phone between 8 and 13 digits');
    }
    else {
        tel.css({
        'border':'1px solid  #fff'
    });
    }
    //za text polje
    var tekstPolje =$("#message");
    var tekstValid = 0;

    if(tekstPolje.val() == ''){
        tekstPolje.css({
        'border':'1px solid  #e60000'
        });
        tekstPolje.val("");
        tekstPolje.attr('placeholder','You can not send empty message');
        tekstValid = 0;
    }
    else {
        tekstPolje.css({
        'border':'1px solid  #fff'
        });
        tekstValid = 1;
    }

    //za email contact stranice
    if(email1.val() == ''){
        email1.css({
        'border':'1px solid  #e60000'
        });
        email1.val("");
        email1.attr('placeholder','Email adress can not be empty');
    }
    else if(!emailRegex.test(email1.val())){
        email1.css({
        'border':'1px solid  #e60000'
        });
        email1.val("");
        email1.attr('placeholder','e.g. aleksandar14@gmail.com');
    }
    else {
        email1.css({
        'border':'1px solid  #fff'
        });
        br++
    }
    //ime contact stranice
    if(ime1.val() == ''){
        ime1.css({
        'border':'1px solid  #e60000'
        });
        ime1.val("");
        ime1.attr('placeholder','Name can not be empty');
    }

    else if(!imePrezimeRegex.test(ime1.val())){
        ime1.css({
        'border':'1px solid  #e60000'
        });
        ime1.val("");
        ime1.attr('placeholder','e.g. Aleksandar Arsic');
    }
    else {
    ime1.css({
        'border':'1px solid  #fff'
        });
        br++;
    }
    //provera za drugu formu (contact stranica)
    if(imePrezimeRegex.test(ime1.val()) && telefonRegex.test(tel.val()) && emailRegex.test(email1.val()) && tekstValid == 1){
        validacija.show();
        ime1.val("");
        ime1.attr('placeholder','Full name');
        email1.val("");
        email1.attr('placeholder','Email');
        tekstPolje.val("");
        tekstPolje.attr('placeholder','Your message..');
        tel.val("");
        tel.attr('placeholder','Your phone number');
    }
    else{
        validacija.hide();
    }
});


//Breakfast, lunch, dinner dinamicki (our menu stranica)
function Meni(){
    var slikaJela = [
    ["img/muffins.png","21 Healthy Muffins"],
    ["img/nectarine.png","Nectarine Bruschetta"],
    ["img/sheetpan.png","Sheet Pan Pancake"],
    ["img/baked.png","Oven-Baked Pizzas"],
    ["img/saus.png","Sheet Pan Sausage"],
    ["img/tuna.png","Tuna & Avocado Wrap"],
    ["img/chicken.png","BBQ Chicken"],
    ["img/roast.png","Pot Roast"],
    ["img/shrimp.png","Classic Shrimp Creole"],
    ];
    var tekst =[
    ["It can be hard to start the morning off right </br>with a good-for-you baked good"],
    ["Simple and sophisticated, this fruity toast is perfect for breakfast."],
    ["For a different flavor, swap blueberries for blackberries or sliced strawberries."],
    ["Pizza night is the best night  especially when everyone </br>gets to build their dream slice."],
    ["Sheet Pan Sausage</h4>Line the sheet pan with parchment or foil for the quickest cleanup — then serve over rice, stuffed into a pita."],
    ["Canned tuna gets a quick upgrade with hot sauce, Dijon, and green onions — piled into whole wheat tortillas."],
    ["Heads up that this one does have to cook for a few hours, so you'll need to plan accordingly."],
    ["You don't have an excuse not to take this simple pot roast."],
    ["This saucy Shrimp Creole will transport you to the balcony-lined streets of New Orleans.Note that this dish has kick—if you're not a fan of spice"]
    ];
    var cena = ["$6.75","$4.5","$5.5","$8","$10","$12.75","$14","$16","$10"];


    var blok1 = document.querySelector('.blok1');
    var blok2 = document.querySelector('.blok2');
    var blok3 = document.querySelector('.blok3');

    // breakfast
    for(let i=0;i<slikaJela.length/3;i++){
        blok1.innerHTML+= `
        <div class="item">
        <div class="food-item">
        <img src="${slikaJela[i][0]}" alt="${slikaJela[i][1]}" >
        <div class="price">${cena[i]}</div>
        <div class="text-content">
        <h4>${slikaJela[i][1]}</h4>
        <p>${tekst[i]}</p>
        </div>
        </div>
        </div>`    
    }
    //lunch
    for(let i = 3; i <slikaJela.length -slikaJela.length/3;i++){
        blok2.innerHTML+= `
        <div class="item">
        <div class="food-item">
        <img src="${slikaJela[i][0]}" alt="${slikaJela[i][1]}" >
        <div class="price">${cena[i]}</div>
        <div class="text-content">
        <h4>${slikaJela[i][1]}</h4>
        <p>${tekst[i]}</p>
        </div>
        </div>
        </div>`
    }
    //dinner
    for(let i = 6; i <slikaJela.length;i++){
        blok3.innerHTML+= `
        <div class="item">
        <div class="food-item">
        <img src="${slikaJela[i][0]}" alt="${slikaJela[i][1]}" >
        <div class="price">${cena[i]}</div>
        <div class="text-content">
        <h4>${slikaJela[i][1]}</h4>
        <p>${tekst[i]}</p>
        </div>
        </div>
        </div>`
    }

}

//contact stranica - dugme za show less show more
var buttonMore = $(".dugme");
var textMore = $(".tekstS");

buttonMore.click(function(e){
    e.preventDefault();
    textMore.toggle('slow',function(){
    if(textMore.is(":visible")){
        buttonMore.text("Show less");
    }
    else
    {
        buttonMore.text("Show more");
    }
    });                  
});

});


