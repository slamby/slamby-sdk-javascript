(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Statistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Statistics'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.StatisticsWrapper = factory(root.SlambySdk.ApiClient, root.SlambySdk.Statistics);
  }
}(this, function(ApiClient, Statistics) {
  'use strict';

  /**
   * The StatisticsWrapper model module.
   * @module model/StatisticsWrapper
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>StatisticsWrapper</code>.
   * Statistics object, describes the usage statistics of periods (months)
   * @alias module:model/StatisticsWrapper
   * @class
   */
  var exports = function() {



  };

exports.prototype.typeName = 'StatisticsWrapper';

  /**
   * Constructs a <code>StatisticsWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatisticsWrapper} obj Optional instance to populate.
   * @return {module:model/StatisticsWrapper} The populated <code>StatisticsWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Sum')) {
        obj['Sum'] = ApiClient.convertToType(data['Sum'], 'Integer');
      }
      if (data.hasOwnProperty('Statistics')) {
        obj['Statistics'] = ApiClient.convertToType(data['Statistics'], {'String': Statistics});
      }
    }
    return obj;
  }


  /**
   * The sum of all requests of all time
   * @member {Integer} Sum
   */
  exports.prototype['Sum'] = undefined;

  /**
   * dictionary of the statistics, the key is the month of the actual stastistics. The format is yyyy-MM
   * @member {Object.<String, module:model/Statistics>} Statistics
   */
  exports.prototype['Statistics'] = undefined;




  return exports;
}));
