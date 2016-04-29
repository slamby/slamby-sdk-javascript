(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.DocumentSampleSettings = factory(root.SlambySdk.ApiClient, root.SlambySdk.Pagination);
  }
}(this, function(ApiClient, Pagination) {
  'use strict';

  /**
   * The DocumentSampleSettings model module.
   * @module model/DocumentSampleSettings
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>DocumentSampleSettings</code>.
   * @alias module:model/DocumentSampleSettings
   * @class
   * @param id
   * @param pagination
   */
  var exports = function(id, pagination) {

    this['Id'] = id;


    this['Pagination'] = pagination;



  };

exports.prototype.typeName = 'DocumentSampleSettings';

  /**
   * Constructs a <code>DocumentSampleSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentSampleSettings} obj Optional instance to populate.
   * @return {module:model/DocumentSampleSettings} The populated <code>DocumentSampleSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('TagIds')) {
        obj['TagIds'] = ApiClient.convertToType(data['TagIds'], ['String']);
      }
      if (data.hasOwnProperty('IsStratified')) {
        obj['IsStratified'] = ApiClient.convertToType(data['IsStratified'], 'Boolean');
      }
      if (data.hasOwnProperty('Pagination')) {
        obj['Pagination'] = Pagination.constructFromObject(data['Pagination']);
      }
      if (data.hasOwnProperty('Percent')) {
        obj['Percent'] = ApiClient.convertToType(data['Percent'], 'Number');
      }
      if (data.hasOwnProperty('Size')) {
        obj['Size'] = ApiClient.convertToType(data['Size'], 'Integer');
      }
      if (data.hasOwnProperty('IdsOnly')) {
        obj['IdsOnly'] = ApiClient.convertToType(data['IdsOnly'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;

  /**
   * @member {Array.<String>} TagIds
   */
  exports.prototype['TagIds'] = undefined;

  /**
   * @member {Boolean} IsStratified
   */
  exports.prototype['IsStratified'] = undefined;

  /**
   * @member {module:model/Pagination} Pagination
   */
  exports.prototype['Pagination'] = undefined;

  /**
   * @member {Number} Percent
   */
  exports.prototype['Percent'] = undefined;

  /**
   * @member {Integer} Size
   */
  exports.prototype['Size'] = undefined;

  /**
   * @member {Boolean} IdsOnly
   */
  exports.prototype['IdsOnly'] = undefined;




  return exports;
}));
