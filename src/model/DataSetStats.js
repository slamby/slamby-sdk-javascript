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
    root.SlambySdk.DataSetStats = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DataSetStats model module.
   * @module model/DataSetStats
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>DataSetStats</code>.
   * @alias module:model/DataSetStats
   * @class
   */
  var exports = function() {


  };

exports.prototype.typeName = 'DataSetStats';

  /**
   * Constructs a <code>DataSetStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataSetStats} obj Optional instance to populate.
   * @return {module:model/DataSetStats} The populated <code>DataSetStats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('DocumentsCount')) {
        obj['DocumentsCount'] = ApiClient.convertToType(data['DocumentsCount'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} DocumentsCount
   */
  exports.prototype['DocumentsCount'] = undefined;




  return exports;
}));
