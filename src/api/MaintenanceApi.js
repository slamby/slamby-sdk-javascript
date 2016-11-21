(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ChangeSecret', '../model/ErrorsModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ChangeSecret'), require('../model/ErrorsModel'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.MaintenanceApi = factory(root.SlambySdk.ApiClient, root.SlambySdk.ChangeSecret, root.SlambySdk.ErrorsModel);
  }
}(this, function(ApiClient, ChangeSecret, ErrorsModel) {
  'use strict';

  /**
   * Maintenance service.
   * @module api/MaintenanceApi
   * @version 1.2.0
   */

  /**
   * Constructs a new MaintenanceApi. 
   * @alias module:api/MaintenanceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/ChangeSecret} opts.secret 
     */
    this.changeSecret = function(opts) {
      opts = opts || {};
      var postBody = opts['secret'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Maintenance/ChangeSecret', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
