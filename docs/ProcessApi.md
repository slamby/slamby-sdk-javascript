# SlambySdk.ProcessApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelProcess**](ProcessApi.md#cancelProcess) | **POST** /api/Processes/{id}/Cancel | 
[**getProcess**](ProcessApi.md#getProcess) | **GET** /api/Processes/{id} | 
[**getProcesses**](ProcessApi.md#getProcesses) | **GET** /api/Processes | 




<a name="cancelProcess"></a>
# **cancelProcess**
> cancelProcess(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ProcessApi();

var id = "id_example"; // String | 


apiInstance.cancelProcess(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="getProcess"></a>
# **getProcess**
> Process getProcess(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ProcessApi();

var id = "id_example"; // String | 


apiInstance.getProcess(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 


### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="getProcesses"></a>
# **getProcesses**
> [Process] getProcesses(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ProcessApi();

var opts = { 
  'allStatus': true, // Boolean | 
  'allTime': true // Boolean | 
};

apiInstance.getProcesses(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allStatus** | **Boolean**|  | [optional] 
 **allTime** | **Boolean**|  | [optional] 


### Return type

[**[Process]**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



