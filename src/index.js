import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css'; //usé un icono de fontawsome, es necesario importar su librería
import './index.css'; //agregué estilos con css
import PropTypes from 'prop-types'; // tengo que importar esto porque los uso en este documento desde la linea 15 en adelante


function SimpleCounter(props) { //la unica forma de pasarle cosas a esta función es con props, porque es un componente funcional o componente como funcón
    return (<div className="theCounter"> {/* crear una división para poner divisiones mas pequeñas dentro de ella, en las cuales va cada número*/}
        <div className="clockIcon">{/*creo un div para ubicar el icono que quiero usar */}
            <i className="far fa-clock"></i> {/*ubico la tag de icono y su clase */}
        </div>
        <div className="four">{props.digitFour % 10} </div> {/*para cada división agrego su nombre de clase, y en su contenido la propiedad.nombre que quiero agregar */}
        <div className="three">{props.digitThree % 10}</div> {/* agrego % 10 para btener el ultimo digito de un numero*/}
        <div className="two">{props.digitTwo % 10}</div>
        <div className="one">{props.digitOne % 10}</div>
    </div>);
}

SimpleCounter.propTypes = { //el nombre del componente.propTypes y luego, adentro, todas las propiedades que el componente va a tener 
    digitFour: PropTypes.number,  //propiedad de objeto : que tipo de datos contiene
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

let counter = 0;//para trabajar con el contador tengo que trabajar con el id de interval let a = inteval
setInterval(function () {//esta funcion llama una función cada cierta cantidad de segundos
    let boxfour = Math.floor(counter / 1000); //dividir counter por 1000 para obtener un numero de hasta 4 digitos luego de truncar
    let boxthree = Math.floor(counter / 100); //dividir counter por 100 para obtener un numero de 3 digitos luego de truncar
    let boxtwo = Math.floor(counter / 10); //dividir counter por 10 para obtener un numero de 2 digitos luego de truncar
    let boxone = Math.floor(counter / 1); //dividir counter por 1 para obtener un numero de 1 digitos luego de truncar
    counter++; // ++ =  incrementeo luego de cada ejecución de la función


    ReactDOM.render(
        //<React.StrictMode>
        <SimpleCounter digitOne={boxone} digitTwo={boxtwo} digitThree={boxthree} digitFour={boxfour} />, //renderizo el componente y a cada propiedad le asigno el valor obtenido correspondiente en la funcion setInterval
        //</React.StrictMode>,
        document.getElementById('root')
    );
}, 1000);//cada mil milisegundos llamo a la funcion que se renderiza en la linea 39, mientras mas reduzco este numero mas rapido avanza el contador

reportWebVitals();
