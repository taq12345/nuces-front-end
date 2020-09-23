function loadData()
{
    //load statuses of my connections in descending order date
    var data = {
        id : sessionStorage.getItem('id'),
    };
    //alert(sessionStorage.getItem('id'));
    $.post('http://localhost:3000/getStatuses', data, function(data,status){
        //get all statuses
        if (data[0] == 'success')
        {
            // fix date format and also add name of user who's post it is
            for (i = 0; i < data[1].length; i++)
            {
                var d = new Date(data[1][i].time);
                d = d.toString();
                d = d.substring(0, d.indexOf("GMT"));
                var node = document.createElement("li");  
                var h = document.createElement("p"); 
                var img = document.createElement("img");  
                img.src = 'img/dp.png';
                var dateNode = document.createTextNode(d);
                var statusNode = document.createElement("p"); 
                var nameNode = document.createElement("h2"); 
                nameNode.innerText = data[1][i].FName + ' ' + data[1][i].LName;
                statusNode.innerText = data[1][i].status;

                h.appendChild(dateNode);
                node.appendChild(img);
                node.appendChild(h);
                node.appendChild(nameNode);
                node.appendChild(statusNode);
                document.getElementById("services").appendChild(node);
            }
        }        
    });
}

function postStatus()
{
    var data = {
        id : sessionStorage.getItem('id'),
        status : document.getElementById('status').value
    };

    alert(data.status);
    $.post('http://localhost:3000/postStatus', data, function(data,status){
        if (data == 'success')
        {
            location.href = 'newsfeed.html';
        }        
    });
}