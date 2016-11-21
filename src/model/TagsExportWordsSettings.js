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
    root.SlambySdk.TagsExportWordsSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TagsExportWordsSettings model module.
   * @module model/TagsExportWordsSettings
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>TagsExportWordsSettings</code>.
   * 
   * @alias module:model/TagsExportWordsSettings
   * @class
   * @param nGramList
   */
  var exports = function(nGramList) {


    this['NGramList'] = nGramList;
  };

exports.prototype.typeName = 'TagsExportWordsSettings';

  /**
   * Constructs a <code>TagsExportWordsSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagsExportWordsSettings} obj Optional instance to populate.
   * @return {module:model/TagsExportWordsSettings} The populated <code>TagsExportWordsSettings</code> instance.
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
