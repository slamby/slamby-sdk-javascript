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
    root.SlambySdk.ClassifierRecommendationRequest = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ClassifierRecommendationRequest model module.
   * @module model/ClassifierRecommendationRequest
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>ClassifierRecommendationRequest</code>.
   * @alias module:model/ClassifierRecommendationRequest
   * @class
   * @param text
   */
  var exports = function(text) {

    this['Text'] = text;



  };

exports.prototype.typeName = 'ClassifierRecommendationRequest';

  /**
   * Constructs a <code>ClassifierRecommendationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassifierRecommendationRequest} obj Optional instance to populate.
   * @return {module:model/ClassifierRecommendationRequest} The populated <code>ClassifierRecommendationRequest</code> instance.
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
      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Integer');
      }
      if (data.hasOwnProperty('UseEmphasizing')) {
        obj['UseEmphasizing'] = ApiClient.convertToType(data['UseEmphasizing'], 'Boolean');
      }
      if (data.hasOwnProperty('NeedTagInResult')) {
        obj['NeedTagInResult'] = ApiClient.convertToType(data['NeedTagInResult'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {String} Text
   */
  exports.prototype['Text'] = undefined;

  /**
   * @member {Integer} Count
   */
  exports.prototype['Count'] = undefined;

  /**
   * @member {Boolean} UseEmphasizing
   */
  exports.prototype['UseEmphasizing'] = undefined;

  /**
   * @member {Boolean} NeedTagInResult
   */
  exports.prototype['NeedTagInResult'] = undefined;




  return exports;
}));
