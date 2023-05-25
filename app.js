const form = document.querySelector('#form');



form.addEventListener('click', function(e){
    e.preventDefault();
    const h2 = document.createElement('h2');
    const input = document.getElementById('name');
    h2.innerText = input.value;
    h1.append(h2);
    

})


const url = new URL('search?term=pirate', 'https://icanhazdadjoke.com/');
console.log(url.hostname);
console.log(url.pathname);

url.hash = "tabby";
console.log(url.href);

url.pathname = "démonstration.html";
console.log(url.href);

console.log(url.searchParams.get("term")); // "pirate"

console.log(url.toString());

console.log(url.protocol);



