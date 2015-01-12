$( document ).ready(

function()
{
// this is the function for submit the values >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
    $('#runbtn').click( function(){
    
		var code = editor.getSession().getValue();
		var input = $('#result_input').val();
		
        if(code){
                $.post("C:\wamp\www\projectc0227\ajax.php" , 
                    {
                        text_file: code,
						input_text : input,
                    },
                    function(data)
                    {
                        $('#result').val(data);
                    }
                );
            }   
    });

	
	$('#clrbtn').click(function(){
		editor.setValue("Enter code here");
		input.setValue("Enter code here");
    });
	
	 $('#upldbtn').click(function(){
        var fileToLoad = document.getElementById("browsebtn").files[0];

        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) 
        {
            var textFromFileLoaded = fileLoadedEvent.target.result;
            editor.setValue(textFromFileLoaded);
        };
        fileReader.readAsText(fileToLoad, "UTF-8");
    });
	
	}
);

		