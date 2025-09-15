/* script.js: 简单交互逻辑
   当前仅用于在导航栏中高亮当前页面。可以根据需要扩展，例如实现搜索过滤或主题切换。 */

document.addEventListener('DOMContentLoaded', () => {
    // 高亮当前导航链接
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        }
    });
});