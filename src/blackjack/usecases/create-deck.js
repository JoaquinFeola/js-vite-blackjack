import _ from "underscore"
/**
 * Esta funcion crea un nuevo deck
 * @param {*Array<string>} tiposDeCarta  Ejemplo ['C','D','H','S']
 * @param {*Array<string>} tiposEspeciales 
 * @returns {Array} Esta funcion retorna un nuevo array del deck
 */

// Esta función crea un nuevo deck
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {
    if ( !tiposDeCarta  || tiposDeCarta.lenght === 0) throw  new Error( 'TiposDeCarta es obligatorio como un arreglo de string' );
    if ( !tiposEspeciales  || tiposEspeciales.lenght === 0) throw  new Error( 'tiposEspecialeses obligatorio como un arreglo de string' );
    let deck = [];


    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck