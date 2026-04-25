// ============================================================
//  BioCard — script.js
// ============================================================

const person = {
  name: "Kaneeza Batool",
  age: 21,
  education: "Undergraduate — Computer Science",
  city: "Sukkur, Pakistan",
};

// Populate text content
document.getElementById("name").textContent       = person.name;
document.getElementById("age").textContent        = `${person.age} years old`;
document.getElementById("education").textContent  = person.education;
document.getElementById("city").textContent       = person.city;

// Follow / Unfollow toggle
const followBtn = document.getElementById("followBtn");
let following = false;

followBtn.addEventListener("click", () => {
  following = !following;
  followBtn.textContent = following ? "✓ Following" : "+ Follow";
  followBtn.classList.toggle("following", following);
});
