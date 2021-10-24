function checkResult(result) {
    const isSuccess = (item) => item.success && item.errors.length == 0;
    if (Array.isArray(result)) return result.every(isSuccess);
    return result && isSuccess(result);
}

function defCallback(resolve, reject, shouldCheck) {
    return (err, records) => {
        if (err) { return reject(err); }
        if (shouldCheck && !checkResult(records)) { return reject(records)}
        resolve(records);
    }
}

module.exports = {
    defCallback
}