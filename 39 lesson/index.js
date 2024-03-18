// Network requests


let loader = document.getElementById('loader')
function endLoading(){
  loader.style.display = 'none'
}
function startLoading(){
  loader.style.display = 'block'
}

let url = 'https://jsonplaceholder.typicode.com/photos'

// startLoading()
// fetch(url)
//   .then((res)=>{
//     return res.json()
//   })
//   .then(res=>{
//     paintImgs(res)
//   })
//   .finally(()=>{
//     endLoading()
//   })

function paintImgs(photos){

  let photosContainer = document.getElementById('photos')
  console.log(photosContainer);

  photos.forEach(p => {
    let img = document.createElement('img')
    img.src = p.url
    img.className = 'photo'
    photosContainer.append(img)
    // console.log(img);
  });
}


async function fetchPhotos(){
  startLoading()
  let response = await fetch(url)
  let photos = await response.json()

  console.log('photos',  typeof JSON.stringify(photos));
  paintImgs(photos)

  endLoading()
}

fetchPhotos()


// Network requests
// mehthods: 
  // GET - для получения каких то данных
  // POST - для отправки/создания каких то данных
  // PUT - для измения каких то данных
  // PATCH - для частичного измения каких то данных
  // DELETE - для удаления каких то данных
// 