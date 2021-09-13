export const formatNumWithComma = (num) => {
    return num.toLocaleString(
        undefined,
        { maximumFractionDigits: 2 }
    );
}