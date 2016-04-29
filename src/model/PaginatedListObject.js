(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ModelObject', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelObject'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.PaginatedListObject = factory(root.SlambySdk.ApiClient, root.SlambySdk.ModelObject, root.SlambySdk.Pagination);
  }
}(this, function(ApiClient, ModelObject, Pagination) {
  'use strict';

  /**
   * The PaginatedListObject model module.
   * @module model/PaginatedListObject
   * @version 0.14.0
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
        obj['Items'] = ApiClient.convertToType(data['Items'], [ModelObject]);
      }
      if (data.hasOwnProperty('Pagination')) {
        obj['Pagination'] = Pagination.constructFromObject(data['Pagination']);
      }
      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Integer');
      }
      if (data.hasOwnProperty('Total')) {
        obj['Total'] = ApiClient.convertToType(data['Total'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/ModelObject>} Items
   */
  exports.prototype['Items'] = undefined;

  /**
   * @member {module:model/Pagination} Pagination
   */
  exports.prototype['Pagination'] = undefined;

  /**
   * @member {Integer} Count
   */
  exports.prototype['Count'] = undefined;

  /**
   * @member {Integer} Total
   */
  exports.prototype['Total'] = undefined;




  return exports;
}));
