'use strict'



$('.btn').click(function(){
    $('.box').stop().slideToggle(1000)
})

// part1 end 
// -------------

$('#accordion button').click(function(){
    $('#accordion p').stop().slideUp(500)
    $(this).next().stop().slideToggle(500)
})

// part2 end 
// ---------------- 

$('#tabMenu button').click(function(){
    const ind=$(this).index()
    $('#tabMenu p').stop().slideUp()
    $('#tabMenu p').eq(ind).slideToggle()
})

// part3 end 
// -------------- 