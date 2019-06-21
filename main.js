function bChanger() {
    if(this.scrollY > this.innerHeight / 2) {
        document.body.classList.add("b-active");
    } else {
        document.body.classList.remove("b-active");
    }
}

window.addEventListener("scroll", bChanger);
