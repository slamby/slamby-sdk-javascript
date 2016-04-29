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
    root.SlambySdk.ModelObject = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelObject model module.
   * @module model/ModelObject
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>ModelObject</code>.
   * @alias module:model/ModelObject
   * @class
   */
  var exports = function() {

  };

exports.prototype.typeName = 'ModelObject';

  /**
   * Constructs a <code>ModelObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelObject} obj Optional instance to populate.
   * @return {module:model/ModelObject} The populated <code>ModelObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

    }
    return obj;
  }





  return exports;
}));
