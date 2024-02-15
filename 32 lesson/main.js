// let btn = document.querySelector('#btn-confirm')
// let btnCancel = document.querySelector('.btn-cancel')
// let div = document.querySelector('.hello-msg')

// btn.addEventListener('click', () => {
//     console.log('btn', btn);
//     console.log('div', div);
//     div.style.display = 'block'
// })


// function onClickCancel(){
//     console.log('onClickCancel');
//     div.style.display = 'none'
// }
// btnCancel.addEventListener('click', onClickCancel)




// elem.hasAttribute(name) – проверяет наличие атрибута.
// elem.getAttribute(name) – получает значение атрибута.
// elem.setAttribute(name, value) – устанавливает значение атрибута.
// elem.removeAttribute(name) – удаляет атрибут.

// const myInput = document.querySelector('input')
// console.log(myInput.value);
// console.log(myInput.placeholder);
// console.log(myInput.type);
// console.log(myInput.id);
// console.log(myInput.hasAttribute('required'));
// console.log(myInput.setAttribute('required', true));
// console.log(myInput.getAttribute('placeholder'));
// console.log(myInput.removeAttribute('placeholder'));
// myInput.type= 'password'

// let btn = document.querySelector('#show-passsword')
// let btnCancel = document.querySelector('.btn-cancel')
// btn.addEventListener('click', () => {
//     myInput.setAttribute('type', 'text')
// })
// btnCancel.addEventListener('click', () => {
//     myInput.setAttribute('type', 'password')
// })



// document.createElement(tag) – создаёт элемент с заданным тегом,
// document.createTextNode(value) – создаёт текстовый узел (редко используется),
// elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.

// node.append(...nodes or strings) – вставляет в node в конец,
// node.prepend(...nodes or strings) – вставляет в node в начало,
// node.before(...nodes or strings) – вставляет прямо перед node,
// node.after(...nodes or strings) – вставляет сразу после node,
// node.replaceWith(...nodes or strings) – заменяет node.
// node.remove() – удаляет node.

// let ul = document.querySelector('ul')
// ul.append('Appended')
// ul.append('Appended2')
// ul.prepend('Prepended')
// ul.before('Before')
// ul.after('After')
// let ol = document.createElement('ol')
// console.log(ol);
// ol.innerHTML = '<li>1</li><li>2</li><li>3</li>'
// console.log(ol);
// ul.replaceWith(ol)
// ol.remove()

// "beforebegin" – вставить html непосредственно перед elem,
// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,
// "afterend" – вставить html непосредственно после elem.
// myDiv.insertAdjacentHTML('afterbegin', '<h1>JS is the best</h1>')


// elem.classList.add/remove("class") – добавить/удалить класс.
// elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
// elem.classList.contains("class") – проверка наличия класса, возвращает true/false.

// Element.classList
// Element.className

// let btn = document.querySelector('.btn-cancel')
// console.log(btn.className);
// console.log(btn.classList);
// setTimeout(()=>{btn.classList.add('btn-success')},1000)
// setTimeout(()=>{btn.classList.remove('btn-success')},2000)

// setInterval(()=>{
//     // if(btn.classList.contains('btn-success')){
//     //     btn.classList.remove('btn-success')
//     // }else btn.classList.add('btn-success')
//     btn.classList.toggle('btn-success')
// }, 1000)

let btn = document.querySelector('button')


setInterval(()=>{
    let styles = getComputedStyle(btn)
    let width = styles.width
    let height = styles.height
    // console.log(btn.style.width, width);
    // console.log(height);
    btn.style.width = (+width.replace('px', '') + 10 ) + 'px'
    btn.style.height = (+height.replace('px', '') + 10 ) + 'px'



// console.log('styles', styles.display);
// console.log('styles', styles.color);
// console.log('styles', styles.background);
// console.log('styles', styles.borderColor);
// console.log('styles', styles.fontSize);
}, 1000)