// Data
const projects = [
    {
      title: "services portfolio landing page",
      description: "a landing page for a freelancer who wanted to show up his copywriting services online.",
      image: "./AC.png",
      technologies: ["HTML", "CSS", "JS"],
      demoUrl: "https://mehdevv.github.io/Adel_copywriter/",
      
    },
    {
      title: "youcan store for Bejaiastore",
      description: "made a full ecommerce shop for the Bejaia store, including the admin account for them and all utilities they need to satisfy thair clients needs",
      image: "./BS.png",
      technologies: ["youcan"],
      demoUrl: "https://bejaia-store.youcan.store/",
      
    },
    
  ];
  
  const ecommerceProjects = [
    
    {
      title: "Youcan & shopify stores",
      description: "we create youcan and shopify shops for your E commerce buisness.",
      image: "./shops.png",
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
      image: "./LP.jpg",
      features: [
        "respecting measures of designe",
        "fluidity of the page",
        "adding functions and animation for better user experience",
        "showing contact and services",
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
  
  // Render portfolio projects
  const portfolioGrid = document.getElementById('portfolio-grid');
  
  projects.forEach(project => {
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
          ${project.technologies.map(tech => `
            <span class="tech-tag">${tech}</span>
          `).join('')}
        </div>
        <div class="card-links">
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer">
            <i data-lucide="external-link"></i>
            review website
          </a>
        </div>
      </div>
    `;
    
    portfolioGrid.appendChild(card);
  });
  
  // Render e-commerce projects
  const ecommerceGrid = document.getElementById('e-commerce-grid');
  
  ecommerceProjects.forEach(project => {
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
          ${project.features.map(feature => `
            <li>${feature}</li>
          `).join('')}
        </ul>
      </div>
    `;
    
    ecommerceGrid.appendChild(card);
  });
  
  // Contact form functionality
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.querySelector('.form-status');
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    // Disable form
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success message
    formStatus.textContent = 'Message sent successfully!';
    formStatus.classList.add('active');
    
    // Reset form
    contactForm.reset();
    
    // Reset button
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonText;
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      formStatus.classList.remove('active');
    }, 3000);
  });
  
  // Initialize Lucide icons after dynamic content is added
  lucide.createIcons();