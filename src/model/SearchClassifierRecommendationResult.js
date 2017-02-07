(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.SearchClassifierRecommendationResult = factory(root.SlambySdk.ApiClient, root.SlambySdk.Tag);
  }
}(this, function(ApiClient, Tag) {
  'use strict';

  /**
   * The SearchClassifierRecommendationResult model module.
   * @module model/SearchClassifierRecommendationResult
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>SearchClassifierRecommendationResult</code>.
   * @alias module:model/SearchClassifierRecommendationResult
   * @class
   */
  var exports = function() {






  };

exports.prototype.typeName = 'SearchClassifierRecommendationResult';

  /**
   * Constructs a <code>SearchClassifierRecommendationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchClassifierRecommendationResult} obj Optional instance to populate.
   * @return {module:model/SearchClassifierRecommendationResult} The populated <code>SearchClassifierRecommendationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('SearchResultMatch')) {
        obj['SearchResultMatch'] = ApiClient.convertToType(data['SearchResultMatch'], 'Boolean');
      }
      if (data.hasOwnProperty('TagId')) {
        obj['TagId'] = ApiClient.convertToType(data['TagId'], 'String');
      }
      if (data.hasOwnProperty('Score')) {
        obj['Score'] = ApiClient.convertToType(data['Score'], 'Number');
      }
      if (data.hasOwnProperty('Tag')) {
        obj['Tag'] = Tag.constructFromObject(data['Tag']);
      }
      if (data.hasOwnProperty('IsEmphasized')) {
        obj['IsEmphasized'] = ApiClient.convertToType(data['IsEmphasized'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * If the recommended category is matched any of the search-matched documents categories
   * @member {Boolean} SearchResultMatch
   */
  exports.prototype['SearchResultMatch'] = undefined;

  /**
   * The recommended tag id
   * @member {String} TagId
   */
  exports.prototype['TagId'] = undefined;

  /**
   * The score that belongs to the tag id
   * @member {Number} Score
   */
  exports.prototype['Score'] = undefined;

  /**
   * @member {module:model/Tag} Tag
   */
  exports.prototype['Tag'] = undefined;

  /**
   * If there was applied emphasizing by this tag
   * @member {Boolean} IsEmphasized
   */
  exports.prototype['IsEmphasized'] = undefined;




  return exports;
}));
