const list = document.getElementById('sortable-list');
const playerContainer = document.getElementById('player-container');
let draggedItem = null;

list.addEventListener('dragstart', (e) => {
  if (e.target.classList.contains('music-item')) {
    draggedItem = e.target;
    e.target.classList.add('dragging');
  }
});

list.addEventListener('dragend', (e) => {
  if (e.target.classList.contains('music-item')) {
    e.target.classList.remove('dragging');
    draggedItem = null;
  }
});

list.addEventListener('dragover', (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(list, e.clientY);
  if (afterElement == null) {
    list.appendChild(draggedItem);
  } else {
    list.insertBefore(draggedItem, afterElement);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.music-item:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// ▶️ Reproduzir vídeo
document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const videoId = btn.getAttribute('data-video');
    playerContainer.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
        allow="autoplay; encrypted-media" 
        allowfullscreen
      ></iframe>`;
  });
});
