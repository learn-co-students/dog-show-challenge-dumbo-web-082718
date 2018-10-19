document.addEventListener('DOMContentLoaded', async () => {
  const tableBody = document.querySelector('#table-body');
  const editForm = document.querySelector("#dog-form");
  const submitBtn = editForm.querySelector("#submit-btn");
  //create
  //read
  let dogs =  await getDogs();
  dogs.forEach(renderDogs);
  //update
  let editBtn = document.querySelectorAll(".edit");
  editBtn.forEach(addClickEvent);
  editForm.addEventListener("submit", async function(event){
    event.preventDefault();
    let dogId = submitBtn.dataset.id;
    let finished = await editDogDatabase(dogId)
    tableBody.innerHTML = "";
    getDogs()
      .then(r => r.forEach(renderDogs))

  });

  //destroy







  // Read Logic
  function getDogs(){
    return fetch('http://localhost:3000/dogs')
    .then(resp => resp.json());
  }
  function renderDogs(dog){
    tableBody.innerHTML +=
    `<tr>
    <td class="name">${dog.name}</td>
    <td class="breed">${dog.breed}</td>
    <td class="sex">${dog.sex}</td>
    <td><button data-id=${dog.id} class="edit">Edit</button></td>
    </tr>`
  }
  //Update Logic
  function addClickEvent(button){
    button.addEventListener('click', editDog)
  }

  function editDog(event){
    const id = event.target.dataset.id;
    const row = event.target.parentElement.parentElement;
    const name = row.querySelector(".name").innerHTML;
    const breed = row.querySelector(".breed").innerHTML;
    const sex = row.querySelector(".sex").innerHTML;
    editForm.name.value = name;
    editForm.breed.value = breed;
    editForm.sex.value = sex;
    submitBtn.dataset.id= id;
  }

  function editDogDatabase(id){
    options = {
      method: "PATCH",
      body: JSON.stringify({
        name:editForm.name.value,
        breed:editForm.breed.value,
        sex:editForm.sex.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    return fetch(`http://localhost:3000/dogs/${id}`, options)
      .then(resp => resp.json())
  }


})
