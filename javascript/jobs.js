function applyJob(id)
{
    var data = {
        userId : sessionStorage.getItem('id'),
        jobId : id
    };
    alert(sessionStorage.getItem('id'));

    $.post('http://localhost:3000/applyJob', data, function(data,status){
            if (data == 'success')
            {
                alert('job applied!');
                location.href = 'jobs.html';
            }        
        });
}

function loadData()
{
    var data = {
        id : sessionStorage.getItem('id'),
    };
    alert(data.id);
    //alert(data.id);
    $.post('http://localhost:3000/getJobs', data, function(data,status){
        //get all jobs 
        if (data[0] == 'success')
        {
            for(i = 0; i < data[1].length; i++)
            {
                ul = document.getElementById('services');
                list = document.createElement('li');
                img = document.createElement('img');
                img.src = 'img/dp.png';
                title = document.createElement('h3');
                title.innerText = data[1][i].Title;
                d = document.createElement('h3');
                d.innerText = "Description"
                desc = document.createElement('p');
                desc.innerText = data[1][i].Description;
                di = document.createElement('h3');
                di.innerText = "Discipline"
                disc = document.createElement('p');
                disc.innerText = data[1][i].Discipline;
                e = document.createElement('h3');
                e.innerText = "Experience"
                exp = document.createElement('p');
                exp.innerText = data[1][i].Experience;
                t = document.createElement('h3');
                t.innerText = "Tags"
                tags = document.createElement('p');
                tags.innerText = data[1][i].Tags;
                button = document.createElement('button');
                button.id = data[1][i].jobId; 
                button.innerText = "Apply";
                button.className = 'rButton';

                list.appendChild(img);
                list.appendChild(title);
                list.appendChild(d);
                list.appendChild(desc);
                list.appendChild(di);
                list.appendChild(disc);
                list.appendChild(e);
                list.appendChild(exp);
                list.appendChild(t);
                list.appendChild(tags);
                list.appendChild(button);
                ul.appendChild(list);
            }
            $("body").on( "click", "button.rButton", function(){
                applyJob($(this).attr('id')) ; 
              }); 
        }        
    });
}