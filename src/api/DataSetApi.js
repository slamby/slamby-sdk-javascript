(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DataSet', '../model/ErrorsModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataSet'), require('../model/ErrorsModel'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.DataSetApi = factory(root.SlambySdk.ApiClient, root.SlambySdk.DataSet, root.SlambySdk.ErrorsModel);
  }
}(this, function(ApiClient, DataSet, ErrorsModel) {
  'use strict';

  /**
   * DataSet service.
   * @module api/DataSetApi
   * @version 0.14.0
   */

  /**
   * Constructs a new DataSetApi. 
   * @alias module:api/DataSetApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DataSet} opts.dataSet 
     */
    this.createDataSet = function(opts) {
      opts = opts || {};
      var postBody = opts['dataSet'];


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
        '/api/DataSets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} name 
     */
    this.deleteDataSet = function(name) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling deleteDataSet";
      }


      var pathParams = {
        'name': name
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
        '/api/DataSets/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} name 
     * data is of type: {module:model/DataSet}
     */
    this.getDataSet = function(name) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling getDataSet";
      }


      var pathParams = {
        'name': name
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
      var returnType = DataSet;

      return this.apiClient.callApi(
        '/api/DataSets/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * data is of type: {Array.<module:model/DataSet>}
     */
    this.getDataSets = function() {
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
      var returnType = [DataSet];

      return this.apiClient.callApi(
        '/api/DataSets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
