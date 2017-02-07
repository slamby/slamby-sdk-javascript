(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AutoCompleteResult', './SearchClassifierRecommendationResult', './SearchResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AutoCompleteResult'), require('./SearchClassifierRecommendationResult'), require('./SearchResult'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.SearchResultWrapper = factory(root.SlambySdk.ApiClient, root.SlambySdk.AutoCompleteResult, root.SlambySdk.SearchClassifierRecommendationResult, root.SlambySdk.SearchResult);
  }
}(this, function(ApiClient, AutoCompleteResult, SearchClassifierRecommendationResult, SearchResult) {
  'use strict';

  /**
   * The SearchResultWrapper model module.
   * @module model/SearchResultWrapper
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>SearchResultWrapper</code>.
   * @alias module:model/SearchResultWrapper
   * @class
   */
  var exports = function() {





  };

exports.prototype.typeName = 'SearchResultWrapper';

  /**
   * Constructs a <code>SearchResultWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResultWrapper} obj Optional instance to populate.
   * @return {module:model/SearchResultWrapper} The populated <code>SearchResultWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('AutoCompleteResultList')) {
        obj['AutoCompleteResultList'] = ApiClient.convertToType(data['AutoCompleteResultList'], [AutoCompleteResult]);
      }
      if (data.hasOwnProperty('ClassifierResultList')) {
        obj['ClassifierResultList'] = ApiClient.convertToType(data['ClassifierResultList'], [SearchClassifierRecommendationResult]);
      }
      if (data.hasOwnProperty('SearchResultList')) {
        obj['SearchResultList'] = ApiClient.convertToType(data['SearchResultList'], [SearchResult]);
      }
      if (data.hasOwnProperty('Total')) {
        obj['Total'] = ApiClient.convertToType(data['Total'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * List of the AutoComplete suggestions
   * @member {Array.<module:model/AutoCompleteResult>} AutoCompleteResultList
   */
  exports.prototype['AutoCompleteResultList'] = undefined;

  /**
   * List of the Classifier results of the input text
   * @member {Array.<module:model/SearchClassifierRecommendationResult>} ClassifierResultList
   */
  exports.prototype['ClassifierResultList'] = undefined;

  /**
   * The matched documents with relevance scores
   * @member {Array.<module:model/SearchResult>} SearchResultList
   */
  exports.prototype['SearchResultList'] = undefined;

  /**
   * The total matched document count
   * @member {Integer} Total
   */
  exports.prototype['Total'] = undefined;




  return exports;
}));
