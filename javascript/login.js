function login() {
    email = document.getElementById('email');
    pass = document.getElementById('pass');

    var data = {
        email : document.getElementById('email').value,
        pass : document.getElementById('pass').value,
    };

    if(data.email.length== 0 || data.pass.length == 0)
    {
        alert('Field cant be empty');
    }
    else
    {
        $.post('http://localhost:3000/login', data, function(data,status){
            if (data[0] == 'success')
            {
                sessionStorage.setItem('id', data[1])
                type = data[2];
                if (type == 1)
                {
                    location.href = 'newsfeed.html';
                }
                else
                {
                    location.href = 'recruit.html'
                }
            }        
            if (data[0] == 'fail')
            {
                alert('Wrong User/Pass');
            }
        });
    }
}

function openRegister()
{
    location.href = 'register.html';
}

function checkLoginState() {
    /*FB.logout(function(response) {
        // user is now logged out
      });*/

    FB.getLoginStatus(function(response) {
        if (response.status == 'connected')
        {    
            FB.api('/me', {fields: 'email,first_name,last_name'}, function(response) {
                loginWithFb(response);
              });
        }
        else
        {
            console.log("not logged it");
        }
    });
  }

  function loginWithFb(response)
  {
    var data = {
        email : response.email,
        fName : response.first_name,
        lName : response.last_name
    };

    
    $.post('http://localhost:3000/loginWithFb', data, function(data,status){
        if (data[0] == 'success')
        {
            sessionStorage.setItem('id', data[1])
            location.href = 'newsfeed.html';  
        }        
        else
        {
            alert("something went wrong");
        }
    });
    
  }
