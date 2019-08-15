const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

function dragStart () {
   this.classList.add('hold');

   setTimeout(() => { 
      this.className = 'hidden'
   }, 0);
}

function dragEnd () {
   this.className = 'fill';
}

function dragEnter(e) {
   e.preventDefault();
   this.classList.add('hovered');
}

function dragOver(e) {
   e.preventDefault();  
}

function dragLeave() {
   this.classList.remove('hovered');
}

function dragDrop() {
   this.classList.remove('hovered');
   this.append(fill);
}


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (let empty of empties) { 
   empty.addEventListener('dragover', dragOver);
   empty.addEventListener('dragenter', dragEnter);
   empty.addEventListener('dragleave', dragLeave);
   empty.addEventListener('drop', dragDrop);
}