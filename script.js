// hộp quả

const container = document.getElementById('container');

function createFallingGift() {
  const gift = document.createElement('div');
  gift.classList.add('gift');

 
  const left = Math.random() * window.innerWidth; 
  const size = Math.random() * 30 + 20; 


  const duration = 3;

 
  gift.style.left = `${left}px`;
  gift.style.width = `${size}px`;
  gift.style.height = `${size}px`;
  gift.style.animationDuration = `${duration}s`;

 
  container.appendChild(gift);

  
  setTimeout(() => {
    gift.remove();
  }, duration * 1000);
}


const interval = setInterval(createFallingGift, 200); 

setTimeout(() => {
  clearInterval(interval); 
}, 3000);


