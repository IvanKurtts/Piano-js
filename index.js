let notes = [
'A', 'W', 'S', 'E', 'D', 'F', 'T', 'G', 'Y', 'H', 'U', 'J', 'K', 'O', 'L', 'P', ';',
]

function createKeyboard() {
  for (let note in notes) {
   document.body.insertAdjacentHTML(
'beforeend', 
`<button class="b${notes.indexOf(notes[note])+1}">
<audio id=n${notes.indexOf(notes[note])+1}>
<source src=sounds/${notes.indexOf(notes[note])+1}.wav>
</audio></button>`
   );
  }
}

function buttonColor() {
document.addEventListener("DOMContentLoaded", function() {
  for (let note in notes) {
  let cN = notes.indexOf(notes[note])+1;
  if (cN == 2 || cN == 4 || cN == 7 || cN == 9 || cN == 11|| cN == 14 || cN == 16) {
  document.querySelector(`.b${cN}`).classList.add("black");
  } else {
  document.querySelector(`.b${cN}`).classList.add("white");
  }
  }
});
}

function keySound() {
  for (let note in notes) {
    document.addEventListener ('keydown', function (event) {
      if (event.code == `Key${notes[note]}`) {
        let button = document.querySelector(`.b${notes.indexOf(notes[note])+1}`);
        button.classList.add('active');
        setTimeout(function(){button.classList.remove('active')}, 200);
      document.getElementById(`n${notes.indexOf(notes[note])+1}`).currentTime = 0;
      document.getElementById(`n${notes.indexOf(notes[note])+1}`).play();
    }
      if (event.code == 'Semicolon') {
        let lastButton = document.querySelector(`.b${notes.length}`);
        lastButton.classList.add('active');
        setTimeout(function(){lastButton.classList.remove('active')}, 200);
      document.getElementById(`n${notes.length}`).currentTime = 0;
      document.getElementById(`n${notes.length}`).play();
      }
    });
  }
}

function clickSound () {
  for (let note in notes) {
  let button = document.querySelector(`.b${notes.indexOf(notes[note])+1}`);
  button.addEventListener ('pointerdown', function() {
    button.classList.add('active');
    setTimeout(function(){button.classList.remove('active')}, 200);
    document.getElementById(`n${notes.indexOf(notes[note])+1}`).currentTime = 0;
    document.getElementById(`n${notes.indexOf(notes[note])+1}`).play();
  });
  }
}
