(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/BulkResults', '../model/ErrorsModel', '../model/DocumentBulkSettings', '../model/DocumentCopySettings', '../model/PaginatedListObject', '../model/DocumentFilterSettings', '../model/DocumentSampleSettings', '../model/DocumentMoveSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BulkResults'), require('../model/ErrorsModel'), require('../model/DocumentBulkSettings'), require('../model/DocumentCopySettings'), require('../model/PaginatedListObject'), require('../model/DocumentFilterSettings'), require('../model/DocumentSampleSettings'), require('../model/DocumentMoveSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.DocumentApi = factory(root.SlambySdk.ApiClient, root.SlambySdk.BulkResults, root.SlambySdk.ErrorsModel, root.SlambySdk.DocumentBulkSettings, root.SlambySdk.DocumentCopySettings, root.SlambySdk.PaginatedListObject, root.SlambySdk.DocumentFilterSettings, root.SlambySdk.DocumentSampleSettings, root.SlambySdk.DocumentMoveSettings);
  }
}(this, function(ApiClient, BulkResults, ErrorsModel, DocumentBulkSettings, DocumentCopySettings, PaginatedListObject, DocumentFilterSettings, DocumentSampleSettings, DocumentMoveSettings) {
  'use strict';

  /**
   * Document service.
   * @module api/DocumentApi
   * @version 1.0.0-rc
   */

  /**
   * Constructs a new DocumentApi. 
   * @alias module:api/DocumentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentBulkSettings} opts.settings 
     * @param {String} opts.xDataSet 
     * data is of type: {module:model/BulkResults}
     */
    this.bulkDocuments = function(opts) {
      opts = opts || {};
      var postBody = opts['settings'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'X-DataSet': opts['xDataSet']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = BulkResults;

      return this.apiClient.callApi(
        '/api/Documents/Bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentCopySettings} opts.copySettings 
     * @param {String} opts.xDataSet 
     */
    this.copyDocuments = function(opts) {
      opts = opts || {};
      var postBody = opts['copySettings'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'X-DataSet': opts['xDataSet']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Documents/Copy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {Object} opts.document 
     */
    this.createDocument = function(opts) {
      opts = opts || {};
      var postBody = opts['document'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Documents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     */
    this.deleteDocument = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteDocument";
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
        '/api/Documents/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * data is of type: {Object}
     */
    this.getDocument = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getDocument";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/Documents/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} scrollId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xDataSet 
     * @param {module:model/DocumentFilterSettings} opts.filterSettings 
     * data is of type: {module:model/PaginatedListObject}
     */
    this.getFilteredDocuments = function(scrollId, opts) {
      opts = opts || {};
      var postBody = opts['filterSettings'];

      // verify the required parameter 'scrollId' is set
      if (scrollId == undefined || scrollId == null) {
        throw "Missing the required parameter 'scrollId' when calling getFilteredDocuments";
      }


      var pathParams = {
        'scrollId': scrollId
      };
      var queryParams = {
      };
      var headerParams = {
        'X-DataSet': opts['xDataSet']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = PaginatedListObject;

      return this.apiClient.callApi(
        '/api/Documents/Filter/{scrollId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentSampleSettings} opts.sampleSettings 
     * @param {String} opts.xDataSet 
     * data is of type: {module:model/PaginatedListObject}
     */
    this.getSampleDocuments = function(opts) {
      opts = opts || {};
      var postBody = opts['sampleSettings'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'X-DataSet': opts['xDataSet']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = PaginatedListObject;

      return this.apiClient.callApi(
        '/api/Documents/Sample', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DocumentMoveSettings} opts.moveSettings 
     * @param {String} opts.xDataSet 
     */
    this.moveDocuments = function(opts) {
      opts = opts || {};
      var postBody = opts['moveSettings'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'X-DataSet': opts['xDataSet']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Documents/Move', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.document 
     * data is of type: {Object}
     */
    this.updateDocument = function(id, opts) {
      opts = opts || {};
      var postBody = opts['document'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling updateDocument";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/Documents/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
