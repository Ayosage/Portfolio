
var body = $("body");
var container = $(".container");
var window = $("window");
console.log("journey.js")
function checkBoxes(){
    var boxes = document.querySelectorAll(".content");
    const triggerBottom = window.innerHeight * 0.8;
    
    boxes.forEach( box => {


        var boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            $(box).addClass("center-j")
            if($(box).is(":last-child")){
                container.append("<div> Content </div>")
                container.children().last().addClass("content")
                
            }
        } else{
            $(box).removeClass("center-j")
        }
    });
}

$(window).on("scroll", function(){
    checkBoxes()
    
})