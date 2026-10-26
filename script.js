const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const nearBtn = document.getElementById('nearBtn');
const surpriseBtn = document.getElementById('surpriseBtn');
const loginBtn = document.getElementById('loginBtn');
const menuBtn = document.getElementById('menuBtn');
 
searchBtn.addEventListener('click', () => {
    const termo = searchInput.value.trim();
    if (termo === "") {
        alert("Por favor, digite o que você está com vontade de comer!");
        searchInput.focus();
        return;
    }
    alert(`Buscando por: "${termo}"...`);
});
 
nearBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        alert("Solicitando sua localização...");
        navigator.geolocation.getCurrentPosition(
            (position) => {
                alert(`Localização obtida! Lat: ${position.coords.latitude.toFixed(2)}, Lng: ${position.coords.longitude.toFixed(2)}`);
            },
            () => { alert("Não foi possível obter sua localização."); }
        );
    } else {
        alert("Geolocalização não suportada.");
    }
});
 
surpriseBtn.addEventListener('click', () => {
    alert("🎲 Sorteando 5 opções incríveis...");
});
 
loginBtn.addEventListener('click', () => {
    alert("Abrindo login com o Google...");
});
 
menuBtn.addEventListener('click', () => {
    alert("Abrindo menu lateral / perfil...");
});
