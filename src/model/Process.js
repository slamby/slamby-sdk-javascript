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
    root.SlambySdk.Process = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Process model module.
   * @module model/Process
   * @version 0.14.0
   */

  /**
   * Constructs a new <code>Process</code>.
   * @alias module:model/Process
   * @class
   */
  var exports = function() {










  };

exports.prototype.typeName = 'Process';

  /**
   * Constructs a <code>Process</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Process} obj Optional instance to populate.
   * @return {module:model/Process} The populated <code>Process</code> instance.
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
      if (data.hasOwnProperty('Start')) {
        obj['Start'] = ApiClient.convertToType(data['Start'], 'Date');
      }
      if (data.hasOwnProperty('End')) {
        obj['End'] = ApiClient.convertToType(data['End'], 'Date');
      }
      if (data.hasOwnProperty('Percent')) {
        obj['Percent'] = ApiClient.convertToType(data['Percent'], 'Number');
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
      if (data.hasOwnProperty('ErrorMessages')) {
        obj['ErrorMessages'] = ApiClient.convertToType(data['ErrorMessages'], ['String']);
      }
      if (data.hasOwnProperty('ResultMessage')) {
        obj['ResultMessage'] = ApiClient.convertToType(data['ResultMessage'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;

  /**
   * @member {Date} Start
   */
  exports.prototype['Start'] = undefined;

  /**
   * @member {Date} End
   */
  exports.prototype['End'] = undefined;

  /**
   * @member {Number} Percent
   */
  exports.prototype['Percent'] = undefined;

  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;

  /**
   * @member {module:model/Process.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;

  /**
   * @member {module:model/Process.TypeEnum} Type
   */
  exports.prototype['Type'] = undefined;

  /**
   * @member {Array.<String>} ErrorMessages
   */
  exports.prototype['ErrorMessages'] = undefined;

  /**
   * @member {String} ResultMessage
   */
  exports.prototype['ResultMessage'] = undefined;


  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: InProgress
     * @const
     */
    INPROGRESS: "InProgress",
    
    /**
     * value: Cancelled
     * @const
     */
    CANCELLED: "Cancelled",
    
    /**
     * value: Finished
     * @const
     */
    FINISHED: "Finished",
    
    /**
     * value: Error
     * @const
     */
    ERROR: "Error",
    
    /**
     * value: Interrupted
     * @const
     */
    INTERRUPTED: "Interrupted",
    
    /**
     * value: Paused
     * @const
     */
    PAUSED: "Paused"
  };  /**
   * Allowed values for the <code>Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = { 
    /**
     * value: ClassifierPrepare
     * @const
     */
    CLASSIFIERPREPARE: "ClassifierPrepare",
    
    /**
     * value: PrcPrepare
     * @const
     */
    PRCPREPARE: "PrcPrepare",
    
    /**
     * value: ClassifierExportDictionaries
     * @const
     */
    CLASSIFIEREXPORTDICTIONARIES: "ClassifierExportDictionaries",
    
    /**
     * value: PrcExportDictionaries
     * @const
     */
    PRCEXPORTDICTIONARIES: "PrcExportDictionaries",
    
    /**
     * value: TagsExportWords
     * @const
     */
    TAGSEXPORTWORDS: "TagsExportWords"
  };

  return exports;
}));
