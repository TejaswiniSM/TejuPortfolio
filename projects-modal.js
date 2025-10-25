// Project Modal Functions
function showProjectDetails(event, projectId) {
  event.stopPropagation();
  const modal = document.getElementById(projectId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Add animation
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
  }
}

function closeProjectDetails(projectId) {
  const modal = document.getElementById(projectId);
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
    }, 300);
  }
}

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target.classList.contains('project-modal')) {
    event.target.classList.remove('show');
    setTimeout(() => {
      event.target.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 300);
  }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const modals = document.querySelectorAll('.project-modal.show');
    modals.forEach(modal => {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 300);
    });
  }
});
