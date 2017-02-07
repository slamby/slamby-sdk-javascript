(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ChangeLicense', '../model/ErrorsModel', '../model/License'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ChangeLicense'), require('../model/ErrorsModel'), require('../model/License'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.LicenseApi = factory(root.SlambySdk.ApiClient, root.SlambySdk.ChangeLicense, root.SlambySdk.ErrorsModel, root.SlambySdk.License);
  }
}(this, function(ApiClient, ChangeLicense, ErrorsModel, License) {
  'use strict';

  /**
   * License service.
   * @module api/LicenseApi
   * @version 1.5.1
   */

  /**
   * Constructs a new LicenseApi. 
   * @alias module:api/LicenseApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/ChangeLicense} opts.model 
     */
    this.changeLicense = function(opts) {
      opts = opts || {};
      var postBody = opts['model'];


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
        '/api/License', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * data is of type: {module:model/License}
     */
    this.getLicense = function() {
      var postBody = null;


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
      var returnType = License;

      return this.apiClient.callApi(
        '/api/License', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
