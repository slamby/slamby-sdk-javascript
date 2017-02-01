(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AutoCompleteSettings', './ClassifierSettings', './SearchSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AutoCompleteSettings'), require('./ClassifierSettings'), require('./SearchSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.SearchRequest = factory(root.SlambySdk.ApiClient, root.SlambySdk.AutoCompleteSettings, root.SlambySdk.ClassifierSettings, root.SlambySdk.SearchSettings);
  }
}(this, function(ApiClient, AutoCompleteSettings, ClassifierSettings, SearchSettings) {
  'use strict';

  /**
   * The SearchRequest model module.
   * @module model/SearchRequest
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>SearchRequest</code>.
   * @alias module:model/SearchRequest
   * @class
   * @param text
   */
  var exports = function(text) {

    this['Text'] = text;



  };

exports.prototype.typeName = 'SearchRequest';

  /**
   * Constructs a <code>SearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchRequest} obj Optional instance to populate.
   * @return {module:model/SearchRequest} The populated <code>SearchRequest</code> instance.
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
      if (data.hasOwnProperty('AutoCompleteSettings')) {
        obj['AutoCompleteSettings'] = AutoCompleteSettings.constructFromObject(data['AutoCompleteSettings']);
      }
      if (data.hasOwnProperty('SearchSettings')) {
        obj['SearchSettings'] = SearchSettings.constructFromObject(data['SearchSettings']);
      }
      if (data.hasOwnProperty('ClassifierSettings')) {
        obj['ClassifierSettings'] = ClassifierSettings.constructFromObject(data['ClassifierSettings']);
      }
    }
    return obj;
  }


  /**
   * A simple text or a Query String query, depends on the Type of the search
   * @member {String} Text
   */
  exports.prototype['Text'] = undefined;

  /**
   * You can override the activated AutoCompleteSettings during each search. Null means the activated settings will be used
   * @member {module:model/AutoCompleteSettings} AutoCompleteSettings
   */
  exports.prototype['AutoCompleteSettings'] = undefined;

  /**
   * You can override the activated SearchSettings during each search. Null means the activated settings will be used
   * @member {module:model/SearchSettings} SearchSettings
   */
  exports.prototype['SearchSettings'] = undefined;

  /**
   * You can override the activated ClassifierSettings during each search. Null means the activated settings will be used
   * @member {module:model/ClassifierSettings} ClassifierSettings
   */
  exports.prototype['ClassifierSettings'] = undefined;




  return exports;
}));
