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
    root.SlambySdk.PrcActivateSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PrcActivateSettings model module.
   * @module model/PrcActivateSettings
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>PrcActivateSettings</code>.
   * @alias module:model/PrcActivateSettings
   * @class
   */
  var exports = function() {


  };

exports.prototype.typeName = 'PrcActivateSettings';

  /**
   * Constructs a <code>PrcActivateSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrcActivateSettings} obj Optional instance to populate.
   * @return {module:model/PrcActivateSettings} The populated <code>PrcActivateSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('FieldsForRecommendation')) {
        obj['FieldsForRecommendation'] = ApiClient.convertToType(data['FieldsForRecommendation'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<String>} FieldsForRecommendation
   */
  exports.prototype['FieldsForRecommendation'] = undefined;




  return exports;
}));
