
export const crearCarta = ( carta, divInnerCartas ) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divInnerCartas.append( imgCarta );
    return imgCarta
};