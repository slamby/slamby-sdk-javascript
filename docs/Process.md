# SlambySdk.Process

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The process GUID identifier | [optional] 
**start** | **Date** | The UTC time of the process start | [optional] 
**end** | **Date** | The UTC time of the process end | [optional] 
**percent** | **Number** | The percent of the whole process. (e.g.: 12.23 means 12.23%) | [optional] 
**description** | **String** | Process description | [optional] 
**status** | **String** | InProgress - the process is in progress, it&#39;s working |\r\nCancelled - the process was cancelled by the user |\r\nFinished - the process was finished successfully |\r\nError - the process stopped by an error, see the ErrorMessages for detailed information |\r\nInterrupted - the process was interrupted by an unknown event (e.g.: server restart) - under development |\r\nPaused - the process was paused  - under development | [optional] 
**type** | **String** | Type of the process | [optional] 
**errorMessages** | **[String]** |  | [optional] 
**resultMessage** | **String** |  | [optional] 



