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

heading.classList.add("Subheading");

//question 5
//

const paragraph = document.querySelectorAll("p");

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.color = "red";
}

//question 6
//

document.querySelector("div");

const resultsContainer = document.querySelector(".results");

resultsContainer.style.background = "yellow";
resultsContainer.innerHTML = "<p>New paragraph<p>";

//question 7
//

function printPropertyInList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
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

printPropertyInList(cats);

//question 8
//

function createCats(cats) {
  let html = "";
  for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];

    const age = cat.age || "Age unknown";
    const div = "<div><h5>" + cat.name + "</h5><p>" + age + "</p></div>";

    html = html + div;
  }
  return html;
}

var returnValue = createCats(cats);
document.querySelector(".cat-container").innerHTML = returnValue;
