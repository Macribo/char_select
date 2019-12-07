$(document).ready(function () {


    /*update keyboard appearance
    according to dm is speaking or not.
    


    player-can-type = false;

    listen for green keypress

    */


   let dmAgCainnt = true;
   let justListen = true;
let deirDM = [
    `"Do what is beyond your strength even should you fail sometimes."
    <br>Charles Stewart Parnell`,
    
    `According to <a href="https://storyarchaeology.com/" style="color:green;">this</a> the Irish are "Brits",
    <br>And the "Brits" are Celts.`,
    
    `450 million years ago:<br/>The Island of Ireland was formed when 150 vertical kilometers of "Lorentia"; <img id="avalonian "src="./images/backgrounds/fainne_1.png" style="height:200px; margin-left:300px;">`,
    `
    Sailed o'er the asthenosphere and collide with a fragment of the Avalonian landmass.<div id="sea-waves"><img src="./images/tonnta1.gif"style="height:128px; width:128px"><img src="./images/tonnta3.gif"style="height:128px; width:128px"><img src="./images/tonnta1.gif"style="height:128px; width:128px"><img src="./images/tonnta1.gif" style="height:128px; width:128px"><img src="./images/tonnta1.gif" style="height:128px; width:128px"><img src="./images/tonnta3.gif" style="height:128px; width:128px"></div>
    `,
    
    `Ages flew through we know not what until the era described in Gaelic mythology.</br> <span style="color:green;">Banba.</span>`,
    
    `'Beaker people, Milesians; </br>
    'They who were' gifted us a language which is, </br> in English`,
    
    `a still wind`,
    
    // `The difference between an enegmatic arrowhead, and 'saiġead', is kinetic war broght to the eye of a king...`
]
let say = 0;
let sayBanba = 4;
let sayThis = 1;
let saidEnough = 8;
let keyPressedInDMmode;

   if(dmAgCainnt){

    // $('#output').fadeOut();
    if(justListen){
    $('.btn').addClass('most-btns-during-dm-mode');
    $('#saighead-deas').addClass('special-btns-during-dm-mode');
    
}
    $('.btn').on('touchstart', function(){
		keyPressedInDMmode = (this.innerHTML);
        if(keyPressedInDMmode === '<img src="./images/arrow.png">')
        {
            say++;
render();     
setTimeout(function () {
    $('#saighead-deas').removeClass();
    $('#saighead-deas').addClass('btn');
    $('#saighead-deas').addClass('special-btns-during-dm-mode');
    $('#saighead-deas').css('color','rgb(73, 206, 33)');
    // $('#saighead-deas').addClass('btn-outline-dark');

},1000);

// alert(keyPressedInDMmode);
// alert(keyPressedInDMmode);
        }
        else if(keyPressedInDMmode.text='b'){
            if(say === sayBanba){
                // alert('b');
                $('#keyboard-container').fadeOut();
                $('#output').fadeOut();
                $('.dm').fadeOut();
                

                
            }  
        }          
        else if (keyPressedInDMmode.text='t'){
            if(say === sayThis){
                alert('t');

        }
}})

render = () => {
if(say === sayBanba){
    $('#b').addClass('special-btns-during-dm-mode');


}
else if(say === sayThis){
    $('#t').addClass('special-btns-during-dm-mode');

}
else{
    $('#b').removeClass('special-btns-during-dm-mode');
    $('#t').removeClass('special-btns-during-dm-mode');

}

    $('.dm-says').html(deirDM[say]);

    if (say === saidEnough){
            $('.dm').fadeOut();
        
        
            $('#keyboard-container').fadeOut()
            $('.cubes').fadeTo(4000, 0);



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