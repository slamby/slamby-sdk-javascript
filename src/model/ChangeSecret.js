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
    root.SlambySdk.ChangeSecret = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChangeSecret model module.
   * @module model/ChangeSecret
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ChangeSecret</code>.
   * Change Secret model
   * @alias module:model/ChangeSecret
   * @class
   * @param secret
   */
  var exports = function(secret) {

    this['Secret'] = secret;
  };

exports.prototype.typeName = 'ChangeSecret';

  /**
   * Constructs a <code>ChangeSecret</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeSecret} obj Optional instance to populate.
   * @return {module:model/ChangeSecret} The populated <code>ChangeSecret</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Secret')) {
        obj['Secret'] = ApiClient.convertToType(data['Secret'], 'String');
      }
    }
    return obj;
  }


  /**
   * New secret to be set
   * @member {String} Secret
   */
  exports.prototype['Secret'] = undefined;




  return exports;
}));
