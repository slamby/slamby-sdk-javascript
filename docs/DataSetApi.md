# SlambySdk.DataSetApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDataSet**](DataSetApi.md#createDataSet) | **POST** /api/DataSets | 
[**createDataSetSchema**](DataSetApi.md#createDataSetSchema) | **POST** /api/DataSets/Schema | 
[**deleteDataSet**](DataSetApi.md#deleteDataSet) | **DELETE** /api/DataSets/{name} | 
[**getDataSet**](DataSetApi.md#getDataSet) | **GET** /api/DataSets/{name} | 
[**getDataSets**](DataSetApi.md#getDataSets) | **GET** /api/DataSets | 
[**updateDataSet**](DataSetApi.md#updateDataSet) | **PUT** /api/DataSets/{existingName} | 




<a name="createDataSet"></a>
# **createDataSet**
> createDataSet(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DataSetApi();

var opts = { 
  'dataSet': new SlambySdk.DataSet() // DataSet | 
};

apiInstance.createDataSet(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataSet** | [**DataSet**](DataSet.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="createDataSetSchema"></a>
# **createDataSetSchema**
> createDataSetSchema(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DataSetApi();

var opts = { 
  'dataSet': new SlambySdk.DataSet() // DataSet | 
};

apiInstance.createDataSetSchema(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataSet** | [**DataSet**](DataSet.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined


<a name="deleteDataSet"></a>
# **deleteDataSet**
> deleteDataSet(name)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DataSetApi();

var name = "name_example"; // String | 


apiInstance.deleteDataSet(name).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="getDataSet"></a>
# **getDataSet**
> DataSet getDataSet(name)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DataSetApi();

var name = "name_example"; // String | 


apiInstance.getDataSet(name).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 


### Return type

[**DataSet**](DataSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="getDataSets"></a>
# **getDataSets**
> [DataSet] getDataSets()



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DataSetApi();

apiInstance.getDataSets().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters
This endpoint does not need any parameter.


### Return type

[**[DataSet]**](DataSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="updateDataSet"></a>
# **updateDataSet**
> updateDataSet(existingName, opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.DataSetApi();

var existingName = "existingName_example"; // String | 

var opts = { 
  'dataSetUpdate': new SlambySdk.DataSetUpdate() // DataSetUpdate | 
};

apiInstance.updateDataSet(existingName, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existingName** | **String**|  | 
 **dataSetUpdate** | [**DataSetUpdate**](DataSetUpdate.md)|  | [optional] 


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined



