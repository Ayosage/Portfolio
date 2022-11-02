console.log("projects.js")

window.onload = () => {
    $(".container-right").toggleClass("transition-in-2")
    $(".container-right").css("left", "0")
    let link = $(".btn")
    for(let i = 0; i <link.length; i++){
        const anchor = link[i];

        anchor.addEventListener("click", e =>{
            e.preventDefault();
            let target = e.target.href;
            $(".container-right").toggleClass("transition-out-2")
            setTimeout(() => {
                window.location.href = target;
            }, 400)
        })
       
    }
}
