document.addEventListener('DOMContentLoaded', () =>{

  const c1 = "- to nie jest jedna z twoich prowincji!";
  const c2 = "- dziwne, nie?";
  const c3 = "- no co ja poradzę to stary sprawdzony sposób";

  // ten cytat będzie wyświetlany gdy użytkownik spyta "jak to jest być skrybą?"
  const c4 =
  `A, wie pan, moim zdaniem to nie ma tak, że dobrze, albo że niedobrze.
  Gdybym miał powiedzieć, co cenię w życiu najbardziej, powiedziałbym, że ludzi.
  Ludzi, którzy podali mi pomocną dłoń, kiedy sobie nie radziłem, kiedy byłem sam,
  i co ciekawe, to właśnie przypadkowe spotkania wpływają na nasze życie.
  Chodzi o to, że kiedy wyznaje się pewne wartości, nawet pozornie uniwersalne,
  bywa, że nie znajduje się zrozumienia, które by tak rzec, które pomaga się nam rozwijać.
  Ja miałem szczęście, by tak rzec, ponieważ je znalazłem, i dziękuję życiu!
  Dziękuję mu; życie to śpiew, życie to taniec, życie to miłość!
  Wielu ludzi pyta mnie o to samo: ale jak ty to robisz, skąd czerpiesz tę radość? A ja odpowiadam, że to proste!
  To umiłowanie życia. To właśnie ono sprawia, że dzisiaj na przykład buduję maszyny, a jutro – kto wie? Dlaczego by nie
  – oddam się pracy społecznej i będę, ot, choćby, sadzić... doć— m-marchew...`;

  const c5 = "- to zrobię więcej";
  const c6 = "- i cześć krokodyle";
  const c7 = "- takie tam stożki"; //!
  const c8 = "- jest tu jakaś siekiera?";
  const c9 = "- co za miejsce... nie do życia...";
  const c10 = "- ty słyszałeś, co ci powiedziałem, czy nie słyszałeś, co ci powiedziałem?";
  const c11 = "- nie widzę specjalnej różnicy z napojem czy bez";
  const c12 = "- ile można?";
  const c13 = "- miałem nic nie mówić, to szczekam";
  const c14 = "- ale wiesz, że takich napojów nie ma?";
  const c15 = "- panie kochany, ja nie architekt, kafle kładę. Każą kłaść, to kładę, nie każą – nie kładę";
  const c16 = "- Wbrew obiegowej opinii, langusta żywi się wyłącznie owocami morza. Choć gdyby mogła, jadłaby dżem.";
  // Ze względu na drastyczny charakter tej sceny postanowiliśmy zastąpić ją materiałem poświęconym languście.
  const c17 = "- tak nie wolno! pobite gary!";

  /* ten cytat będzie wyświetlany, gdy użytkownik napisze "koniec",
  wtedy program zakończy pracę: */
  const c18 = "- dosyć!!";

  const c19 = "- myślisz, że krokodyle są smaczne?";
  const c20 = "- nie, kalafiorowa";
  const c21 = "- Jak jesteś taki twardy, to powiedz mi to prosto w profil!";
  const c22 = "- Bez kamieni nie ma budulca. A bez budulca nie ma pałacu. A bez pałacu… Nie ma pałacu";
  const c23 = "- Masz już sarkofag?";
  const c24 = "- Nie jestem dydydydyletantem.";
  const c25 = "- Poczuj w sobie siłę lwa";
  const c26 = "- Trochę się to kojarzy ze stanem surowym, ale robimy postępy";
  const c27 = "- Ja osobiście to bym zjadł cokolwiek. Pieczone korale… ";
  const c28 = "- tak? ja nic nie czuję";
  const c29 = "- Jak myślisz, co robią teraz Kleopatra i Sezam?";

  const c30a = "- polecam się...";
  const c30b = "- ...nie polecam się";

  const c31a = "- nie...";
  const c31b = "- nie... nie przesadzasz trochę?";
  const c31c = "- to już… bardziej.";

  const c32a = "- powiedz, mucha siada czy nie siada?";
  const c32b = "- nie siada!";

  const c33a = "- Kleopatra chce zbudować Cezarowi pałac. Tutaj. Ma być ogromny. Stąd… dotąd.";
  const c33b = "- ma być nowoczesny, i w ogóle…";
  const c33c = "- człowieku, nie mamy na to czasu! Dała nam 3 miesiące na całość!";

  const c34a = "- lew nie sprzymierza się z kojotem";
  const c34b = "- no, lew, tak…? Nie sprzymierza się… z kojotem, no!";

  const c35a = "- co to za światło na horyzoncie?";
  const c35b = "- lekka bryza zmarszczyła morze gładkie jak stół";
  const c35c = "- a nie... jakoś tak mi się powiedziało...";

  const c36a = "- utszebe.";
  const c36b = "- nie chcesz utszebe?";

  const c37 = "- piasek był tu już wcześniej.";
  const c38 = "- a zdrowy, dziękować";
  const c39 = "- a zdrowa, zdrowa, dziękować";
  const c40 = "- nie widzę tu grubych...";
  const c41 = "- panowie nowi?";

  const c42 = "- a w ogóle to bukszprytu się nie refuje";

// do napoju: c11, c14, c20


  const quotes = [c1, c2, c3, c5, c6, c8, c9, c10, c12, c13, c15, c16, c17, c18, c19, c21, c22, c23, c24, c25, c26, c27, c28, c29, c42];
  const specialQuotes = [[c30a, c30b], [c31a, c31b, c31c], [c32a, c32b], [c33a, c33b, c33c], [c34a, c34b], [c35a, c35b, c35c], [c36a, c36b]];
  const napojMagiczny = [c11, c14, c20];
  const priviledged = [4, 2, 0, 21, 37, 9, 11];

  const intro =
  `- Jest rok 50 przed narodzeniem Chrystusa.
  Cała Galia podbita przez Rzymian… Cała? Nie!
   Jedna jedyna osada zamieszkana przez nieugiętych Galów
   wciąż stawia opór najeźdźcom. I uprzykrza życie legionom,
   stacjonującym w obozach: Rabarbarum, Akwarium, Relanium i Delirium…`

   const startButton = document.querySelector('#start');
   var started = 0;
   // var ended = 0;
   var blocked = 0;
   const displayConversation = document.querySelector('.display');
   const respones = document.querySelector('#responses');
   const respButton = document.querySelector('#resp');
   var currentQuote;
   var currentResp;
   var determ;
   var firstIndex = 0;
   var secondIndex = 0;
   var previousSecondIndex = 0;

   startButton.addEventListener('click', () => {
     if (started === 0) {
       displayConversation.innerHTML += intro;
       started = 1;
     }
   })

   // everything we do
   function conversation(){
     getResponse();
     eraseText();
     automaticScroll();
     inputControl();
     if (blocked === 0) {
       startSpecialConversation();
     }
     if (blocked === 1) {
       keepSpecialConversation();
     }
     if (blocked === 2) {
       getRandomQuote();
     }
     if (blocked === 3) {
       respondToKeyWords(c4);
     }
     if (blocked === 4) {
       napoj();
     }
     if (blocked === 5) {
       respondToKeyWords(c7);
     }
     if (blocked === 6) {
       respondToKeyWords(c37);
     }
     if (blocked === 7) {
       respondToKeyWords(c38);
     }
     if (blocked === 8) {
       respondToKeyWords(c39);
     }
     if (blocked === 9) {
       respondToKeyWords(c40);
     }
     if (blocked === 10) {
       respondToKeyWords(c41);
     }
     automaticScroll();
   }

   document.addEventListener('keyup', enterTheResponse);

   respButton.addEventListener('click', () => {
     conversation();
   })
   /*
   state: keywords -> quote:
   3: monolog skryby -> c4
   4: napoj magiczny -> napoj()
   5: piramidy -> c7
   6: piasek -> c37
   7: zdrowy -> c38
   8: zdrowa -> c39
   9: gruby -> c40
   10: procent -> c41
   */

   // response is sent once 'enter' is clicked
   function enterTheResponse(e) {
     if (e.keyCode === 13) {
       conversation();
     }
   }

   // collect response from textarea
   function getResponse() {
     currentResp = document.querySelector('#responses').value;
     displayConversation.innerHTML += '<br>';
     currentResp = '- '+currentResp;
     displayConversation.innerHTML += currentResp;
   }

   // choosing random quote as a response
   function getRandomQuote() {
     currentQuote = quotes[getRandomInt(quotes.length)];
     blocked = 0;
     respondWithQuote();
   }

   // adding the quote to the conversation div
   function respondWithQuote() {
     displayConversation.innerHTML += '<br>';
     displayConversation.innerHTML += currentQuote;
   }

   // preparing to start a special conversation
   function startSpecialConversation() {
     determ = getRandomInt(40); // uprzywilejowane: 4 2 0 21 37 9 11
     if (priviledged.includes(determ)) {
       firstIndex = setFirstIndex();
       blocked = 1; } else {blocked = 2;}
   }

   // actually doing the special conversation
   function keepSpecialConversation() {
     if (secondIndex == specialQuotes[firstIndex].length){
       blocked = 2;
       firstIndex = 0;
       secondIndex = 0;
     } else {
       currentQuote = specialQuotes[firstIndex][secondIndex];
       previousSecondIndex = secondIndex;
       secondIndex ++;
       respondWithQuote();
     }
   }

// starting special conversations
function setFirstIndex() {
  return getRandomInt(7);
}

// find special content in user's responses
function inputControl() {
  var controlledResp = currentResp.toLocaleLowerCase();
  if (controlledResp.includes("jak to jest byc skryba") || controlledResp.includes("jak to jest być skrybą")) {
    blocked = 3;
  }
  if (controlledResp.includes("napoj magiczny") || controlledResp.includes("napój magiczny")) {
    blocked = 4;
  }
  if (controlledResp.includes("piramidy")) {
    blocked = 5;
  }
  if (controlledResp.includes("piasek skad macie") || controlledResp.includes("piasek skąd macie")) {
    blocked = 6;
  }
  if (controlledResp.includes("zdrowy")) {
    blocked = 7;
  }
  if (controlledResp.includes("zdrowa")) {
    blocked = 8;
  }
  if (
    controlledResp.includes("gruby")
    || controlledResp.includes("gruba")
    || controlledResp.includes("grube")
    || controlledResp.includes("grubi")
  ) {
    blocked = 9;
  }
  if (controlledResp.includes("ile to ma procent"))
  {
    blocked = 10;
  }
}

// state 4
function napoj() {
  let i = getRandomInt(3);
  console.log("przy napoju: "+ i);
  currentQuote = napojMagiczny[i];
  respondWithQuote();
  blocked = 0;
}

/*
states and keywords:
3: monolog skryby -> c4
4: napoj magiczny -> napoj()
5: piramidy -> c7
6: piasek -> c37
7: zdrowy -> c38
8: zdrowa -> c39
9: gruby -> c40
10: procent -> c41
*/

 // function for keywords
 function respondToKeyWords(q) {
   currentQuote = q;
   respondWithQuote();
   blocked = 0;
 }


// clear the display
function eraseText() {
  responses.value = "";
}

// automatic scrolling to the bottom of text
function automaticScroll() {
  var shouldScroll = (displayConversation.scrollTop + displayConversation.clientHeight === displayConversation.scrollHeight);

  if (!shouldScroll) {
    displayConversation.scrollTop = displayConversation.scrollHeight;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


})
