function objects2csv(objects, {header = true, unavailable = " ", separator = ";", quote = "\"", escape = "\\", lineSeparator = "\n", excludeKeys = []} = {}) {
    const distinctKeys = objects.reduce((keys, obj) => {
        Object.keys(obj).forEach(key => {
            if (!keys.includes(key) && !excludeKeys.includes(key)) {
                keys.push(key);
            }
        });
        return keys;
    }, []);
    const body = objects.map(obj => distinctKeys.map(k => quote + (obj[k] || unavailable).toString().replace(quote, escape) + quote).join(separator)).join(lineSeparator);
    return header ? (distinctKeys.map(k => (quote + k.replace(quote, escape) + quote)).join(separator) + lineSeparator + body) : body;
}

module.exports = objects2csv;