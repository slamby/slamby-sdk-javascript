# SlambySdk.MaintenanceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeSecret**](MaintenanceApi.md#changeSecret) | **POST** /api/Maintenance/ChangeSecret | 




<a name="changeSecret"></a>
# **changeSecret**
> changeSecret(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.MaintenanceApi();

var opts = { 
  'secret': new SlambySdk.ChangeSecret() // ChangeSecret | 
};

apiInstance.changeSecret(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secret** | [**ChangeSecret**](ChangeSecret.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined



