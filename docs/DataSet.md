# SlambySdk.DataSet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of your dataset. Can contains just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space. This field is unique | 
**nGramCount** | **Integer** | To deeper analyze your text, a dataset uses ngram to index your document. You can set the ngramcount from 1 to 6 | 
**idField** | **String** | To identify a document you need to use IDs. You can use your own conventions to name your ID field, but in the settings you need to provide the field name of the id field from your sample document. Can contains just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space | 
**tagField** | **String** | For text categorization, we provide a predefined document field to store your tags (or categories). If your documents are related to tags or categories, please insert here the tags field name from your sample JSON. Can contains just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space | 
**interpretedFields** | **[String]** | For text analysis, you can set those document fields that contains useful text content. Slamby is doing ngram analysis and text process related works on these fields. How to decide which field you need to set here? Only the interpreted field can be a part of text analyzes. To provide these fields just simply insert the needed text fields from your JSON document. Field names can contain just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space | 
**statistics** | [**DataSetStats**](DataSetStats.md) | These are read-only calculated values | [optional] 
**sampleDocument** | **Object** | Using flexible document schema, you can store all of your required data inside one simple dataset. To create a dataset with your required schema you can provide a sample document. The schema is flexible; the only requirement is using standard JSON format. Field names can contain just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space | [optional] 
**schema** | **Object** | Using flexible document schema, you can store all of your required data inside one simple dataset. To create a dataset with your required schema you can provide a schema. The schema is flexible. Field names can contain just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space | [optional] 



