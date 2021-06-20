//question 1
//
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();



//question 2
//

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//question 3
//

heading.style.fontSize = "2em";

//question 4
//

console.dir(heading.classList);

heading.classList.add("Subheading");
console.dir(heading.classList);

//question 5
//

const paragraph = document.querySelectorAll("p");

paragraph.style.color = "red";

console.log(paragraph);

for (let i = 0; i < paragraph.length; i++) {
  paragraph(i).style.color = "red";
}

//question 6
//

document.querySelector("div");

const resultsContainer = document.querySelector(".results");

resultsContainer.style.background = "yellow";
resultsContainer.innerHTML = "<p>New paragraph<p>";

//question 7
//

const something = ["list"];
function question7(list) {
  console.log(list);
}

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

//question 8
//


  function createCats(cats)[
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

    if(createCats.age = "") {
      return "Age unknown";
    }
  }
  
  
  
  var returnValue = createCats();
  document.innerHTML("").innerHTML = returnValue;
  
