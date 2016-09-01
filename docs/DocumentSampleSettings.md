# SlambySdk.DocumentSampleSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | It must be a random string for every new sampling, but must be the same for the same sampling during pagination. \r\n            If you leave it empty then it&#39;ll be generated automatically, but then you can not use pagination | 
**tagIdList** | **[String]** | You can create a sample from a whole dataset, or just from a given tag section. \r\n            To create a sample from the whole dataset please keep it empty. \r\n            To create a sample from a given number of tags please provide the tag ids | [optional] 
**percent** | **Number** | Defining the sample size, you can use percentage or a given number. \r\n            Using a percentage you can define the document number by a percentage. \r\n            This percentage will calculate the document number by using the available dataset document number. \r\n            E.g.: if your dataset contains 100.000 documents and you are using 10% as a sampling size without stratified method, your sample size is 100.000 x 10% = 10.000 | [optional] 
**size** | **Integer** | Define your sample size by providing a simple integer. \r\n            E.g.: if your dataset contains 100.000 documents and you are using 3.000 as a sampling size without stratified method, your sample size is 3.000 | [optional] 
**fieldList** | **[String]** | Query returns only with the specified field(s) | [optional] 



