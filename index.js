// Modern Portfolio JavaScript - Vanilla JS Version
;(() => {
  // Declare emailjs and GitHubCalendar variables
  let emailjs
  let GitHubCalendar

  class ModernPortfolio {
    constructor() {
      this.init()
    }

    init() {
      this.setupLoadingScreen()
      this.setupThemeToggle()
      this.setupProgressBar()
      this.setupMobileNavigation()
      this.setupTypingAnimation()
      this.setupParticles()
      this.setupMouseParallax() // Add this line
      this.setupProjectsCarousel() // Add this line
      this.setupScrollAnimations()
      this.setupSkillsAnimation()
      this.setupStatsCounter()
      this.setupContactForm()
      this.setupGithubCalendar()
      this.setupSmoothScrolling()
    }

    // Loading Screen
    setupLoadingScreen() {
      window.addEventListener("load", () => {
        const loadingScreen = document.getElementById("loading-screen")
        setTimeout(() => {
          loadingScreen.style.opacity = "0"
          setTimeout(() => {
            loadingScreen.style.display = "none"
          }, 500)
        }, 2000)
      })
    }

    // Theme Toggle
    setupThemeToggle() {
      const themeToggle = document.getElementById("theme-toggle")
      const themeIcon = document.getElementById("theme-icon")
      const currentTheme = localStorage.getItem("theme") || "dark"

      document.documentElement.setAttribute("data-theme", currentTheme)
      this.updateThemeIcon(themeIcon, currentTheme)

      themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme")
        const newTheme = currentTheme === "dark" ? "light" : "dark"

        document.documentElement.setAttribute("data-theme", newTheme)
        localStorage.setItem("theme", newTheme)
        this.updateThemeIcon(themeIcon, newTheme)
      })
    }

    updateThemeIcon(icon, theme) {
      icon.className = theme === "dark" ? "uil uil-sun" : "uil uil-moon"
    }

    // Progress Bar
    setupProgressBar() {
      const progressBar = document.getElementById("progress-bar")

      window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset
        const docHeight = document.body.offsetHeight - window.innerHeight
        const scrollPercent = (scrollTop / docHeight) * 100
        progressBar.style.width = scrollPercent + "%"
      })
    }

    // Mobile Navigation
    setupMobileNavigation() {
      const openBtn = document.getElementById("open-btn")
      const closeBtn = document.getElementById("close-btn")
      const mobileNav = document.getElementById("mobile-nav")
      const navLinks = document.querySelectorAll(".item-open")

      if (openBtn && closeBtn && mobileNav) {
        // Set initial state - show hamburger, hide close button
        openBtn.style.display = "block"
        closeBtn.style.display = "none"

        openBtn.addEventListener("click", () => {
          mobileNav.classList.add("active")
          openBtn.style.display = "none"
          closeBtn.style.display = "block"
        })

        closeBtn.addEventListener("click", () => {
          mobileNav.classList.remove("active")
          openBtn.style.display = "block"
          closeBtn.style.display = "none"
        })

        navLinks.forEach((link) => {
          link.addEventListener("click", () => {
            mobileNav.classList.remove("active")
            openBtn.style.display = "block"
            closeBtn.style.display = "none"
          })
        })
      }
    }

    // Typing Animation
    setupTypingAnimation() {
      const typingElement = document.getElementById("typing-name")
      if (!typingElement) return

      const text = "Abhay Tomar"
      let index = 0
      let isDeleting = false

      const typeWriter = () => {
        const currentText = text.substring(0, index)
        typingElement.textContent = currentText

        if (!isDeleting && index < text.length) {
          index++
          setTimeout(typeWriter, 100)
        } else if (isDeleting && index > 0) {
          index--
          setTimeout(typeWriter, 50)
        } else if (!isDeleting && index === text.length) {
          setTimeout(() => {
            isDeleting = true
            typeWriter()
          }, 2000)
        } else if (isDeleting && index === 0) {
          setTimeout(() => {
            isDeleting = false
            typeWriter()
          }, 500)
        }
      }

      setTimeout(typeWriter, 2500)
    }

    // Floating Particles
    setupParticles() {
      const particlesContainer = document.getElementById("particles")
      if (!particlesContainer) return

      const particleCount = 60

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"
        particle.style.left = Math.random() * 100 + "%"
        particle.style.top = Math.random() * 100 + "%"
        particle.style.animationDelay = Math.random() * 8 + "s"
        particle.style.animationDuration = Math.random() * 4 + 4 + "s"

        // Add different sizes for variety
        const size = Math.random() * 3 + 2
        particle.style.width = size + "px"
        particle.style.height = size + "px"

        // Add different opacity levels
        particle.style.opacity = Math.random() * 0.6 + 0.2

        particlesContainer.appendChild(particle)
      }
    }

    // Mouse Parallax Effect
    setupMouseParallax() {
      const hero = document.getElementById("home")
      const particles = document.querySelectorAll(".particle")

      if (!hero) return

      hero.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window

        const xPos = clientX / innerWidth - 0.5
        const yPos = clientY / innerHeight - 0.5

        // Apply parallax effect to particles
        particles.forEach((particle, index) => {
          const speed = ((index % 3) + 1) * 0.5
          const x = xPos * speed * 20
          const y = yPos * speed * 20

          particle.style.transform = `translate(${x}px, ${y}px)`
        })

        // Apply subtle parallax to hero content
        const heroContent = hero.querySelector(".home")
        if (heroContent) {
          const x = xPos * 10
          const y = yPos * 10
          heroContent.style.transform = `translate(${x}px, ${y}px)`
        }
      })
    }

    // Projects Carousel
    setupProjectsCarousel() {
      const track = document.getElementById("projects-track")
      const prevBtn = document.getElementById("carousel-prev")
      const nextBtn = document.getElementById("carousel-next")
      const prevBtnNav = document.getElementById("carousel-prev-btn")
      const nextBtnNav = document.getElementById("carousel-next-btn")
      const indicators = document.querySelectorAll(".indicator")

      if (!track) return

      let currentSlide = 0
      const totalSlides = 3 // Number of unique projects
      let isAutoPlaying = true
      let autoPlayInterval

      // Get slides per view based on screen size
      const getSlidesPerView = () => {
        if (window.innerWidth <= 768) return 1
        if (window.innerWidth <= 1024) return 2
        return 3
      }

      // Calculate slide width
      const getSlideWidth = () => {
        const slidesPerView = getSlidesPerView()
        return 100 / slidesPerView
      }

      // Update carousel position
      const updateCarousel = () => {
        const slideWidth = getSlideWidth()
        const offset = currentSlide * slideWidth
        track.style.transform = `translateX(-${offset}%)`

        // Update indicators
        indicators.forEach((indicator, index) => {
          indicator.classList.toggle("active", index === currentSlide)
        })
      }

      // Next slide
      const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides
        updateCarousel()
      }

      // Previous slide
      const prevSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
        updateCarousel()
      }

      // Go to specific slide
      const goToSlide = (slideIndex) => {
        currentSlide = slideIndex
        updateCarousel()
      }

      // Auto play functionality
      const startAutoPlay = () => {
        if (isAutoPlaying) {
          autoPlayInterval = setInterval(nextSlide, 4000) // Change slide every 4 seconds
        }
      }

      const stopAutoPlay = () => {
        clearInterval(autoPlayInterval)
      }

      // Event listeners
      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          stopAutoPlay()
          prevSlide()
          setTimeout(startAutoPlay, 2000) // Resume auto-play after 2 seconds
        })
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          stopAutoPlay()
          nextSlide()
          setTimeout(startAutoPlay, 2000)
        })
      }

      if (prevBtnNav) {
        prevBtnNav.addEventListener("click", () => {
          stopAutoPlay()
          prevSlide()
          setTimeout(startAutoPlay, 2000)
        })
      }

      if (nextBtnNav) {
        nextBtnNav.addEventListener("click", () => {
          stopAutoPlay()
          nextSlide()
          setTimeout(startAutoPlay, 2000)
        })
      }

      // Indicator clicks
      indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
          stopAutoPlay()
          goToSlide(index)
          setTimeout(startAutoPlay, 2000)
        })
      })

      // Pause auto-play on hover
      const carousel = document.getElementById("projects-carousel")
      if (carousel) {
        carousel.addEventListener("mouseenter", stopAutoPlay)
        carousel.addEventListener("mouseleave", startAutoPlay)
      }

      // Handle window resize
      window.addEventListener(
        "resize",
        utils.debounce(() => {
          updateCarousel()
        }, 250),
      )

      // Touch/swipe support for mobile
      let startX = 0
      let endX = 0

      if (carousel) {
        carousel.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX
          stopAutoPlay()
        })

        carousel.addEventListener("touchmove", (e) => {
          endX = e.touches[0].clientX
        })

        carousel.addEventListener("touchend", () => {
          const diff = startX - endX
          if (Math.abs(diff) > 50) {
            // Minimum swipe distance
            if (diff > 0) {
              nextSlide()
            } else {
              prevSlide()
            }
          }
          setTimeout(startAutoPlay, 2000)
        })
      }

      // Initialize
      updateCarousel()
      startAutoPlay()

      // Intersection Observer to pause/resume when section is visible
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                isAutoPlaying = true
                startAutoPlay()
              } else {
                isAutoPlaying = false
                stopAutoPlay()
              }
            })
          },
          { threshold: 0.5 },
        )

        observer.observe(projectsSection)
      }
    }

    // Scroll Animations
    setupScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }
        })
      }, observerOptions)

      // Observe elements for scroll animations
      const animatedElements = document.querySelectorAll(
        ".skill-item, .service-card, .process-step, .project-card, .stat-card, .contact-item",
      )
      animatedElements.forEach((el) => {
        el.style.opacity = "0"
        el.style.transform = "translateY(30px)"
        el.style.transition = "all 0.6s ease"
        observer.observe(el)
      })
    }

    // Skills Animation
    setupSkillsAnimation() {
      const skillsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const progressFill = entry.target.querySelector(".progress-fill")
              if (progressFill) {
                const targetWidth = progressFill.getAttribute("data-width")
                setTimeout(() => {
                  progressFill.style.width = targetWidth + "%"
                }, 500)
              }
            }
          })
        },
        { threshold: 0.5 },
      )

      document.querySelectorAll(".skill-item").forEach((skill) => {
        skillsObserver.observe(skill)
      })
    }

    // Stats Counter Animation
    setupStatsCounter() {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const counter = entry.target
              const target = Number.parseInt(counter.getAttribute("data-target"))
              const increment = target / 100
              let current = 0

              const updateCounter = () => {
                if (current < target) {
                  current += increment
                  counter.textContent = Math.ceil(current)
                  setTimeout(updateCounter, 20)
                } else {
                  counter.textContent = target
                }
              }

              updateCounter()
            }
          })
        },
        { threshold: 0.5 },
      )

      document.querySelectorAll(".stat-number").forEach((stat) => {
        statsObserver.observe(stat)
      })
    }

    // Contact Form
    setupContactForm() {
      const contactForm = document.getElementById("contact-form")
      const submitBtn = document.getElementById("submit-btn")

      if (!contactForm || !submitBtn) return

      contactForm.addEventListener("submit", async (e) => {
        e.preventDefault()

        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value

        if (!name || !email || !message) {
          this.showNotification("Please fill out all fields", "error")
          return
        }

        // Show loading state
        submitBtn.innerHTML = '<span>Sending...</span><i class="uil uil-spinner-alt"></i>'
        submitBtn.disabled = true

        try {
          // EmailJS integration (if available)
          if (typeof emailjs !== "undefined") {
            const params = { name, email, message }
            await emailjs.send("service_a2ox7tt", "template_rtewoxe", params)
            contactForm.reset()
            this.showNotification("Message sent successfully!", "success")
          } else {
            // Fallback - just show success message
            contactForm.reset()
            this.showNotification("Message received! (Demo mode)", "success")
          }
        } catch (error) {
          console.error("Email send error:", error)
          this.showNotification("Failed to send message. Please try again.", "error")
        } finally {
          // Reset button
          submitBtn.innerHTML = '<span>Send Message</span><i class="uil uil-message"></i>'
          submitBtn.disabled = false
        }
      })
    }

    // Notification System
    showNotification(message, type) {
      const notification = document.createElement("div")
      notification.className = `notification ${type}`
      notification.textContent = message

      notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 2rem;
                border-radius: 10px;
                color: white;
                font-weight: 600;
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                background: ${type === "success" ? "#10b981" : "#ef4444"};
            `

      document.body.appendChild(notification)

      setTimeout(() => {
        notification.style.transform = "translateX(0)"
      }, 100)

      setTimeout(() => {
        notification.style.transform = "translateX(100%)"
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification)
          }
        }, 300)
      }, 3000)
    }

    // GitHub Calendar
    setupGithubCalendar() {
      if (typeof GitHubCalendar !== "undefined") {
        try {
          GitHubCalendar(".calendar", "abhaytomar01", {
            responsive: true,
            global_stats: false,
            tooltips: true,
          })
        } catch (error) {
          console.log("GitHub Calendar not loaded")
        }
      }
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute("href"))
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        })
      })
    }
  }

  // Enhanced Cursor Effect
  class CursorEffect {
    constructor() {
      this.cursor = document.createElement("div")
      this.cursor.className = "custom-cursor"
      this.cursor.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: var(--color-text-gold);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
                opacity: 0.7;
                mix-blend-mode: difference;
            `
      document.body.appendChild(this.cursor)
      this.init()
    }

    init() {
      document.addEventListener("mousemove", (e) => {
        this.cursor.style.left = e.clientX - 10 + "px"
        this.cursor.style.top = e.clientY - 10 + "px"
      })

      document.addEventListener("mousedown", () => {
        this.cursor.style.transform = "scale(0.8)"
      })

      document.addEventListener("mouseup", () => {
        this.cursor.style.transform = "scale(1)"
      })

      document.addEventListener("mouseleave", () => {
        this.cursor.style.opacity = "0"
      })

      document.addEventListener("mouseenter", () => {
        this.cursor.style.opacity = "0.7"
      })
    }
  }

  // Utility functions
  const utils = {
    debounce(func, wait) {
      let timeout
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout)
          func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
      }
    },

    throttle(func, limit) {
      let inThrottle
      return function () {
        const args = arguments

        if (!inThrottle) {
          func.apply(this, args)
          inThrottle = true
          setTimeout(() => (inThrottle = false), limit)
        }
      }
    },
  }

  // Initialize EmailJS if available
  if (typeof window.emailjs !== "undefined") {
    emailjs = window.emailjs
    emailjs.init("IgJ3aC57FEsrcQGwS")
  }

  // Initialize GitHubCalendar if available
  if (typeof window.GitHubCalendar !== "undefined") {
    GitHubCalendar = window.GitHubCalendar
  }

  // Initialize everything when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    new ModernPortfolio()
    new CursorEffect()
  })

  // Performance optimizations
  window.addEventListener(
    "scroll",
    utils.throttle(() => {
      // Handle scroll-based animations here if needed
    }, 16),
  ) // ~60fps

  window.addEventListener(
    "resize",
    utils.debounce(() => {
      // Handle resize events here if needed
    }, 250),
  )

  // Preload critical images
  const preloadImages = [
    "./assets/me22.jpg",
    "./assets/TDR_SS.png",
    "./assets/svurg.png",
    "./assets/masterguardSite_SS.png",
  ]

  preloadImages.forEach((src) => {
    const img = new Image()
    img.src = src
  })
})()
