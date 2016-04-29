# SlambySdk.ClassifierServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateService**](ClassifierServiceApi.md#activateService) | **POST** /api/Services/Classifier/{id}/Activate | 
[**deactivateService**](ClassifierServiceApi.md#deactivateService) | **POST** /api/Services/Classifier/{id}/Deactivate | 
[**exportDictionaries**](ClassifierServiceApi.md#exportDictionaries) | **POST** /api/Services/Classifier/{id}/ExportDictionaries | 
[**getService**](ClassifierServiceApi.md#getService) | **GET** /api/Services/Classifier/{id} | 
[**prepareService**](ClassifierServiceApi.md#prepareService) | **POST** /api/Services/Classifier/{id}/Prepare | 
[**recommendService**](ClassifierServiceApi.md#recommendService) | **POST** /api/Services/Classifier/{id}/Recommend | 




<a name="activateService"></a>
# **activateService**
> activateService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ClassifierServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'classifierActivateSettings': new SlambySdk.ClassifierActivateSettings() // ClassifierActivateSettings | 
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
 **classifierActivateSettings** | [**ClassifierActivateSettings**](ClassifierActivateSettings.md)|  | [optional] 


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


var apiInstance = new SlambySdk.ClassifierServiceApi();

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


var apiInstance = new SlambySdk.ClassifierServiceApi();

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
> ClassifierService getService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ClassifierServiceApi();

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

[**ClassifierService**](ClassifierService.md)

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


var apiInstance = new SlambySdk.ClassifierServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'classifierPrepareSettings': new SlambySdk.ClassifierPrepareSettings() // ClassifierPrepareSettings | 
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
 **classifierPrepareSettings** | [**ClassifierPrepareSettings**](ClassifierPrepareSettings.md)|  | [optional] 


### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="recommendService"></a>
# **recommendService**
> [ClassifierRecommendationResult] recommendService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ClassifierServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'request': new SlambySdk.ClassifierRecommendationRequest() // ClassifierRecommendationRequest | 
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
 **request** | [**ClassifierRecommendationRequest**](ClassifierRecommendationRequest.md)|  | [optional] 


### Return type

[**[ClassifierRecommendationResult]**](ClassifierRecommendationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



