

let Imagenes = document.getElementById('Imagenes')
let Imagen = document.getElementById('Imagen')
//const url='https://api.mercadolibre.com/trends/MLM'
//const url="https://api.mercadolibre.com/sites/MLM/MLM1055"

const url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1058"
//FUNCIONA

class ListaImg {
    constructor(url,id) {
        this.url = url;
        this.id = id;
    }
    lista() {
        return fetch(this.url);
    }

}


function Mostrar(ListaImg) {
    ListaImg.lista()
        .then((resp) =>  resp.json())
        .then((data) => {
            Imagen.src = data.results[15]['thumbnail']
            console.log(data.results)
               /*
            for(i=0;i<50;i++) {
                console.log(data.results[i]['title'])
                console.log(data.results[i]['thumbnail']);
            
                let legend = document.createElement('h2');
                let mensaje =data.results[i]['title'] + ': '+data.results[i]['thumbnail']
                legend.textContent = `${mensaje}`;
                Imagenes.appendChild(legend)
              
                //let Imagen = document.getElementById('Imagen')
                Imagen.src = data.results[i]['thumbnail']

            };
             //*/
        })
        .catch((err) => {
            console.log(err);
        })
        
}

const listaImg = new ListaImg(url,0);
Mostrar(listaImg);








































