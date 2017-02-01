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
    root.SlambySdk.SearchResult = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SearchResult model module.
   * @module model/SearchResult
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>SearchResult</code>.
   * A search result, actually a document itself with a relevance score
   * @alias module:model/SearchResult
   * @class
   */
  var exports = function() {




  };

exports.prototype.typeName = 'SearchResult';

  /**
   * Constructs a <code>SearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResult} obj Optional instance to populate.
   * @return {module:model/SearchResult} The populated <code>SearchResult</code> instance.
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
   * The ID of the document
   * @member {String} DocumentId
   */
  exports.prototype['DocumentId'] = undefined;

  /**
   * The relevance score
   * @member {Number} Score
   */
  exports.prototype['Score'] = undefined;

  /**
   * The document itself but ONLY the FIELDS that you request with the RESPONSEFIELDLIST parameter
   * @member {Object} Document
   */
  exports.prototype['Document'] = undefined;




  return exports;
}));
