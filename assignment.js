function addEvent() {
  const title = document.getElementById('eventTitle').value;
  const date = document.getElementById('eventDate').value;
  const category = document.getElementById('eventCategory').value;
  const desc = document.getElementById('eventDesc').value;

  if (!title || !date) return alert("Please fill in the title and date");

  const eventList = document.getElementById('eventList');

  // Create a new event card element
  const card = document.createElement('div');
  card.className = 'event-card';
  card.innerHTML = `
        <span class="delete-icon" onclick="this.parentElement.remove()">✖</span>
        <h3>${title}</h3>
        <p class="date">📅 ${date}</p>
        <span class="badge">${category}</span>
        <p>${desc}</p>
    `;

  eventList.appendChild(card);
}

function clearEvents() {
  document.getElementById('eventList').innerHTML = "";
}

// Logic for the DOM Demo at the bottom
const original = document.getElementById('original');
document.getElementById('htmlOutput').innerHTML = "innerHTML: " + original.innerHTML;
document.getElementById('textOutput').innerText = "innerText: " + original.innerText;
document.getElementById('contentOutput').textContent = "textContent: " + original.textContent;