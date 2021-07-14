$('#myButton').click(function() {
    $.scrollTo($('#myDiv'), 1000);
 });


 window.addEventListener('scroll',(event) => {
    
 })

 $('.allContents').scroll(function(){
    var sc = $('.allContents').scrollTop()
    console.log(sc)

    if(sc>=10 && sc<=479){
        $('.scrollDown').hide()
        $('.newscrollDown').hide()
    }
    else if(sc>=180 && sc<=1100){
        $('.cards').show(200)
        $('h1.fs-120').show(400)
        $('.counterr h1.fs-165').hide(200)
        $('.img-fluid.leftCircle').hide()
        $('.img-fluid.rightCircle').hide()
        $('.newscrollDown').show()
        $('.scrollDown').hide()
        // $('html, body').animate({
        //     scrollTop: $(".section2").offset().top
        // });
        // $('.section1').hide(100)
        // $('.section2').show(100)
    }
    // else if(sc>=600){
    //     // $('html, body').animate({
    //     //     scrollTop: $(".section3").offset().top
    //     // });
    // }
    else if(sc>=1100){
        $('.img-fluid.leftCircle').show()
        $('.img-fluid.rightCircle').show()
        $('.counterr h1.fs-165').show()
        $('.newscrollDown').show()
        $('.scrollDown').hide()
    }
    else{
        $('.cards').hide(200)
        $('h1.fs-120').hide(200)
        $('.counterr h1.fs-165').hide(200)
        $('.img-fluid.leftCircle').hide()
        $('.img-fluid.rightCircle').hide()
        $('.scrollDown').show()
        $('.newscrollDown').hide()
    }
 })