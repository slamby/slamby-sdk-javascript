(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Action'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Action'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.Statistics = factory(root.SlambySdk.ApiClient, root.SlambySdk.Action);
  }
}(this, function(ApiClient, Action) {
  'use strict';

  /**
   * The Statistics model module.
   * @module model/Statistics
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>Statistics</code>.
   * contains statistics for one period (month)
   * @alias module:model/Statistics
   * @class
   */
  var exports = function() {



  };

exports.prototype.typeName = 'Statistics';

  /**
   * Constructs a <code>Statistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Statistics} obj Optional instance to populate.
   * @return {module:model/Statistics} The populated <code>Statistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Actions')) {
        obj['Actions'] = ApiClient.convertToType(data['Actions'], [Action]);
      }
      if (data.hasOwnProperty('Sum')) {
        obj['Sum'] = ApiClient.convertToType(data['Sum'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * List of actions
   * @member {Array.<module:model/Action>} Actions
   */
  exports.prototype['Actions'] = undefined;

  /**
   * The sum of all requests count in the current period
   * @member {Integer} Sum
   */
  exports.prototype['Sum'] = undefined;




  return exports;
}));
