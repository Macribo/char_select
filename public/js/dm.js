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
    
    `According to <a href="https://storyarchaeology.com/" style="color:green;">this</a> the Irish are Brits.
    And the Brits are Celts.`,
    
    `The Island of Ireland comes from 150 vertical kilometers of Lorentia afloat on the asthenosphere;`,
    `
    which crossed the world to collide with a seperation of the Avalonian landmass,
    450 million years ago.`,
    
    `Ages flew through we know not what until our oldest tales of <span style="color:green;">Banba.</span>`,`Whomever they were;
    Beaker people, Milesians...`,
    
    `'They who were' have gifted us a language on the wind in which:`,
    
    `Fadó fadó in Éireann, 
    Roimh teacht an nua aois:`,
    
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
        if(keyPressedInDMmode === '<i class="fa fa-long-arrow-right"></i>')
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
                alert('b');

                
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
        setTimeout(function(){
            $('.dm-says').fadeOut();
        },4000);
        $('.btn').removeClass('most-btns-during-dm-mode')
        setTimeout(function(){
            $('#keyboard-container').fadeOut()
        },2000);


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