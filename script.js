const button = document.getElementById('showFlowers');

button.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(flower);
        flower.style.display = 'block';
    }
});