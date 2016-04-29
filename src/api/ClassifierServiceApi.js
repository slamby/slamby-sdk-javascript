(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ErrorsModel', '../model/ClassifierActivateSettings', '../model/ExportDictionariesSettings', '../model/Process', '../model/ClassifierService', '../model/ClassifierPrepareSettings', '../model/ClassifierRecommendationRequest', '../model/ClassifierRecommendationResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorsModel'), require('../model/ClassifierActivateSettings'), require('../model/ExportDictionariesSettings'), require('../model/Process'), require('../model/ClassifierService'), require('../model/ClassifierPrepareSettings'), require('../model/ClassifierRecommendationRequest'), require('../model/ClassifierRecommendationResult'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.ClassifierServiceApi = factory(root.SlambySdk.ApiClient, root.SlambySdk.ErrorsModel, root.SlambySdk.ClassifierActivateSettings, root.SlambySdk.ExportDictionariesSettings, root.SlambySdk.Process, root.SlambySdk.ClassifierService, root.SlambySdk.ClassifierPrepareSettings, root.SlambySdk.ClassifierRecommendationRequest, root.SlambySdk.ClassifierRecommendationResult);
  }
}(this, function(ApiClient, ErrorsModel, ClassifierActivateSettings, ExportDictionariesSettings, Process, ClassifierService, ClassifierPrepareSettings, ClassifierRecommendationRequest, ClassifierRecommendationResult) {
  'use strict';

  /**
   * ClassifierService service.
   * @module api/ClassifierServiceApi
   * @version 0.14.0
   */

  /**
   * Constructs a new ClassifierServiceApi. 
   * @alias module:api/ClassifierServiceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ClassifierActivateSettings} opts.classifierActivateSettings 
     */
    this.activateService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['classifierActivateSettings'];

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
        '/api/Services/Classifier/{id}/Activate', 'POST',
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
        '/api/Services/Classifier/{id}/Deactivate', 'POST',
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
        '/api/Services/Classifier/{id}/ExportDictionaries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * data is of type: {module:model/ClassifierService}
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
      var returnType = ClassifierService;

      return this.apiClient.callApi(
        '/api/Services/Classifier/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ClassifierPrepareSettings} opts.classifierPrepareSettings 
     * data is of type: {module:model/Process}
     */
    this.prepareService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['classifierPrepareSettings'];

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
        '/api/Services/Classifier/{id}/Prepare', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ClassifierRecommendationRequest} opts.request 
     * data is of type: {Array.<module:model/ClassifierRecommendationResult>}
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
      var returnType = [ClassifierRecommendationResult];

      return this.apiClient.callApi(
        '/api/Services/Classifier/{id}/Recommend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
