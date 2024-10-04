//Title Of Page
let gameName = "Portfolio";
document.title = gameName;

//Name Animation
let myName = document.querySelector(".my-name");
let arrName = ["Rachid 3Ammal"];
let nameIndex = 0;
let charNameIndex = 0;

updateText();

function updateText() {
  charNameIndex++;
  myName.innerHTML = ` ${arrName[nameIndex].slice(0, charNameIndex)}`;
  setTimeout(updateText, 250);
}

//My Skills
let mySkills = document.querySelector(".skills");
let skillArr = [
  "HTML",
  "CSS",
  "Bootstrap",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "Redux",
  "NextJs",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "PHP",
  "Laravel",
  "MySQL"
];

skillArr.map((skill) => {
  let div = document.createElement("div");
  div.classList.add("skill");
  div.innerHTML = skill;
  mySkills.appendChild(div);
});

//Scrollbar
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

// Scroll link active
let navbarEl = document.querySelector(".nav-bar");
let aboutOffset = document.querySelector("#about");
let projectOffset = document.querySelector("#project");
let contactOffset = document.querySelector("#contact");
let link1 = document.querySelector("#link1");
let link2 = document.querySelector("#link2");
let link3 = document.querySelector("#link3");
let link4 = document.querySelector("#link4");

window.addEventListener("scroll", () => {
  //Scrollbar
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;

  // Scroll link active
  if (window.scrollY < aboutOffset.offsetTop - 1) {
    link1.classList.add("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");
  }
  if (
    window.scrollY - navbarEl.offsetTop >
    aboutOffset.offsetTop - navbarEl.offsetTop - 100
  ) {
    link1.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");
    link2.classList.add("active");
  }
  if (
    window.scrollY - navbarEl.offsetTop >
    projectOffset.offsetTop - navbarEl.offsetTop - 100
  ) {
    link1.classList.remove("active");
    link2.classList.remove("active");
    link4.classList.remove("active");
    link3.classList.add("active");
  }
  if (
    window.scrollY - navbarEl.offsetTop >
    contactOffset.offsetTop - navbarEl.offsetTop - 200
  ) {
    link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.add("active");
  }
});

// Button For Scrolling
let btn = document.getElementById("btn");

window.onscroll = function () {
  if (window.scrollY >= 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};

//Social media
let ul = document.getElementById("ul");

fetch("social-media.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((el) => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = el.link;
      a.target = "_blank";
      a.setAttribute("data-text", el.attr);
      let i = document.createElement("i");
      i.className = el.icon;
      a.appendChild(i);
      li.appendChild(a);
      ul.appendChild(li);
    });
  });

//Projects
let divPar = document.querySelector(".proj-1");

fetch("projects.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((el) => {
      let div = document.createElement("div");
      div.classList.add("row");
      let img = document.createElement("img");
      img.classList.add("tmpl");
      img.src = el.image;
      div.appendChild(img);
      let div2 = document.createElement("div");
      div2.classList.add("layer");
      div.appendChild(div2);
      let h5 = document.createElement("h5");
      h5.classList.add("tmpl-descrp");
      let title = document.createTextNode(`${el.title}`);
      h5.appendChild(title);
      let p = document.createElement("p");
      let tech = document.createTextNode(`${el.tech}`);
      let a = document.createElement("a");
      a.href = el.URL;
      a.target = "_blank";
      let i = document.createElement("i");
      i.className = el.icon;
      a.appendChild(i);
      p.appendChild(tech);
      div2.appendChild(h5);
      div2.appendChild(p);
      div2.appendChild(a);
      divPar.appendChild(div);
    });
  });

//More Projects
let divPar2 = document.querySelector(".proj-2");

fetch("more-projects.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((el) => {
      let div = document.createElement("div");
      div.classList.add("row");
      let img = document.createElement("img");
      img.classList.add("tmpl");
      img.src = el.image;
      div.appendChild(img);
      let div2 = document.createElement("div");
      div2.classList.add("layer");
      div.appendChild(div2);
      let h5 = document.createElement("h5");
      h5.classList.add("tmpl-descrp");
      let title = document.createTextNode(`${el.title}`);
      h5.appendChild(title);
      let p = document.createElement("p");
      let tech = document.createTextNode(`${el.tech}`);
      let a = document.createElement("a");
      a.href = el.URL;
      a.target = "_blank";
      let i = document.createElement("i");
      i.className = el.icon;
      a.appendChild(i);
      p.appendChild(tech);
      div2.appendChild(h5);
      div2.appendChild(p);
      div2.appendChild(a);
      divPar2.appendChild(div);
    });
  });

// Page for projects only
let depsEl = document.querySelectorAll(".cont-all .cont");
let containersEl6 = document.querySelector(".projects2");
let moreProjects = document.querySelector(".more-projects");
let goBack = document.querySelector(".goBack");
let nav = document.querySelector(".nav");

goBack.style.pointerEvents = "none";

moreProjects.addEventListener("click", () => {
  moreProj();
});

function moreProj() {
  depsEl.forEach((e) => {
    if (e.classList.contains("displaying")) {
      e.classList.remove("displaying");
    } else {
      e.classList.add("displaying");
    }
  });
  containersEl6.style.margin = "15px auto 15px";
  goBack.classList.remove("displaying");
  goBack.style.pointerEvents = "auto";
  nav.classList.add("displaying");
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
}

goBack.addEventListener("click", () => {
  proj();
});

function proj() {
  depsEl.forEach((e) => {
    if (e.classList.contains("displaying")) {
      e.classList.remove("displaying");
    } else {
      e.classList.add("displaying");
    }
  });
  goBack.classList.add("displaying");
  goBack.style.pointerEvents = "none";
  nav.classList.remove("displaying");
  window.scrollTo({
    left: 0,
    top: projectOffset.offsetTop,
    behavior: "smooth"
  });
}

// My Age
const birthDate = new Date("2000-09-02");
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

const birthMonth = birthDate.getMonth();
const currentMonth = today.getMonth();

const birthDay = birthDate.getDate();
const currentDay = today.getDate();

if (
  currentMonth < birthMonth ||
  (currentMonth === birthMonth && currentDay < birthDay)
) {
  age--;
}

document.getElementById("ageDisplay").innerHTML = age;

// Saving Inputs In Session Storage
let first_name = document.querySelector("#first-name");
let last_name = document.querySelector("#last-name");
let phone_numb = document.querySelector("#phone-numb");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let submit = document.querySelector("#submit");

first_name.oninput = function () {
  window.sessionStorage.setItem("first name", first_name.value);
};

last_name.oninput = function () {
  window.sessionStorage.setItem("last name", last_name.value);
};

phone_numb.oninput = function () {
  window.sessionStorage.setItem("phone number", phone_numb.value);
};

email.oninput = function () {
  window.sessionStorage.setItem("email", email.value);
};

message.oninput = function () {
  window.sessionStorage.setItem("message", message.value);
};

submit.onsubmit = function () {
  window.sessionStorage.setItem("submit", submit.value);
};

function localSt() {
  first_name.value = window.sessionStorage.getItem("first name");
  last_name.value = window.sessionStorage.getItem("last name");
  phone_numb.value = window.sessionStorage.getItem("phone number");
  email.value = window.sessionStorage.getItem("email");
  message.value = window.sessionStorage.getItem("message");
  submit.value = window.sessionStorage.getItem("submit");
}

//SweetAlert2
document.getElementById("register").onsubmit = function (event) {
  event.preventDefault();
  if (message.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in the message field!"
      //footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
  if (email.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in the email field!"
      //footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
  if (phone_numb.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in your number!"
      //footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
  if (first_name.value === "" || last_name.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in your full name!"
      //footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
  if (
    first_name.value != "" &&
    last_name.value != "" &&
    email.value != "" &&
    phone_numb.value != "" &&
    message.value != ""
  ) {
    last_name.value = "";
    first_name.value = "";
    phone_numb.value = "";
    email.value = "";
    message.value = "";
  }
  return true;
};