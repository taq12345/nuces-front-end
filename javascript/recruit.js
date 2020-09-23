function loadData()
{
    var data = {
        id : sessionStorage.getItem('id'),
    };
    alert(data.id);
    //alert(data.id);
    $.post('http://localhost:3000/getRecruits', data, function(data,status){
        //get all jobs 
        if (data[0] == 'success')
        {
            i = 0;
            while (i < data[1].length)
            {
                main = document.getElementById("main-col");
                heading = document.createElement('h3');
                heading.innerText = data[1][i].title;
                
                var table = document.createElement("table");
                table.id = 'table1';
                var tr = document.createElement("tr");
                var th1 = document.createElement("th");
                th1.innerText = 'Name';
                var th2 = document.createElement("th");
                th2.innerText = 'Skills';
                var th3 = document.createElement("th");
                th3.innerText = 'Interests';
                var th4 = document.createElement("th");
                th4.innerText = 'Graduation';
                tr.appendChild(th1);
                tr.appendChild(th2);
                tr.appendChild(th3);
                tr.appendChild(th4);
                table.appendChild(tr);
                main.appendChild(heading);
                while (true)
                { 
                    var tr2 = document.createElement("tr");
                    var td1 = document.createElement("td");
                    td1.innerText = data[1][i].FName + ' ' + data[1][i].LName;
                    var td2 = document.createElement("td");
                    td2.innerText = data[1][i].Skills;
                    var td3 = document.createElement("td");
                    td3.innerText = data[1][i].Interests;
                    var td4 = document.createElement("td");
                    d = data[1][i].Graduation;
                    td4.innerText = d.substring(0, d.indexOf("T"));
                    tr2.appendChild(td1);
                    tr2.appendChild(td2);
                    tr2.appendChild(td3);
                    tr2.appendChild(td4);
                    table.appendChild(tr2);

                    prev = data[1][i].jobid;
                    i++;
                    if (i >= data[1].length)
                    {
                        break;
                    }
                    if (data[1][i].jobid != prev)
                    {
                        break;
                    }
                }
                main.appendChild(table);
            }
        }        
    });
}