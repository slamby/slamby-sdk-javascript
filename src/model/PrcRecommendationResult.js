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
    root.SlambySdk.PrcRecommendationResult = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PrcRecommendationResult model module.
   * @module model/PrcRecommendationResult
   * @version 1.0.0-rc1
   */

  /**
   * Constructs a new <code>PrcRecommendationResult</code>.
   * @alias module:model/PrcRecommendationResult
   * @class
   */
  var exports = function() {




  };

exports.prototype.typeName = 'PrcRecommendationResult';

  /**
   * Constructs a <code>PrcRecommendationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrcRecommendationResult} obj Optional instance to populate.
   * @return {module:model/PrcRecommendationResult} The populated <code>PrcRecommendationResult</code> instance.
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
      if (data.hasOwnProperty('Score')) {
        obj['Score'] = ApiClient.convertToType(data['Score'], 'Number');
      }
      if (data.hasOwnProperty('Document')) {
        obj['Document'] = ApiClient.convertToType(data['Document'], Object);
      }
    }
    return obj;
  }


  /**
   * @member {String} DocumentId
   */
  exports.prototype['DocumentId'] = undefined;

  /**
   * @member {Number} Score
   */
  exports.prototype['Score'] = undefined;

  /**
   * @member {Object} Document
   */
  exports.prototype['Document'] = undefined;




  return exports;
}));
