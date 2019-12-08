$(document).ready(function () {


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
    <br/><h4>Charles Stewart Parnell</h4><br/>`
    ,
    
    `According to <a href="https://storyarchaeology.com/" style="color:green;">this</a> the Irish are "Brits" who absorbed Celtic culture;
    <br>And the "Brits" are Celts who absorbed Anglo-Saxon Culture.`,
    
    `450 million years ago:<br/>The Island of Ireland was formed when 150 vertical kilometers of "Lorentia"; <br/><img id="avalonian "src="./images/backgrounds/fainne_1.png" style="height:132px; margin-left:90px;">`,
    `
    Sailed o'er the asthenosphere and collided with a fragment of the Avalonian landmass.<div id="sea-waves"><img src="./images/tonnta1.gif"style="height:128px; width:128px"><img src="./images/tonnta3.gif"style="height:128px; width:128px"><img src="./images/tonnta1.gif"style="height:128px; width:128px"><img src="./images/tonnta1.gif" style="height:128px; width:128px"><img src="./images/tonnta1.gif" style="height:128px; width:128px"><img src="./images/tonnta3.gif" style="height:128px; width:128px"></div>
    `,
    
    `Ages flew through we know not what until the era described in Gaelic mythology.<br/><img src="./images/e.png" style="height:132px;"><div>`,
    
    `...
    `,
    
    `...`,
    
    // `The difference between an enegmatic arrowhead, and 'saiġead', is kinetic war broght to the eye of a king...`
]
let say = 0;
let sayBanba = 4;
let sayThis = 1;
let saidEnough = 5;
let keyPressedInDMmode;
let saySea= 3;
let sayParnell = 0;
   if(dmAgCainnt){

    // $('#output').fadeOut();
    if(justListen){
    $('.btn').addClass('most-btns-during-dm-mode');
    $('#saighead-deas').addClass('special-btns-during-dm-mode');
    
}
    $('.btn').on('touchstart', function(){
		keyPressedInDMmode = (this.innerHTML);
       
        if(keyPressedInDMmode === '<img src="./images/arrow.png">'){
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

            }  
            
        }  
        
        if(say === sayThis){
        $('#t').on('click', function(){
                window.location.href = "https://storyarchaeology.com/";

        }
        )
        
}
})

render = () => {
    console.log(say)
    if(say === sayParnell){
        $('.dm').css('background-image','url(./images/2BG.png)');
        
        // alert();
        // render();


    }
 if(say === sayBanba){
    $('#b').addClass('special-btns-during-dm-mode');

// alert('say banba')
}
 if(say === sayThis){
    $('#t').addClass('special-btns-during-dm-mode');

}
 if(say === saySea){
    $('.dm').css('background-image','url(./images/bgWaves.png)');
}
if (say != sayBanba && say != sayThis){
    $('#b').removeClass('special-btns-during-dm-mode');
    $('#t').removeClass('special-btns-during-dm-mode');
    $('.dm').css('background-image','url(./images/2BG.png)');
    $('.dm-says').css('color','gainsboro');
    
}

    $('.dm-says').html(deirDM[say]);

    if (say === saidEnough){
            $('.dm').fadeOut();
            $('#hold-frame').fadeOut();
            $('#tall-order').fadeIn();        
            $('#keyboard-container').fadeOut()
            $('.cubes').fadeTo(4000, 0);
            window.location.href = "https://macribo.github.io/ritt_web/";



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