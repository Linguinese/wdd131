const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    // Add three more temples here...
  ];
  
  // Helper function to create temple cards
  function createTempleCard(temple) {
    return `
      <div class="temple-card">
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sqft</p>
      </div>
    `;
  }
  
  // Function to render temples
  function renderTemples(filter = "all") {
    const container = document.getElementById('temple-container');
    container.innerHTML = ""; // Clear current temples
  
    const filteredTemples = temples.filter(temple => {
      if (filter === "old") return new Date(temple.dedicated).getFullYear() < 1900;
      if (filter === "new") return new Date(temple.dedicated).getFullYear() > 2000;
      if (filter === "large") return temple.area > 90000;
      if (filter === "small") return temple.area < 10000;
      return true; // Default is "all"
    });
  
    filteredTemples.forEach(temple => {
      container.innerHTML += createTempleCard(temple);
    });
  }
  
  // Event listeners for menu filtering
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = e.target.getAttribute('data-filter');
      renderTemples(filter);
    });
  });
  
  // Initial render
  renderTemples();
  
  // Footer year and last modified date
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
  