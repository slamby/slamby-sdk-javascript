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
    root.SlambySdk.ChangeLicense = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChangeLicense model module.
   * @module model/ChangeLicense
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>ChangeLicense</code>.
   * @alias module:model/ChangeLicense
   * @class
   * @param license
   */
  var exports = function(license) {

    this['License'] = license;
  };

exports.prototype.typeName = 'ChangeLicense';

  /**
   * Constructs a <code>ChangeLicense</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeLicense} obj Optional instance to populate.
   * @return {module:model/ChangeLicense} The populated <code>ChangeLicense</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('License')) {
        obj['License'] = ApiClient.convertToType(data['License'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} License
   */
  exports.prototype['License'] = undefined;




  return exports;
}));
