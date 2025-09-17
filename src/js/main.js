// Simple Image Modal
// ==================

// Get modal elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.modal__close');
const overlay = document.querySelector('.modal__overlay');

// Open modal function
function openModal(imageSrc, imageAlt) {
  
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  modal.style.display = 'flex';
  modal.classList.add('modal--active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

// Close modal function
function closeModal() {
  modal.classList.add('modal--closing');
  closeBtn.blur();  
  modal.setAttribute('aria-hidden', 'true');
  
  setTimeout(() => {
    modal.classList.remove('modal--active', 'modal--closing');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Add click events to gallery images
  const galleryImages = document.querySelectorAll('.gallery-image');
  galleryImages.forEach(img => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      const imageSrc = img.getAttribute('data-modal-src') || img.src;
      const imageAlt = img.getAttribute('alt');
      openModal(imageSrc, imageAlt);
    });
  });

  // Close modal events
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('modal--active')) {
      // ESC key to close
      if (e.key === 'Escape') {
        closeModal();
      }
    }
  });
});
