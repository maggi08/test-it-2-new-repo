

fetch('')


// Backend
/* https://google.com */
/* фронтенд может получить список пользователей через урл /api/users */
// https://domain-of-your-site.com/api/users

/* фронтенд может получить список Постов через урл /api/posts */


const BASE_URL = 'https://reqres.in/api/' // 'https://reqres.in/api/users' 'https://reqres.in/api/posts' ... 
let currentPage = 1
// https://reqres.in/api/users?per_page=2&page=4
async function fetchUsers(page){
  let params = {
    per_page: 2,
    page
  }

  const response = await fetch(`${BASE_URL}users?${new URLSearchParams(params)}`, {
    method: 'GET',
  })
  const results = await response.json()
  return results
}

async function fetchUser(id){
  console.log('fetchUser', id);
  let response = await fetch(`${BASE_URL}users/${id}`)
  let results = await response.text()
  alert(results)
}

function paintUsers(users){
  const usersContainer = document.getElementById('usersContainer')

  users.forEach(user => {
      let userCont = document.createElement('div')
      userCont.className = 'user'
      userCont.onclick = () => fetchUser(user.id)

      let userAva = document.createElement('img')
      userAva.className = 'user-avatar'
      userAva.src = user.avatar

      let userName = document.createElement('p')
      userName.className = 'user-name'
      userName.innerText = user.first_name + ' ' + user.last_name 
      
      userCont.append(userAva)
      userCont.append(userName)

      usersContainer.append(userCont)
    });
}

function loadUsers(page){
  fetchUsers(page)
    .then(res=>{
      console.log(page, res);
      currentPage = res.page
      paintUsers(res.data)
    })
}

function loadMore(){
  console.log('loadMore', currentPage);
  loadUsers(currentPage + 1)
}

loadUsers(currentPage)


async function createUser(){
  let response = await fetch(`${BASE_URL}users`, {
    method: 'POST',
    body: {
      name: 'Aidos',
      job: 'Senior Frontend Developer'
    }
  })
  let results = await response.json()

  console.log('created user Aidos', results)

  // fetchUser(results.id).then(res=>{
  //   return res.json()
  // })
  fetchUser(results.id)
    .then(res=>console.log('fetched user', results.id, res))
    .catch(err=>{
      alert(err.message)
    })

}

createUser()







// fetch(`${BASE_URL}users`)
//   .then(res=>{
//     console.log(res);
//     return res.json() // res.text() res.formData() res.arrayBuffer()
//   })
//   .then((res)=>{
//     res.data.forEach(user => {
//       let userCont = document.createElement('div')
//       userCont.className = 'user'
//       userCont.innerText = user.first_name + ' ' + user.last_name 
//       usersContainer.append(userCont)
//     });
//   })
