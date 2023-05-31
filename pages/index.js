const container = document.querySelector('.footer__little-columns');
const columns = container.querySelectorAll('.footer__column');
columns.forEach((column) => {
    const dropContainer = column.querySelector('.footer__column-content');
    const dropButton = column.querySelector('.footer__column-heading');
    function drop(){
        dropContainer.classList.toggle('footer__column-content_type_show');
    };
    dropButton.addEventListener('click', drop);
})