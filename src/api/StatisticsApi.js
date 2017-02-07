(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/StatisticsWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/StatisticsWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.StatisticsApi = factory(root.SlambySdk.ApiClient, root.SlambySdk.StatisticsWrapper);
  }
}(this, function(ApiClient, StatisticsWrapper) {
  'use strict';

  /**
   * Statistics service.
   * @module api/StatisticsApi
   * @version 1.5.1
   */

  /**
   * Constructs a new StatisticsApi. 
   * @alias module:api/StatisticsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * data is of type: {module:model/StatisticsWrapper}
     */
    this.getStatistics = function() {
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
      var returnType = StatisticsWrapper;

      return this.apiClient.callApi(
        '/api/Statistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Integer} year 
     * data is of type: {module:model/StatisticsWrapper}
     */
    this.getStatistics_1 = function(year) {
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year == undefined || year == null) {
        throw "Missing the required parameter 'year' when calling getStatistics_1";
      }


      var pathParams = {
        'year': year
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
      var returnType = StatisticsWrapper;

      return this.apiClient.callApi(
        '/api/Statistics/{year}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Integer} year 
     * @param {Integer} month 
     * data is of type: {module:model/StatisticsWrapper}
     */
    this.getStatistics_2 = function(year, month) {
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year == undefined || year == null) {
        throw "Missing the required parameter 'year' when calling getStatistics_2";
      }

      // verify the required parameter 'month' is set
      if (month == undefined || month == null) {
        throw "Missing the required parameter 'month' when calling getStatistics_2";
      }


      var pathParams = {
        'year': year,
        'month': month
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
      var returnType = StatisticsWrapper;

      return this.apiClient.callApi(
        '/api/Statistics/{year}/{month}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
