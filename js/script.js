//question 1
//
const cat = {
  complain: function () {
    console.log("Meow!");
  },
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

//question 2
//

const heading = document.querySelector("h3");

function changeHeading() {
  heading.innerHTML = "Updated heading";

  //question 3
  //

  heading.style.fontSize = "2em";

  //question 4
  //

  console.dir(heading.className);

  heading.className = "Subheading";

  console.log(heading.className);

  console.dir(heading.classList);

  heading.classList.add("Subheading");
}

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

//question 8
//

function createCats() {}
