
const cat = {
      complain: function() {console.log ("Meow!");
    }
    };

cat.complain();


const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//question 3 
//

const heading = document.querySelector("h3");
heading.innerHTML= "Updated heading";

//question 4 
//

heading.style.fontSize = "2em";

var h3 = document.querySelector(".heading");

const heading = document.querySelector(".subheading")

console.dir(heading.className);

heading.className = "Subheading";

console.log(heading.className);

//question 5 
//

document.querySelectorAll

document.querySelector("p")

const paragraph = document.querySelectorAll("p")

paragraph.style.color = "red";

console.log(paragraph);

for(let i=0; i < paragraph.length; i++) {

    paragraph(i).style.color = "red";
}



//question 6
//

document.querySelector("div")

const resultsContainer = document.querySelector (".results")

resultsContainer.style.background = "yellow";
resultsContainer.innerHTML = "<p>New paragraph<p>";

//question 7
//

function list = document.querySelector();


//question 8
//

function createCats() {

}