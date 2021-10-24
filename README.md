# kaholo-plugin-salesforce

##  Settings
1. SalesForce URL (String) **Required if not in method** - The default SalesForce URL to connect to for API requests to Salesforce.
2. Username (String) **Required if not in method** - The username of the default user to authenticate to Salesforce with.
3. Password (Vault) **Required if not in method** - The password of the default user to authenticate to Salesforce with.
4. Security Token (Vault) **Required if not in method** - The security token of the default user to authenticate to Salesforce with. You can read more on security tokens [here](https://help.salesforce.com/s/articleView?id=sf.user_security_token.htm&type=5).

## Method: View Objects
View objects from the specified type. Can also query the objects returned bu certain parameters.

## Parameters
1. SalesForce URL (String) **Required if not in settings** - The URL of the SalesForce environment to connect to for this request.
2. Username (String) **Required if not in settings** - The username of the user to authenticate to Salesforce with.
3. Password (Vault) **Required if not in settings** - The password of the user to authenticate to Salesforce with.
4. Security Token (Vault) **Required if not in settings** - The security token of the  user to authenticate to Salesforce with. You can read more on security tokens [here](https://help.salesforce.com/s/articleView?id=sf.user_security_token.htm&type=5).
5. Object Type (String) **Required** - The type of object to view.
6. Match Fields (Text) **Optional** - If specified return data on objects that match the specified fields. Must be in the format of FieldName=MatchValue. Can also include '%' wildcard. You can specify multiple fields by seperating each with a new line. Also accepts an object from code.
7. Select Fields (Text) **Optional** - If specified return selected fields of the objects. You can specify multiple fields by seperating each with a new line or with a comma. Also accepts array from code.
8. Order By (Text) **Optional** -  If specified order the results by the fields specified. If a field is prefixed with a '-' it will be orderd in descending order. By  order will be ascending. You can specify multiple fields by seperating each with a new line. Also accepts array from code.
9. Limit (String) **Optional** - If specified limit the number of results by the value specified.
10. Offset (String) **Optional** - If specified start returning results from the specified offset. For example, if Offset = 100 than the results won't contain the 100 first results, and will contain the results starting from the 101th object.

## Method: Edit Objects
Edit existing objects. Can also query which objects to edit.

## Parameters
1. SalesForce URL (String) **Required if not in settings** - The URL of the SalesForce environment to connect to for this request.
2. Username (String) **Required if not in settings** - The username of the user to authenticate to Salesforce with.
3. Password (Vault) **Required if not in settings** - The password of the user to authenticate to Salesforce with.
4. Security Token (Vault) **Required if not in settings** - The security token of the  user to authenticate to Salesforce with. You can read more on security tokens [here](https://help.salesforce.com/s/articleView?id=sf.user_security_token.htm&type=5).
5. Object Type (String) **Required** - The type of object to update.
6. Match Fields (Text) **Optional** - If specified only update data on objects that match the specified fields. Must be in the format of FieldName=MatchValue. Can also include '%' wildcard. You can specify multiple fields by seperating each with a new line. Also accepts an object from code. **If not specified will update all objects of the specified type!**
7. Update Fields (Text) **Required** - Update all matched objects with specified field values. Must be in the format of FieldName=NewValue. You can specify multiple fields by seperating each with a new line. Also accepts an object from code.

## Method: Create New Object
Create a new instance of an object from the specified type.

## Parameters
1. SalesForce URL (String) **Required if not in settings** - The URL of the SalesForce environment to connect to for this request.
2. Username (String) **Required if not in settings** - The username of the user to authenticate to Salesforce with.
3. Password (Vault) **Required if not in settings** - The password of the user to authenticate to Salesforce with.
4. Security Token (Vault) **Required if not in settings** - The security token of the  user to authenticate to Salesforce with. You can read more on security tokens [here](https://help.salesforce.com/s/articleView?id=sf.user_security_token.htm&type=5).
5. Object Type (String) **Required** - The type of object to create a new instance of.
6. Object Data (Text) **Required** - Initial values of the fields of the object to create. Must be in the format of FieldName=Value. You can specify multiple fields by seperating each with a new line. Also accepts an object from code.

## Method: Delete Objects
Delete Objects

## Parameters
1. SalesForce URL (String) **Required if not in settings** - The URL of the SalesForce environment to connect to for this request.
2. Username (String) **Required if not in settings** - The username of the user to authenticate to Salesforce with.
3. Password (Vault) **Required if not in settings** - The password of the user to authenticate to Salesforce with.
4. Security Token (Vault) **Required if not in settings** - The security token of the  user to authenticate to Salesforce with. You can read more on security tokens [here](https://help.salesforce.com/s/articleView?id=sf.user_security_token.htm&type=5).
5. Object Type (String) **Required** - The type of object to delete.
6. Match Fields (Text) **Required** - Only delete objects that match the specified fields and values. Must be in the format of FieldName=MatchValue. Can also include '%' wildcard. You can specify multiple fields by seperating each with a new line. Also accepts an object from code.

## Method: Execute SOQL Query
Execute SOQL Query

## Parameters
1. SalesForce URL (String) **Required if not in settings** - The URL of the SalesForce environment to connect to for this request.
2. Username (String) **Required if not in settings** - The username of the user to authenticate to Salesforce with.
3. Password (Vault) **Required if not in settings** - The password of the user to authenticate to Salesforce with.
4. Security Token (Vault) **Required if not in settings** - The security token of the  user to authenticate to Salesforce with. You can read more on security tokens [here](https://help.salesforce.com/s/articleView?id=sf.user_security_token.htm&type=5).
5. SOQL Query (Text) **Required** - Select objects using the specified SOQL query.