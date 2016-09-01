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
    root.SlambySdk.PathItem = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PathItem model module.
   * @module model/PathItem
   * @version 1.0.0-rc
   */

  /**
   * Constructs a new <code>PathItem</code>.
   * Tag path item object
   * @alias module:model/PathItem
   * @class
   */
  var exports = function() {




  };

exports.prototype.typeName = 'PathItem';

  /**
   * Constructs a <code>PathItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathItem} obj Optional instance to populate.
   * @return {module:model/PathItem} The populated <code>PathItem</code> instance.
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
      if (data.hasOwnProperty('Level')) {
        obj['Level'] = ApiClient.convertToType(data['Level'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Id of the Tag
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;

  /**
   * Name of the Tag
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;

  /**
   * Level of the Tag
   * @member {Integer} Level
   */
  exports.prototype['Level'] = undefined;




  return exports;
}));
