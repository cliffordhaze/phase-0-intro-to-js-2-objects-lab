const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...employee, [key]: value};
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const copyOfObj = {...obj};
    delete copyOfObj[key];
    return copyOfObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
