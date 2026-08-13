const filterButtons = document.querySelectorAll('.filter-button');
const posts = [...document.querySelectorAll('.post-card')];
const feedTitle = document.querySelector('#feed-title');
const postCount = document.querySelector('#post-count');
const emptyState = document.querySelector('#empty-state');

function showPosts(filter, label) {
  let visibleCount = 0;

  posts.forEach(post => {
    const tags = post.dataset.tags.split(',').map(tag => tag.trim());
    const isVisible = filter === 'latest' || tags.includes(filter);
    post.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  feedTitle.textContent = label;
  postCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'article' : 'articles'}`;
  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    showPosts(button.dataset.filter, button.childNodes[0].textContent.trim());
  });
});

posts.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date))
  .forEach(post => document.querySelector('#post-list').appendChild(post));

showPosts('latest', 'Latest blogs');
