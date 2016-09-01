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
    root.SlambySdk.ClassifierActivateSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ClassifierActivateSettings model module.
   * @module model/ClassifierActivateSettings
   * @version 1.0.0-rc1
   */

  /**
   * Constructs a new <code>ClassifierActivateSettings</code>.
   * These settings are required for the recommendation (Recommend method)
   * @alias module:model/ClassifierActivateSettings
   * @class
   */
  var exports = function() {




  };

exports.prototype.typeName = 'ClassifierActivateSettings';

  /**
   * Constructs a <code>ClassifierActivateSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassifierActivateSettings} obj Optional instance to populate.
   * @return {module:model/ClassifierActivateSettings} The populated <code>ClassifierActivateSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('EmphasizedTagIdList')) {
        obj['EmphasizedTagIdList'] = ApiClient.convertToType(data['EmphasizedTagIdList'], ['String']);
      }
      if (data.hasOwnProperty('TagIdList')) {
        obj['TagIdList'] = ApiClient.convertToType(data['TagIdList'], ['String']);
      }
      if (data.hasOwnProperty('NGramList')) {
        obj['NGramList'] = ApiClient.convertToType(data['NGramList'], ['Integer']);
      }
    }
    return obj;
  }


  /**
   * The list of the tag Ids which will emphasized during the recommendation
   * @member {Array.<String>} EmphasizedTagIdList
   */
  exports.prototype['EmphasizedTagIdList'] = undefined;

  /**
   * \"The list of the tag Ids which will be activated (the recommendation will be contains these only)
   * @member {Array.<String>} TagIdList
   */
  exports.prototype['TagIdList'] = undefined;

  /**
   * The list of the NGrams will be activated (the recommendation algorithm will be use these only)
   * @member {Array.<Integer>} NGramList
   */
  exports.prototype['NGramList'] = undefined;




  return exports;
}));
