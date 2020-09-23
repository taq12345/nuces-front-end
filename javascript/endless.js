i = 5;

function makeNew()
{
    html = "<li><img src='img/dp.png'><h3>Post " + i++ + "</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit ametultricies at, vulputate id lorem. Nulla facilisi.</p></li>";
    document.getElementById('services').innerHTML += html;
    //alert(document.documentElement.scrollTop);
}