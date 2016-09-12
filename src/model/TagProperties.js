(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PathItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PathItem'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.TagProperties = factory(root.SlambySdk.ApiClient, root.SlambySdk.PathItem);
  }
}(this, function(ApiClient, PathItem) {
  'use strict';

  /**
   * The TagProperties model module.
   * @module model/TagProperties
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TagProperties</code>.
   * Contains calculated values for the tag
   * @alias module:model/TagProperties
   * @class
   */
  var exports = function() {






  };

exports.prototype.typeName = 'TagProperties';

  /**
   * Constructs a <code>TagProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagProperties} obj Optional instance to populate.
   * @return {module:model/TagProperties} The populated <code>TagProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Paths')) {
        obj['Paths'] = ApiClient.convertToType(data['Paths'], [PathItem]);
      }
      if (data.hasOwnProperty('Level')) {
        obj['Level'] = ApiClient.convertToType(data['Level'], 'Integer');
      }
      if (data.hasOwnProperty('IsLeaf')) {
        obj['IsLeaf'] = ApiClient.convertToType(data['IsLeaf'], 'Boolean');
      }
      if (data.hasOwnProperty('DocumentCount')) {
        obj['DocumentCount'] = ApiClient.convertToType(data['DocumentCount'], 'Integer');
      }
      if (data.hasOwnProperty('WordCount')) {
        obj['WordCount'] = ApiClient.convertToType(data['WordCount'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * A tag list contains parent path elements
   * @member {Array.<module:model/PathItem>} Paths
   */
  exports.prototype['Paths'] = undefined;

  /**
   * The level of the tag in the hierarchy (root level is: 0)
   * @member {Integer} Level
   */
  exports.prototype['Level'] = undefined;

  /**
   * If the tag is a leaf tag. Leaf tag means the tag is not a parent of any other tags
   * @member {Boolean} IsLeaf
   */
  exports.prototype['IsLeaf'] = undefined;

  /**
   * Document count for the tag
   * @member {Integer} DocumentCount
   */
  exports.prototype['DocumentCount'] = undefined;

  /**
   * Word count for the tag
   * @member {Integer} WordCount
   */
  exports.prototype['WordCount'] = undefined;




  return exports;
}));
