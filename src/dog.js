class Dog {
  constructor(dog) {
    this.name = dog.name
    this.breed = dog.breed
    this.sex = dog.sex
    this.id = dog.id
  }

  tableData() {
    const tr = document.createElement('tr')
    tr.id = `dog-${this.id}`
    const name = document.createElement('td')
    name.innerText = this.name
    const breed = document.createElement('td')
    breed.innerText = this.breed
    const sex = document.createElement('td')
    sex.innerText = this.sex
    const editOuter = document.createElement('td')
    const editButton = document.createElement('button')
    editButton.innerText = `Edit ${this.name}`;
    editButton.dataset.id = this.id
    editButton.addEventListener('click', DogController.editDogInit)
    editOuter.append(editButton);
    tr.append(name, breed, sex, editOuter)
    return tr
  }

  refreshDog() {
    let oldDog = document.querySelector(`#dog-${this.id}`)
    const newDog = this.tableData
    oldDog = newDog
  }
}
