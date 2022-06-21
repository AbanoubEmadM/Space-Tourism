const destData =  [
    {
      name:"Moon",
      image:"../assets/destination/image-moon.png",
      desc:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance:"384,400 km",
      travel:"3 days"
    },
  {
      name:"Mars",
      image:"../assets/destination/image-mars.png",
      desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
           travel: "9 months"
    },
  {
      name: "Europa",
      image: "../assets/destination/image-europa.png",
          desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil. km",
            travel: "3 years"
  
    },
  {
       name: "Titan",
       image: "../assets/destination/image-titan.png",
        desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years"
    }
]
destData.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML += item.name;
    document.body.append(li)
    document.getElementById("planet-names").append(li)
})
let allNames = Array.from(document.querySelectorAll("#planet-names li"));
allNames[0].classList.add("active")

allNames.forEach(li => {
    li.onclick = function(){
        allNames.forEach(li => {
            li.classList.remove("active")
        })
        li.classList.add("active")
        let index = allNames.indexOf(li);
        let planetContent = `
        <div class="img-desc col-lg-6">
            <p>Pick Your Destination</p>
            <div class="planet-img">
                 <img src=${destData[index].image}>
            </div>
        </div>
            <div class="planet col-lg-6">
                <p class="planet-name">${destData[index].name}</p>
                <p class="planet-desc">${destData[index].desc}</p>
                <hr>
                <div class="distance">
                    <p class="planet-distance">${destData[index].distance}</p>
                    <p class="planet-travel">${destData[index].travel}</p>
                </div>
            </div>
        `
        document.getElementById("planet-content").innerHTML = planetContent;
    }
    let planetContent = `
    <div class="img-desc col-lg-6">
        <p>Pick Your Destination</p>
        <div class="planet-img">
             <img src=${destData[0].image}>
        </div>
    </div>
        <div class="planet col-lg-6">
            <p class="planet-name">${destData[0].name}</p>
            <p class="planet-desc">${destData[0].desc}</p>
            <hr>
            <div class="distance">
                <p class="planet-distance">${destData[0].distance}</p>
                <p class="planet-travel">${destData[0].travel}</p>
            </div>
        </div>
    `
    document.getElementById("planet-content").innerHTML = planetContent;
})