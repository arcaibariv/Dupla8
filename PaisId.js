class Pais {
    constructor(url,id) {
        this.url = url;
        this.id = id;
    }
    lista() {
        return fetch(this.url);
    }

}

function PaisID(nameCountry,nameC) {
    nameC.lista()
        .then((resp) =>  resp.json())
        .then((data) => {
            for (i=0;i<19;i++) {
                if(data[i].name.toUpperCase() == nameCountry.toUpperCase()){
                    console.log(data[i].id);
                }
            }
        });

    }
const url = "https://api.mercadolibre.com/sites"
const nameC = new Pais(url,0);
const nameCountry = "Argentina"
let siteID = PaisID(nameCountry,nameC);
console.log(siteID)

//////////////////////////////////////////////////////////////////////
/*
class Pais {
    constructor(url,id) {
        this.url = url;
        this.id = id;
    }
    lista() {
        return fetch(this.url);
    }

}

function PaisID(nameCountry,nameC) {
    nameC.lista()
        .then((resp) =>  resp.json())
        .then((data) => {
            for (i=0;i<19;i++) {
                if(data[i].name.toUpperCase() == nameCountry.toUpperCase()){
                    console.log(data.id[i])
                }
            }
        });

    }
const url = "https://api.mercadolibre.com/sites"
const nameC = new Pais(url,0);
const nameCountry = "Mexico"
let siteID = PaisID(nameCountry,nameC);
//console.log(siteID)
*/