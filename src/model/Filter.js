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
    root.SlambySdk.Filter = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Filter model module.
   * @module model/Filter
   * @version 1.0.0-rc
   */

  /**
   * Constructs a new <code>Filter</code>.
   * @alias module:model/Filter
   * @class
   */
  var exports = function() {



  };

exports.prototype.typeName = 'Filter';

  /**
   * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Filter} obj Optional instance to populate.
   * @return {module:model/Filter} The populated <code>Filter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('TagIdList')) {
        obj['TagIdList'] = ApiClient.convertToType(data['TagIdList'], ['String']);
      }
      if (data.hasOwnProperty('Query')) {
        obj['Query'] = ApiClient.convertToType(data['Query'], 'String');
      }
    }
    return obj;
  }


  /**
   * You can direct your search queries into specific tags. \r\n            By giving the required tag id list, the filter will affect just the provided tags. \r\n            It's useful to create powerful search queries inside given tags. \r\n            To filter inside a whole dataset, you can set this field to empty
   * @member {Array.<String>} TagIdList
   */
  exports.prototype['TagIdList'] = undefined;

  /**
   * Set here the filters. The value is the query string you want to apply. \r\n            Can be BOOL expressions. You can use these: AND, OR, NOT. \r\n            For example: 'searchforthis AND NOT butnotthis'. \r\n            Also you can use wildcards. For example: 'exampl*'. \r\n            If you want to search in a specified field, than do thie: 'title:searchthisinthetitle'
   * @member {String} Query
   */
  exports.prototype['Query'] = undefined;




  return exports;
}));
