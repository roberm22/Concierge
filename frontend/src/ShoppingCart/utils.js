export const formatNumber = number => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(number);
}
//https://www.samanthaming.com/tidbits/30-how-to-format-currency-in-es6/