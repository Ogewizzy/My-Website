document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent successfully!');
});

const skills = document.querySelectorAll(".skill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const circle = entry.target.querySelector(".circle");
      const progress = circle.querySelector(".progress");

      if (entry.isIntersecting) {
        // When the skill is in view, start the loading animation
        circle.style.animation = "spin 2s linear infinite";
        progress.style.animation = "progress 2s linear forwards";
        entry.target.classList.add("active");
      } else {
        // When the skill is out of view, reset the animation
        circle.style.animation = "none";
        progress.style.animation = "none";
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the skill is in view
);

// Observe each skill
skills.forEach((skill) => {
  observer.observe(skill);
});



