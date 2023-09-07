const test = document.querySelector('#dashboard img');
console.log(test);


changeSvgColor('#sidebar img', 'invert(96%) sepia(47%) saturate(0%) hue-rotate(300deg) brightness(103%) contrast(101%)');
function changeSvgColor(identifier, color) {
     const svgs = document.querySelectorAll(identifier);
     console.log(identifier);
     console.log(svgs);
     
     for (let i = 0; i < svgs.length; i++) {
          svgs[i].style.filter = color;
     }
}