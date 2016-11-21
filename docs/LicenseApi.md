# SlambySdk.LicenseApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeLicense**](LicenseApi.md#changeLicense) | **POST** /api/License | 
[**getLicense**](LicenseApi.md#getLicense) | **GET** /api/License | 




<a name="changeLicense"></a>
# **changeLicense**
> changeLicense(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.LicenseApi();

var opts = { 
  'model': new SlambySdk.ChangeLicense() // ChangeLicense | 
};

apiInstance.changeLicense(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**ChangeLicense**](ChangeLicense.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="getLicense"></a>
# **getLicense**
> License getLicense()



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.LicenseApi();

apiInstance.getLicense().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters
This endpoint does not need any parameter.


### Return type

[**License**](License.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



