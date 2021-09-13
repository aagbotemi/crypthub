export const numFormatter = (num) => {
    if(num < 900){
        return num; // if value < 1000, nothing to do
    } else if(num > 999 && num < 1000000){
        return (num/1000).toFixed(2) + 'K'; // convert to K for number from > 1000 < 1 million 
    } else if(num >= 1000000 && num < 1000000000){
        return (num/1000000).toFixed(2) + 'M'; // convert to M for number from > 1 million 
    } else if(num >= 1000000000 && num < 1000000000000){
        return (num/1000000000).toFixed(2) + 'B'; // convert to B for number from > 1 billion 
    } else if(num >= 1000000000000 && num < 1000000000000000){
        return (num/1000000000000).toFixed(2) + 'T'; // convert to T for number from > 1 trillion 
    }
}