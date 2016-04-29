(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/BulkResults', '../model/TagBulkSettings', '../model/ErrorsModel', '../model/Tag', '../model/Process', '../model/TagsExportWordsSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BulkResults'), require('../model/TagBulkSettings'), require('../model/ErrorsModel'), require('../model/Tag'), require('../model/Process'), require('../model/TagsExportWordsSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.TagApi = factory(root.SlambySdk.ApiClient, root.SlambySdk.BulkResults, root.SlambySdk.TagBulkSettings, root.SlambySdk.ErrorsModel, root.SlambySdk.Tag, root.SlambySdk.Process, root.SlambySdk.TagsExportWordsSettings);
  }
}(this, function(ApiClient, BulkResults, TagBulkSettings, ErrorsModel, Tag, Process, TagsExportWordsSettings) {
  'use strict';

  /**
   * Tag service.
   * @module api/TagApi
   * @version 0.14.0
   */

  /**
   * Constructs a new TagApi. 
   * @alias module:api/TagApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/TagBulkSettings} opts.settings 
     * data is of type: {module:model/BulkResults}
     */
    this.bulkTags = function(opts) {
      opts = opts || {};
      var postBody = opts['settings'];


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
      var returnType = BulkResults;

      return this.apiClient.callApi(
        '/api/Tags/Bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     */
    this.cleanDocuments = function() {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/Tags/CleanDocuments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/Tag} opts.tag 
     * data is of type: {module:model/Tag}
     */
    this.createTag = function(opts) {
      opts = opts || {};
      var postBody = opts['tag'];


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
      var returnType = Tag;

      return this.apiClient.callApi(
        '/api/Tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force 
     * @param {Boolean} opts.cleanDocuments 
     */
    this.deleteTag = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteTag";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'force': opts['force'],
        'cleanDocuments': opts['cleanDocuments']
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
        '/api/Tags/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.withDetails 
     * data is of type: {module:model/Tag}
     */
    this.getTag = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getTag";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'withDetails': opts['withDetails']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Tag;

      return this.apiClient.callApi(
        '/api/Tags/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.withDetails 
     * data is of type: {Array.<module:model/Tag>}
     */
    this.getTags = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'withDetails': opts['withDetails']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [Tag];

      return this.apiClient.callApi(
        '/api/Tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Tag} opts.tag 
     */
    this.updateTag = function(id, opts) {
      opts = opts || {};
      var postBody = opts['tag'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling updateTag";
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
        '/api/Tags/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/TagsExportWordsSettings} opts.settings 
     * data is of type: {module:model/Process}
     */
    this.wordsExport = function(opts) {
      opts = opts || {};
      var postBody = opts['settings'];


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
      var returnType = Process;

      return this.apiClient.callApi(
        '/api/Tags/ExportWords', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
