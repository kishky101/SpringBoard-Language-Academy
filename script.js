// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// Navigation js
const links = document.querySelector(".links");
const buttton = document.querySelector(".nav-toggle")
const showButton = document.querySelector(".show");
const hideButton = document.querySelector(".hide")
const navCenter = document.querySelector(".nav-center")

 

showButton.addEventListener("click", function () {      
        links.classList.add("show-links");
        navCenter.classList.add("active");
});



hideButton.addEventListener("click", function () {
        links.classList.remove("show-links");
        navCenter.classList.remove("active")
});




// Review card js
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}



// Review section for smaller screen js

const data = [
  {
    albumId: 1,
    id: 1,
    name: "David Samuel"
  },
  {
    albumId: 1,
    id: 2,
    name: "David john"
  },
  {
    albumId: 1,
    id: 3,
    name: "mary Samuel"
  },
  {
    albumId: 1,
    id: 4,
    name: "jonatan Samuel"
  },
  {
    albumId: 1,
    id: 5,
    name: "David peterson"
  },
  {
    albumId: 1,
    id: 6,
    name: "simon williams"
  },
];

const image = document.querySelector(".image");
const name = document.getElementById("name");
const paragraph = document.getElementById("paragraph");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const innerContainer = document.querySelector(".inner-container");

window.addEventListener("load", scrollReviews);
nextButton.addEventListener("click", nextReviews);
prevButton.addEventListener("click", prevReviews);

let count = 0;

function scrollReviews() {
  let currnetData = data[count];

  let result = `
        <div class="image-container">
          <div class="image-container_2">
            <i class="fa-solid fa-user user_icon"></i>
          </div>
        </div>
        <div class="title">
            <h2 id="name">${currnetData.name}</h2>
            <small>Medical Doctor</small>
            <p id="paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus deleniti eveniet ea, dolorem sed ipsum sequi fuga",</p>
        </div>
    `;

  return (innerContainer.innerHTML = result);
}

function nextReviews() {
  count++;

  if (count > data.length - 1) {
    count = 0;
  }
  scrollReviews();
  disablingButtons();
}

function prevReviews() {
  if (count < 1) {
    count = data.length;
  }
  count--;
  scrollReviews();
  disablingButtons();
}

//   Butttons

// function disablingButtons() {
//     if(count === 1 ) {
//         prevButton.disabled = true;
//    }else if(count === data.length) {
//         nextButton.disabled = true
//    }else {
//         prevButton.disabled = false;
//         nextButton.disabled = false;
//    }
// }
