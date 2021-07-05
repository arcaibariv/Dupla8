const formularioCat = document.getElementById('formularioCat');
const selectCat = document.getElementById('selectCat');
const botonActualizar = document.querySelector('button');

class listaCat{
    constructor(url){
        this.url = url;
    }

    fetchListaCat(){
        return fetch(this.url)
    }

    renderListaCategorias = async () => {
        try{
            let response = await fetch(this.url);
            let data = await response.json();
            data.categories.forEach(element => {
                let opcion = document.createElement('option',);
                opcion.value = element.id;
                opcion.textContent = `${element.name}`;
                selectCat.appendChild(opcion);
            })
        }
        catch(er){
            console.log(e)
        }
    }

    renderItems = async (coda) => {
        try{
            let response = await fetch(`${this.url}/${coda}`);
            let data = await response.json();
            let division = document.getElementById("centro")
            for (let idx = 0; idx<10; idx++) {
                let articulo = document.createElement("div")
                articulo.id = `Articulo${idx+1}`
                articulo.class = "row featurette"

                let texto = document.createElement("div")
                texto.id = `Texto${idx}`
                texto.class = "col-md-7 order-md-2"

                let imagen = document.createElement("div")
                imagen.id = `Imagen${idx}`
                imagen.class = "col-md-5 order-md-1"

                let titulo = document.createElement("h2")
                titulo.class = "featurette-heading"
                titulo.textContent = `${data.results[idx].title}`

                let parrafo = document.createElement("p")
                parrafo.clas = "lead"
                parrafo.textContent = `Precio: $ ${data.results[idx].price}`

                let render = document.createElement("img")
                render.src = `${data.results[idx].thumbnail}`
                render.class = "bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                render.width="200"
                render.height="200"
                render.preserveAspectRatio="xMidYMid slice"
                render.focusable="false"


                articulo.appendChild(imagen)
                articulo.appendChild(texto)


                texto.appendChild(titulo)
                texto.appendChild(parrafo)

                imagen.appendChild(render)

                division.appendChild(articulo)

                let aux = document.createElement("h3")
                aux.textContent = "-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-"
                articulo.appendChild(aux) 
            }
        }
        catch(er){
            console.log(er)
        }
    }
}

botonActualizar.onclick = () => {
    let indiceSeleccionado = selectCat.value
    let division = document.getElementById('centro')
    division.innerHTML=""
    let listaTemp = new listaCat('https://api.mercadolibre.com/sites/MLM')
    listaTemp.renderItems(`search?category=${indiceSeleccionado}`)
}

let categorias = new listaCat('https://api.mercadolibre.com/sites/MLM')
categorias.renderListaCategorias()
//categorias.renderItems("search?category=MLM1276")



//var opcionSeleccionada = lista.options[indiceSeleccionado];
//var textoSeleccionado = opcionSeleccionada.text;
//var valorSeleccionado = opcionSeleccionada.value;
//alert("Opción seleccionada: " + textoSeleccionado + "\n Valor de la opción: " + valorSeleccionado);