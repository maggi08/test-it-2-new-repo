// console.log('App loaded');

// console.log('div', div);

// document.querySelector() /* Element */ 
// document.querySelector('#id') // element by id
// document.querySelector('.id') // element by class name
// document.querySelector('div') // element by tag name
// document.querySelector('div > img') // element by tag name
// document.querySelector('li.list-item-1') // 
// document.querySelector('li .list-item-1') // 

// document.querySelectorAll('.list-item')

/*
document.querySelector() 
document.querySelector() 
document.querySelector() 
document.querySelector() 
*/
// <!-- -->

const div = document.createElement('div')
const text = document.createTextNode('Привет класс')



div.id="MainDiv"
div.className="main-div"

div.append(text)





console.log(div);
console.log(text);

document.body.append(div)

let blogs = [
    {
        title: 'title1',
        decription: '<strong>Article</strong> lorem sdalfasdlkjf ;laskd lnasp jnfopda',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        title: 'title2',
        decription: 'description2',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        title: 'title3',
        decription: 'description3',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        title: 'title4',
        decription: 'description4',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        title: 'title5',
        decription: 'description5',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        title: 'title6',
        decription: 'description6',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        title: 'title7',
        decription: 'description7',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        title: 'title8',
        decription: 'description8',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        title: 'title9',
        decription: 'description9',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
    },
    {
        title: 'title10',
        decription: 'description10',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png0'
    },
    {
        title: 'title11',
        decription: 'description11',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png1'
    },
    {
        title: 'title12',
        decription: 'description12',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png2'
    },
    {
        title: 'title13',
        decription: 'description13',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png3'
    },
    {
        title: 'title14',
        decription: 'description14',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png4'
    },
    {
        title: 'title15',
        decription: 'description15',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png5'
    },
    {
        title: 'title16',
        decription: 'description16',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png6'
    },
    {
        title: 'title17',
        decription: 'description17',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png7'
    },
    {
        title: 'title18',
        decription: 'description18',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png8'
    },
    {
        title: 'title19',
        decription: 'description19',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png9'
    },
    {
        title: 'title20',
        decription: 'description20',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png0'
    },
]

// for(let i of blogs){
//     console.log('blog', i);
// }

let blogsContainer = document.querySelector('.blogs-container')
console.log('blogsContainer', blogsContainer);

blogs.forEach((blog,index)=>{
    let blogItem = document.createElement('div')
    blogItem.className = 'blog-item' + ( index%2 === 0 ? ' blog-even' : ' blog-odd')
    // console.log(blogItem.className);
    // console.log(blogItem.classList);
    // if( blogItem.classList.contains('blog-even')){
    //  blogItem.classList.add('blog-custom-class')
    //  blogItem.classList.remove('blog-even')
    // }
    blogItem.className  = 'blablabla'

    let img = document.createElement('img')
    img.className = 'blog-img'
    img.src = blog.img

    let title = document.createElement('p')
    title.className = 'blog-title'
    title.textContent = blog.title

    let description = document.createElement('div')
    description.className = 'blog-description'
    description.innerHTML = blog.decription

    // blogItem.append(img)
    // blogItem.append(title)
    // blogItem.append(description)
    blogItem.append(...[img, title, description])
    blogItem.append(img, title, description)
    blogsContainer.append(blogItem)

    console.log('blogItem', blogItem);
})