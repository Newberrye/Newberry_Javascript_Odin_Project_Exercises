const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);


const paragraph = document.createElement(`p`);
paragraph.textContent = "Hey I'm red";
paragraph.style.cssText = "color: red";
container.appendChild(paragraph);

const Heading3 = document.createElement(`h3`);
Heading3.textContent = "I'm a blue h3!";
Heading3.style.cssText = "color: blue";
container.appendChild(Heading3);

const Divider = document.createElement(`div`);
Divider.style['border'] = "thick dotted black";
Divider.style['borderColor'] = "black";
Divider.style['backgroundColor'] = "pink";

const Heading1 = document.createElement(`p`);
Heading1.textContent = "I'm in  div";
Divider.appendChild(Heading1);
const Paragraph2 = document.createElement(`h3`);
Paragraph2.textContent = "ME TOO";
Divider.appendChild(Paragraph2);


container.appendChild(Divider);



const btn = document.querySelector('#btn');

/* btn.addEventListener('click', () => {
  alert("Hello World");
}); */


function alertFunction() {
    //alert("YAY! YOU DID IT!");
  }
  
  // METHOD 2
  //btn.onclick = alertFunction;
  
  // METHOD 3
  //btn.addEventListener('click', alertFunction);

  btn.addEventListener('click', function (e) {
    console.log(e);
  });