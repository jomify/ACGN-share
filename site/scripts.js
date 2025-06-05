async function loadGames() {
  const list = document.getElementById('game-list');
  if (!list) return;
  const response = await fetch('games.json');
  const games = await response.json();
  list.innerHTML = '';
  games.forEach(game => {
    const li = document.createElement('li');
    li.innerHTML = `<h3>${game.title}</h3><p>${game.description}</p><a href="${game.url}">Download</a>`;
    list.appendChild(li);
  });
}

async function loadDocs() {
  const list = document.getElementById('docs-list');
  if (!list) return;
  const response = await fetch('docs.json');
  const docs = await response.json();
  list.innerHTML = '';
  docs.forEach(doc => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${doc.url}">${doc.title}</a>`;
    list.appendChild(li);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  loadGames();
  loadDocs();
});
