const apiKey = 'rLPQPWmHy0By041vnAubu0Jv70kfVbep';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
.then( resp => resp.json())
.then( ({ data })=> {    
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch( console.warn ); 
//el catch atrapa a todos, pero se puede hacer individual