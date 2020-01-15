$(document).ready(function () {

let fullscreen = false;
    /*update keyboard appearance
    according to dm is speaking or not.
    


    player-can-type = false;

    listen for green keypress

    */


   let dmAgCainnt = true;
   let justListen = true;
let deirDM = [
    `
    "Do what is beyond your strength even should you fail sometimes."
    <br/><h3>Charles Stewart Parnell</h3><br/>`
    ,
    
    // `According to <a href="https://storyarchaeology.com/" style="color:orangered;">this</a> <br/>the "Irish" are "Brits" who absorbed Celtic culture;
    // <br>And the "Brits" are Celts who absorbed Anglo-Saxon Culture.`,
    
    `450 million years ago:<br/>The Island of Ireland was formed when 150 vertical kilometers of "Lorentia"; <br/><img id="avalonian" src="./images/backgrounds/fainne_1.png" style="height:132px; margin-left:90px;">`,
    `
    Sailed o'er the asthenosphere and collided with a fragment of the Avalonian landmass.<br/><div id="sea-waves"><img src="./images/tonnta1.gif"style="height:128px; width:128px"><img src="./images/tonnta3.gif"style="height:128px; width:128px"><img src="./images/tonnta1.gif"style="height:128px; width:128px"><img src="./images/tonnta2.gif" style="height:128px; width:128px"><img src="./images/tonnta1.gif" style="height:128px; width:128px"></div>
    `,
    
    `An eon passed before the "legendary cycle" of Gaelic mythology began.`,
    
    `<img src="./images/g.png">    `,
    
    `...`,
    
    // `The difference between an enegmatic arrowhead, and 'saiġead', is kinetic war broght to the eye of a king...`
]
let say = 0;
let sayBanba = 3;
let sayThis = 100;
let saidEnough = 4;
let keyPressedInDMmode;
let saySea= 2;
let sayParnell = 0;
   if(dmAgCainnt){

    // $('#output').fadeOut();
    if(justListen){
    $('.btn').addClass('most-btns-during-dm-mode');
    $('#saighead-deas').addClass('special-btns-during-dm-mode');
    
}
    $('.btn').on('click', function(){
		keyPressedInDMmode = (this.innerHTML);
       
        if(keyPressedInDMmode === '<i class="fa fa-arrow-right" aria-hidden="true"></i>'){
            say++;
            
            render();     
            setTimeout(function () {
                $('#saighead-deas').removeClass();
                $('#saighead-deas').addClass('btn');
                $('#saighead-deas').addClass('special-btns-during-dm-mode');
                $('#saighead-deas').css('color','rgb(73, 206, 33)');
                // $('#saighead-deas').addClass('btn-outline-dark');
            },1000);
        }
  
         else if(keyPressedInDMmode.text='b'){
            if(say === sayBanba){
                // alert('b');

                $('#keyboard-container').fadeOut();
                $('#keyboard-container').fadeOut();
                $('#output').fadeOut();
                $('.dm').fadeOut();
        $(document).fullScreen(true);

            }  
            
        }  
        
        if(say === sayThis){
            $('#t').addClass('special-btns-during-dm-mode');
        
            $('#t').on('click', function(){
                window.location.href = "https://storyarchaeology.com/";
        }
        )
        
}
})


// Listen for orientation changes
window.addEventListener("orientationchange", function() {
	// Announce the new orientation number
    console.log(screen.orientation);
    render();
}, false);
render = () => {
    console.log(say)

    if(say === 0){

	
        $('.special-btns-during-dm-mode').css('opacity','1')
    }
    if(say === sayParnell){
        $('.dm').css('background-image','url(./images/0.png)');
        $('.dm-says').css('color','gray');
        $('.dm-says').css('padding-top','2%');


        $('.dm-says').fadeIn(3000);
        // alert(say);
    }
    if(say===1){ //450 million years ago
        // alert("hi there")
    
        $('#output').css('top','-30%');
        $('.dm-says').css('padding-top','9%');
    

    
    }
    if(say===2){ //sailed oer the asthenosphereS
        // alert("hi there")
    
        $('#output').css('top','-30%');
        $('.dm-says').css('margin-top','16%');
        $('.dm-says').css('padding-top','135%');
 
    }
    if(say === sayBanba){
        $('#b').addClass('special-btns-during-dm-mode');
        $('#b').text('Origins...');
        $('#b').css('opacity','1');
        $('#b').css('z-index','10000');
        
        $('.dm').css('background-image','url(./images/3BG.png');
        $('.dm-says').css('color','white');
        // $('.dm-says').animate({color:'white'},500);

    // alert('say banba')
    }
    if(say === sayThis){
        $('#t').addClass('special-btns-during-dm-mode');
        // $('.dm').css('background-image','url(./images/2BG.png');
        $('.dm-says').css('color', 'gainsboro');
        // check mobile orientation
    
        if(window.innerHeight > window.innerWidth){
            // alert('portrait')
            $('.dm-says').css('margin-top', '-9%');
                  
        }
        else if(window.innerWidth > window.innerHeight){
            // alert('landscape')
            $('.dm-says').css('margin-top', '-7%');
            console.log('should be -7%')
        }
    }
    if(say === saySea){
        $('.dm').css('background-image','url(./images/bgWaves.png)');
   
        if(window.innerHeight > window.innerWidth){
            // alert('portrait')
            $('.sea-waves').css('margin-top', '-2%');
                  
        }

    }
    if (say != sayBanba && say  != sayParnell && say  != saySea && say  != sayThis && say  != 1){
        $('#b').removeClass('special-btns-during-dm-mode');
        $('#t').removeClass('special-btns-during-dm-mode');
        // $('.dm').css('background-image','url(./images/2BG.png)');
        $('.dm-says').css('color','gainsboro');
        $('.dm-says').css('margin-top','0%');
        // $('.dm-says').css('color','gray');
        
    }

    $('.dm-says').html(deirDM[say]);

    if (say === saidEnough){
            $('.dm').fadeOut();
            $('#hold-frame').fadeOut();
            // $('#tall-order').fadeIn();        
            $('#keyboard-container').fadeOut()
            // $('.cubes').fadeTo(4000, 0);

            location.replace('https://macribo.github.io/tall-order/public/index.html')

    }
/*Start game mode


            $('.btn').removeClass('most-btns-during-dm-mode')
start bringing in tall order resources 

*/


//
}
   };
   render();            // alert(keyPressedInDMmode);

});
