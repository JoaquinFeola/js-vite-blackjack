import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCarta } from "./crear-carta";
/**
 * 
 * @param {*Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {*Number } puntosHTML
 * @param {*Array<String>} deck 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora ) => {
    if ( !puntosMinimos ) throw new Error( 'Puntos minimos requeridos' );
    if ( !puntosHTML ) throw new Error( 'PuntosHTML es requerido' )
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        crearCarta( carta, divCartasComputadora )

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}