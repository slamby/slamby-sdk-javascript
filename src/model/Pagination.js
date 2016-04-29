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
    root.SlambySdk.Pagination = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Pagination model module.
   * @module model/Pagination
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>Pagination</code>.
   * @alias module:model/Pagination
   * @class
   */
  var exports = function() {





  };

exports.prototype.typeName = 'Pagination';

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pagination} obj Optional instance to populate.
   * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Offset')) {
        obj['Offset'] = ApiClient.convertToType(data['Offset'], 'Integer');
      }
      if (data.hasOwnProperty('Limit')) {
        obj['Limit'] = ApiClient.convertToType(data['Limit'], 'Integer');
      }
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
   * @member {Integer} Offset
   */
  exports.prototype['Offset'] = undefined;

  /**
   * @member {Integer} Limit
   */
  exports.prototype['Limit'] = undefined;

  /**
   * @member {module:model/Pagination.OrderDirectionEnum} OrderDirection
   */
  exports.prototype['OrderDirection'] = undefined;

  /**
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
