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
    root.SlambySdk.DocumentCopySettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DocumentCopySettings model module.
   * @module model/DocumentCopySettings
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>DocumentCopySettings</code>.
   * @alias module:model/DocumentCopySettings
   * @class
   * @param ids
   * @param targetDataSetName
   */
  var exports = function(ids, targetDataSetName) {

    this['Ids'] = ids;
    this['TargetDataSetName'] = targetDataSetName;
  };

exports.prototype.typeName = 'DocumentCopySettings';

  /**
   * Constructs a <code>DocumentCopySettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentCopySettings} obj Optional instance to populate.
   * @return {module:model/DocumentCopySettings} The populated <code>DocumentCopySettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Ids')) {
        obj['Ids'] = ApiClient.convertToType(data['Ids'], ['String']);
      }
      if (data.hasOwnProperty('TargetDataSetName')) {
        obj['TargetDataSetName'] = ApiClient.convertToType(data['TargetDataSetName'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Array.<String>} Ids
   */
  exports.prototype['Ids'] = undefined;

  /**
   * @member {String} TargetDataSetName
   */
  exports.prototype['TargetDataSetName'] = undefined;




  return exports;
}));
