const parsers = require("./parsers");
const SalesForceService = require("./salesforce.service");

async function viewObjects(action, settings){
    const { objType, where, selectedFields, orderBy, limit, offset } = action.params;
    const salesforce = await SalesForceService.from(action.params, settings);
    return salesforce.viewObjects({
        objType: parsers.string(objType),
        where: parsers.object(where),
        selectedFields: parsers.array(selectedFields),
        orderBy: parsers.array(orderBy),
        limit: parsers.number(limit),
        offset: parsers.number(offset)
    });
}

async function editObjects(action, settings){
    const { objType, where, updateData } = action.params;
    const salesforce = await SalesForceService.from(action.params, settings);
    return salesforce.editObjects({
        objType: parsers.string(objType),
        where: parsers.object(where),
        updateData: parsers.object(updateData)
    });
}

async function createObject(action, settings){
    const { objType, insertData } = action.params;
    const salesforce = await SalesForceService.from(action.params, settings);
    return salesforce.createObject({
        objType: parsers.string(objType),
        insertData: parsers.object(insertData)
    });
}

async function deleteObjects(action, settings){
    const { objType, where } = action.params;
    const salesforce = await SalesForceService.from(action.params, settings);
    return salesforce.deleteObjects({
        objType: parsers.string(objType),
        where: parsers.object(where)
    });
}

async function executeSoqlQuery(action, settings){
    const { query } = action.params;
    const salesforce = await SalesForceService.from(action.params, settings);
    return salesforce.executeSoqlQuery({
        query: parsers.string(query)
    });
} 

module.exports = {
    viewObjects,
	editObjects,
	createObject,
	deleteObjects,
	executeSoqlQuery}