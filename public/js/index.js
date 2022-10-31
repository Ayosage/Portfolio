console.log("index js")

window.onload = () => {
    $(".container-left").toggleClass("transition-in-1")
    $(".container-left").css("left", "0")
    let link = $("a")
    for(let i = 0; i <link.length; i++){
        const anchor = link[i];

        anchor.addEventListener("click", e =>{
            e.preventDefault();
            let target = e.target.href;
            $(".container-left").toggleClass("transition-out-1")
            setTimeout(() => {
                window.location.href = target;
            }, 900)
        })
       
    }
}






