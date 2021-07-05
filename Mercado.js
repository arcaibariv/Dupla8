
class Mercado {
    constructor(url){
        this.url = url
    }

    getTendencias = async() => {
        try {
            let Tendencias =  document.getElementById('Tendencias')
            const response = await fetch(this.url)
            const data = await response.json();
            console.log(data);
            data.forEach(element => {
                let legend = document.createElement('h1');
                let mensaje =  element.keyword;
                legend.textContent = `${mensaje}`;
                Tendencias.appendChild(legend);
            });
        }
        catch (e) {
            console.log(e);
        }  
    }

    getBusquedas = async() =>{

    }

}

//const url = "https://api.mercadolibre.com/trends/MLM"
const url = ''
const tendencia = new Mercado(url);

tendencia.getTendencias();
