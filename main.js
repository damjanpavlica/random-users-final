fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(podaci => prikaziPodatke(podaci))


function prikaziPodatke(korisnici) {
    const okvir = document.getElementById('okvir')
    let sablon = ``

    for (let i = 0; i < korisnici.results.length; i++) {
        const user = korisnici.results[i];
    
        sablon += `
        <div class="student">
            <h2 class="veliko-slovo">${user.name.first} ${user.name.last}</h2>
            <p class="veliko-slovo">${user.location.city}, ${user.location.state}</p>
            <img src="${user.picture.large}" alt="${user.name.first}">
            <p>&#9742; <a href="tel:${user.phone}">${user.phone}</a></p>
            <p>✉ ${user.email}</p>
            <p>Godište: ${user.dob.date.substring(0, 4)}.</p>
            <p>Članski staž: ${user.registered.age} god.</p>
        </div>
        `
    }
    okvir.innerHTML = sablon    
}
