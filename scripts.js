// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const circles = document.querySelectorAll('.roadmap .circle');
  const contents = document.querySelectorAll('.resource-grid.content');
  const resourceItems = document.querySelectorAll('.resource-box ul li');
  const progressBar = document.getElementById('progress-bar');
  const roadmapProgressBars = document.querySelectorAll('.roadmap-item .progress');

  // Show beginner content by default
  document.querySelector('.resource-grid.content.beginner').classList.add('active');

  // Set initial progress for roadmap items
  roadmapProgressBars.forEach(bar => {
    const progress = bar.dataset.progress;
    bar.style.width = `${progress}%`;
  });

  // Handle roadmap circle clicks
  circles.forEach(circle => {
    circle.addEventListener('click', () => {
      const category = circle.classList[1];
      document.querySelectorAll('.resource-grid').forEach(grid => {
        grid.classList.toggle('active', grid.classList.contains(category));
      });
      circles.forEach(c => c.classList.remove('active'));
      circle.classList.add('active');
    });
  });

  // Handle resource box clicks
  resourceItems.forEach(item => {
    item.addEventListener('click', () => {
      const link = item.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });
  });

  // Update progress bar on scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollPosition / documentHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
  });
});
