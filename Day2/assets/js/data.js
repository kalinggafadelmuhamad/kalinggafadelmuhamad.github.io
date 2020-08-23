const dataBalam  = () => {
    $.ajax({
        url :'https://covid19.bandarlampungkota.go.id/api/',
        success : data => {
            try{
               const json = data;
               const kasus = json.jml_positif;
            }catch{
                alert('Error');
            }
        }
    })
} 