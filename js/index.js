document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const newsList = document.querySelector('.news-box .list');

    viewMoreBtn.addEventListener('click', function() {
        newsList.classList.toggle('expanded');
        this.classList.toggle('expanded');

        if (newsList.classList.contains('expanded')) {
            newsList.style.maxHeight = newsList.scrollHeight + 'px';
            this.querySelector('span').textContent = 'Show Less';
        } else {
            newsList.style.maxHeight = '';
            this.querySelector('span').textContent = 'View More';
            newsList.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // 点击头像切换阴阳图/照片（触屏没有 hover，桌面点击也保留）
    const avatarWrap = document.querySelector('.avatar-wrap');
    avatarWrap.querySelectorAll('.img').forEach(function(img) {
        img.addEventListener('click', function() {
            avatarWrap.classList.toggle('flipped');
        });
    });
});