console.log("index js")

window.onload = () => {
    $(".container-left").toggleClass("transition-in-1")
    $(".container-left").css("left", "0")
    let btn = $(".anm8")
    for(let i = 0; i <btn.length; i++){
        const anchor = btn[i];

        anchor.addEventListener("click", e =>{
            e.preventDefault();
            let target = e.target.href;
            let svg = $(".svg")
            console.log(svg[0])
            svg[0].animate({
                right: "-50%"
            }, 500)
            $(".container-left").toggleClass("transition-out-1")
           

            
            setTimeout(() => {
                window.location.href = target;
            }, 400)
        })
       
    }


   

    setTimeout(() => {
       $(".text-left").css("--newWidth", "65%")
    },2000)
}








