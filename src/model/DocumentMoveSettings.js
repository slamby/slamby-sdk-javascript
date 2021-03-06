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
    root.SlambySdk.DocumentMoveSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DocumentMoveSettings model module.
   * @module model/DocumentMoveSettings
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>DocumentMoveSettings</code>.
   * @alias module:model/DocumentMoveSettings
   * @class
   * @param documentIdList
   * @param targetDataSetName
   */
  var exports = function(documentIdList, targetDataSetName) {

    this['DocumentIdList'] = documentIdList;
    this['TargetDataSetName'] = targetDataSetName;
  };

exports.prototype.typeName = 'DocumentMoveSettings';

  /**
   * Constructs a <code>DocumentMoveSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentMoveSettings} obj Optional instance to populate.
   * @return {module:model/DocumentMoveSettings} The populated <code>DocumentMoveSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('DocumentIdList')) {
        obj['DocumentIdList'] = ApiClient.convertToType(data['DocumentIdList'], ['String']);
      }
      if (data.hasOwnProperty('TargetDataSetName')) {
        obj['TargetDataSetName'] = ApiClient.convertToType(data['TargetDataSetName'], 'String');
      }
    }
    return obj;
  }


  /**
   * The Id list of the documents you want to move
   * @member {Array.<String>} DocumentIdList
   */
  exports.prototype['DocumentIdList'] = undefined;

  /**
   * The DataSet name where you want to move the selected documents
   * @member {String} TargetDataSetName
   */
  exports.prototype['TargetDataSetName'] = undefined;




  return exports;
}));
