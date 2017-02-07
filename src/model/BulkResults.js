(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './BulkResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkResult'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.BulkResults = factory(root.SlambySdk.ApiClient, root.SlambySdk.BulkResult);
  }
}(this, function(ApiClient, BulkResult) {
  'use strict';

  /**
   * The BulkResults model module.
   * @module model/BulkResults
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>BulkResults</code>.
   * @alias module:model/BulkResults
   * @class
   */
  var exports = function() {


  };

exports.prototype.typeName = 'BulkResults';

  /**
   * Constructs a <code>BulkResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkResults} obj Optional instance to populate.
   * @return {module:model/BulkResults} The populated <code>BulkResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Results')) {
        obj['Results'] = ApiClient.convertToType(data['Results'], [BulkResult]);
      }
    }
    return obj;
  }


  /**
   * Array of the documents to be saved
   * @member {Array.<module:model/BulkResult>} Results
   */
  exports.prototype['Results'] = undefined;




  return exports;
}));
