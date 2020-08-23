$.getJSON('https://coronavirus-19-api.herokuapp.com/all',data => {
    let Json = data;
    let cases = data.cases;
    let meninggal = data.deaths;
    let sembuh = data.recovered;
    $('#globalpositif').html(cases);
    $('#globalmeninggal').html(meninggal);
    $('#globalsembuh').html(sembuh);
})

$.getJSON('https://coronavirus-19-api.herokuapp.com/countries',dataN => {
    let Json = dataN;
    for(i=0;i<Json.length;i++){
        let negara = Json[i].country;
        if(negara === 'Indonesia'){
            $("#indoP").html(Json[i].cases);
            $("#indoM").html(Json[i].deaths);
            $("#indoS").html(Json[i].recovered);
        }
        
    }
})

$.getJSON('https://indonesia-covid-19.mathdro.id/api/provinsi/',dataL => {
    let Json = dataL;
    for(i=0;i<Json.data.length;i++){
        let prov = Json.data[i].provinsi;
        if(prov === 'Lampung'){
            $("#lampungP").html(Json.data[i].kasusPosi);
            $("#lampungM").html(Json.data[i].kasusMeni);
            $("#lampungS").html(Json.data[i].kasusSemb);
        }
    }
})



