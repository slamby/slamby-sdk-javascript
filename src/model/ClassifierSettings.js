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
    root.SlambySdk.ClassifierSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ClassifierSettings model module.
   * @module model/ClassifierSettings
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>ClassifierSettings</code>.
   * The related Classifier Settings
   * @alias module:model/ClassifierSettings
   * @class
   */
  var exports = function() {



  };

exports.prototype.typeName = 'ClassifierSettings';

  /**
   * Constructs a <code>ClassifierSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassifierSettings} obj Optional instance to populate.
   * @return {module:model/ClassifierSettings} The populated <code>ClassifierSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * The Alias or the ID of the Classifier
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;

  /**
   * How many results the Classifier should response
   * @member {Integer} Count
   */
  exports.prototype['Count'] = undefined;




  return exports;
}));
