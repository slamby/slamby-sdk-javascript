(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Filter', './Weight'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Filter'), require('./Weight'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.PrcRecommendationRequest = factory(root.SlambySdk.ApiClient, root.SlambySdk.Filter, root.SlambySdk.Weight);
  }
}(this, function(ApiClient, Filter, Weight) {
  'use strict';

  /**
   * The PrcRecommendationRequest model module.
   * @module model/PrcRecommendationRequest
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>PrcRecommendationRequest</code>.
   * @alias module:model/PrcRecommendationRequest
   * @class
   * @param text
   */
  var exports = function(text) {

    this['Text'] = text;





  };

exports.prototype.typeName = 'PrcRecommendationRequest';

  /**
   * Constructs a <code>PrcRecommendationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrcRecommendationRequest} obj Optional instance to populate.
   * @return {module:model/PrcRecommendationRequest} The populated <code>PrcRecommendationRequest</code> instance.
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
      if (data.hasOwnProperty('Filter')) {
        obj['Filter'] = Filter.constructFromObject(data['Filter']);
      }
      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Integer');
      }
      if (data.hasOwnProperty('NeedDocumentInResult')) {
        obj['NeedDocumentInResult'] = ApiClient.convertToType(data['NeedDocumentInResult'], 'Boolean');
      }
      if (data.hasOwnProperty('TagId')) {
        obj['TagId'] = ApiClient.convertToType(data['TagId'], 'String');
      }
      if (data.hasOwnProperty('Weights')) {
        obj['Weights'] = ApiClient.convertToType(data['Weights'], [Weight]);
      }
    }
    return obj;
  }


  /**
   * @member {String} Text
   */
  exports.prototype['Text'] = undefined;

  /**
   * @member {module:model/Filter} Filter
   */
  exports.prototype['Filter'] = undefined;

  /**
   * @member {Integer} Count
   */
  exports.prototype['Count'] = undefined;

  /**
   * @member {Boolean} NeedDocumentInResult
   */
  exports.prototype['NeedDocumentInResult'] = undefined;

  /**
   * @member {String} TagId
   */
  exports.prototype['TagId'] = undefined;

  /**
   * @member {Array.<module:model/Weight>} Weights
   */
  exports.prototype['Weights'] = undefined;




  return exports;
}));
