# SlambySdk.DocumentApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkDocuments**](DocumentApi.md#bulkDocuments) | **POST** /api/Documents/Bulk | 
[**copyDocuments**](DocumentApi.md#copyDocuments) | **POST** /api/Documents/Copy | 
[**createDocument**](DocumentApi.md#createDocument) | **POST** /api/Documents | 
[**deleteDocument**](DocumentApi.md#deleteDocument) | **DELETE** /api/Documents/{id} | 
[**getDocument**](DocumentApi.md#getDocument) | **GET** /api/Documents/{id} | 
[**getFilteredDocuments**](DocumentApi.md#getFilteredDocuments) | **POST** /api/Documents/Filter/{scrollId} | 
[**getSampleDocuments**](DocumentApi.md#getSampleDocuments) | **POST** /api/Documents/Sample | 
[**moveDocuments**](DocumentApi.md#moveDocuments) | **POST** /api/Documents/Move | 
[**updateDocument**](DocumentApi.md#updateDocument) | **PUT** /api/Documents/{id} | 




<a name="bulkDocuments"></a>
# **bulkDocuments**
> BulkResults bulkDocuments(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DocumentApi();

var opts = { 
  'settings': new SlambySdk.DocumentBulkSettings() // DocumentBulkSettings | 
};

apiInstance.bulkDocuments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settings** | [**DocumentBulkSettings**](DocumentBulkSettings.md)|  | [optional] 


### Return type

[**BulkResults**](BulkResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="copyDocuments"></a>
# **copyDocuments**
> copyDocuments(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DocumentApi();

var opts = { 
  'copySettings': new SlambySdk.DocumentCopySettings() // DocumentCopySettings | 
};

apiInstance.copyDocuments(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **copySettings** | [**DocumentCopySettings**](DocumentCopySettings.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="createDocument"></a>
# **createDocument**
> createDocument(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DocumentApi();

var opts = { 
  'document': null // Object | 
};

apiInstance.createDocument(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document** | **Object**|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="deleteDocument"></a>
# **deleteDocument**
> deleteDocument(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DocumentApi();

var id = "id_example"; // String | 


apiInstance.deleteDocument(id).then(function() {
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


<a name="getDocument"></a>
# **getDocument**
> Object getDocument(id)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DocumentApi();

var id = "id_example"; // String | 


apiInstance.getDocument(id).then(function(data) {
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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="getFilteredDocuments"></a>
# **getFilteredDocuments**
> PaginatedListObject getFilteredDocuments(scrollId, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DocumentApi();

var scrollId = "scrollId_example"; // String | 

var opts = { 
  'filterSettings': new SlambySdk.DocumentFilterSettings() // DocumentFilterSettings | 
};

apiInstance.getFilteredDocuments(scrollId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scrollId** | **String**|  | 
 **filterSettings** | [**DocumentFilterSettings**](DocumentFilterSettings.md)|  | [optional] 


### Return type

[**PaginatedListObject**](PaginatedListObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="getSampleDocuments"></a>
# **getSampleDocuments**
> PaginatedListObject getSampleDocuments(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DocumentApi();

var opts = { 
  'sampleSettings': new SlambySdk.DocumentSampleSettings() // DocumentSampleSettings | 
};

apiInstance.getSampleDocuments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sampleSettings** | [**DocumentSampleSettings**](DocumentSampleSettings.md)|  | [optional] 


### Return type

[**PaginatedListObject**](PaginatedListObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="moveDocuments"></a>
# **moveDocuments**
> moveDocuments(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DocumentApi();

var opts = { 
  'moveSettings': new SlambySdk.DocumentMoveSettings() // DocumentMoveSettings | 
};

apiInstance.moveDocuments(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **moveSettings** | [**DocumentMoveSettings**](DocumentMoveSettings.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="updateDocument"></a>
# **updateDocument**
> Object updateDocument(id, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DocumentApi();

var id = "id_example"; // String | 

var opts = { 
  'document': null // Object | 
};

apiInstance.updateDocument(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **document** | **Object**|  | [optional] 


### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined



