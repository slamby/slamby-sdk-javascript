(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ErrorsModel', '../model/Process', '../model/SearchActivateSettings', '../model/SearchService', '../model/SearchPrepareSettings', '../model/SearchRequest', '../model/SearchResultWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorsModel'), require('../model/Process'), require('../model/SearchActivateSettings'), require('../model/SearchService'), require('../model/SearchPrepareSettings'), require('../model/SearchRequest'), require('../model/SearchResultWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.SearchServiceApi = factory(root.SlambySdk.ApiClient, root.SlambySdk.ErrorsModel, root.SlambySdk.Process, root.SlambySdk.SearchActivateSettings, root.SlambySdk.SearchService, root.SlambySdk.SearchPrepareSettings, root.SlambySdk.SearchRequest, root.SlambySdk.SearchResultWrapper);
  }
}(this, function(ApiClient, ErrorsModel, Process, SearchActivateSettings, SearchService, SearchPrepareSettings, SearchRequest, SearchResultWrapper) {
  'use strict';

  /**
   * SearchService service.
   * @module api/SearchServiceApi
   * @version 1.5.1
   */

  /**
   * Constructs a new SearchServiceApi. 
   * @alias module:api/SearchServiceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchActivateSettings} opts.searchActivateSettings 
     */
    this.searchActivateService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['searchActivateSettings'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling searchActivateService";
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
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Services/Search/{id}/Activate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     */
    this.searchDeactivateService = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling searchDeactivateService";
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
        '/api/Services/Search/{id}/Deactivate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * data is of type: {module:model/SearchService}
     */
    this.searchGetService = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling searchGetService";
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
      var returnType = SearchService;

      return this.apiClient.callApi(
        '/api/Services/Search/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchPrepareSettings} opts.searchPrepareSettings 
     */
    this.searchPrepareService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['searchPrepareSettings'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling searchPrepareService";
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
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Services/Search/{id}/Prepare', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchRequest} opts.request 
     * data is of type: {Array.<module:model/SearchResultWrapper>}
     */
    this.searchService = function(id, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling searchService";
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
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = [SearchResultWrapper];

      return this.apiClient.callApi(
        '/api/Services/Search/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
