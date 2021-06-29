let TextoPrincipal= document.getElementById("TextoPrincipal")
//Nombre de la clase en camelcase
class listaTendencia {
    constructor(url){
        this.url = url;
    }

    getLista(){
        return fetch (this.url)
    }
}

function ImprimirData(ObjetoLista) {
    ObjetoLista.getLista()
        .then((resp) => resp.json())
        .then((data) => {
            console.log("Antes")
            data.forEach(element => {
                //txt = `${element.keyword} \n ${element.url} \n`
                let leyenda = document.createElement("h3")
                leyenda.textContent = `${element.keyword} - ${element.url} \n`

                TextoPrincipal.appendChild(leyenda)

            });
            //console.log(data[0].url)
            console.log("Despues")

        })
        .catch((err) => {console.log(err)})
}

const Tendencia_actual = new Lista_Tendencia("https://api.mercadolibre.com/trends/MLM/MLM1055")

// "https://api.mercadolibre.com/sites/MLM/search?category=MLM1055"

ImprimirData(Tendencia_actual)

