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
    root.SlambySdk.Order = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Order model module.
   * @module model/Order
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>Order</code>.
   * @alias module:model/Order
   * @class
   */
  var exports = function() {



  };

exports.prototype.typeName = 'Order';

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('OrderDirection')) {
        obj['OrderDirection'] = ApiClient.convertToType(data['OrderDirection'], 'String');
      }
      if (data.hasOwnProperty('OrderByField')) {
        obj['OrderByField'] = ApiClient.convertToType(data['OrderByField'], 'String');
      }
    }
    return obj;
  }


  /**
   * The ordering of the list, Ascending or Descending
   * @member {module:model/Order.OrderDirectionEnum} OrderDirection
   */
  exports.prototype['OrderDirection'] = undefined;

  /**
   * It must be an existing field. Declares the base of the ordering
   * @member {String} OrderByField
   */
  exports.prototype['OrderByField'] = undefined;


  /**
   * Allowed values for the <code>OrderDirection</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OrderDirectionEnum = { 
    /**
     * value: Asc
     * @const
     */
    ASC: "Asc",
    
    /**
     * value: Desc
     * @const
     */
    DESC: "Desc"
  };

  return exports;
}));
