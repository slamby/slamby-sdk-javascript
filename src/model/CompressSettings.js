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
    root.SlambySdk.CompressSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CompressSettings model module.
   * @module model/CompressSettings
   * @version 1.0.0-rc
   */

  /**
   * Constructs a new <code>CompressSettings</code>.
   * @alias module:model/CompressSettings
   * @class
   */
  var exports = function() {




  };

exports.prototype.typeName = 'CompressSettings';

  /**
   * Constructs a <code>CompressSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompressSettings} obj Optional instance to populate.
   * @return {module:model/CompressSettings} The populated <code>CompressSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('CategoryOccurence')) {
        obj['CategoryOccurence'] = ApiClient.convertToType(data['CategoryOccurence'], 'Integer');
      }
      if (data.hasOwnProperty('DataSetOccurence')) {
        obj['DataSetOccurence'] = ApiClient.convertToType(data['DataSetOccurence'], 'Integer');
      }
      if (data.hasOwnProperty('Operator')) {
        obj['Operator'] = ApiClient.convertToType(data['Operator'], 'String');
      }
    }
    return obj;
  }


  /**
   * 
   * @member {Integer} CategoryOccurence
   */
  exports.prototype['CategoryOccurence'] = undefined;

  /**
   * 
   * @member {Integer} DataSetOccurence
   */
  exports.prototype['DataSetOccurence'] = undefined;

  /**
   * 
   * @member {module:model/CompressSettings.OperatorEnum} Operator
   */
  exports.prototype['Operator'] = undefined;


  /**
   * Allowed values for the <code>Operator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OperatorEnum = { 
    /**
     * value: AND
     * @const
     */
    AND: "AND",
    
    /**
     * value: OR
     * @const
     */
    OR: "OR"
  };

  return exports;
}));
