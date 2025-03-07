document.addEventListener('DOMContentLoaded', () => {
    const headers = document.getElementsByClassName('accordion-header');
    
    for (let i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            // 현재 클릭한 아코디언만 토글
            if (isActive) {
                content.classList.remove('active');
                content.style.maxHeight = '0';
                this.classList.remove('active');
            } else {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                this.classList.add('active');
            }
        });
    }
});