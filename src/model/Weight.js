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
    root.SlambySdk.Weight = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Weight model module.
   * @module model/Weight
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>Weight</code>.
   * Weight object
   * @alias module:model/Weight
   * @class
   */
  var exports = function() {



  };

exports.prototype.typeName = 'Weight';

  /**
   * Constructs a <code>Weight</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Weight} obj Optional instance to populate.
   * @return {module:model/Weight} The populated <code>Weight</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Query')) {
        obj['Query'] = ApiClient.convertToType(data['Query'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = ApiClient.convertToType(data['Value'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Set here the filters. The value is the query string you want to apply. \r\nCan be BOOL expressions. You can use these: AND, OR, NOT. \r\nFor example: 'searchforthis AND NOT butnotthis'. \r\nAlso you can use wildcards. For example: 'exampl*'. \r\nIf you want to search in a specified field, than do this: 'title:searchthisinthetitle'
   * @member {String} Query
   */
  exports.prototype['Query'] = undefined;

  /**
   * @member {Number} Value
   */
  exports.prototype['Value'] = undefined;




  return exports;
}));
