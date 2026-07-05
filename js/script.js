/* ==========================================
   PrimeLand Realty Landing Page
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ===========================
       FAQ Accordion
    =========================== */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector("button");

    button.addEventListener("click", () => {
      faqItems.forEach((faq) => {
        if (faq !== item) {
          faq.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });

  /* ===========================
       Smooth Scroll
    =========================== */

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  /* ===========================
       Reveal Animation
    =========================== */

  const reveals = document.querySelectorAll(".card, .testimonial, .faq-item, .optin-box, .why-grid div");

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;

      if (top < trigger) {
        el.classList.add("active");

        el.classList.add("fade-in");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);

  revealOnScroll();

  /* ===========================
       Sticky Header Shadow
    =========================== */

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = "0 12px 35px rgba(0,0,0,.08)";
    } else {
      header.style.boxShadow = "0 4px 18px rgba(0,0,0,.04)";
    }
  });

  /* ===========================
       Form Validation
    =========================== */

  // const form = document.getElementById("leadForm");

  // if (form) {
  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();

  //     const name = form.querySelector('input[type="text"]');

  //     const email = form.querySelector('input[type="email"]');

  //     if (name.value.trim() === "") {
  //       alert("Please enter your full name.");

  //       name.focus();

  //       return;
  //     }

  //     if (email.value.trim() === "") {
  //       alert("Please enter your email.");

  //       email.focus();

  //       return;
  //     }

  //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //     if (!emailPattern.test(email.value)) {
  //       alert("Please enter a valid email address.");

  //       email.focus();

  //       return;
  //     }

  //     let success = document.querySelector(".success-message");

  //     if (!success) {
  //       success = document.createElement("div");

  //       success.className = "success-message";

  //       form.appendChild(success);
  //     }

  //     success.style.display = "block";

  //     success.innerHTML = "🎉 Thank you! Your FREE Property Buying Guide is on its way to your email.";

  //     form.reset();

  //     success.scrollIntoView({
  //       behavior: "smooth",

  //       block: "center",
  //     });
  //   });
  // }

  /* ===========================
       Button Ripple Effect
    =========================== */

  const buttons = document.querySelectorAll(".btn, .btn-outline, #leadForm button");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");

      const rect = this.getBoundingClientRect();

      const size = Math.max(rect.width, rect.height);

      ripple.style.width = size + "px";
      ripple.style.height = size + "px";

      ripple.style.left = e.clientX - rect.left - size / 2 + "px";

      ripple.style.top = e.clientY - rect.top - size / 2 + "px";

      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255,255,255,.4)";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple .6s linear";
      ripple.style.pointerEvents = "none";

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  /* ===========================
       Counter Animation
    =========================== */

  const counters = document.querySelectorAll(".hero-stats h3");

  let counted = false;

  function runCounter() {
    if (counted) return;

    const trigger = document.querySelector(".hero-stats").getBoundingClientRect().top;

    if (trigger < window.innerHeight) {
      counted = true;

      counters.forEach((counter) => {
        const text = counter.innerText;

        const target = parseInt(text);

        const suffix = text.replace(/[0-9]/g, "");

        let count = 0;

        const speed = target / 60;

        const interval = setInterval(() => {
          count += speed;

          if (count >= target) {
            counter.innerText = target + suffix;

            clearInterval(interval);
          } else {
            counter.innerText = Math.floor(count) + suffix;
          }
        }, 25);
      });
    }
  }

  window.addEventListener("scroll", runCounter);

  runCounter();

  /* ===========================
       Back To Top Button
    =========================== */

  const topBtn = document.createElement("button");

  topBtn.innerHTML = "↑";

  topBtn.id = "topBtn";

  document.body.appendChild(topBtn);

  Object.assign(topBtn.style, {
    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    background: "#0B7A4B",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    display: "none",
    zIndex: "999",
    boxShadow: "0 10px 30px rgba(0,0,0,.2)",
    transition: "all .3s",
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });
});

/* ===========================
   Ripple Animation
=========================== */

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);
