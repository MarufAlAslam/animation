
window.addEventListener('scroll',(event) => {
    var sc = $(window).scrollTop()
    console.log(sc)

    
    if(sc>=100 && sc<=390){
        $('.text-center.text-white.fs-120 ').show(200)
        $('.cards').show()
        $('.topcrd').css("height","75vh")
        $('.scrollDown').hide()
        $('.newscrollDown').show(1500)
        $('.counterr h1.fs-165').hide(200)
        $('.img-fluid.leftCircle').hide()
        $('.img-fluid.rightCircle').hide()
        $('.topcrd').css("height","90vh")
    }
    else if(sc>=391){
        $('.topcrd').css('height','100%')
        $('.bottomcrd').hide()
        $('.cards').hide()
        $('.counterr h1.fs-165').show()
        $('.img-fluid.leftCircle').show()
        $('.img-fluid.rightCircle').show()
        $('.anim-wrapper').css("overflow-x","hidden")
        $('.img-fluid.newscrollDown').css("bottom","350px")
    }
    else{
        $('.text-center.text-white.fs-120 ').hide(200)
        $('.cards').hide()
        $('.scrollDown').show(500)
        $('.newscrollDown').hide()
        $('.counterr h1.fs-165').hide(200)
        $('.img-fluid.leftCircle').hide()
        $('.img-fluid.rightCircle').hide()
        $('.topcrd').css("height","75vh")
        
    }
});