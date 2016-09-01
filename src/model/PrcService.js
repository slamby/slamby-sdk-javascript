(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PrcActivateSettings', './PrcIndexSettings', './PrcPrepareSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PrcActivateSettings'), require('./PrcIndexSettings'), require('./PrcPrepareSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.PrcService = factory(root.SlambySdk.ApiClient, root.SlambySdk.PrcActivateSettings, root.SlambySdk.PrcIndexSettings, root.SlambySdk.PrcPrepareSettings);
  }
}(this, function(ApiClient, PrcActivateSettings, PrcIndexSettings, PrcPrepareSettings) {
  'use strict';

  /**
   * The PrcService model module.
   * @module model/PrcService
   * @version 1.0.0-rc1
   */

  /**
   * Constructs a new <code>PrcService</code>.
   * @alias module:model/PrcService
   * @class
   * @param name
   * @param type
   */
  var exports = function(name, type) {





    this['Name'] = name;



    this['Type'] = type;


  };

exports.prototype.typeName = 'PrcService';

  /**
   * Constructs a <code>PrcService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PrcService} obj Optional instance to populate.
   * @return {module:model/PrcService} The populated <code>PrcService</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('PrepareSettings')) {
        obj['PrepareSettings'] = PrcPrepareSettings.constructFromObject(data['PrepareSettings']);
      }
      if (data.hasOwnProperty('ActivateSettings')) {
        obj['ActivateSettings'] = PrcActivateSettings.constructFromObject(data['ActivateSettings']);
      }
      if (data.hasOwnProperty('IndexSettings')) {
        obj['IndexSettings'] = PrcIndexSettings.constructFromObject(data['IndexSettings']);
      }
      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Alias')) {
        obj['Alias'] = ApiClient.convertToType(data['Alias'], 'String');
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
   * @member {module:model/PrcPrepareSettings} PrepareSettings
   */
  exports.prototype['PrepareSettings'] = undefined;

  /**
   * @member {module:model/PrcActivateSettings} ActivateSettings
   */
  exports.prototype['ActivateSettings'] = undefined;

  /**
   * @member {module:model/PrcIndexSettings} IndexSettings
   */
  exports.prototype['IndexSettings'] = undefined;

  /**
   * Service unique identifier. It cannot be modified.
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;

  /**
   * User-defined name for the service
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;

  /**
   * Alias name of the service. Services can be accessed via this name.\r\n            Alias can be modified. It is unique amongst the services.
   * @member {String} Alias
   */
  exports.prototype['Alias'] = undefined;

  /**
   * Service description
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;

  /**
   * New - the service was created | \r\n            Busy - the service is working on something (e.g.: during the Prepare) | \r\n            Prepared - the service was prepared so you can activate it to use | \r\n            Active - the service so you can use it
   * @member {module:model/PrcService.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;

  /**
   * Type of the service.\r\n            Currently supported types:\r\n            - Classifier\r\n            - Prc
   * @member {module:model/PrcService.TypeEnum} Type
   */
  exports.prototype['Type'] = undefined;

  /**
   * Contains all the process ids which belong to this service
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
