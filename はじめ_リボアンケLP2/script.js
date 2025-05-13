// script.js
// FAQの開閉処理
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        // 表示・非表示をトグル
        answer.style.display = isVisible ? 'none' : 'block';

        // アイコンを切り替え
        const icon = question.querySelector('.fas');
        icon.classList.toggle('fa-chevron-down', !isVisible);
        icon.classList.toggle('fa-chevron-up', isVisible);
    });

    // 初期状態では非表示にしておく
    question.nextElementSibling.style.display = 'none';
});
