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
    root.SlambySdk.DataSetUpdate = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DataSetUpdate model module.
   * @module model/DataSetUpdate
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>DataSetUpdate</code>.
   * DataSet update object
   * @alias module:model/DataSetUpdate
   * @class
   * @param name
   */
  var exports = function(name) {

    this['Name'] = name;
  };

exports.prototype.typeName = 'DataSetUpdate';

  /**
   * Constructs a <code>DataSetUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataSetUpdate} obj Optional instance to populate.
   * @return {module:model/DataSetUpdate} The populated <code>DataSetUpdate</code> instance.
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
    }
    return obj;
  }


  /**
   * Name of your dataset. Can contains just A-Z letters, numbers, _ (underscore) and - (hyphen) without any space. This field is unique
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;




  return exports;
}));
