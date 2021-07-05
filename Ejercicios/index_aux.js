const formularioCat = document.getElementById('formularioCat')
const selectCat = document.getElementById('selectCat')
const botonActualizar = document.querySelector('button')


//let Imagenes = document.getElementById('Imagenes')
//let Imagen = document.getElementById('Imagen')
//const url='https://api.mercadolibre.com/trends/MLM'
//const url="https://api.mercadolibre.com/sites/MLM/MLM1055"

const url = "https://api.mercadolibre.com/sites/MLM"
//FUNCIONA

class ListaCat {
    constructor(url) {
        this.url = url;
    }
    lista() {
        return fetch(this.url);
    }

}


function Mostrar(Cats) {
    Cats.lista()
        .then((resp) =>  resp.json())
        .then((data) => {
            console.log(data.categories)
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