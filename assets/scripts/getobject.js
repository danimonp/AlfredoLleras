//"use strict";
var pages  = 1;

$(".menulink").click(function(){
	$('#incarousel').empty();
    var id = $(this)[0].id;
    d3.json("./assets/scripts/resources.json", function(data) {
        Object.keys(data).forEach(function(key) {
            var categoria = data[key].categoria;
            if(id == categoria){
            	loadcarousel(id , data[key]);
            }
        });
    });
});

$('.carousel').carousel({
    interval: false,
});

$('[data-toggle="tooltip"]').tooltip();

function loadPic(idpic) {
    console.log('cargar obra', idpic);
    window.location.replace("picture.html?="+idpic);
}

function locked(level) {
    alert('Este nivel esta bloqueado');
}

function loadatalvl(value) {
    var imgen = '<div class="card mainmsn">\
        <button type="button" class="btn" id="' + value["id"] + '" onclick="loadPic(this.id)">\
        <img class="img-fluid btnlevel" src="' + value["src"] + '">\
        </button>\
        <div class="card-body">\
        <img class="card-img-stars" src="">\
        </div>\
        </div>';
    return imgen;
}

function loadcarousel(idmodule ,data) {
    $('#incarousel').empty();
    setTimeout(function() {
        $(".carousel-control").show();
        var arraypage = ["7", "13", "19", "25", "31", "37", "43", "49", "55", "61", "67", "73", "79", "85", "91", "97", "103", "109", "115", "121", "127", "133", "139", "145", "151", "157", "163"];
        if(data.id == "1"){
        	var divini = document.createElement("div");
        	divini.setAttribute("class", "carousel-item active");
        	divini.setAttribute("id", 'page1');
        	var lvlshtml = loadatalvl(data);
        	divini.innerHTML += lvlshtml;
        	$('#incarousel').append(divini);
        }else{
            if (arraypage.includes(data.id)) {
                pages = pages + 1;
                var divimg = document.createElement("div");
                divimg.setAttribute("class", "carousel-item");
                divimg.setAttribute("id", "page" + pages);
                var lvlshtml = loadatalvl(data);
                divimg.innerHTML += lvlshtml;
                $('#incarousel').append(divimg);
            }
            if (!arraypage.includes(data.id)) {
                var lvlshtml = loadatalvl(data);
                $('#page' + pages).append(lvlshtml);
            }
        }
    }, 1000);
}
