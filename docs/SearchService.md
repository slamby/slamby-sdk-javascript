# SlambySdk.SearchService

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prepareSettings** | [**SearchPrepareSettings**](SearchPrepareSettings.md) |  | [optional] 
**activateSettings** | [**SearchActivateSettings**](SearchActivateSettings.md) |  | [optional] 
**id** | **String** | Service unique identifier. It cannot be modified. | [optional] 
**name** | **String** | User-defined name for the service | 
**alias** | **String** | Alias name of the service. Services can be accessed via this name.\r\nAlias can be modified. It is unique amongst the services. | [optional] 
**description** | **String** | Service description | [optional] 
**status** | **String** | New - the service was created | \r\nBusy - the service is working on something (e.g.: during the Prepare) | \r\nPrepared - the service was prepared so you can activate it to use | \r\nActive - the service so you can use it | [optional] 
**type** | **String** | Type of the service.\r\nCurrently supported types:\r\n- Classifier\r\n- Prc | 
**processIdList** | **[String]** | Contains all the process ids which belong to this service | [optional] 
**actualProcessId** | **String** |  | [optional] 



