(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SearchClassifierRecommendationResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SearchClassifierRecommendationResult'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.AutoCompleteResult = factory(root.SlambySdk.ApiClient, root.SlambySdk.SearchClassifierRecommendationResult);
  }
}(this, function(ApiClient, SearchClassifierRecommendationResult) {
  'use strict';

  /**
   * The AutoCompleteResult model module.
   * @module model/AutoCompleteResult
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>AutoCompleteResult</code>.
   * Contains a suggestion for the input text
   * @alias module:model/AutoCompleteResult
   * @class
   */
  var exports = function() {




  };

exports.prototype.typeName = 'AutoCompleteResult';

  /**
   * Constructs a <code>AutoCompleteResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutoCompleteResult} obj Optional instance to populate.
   * @return {module:model/AutoCompleteResult} The populated <code>AutoCompleteResult</code> instance.
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
      if (data.hasOwnProperty('Score')) {
        obj['Score'] = ApiClient.convertToType(data['Score'], 'Number');
      }
      if (data.hasOwnProperty('ClassifierResultList')) {
        obj['ClassifierResultList'] = ApiClient.convertToType(data['ClassifierResultList'], [SearchClassifierRecommendationResult]);
      }
    }
    return obj;
  }


  /**
   * The suggested text instead of the original text
   * @member {String} Text
   */
  exports.prototype['Text'] = undefined;

  /**
   * The score of the suggestion relevance
   * @member {Number} Score
   */
  exports.prototype['Score'] = undefined;

  /**
   * The related Classifier results for this suggested text
   * @member {Array.<module:model/SearchClassifierRecommendationResult>} ClassifierResultList
   */
  exports.prototype['ClassifierResultList'] = undefined;




  return exports;
}));
