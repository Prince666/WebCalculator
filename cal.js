function calc()
            {
                var n1 = parseFloat(document.getElementById('n1').value);
                var n2 = parseFloat(document.getElementById('n2').value);
                
                var oper = document.getElementById('operators').value;
                
                if(oper === '+')
                {
                    document.getElementById('result').value = n1+n2;
                }
                
                if(oper === '-')
                {
                    document.getElementById('result').value = n1-n2;
                }
                
                if(oper === '/')
                {
                    document.getElementById('result').value = n1/n2;
                }
                
                if(oper === 'X')
                {
                    document.getElementById('result').value = n1*n2;
                }
            }


$("form").submit(function(e) {
    e.preventDefault();
    var error = "";
    if($("#first").val() == "")
    {
      error+= "Please enter your first number to do the calculations<br>";
    }

    if($("#user").val() == "")
    {
      error+= "Please enter your second number to do the calculations<br>";
    }
    
    if(error!= "")
    {
      $("#error").html('<div class="alert alert-danger" roles="alert"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>');
    }
    //else
   // {
    //  $("form").html('<div class="alert alert-success" role="alert"><h4 class="alert-heading">Well done!</h4><p>Aww yeah, you successfully submitted the form. You will surely get the revert with 24-48 hours.</p><hr><p>Thanks for doing the Registration</p>' +'</div>');
     //   for doing the normal submission you can use this code as well  $("form").unbind("submit").submit();
   // }
  });


  
    