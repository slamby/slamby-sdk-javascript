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
    root.SlambySdk.Filter = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Filter model module.
   * @module model/Filter
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>Filter</code>.
   * @alias module:model/Filter
   * @class
   */
  var exports = function() {



  };

exports.prototype.typeName = 'Filter';

  /**
   * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Filter} obj Optional instance to populate.
   * @return {module:model/Filter} The populated <code>Filter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('TagIds')) {
        obj['TagIds'] = ApiClient.convertToType(data['TagIds'], ['String']);
      }
      if (data.hasOwnProperty('Query')) {
        obj['Query'] = ApiClient.convertToType(data['Query'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Array.<String>} TagIds
   */
  exports.prototype['TagIds'] = undefined;

  /**
   * @member {String} Query
   */
  exports.prototype['Query'] = undefined;




  return exports;
}));
