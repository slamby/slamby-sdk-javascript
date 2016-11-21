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
    root.SlambySdk.DocumentBulkSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DocumentBulkSettings model module.
   * @module model/DocumentBulkSettings
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>DocumentBulkSettings</code>.
   * @alias module:model/DocumentBulkSettings
   * @class
   * @param documents
   */
  var exports = function(documents) {

    this['Documents'] = documents;
  };

exports.prototype.typeName = 'DocumentBulkSettings';

  /**
   * Constructs a <code>DocumentBulkSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentBulkSettings} obj Optional instance to populate.
   * @return {module:model/DocumentBulkSettings} The populated <code>DocumentBulkSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Documents')) {
        obj['Documents'] = ApiClient.convertToType(data['Documents'], [Object]);
      }
    }
    return obj;
  }


  /**
   * Array of the documents to be saved
   * @member {Array.<Object>} Documents
   */
  exports.prototype['Documents'] = undefined;




  return exports;
}));
