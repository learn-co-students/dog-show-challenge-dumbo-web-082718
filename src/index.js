document.addEventListener('DOMContentLoaded', DogController.init)
const dogForm = document.querySelector('#dog-form');
dogForm.addEventListener('submit', DogController.editDogSubmit);
