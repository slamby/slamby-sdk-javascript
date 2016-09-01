# SlambySdk.PrcServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**prcActivateService**](PrcServiceApi.md#prcActivateService) | **POST** /api/Services/Prc/{id}/Activate | 
[**prcDeactivateService**](PrcServiceApi.md#prcDeactivateService) | **POST** /api/Services/Prc/{id}/Deactivate | 
[**prcExportDictionaries**](PrcServiceApi.md#prcExportDictionaries) | **POST** /api/Services/Prc/{id}/ExportDictionaries | 
[**prcGetService**](PrcServiceApi.md#prcGetService) | **GET** /api/Services/Prc/{id} | 
[**prcIndexPartialService**](PrcServiceApi.md#prcIndexPartialService) | **POST** /api/Services/Prc/{id}/IndexPartial | 
[**prcIndexService**](PrcServiceApi.md#prcIndexService) | **POST** /api/Services/Prc/{id}/Index | 
[**prcKeywordsService**](PrcServiceApi.md#prcKeywordsService) | **POST** /api/Services/Prc/{id}/Keywords | 
[**prcPrepareService**](PrcServiceApi.md#prcPrepareService) | **POST** /api/Services/Prc/{id}/Prepare | 
[**prcRecommendByIdService**](PrcServiceApi.md#prcRecommendByIdService) | **POST** /api/Services/Prc/{id}/RecommendById | 
[**prcRecommendService**](PrcServiceApi.md#prcRecommendService) | **POST** /api/Services/Prc/{id}/Recommend | 




<a name="prcActivateService"></a>
# **prcActivateService**
> Process prcActivateService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'prcActivateSettings': new SlambySdk.PrcActivateSettings() // PrcActivateSettings | 
};

apiInstance.prcActivateService(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
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

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="prcDeactivateService"></a>
# **prcDeactivateService**
> prcDeactivateService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 


apiInstance.prcDeactivateService(id).then(function() {
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


<a name="prcExportDictionaries"></a>
# **prcExportDictionaries**
> Process prcExportDictionaries(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'settings': new SlambySdk.ExportDictionariesSettings() // ExportDictionariesSettings | 
};

apiInstance.prcExportDictionaries(id, opts).then(function(data) {
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


<a name="prcGetService"></a>
# **prcGetService**
> PrcService prcGetService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 


apiInstance.prcGetService(id).then(function(data) {
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


<a name="prcIndexPartialService"></a>
# **prcIndexPartialService**
> Process prcIndexPartialService(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 


apiInstance.prcIndexPartialService(id).then(function(data) {
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


<a name="prcIndexService"></a>
# **prcIndexService**
> Process prcIndexService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'prcIndexSettings': new SlambySdk.PrcIndexSettings() // PrcIndexSettings | 
};

apiInstance.prcIndexService(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **prcIndexSettings** | [**PrcIndexSettings**](PrcIndexSettings.md)|  | [optional] 


### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="prcKeywordsService"></a>
# **prcKeywordsService**
> [PrcKeywordsResult] prcKeywordsService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'request': new SlambySdk.PrcKeywordsRequest(), // PrcKeywordsRequest | 
  'isStrict': true // Boolean | 
};

apiInstance.prcKeywordsService(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **request** | [**PrcKeywordsRequest**](PrcKeywordsRequest.md)|  | [optional] 
 **isStrict** | **Boolean**|  | [optional] 


### Return type

[**[PrcKeywordsResult]**](PrcKeywordsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="prcPrepareService"></a>
# **prcPrepareService**
> Process prcPrepareService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'prcPrepareSettings': new SlambySdk.PrcPrepareSettings() // PrcPrepareSettings | 
};

apiInstance.prcPrepareService(id, opts).then(function(data) {
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


<a name="prcRecommendByIdService"></a>
# **prcRecommendByIdService**
> [PrcRecommendationResult] prcRecommendByIdService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'request': new SlambySdk.PrcRecommendationByIdRequest() // PrcRecommendationByIdRequest | 
};

apiInstance.prcRecommendByIdService(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **request** | [**PrcRecommendationByIdRequest**](PrcRecommendationByIdRequest.md)|  | [optional] 


### Return type

[**[PrcRecommendationResult]**](PrcRecommendationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="prcRecommendService"></a>
# **prcRecommendService**
> [PrcRecommendationResult] prcRecommendService(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.PrcServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'request': new SlambySdk.PrcRecommendationRequest() // PrcRecommendationRequest | 
};

apiInstance.prcRecommendService(id, opts).then(function(data) {
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



