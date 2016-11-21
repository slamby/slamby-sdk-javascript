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
    root.SlambySdk.PrcPrepareSettings = factory(root.SlambySdk.ApiClient, root.SlambySdk.CompressSettings);
  }
}(this, function(ApiClient, CompressSettings) {
  'use strict';

  /**
   * The PrcPrepareSettings model module.
   * @module model/PrcPrepareSettings
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>PrcPrepareSettings</code>.
   * @alias module:model/PrcPrepareSettings
   * @class
   * @param dataSetName
   */
  var exports = function(dataSetName) {

    this['DataSetName'] = dataSetName;



  };

exports.prototype.typeName = 'PrcPrepareSettings';

  /**
   * Constructs a <code>PrcPrepareSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrcPrepareSettings} obj Optional instance to populate.
   * @return {module:model/PrcPrepareSettings} The populated <code>PrcPrepareSettings</code> instance.
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
   * @member {String} DataSetName
   */
  exports.prototype['DataSetName'] = undefined;

  /**
   * 
   * @member {Array.<String>} TagIdList
   */
  exports.prototype['TagIdList'] = undefined;

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
