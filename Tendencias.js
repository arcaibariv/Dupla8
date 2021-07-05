

let Tendencias = document.getElementById('Tendencias')

const url='https://api.mercadolibre.com/trends/MLM'
//const url="https://api.mercadolibre.com/sites/MLM/MLM1055"

class listaTendencia {
    constructor(url,id){
        this.url = url
        this.id = id
    }
    lista(){
        return fetch(this.url)
    }

}


function imprimir(Lista_tendencia,i){
    Lista_tendencia.lista()
        .then((resp) =>  resp.json())
        .then((data) => {
            data.forEach(element => {
                let legend = document.createElement('h2');
                let mensaje = String(i) + ' ' + element.keyword;
                i++
                legend.textContent = `${mensaje}`;
                Tendencias.appendChild(legend)

            });
            
        })
        .catch((err) => {
            console.log(err)
        })
        
}

const lista_tendencia = new listaTendencia(url,0)
imprimir(lista_tendencia,1)

