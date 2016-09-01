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
    root.SlambySdk.FileParser = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FileParser model module.
   * @module model/FileParser
   * @version 1.0.0-rc1
   */

  /**
   * Constructs a new <code>FileParser</code>.
   * File parser request
   * @alias module:model/FileParser
   * @class
   * @param content
   */
  var exports = function(content) {

    this['Content'] = content;
  };

exports.prototype.typeName = 'FileParser';

  /**
   * Constructs a <code>FileParser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileParser} obj Optional instance to populate.
   * @return {module:model/FileParser} The populated <code>FileParser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Content')) {
        obj['Content'] = ApiClient.convertToType(data['Content'], 'String');
      }
    }
    return obj;
  }


  /**
   * Valid base64 document content
   * @member {String} Content
   */
  exports.prototype['Content'] = undefined;




  return exports;
}));
