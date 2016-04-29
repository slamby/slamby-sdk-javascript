# SlambySdk.PrcServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateService**](PrcServiceApi.md#activateService) | **POST** /api/Services/Prc/{id}/Activate | 
[**deactivateService**](PrcServiceApi.md#deactivateService) | **POST** /api/Services/Prc/{id}/Deactivate | 
[**exportDictionaries**](PrcServiceApi.md#exportDictionaries) | **POST** /api/Services/Prc/{id}/ExportDictionaries | 
[**getService**](PrcServiceApi.md#getService) | **GET** /api/Services/Prc/{id} | 
[**prepareService**](PrcServiceApi.md#prepareService) | **POST** /api/Services/Prc/{id}/Prepare | 
[**recommendService**](PrcServiceApi.md#recommendService) | **POST** /api/Services/Prc/{id}/Recommend | 




<a name="activateService"></a>
# **activateService**
> activateService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'prcActivateSettings': new SlambySdk.PrcActivateSettings() // PrcActivateSettings | 
};

apiInstance.activateService(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **prcActivateSettings** | [**PrcActivateSettings**](PrcActivateSettings.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="deactivateService"></a>
# **deactivateService**
> deactivateService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 


apiInstance.deactivateService(id).then(function() {
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


<a name="exportDictionaries"></a>
# **exportDictionaries**
> Process exportDictionaries(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'settings': new SlambySdk.ExportDictionariesSettings() // ExportDictionariesSettings | 
};

apiInstance.exportDictionaries(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **settings** | [**ExportDictionariesSettings**](ExportDictionariesSettings.md)|  | [optional] 


### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="getService"></a>
# **getService**
> PrcService getService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

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

[**PrcService**](PrcService.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="prepareService"></a>
# **prepareService**
> Process prepareService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'prcPrepareSettings': new SlambySdk.PrcPrepareSettings() // PrcPrepareSettings | 
};

apiInstance.prepareService(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **prcPrepareSettings** | [**PrcPrepareSettings**](PrcPrepareSettings.md)|  | [optional] 


### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="recommendService"></a>
# **recommendService**
> [PrcRecommendationResult] recommendService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'request': new SlambySdk.PrcRecommendationRequest() // PrcRecommendationRequest | 
};

apiInstance.recommendService(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **request** | [**PrcRecommendationRequest**](PrcRecommendationRequest.md)|  | [optional] 


### Return type

[**[PrcRecommendationResult]**](PrcRecommendationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



