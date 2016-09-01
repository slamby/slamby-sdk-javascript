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
    root.SlambySdk.FileParserResult = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FileParserResult model module.
   * @module model/FileParserResult
   * @version 1.0.0-rc1
   */

  /**
   * Constructs a new <code>FileParserResult</code>.
   * File Parser result object
   * @alias module:model/FileParserResult
   * @class
   */
  var exports = function() {









  };

exports.prototype.typeName = 'FileParserResult';

  /**
   * Constructs a <code>FileParserResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileParserResult} obj Optional instance to populate.
   * @return {module:model/FileParserResult} The populated <code>FileParserResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Content')) {
        obj['Content'] = ApiClient.convertToType(data['Content'], 'String');
      }
      if (data.hasOwnProperty('Title')) {
        obj['Title'] = ApiClient.convertToType(data['Title'], 'String');
      }
      if (data.hasOwnProperty('Date')) {
        obj['Date'] = ApiClient.convertToType(data['Date'], 'String');
      }
      if (data.hasOwnProperty('Author')) {
        obj['Author'] = ApiClient.convertToType(data['Author'], 'String');
      }
      if (data.hasOwnProperty('Keywords')) {
        obj['Keywords'] = ApiClient.convertToType(data['Keywords'], 'String');
      }
      if (data.hasOwnProperty('ContentType')) {
        obj['ContentType'] = ApiClient.convertToType(data['ContentType'], 'String');
      }
      if (data.hasOwnProperty('ContentLength')) {
        obj['ContentLength'] = ApiClient.convertToType(data['ContentLength'], 'Integer');
      }
      if (data.hasOwnProperty('Language')) {
        obj['Language'] = ApiClient.convertToType(data['Language'], 'String');
      }
    }
    return obj;
  }


  /**
   * The text content of sent document. Can be empty.
   * @member {String} Content
   */
  exports.prototype['Content'] = undefined;

  /**
   * The title of the document. Can be null or empty.
   * @member {String} Title
   */
  exports.prototype['Title'] = undefined;

  /**
   * @member {String} Date
   */
  exports.prototype['Date'] = undefined;

  /**
   * The author of the document. Can be null or empty.
   * @member {String} Author
   */
  exports.prototype['Author'] = undefined;

  /**
   * Keywords of the document. Can be null or empty.
   * @member {String} Keywords
   */
  exports.prototype['Keywords'] = undefined;

  /**
   * The type of the document (e.g.: application/pdf). Can be empty.
   * @member {String} ContentType
   */
  exports.prototype['ContentType'] = undefined;

  /**
   * The length of the received document.
   * @member {Integer} ContentLength
   */
  exports.prototype['ContentLength'] = undefined;

  /**
   * Detected language of the document (e.g.: en). Can be empty.
   * @member {String} Language
   */
  exports.prototype['Language'] = undefined;




  return exports;
}));
