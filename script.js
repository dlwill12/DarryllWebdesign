alert("This is my personal website")

const toggleBtn = document.getElementById('toggle-btn');

let isToggled = false;

toggleBtn.addEventListener('click', () => {
  isToggled = !isToggled;
  
  if (isToggled) {
    // do something when button is toggled on
    console.log('Button is toggled on');
  } else {
    // do something when button is toggled off
    console.log('Button is toggled off');
  }
});