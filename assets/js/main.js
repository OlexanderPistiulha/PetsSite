document.querySelector('.mobile__icon').addEventListener('click', function () {
    this.classList.toggle('mobile__icon-active');
    document.querySelector('.mobile__body').classList.toggle('mobile__body-active');
})