// 1. Динамічна зміна фону при натисканні (Практична №4)
const ctaBtn = document.getElementById('cta-btn');

ctaBtn.addEventListener('click', () => {
    const movies = ["Інтерстеллар", "Матриця", "Темний лицар", "Леон"];
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    
    // Спливаюче вікно (Alert)
    alert(`Рекомендуємо подивитись сьогодні: ${randomMovie}`);
});

let isGold = false; 

document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'а') { 
        isGold = !isGold; 
        
        const logo = document.querySelector('.logo');
        
        if (isGold) {
            logo.style.color = 'gold';
        } else {
            logo.style.color = ''; 
        }
        
        console.log("Стан золотого логотипу:", isGold);
    }
});