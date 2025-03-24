// Update the setupTypingAnimation function
function setupTypingAnimation() {
  const textElement = document.getElementById("typing-text")
  const typingArea = document.querySelector(".typing-area")
  const fullText = "web solutions with "
  let index = 0

  // Calculate the width needed for the full text plus the brand name
  // This helps prevent layout shifts
  const tempSpan = document.createElement("span")
  tempSpan.style.visibility = "hidden"
  tempSpan.style.position = "absolute"
  tempSpan.style.fontSize = window.getComputedStyle(textElement).fontSize
  tempSpan.style.fontFamily = window.getComputedStyle(textElement).fontFamily
  tempSpan.textContent = fullText + "pluss.dev"
  document.body.appendChild(tempSpan)

  // Set minimum width based on the full text
  const fullWidth = tempSpan.offsetWidth
  typingArea.style.minWidth = fullWidth + 10 + "px" // Add a little extra space

  // Remove the temporary element
  document.body.removeChild(tempSpan)

  // Clear any existing text
  textElement.textContent = ""

  // Function to add one character at a time
  function typeText() {
    if (index < fullText.length) {
      textElement.textContent += fullText.charAt(index)
      index++
      setTimeout(typeText, 100) // Adjust speed here (lower = faster)
    } else {
      // When typing is complete, add the span with "pluss.dev" with a fade-in effect
      const span = document.createElement("span")
      span.textContent = "pluss.dev"
      span.classList.add("brand-text")
      span.style.opacity = "0"
      textElement.appendChild(span)

      // Fade in the brand name
      setTimeout(() => {
        span.style.transition = "opacity 0.5s ease"
        span.style.opacity = "1"
      }, 200)
    }
  }

  // Start the typing animation
  setTimeout(typeText, 500) // Delay before starting
}

// Add this to the end of your existing window.onload or as a separate event listener
document.addEventListener("DOMContentLoaded", () => {
  setupTypingAnimation()

  // Your existing code...
})

// Keep all your existing code below this point
// Data
const projects = [
  {
    title: "services portfolio landing page",
    description:
      "This landing page is designed to showcase the professional copywriting services offered by a freelancer, aiming to attract potential clients looking for high-quality, results-driven content. The page is visually appealing, with a clean and modern design that highlights the freelancer's expertise and the value they can provide. The main focus of the page is to communicate the freelancer's ability to craft compelling copy that captures attention, drives engagement, and ultimately helps businesses grow.",
    image: "img/AC.png",
    technologies: [
      { name: "HTML", icon: "img/html-icon.png" },
      { name: "CSS", icon: "img/css-icon.png" },
      { name: "JS", icon: "img/js-icon.png" },
    ],
    demoUrl: "https://mehdevv.github.io/Adel_copywriter/",
  },
  {
    title: "youcan store for Bejaiastore",
    description:
      "I've built a complete eCommerce platform for Bejaia Store, providing an intuitive and user-friendly online shopping experience. The website features responsive design, seamless product browsing, secure checkout, and multiple payment options. Customers can easily track their orders, manage their accounts, and take advantage of special promotions, all while enjoying a smooth, mobile-friendly interface.",
    image: "img/BS.png",
    technologies: [{ name: "YouCan", icon: "img/youcan-icon.png" }],
    demoUrl: "https://bejaia-store.youcan.store/",
  },
  {
    title: "consultant portfolio website",
    description:
      "This personalized portfolio and services showcase is designed to highlight the expertise and experience of a consultant specializing in management and banking. The page serves as a professional digital presence that reflects the consultant's deep industry knowledge and proven track record of success. The design is sleek, sophisticated, and easy to navigate, ensuring that potential clients can easily learn about the consultant's services, skills, and unique approach.",
    image: "img/ABD.png",
    technologies: [
      { name: "HTML", icon: "img/html-icon.png" },
      { name: "CSS", icon: "img/css-icon.png" },
      { name: "JS", icon: "img/js-icon.png" },
      { name: "PHP", icon: "img/php-icon.png" },
      { name: "SQL", icon: "img/sql-icon.png" },
    ],
    demoUrl: "https://mehdevv.github.io/abdeddaim/",
  },
  {
    title: "QR code logo + vistual visit card",
    description:
      "a virtuel visit card suiting thair buisness identity relied made a QR code-logo to be printed on physical visit cards and be scanned, implementing buttons to call directly or send rmails or save company/personal info of the owner of the card.",
    image: "img/QR.png",
    technologies: [
      { name: "HTML", icon: "img/html-icon.png" },
      { name: "CSS", icon: "img/css-icon.png" },
      { name: "JS", icon: "img/js-icon.png" },
    ],
    demoUrl: "https://mehdevv.github.io/Innovconsult1/",
  },
]

const ecommerceProjects = [
  {
    title: "Youcan & shopify stores making",
    description: "we create youcan and shopify shops for your E commerce buisness.",
    image: "img/shops.png",
    features: [
      "Product management and inventory tracking",
      "Secure payment processing and Order fulfillment",
      "Product recommendations",
    ],
  },
  {
    title: "web designe & landing pages",
    description: "we create well designed pages and websites for your buisness.",
    image: "img/LP.png",
    features: [
      "respecting measures of designe and fluidity of the page",
      "adding functions and animation for better user experience",
      "showing contact and services",
    ],
  },
  {
    title: "personalised Virtual visit cards",
    description: "we turn any designe you want to a vituelle card with a QR code for your buisness online.",
    image: "img/QRS.png",
    features: [
      "QR code with your logo",
      "showing contact of your buisness online",
      "added to a visit card or printed to be scanned",
    ],
  },
]

// Initialize Lucide icons
const lucide = window.lucide
lucide.createIcons()

// Navbar functionality
const navbar = document.getElementById("navbar")
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")
const menuIcon = mobileMenuBtn.querySelector("i")

// Update navbar on scroll
const updateNavbar = () => {
  const aboutSection = document.getElementById("about")
  if (aboutSection) {
    navbar.classList.toggle("fixed", window.scrollY > aboutSection.offsetTop)
  }
}

window.addEventListener("scroll", updateNavbar)

// Mobile menu toggle
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  menuIcon.setAttribute("data-lucide", mobileMenu.classList.contains("active") ? "x" : "menu")
  lucide.createIcons()
})

// Smooth scroll functionality
function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
    mobileMenu.classList.remove("active")
    menuIcon.setAttribute("data-lucide", "menu")
    lucide.createIcons()
  }
}

// Create slider functionality
function createSlider(container, slides) {
  const sliderContainer = document.createElement("div")
  sliderContainer.className = "slider-container"

  const sliderWrapper = document.createElement("div")
  sliderWrapper.className = "slider-wrapper"

  slides.forEach((slide) => {
    const slideElement = document.createElement("div")
    slideElement.className = "slider-slide"
    slideElement.appendChild(slide)
    sliderWrapper.appendChild(slideElement)
  })

  sliderContainer.appendChild(sliderWrapper)

  const prevButton = document.createElement("button")
  prevButton.className = "slider-button prev"
  prevButton.innerHTML = '<i data-lucide="chevron-left"></i>'

  const nextButton = document.createElement("button")
  nextButton.className = "slider-button next"
  nextButton.innerHTML = '<i data-lucide="chevron-right"></i>'

  const controls = document.createElement("div")
  controls.className = "slider-controls"
  controls.appendChild(prevButton)
  controls.appendChild(nextButton)

  sliderContainer.appendChild(controls)

  container.innerHTML = ""
  container.appendChild(sliderContainer)

  let currentIndex = 0
  const totalSlides = slides.length

  function updateSlider() {
    const slidesPerView = getSlidesPerView()
    const slideWidth = 100 / slidesPerView
    sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`

    // Update button states
    updateButtonStates()
  }

  function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 640) return 2
    return 1
  }

  function updateButtonStates() {
    const slidesPerView = getSlidesPerView()
    const maxIndex = totalSlides - slidesPerView

    // Update prev button state
    if (currentIndex <= 0) {
      prevButton.classList.add("disabled")
    } else {
      prevButton.classList.remove("disabled")
    }

    // Update next button state
    if (currentIndex >= maxIndex) {
      nextButton.classList.add("disabled")
    } else {
      nextButton.classList.remove("disabled")
    }
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--
      updateSlider()
    }
  })

  nextButton.addEventListener("click", () => {
    const slidesPerView = getSlidesPerView()
    if (currentIndex < totalSlides - slidesPerView) {
      currentIndex++
      updateSlider()
    }
  })

  // Update slider on window resize
  window.addEventListener("resize", () => {
    // Make sure currentIndex is valid after resize
    const slidesPerView = getSlidesPerView()
    const maxIndex = totalSlides - slidesPerView
    currentIndex = Math.min(currentIndex, maxIndex)
    if (currentIndex < 0) currentIndex = 0

    updateSlider()
  })

  // Initial update
  updateSlider()
  lucide.createIcons()
}

// Create image preview modal
function createImagePreviewModal() {
  const modal = document.createElement("div")
  modal.className = "modal"
  modal.id = "imageModal"

  const modalImg = document.createElement("img")
  modalImg.className = "modal-content"
  modalImg.id = "modalImage"

  const closeBtn = document.createElement("span")
  closeBtn.className = "modal-close"
  closeBtn.innerHTML = "&times;"

  modal.appendChild(modalImg)
  modal.appendChild(closeBtn)
  document.body.appendChild(modal)

  closeBtn.onclick = () => {
    modal.classList.remove("show")
  }

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.classList.remove("show")
    }
  }

  return {
    open: (src) => {
      modalImg.src = src
      modal.classList.add("show")
    },
  }
}

const imageModal = createImagePreviewModal()

// Render portfolio projects
const portfolioGrid = document.getElementById("portfolio-grid")
const portfolioCards = projects.map((project) => {
  const card = document.createElement("div")
  card.className = "card"

  card.innerHTML = `
    <div class="card-image">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="card-content">
      <h3 class="card-title">${project.title}</h3>
      <p class="card-description">${project.description}</p>
      <div class="tech-tags">
        ${project.technologies
          .map(
            (tech) => `
          <span class="tech-tag">
            <img src="${tech.icon}" alt="${tech.name}" class="tech-icon" title="${tech.name}">
          </span>
        `,
          )
          .join("")}
      </div>
      <div class="card-links">
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="review-project-btn">
          <i data-lucide="share"></i>
          review project
        </a>
      </div>
    </div>
  `

  const cardImage = card.querySelector(".card-image")
  cardImage.addEventListener("click", () => {
    imageModal.open(project.image)
  })

  return card
})

createSlider(portfolioGrid, portfolioCards)

// Render e-commerce projects
const ecommerceGrid = document.getElementById("e-commerce-grid")
const ecommerceCards = ecommerceProjects.map((project) => {
  const card = document.createElement("div")
  card.className = "card e-commerce-card"

  card.innerHTML = `
    <div class="card-image">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="card-content">
      <div class="card-header">
        <i data-lucide="shopping-bag"></i>
        <h3 class="card-title">${project.title}</h3>
      </div>
      <div class="scrollable-content">
        <p class="card-description">${project.description}</p>
        <ul class="feature-list">
          ${project.features.map((feature) => `<li>${feature}</li style="content: none;">`).join("")}
        </ul>
      </div>
    </div>
  `

  const cardImage = card.querySelector(".card-image")
  cardImage.addEventListener("click", () => {
    imageModal.open(project.image)
  })

  return card
})

createSlider(ecommerceGrid, ecommerceCards)

// Initialize Lucide icons after dynamic content is added
lucide.createIcons()

