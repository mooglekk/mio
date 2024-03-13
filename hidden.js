const hideCheckbox = document.getElementById('hideCheckbox');
const elementToHide = document.getElementById('elementToHide');

hideCheckbox.addEventListener('change', function() {
    if (this.checked) {
        elementToHide.classList.add('hidden');
    } else {
        elementToHide.classList.remove('hidden');
    }
});
