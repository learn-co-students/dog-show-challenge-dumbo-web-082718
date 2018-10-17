class DogController {
  static init() {
    Adapter.getDogs()
      .then(dogs => dogs.forEach(DogController.displayDog));
    }

  static displayDog(dog) {
    const tableBody = document.querySelector('#table-body')
    const newDog = new Dog(dog);
    tableBody.append(newDog.tableData());
  }

  static refreshDog(obj) {
    let oldDog = document.querySelector(`#dog-${obj.id}`)
    const newDog = new Dog(obj)
    oldDog.innerHTML = newDog.tableData().innerHTML
    DogController.clearForm()
  }

  static async editDogInit(e) {
    let obj = await Adapter.getSingleDog(e.target.dataset.id)
    console.log(obj)
    dogForm.name.value = obj.name
    dogForm.breed.value = obj.breed
    dogForm.sex.value = obj.sex
    dogForm.dataset.id = obj.id
  }

  static editDogSubmit(e) {
    e.preventDefault()
    let data = {name: dogForm.name.value, breed: dogForm.breed.value, sex: dogForm.sex.value, id: dogForm.dataset.id}
    Adapter.patchDog(data)
              .then(DogController.refreshDog)
  }

  static clearForm() {
    dogForm.name.value = ''
    dogForm.breed.value = ''
    dogForm.sex.value = ''
    dogForm.dataset.id = ''
  }
}
