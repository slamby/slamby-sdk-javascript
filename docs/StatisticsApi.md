# SlambySdk.StatisticsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatistics**](StatisticsApi.md#getStatistics) | **GET** /api/Statistics | 
[**getStatistics_0**](StatisticsApi.md#getStatistics_0) | **GET** /api/Statistics/{year} | 
[**getStatistics_1**](StatisticsApi.md#getStatistics_1) | **GET** /api/Statistics/{year}/{month} | 




<a name="getStatistics"></a>
# **getStatistics**
> StatisticsWrapper getStatistics()



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.StatisticsApi();

apiInstance.getStatistics().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters
This endpoint does not need any parameter.


### Return type

[**StatisticsWrapper**](StatisticsWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="getStatistics_0"></a>
# **getStatistics_0**
> StatisticsWrapper getStatistics_0(year)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.StatisticsApi();

var year = 56; // Integer | 


apiInstance.getStatistics_0(year).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Integer**|  | 


### Return type

[**StatisticsWrapper**](StatisticsWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


<a name="getStatistics_1"></a>
# **getStatistics_1**
> StatisticsWrapper getStatistics_1(year, month)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.StatisticsApi();

var year = 56; // Integer | 

var month = 56; // Integer | 


apiInstance.getStatistics_1(year, month).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Integer**|  | 
 **month** | **Integer**|  | 


### Return type

[**StatisticsWrapper**](StatisticsWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



