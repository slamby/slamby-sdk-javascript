# SlambySdk.ClassifierService

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prepareSettings** | [**ClassifierPrepareSettings**](ClassifierPrepareSettings.md) |  | [optional] 
**activateSettings** | [**ClassifierActivateSettings**](ClassifierActivateSettings.md) |  | [optional] 
**id** | **String** | Service unique identifier. It cannot be modified. | [optional] 
**name** | **String** | User-defined name for the service | 
**alias** | **String** | Alias name of the service. Services can be accessed via this name.\r\n            Alias can be modified. It is unique amongst the services. | [optional] 
**description** | **String** | Service description | [optional] 
**status** | **String** | New - the service was created | \r\n            Busy - the service is working on something (e.g.: during the Prepare) | \r\n            Prepared - the service was prepared so you can activate it to use | \r\n            Active - the service so you can use it | [optional] 
**type** | **String** | Type of the service.\r\n            Currently supported types:\r\n            - Classifier\r\n            - Prc | 
**processIdList** | **[String]** | Contains all the process ids which belong to this service | [optional] 
**actualProcessId** | **String** |  | [optional] 



