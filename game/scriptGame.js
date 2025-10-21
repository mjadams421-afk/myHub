let codeA = document.getElementById('event');

 function colorChangeA () {
    codeA.style.backgroundColor = 'rgb(150,150,150)';
    codeA.innerHTML = 'You clicked me';
 }

 codeA.addEventListener('click',colorChangeA);