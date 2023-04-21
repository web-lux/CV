let userCount = localStorage.getItem('userCountStored') ?? 0;
document.querySelector('#compteur').innerText = userCount;
userCount++;
localStorage.setItem('userCountStored', userCount);
