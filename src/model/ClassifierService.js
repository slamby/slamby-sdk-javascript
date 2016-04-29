(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ClassifierActivateSettings', './ClassifierPrepareSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClassifierActivateSettings'), require('./ClassifierPrepareSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.ClassifierService = factory(root.SlambySdk.ApiClient, root.SlambySdk.ClassifierActivateSettings, root.SlambySdk.ClassifierPrepareSettings);
  }
}(this, function(ApiClient, ClassifierActivateSettings, ClassifierPrepareSettings) {
  'use strict';

  /**
   * The ClassifierService model module.
   * @module model/ClassifierService
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>ClassifierService</code>.
   * @alias module:model/ClassifierService
   * @class
   * @param name
   * @param type
   */
  var exports = function(name, type) {




    this['Name'] = name;


    this['Type'] = type;


  };

exports.prototype.typeName = 'ClassifierService';

  /**
   * Constructs a <code>ClassifierService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassifierService} obj Optional instance to populate.
   * @return {module:model/ClassifierService} The populated <code>ClassifierService</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('PrepareSettings')) {
        obj['PrepareSettings'] = ClassifierPrepareSettings.constructFromObject(data['PrepareSettings']);
      }
      if (data.hasOwnProperty('ActivateSettings')) {
        obj['ActivateSettings'] = ClassifierActivateSettings.constructFromObject(data['ActivateSettings']);
      }
      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('ProcessIdList')) {
        obj['ProcessIdList'] = ApiClient.convertToType(data['ProcessIdList'], ['String']);
      }
      if (data.hasOwnProperty('ActualProcessId')) {
        obj['ActualProcessId'] = ApiClient.convertToType(data['ActualProcessId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ClassifierPrepareSettings} PrepareSettings
   */
  exports.prototype['PrepareSettings'] = undefined;

  /**
   * @member {module:model/ClassifierActivateSettings} ActivateSettings
   */
  exports.prototype['ActivateSettings'] = undefined;

  /**
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;

  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;

  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;

  /**
   * @member {module:model/ClassifierService.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;

  /**
   * @member {module:model/ClassifierService.TypeEnum} Type
   */
  exports.prototype['Type'] = undefined;

  /**
   * @member {Array.<String>} ProcessIdList
   */
  exports.prototype['ProcessIdList'] = undefined;

  /**
   * @member {String} ActualProcessId
   */
  exports.prototype['ActualProcessId'] = undefined;


  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: New
     * @const
     */
    NEW: "New",
    
    /**
     * value: Busy
     * @const
     */
    BUSY: "Busy",
    
    /**
     * value: Prepared
     * @const
     */
    PREPARED: "Prepared",
    
    /**
     * value: Active
     * @const
     */
    ACTIVE: "Active"
  };  /**
   * Allowed values for the <code>Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = { 
    /**
     * value: Classifier
     * @const
     */
    CLASSIFIER: "Classifier",
    
    /**
     * value: Prc
     * @const
     */
    PRC: "Prc"
  };

  return exports;
}));
