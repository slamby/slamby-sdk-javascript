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
    root.SlambySdk.License = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The License model module.
   * @module model/License
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>License</code>.
   * @alias module:model/License
   * @class
   */
  var exports = function() {





  };

exports.prototype.typeName = 'License';

  /**
   * Constructs a <code>License</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/License} obj Optional instance to populate.
   * @return {module:model/License} The populated <code>License</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('IsValid')) {
        obj['IsValid'] = ApiClient.convertToType(data['IsValid'], 'Boolean');
      }
      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('Base64')) {
        obj['Base64'] = ApiClient.convertToType(data['Base64'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Boolean} IsValid
   */
  exports.prototype['IsValid'] = undefined;

  /**
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;

  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;

  /**
   * @member {String} Base64
   */
  exports.prototype['Base64'] = undefined;




  return exports;
}));
