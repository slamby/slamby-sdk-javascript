(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TagProperties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TagProperties'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.Tag = factory(root.SlambySdk.ApiClient, root.SlambySdk.TagProperties);
  }
}(this, function(ApiClient, TagProperties) {
  'use strict';

  /**
   * The Tag model module.
   * @module model/Tag
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>Tag</code>.
   * @alias module:model/Tag
   * @class
   * @param id
   * @param name
   */
  var exports = function(id, name) {

    this['Id'] = id;
    this['Name'] = name;


  };

exports.prototype.typeName = 'Tag';

  /**
   * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tag} obj Optional instance to populate.
   * @return {module:model/Tag} The populated <code>Tag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('ParentId')) {
        obj['ParentId'] = ApiClient.convertToType(data['ParentId'], 'String');
      }
      if (data.hasOwnProperty('Properties')) {
        obj['Properties'] = TagProperties.constructFromObject(data['Properties']);
      }
    }
    return obj;
  }


  /**
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;

  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;

  /**
   * @member {String} ParentId
   */
  exports.prototype['ParentId'] = undefined;

  /**
   * @member {module:model/TagProperties} Properties
   */
  exports.prototype['Properties'] = undefined;




  return exports;
}));
