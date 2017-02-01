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
    root.SlambySdk.PrcKeywordsResult = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PrcKeywordsResult model module.
   * @module model/PrcKeywordsResult
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>PrcKeywordsResult</code>.
   * @alias module:model/PrcKeywordsResult
   * @class
   */
  var exports = function() {



  };

exports.prototype.typeName = 'PrcKeywordsResult';

  /**
   * Constructs a <code>PrcKeywordsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrcKeywordsResult} obj Optional instance to populate.
   * @return {module:model/PrcKeywordsResult} The populated <code>PrcKeywordsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Word')) {
        obj['Word'] = ApiClient.convertToType(data['Word'], 'String');
      }
      if (data.hasOwnProperty('Score')) {
        obj['Score'] = ApiClient.convertToType(data['Score'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member {String} Word
   */
  exports.prototype['Word'] = undefined;

  /**
   * @member {Number} Score
   */
  exports.prototype['Score'] = undefined;




  return exports;
}));
