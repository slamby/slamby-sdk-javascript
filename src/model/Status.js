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
    root.SlambySdk.Status = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Status model module.
   * @module model/Status
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>Status</code>.
   * @alias module:model/Status
   * @class
   */
  var exports = function() {







  };

exports.prototype.typeName = 'Status';

  /**
   * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Status} obj Optional instance to populate.
   * @return {module:model/Status} The populated <code>Status</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ApiVersion')) {
        obj['ApiVersion'] = ApiClient.convertToType(data['ApiVersion'], 'String');
      }
      if (data.hasOwnProperty('ProcessorCount')) {
        obj['ProcessorCount'] = ApiClient.convertToType(data['ProcessorCount'], 'Integer');
      }
      if (data.hasOwnProperty('CpuUsage')) {
        obj['CpuUsage'] = ApiClient.convertToType(data['CpuUsage'], 'Number');
      }
      if (data.hasOwnProperty('AvailableFreeSpace')) {
        obj['AvailableFreeSpace'] = ApiClient.convertToType(data['AvailableFreeSpace'], 'Number');
      }
      if (data.hasOwnProperty('TotalMemory')) {
        obj['TotalMemory'] = ApiClient.convertToType(data['TotalMemory'], 'Number');
      }
      if (data.hasOwnProperty('FreeMemory')) {
        obj['FreeMemory'] = ApiClient.convertToType(data['FreeMemory'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member {String} ApiVersion
   */
  exports.prototype['ApiVersion'] = undefined;

  /**
   * @member {Integer} ProcessorCount
   */
  exports.prototype['ProcessorCount'] = undefined;

  /**
   * @member {Number} CpuUsage
   */
  exports.prototype['CpuUsage'] = undefined;

  /**
   * @member {Number} AvailableFreeSpace
   */
  exports.prototype['AvailableFreeSpace'] = undefined;

  /**
   * @member {Number} TotalMemory
   */
  exports.prototype['TotalMemory'] = undefined;

  /**
   * @member {Number} FreeMemory
   */
  exports.prototype['FreeMemory'] = undefined;




  return exports;
}));
