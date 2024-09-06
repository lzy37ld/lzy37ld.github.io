document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const newsList = document.querySelector('.news-box .list');

    viewMoreBtn.addEventListener('click', function() {
        newsList.classList.toggle('expanded');
        this.classList.toggle('expanded');

        if (newsList.classList.contains('expanded')) {
            this.querySelector('span').textContent = 'Show Less';
        } else {
            this.querySelector('span').textContent = 'View More';
            newsList.scrollIntoView({ behavior: 'smooth' });
        }
    });
});