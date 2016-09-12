(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DataSetStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DataSetStats'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.DataSet = factory(root.SlambySdk.ApiClient, root.SlambySdk.DataSetStats);
  }
}(this, function(ApiClient, DataSetStats) {
  'use strict';

  /**
   * The DataSet model module.
   * @module model/DataSet
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DataSet</code>.
   * DataSet object
   * @alias module:model/DataSet
   * @class
   * @param name
   * @param nGramCount
   * @param idField
   * @param tagField
   * @param interpretedFields
   */
  var exports = function(name, nGramCount, idField, tagField, interpretedFields) {

    this['Name'] = name;
    this['NGramCount'] = nGramCount;
    this['IdField'] = idField;
    this['TagField'] = tagField;
    this['InterpretedFields'] = interpretedFields;



  };

exports.prototype.typeName = 'DataSet';

  /**
   * Constructs a <code>DataSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataSet} obj Optional instance to populate.
   * @return {module:model/DataSet} The populated <code>DataSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('NGramCount')) {
        obj['NGramCount'] = ApiClient.convertToType(data['NGramCount'], 'Integer');
      }
      if (data.hasOwnProperty('IdField')) {
        obj['IdField'] = ApiClient.convertToType(data['IdField'], 'String');
      }
      if (data.hasOwnProperty('TagField')) {
        obj['TagField'] = ApiClient.convertToType(data['TagField'], 'String');
      }
      if (data.hasOwnProperty('InterpretedFields')) {
        obj['InterpretedFields'] = ApiClient.convertToType(data['InterpretedFields'], ['String']);
      }
      if (data.hasOwnProperty('Statistics')) {
        obj['Statistics'] = DataSetStats.constructFromObject(data['Statistics']);
      }
      if (data.hasOwnProperty('SampleDocument')) {
        obj['SampleDocument'] = ApiClient.convertToType(data['SampleDocument'], Object);
      }
      if (data.hasOwnProperty('Schema')) {
        obj['Schema'] = ApiClient.convertToType(data['Schema'], Object);
      }
    }
    return obj;
  }


  /**
   * Name of your dataset. Can contains just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space. This field is unique
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;

  /**
   * To deeper analyze your text, a dataset uses ngram to index your document. You can set the ngramcount from 1 to 6
   * @member {Integer} NGramCount
   */
  exports.prototype['NGramCount'] = undefined;

  /**
   * To identify a document you need to use IDs. You can use your own conventions to name your ID field, but in the settings you need to provide the field name of the id field from your sample document. Can contains just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space
   * @member {String} IdField
   */
  exports.prototype['IdField'] = undefined;

  /**
   * For text categorization, we provide a predefined document field to store your tags (or categories). If your documents are related to tags or categories, please insert here the tags field name from your sample JSON. Can contains just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space
   * @member {String} TagField
   */
  exports.prototype['TagField'] = undefined;

  /**
   * For text analysis, you can set those document fields that contains useful text content. Slamby is doing ngram analysis and text process related works on these fields. How to decide which field you need to set here? Only the interpreted field can be a part of text analyzes. To provide these fields just simply insert the needed text fields from your JSON document. Field names can contain just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space
   * @member {Array.<String>} InterpretedFields
   */
  exports.prototype['InterpretedFields'] = undefined;

  /**
   * These are read-only calculated values
   * @member {module:model/DataSetStats} Statistics
   */
  exports.prototype['Statistics'] = undefined;

  /**
   * Using flexible document schema, you can store all of your required data inside one simple dataset. To create a dataset with your required schema you can provide a sample document. The schema is flexible; the only requirement is using standard JSON format. Field names can contain just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space
   * @member {Object} SampleDocument
   */
  exports.prototype['SampleDocument'] = undefined;

  /**
   * Using flexible document schema, you can store all of your required data inside one simple dataset. To create a dataset with your required schema you can provide a schema. The schema is flexible. Field names can contain just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space
   * @member {Object} Schema
   */
  exports.prototype['Schema'] = undefined;




  return exports;
}));
