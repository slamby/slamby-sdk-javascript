(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CompressSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompressSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.ClassifierPrepareSettings = factory(root.SlambySdk.ApiClient, root.SlambySdk.CompressSettings);
  }
}(this, function(ApiClient, CompressSettings) {
  'use strict';

  /**
   * The ClassifierPrepareSettings model module.
   * @module model/ClassifierPrepareSettings
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>ClassifierPrepareSettings</code>.
   * These settings are required for the training (Prepare method)
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
      if (data.hasOwnProperty('CompressLevel')) {
        obj['CompressLevel'] = ApiClient.convertToType(data['CompressLevel'], 'Integer');
      }
      if (data.hasOwnProperty('CompressSettings')) {
        obj['CompressSettings'] = CompressSettings.constructFromObject(data['CompressSettings']);
      }
    }
    return obj;
  }


  /**
   * The DataSet name where the Classifier will be trained from
   * @member {String} DataSetName
   */
  exports.prototype['DataSetName'] = undefined;

  /**
   * The list of the tag Ids which will be trained
   * @member {Array.<String>} TagIdList
   */
  exports.prototype['TagIdList'] = undefined;

  /**
   * The list of the NGrams which will be trained. The maximum NGram can be the DataSet's NGram
   * @member {Array.<Integer>} NGramList
   */
  exports.prototype['NGramList'] = undefined;

  /**
   * 
   * @member {Integer} CompressLevel
   */
  exports.prototype['CompressLevel'] = undefined;

  /**
   * 
   * @member {module:model/CompressSettings} CompressSettings
   */
  exports.prototype['CompressSettings'] = undefined;




  return exports;
}));
