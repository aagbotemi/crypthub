export const convertUSDToNGN = (USD) => {
    return (USD * 540).toLocaleString(
        undefined,
        { maximumFractionDigits: 2 }
    );
}