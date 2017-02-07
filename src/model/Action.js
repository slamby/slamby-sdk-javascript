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
    root.SlambySdk.Action = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Action model module.
   * @module model/Action
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>Action</code>.
   * An action which is measured by the statistics. Currently it is equivalent with the API endpoints
   * @alias module:model/Action
   * @class
   */
  var exports = function() {



  };

exports.prototype.typeName = 'Action';

  /**
   * Constructs a <code>Action</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Action} obj Optional instance to populate.
   * @return {module:model/Action} The populated <code>Action</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * The endpoint name with the HTTP method (if there are multiple HTTP methods for an endpoint)
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;

  /**
   * The request count for this action in the current period
   * @member {Integer} Count
   */
  exports.prototype['Count'] = undefined;




  return exports;
}));
