# SlambySdk.Filter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tagIdList** | **[String]** | You can direct your search queries into specific tags. \r\n            By giving the required tag id list, the filter will affect just the provided tags. \r\n            It&#39;s useful to create powerful search queries inside given tags. \r\n            To filter inside a whole dataset, you can set this field to empty | [optional] 
**query** | **String** | Set here the filters. The value is the query string you want to apply. \r\n            Can be BOOL expressions. You can use these: AND, OR, NOT. \r\n            For example: &#39;searchforthis AND NOT butnotthis&#39;. \r\n            Also you can use wildcards. For example: &#39;exampl*&#39;. \r\n            If you want to search in a specified field, than do thie: &#39;title:searchthisinthetitle&#39; | [optional] 



