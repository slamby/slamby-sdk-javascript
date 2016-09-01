(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.TagBulkSettings = factory(root.SlambySdk.ApiClient, root.SlambySdk.Tag);
  }
}(this, function(ApiClient, Tag) {
  'use strict';

  /**
   * The TagBulkSettings model module.
   * @module model/TagBulkSettings
   * @version 1.0.0-rc1
   */

  /**
   * Constructs a new <code>TagBulkSettings</code>.
   * Stores complete tag hierarchy for bulk insert
   * @alias module:model/TagBulkSettings
   * @class
   * @param tags
   */
  var exports = function(tags) {

    this['Tags'] = tags;
  };

exports.prototype.typeName = 'TagBulkSettings';

  /**
   * Constructs a <code>TagBulkSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagBulkSettings} obj Optional instance to populate.
   * @return {module:model/TagBulkSettings} The populated <code>TagBulkSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Tags')) {
        obj['Tags'] = ApiClient.convertToType(data['Tags'], [Tag]);
      }
    }
    return obj;
  }


  /**
   * The complete tag hierarchy array
   * @member {Array.<module:model/Tag>} Tags
   */
  exports.prototype['Tags'] = undefined;




  return exports;
}));
