# SlambySdk.StatusApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatus**](StatusApi.md#getStatus) | **GET** /api/Status | 




<a name="getStatus"></a>
# **getStatus**
> Status getStatus()



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.StatusApi();

apiInstance.getStatus().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters
This endpoint does not need any parameter.


### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



