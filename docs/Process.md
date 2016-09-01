# SlambySdk.Process

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The process GUID identifier | [optional] 
**start** | **Date** | The UTC time of the process start | [optional] 
**end** | **Date** | The UTC time of the process end | [optional] 
**percent** | **Number** | The percent of the whole process. (e.g.: 12.23 means 12.23%) | [optional] 
**description** | **String** | Process description | [optional] 
**status** | **String** | InProgress - the process is in progress, it&#39;s working |\r\n            Cancelled - the process was cancelled by the user |\r\n            Finished - the process was finished successfully |\r\n            Error - the process stopped by an error, see the ErrorMessages for detailed information |\r\n            Interrupted - the process was interrupted by an unknown event (e.g.: server restart) - under development |\r\n            Paused - the process was paused  - under development | [optional] 
**type** | **String** | Type of the process | [optional] 
**errorMessages** | **[String]** |  | [optional] 
**resultMessage** | **String** |  | [optional] 



