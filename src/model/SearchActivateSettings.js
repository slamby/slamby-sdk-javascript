(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AutoCompleteSettings', './ClassifierSettings', './SearchSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AutoCompleteSettings'), require('./ClassifierSettings'), require('./SearchSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.SearchActivateSettings = factory(root.SlambySdk.ApiClient, root.SlambySdk.AutoCompleteSettings, root.SlambySdk.ClassifierSettings, root.SlambySdk.SearchSettings);
  }
}(this, function(ApiClient, AutoCompleteSettings, ClassifierSettings, SearchSettings) {
  'use strict';

  /**
   * The SearchActivateSettings model module.
   * @module model/SearchActivateSettings
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>SearchActivateSettings</code>.
   * @alias module:model/SearchActivateSettings
   * @class
   */
  var exports = function() {




  };

exports.prototype.typeName = 'SearchActivateSettings';

  /**
   * Constructs a <code>SearchActivateSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchActivateSettings} obj Optional instance to populate.
   * @return {module:model/SearchActivateSettings} The populated <code>SearchActivateSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('AutoCompleteSettings')) {
        obj['AutoCompleteSettings'] = AutoCompleteSettings.constructFromObject(data['AutoCompleteSettings']);
      }
      if (data.hasOwnProperty('SearchSettings')) {
        obj['SearchSettings'] = SearchSettings.constructFromObject(data['SearchSettings']);
      }
      if (data.hasOwnProperty('ClassifierSettings')) {
        obj['ClassifierSettings'] = ClassifierSettings.constructFromObject(data['ClassifierSettings']);
      }
    }
    return obj;
  }


  /**
   * The AutoComplete settings to activate (as default setting for all search)\r\nFor the details of this setting check [AutoCompleteSettings](#/definitions/AutoCompleteSettings)
   * @member {module:model/AutoCompleteSettings} AutoCompleteSettings
   */
  exports.prototype['AutoCompleteSettings'] = undefined;

  /**
   * The Search settings to activate (as default setting for all search)\r\nFor the details of this setting check [SearchSettings](#/definitions/SearchSettings)
   * @member {module:model/SearchSettings} SearchSettings
   */
  exports.prototype['SearchSettings'] = undefined;

  /**
   * The Classifier settings to activate (as default setting for all search)\r\nFor the details of this setting check [ClassifierSettings](#/definitions/ClassifierSettings)
   * @member {module:model/ClassifierSettings} ClassifierSettings
   */
  exports.prototype['ClassifierSettings'] = undefined;




  return exports;
}));
