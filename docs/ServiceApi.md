# SlambySdk.ServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createService**](ServiceApi.md#createService) | **POST** /api/Services | 
[**deleteService**](ServiceApi.md#deleteService) | **DELETE** /api/Services/{id} | 
[**getService**](ServiceApi.md#getService) | **GET** /api/Services/{id} | 
[**getServices**](ServiceApi.md#getServices) | **GET** /api/Services | 
[**updateService**](ServiceApi.md#updateService) | **PUT** /api/Services/{id} | 




<a name="createService"></a>
# **createService**
> createService(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ServiceApi();

var opts = { 
  'service': new SlambySdk.Service() // Service | 
};

apiInstance.createService(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**Service**](Service.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="deleteService"></a>
# **deleteService**
> deleteService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ServiceApi();

var id = "id_example"; // String | 


apiInstance.deleteService(id).then(function() {
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


<a name="getService"></a>
# **getService**
> Service getService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ServiceApi();

var id = "id_example"; // String | 


apiInstance.getService(id).then(function(data) {
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

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="getServices"></a>
# **getServices**
> [Service] getServices()



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ServiceApi();

apiInstance.getServices().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters
This endpoint does not need any parameter.


### Return type

[**[Service]**](Service.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="updateService"></a>
# **updateService**
> Service updateService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'service': new SlambySdk.Service() // Service | 
};

apiInstance.updateService(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **service** | [**Service**](Service.md)|  | [optional] 


### Return type

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



