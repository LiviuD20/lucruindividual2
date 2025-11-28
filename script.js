const albumContainer = document.getElementById('album-container');

// Funcție pentru a genera imagini random cu mașini
function genereazaAlbum() {
    albumContainer.innerHTML = ''; // Curăță albumul vechi
    
    // Generăm 6 carduri noi
    for (let i = 0; i < 6; i++) {
        // Folosim Unsplash Source pentru imagini random cu termenul "car" sau "car parts"
        const randomNum = Math.floor(Math.random() * 1000);
        const imgUrl = `https://source.unsplash.com/600x400/?car,mechanic&sig=${randomNum + i}`;
        
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${imgUrl}" alt="Auto Photo">
            <div class="card-info">
                <h3>Imagine #${i + 1}</h3>
                <p>Categorie: Auto & Piese</p>
            </div>
        `;
        
        albumContainer.appendChild(card);
    }
}

// Generăm un album la încărcarea paginii
window.onload = genereazaAlbum;