function requestUser(id){
    //INSERT into connections (id1,id2,status) VALUES(6,7,'pending');

    var data = {
        id : sessionStorage.getItem('id'),
        hisId : id
    };
    $.post('http://localhost:3000/requestUser', data, function(data,status){
        if (data == 'success')
        {
            alert("Requested User!");
            location.href = 'connections.html';
        }        
    });
}

function acceptUser(id){
    alert('accepting user' + id);
    var data = {
        id : sessionStorage.getItem('id'),
        hisId : id
    };
    $.post('http://localhost:3000/acceptUser', data, function(data,status){
        if (data == 'success')
        {
            alert("Accepted User!");
            location.href = 'connections.html';
        }        
    });
}

function cancelUser(id){

    //alert('cancelled user ' + id);
    var data = {
        id : sessionStorage.getItem('id'),
        hisId : id
    };
    
    $.post('http://localhost:3000/cancelUser', data, function(data,status){
        if (data == 'success')
        {
            alert("Cancelled Request!");
            location.href = 'connections.html';
        }        
    });
}

function getSuggestions()
{
    var data = {
        id : sessionStorage.getItem('id'),
    };

    $.post('http://localhost:3000/getSuggestions', data, function(data,status){
        //get all users who are not connected yet
        if (data[0] == 'success')
        {
            //console.log(data[1][0].LName);
            for (i = 0; i < data[1].length; i++)
            {
                var node = document.getElementById("suggestions");
                var aside = document.createElement('aside');
                aside.id ='sidebar';
                var div = document.createElement('div');
                div.className = 'dark';
                var img = document.createElement("img");
                img.src = 'img/dp.png';
                img.id = 'dp';
                var h = document.createElement("h3");
                h.innerText = data[1][i].FName + ' ' + data[1][i].LName;
                var email = document.createElement('p');
                email.innerText = data[1][i].Email;
                var button = document.createElement("button");
                button.innerText = 'Request';
                button.id = data[1][i].id; 
                button.className = 'sButton';
            
                div.appendChild(img);
                div.appendChild(h);
                div.appendChild(email);
                div.appendChild(button);
                aside.appendChild(div);
                node.appendChild(aside);
            }
            $("body").on( "click", ".dark button.sButton", function(){
                requestUser($(this).attr('id')) ; 
              }); 
        }        
    });
}

function getRequests()
{
    var data = {
        id : sessionStorage.getItem('id'),
    };

    $.post('http://localhost:3000/getRequests', data, function(data,status){
        //get all users who are not connected yet
        if (data[0] == 'success')
        {
            console.log(data[1][0].FName);
            for (i = 0; i < data[1].length; i++)
            {
                var node = document.getElementById("requests");
                var aside = document.createElement('aside');
                aside.id ='sidebar';
                var div = document.createElement('div');
                div.className = 'dark';
                var img = document.createElement("img");
                img.src = 'img/dp.png';
                img.id = 'dp';
                var h = document.createElement("h3");
                h.innerText = data[1][i].FName + ' ' + data[1][i].LName;
                var email = document.createElement('p');
                email.innerText = data[1][i].Email;
                var button = document.createElement("button");
                button.innerText = 'Accept';
                button.id = data[1][i].id; 
                button.className ='rButton';
            
                div.appendChild(img);
                div.appendChild(h);
                div.appendChild(email);
                div.appendChild(button);
                aside.appendChild(div);
                node.appendChild(aside);
            }
            $("body").on( "click", ".dark button.rButton", function(){
                acceptUser($(this).attr('id')) ; 
              }); 
        }        
    });
}

function getApproved()
{
    var data = {
        id : sessionStorage.getItem('id'),
    };

    $.post('http://localhost:3000/getApproved', data, function(data,status){
        //get all users who are not connected yet
        if (data[0] == 'success')
        {
            console.log(data[1][0].FName);
            for (i = 0; i < data[1].length; i++)
            {
                var node = document.getElementById("approved");
                var aside = document.createElement('aside');
                aside.id ='sidebar';
                var div = document.createElement('div');
                div.className = 'dark';
                var img = document.createElement("img");
                img.src = 'img/dp.png';
                img.id = 'dp';
                var h = document.createElement("h3");
                h.innerText = data[1][i].FName + ' ' + data[1][i].LName;
                var email = document.createElement('p');
                email.innerText = data[1][i].Email;
            
                div.appendChild(img);
                div.appendChild(h);
                div.appendChild(email);
                aside.appendChild(div);
                node.appendChild(aside);
            }
        }        
    });
}

function getPending()
{
    var data = {
        id : sessionStorage.getItem('id'),
    };

    $.post('http://localhost:3000/getPending', data, function(data,status){
        //get all users who are not connected yet
        if (data[0] == 'success')
        {
            console.log(data[1][0].FName);
            for (i = 0; i < data[1].length; i++)
            {
                var node = document.getElementById("pending");
                var aside = document.createElement('aside');
                aside.id ='sidebar';
                var div = document.createElement('div');
                div.className = 'dark';
                var img = document.createElement("img");
                img.src = 'img/dp.png';
                img.id = 'dp';
                var h = document.createElement("h3");
                h.innerText = data[1][i].FName + ' ' + data[1][i].LName;
                var email = document.createElement('p');
                email.innerText = data[1][i].Email;
                var button = document.createElement("button");
                button.innerText = 'Cancel';
                button.id = data[1][i].id; 
                button.className ='pButton';
            
                div.appendChild(img);
                div.appendChild(h);
                div.appendChild(email);
                div.appendChild(button);
                aside.appendChild(div);
                node.appendChild(aside);
            }
            $("body").on( "click", ".dark button.pButton", function(){
                cancelUser($(this).attr('id')) ; 
              }); 
        }        
    });
}

function loadData()
{
    alert(sessionStorage.getItem('id'));
    getSuggestions();
    getRequests();
    getApproved();
    getPending();
}
