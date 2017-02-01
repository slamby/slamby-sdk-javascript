# SlambySdk.StatisticsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatistics**](StatisticsApi.md#getStatistics) | **GET** /api/Statistics/{year}/{month} | 




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



