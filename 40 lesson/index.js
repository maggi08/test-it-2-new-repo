// console.log('formElem', formElem);

let form = document.getElementById('formElem')
console.log('form', form);

// function onSubmitForm(event){
//   console.log('event', event);
// }

form.onsubmit = async function (event) {
  console.log('event', event);
  event.preventDefault()

  try {

    let response = await fetch('/put/k/nashemu/api', {
      method: 'POST',
      body: new FormData(form) // content-type: multipart/form-data
      // body: {
      //   name: 'Jhon',
      //   surenmae: 'Smith',
      //   email: 'test@gmail.com'
      // } // content-type: application/json
    })

    let res = await response.json()
    console.log(res);
  }
  catch(err){
    console.log('err', err.message);
  }
}