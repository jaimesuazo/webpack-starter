import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';//importaciones de imagenes como en react es decir en javascript 

//función de flecha anónima 
export const saludar = ( nombre ) => {

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre } !!!`;

    document.body.append( h1 );


    //img
    //importaciones de imagenes como en react, es decir en javascript
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img ); 
}