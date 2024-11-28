// Add scroll event to fade out the hero text and change the background
window.addEventListener('scroll', () => {
  const body = document.body;

  // Check scroll position
  if (window.scrollY > 100) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});

// Function to navigate to subpages
function navigateToSubPage(section) {
  alert(`Navigating to ${section}`); // Replace with actual navigation logic
}

<script>
  function goBack() {
    // Check if there's a page in the browser history
    if (window.history.length > 1) {
      window.history.back(); // Navigate to the previous page
    } else {
      // If no history, redirect to the homepage
      window.location.href = "index.html";
    }
  }
</script>