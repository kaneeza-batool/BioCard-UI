const person = {
  name: "Kaneeza Batool",
  age: 21,
  education: "Undergraduate",
  city: "Sukkur",
};

document.getElementById("name").textContent = person.name;
document.getElementById("age").textContent = `Age: ${person.age}`;
document.getElementById("education").textContent = `🎓 ${person.education}`;
document.getElementById("city").textContent = `📍 ${person.city}`;
