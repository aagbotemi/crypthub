export const formatNumWithComma = (num) => {
    return !!(num % 1) ? parseFloat(num).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}