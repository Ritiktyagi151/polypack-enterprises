function toggleDropdown(id, button) {
  const dropdown = document.getElementById(id);
  const isHidden = dropdown.classList.contains("hidden");

  dropdown.classList.toggle("hidden");

  const toggleSpan = button.querySelector("span");
  if (toggleSpan) {
    toggleSpan.textContent = isHidden ? "−" : "+";
  }
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("-translate-x-full");
}
