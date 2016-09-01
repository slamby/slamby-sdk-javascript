(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Filter', './Order', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Filter'), require('./Order'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.DocumentFilterSettings = factory(root.SlambySdk.ApiClient, root.SlambySdk.Filter, root.SlambySdk.Order, root.SlambySdk.Pagination);
  }
}(this, function(ApiClient, Filter, Order, Pagination) {
  'use strict';

  /**
   * The DocumentFilterSettings model module.
   * @module model/DocumentFilterSettings
   * @version 1.0.0-rc
   */

  /**
   * Constructs a new <code>DocumentFilterSettings</code>.
   * @alias module:model/DocumentFilterSettings
   * @class
   * @param pagination
   */
  var exports = function(pagination) {

    this['Pagination'] = pagination;



  };

exports.prototype.typeName = 'DocumentFilterSettings';

  /**
   * Constructs a <code>DocumentFilterSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentFilterSettings} obj Optional instance to populate.
   * @return {module:model/DocumentFilterSettings} The populated <code>DocumentFilterSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Pagination')) {
        obj['Pagination'] = Pagination.constructFromObject(data['Pagination']);
      }
      if (data.hasOwnProperty('Order')) {
        obj['Order'] = Order.constructFromObject(data['Order']);
      }
      if (data.hasOwnProperty('Filter')) {
        obj['Filter'] = Filter.constructFromObject(data['Filter']);
      }
      if (data.hasOwnProperty('FieldList')) {
        obj['FieldList'] = ApiClient.convertToType(data['FieldList'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Pagination} Pagination
   */
  exports.prototype['Pagination'] = undefined;

  /**
   * @member {module:model/Order} Order
   */
  exports.prototype['Order'] = undefined;

  /**
   * @member {module:model/Filter} Filter
   */
  exports.prototype['Filter'] = undefined;

  /**
   * Query returns only with the specified field(s)
   * @member {Array.<String>} FieldList
   */
  exports.prototype['FieldList'] = undefined;




  return exports;
}));
