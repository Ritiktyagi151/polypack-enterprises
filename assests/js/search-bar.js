function getSearchLogic() {
  // Product data with URLs
  const lightingProducts = [
    { name: "Paper Product", url: "paper-product.html" },
    { name: "Bakery Boxes", url: "Bakery-Boxes.html" },
    { name: "Paper Container", url: "Paper-container.html" },
    { name: "Crystal jar", url: "crystal-jar.html" },
    { name: "Sealing Machine ", url: "sealing-machine.html" },
    {
      name: "Aluminium Foil Paper For Food Packaging",
      url: "Aluminium-foil.html",
    },
    { name: "Disposable Wooden Cutlery", url: "Disposable-wooden.html" },
    { name: "Paper Cup Holder", url: "Paper-cup-holder.html" },
    { name: "Noodles paper Box", url: "Noodles-paper-Box.html" },
    { name: "Paper Bags for food packaging", url: "paper-bags.html" },
    { name: "Paper Boxes For Food Packaging", url: "Paper-boxes.html" },
    { name: "Burger & Sandwich Box", url: "burger-sandwich-box.html" },
    {
      name: "French Fries & Frankie Punch",
      url: "French-Fries-Frankie-Punch.html",
    },
    { name: "Paper Cup", url: "Paper-cup.html" },
    { name: "Cake Box", url: "cake-box.html" },
    { name: "Baking Trays", url: "baking-tray.html" },
    { name: "Meal Tray", url: "Meal-tray.html" },
    { name: "Pizza Box", url: "pizza-box.html" },
    { name: "Paper Food Containers", url: "Paper-container.html" },
    { name: "Molding Container", url: "Moulding-container.html" },
    {
      name: "Disposable Food Container",
      url: "disposable-food-container.html",
    },
    { name: "Paper Plates", url: "paper-plates.html" },
    { name: "Pet Jar", url: "pet-jar.html" },
    { name: "PVC Jar", url: "pcv.html" },
    { name: "Gallery", url: "gallery.html" },
    { name: "Blogs", url: "blogs.html" },
    { name: "About Us", url: "about.html" },
    { name: "Contact US", url: "contactus.html" },
    { name: "Home", url: "index.html" },
  ];

  // DOM elements
  const searchInput = document.getElementById("product-search");
  const searchResults = document.getElementById("searchResults");

  // Event listeners
  searchInput.addEventListener("input", handleSearch);
  searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim().length > 0) {
      handleSearch();
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.add("hidden");
    }
  });

  // Search function
  function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm.length === 0) {
      searchResults.classList.add("hidden");
      return;
    }

    const filteredProducts = lightingProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );

    displaySearchResults(filteredProducts);
  }

  // Display search results
  function displaySearchResults(results) {
    searchResults.innerHTML = "";

    if (results.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "p-3 text-gray-500";
      noResults.textContent = "No products found";
      searchResults.appendChild(noResults);
    } else {
      results.forEach((product) => {
        const resultItem = document.createElement("a");
        resultItem.className =
          "block p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100";
        resultItem.textContent = product.name;
        resultItem.href = product.url;

        searchResults.appendChild(resultItem);
      });
    }

    searchResults.classList.remove("hidden");
  }
}

fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    const navbarHeader = document.getElementById("navbar-header");
    navbarHeader.innerHTML = data;

    // Force reflow to ensure sticky positioning is applied
    navbarHeader.offsetHeight; // Trigger reflow
    navbarHeader.classList.add("sticky"); // Ensure sticky class is applied
    getSearchLogic();
  })
  .catch((error) => console.error("Error loading navbar:", error));
