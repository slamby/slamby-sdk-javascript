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
    root.SlambySdk.DocumentSampleSettings = factory(root.SlambySdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DocumentSampleSettings model module.
   * @module model/DocumentSampleSettings
   * @version 1.0.0-rc1
   */

  /**
   * Constructs a new <code>DocumentSampleSettings</code>.
   * @alias module:model/DocumentSampleSettings
   * @class
   * @param id
   */
  var exports = function(id) {

    this['Id'] = id;




  };

exports.prototype.typeName = 'DocumentSampleSettings';

  /**
   * Constructs a <code>DocumentSampleSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentSampleSettings} obj Optional instance to populate.
   * @return {module:model/DocumentSampleSettings} The populated <code>DocumentSampleSettings</code> instance.
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
      if (data.hasOwnProperty('TagIdList')) {
        obj['TagIdList'] = ApiClient.convertToType(data['TagIdList'], ['String']);
      }
      if (data.hasOwnProperty('Percent')) {
        obj['Percent'] = ApiClient.convertToType(data['Percent'], 'Number');
      }
      if (data.hasOwnProperty('Size')) {
        obj['Size'] = ApiClient.convertToType(data['Size'], 'Integer');
      }
      if (data.hasOwnProperty('FieldList')) {
        obj['FieldList'] = ApiClient.convertToType(data['FieldList'], ['String']);
      }
    }
    return obj;
  }


  /**
   * It must be a random string for every new sampling, but must be the same for the same sampling during pagination. \r\n            If you leave it empty then it'll be generated automatically, but then you can not use pagination
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;

  /**
   * You can create a sample from a whole dataset, or just from a given tag section. \r\n            To create a sample from the whole dataset please keep it empty. \r\n            To create a sample from a given number of tags please provide the tag ids
   * @member {Array.<String>} TagIdList
   */
  exports.prototype['TagIdList'] = undefined;

  /**
   * Defining the sample size, you can use percentage or a given number. \r\n            Using a percentage you can define the document number by a percentage. \r\n            This percentage will calculate the document number by using the available dataset document number. \r\n            E.g.: if your dataset contains 100.000 documents and you are using 10% as a sampling size without stratified method, your sample size is 100.000 x 10% = 10.000
   * @member {Number} Percent
   */
  exports.prototype['Percent'] = undefined;

  /**
   * Define your sample size by providing a simple integer. \r\n            E.g.: if your dataset contains 100.000 documents and you are using 3.000 as a sampling size without stratified method, your sample size is 3.000
   * @member {Integer} Size
   */
  exports.prototype['Size'] = undefined;

  /**
   * Query returns only with the specified field(s)
   * @member {Array.<String>} FieldList
   */
  exports.prototype['FieldList'] = undefined;




  return exports;
}));
