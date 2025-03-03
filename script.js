// Data
const projects = [
  {
    title: "services portfolio landing page",
    description: "a landing page for a freelancer who wanted to show up his copywriting services online.",
    image: "img/AC.png",
    technologies: ["HTML", "CSS", "JS"],
    demoUrl: "https://mehdevv.github.io/Adel_copywriter/",
  },
  {
    title: "youcan store for Bejaiastore",
    description: "made a full ecommerce shop for the Bejaia store, including the admin account for them and all utilities they need to satisfy thair clients needs",
    image: "img/BS.png",
    technologies: ["youcan"],
    demoUrl: "https://bejaia-store.youcan.store/",
  },
  {
    title: "consultant portfolio website",
    description: "Fully personalized portfolio and services showcase for a consultant in the field of management and banks.",
    image: "img/ABD.png",
    technologies: ["HTML", "CSS", "JS", "PHP", "mySQL"],
    demoUrl: "https://mehdevv.github.io/abdeddaim/",
  },
  {
    title: "QR code logo + web page",
    description: "coded a vituelle card for thair buisness identity and made a QR code with thair logo to be printed on thair cards.",
    image: "img/QR.png",
    technologies: ["HTML", "CSS", "JS"],
    demoUrl: "https://mehdevv.github.io/Innovconsult/",
  },
];

const ecommerceProjects = [
  {
    title: "Youcan & shopify stores",
    description: "we create youcan and shopify shops for your E commerce buisness.",
    image: "img/shops.png",
    features: [
      "Product management system",
      "Secure payment processing",
      "Inventory tracking",
      "Product recommendations",
      "Order fulfillment",
    ],
  },
  {
    title: "web designe & landing pages",
    description: "we create well designed pages and websites for your buisness.",
    image: "img/LP.png",
    features: [
      "respecting measures of designe",
      "fluidity of the page",
      "adding functions and animation for better user experience",
      "showing contact and services",
    ],
  },
  {
    title: "personalised Virtual visit cards",
    description: "we turn any designe you want to a vituelle card with a QR code for your buisness online.",
    image: "img/QRS.png",
    features: [
      "no subscription needed",
      "add or remove any information you want",
      "QR code with your logo",
      "adding functions and animation for better user experience",
      "showing contact of your buisness online",
      "could be added to a physical visit card to be scanned or printed physically",
    ],
  },
];

// Initialize Lucide icons
lucide.createIcons();

// Navbar functionality
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = mobileMenuBtn.querySelector('i');

// Update navbar on scroll
const updateNavbar = () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    navbar.classList.toggle('fixed', window.scrollY > aboutSection.offsetTop);
  }
};

window.addEventListener('scroll', updateNavbar);

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuIcon.setAttribute('data-lucide', 
    mobileMenu.classList.contains('active') ? 'x' : 'menu'
  );
  lucide.createIcons();
});

// Smooth scroll functionality
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    mobileMenu.classList.remove('active');
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  }
}

// Create slider functionality
function createSlider(container, slides) {
  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'slider-container';
  
  const sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'slider-wrapper';
  
  slides.forEach(slide => {
    const slideElement = document.createElement('div');
    slideElement.className = 'slider-slide';
    slideElement.appendChild(slide);
    sliderWrapper.appendChild(slideElement);
  });
  
  sliderContainer.appendChild(sliderWrapper);
  
  const prevButton = document.createElement('button');
  prevButton.className = 'slider-button prev';
  prevButton.innerHTML = '<i data-lucide="chevron-left"></i>';
  
  const nextButton = document.createElement('button');
  nextButton.className = 'slider-button next';
  nextButton.innerHTML = '<i data-lucide="chevron-right"></i>';
  
  const controls = document.createElement('div');
  controls.className = 'slider-controls';
  controls.appendChild(prevButton);
  controls.appendChild(nextButton);
  
  sliderContainer.appendChild(controls);
  
  container.innerHTML = '';
  container.appendChild(sliderContainer);
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  
  function updateSlider() {
    const slideWidth = 100 / getSlidesPerView();
    sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }
  
  function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }
  
  prevButton.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateSlider();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = Math.min(totalSlides - getSlidesPerView(), currentIndex + 1);
    updateSlider();
  });
  
  window.addEventListener('resize', updateSlider);
  
  updateSlider();
  lucide.createIcons();
}

// Create image preview modal
function createImagePreviewModal() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'imageModal';
  
  const modalImg = document.createElement('img');
  modalImg.className = 'modal-content';
  modalImg.id = 'modalImage';
  
  const closeBtn = document.createElement('span');
  closeBtn.className = 'modal-close';
  closeBtn.innerHTML = '&times;';
  
  modal.appendChild(modalImg);
  modal.appendChild(closeBtn);
  document.body.appendChild(modal);
  
  closeBtn.onclick = () => {
    modal.classList.remove('show');
  };
  
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  };
  
  return {
    open: (src) => {
      modalImg.src = src;
      modal.classList.add('show');
    }
  };
}

const imageModal = createImagePreviewModal();

// Render portfolio projects
const portfolioGrid = document.getElementById('portfolio-grid');
const portfolioCards = projects.map(project => {
  const card = document.createElement('div');
  card.className = 'card';
  
  card.innerHTML = `
    <div class="card-image">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="card-content">
      <h3 class="card-title">${project.title}</h3>
      <p class="card-description">${project.description}</p>
      <div class="tech-tags">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      <div class="card-links">
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer">
          <i data-lucide="external-link"></i>
          review website
        </a>
      </div>
    </div>
  `;
  
  const cardImage = card.querySelector('.card-image');
  cardImage.addEventListener('click', () => {
    imageModal.open(project.image);
  });
  
  return card;
});

createSlider(portfolioGrid, portfolioCards);

// Render e-commerce projects
const ecommerceGrid = document.getElementById('e-commerce-grid');
const ecommerceCards = ecommerceProjects.map(project => {
  const card = document.createElement('div');
  card.className = 'card e-commerce-card';
  
  card.innerHTML = `
    <div class="card-image">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="card-content">
      <div class="card-header">
        <i data-lucide="shopping-bag"></i>
        <h3 class="card-title">${project.title}</h3>
      </div>
      <p class="card-description">${project.description}</p>
      <ul class="feature-list">
        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </div>
  `;
  
  const cardImage = card.querySelector('.card-image');
  cardImage.addEventListener('click', () => {
    imageModal.open(project.image);
  });
  
  return card;
});

createSlider(ecommerceGrid, ecommerceCards);

// Initialize Lucide icons after dynamic content is added
lucide.createIcons();