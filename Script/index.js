function show()
{
    event.preventDefault();
    var country=document.getElementById("cn").value;
    var sDate=document.getElementById("sd").value;
    var eDate=document.getElementById("ed").value;

    var confirmed=document.getElementById("c");
    var active=document.getElementById("a");
    var deaths=document.getElementById("d");


    if(country=='' || sDate=='' || eDate=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+sDate+"T00:00:00Z&to="+eDate+"T00:00:00Z";

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            var length=res.length;
            var index=length-1;
            var i;

            var c8=res[index].Confirmed;
            var a8=res[index].Active;
            var d8=res[index].Deaths;

            confirmed.innerHTML=c8;
            active.innerHTML=a8;
            deaths.innerHTML=d8;

            document.getElementById("res").style.display="block";

for(i=0;i<index;i++)
{
            var c8=res[i].Confirmed;
            var a8=res[i].Active;
            var d8=res[i].Deaths;
            
            var div = document.createElement('div');
            div.innerHTML = 'Confirmed ='+ c8 +'<br>'+'Active ='+ a8 +'<br>'+'Deaths'+ d8;
            document.body.appendChild(div);
            document.getElementById("res").style.display="block";
}

        })
    }
}