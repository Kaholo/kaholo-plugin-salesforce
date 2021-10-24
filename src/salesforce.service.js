const parsers = require("./parsers");
const { defCallback } = require("./helpers");
const jsforce = require("jsforce");

module.exports = class SalesForceService{
    constructor({url, username, password, token}){
        if (!url || !username || !password){
            throw "One of the required authentication parameters was not provided!";
        }
        if (token) { password += token; }
        this.conn = new jsforce.Connection();
        this.conn.loginUrl = url;
        const service = this;
        return new Promise(function(resolve, reject){
            service.conn.login(username, password, (err) => {
                if (err) { return reject(err); }
                resolve(service);
            });
        });
    }

    static async from(params, settings){
        return new SalesForceService({
            url: parsers.string(params.url || settings.url),
            username: parsers.string(params.username || settings.username),
            password: params.password || settings.password,
            token: params.token || settings.token
        });
    }

    queryObjects(objType, where, selectedFields){
        if (!objType) throw "Must provide object type!";
        var result = this.conn.sobject(objType);

        if (where && Object.keys(where).length){
            // if value contains wildcard, add "LIKE" comparsion instead of regular '='.
            Object.entries(where).forEach(([key, value]) => {
                if (value.includes("%")){
                    where[key] = { $like : value }
                }
            });
            // provide where to the query
            result = result.find(where)
        }
        if (selectedFields && selectedFields.length){
            result = result.select(selectedFields.join(", "));
        }
        else {
            result = result.select("*");
        }
        return result;
    }
    
    async viewObjects({objType, where, selectedFields, orderBy, limit, offset}){
        var result = this.queryObjects(objType, where, selectedFields);

        if (orderBy && orderBy.length){
            // replace "DESC " with "-" in all fields
            orderBy = orderBy.map(field => field.toUpperCase().startsWith("DESC ") ? "-" + field.slice(5) : field);
            // sort by fields provided
            result = result.sort(orderBy.join(" "));
        }
        if (limit){
            // Limit number of results returned
            result = result.limit(limit);
        }
        if (offset){
            // Set how many results to skip
            result = result.skip(offset);
        }
        // execute query builded
        return new Promise((resolve, reject) => {
            result.execute(defCallback(resolve, reject));
        });
    }
    
    async editObjects({objType, where, updateData}){
        if (!updateData || !Object.keys(updateData).length){
            throw "Must provide data to update in objects."
        }
        const result = this.queryObjects(objType, where);
        // execute update on objects matched
        return new Promise((resolve, reject) => {
            result.update(updateData, defCallback(resolve, reject, true));
        });
    }
    
    async createObject({objType, insertData}){
        if (!objType || !insertData || !Object.keys(insertData)){
            throw "One of the required fields was not provided";
        }
        const conn = this.conn;
        return new Promise((resolve, reject) => {
            conn.sobject(objType).create(insertData, defCallback(resolve, reject, true));
        });
    }
    
    async deleteObjects({objType, where}){
        if (!where || !Object.keys(where).length){
            throw "One of the required fields was not provided";
        }
        const result = this.queryObjects(objType, where);
        return new Promise((resolve, reject) => {
            result.destroy(defCallback(resolve, reject, true));
        });
    }
    
    async executeSoqlQuery({query}){
        const conn = this.conn;
        if (!query) throw "Must provide an SOQL query to run.";
        return new Promise((resolve, reject) => {
            conn.query(query, defCallback(resolve, reject));
        });
    }
}