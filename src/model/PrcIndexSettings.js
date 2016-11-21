(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Filter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Filter'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.PrcIndexSettings = factory(root.SlambySdk.ApiClient, root.SlambySdk.Filter);
  }
}(this, function(ApiClient, Filter) {
  'use strict';

  /**
   * The PrcIndexSettings model module.
   * @module model/PrcIndexSettings
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>PrcIndexSettings</code>.
   * @alias module:model/PrcIndexSettings
   * @class
   */
  var exports = function() {


  };

exports.prototype.typeName = 'PrcIndexSettings';

  /**
   * Constructs a <code>PrcIndexSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrcIndexSettings} obj Optional instance to populate.
   * @return {module:model/PrcIndexSettings} The populated <code>PrcIndexSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Filter')) {
        obj['Filter'] = Filter.constructFromObject(data['Filter']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Filter} Filter
   */
  exports.prototype['Filter'] = undefined;




  return exports;
}));
