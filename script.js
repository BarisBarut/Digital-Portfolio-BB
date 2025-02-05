document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const blogPost = this.closest('.blog-post');
            const summary = blogPost.querySelector('.blog-summary');
            const fullContent = blogPost.querySelector('.blog-full');
            
            if (fullContent.style.display === 'none') {
                summary.style.display = 'none';
                fullContent.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                summary.style.display = 'block';
                fullContent.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});
