function objects2csv(objects, {header = true, unavailable = " ", separator = ";", quote = "\"", escape = "\\", lineSeparator = "\n", excludeKeys = []} = {}) {
    const distinctKeys = objects.reduce((keys, obj) => {
        Object.keys(obj).forEach(key => {
            if (!keys.includes(key) && !excludeKeys.includes(key)) {
                keys.push(key);
            }
        });
        return keys;
    }, []);
    const body = objects.map(obj => distinctKeys.map(k => quoteAndEscape((obj[k] || unavailable).toString(), quote, escape)).join(separator)).join(lineSeparator);
    return header ? (distinctKeys.map(k => (quoteAndEscape(k, quote, escape))).join(separator) + lineSeparator + body) : body;
}

function quoteAndEscape(str, quote, escape) {
    if(quote)
        return quote + str.replace(quote, escape) + quote;
    return str;
}

module.exports = objects2csv;