function fibonacci(start, end) {
    let startEndArray = []
    while (start <= end) {
        if (end <= 4000000) {
            startEndArray.push(end--);
        } else {
            return 'Number must not exceed four million'
        }
    }
    let evenNumArray = []
    startEndArray.forEach(res => {
        if (res % 2 === 0) {
            evenNumArray.push(res);
        }
    })
    return evenNumArray.reduce((a, b) => a + b, 0)
}

module.exports = fibonacci;