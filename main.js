const btn = document.getElementById('darkButton');
// btn.addEventListener('mouseover',function(){
// })


let isDarkModeEnabled = false; 
function lightOrDark() {
    isDarkModeEnabled = !isDarkModeEnabled;  
    if(isDarkModeEnabled){ 
     document.body.style.color= "white"
     document.body.style.backgroundImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFWjmMmDZ9JM6GR9hLW83dfJSjfG55Vn_5dpB1egK&s');
}
else {
    document.body.style.color= "black"
    document.body.style.backgroundImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_x4a_34dyEfU9rvDWwD4FLrDEpfzdM2FxuIZrFx0QwA&s');
}
}

const favoriteFood = ['pizza','Cheese','Tomato','apples','honey'];
let makelist = '<ul id="food-list">';
for (let index = 0;index < favoriteFood.length;index++) {
    let element = favoriteFood[index];
    makelist+= `<li>${element}</li>`;
}
makelist +='</ul>';
console.log(makelist);
document.getElementById("food-list").outerHTML = makelist;

// const imagesDataBase = [
// img1 = {
//     url:"/assets/dog1.jpeg",
//     description: 'the dog i miss the most',
//     alt: 'dog 1'
// },
// img2 = {
//     url:"/assets/dog2.jpeg" ,
//     description: 'my family dog',
//     alt: 'dog 2'
// },
// img3 = {
//     url:"/assets/dog3.jpeg" ,
//     description: 'my favorite dog',
//     alt: 'dog 3'
// },
// ]

// function createGallery(imagesDataBase) {
//     // create an empty div element
//     let gallery = document.createElement('div');
//     // set the class of the div to 'gallery'
//     gallery.classList.add('gallery');
  
//     // loop through the imagesDataBase array
//     for (let i = 0; i < imagesDataBase.length; i++) {
//       // create an img element
//       let img = document.createElement('img');
//       // set the src and alt attributes of the img element
//       img.src = imagesDataBase[i].src;
//       img.alt = imagesDataBase[i].alt;
      
//       // create a p element
//       let desc = document.createElement('p');
//       // set the text content of the p element to the description of the item
//       desc.textContent = imagesDataBase[i].description;
  
//       // append the img and p elements to the gallery div
//       gallery.appendChild(img);
//       gallery.appendChild(desc);
//     }
  
//     // return the gallery div
//      gallery.innerHTML;
//   }

//   createGallery()
const imagesDataBase = [
    {
      src: "/assets/dog1.jpeg",
      description: 'the dog i miss the most',
      alt: 'dog 1'
    },
    {
      src: "/assets/dog2.jpeg",
      description: 'my family dog',
      alt: 'dog 2'
    },
    {
      src: "/assets/dog3.jpeg",
      description: 'my favorite dog',
      alt: 'dog 3'
    },
  ];
  
  function createGallery(imagesDataBase) {
    // create an empty div element
    let gallery = document.createElement('div');
    // set the class of the div to 'gallery'
    gallery.classList.add('gallery');
  
    // loop through the imagesDataBase array
    for (let i = 0; i < imagesDataBase.length; i++) {
      // create an img element
      let img = document.createElement('img');
      img.classList.add('images');
      // set the src and alt attributes of the img element
      img.src = imagesDataBase[i].src;
      img.alt = imagesDataBase[i].alt;
  
      // create a p element
      let desc = document.createElement('p');
      // set the text content of the p element to the description of the item
      desc.textContent = imagesDataBase[i].description;
      desc.classList.add('descImg');
  
      // append the img and p elements to the gallery div
      gallery.appendChild(img);
      gallery.appendChild(desc);
    }
  
    // append the gallery element to the DOM
    document.body.appendChild(gallery);
  
    // return the gallery element
    return gallery;
  }
  
  createGallery(imagesDataBase);


