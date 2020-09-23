function postJob()
{
    var data = {
        id : sessionStorage.getItem('id'),
        title : document.getElementById('title').value,
        desc : document.getElementById('desc').value,
        disc : document.getElementById('disc').value,
        exp : document.getElementById('exp').value,
        tags : document.getElementById('tags').value
    };

    if(data.id.length == 0 || data.title.length == 0 || data.desc.length == 0 || data.disc.length == 0 || data.exp.length == 0 || data.tags.length == 0)
    {
        alert("Fields can't be empty");
    }
    else
    {
        $.post('http://localhost:3000/postJob', data, function(data,status){
            if (data == 'success')
            {
                alert('job added!');
                location.href = 'recruit.html';
            }        
        });
    }
}