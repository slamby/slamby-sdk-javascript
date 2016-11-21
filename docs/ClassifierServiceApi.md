# SlambySdk.ClassifierServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classifierActivateService**](ClassifierServiceApi.md#classifierActivateService) | **POST** /api/Services/Classifier/{id}/Activate | 
[**classifierDeactivateService**](ClassifierServiceApi.md#classifierDeactivateService) | **POST** /api/Services/Classifier/{id}/Deactivate | 
[**classifierExportDictionaries**](ClassifierServiceApi.md#classifierExportDictionaries) | **POST** /api/Services/Classifier/{id}/ExportDictionaries | 
[**classifierGetService**](ClassifierServiceApi.md#classifierGetService) | **GET** /api/Services/Classifier/{id} | 
[**classifierPrepareService**](ClassifierServiceApi.md#classifierPrepareService) | **POST** /api/Services/Classifier/{id}/Prepare | 
[**classifierRecommendService**](ClassifierServiceApi.md#classifierRecommendService) | **POST** /api/Services/Classifier/{id}/Recommend | 




<a name="classifierActivateService"></a>
# **classifierActivateService**
> Process classifierActivateService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ClassifierServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'classifierActivateSettings': new SlambySdk.ClassifierActivateSettings() // ClassifierActivateSettings | 
};

apiInstance.classifierActivateService(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
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

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="classifierDeactivateService"></a>
# **classifierDeactivateService**
> classifierDeactivateService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ClassifierServiceApi();

var id = "id_example"; // String | 


apiInstance.classifierDeactivateService(id).then(function() {
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


<a name="classifierExportDictionaries"></a>
# **classifierExportDictionaries**
> Process classifierExportDictionaries(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ClassifierServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'settings': new SlambySdk.ExportDictionariesSettings() // ExportDictionariesSettings | 
};

apiInstance.classifierExportDictionaries(id, opts).then(function(data) {
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

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="classifierGetService"></a>
# **classifierGetService**
> ClassifierService classifierGetService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ClassifierServiceApi();

var id = "id_example"; // String | 


apiInstance.classifierGetService(id).then(function(data) {
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


<a name="classifierPrepareService"></a>
# **classifierPrepareService**
> Process classifierPrepareService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ClassifierServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'classifierPrepareSettings': new SlambySdk.ClassifierPrepareSettings() // ClassifierPrepareSettings | 
};

apiInstance.classifierPrepareService(id, opts).then(function(data) {
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

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="classifierRecommendService"></a>
# **classifierRecommendService**
> [ClassifierRecommendationResult] classifierRecommendService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.ClassifierServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'request': new SlambySdk.ClassifierRecommendationRequest() // ClassifierRecommendationRequest | 
};

apiInstance.classifierRecommendService(id, opts).then(function(data) {
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

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined



