(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.ClassifierPrepareSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ClassifierPrepareSettings model module.
   * @module model/ClassifierPrepareSettings
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>ClassifierPrepareSettings</code>.
   * @alias module:model/ClassifierPrepareSettings
   * @class
   * @param dataSetName
   * @param nGramList
   */
  var exports = function(dataSetName, nGramList) {

    this['DataSetName'] = dataSetName;

    this['NGramList'] = nGramList;
  };

exports.prototype.typeName = 'ClassifierPrepareSettings';

  /**
   * Constructs a <code>ClassifierPrepareSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassifierPrepareSettings} obj Optional instance to populate.
   * @return {module:model/ClassifierPrepareSettings} The populated <code>ClassifierPrepareSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('DataSetName')) {
        obj['DataSetName'] = ApiClient.convertToType(data['DataSetName'], 'String');
      }
      if (data.hasOwnProperty('TagIdList')) {
        obj['TagIdList'] = ApiClient.convertToType(data['TagIdList'], ['String']);
      }
      if (data.hasOwnProperty('NGramList')) {
        obj['NGramList'] = ApiClient.convertToType(data['NGramList'], ['Integer']);
      }
    }
    return obj;
  }


  /**
   * @member {String} DataSetName
   */
  exports.prototype['DataSetName'] = undefined;

  /**
   * @member {Array.<String>} TagIdList
   */
  exports.prototype['TagIdList'] = undefined;

  /**
   * @member {Array.<Integer>} NGramList
   */
  exports.prototype['NGramList'] = undefined;




  return exports;
}));
