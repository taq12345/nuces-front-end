function loadData()
{
    var data = {
        id : sessionStorage.getItem('id'),
    };
    alert(data.id);
    $.post('http://localhost:3000/getProfile', data, function(data,status){
        //get all statuses
        if (data[0] == 'success')
        {
            //alert(data[1][0].Accomplishments);
            document.getElementById('acc').textContent = data[1][0].Accomplishments;
            document.getElementById('skills').textContent = data[1][0].Skills;
            document.getElementById('interests').textContent = data[1][0].Interests;
            document.getElementById('projects').textContent = data[1][0].SemesterProjects;
            document.getElementById('name').textContent = data[1][0].FName + ' ' + data[1][0].LName ;
            d = data[1][0].Graduation;
            document.getElementById('graduation').textContent += d.substring(0, d.indexOf("T"));
            document.getElementById('email').textContent = data[1][0].Email;

        }        
    });
}

function edit()
{
    location.href = 'editprofile.html';
}