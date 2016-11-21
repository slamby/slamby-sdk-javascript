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
    root.SlambySdk.ExportDictionariesSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExportDictionariesSettings model module.
   * @module model/ExportDictionariesSettings
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ExportDictionariesSettings</code>.
   * @alias module:model/ExportDictionariesSettings
   * @class
   */
  var exports = function() {



  };

exports.prototype.typeName = 'ExportDictionariesSettings';

  /**
   * Constructs a <code>ExportDictionariesSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportDictionariesSettings} obj Optional instance to populate.
   * @return {module:model/ExportDictionariesSettings} The populated <code>ExportDictionariesSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('TagIdList')) {
        obj['TagIdList'] = ApiClient.convertToType(data['TagIdList'], ['String']);
      }
      if (data.hasOwnProperty('NGramList')) {
        obj['NGramList'] = ApiClient.convertToType(data['NGramList'], ['Integer']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<String>} TagIdList
   */
  exports.prototype['TagIdList'] = undefined;

  /**
   * @member {Array.<Integer>} NGramList
   */
  exports.prototype['NGramList'] = undefined;




  return exports;
}));
