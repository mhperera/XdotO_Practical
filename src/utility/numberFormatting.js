export function formatNumber(number) {
    let remainder = 0;

    if (number >= 1e6) {
        remainder = (number % 1e6) / 100000;
        return (number / 1e6).toFixed( remainder!==0 ? 1 : 0) + 'M';
    } 
    
    else if (number >= 1e3) {
        remainder = (number % 1e3) / 100;
        return (number / 1e3).toFixed( (remainder!==0) ? 1 : 0) + 'K';
    } 
    
    else {
       return number.toString();
    }
}