$( document ).ready(



function()
{
// this is the function for submit the values >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
    $('#runbtn').click( function(){
    
		var code = editor.getSession().getValue();
		var input = $('#result_input').val();
		
        if(code){
                $.post("ajax.php" , 
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
        document.getElementById("result").value = "";
        document.getElementById("result_input").value = "";
    });


    $('#inbtn_id').click(function(){
        
        document.getElementById("memory_txt_id").value = "";
        document.getElementById("ins").value = "00";
        var x = document.getElementsByClassName("reg_txt");
        for(i=0; i<x.length; i++){
            x[i].value = "00" ;
        }
    });

     $('#setbtn_id').click(function(){
        
        var x = document.getElementsByClassName("reg_txt");
        for(i=0; i<x.length; i++){
            x[i].innerHTML = x[i].value ;
        }

        /*for(j=0; j<x.length; j++){
            alert(j + " "+x[j].innerHTML);
        }*/ 
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

		