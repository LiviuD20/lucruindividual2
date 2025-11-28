const albumContainer = document.getElementById('album-container');

// Listă extinsă de 12 link-uri directe stabile
const listaImagini = [
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80", // Porsche
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80", // Mustang
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80", // Chevy Classic
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80", // Ferrari
    "https://images.unsplash.com/photo-1486262715619-01b8c2c97691?auto=format&fit=crop&w=600&q=80", // Engine Parts
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=600&q=80", // Modern Car
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=600&q=80", // Dashboard
    "https://images.unsplash.com/photo-1597404294361-9cdd44403254?auto=format&fit=crop&w=600&q=80", // Wheel
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80", // Mechanic
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80", // Supercar
    "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=600&q=80", // Night drive
    "https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&w=600&q=80"  // Neon Car
];

// Imagine de rezervă (dacă una din listă nu merge)
const backupImage = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80";

function genereazaAlbum() {
    albumContainer.innerHTML = ''; 
    
    // Amestecăm lista
    const imaginiAmestecate = listaImagini.sort(() => 0.5 - Math.random());

    // Afișăm TOATE cele 12 imagini (sau mai puține dacă vrei, modifică 12 cu 6)
    const limita = 12; 
    
    for(let i=0; i<limita; i++) {
        // Dacă s-au terminat imaginile din listă, ieșim din buclă
        if (!imaginiAmestecate[i]) break;

        const imgUrl = imaginiAmestecate[i];
        
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Adăugăm onerror="this.src='...'" pentru a repara imaginile rupte automat
        card.innerHTML = `
            <div class="img-wrapper">
                <img src="${imgUrl}" 
                     alt="Auto Photo" 
                     onerror="this.onerror=null;this.src='${backupImage}';">
            </div>
            <div class="card-info">
                <h3>Auto Card #${i + 1}</h3>
                <p>Detalii performanță</p>
            </div>
        `;
        
        albumContainer.appendChild(card);
    }
}

window.onload = genereazaAlbum;