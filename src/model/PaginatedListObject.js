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
    root.SlambySdk.PaginatedListObject = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PaginatedListObject model module.
   * @module model/PaginatedListObject
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PaginatedListObject</code>.
   * @alias module:model/PaginatedListObject
   * @class
   */
  var exports = function() {





  };

exports.prototype.typeName = 'PaginatedListObject';

  /**
   * Constructs a <code>PaginatedListObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaginatedListObject} obj Optional instance to populate.
   * @return {module:model/PaginatedListObject} The populated <code>PaginatedListObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Object]);
      }
      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Integer');
      }
      if (data.hasOwnProperty('Total')) {
        obj['Total'] = ApiClient.convertToType(data['Total'], 'Integer');
      }
      if (data.hasOwnProperty('ScrollId')) {
        obj['ScrollId'] = ApiClient.convertToType(data['ScrollId'], 'String');
      }
    }
    return obj;
  }


  /**
   * Containing the actual displayed items. The type of the elements depend on the method
   * @member {Array.<Object>} Items
   */
  exports.prototype['Items'] = undefined;

  /**
   * The count of the actual returned items
   * @member {Integer} Count
   */
  exports.prototype['Count'] = undefined;

  /**
   * The count of all items which are the pagination applied
   * @member {Integer} Total
   */
  exports.prototype['Total'] = undefined;

  /**
   * Identifier for the next series of items where it is applicable
   * @member {String} ScrollId
   */
  exports.prototype['ScrollId'] = undefined;




  return exports;
}));
