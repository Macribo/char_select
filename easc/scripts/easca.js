$(document).ready(function () {
	$('#alt-keyboard-container').hide();

	let fadaMode=false;
toggleKeyboard = ()=>{
if (fadaMode===false){
	$('#keyboard-container').hide();
	$('#alt-keyboard-container').show();
	// $('#keyboard-container').show();
	// $('#alt-keyboard-container').hide();
	fadaMode=true;	
}
	else{
		$('#keyboard-container').show();
	$('#alt-keyboard-container').hide();
	fadaMode=false;
	}
}

	let keyPressed;
		$('.btn').click(function(){
			keyPressed = (this.innerHTML);
			if (keyPressed=== "fadaí"){
				toggleKeyboard();
				// alert('alt')
			}
			else
			$('#output').append(keyPressed)
			var id = this.id
			if (id ==='return'){
				$('#output').empty();
			
			}
			// if (id === 'undo'){
			// 	let temp = document.getElementById('#output');
			// 	alert(temp)
			// }
		});
















});