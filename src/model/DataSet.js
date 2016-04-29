(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DataSetStats', './ModelObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DataSetStats'), require('./ModelObject'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.DataSet = factory(root.SlambySdk.ApiClient, root.SlambySdk.DataSetStats, root.SlambySdk.ModelObject);
  }
}(this, function(ApiClient, DataSetStats, ModelObject) {
  'use strict';

  /**
   * The DataSet model module.
   * @module model/DataSet
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>DataSet</code>.
   * @alias module:model/DataSet
   * @class
   * @param name
   * @param nGramCount
   * @param idField
   * @param tagField
   * @param interpretedFields
   * @param sampleDocument
   */
  var exports = function(name, nGramCount, idField, tagField, interpretedFields, sampleDocument) {

    this['Name'] = name;
    this['NGramCount'] = nGramCount;
    this['IdField'] = idField;
    this['TagField'] = tagField;
    this['InterpretedFields'] = interpretedFields;

    this['SampleDocument'] = sampleDocument;
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
        obj['SampleDocument'] = ModelObject.constructFromObject(data['SampleDocument']);
      }
    }
    return obj;
  }


  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;

  /**
   * @member {Integer} NGramCount
   */
  exports.prototype['NGramCount'] = undefined;

  /**
   * @member {String} IdField
   */
  exports.prototype['IdField'] = undefined;

  /**
   * @member {String} TagField
   */
  exports.prototype['TagField'] = undefined;

  /**
   * @member {Array.<String>} InterpretedFields
   */
  exports.prototype['InterpretedFields'] = undefined;

  /**
   * @member {module:model/DataSetStats} Statistics
   */
  exports.prototype['Statistics'] = undefined;

  /**
   * @member {module:model/ModelObject} SampleDocument
   */
  exports.prototype['SampleDocument'] = undefined;




  return exports;
}));
