import Swal from "sweetalert2";
require("fslightbox");

// fsLightboxInstances["first-lightbox"].open(0);
// fsLightboxInstances["second-lightbox"].props.onOpen = () =>
//   console.log("Lightbox open!");

Swal.fire({
  title: "Error!",
  text: "Do you want to continue",
  icon: "error",
  confirmButtonText: "Cool",
});

Swal.fire({
  title: "Emmanuel Gomez",
  width: 400,
  padding: "3em",
  background:
    "#fff url(https://media3.giphy.com/media/mtaWx98w7mX7y/giphy.gif?cid=ecf05e473gw398tuyvq1zq6l8ipvti6ij9858srx1sgzjbgh&rid=giphy.gif&ct=g)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://gamingdna.co.nz/wp-content/uploads/2018/05/Pokemon-BG.jpg")
    left top
    repeat
  `,
});

// import { suma, saludo } from "./operaciones";

// document.write(`<h2>${suma(1,2)}</h2>`);
// document.write(`<h2>${suma(12,29)}</h2>`);
// console.log(suma(1, 2));
// console.log(suma(3, 5));
// console.log(saludo);

// import _ from 'lodash';
// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());
