function formatHighNumberWithK(num: number) {
    let formatted = ""
    const numK = num / 1000
    if (numK >= 1) {
        if (numK >= 100) {
            formatted += numK.toFixed(0)
        } else {
            formatted += numK.toFixed(1)

            if (formatted.endsWith("0")) {
                formatted = formatted.slice(0, -2)
            }
        }

        formatted += "k"
    } else {
        formatted += num.toFixed(0)
    }
    return formatted
}

export default formatHighNumberWithK
