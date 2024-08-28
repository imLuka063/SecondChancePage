function checkFromInvite(){
    $.getJSON("https://servers-frontend.fivem.net/api/servers/single/zmkkz4",function(data){
        $("#a").text(data.Data.players.length);
    }).fail(function(){
        noServerOnline();
    })
}

function noServerOnline(){
    $("#a").text("API Error");
}

setInterval(function(){checkFromInvite()}, 10);