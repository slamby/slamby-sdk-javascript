# SlambySdk.HelperApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileParser**](HelperApi.md#fileParser) | **POST** /api/Helper/FileParser | 




<a name="fileParser"></a>
# **fileParser**
> FileParserResult fileParser(opts)



### Example
```javascript
var SlambySdk = require('slamby-sdk');


var apiInstance = new SlambySdk.HelperApi();

var opts = { 
  'fileParser': new SlambySdk.FileParser() // FileParser | 
};

apiInstance.fileParser(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileParser** | [**FileParser**](FileParser.md)|  | [optional] 


### Return type

[**FileParserResult**](FileParserResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



