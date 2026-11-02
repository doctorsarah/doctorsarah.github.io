function respond() {
    poem = document.getElementById("poem")
    if (document.body.className == "white") {
        document.body.className = "pink";
        poem.className = "white mystery"
        heading.innerHTML = ""
    } else {
        document.body.className = "white"
        poem.className = "pink"
        heading = document.getElementById("heading");
        heading.innerHTML = "<a href='mailto:sgothard@bju.edu'>Email me</a> with questions.";
    }
}

