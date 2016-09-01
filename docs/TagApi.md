# SlambySdk.TagApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkTags**](TagApi.md#bulkTags) | **POST** /api/Tags/Bulk | 
[**cleanDocuments**](TagApi.md#cleanDocuments) | **POST** /api/Tags/CleanDocuments | 
[**createTag**](TagApi.md#createTag) | **POST** /api/Tags | 
[**deleteTag**](TagApi.md#deleteTag) | **DELETE** /api/Tags/{id} | 
[**getTag**](TagApi.md#getTag) | **GET** /api/Tags/{id} | 
[**getTags**](TagApi.md#getTags) | **GET** /api/Tags | 
[**updateTag**](TagApi.md#updateTag) | **PUT** /api/Tags/{id} | 
[**wordsExport**](TagApi.md#wordsExport) | **POST** /api/Tags/ExportWords | 




<a name="bulkTags"></a>
# **bulkTags**
> BulkResults bulkTags(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.TagApi();

var opts = { 
  'settings': new SlambySdk.TagBulkSettings(), // TagBulkSettings | 
  'xDataSet': "xDataSet_example" // String | 
};

apiInstance.bulkTags(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settings** | [**TagBulkSettings**](TagBulkSettings.md)|  | [optional] 
 **xDataSet** | **String**|  | [optional] 


### Return type

[**BulkResults**](BulkResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="cleanDocuments"></a>
# **cleanDocuments**
> cleanDocuments()



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.TagApi();

apiInstance.cleanDocuments().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters
This endpoint does not need any parameter.


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="createTag"></a>
# **createTag**
> Tag createTag(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.TagApi();

var opts = { 
  'tag': new SlambySdk.Tag() // Tag | 
};

apiInstance.createTag(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**Tag**](Tag.md)|  | [optional] 


### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="deleteTag"></a>
# **deleteTag**
> deleteTag(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.TagApi();

var id = "id_example"; // String | 

var opts = { 
  'force': true, // Boolean | 
  'cleanDocuments': true // Boolean | 
};

apiInstance.deleteTag(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **force** | **Boolean**|  | [optional] 
 **cleanDocuments** | **Boolean**|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="getTag"></a>
# **getTag**
> Tag getTag(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.TagApi();

var id = "id_example"; // String | 

var opts = { 
  'withDetails': true // Boolean | 
};

apiInstance.getTag(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **withDetails** | **Boolean**|  | [optional] 


### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="getTags"></a>
# **getTags**
> [Tag] getTags(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.TagApi();

var opts = { 
  'withDetails': true // Boolean | 
};

apiInstance.getTags(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **withDetails** | **Boolean**|  | [optional] 


### Return type

[**[Tag]**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="updateTag"></a>
# **updateTag**
> updateTag(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.TagApi();

var id = "id_example"; // String | 

var opts = { 
  'tag': new SlambySdk.Tag() // Tag | 
};

apiInstance.updateTag(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **tag** | [**Tag**](Tag.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="wordsExport"></a>
# **wordsExport**
> Process wordsExport(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.TagApi();

var opts = { 
  'settings': new SlambySdk.TagsExportWordsSettings() // TagsExportWordsSettings | 
};

apiInstance.wordsExport(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settings** | [**TagsExportWordsSettings**](TagsExportWordsSettings.md)|  | [optional] 


### Return type

[**Process**](Process.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



