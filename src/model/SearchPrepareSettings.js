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
    root.SlambySdk.SearchPrepareSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SearchPrepareSettings model module.
   * @module model/SearchPrepareSettings
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>SearchPrepareSettings</code>.
   * @alias module:model/SearchPrepareSettings
   * @class
   * @param dataSetName
   */
  var exports = function(dataSetName) {

    this['DataSetName'] = dataSetName;
  };

exports.prototype.typeName = 'SearchPrepareSettings';

  /**
   * Constructs a <code>SearchPrepareSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchPrepareSettings} obj Optional instance to populate.
   * @return {module:model/SearchPrepareSettings} The populated <code>SearchPrepareSettings</code> instance.
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
    }
    return obj;
  }


  /**
   * The name of the DataSet in which this service will search
   * @member {String} DataSetName
   */
  exports.prototype['DataSetName'] = undefined;




  return exports;
}));
