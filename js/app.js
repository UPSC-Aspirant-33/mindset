function saveThought() {
  const input = document.getElementById("mindsetInput");
  if (!input.value.trim()) {
    alert("Just write anything. Even one line is enough 🌱");
    return;
  }

  const thoughts = JSON.parse(localStorage.getItem("mindThoughts")) || [];

  thoughts.push({
    text: input.value,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("mindThoughts", JSON.stringify(thoughts));
  input.value = "";

  alert("Your thoughts are safely stored 🌿");
}

// Load dashboard thoughts
if (document.getElementById("thoughtsContainer")) {
  const thoughts = JSON.parse(localStorage.getItem("mindThoughts")) || [];
  const container = document.getElementById("thoughtsContainer");

  if (thoughts.length === 0) {
    container.innerHTML = "<p>No thoughts yet. Your journey will begin 🌱</p>";
  }

  thoughts.reverse().forEach(t => {
    const div = document.createElement("div");
    div.className = "thought";
    div.innerHTML = `<div class="date">${t.date}</div>${t.text}`;
    container.appendChild(div);
  });
}
