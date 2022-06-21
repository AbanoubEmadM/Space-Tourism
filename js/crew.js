let crewData = [
    {
      name: "Douglas Hurley",
      images: "../assets/crew/image-douglas-hurley.png",
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      name: "Mark Shuttleworth",
      images:"../assets/crew/image-mark-shuttleworth.png",
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      name: "Victor Glover",
      images: "../assets/crew/image-victor-glover.png",
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      name: "Anousheh Ansari",
      images:  "../assets/crew/image-anousheh-ansari.png",
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
];

let paginations = Array.from(document.querySelectorAll(".paginations li"))
paginations[0].classList.add('active');

paginations.forEach(btn =>{
    btn.onclick = function(){
        paginations.forEach(btn => {
            btn.classList.remove("active")
        })
        this.classList.add("active");
        let index = paginations.indexOf(btn);
        
        let crewDesc = `
        <div>
            <p class="role">${crewData[index].role} </p>
            <p class="name">${crewData[index].name}</p>
            <p class="bio">${crewData[index].bio}</p>
        </div>
        `
        document.getElementById("crew-desc").innerHTML = crewDesc;
        let crewImg = `
            <img src=${crewData[index].images}>
        `
        document.getElementById("crew-img").innerHTML = crewImg;
    }
    let crewDesc = `
    <div>
        <p class="role">${crewData[0].role} </p>
        <p class="name">${crewData[0].name}</p>
        <p class="bio">${crewData[0].bio}</p>
    </div>
    `
    document.getElementById("crew-desc").innerHTML = crewDesc;
    let crewImg = `
        <img src=${crewData[0].images}>
    `
    document.getElementById("crew-img").innerHTML = crewImg;

})
