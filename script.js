document.getElementById('lbutton').addEventListener('click', (event) => {
    event.target.replaceChildren();
    event.target.innerText = 'Loading ...';
    event.target.style.backgroundColor = '#993300';
  
  });

  let element_list = document.getElementById('list');
let new_li = document.createElement('li');
let new_a = document.createElement('a');
new_a.setAttribute("href", 'https://en.wikipedia.org/wiki/Cape_Point ');
new_a.innerText = 'Cape Point';

new_li.appendChild(new_a);

element_list.appendChild(new_li);

let element_list2 = document.getElementById('list');
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.setAttribute("href", 'https://en.wikipedia.org/wiki/Kirstenbosch_National_Botanical_Garden');
new_a2.innerText = 'Kirstenbosch Botanical Garden';

new_li2.appendChild(new_a2);

element_list2.appendChild(new_li2);

let element_list3 = document.getElementById('list');
let new_li3 = document.createElement('li');
let new_a3 = document.createElement('a');
new_a3.setAttribute("href", 'https://en.wikipedia.org/wiki/Robben_Island');
new_a3.innerText = 'Robben Island';

new_li3.appendChild(new_a3);

element_list3.appendChild(new_li3);

document.getElementById('cimage1').addEventListener('click', (event) => {
    event.target.setAttribute("src", 'https://wandercapetown.com/wp-content/uploads/2022/09/new-trains-in-cape-town.jpg');
  
  });
  
  document.getElementById('cimage2').addEventListener('click', (event) => {
    event.target.setAttribute("src", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBiYHoEEn5PCBA9TXw-eDBQy9QdKD3nCO3UQ&s');
  
  });
  
  document.getElementById('cimage3').addEventListener('click', (event) => {
    event.target.setAttribute("src", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThEJJTSMEVxjoAWEWIQEMxYESsgXKALdHHg&s');
  
  });