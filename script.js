const albumContainer = document.getElementById('album-container');

// Listă cu link-uri directe către imagini cu mașini și piese
const listaImagini = [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80", // Mașină sport
    "https://images.unsplash.com/photo-1486262715619-01b8c2c97691?auto=format&fit=crop&w=600&q=80", // Piese auto
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80", // Ferrari Roșu
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80", // Chevrolet Clasic
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80", // Mustang
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80", // Motor / Mecanică
    "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=600&q=80", // Noapte
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80"  // Modern
];

function genereazaAlbum() {
    albumContainer.innerHTML = ''; // Curăță albumul vechi
    
    // Amestecăm lista de imagini ca să pară aleatoriu
    const imaginiAmestecate = listaImagini.sort(() => 0.5 - Math.random());

    // Luăm primele 6 imagini din lista amestecată
    const imaginiSelectate = imaginiAmestecate.slice(0, 6);

    imaginiSelectate.forEach((imgUrl, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${imgUrl}" alt="Auto Photo">
            <div class="card-info">
                <h3>Imagine #${index + 1}</h3>
                <p>Categorie: Auto & Piese</p>
            </div>
        `;
        
        albumContainer.appendChild(card);
    });
}

// Generăm un album la încărcarea paginii
window.onload = genereazaAlbum;