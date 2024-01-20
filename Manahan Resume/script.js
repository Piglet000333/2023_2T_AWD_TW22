const container = document.querySelector('.container');

const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i'); // Fix the class name here
const darkContainer = document.querySelector('#dark-container');
const darkContainerImg = document.querySelector('#dark-container .home-img img');

darkContainerImg.src = 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.15752-9/414402026_393752306343517_3089673505926652873_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH7itmxtqOLe9PSFmON5s2IeFzQ2t3Ouh14XNDa3c66HQ_KDKXZ01-1MkEwFQQmic51yizMQpWT8BN8GraJWq4t&_nc_ohc=J_CThGDTup4AX-OrcHj&_nc_ht=scontent.fmnl4-4.fna&oh=03_AdT-94TwnZ1wSYvW-a85VWPmKb7xnQtJpgHv7pbzKxf4tQ&oe=65D228B8';

toggleIcons.forEach(toggle => {
  toggle.addEventListener('click', () => {

    toggle.classList.add('disabled');
    setTimeout(() => {
      toggle.classList.remove('disabled');
    }, 1500);
  
    icons.forEach(icon => {
      icon.classList.toggle('bx-moon'); // Toggle the class based on the current state
      icon.classList.toggle('bx-sun');
    });

    container.classList.toggle('active');
    darkContainer.classList.toggle('active');
  });
});
