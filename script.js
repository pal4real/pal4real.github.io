const text = "An artistic and calculated person. Externally rational and internally full of emotion. 5+ years being a musician. In the path to be a computer engineer.";
const aboutText = document.getElementById("about-text");
let i = 0;
function Typewriter() {
    if(i < text.length) {
        aboutText.innerHTML += text.charAt(i);
        i++;
        setTimeout(Typewriter, 50);
    }
}
Typewriter();


function copyEmail() {
    const user = "nauvalradithya36";
    const domain = "gmail.com";

    const email = user + '@' + domain;

    let tempBox = document.createElement("textarea");
    tempBox.value = email;
    document.body.appendChild(tempBox);
    
    tempBox.select();
    document.execCommand("copy");
    tempBox.remove();

    const btn = document.getElementById("email-btn");
    btn.innerText = "copied.";

    setTimeout(() => {
        btn.innerText = "Email";
    }, 1500);
}



const githubLink = document.getElementById("github-link");
if (githubLink) {
    githubLink.href = "https://git" + "hub.com/pal4real";
}

const linkedinLink = document.getElementById("linkedin-link");
if (linkedinLink) {
    linkedinLink.href = "https://www.linked" + "in.com/in/nauval-radithya-3a8512324";
}

const bandcampLink = document.getElementById("bandcamp-link");
if (bandcampLink) {
    bandcampLink.href = "https://thegabuts.bandcamp.com";
}