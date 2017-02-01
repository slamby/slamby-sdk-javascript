(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Filter', './Order', './Weight'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Filter'), require('./Order'), require('./Weight'));
  } else {
    // Browser globals (root is window)
    if (!root.SlambySdk) {
      root.SlambySdk = {};
    }
    root.SlambySdk.SearchSettings = factory(root.SlambySdk.ApiClient, root.SlambySdk.Filter, root.SlambySdk.Order, root.SlambySdk.Weight);
  }
}(this, function(ApiClient, Filter, Order, Weight) {
  'use strict';

  /**
   * The SearchSettings model module.
   * @module model/SearchSettings
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>SearchSettings</code>.
   * The Search settings. The search is using ElasticSearch MATCH or QUERYSTRING search. Depends on the Type setting
   * @alias module:model/SearchSettings
   * @class
   */
  var exports = function() {













  };

exports.prototype.typeName = 'SearchSettings';

  /**
   * Constructs a <code>SearchSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchSettings} obj Optional instance to populate.
   * @return {module:model/SearchSettings} The populated <code>SearchSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (exports.prototype.typeName === 'ModelObject') { 
      return data;
    }
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Filter')) {
        obj['Filter'] = Filter.constructFromObject(data['Filter']);
      }
      if (data.hasOwnProperty('UseDefaultFilter')) {
        obj['UseDefaultFilter'] = ApiClient.convertToType(data['UseDefaultFilter'], 'Boolean');
      }
      if (data.hasOwnProperty('Weights')) {
        obj['Weights'] = ApiClient.convertToType(data['Weights'], [Weight]);
      }
      if (data.hasOwnProperty('UseDefaultWeights')) {
        obj['UseDefaultWeights'] = ApiClient.convertToType(data['UseDefaultWeights'], 'Boolean');
      }
      if (data.hasOwnProperty('ResponseFieldList')) {
        obj['ResponseFieldList'] = ApiClient.convertToType(data['ResponseFieldList'], ['String']);
      }
      if (data.hasOwnProperty('SearchFieldList')) {
        obj['SearchFieldList'] = ApiClient.convertToType(data['SearchFieldList'], ['String']);
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('CutOffFrequency')) {
        obj['CutOffFrequency'] = ApiClient.convertToType(data['CutOffFrequency'], 'Number');
      }
      if (data.hasOwnProperty('Fuzziness')) {
        obj['Fuzziness'] = ApiClient.convertToType(data['Fuzziness'], 'Integer');
      }
      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Integer');
      }
      if (data.hasOwnProperty('Operator')) {
        obj['Operator'] = ApiClient.convertToType(data['Operator'], 'String');
      }
      if (data.hasOwnProperty('Order')) {
        obj['Order'] = Order.constructFromObject(data['Order']);
      }
    }
    return obj;
  }


  /**
   * The Filter settings
   * @member {module:model/Filter} Filter
   */
  exports.prototype['Filter'] = undefined;

  /**
   * When you activate a Search service with a Filter, you can use this property to control if you want to use that 'default filter' during each searches
   * @member {Boolean} UseDefaultFilter
   */
  exports.prototype['UseDefaultFilter'] = undefined;

  /**
   * Can use each available dataset field, a preferred value and a weighted score between 0 and 10 to boost the result
   * @member {Array.<module:model/Weight>} Weights
   */
  exports.prototype['Weights'] = undefined;

  /**
   * When you activate a Search service with Weights, you can use this property to control if you want to use that 'default weights' during each searches
   * @member {Boolean} UseDefaultWeights
   */
  exports.prototype['UseDefaultWeights'] = undefined;

  /**
   * Which dataset fields must be in the search response
   * @member {Array.<String>} ResponseFieldList
   */
  exports.prototype['ResponseFieldList'] = undefined;

  /**
   * In which fields you would liket to search. The list can contains boosts. For example: title^2  which means matches on the title field will have twice the weight as those on the other fields
   * @member {Array.<String>} SearchFieldList
   */
  exports.prototype['SearchFieldList'] = undefined;

  /**
   * The type of the search. Can be MATCH (default) which means a simple word based search or can be QUERY which means you can use expressions in the query, like in the [QueryString Query](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax) in ElasticSearch
   * @member {module:model/SearchSettings.TypeEnum} Type
   */
  exports.prototype['Type'] = undefined;

  /**
   * Allows specifying an absolute or relative document frequency where high frequency terms are moved into an optional subquery and are only scored if one of the low frequency (below the cutoff) terms in the case of an OR operator or all of the low frequency terms in the case of an AND operator match
   * @member {Number} CutOffFrequency
   */
  exports.prototype['CutOffFrequency'] = undefined;

  /**
   * Interpreted as a Levenshtein Edit Distance\u00E2\u20AC\u2030\u00E2\u20AC\u201D\u00E2\u20AC\u2030the number of one character changes that need to be made to one string to make it the same as another string. Can be specified as: -1 (generates an edit distance based on the length of the term) or 0, 1, 2 (the maximum allowed Levenshtein Edit Distance)
   * @member {Integer} Fuzziness
   */
  exports.prototype['Fuzziness'] = undefined;

  /**
   * The maximum number of matches
   * @member {Integer} Count
   */
  exports.prototype['Count'] = undefined;

  /**
   * Can be set to OR or AND to control the operators between the text words\r\nFor example if the operator is AND, and the query is: 'white mobilephone' then the 'white' AND the 'mobilephone' must be match the documents\r\nIf the operator is OR in the same query then one of the query words is enough for a match. Of course if a document matches all the words then that will have a higher score
   * @member {module:model/SearchSettings.OperatorEnum} Operator
   */
  exports.prototype['Operator'] = undefined;

  /**
   * You can change the order of the search results. You have to specify a field of the dataset the order (Ascending or Descending)\r\nBe careful with this, if you change the default order then not the most relevant (for the text) documents will be on the top
   * @member {module:model/Order} Order
   */
  exports.prototype['Order'] = undefined;


  /**
   * Allowed values for the <code>Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = { 
    /**
     * value: Match
     * @const
     */
    MATCH: "Match",
    
    /**
     * value: Query
     * @const
     */
    QUERY: "Query"
  };  /**
   * Allowed values for the <code>Operator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OperatorEnum = { 
    /**
     * value: AND
     * @const
     */
    AND: "AND",
    
    /**
     * value: OR
     * @const
     */
    OR: "OR"
  };

  return exports;
}));
