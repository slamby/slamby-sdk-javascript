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
    root.SlambySdk.PrcKeywordsRequest = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PrcKeywordsRequest model module.
   * @module model/PrcKeywordsRequest
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>PrcKeywordsRequest</code>.
   * @alias module:model/PrcKeywordsRequest
   * @class
   * @param text
   */
  var exports = function(text) {

    this['Text'] = text;

  };

exports.prototype.typeName = 'PrcKeywordsRequest';

  /**
   * Constructs a <code>PrcKeywordsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrcKeywordsRequest} obj Optional instance to populate.
   * @return {module:model/PrcKeywordsRequest} The populated <code>PrcKeywordsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Text')) {
        obj['Text'] = ApiClient.convertToType(data['Text'], 'String');
      }
      if (data.hasOwnProperty('TagId')) {
        obj['TagId'] = ApiClient.convertToType(data['TagId'], 'String');
      }
    }
    return obj;
  }


  /**
   * The text which you want to extract the keywords from
   * @member {String} Text
   */
  exports.prototype['Text'] = undefined;

  /**
   * The extracting keywords calculation depends on this Tag. Prc Service try to detect it automatically if it's not provided
   * @member {String} TagId
   */
  exports.prototype['TagId'] = undefined;




  return exports;
}));
