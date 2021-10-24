function parseArray(value){
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof(value) === "string") return value.split("\n").map(line=>line.trim()).filter(line=>line);
    throw "Unsupprted array format";
}

module.exports = {
    boolean : (value) =>{
        if (value === undefined || value === null || value === '') return undefined;
        return !!(value && value !=="false")
    },
    text : (value) =>{
        if (value)
            return value.split('\n');
        return undefined;
    },
    number: (value)=>{
        if (!value) return undefined;
        const parsed = parseInt(value);
        if (parsed === NaN) {
            throw `Value ${value} is not a valid number`
        }
        return parsed;
    },
    autocomplete: (value)=>{
        if (!value) return undefined;
        if (typeof(value) !== "object") return value;
        return value.id;
    },
    object: (value)=>{
        if (!value) return undefined;
        if (typeof(value) === "object") return value;
        if (typeof(value) === "string") {
            const obj = {};
            value.split("\n").map(line=>{
                var [key, ...value] = line.split("=");
                if (!value.length) throw "Unsupported object format";
                key = key.trim();
                value = value.join("=").trim();
                if (!key || !value) throw "Empty key or value in string:\n"+value;
                obj[key] = value;
            })
            return obj;
        }
        throw `Value ${value} is not an object`;
    },
    string: (value)=>{
        if (!value) return undefined;
        if (typeof(value) === "string") return value.trim();
        throw `Value ${value} is not a valid string`;
    },
    array: parseArray
}