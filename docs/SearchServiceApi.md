# SlambySdk.SearchServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchActivateService**](SearchServiceApi.md#searchActivateService) | **POST** /api/Services/Search/{id}/Activate | 
[**searchDeactivateService**](SearchServiceApi.md#searchDeactivateService) | **POST** /api/Services/Search/{id}/Deactivate | 
[**searchGetService**](SearchServiceApi.md#searchGetService) | **GET** /api/Services/Search/{id} | 
[**searchPrepareService**](SearchServiceApi.md#searchPrepareService) | **POST** /api/Services/Search/{id}/Prepare | 
[**searchService**](SearchServiceApi.md#searchService) | **POST** /api/Services/Search/{id} | 




<a name="searchActivateService"></a>
# **searchActivateService**
> searchActivateService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.SearchServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'searchActivateSettings': new SlambySdk.SearchActivateSettings() // SearchActivateSettings | 
};

apiInstance.searchActivateService(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **searchActivateSettings** | [**SearchActivateSettings**](SearchActivateSettings.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="searchDeactivateService"></a>
# **searchDeactivateService**
> searchDeactivateService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.SearchServiceApi();

var id = "id_example"; // String | 


apiInstance.searchDeactivateService(id).then(function() {
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


<a name="searchGetService"></a>
# **searchGetService**
> SearchService searchGetService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.SearchServiceApi();

var id = "id_example"; // String | 


apiInstance.searchGetService(id).then(function(data) {
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

[**SearchService**](SearchService.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="searchPrepareService"></a>
# **searchPrepareService**
> searchPrepareService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.SearchServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'searchPrepareSettings': new SlambySdk.SearchPrepareSettings() // SearchPrepareSettings | 
};

apiInstance.searchPrepareService(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **searchPrepareSettings** | [**SearchPrepareSettings**](SearchPrepareSettings.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="searchService"></a>
# **searchService**
> [SearchResultWrapper] searchService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.SearchServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'request': new SlambySdk.SearchRequest() // SearchRequest | 
};

apiInstance.searchService(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **request** | [**SearchRequest**](SearchRequest.md)|  | [optional] 


### Return type

[**[SearchResultWrapper]**](SearchResultWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined



