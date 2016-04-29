(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PrcActivateSettings', '../model/ExportDictionariesSettings', '../model/Process', '../model/PrcService', '../model/PrcPrepareSettings', '../model/PrcRecommendationRequest', '../model/PrcRecommendationResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PrcActivateSettings'), require('../model/ExportDictionariesSettings'), require('../model/Process'), require('../model/PrcService'), require('../model/PrcPrepareSettings'), require('../model/PrcRecommendationRequest'), require('../model/PrcRecommendationResult'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.PrcServiceApi = factory(root.SlambySdk.ApiClient, root.SlambySdk.PrcActivateSettings, root.SlambySdk.ExportDictionariesSettings, root.SlambySdk.Process, root.SlambySdk.PrcService, root.SlambySdk.PrcPrepareSettings, root.SlambySdk.PrcRecommendationRequest, root.SlambySdk.PrcRecommendationResult);
  }
}(this, function(ApiClient, PrcActivateSettings, ExportDictionariesSettings, Process, PrcService, PrcPrepareSettings, PrcRecommendationRequest, PrcRecommendationResult) {
  'use strict';

  /**
   * PrcService service.
   * @module api/PrcServiceApi
   * @version 0.14.0
   */

  /**
   * Constructs a new PrcServiceApi. 
   * @alias module:api/PrcServiceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/PrcActivateSettings} opts.prcActivateSettings 
     */
    this.activateService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['prcActivateSettings'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling activateService";
      }


      var pathParams = {
        'id': id
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Services/Prc/{id}/Activate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     */
    this.deactivateService = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deactivateService";
      }


      var pathParams = {
        'id': id
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Services/Prc/{id}/Deactivate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ExportDictionariesSettings} opts.settings 
     * data is of type: {module:model/Process}
     */
    this.exportDictionaries = function(id, opts) {
      opts = opts || {};
      var postBody = opts['settings'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling exportDictionaries";
      }


      var pathParams = {
        'id': id
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
      var returnType = Process;

      return this.apiClient.callApi(
        '/api/Services/Prc/{id}/ExportDictionaries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * data is of type: {module:model/PrcService}
     */
    this.getService = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getService";
      }


      var pathParams = {
        'id': id
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
      var returnType = PrcService;

      return this.apiClient.callApi(
        '/api/Services/Prc/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/PrcPrepareSettings} opts.prcPrepareSettings 
     * data is of type: {module:model/Process}
     */
    this.prepareService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['prcPrepareSettings'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling prepareService";
      }


      var pathParams = {
        'id': id
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
      var returnType = Process;

      return this.apiClient.callApi(
        '/api/Services/Prc/{id}/Prepare', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/PrcRecommendationRequest} opts.request 
     * data is of type: {Array.<module:model/PrcRecommendationResult>}
     */
    this.recommendService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling recommendService";
      }


      var pathParams = {
        'id': id
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
      var returnType = [PrcRecommendationResult];

      return this.apiClient.callApi(
        '/api/Services/Prc/{id}/Recommend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
