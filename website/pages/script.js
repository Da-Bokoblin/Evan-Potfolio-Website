class project {
    constructor(name, image, description, link) {
        this.name = name
        this.description = description
        this.image = image
        this.link = link
    }
}


const projects = [
    new project("a", "../assets/favicon.PNG", "b", "index.html"), 
    new project("a", "../assets/favicon.PNG", "b", "index.html")
]

function projectFormat(arg, arg2) {
    let a = `
    <div class="projectFormat">
    <br>
    <h2>${arg2}</h2>
    <img src="${arg.image}"> 
    <br>
    <h3>${arg.name}</h3>
    <br>
    <p>${arg.description}</p>
    <div>
    `
    return a
}

let featuredNum = Math.floor(Math.random()*projects.length)
if (document.getElementById("featured") !== null) {
    document.getElementById("featured").innerHTML = projectFormat(projects[featuredNum], "Featured Project")
}
let i = 0
if (document.getElementById("projectsDiv") !== null) {
    // document.getElementById("featured").innerHTML = projectFormat(projects[featuredNum])
    while (i < projects.length) {
        console.log("ghdfj")
        document.getElementById("projectsDiv").innerHTML+= projectFormat(projects[i], "")
        i++
    }
}