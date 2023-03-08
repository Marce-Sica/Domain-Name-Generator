import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("button").addEventListener("click", ejecutar);
};

let pronoun = ["conmigo", "nosotros", "ustedes"];
let adj = ["chico", "alto", "rápido"];
let noun = ["camisa", "teléfono", "silla"];
let site = [".com", ".us", ".es", ".io"];
const ejecutar = () => {
  console.log("Click aqui");
  let texto;
  let parrafo;
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < site.length; l++) {
          console.log(pronoun[i] + adj[j]);
          parrafo = document.createElement("p");
          texto = document.createTextNode(
            pronoun[i] + adj[j] + noun[k] + site[l]
          );
          parrafo.appendChild(texto);
          document.querySelector("#results-domains").appendChild(parrafo);
        }
      }
    }
  }
};
