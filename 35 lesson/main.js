let table = document.getElementById('bagua-table');

let selectedTd;

table.onclick = function(event){
  let { target } = event

  console.log(target.parentNode);
  console.log(target, this);

  while(target !== this){
    if(target.tagName  === "TD"){
      // selectedTd = target
      highlight(target)
      return 
    }
    target = target.parentNode 
  }

}

function highlight(node) {
  if (selectedTd) {
    selectedTd.classList.remove('highlight');
  }
  selectedTd = node;
  selectedTd.classList.add('highlight');
}
// let selectedTd;

// table.onclick = function(event) {
//   let target = event.target;

//   while (target != this) {
//     if (target.tagName == 'TD') {
//       highlight(target);
//       return;
//     }
//     target = target.parentNode;
//   }
// }



menu.onclick = function (evt){
  console.log(evt.target.tagName);
  if(evt.target.tagName !=='A') return

  alert(evt.target.innerText)

  evt.preventDefault()
}

function onMousedown(evt){
  console.log('onMouseDown', evt);
}
function onMouseup(evt){
  console.log('onmouseup', evt);
}
function onClick(evt){
  console.log('onclick', evt);
}
function dblClick(evt){
  console.log('dblClick', evt);
}
function onContextmenu(evt){
  console.log('onContextmenu', evt);
}

// shiftKey: Shift
// altKey: Alt (или Opt для Mac)
// ctrlKey: Ctrl
// metaKey: Cmd для Mac
function onClikShift(event){
  console.log(event);
  if(event.ctrlKey || event.metaKey){
    alert('clicked')
  }else{
    alert('hold Ctrl or Cmd')
  }
}