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
    name: "David Samuel",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus deleniti eveniet ea, dolorem sed ipsum sequi fuga magni asperiores expedita tenetur accusamus quibusdam adipisci distinctio ratione enim autem similique voluptas debitis incidunt repellat pariatur quos iure. Obcaecati cum maiores necessitatibus autem,quod iusto nihil vitae dolorum velit maxime consequatur explicabo!",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    name: "David john",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus deleniti eveniet ea, dolorem sed ipsum sequi fuga magni asperiores expedita tenetur accusamus quibusdam adipisci distinctio ratione enim autem similique voluptas debitis incidunt repellat pariatur quos iure. Obcaecati cum maiores necessitatibus autem,quod iusto nihil vitae dolorum velit maxime consequatur explicabo!",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    name: "mary Samuel",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus deleniti eveniet ea, dolorem sed ipsum sequi fuga magni asperiores expedita tenetur accusamus quibusdam adipisci distinctio ratione enim autem similique voluptas debitis incidunt repellat pariatur quos iure. Obcaecati cum maiores necessitatibus autem,quod iusto nihil vitae dolorum velit maxime consequatur explicabo!",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    name: "jonatan Samuel",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus deleniti eveniet ea, dolorem sed ipsum sequi fuga magni asperiores expedita tenetur accusamus quibusdam adipisci distinctio ratione enim autem similique voluptas debitis incidunt repellat pariatur quos iure. Obcaecati cum maiores necessitatibus autem,quod iusto nihil vitae dolorum velit maxime consequatur explicabo!",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    name: "David peterson",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus deleniti eveniet ea, dolorem sed ipsum sequi fuga magni asperiores expedita tenetur accusamus quibusdam adipisci distinctio ratione enim autem similique voluptas debitis incidunt repellat pariatur quos iure. Obcaecati cum maiores necessitatibus autem,quod iusto nihil vitae dolorum velit maxime consequatur explicabo!",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    albumId: 1,
    id: 6,
    name: "simon williams",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus deleniti eveniet ea, dolorem sed ipsum sequi fuga magni asperiores expedita tenetur accusamus quibusdam adipisci distinctio ratione enim autem similique voluptas debitis incidunt repellat pariatur quos iure. Obcaecati cum maiores necessitatibus autem,quod iusto nihil vitae dolorum velit maxime consequatur explicabo!",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
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
            <img src=${currnetData.url} alt="id_${currnetData.id}" class="image">
        </div>
        <div class="title">
            <h2 id="name">${currnetData.name}</h2>
            <p id="paragraph">${currnetData.title}</p>
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
