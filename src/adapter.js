class Adapter {
  static getDogs() {
    return fetch('http://localhost:3000/dogs')
      .then(r => r.json())
  }

  static getSingleDog(id) {
    return fetch(`http://localhost:3000/dogs/${id}`)
      .then(r => r.json())
  }

  static patchDog(obj) {
    let data = {name: obj.name, breed: obj.breed, sex: obj.sex}
    return fetch(`http://localhost:3000/dogs/${obj.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(r => r.json())
  }
}
