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
    root.SlambySdk.PrcRecommendationByIdRequest = factory(root.SlambySdk.ApiClient, root.SlambySdk.Filter, root.SlambySdk.Weight);
  }
}(this, function(ApiClient, Filter, Weight) {
  'use strict';

  /**
   * The PrcRecommendationByIdRequest model module.
   * @module model/PrcRecommendationByIdRequest
   * @version 1.0.0-rc
   */

  /**
   * Constructs a new <code>PrcRecommendationByIdRequest</code>.
   * @alias module:model/PrcRecommendationByIdRequest
   * @class
   * @param documentId
   * @param tagId
   */
  var exports = function(documentId, tagId) {

    this['DocumentId'] = documentId;


    this['TagId'] = tagId;


  };

exports.prototype.typeName = 'PrcRecommendationByIdRequest';

  /**
   * Constructs a <code>PrcRecommendationByIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrcRecommendationByIdRequest} obj Optional instance to populate.
   * @return {module:model/PrcRecommendationByIdRequest} The populated <code>PrcRecommendationByIdRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('DocumentId')) {
        obj['DocumentId'] = ApiClient.convertToType(data['DocumentId'], 'String');
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
      if (data.hasOwnProperty('Filter')) {
        obj['Filter'] = Filter.constructFromObject(data['Filter']);
      }
      if (data.hasOwnProperty('Weights')) {
        obj['Weights'] = ApiClient.convertToType(data['Weights'], [Weight]);
      }
    }
    return obj;
  }


  /**
   * @member {String} DocumentId
   */
  exports.prototype['DocumentId'] = undefined;

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
   * @member {module:model/Filter} Filter
   */
  exports.prototype['Filter'] = undefined;

  /**
   * @member {Array.<module:model/Weight>} Weights
   */
  exports.prototype['Weights'] = undefined;




  return exports;
}));
