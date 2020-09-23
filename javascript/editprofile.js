function editProfile()
{
    var data = {
        id : sessionStorage.getItem('id'),
        acc : document.getElementById('acc').value,
        skills : document.getElementById('skills').value,
        interests : document.getElementById('interests').value,
        projects : document.getElementById('projects').value,
        grad : document.getElementById('grad').value
    };

    if(data.id.length == 0 || data.acc.length == 0 || data.skills.length == 0 || data.interests.length == 0 || data.projects.length == 0 || data.grad.length == 0)
    {
        alert("Fields can't be empty");
    }
    else
    {
        $.post('http://localhost:3000/editProfile', data, function(data,status){
            if (data == 'success')
            {
                alert('Profile Edited');
                location.href = 'profile.html';
            }        
        });
    }
}