function register(type) {

    console.log(ROUTE)
    var fields = {
        fName : document.getElementById('fName').value,
        lName : document.getElementById('lName').value,
        email : document.getElementById('email').value,
        pass : document.getElementById('pass').value,
        cPass : document.getElementById('cPass').value,
        type : type
    }
    
    if (fields.fName.length == 0 || fields.lName.length == 0 || fields.email.length==0 || fields.pass.length==0 || fields.cPass.length ==0 || fields.type.length==0)
    {
        alert("Fields cant be empty");
    }
    else
    {
        // make checks here as well
        $.post('http://nuces-backend-git-test-app.apps-crc.testing/addUser', fields, function(data,status){
            //if success move to home
            if (data[0] == 'success')
            {
                sessionStorage.setItem('id', data[1])
                //alert(sessionStorage.getItem("id"));
                if (type == 1)
                {
                    location.href = 'newsfeed.html';
                }
                else
                {
                    location.href = 'recruit.html'
                }
            }     
            else
            {
                alert("error");
            }
        });
    }

}