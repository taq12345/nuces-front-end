function filter() {

    index = document.getElementById('field').selectedIndex;
    query = document.getElementById('srch').value;
    rows = document.getElementById('table1').rows;

    for (i = 1; i < rows.length; i++) 
    {
        rows[i].style.display = "";
    }

    if (query.length > 0) {
        for (i = 1; i < rows.length; i++) 
        {
            flag = 0;
            for (j = 0; j < rows[0].cells.length; j++) 
            {
                if (rows[i].cells[index].innerHTML.includes(query)) 
                {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) 
            {
                rows[i].style.display = "none";
            }
        }
    }
}
