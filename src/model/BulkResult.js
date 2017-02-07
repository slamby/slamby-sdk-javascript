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
    root.SlambySdk.BulkResult = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BulkResult model module.
   * @module model/BulkResult
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>BulkResult</code>.
   * \&quot;Result of a bulk save element.\r\nIf the save was successful then the StatusCode is 2XX. \r\nIf there was a problem, the StatusCode is not 2XX, and the error message is in the Error field.
   * @alias module:model/BulkResult
   * @class
   */
  var exports = function() {




  };

exports.prototype.typeName = 'BulkResult';

  /**
   * Constructs a <code>BulkResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkResult} obj Optional instance to populate.
   * @return {module:model/BulkResult} The populated <code>BulkResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('StatusCode')) {
        obj['StatusCode'] = ApiClient.convertToType(data['StatusCode'], 'Integer');
      }
      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Error')) {
        obj['Error'] = ApiClient.convertToType(data['Error'], 'String');
      }
    }
    return obj;
  }


  /**
   * HTTP status code
   * @member {Integer} StatusCode
   */
  exports.prototype['StatusCode'] = undefined;

  /**
   * Document id
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;

  /**
   * Error message
   * @member {String} Error
   */
  exports.prototype['Error'] = undefined;




  return exports;
}));
