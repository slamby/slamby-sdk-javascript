# SlambySdk.Filter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tagIdList** | **[String]** | You can direct your search queries into specific tags. \r\nBy giving the required tag id list, the filter will affect just the provided tags. \r\nIt&#39;s useful to create powerful search queries inside given tags. \r\nTo filter inside a whole dataset, you can set this field to empty | [optional] 
**query** | **String** | Set here the filters. The value is the query string you want to apply. \r\nCan be BOOL expressions. You can use these: AND, OR, NOT. \r\nFor example: &#39;searchforthis AND NOT butnotthis&#39;. \r\nAlso you can use wildcards. For example: &#39;exampl*&#39;. \r\nIf you want to search in a specified field, than do this: &#39;title:searchthisinthetitle&#39; | [optional] 



