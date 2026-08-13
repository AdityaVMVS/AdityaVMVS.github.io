const directoryLinks = [...document.querySelectorAll('.project-directory a')];
const projectSections = [...document.querySelectorAll('.project-section')];

const observer = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;
  directoryLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
  });
}, { rootMargin: '-20% 0px -65%', threshold: [0, 0.25, 0.5] });

projectSections.forEach(section => observer.observe(section));
