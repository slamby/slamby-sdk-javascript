(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FileParser', '../model/ErrorsModel', '../model/FileParserResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FileParser'), require('../model/ErrorsModel'), require('../model/FileParserResult'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.HelperApi = factory(root.SlambySdk.ApiClient, root.SlambySdk.FileParser, root.SlambySdk.ErrorsModel, root.SlambySdk.FileParserResult);
  }
}(this, function(ApiClient, FileParser, ErrorsModel, FileParserResult) {
  'use strict';

  /**
   * Helper service.
   * @module api/HelperApi
   * @version 1.0.0-rc
   */

  /**
   * Constructs a new HelperApi. 
   * @alias module:api/HelperApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/FileParser} opts.fileParser 
     * data is of type: {module:model/FileParserResult}
     */
    this.fileParser = function(opts) {
      opts = opts || {};
      var postBody = opts['fileParser'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = FileParserResult;

      return this.apiClient.callApi(
        '/api/Helper/FileParser', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
