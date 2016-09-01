(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PrcActivateSettings', '../model/Process', '../model/ExportDictionariesSettings', '../model/PrcService', '../model/PrcIndexSettings', '../model/PrcKeywordsRequest', '../model/PrcKeywordsResult', '../model/PrcPrepareSettings', '../model/PrcRecommendationResult', '../model/PrcRecommendationByIdRequest', '../model/PrcRecommendationRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PrcActivateSettings'), require('../model/Process'), require('../model/ExportDictionariesSettings'), require('../model/PrcService'), require('../model/PrcIndexSettings'), require('../model/PrcKeywordsRequest'), require('../model/PrcKeywordsResult'), require('../model/PrcPrepareSettings'), require('../model/PrcRecommendationResult'), require('../model/PrcRecommendationByIdRequest'), require('../model/PrcRecommendationRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.PrcServiceApi = factory(root.SlambySdk.ApiClient, root.SlambySdk.PrcActivateSettings, root.SlambySdk.Process, root.SlambySdk.ExportDictionariesSettings, root.SlambySdk.PrcService, root.SlambySdk.PrcIndexSettings, root.SlambySdk.PrcKeywordsRequest, root.SlambySdk.PrcKeywordsResult, root.SlambySdk.PrcPrepareSettings, root.SlambySdk.PrcRecommendationResult, root.SlambySdk.PrcRecommendationByIdRequest, root.SlambySdk.PrcRecommendationRequest);
  }
}(this, function(ApiClient, PrcActivateSettings, Process, ExportDictionariesSettings, PrcService, PrcIndexSettings, PrcKeywordsRequest, PrcKeywordsResult, PrcPrepareSettings, PrcRecommendationResult, PrcRecommendationByIdRequest, PrcRecommendationRequest) {
  'use strict';

  /**
   * PrcService service.
   * @module api/PrcServiceApi
   * @version 1.0.0-rc1
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
     * data is of type: {module:model/Process}
     */
    this.prcActivateService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['prcActivateSettings'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling prcActivateService";
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
        '/api/Services/Prc/{id}/Activate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     */
    this.prcDeactivateService = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling prcDeactivateService";
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
    this.prcExportDictionaries = function(id, opts) {
      opts = opts || {};
      var postBody = opts['settings'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling prcExportDictionaries";
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
    this.prcGetService = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling prcGetService";
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
     * data is of type: {module:model/Process}
     */
    this.prcIndexPartialService = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling prcIndexPartialService";
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
        '/api/Services/Prc/{id}/IndexPartial', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/PrcIndexSettings} opts.prcIndexSettings 
     * data is of type: {module:model/Process}
     */
    this.prcIndexService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['prcIndexSettings'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling prcIndexService";
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
        '/api/Services/Prc/{id}/Index', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/PrcKeywordsRequest} opts.request 
     * @param {Boolean} opts.isStrict 
     * data is of type: {Array.<module:model/PrcKeywordsResult>}
     */
    this.prcKeywordsService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling prcKeywordsService";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'isStrict': opts['isStrict']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [PrcKeywordsResult];

      return this.apiClient.callApi(
        '/api/Services/Prc/{id}/Keywords', 'POST',
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
    this.prcPrepareService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['prcPrepareSettings'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling prcPrepareService";
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
     * @param {module:model/PrcRecommendationByIdRequest} opts.request 
     * data is of type: {Array.<module:model/PrcRecommendationResult>}
     */
    this.prcRecommendByIdService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling prcRecommendByIdService";
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
        '/api/Services/Prc/{id}/RecommendById', 'POST',
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
    this.prcRecommendService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling prcRecommendService";
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
