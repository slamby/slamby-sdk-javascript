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
    root.SlambySdk.AutoCompleteSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AutoCompleteSettings model module.
   * @module model/AutoCompleteSettings
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>AutoCompleteSettings</code>.
   * The AutoComplete settings. The AutoComplete is using the [ElasticSearch Phrase Suggester](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-suggesters-phrase.html)
   * @alias module:model/AutoCompleteSettings
   * @class
   */
  var exports = function() {




  };

exports.prototype.typeName = 'AutoCompleteSettings';

  /**
   * Constructs a <code>AutoCompleteSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutoCompleteSettings} obj Optional instance to populate.
   * @return {module:model/AutoCompleteSettings} The populated <code>AutoCompleteSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Confidence')) {
        obj['Confidence'] = ApiClient.convertToType(data['Confidence'], 'Number');
      }
      if (data.hasOwnProperty('MaximumErrors')) {
        obj['MaximumErrors'] = ApiClient.convertToType(data['MaximumErrors'], 'Number');
      }
      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * The confidence level defines a factor applied to the input phrases score which is used as a threshold for other suggest candidates. Only candidates that score higher than the threshold will be included in the result. For instance a confidence level of 1.0 will only return suggestions that score higher than the input phrase. If set to 0.0 the top N candidates are returned. The default is 1.0.
   * @member {Number} Confidence
   */
  exports.prototype['Confidence'] = undefined;

  /**
   * The maximum percentage of the terms that at most considered to be misspellings in order to form a correction. This method accepts a float value in the range [0..1) as a fraction of the actual query terms or a number &gt;=1 as an absolute number of query terms. The default is set to 1.0 which corresponds to that only corrections with at most 1 misspelled term are returned
   * @member {Number} MaximumErrors
   */
  exports.prototype['MaximumErrors'] = undefined;

  /**
   * The number of candidates that are generated for each individual query term. Low numbers like 3 or 5 typically produce good results. Raising this can bring up terms with higher edit distances
   * @member {Integer} Count
   */
  exports.prototype['Count'] = undefined;




  return exports;
}));
