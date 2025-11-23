//click word event
codeA = document.getElementById('event');

 function colorChangeA () {
    codeA.style.backgroundColor = 'rgb(150,150,150)';
    codeA.style.color = 'blue';
    codeA.style.fontSize = '100px';
    codeA.style.position = 'relative';
    codeA.style.left = '100px';
    codeA.style.display = 'flex';
    codeA.innerHTML = 'NO SECRET HERE';
    }
 codeA.addEventListener('click',colorChangeA);

//Next click word event for scene
 codeB = document.getElementById('scene');

 function changeB () {
     codeB.style.color = 'blue';
     codeB.style.backgroundColor = 'green';
     codeB.style.fontSize = '100px';
     codeB.style.position = 'relative';
     codeB .style.left = '150px';
     codeB.style.display = 'flex';
     codeB.innerHTML = 'YOU REALLY THOUGHT THERE WAS A SECRET HERE';
 }
  codeB.addEventListener('click',changeB);

 //Next click word for move
 codeC = document.getElementById('move');

    function changeC () {
     codeC.style.color = 'red';
     codeC.style.backgroundColor = 'grey';
     codeC.style.fontSize = '100px';
     codeC.style.position = 'relative';
     codeC.style.left = '200px';
     codeC.style.display = 'flex';
     codeC.innerHTML = ' Find the secret word below';
     codeC.innerHTML = 'find The secrEt word by teLLing me wheat is happenING';
 }


 codeC.addEventListener('click',changeC);



//html scroll function
word = document.getElemenyById('htmlDoc');

 function scrollA () {
    word.style.backgroundColor = 'rgb(200,200,250)';
 }

word.addEventListener('scroll',scrollA);

//CSS scroll function
cas = document.getElemenyById('styleCss');

 function scrollB () {
    cas.style.backgroundColor = 'rgb(200,200,250)';
 }

cas.addEventListener('scroll',scrollB);

//JS scroll function
jas = document.getElemenyById('javaSc');

 function scrollC () {
    jas.style.backgroundColor = 'rgb(200,200,250)';
 }

jas.addEventListener('scroll',scrollC);