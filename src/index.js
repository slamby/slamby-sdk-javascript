(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/BulkResult', './model/BulkResults', './model/ClassifierActivateSettings', './model/ClassifierPrepareSettings', './model/ClassifierRecommendationRequest', './model/ClassifierRecommendationResult', './model/ClassifierService', './model/CompressSettings', './model/DataSet', './model/DataSetStats', './model/DataSetUpdate', './model/DocumentBulkSettings', './model/DocumentCopySettings', './model/DocumentFilterSettings', './model/DocumentMoveSettings', './model/DocumentSampleSettings', './model/ErrorsModel', './model/ExportDictionariesSettings', './model/FileParser', './model/FileParserResult', './model/Filter', './model/Order', './model/PaginatedListObject', './model/Pagination', './model/PathItem', './model/PrcActivateSettings', './model/PrcIndexSettings', './model/PrcKeywordsRequest', './model/PrcKeywordsResult', './model/PrcPrepareSettings', './model/PrcRecommendationByIdRequest', './model/PrcRecommendationRequest', './model/PrcRecommendationResult', './model/PrcService', './model/Process', './model/Service', './model/Status', './model/Tag', './model/TagBulkSettings', './model/TagProperties', './model/TagsExportWordsSettings', './model/Weight', './api/ClassifierServiceApi', './api/DataSetApi', './api/DocumentApi', './api/HelperApi', './api/PrcServiceApi', './api/ProcessApi', './api/ServiceApi', './api/StatusApi', './api/TagApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BulkResult'), require('./model/BulkResults'), require('./model/ClassifierActivateSettings'), require('./model/ClassifierPrepareSettings'), require('./model/ClassifierRecommendationRequest'), require('./model/ClassifierRecommendationResult'), require('./model/ClassifierService'), require('./model/CompressSettings'), require('./model/DataSet'), require('./model/DataSetStats'), require('./model/DataSetUpdate'), require('./model/DocumentBulkSettings'), require('./model/DocumentCopySettings'), require('./model/DocumentFilterSettings'), require('./model/DocumentMoveSettings'), require('./model/DocumentSampleSettings'), require('./model/ErrorsModel'), require('./model/ExportDictionariesSettings'), require('./model/FileParser'), require('./model/FileParserResult'), require('./model/Filter'), require('./model/Order'), require('./model/PaginatedListObject'), require('./model/Pagination'), require('./model/PathItem'), require('./model/PrcActivateSettings'), require('./model/PrcIndexSettings'), require('./model/PrcKeywordsRequest'), require('./model/PrcKeywordsResult'), require('./model/PrcPrepareSettings'), require('./model/PrcRecommendationByIdRequest'), require('./model/PrcRecommendationRequest'), require('./model/PrcRecommendationResult'), require('./model/PrcService'), require('./model/Process'), require('./model/Service'), require('./model/Status'), require('./model/Tag'), require('./model/TagBulkSettings'), require('./model/TagProperties'), require('./model/TagsExportWordsSettings'), require('./model/Weight'), require('./api/ClassifierServiceApi'), require('./api/DataSetApi'), require('./api/DocumentApi'), require('./api/HelperApi'), require('./api/PrcServiceApi'), require('./api/ProcessApi'), require('./api/ServiceApi'), require('./api/StatusApi'), require('./api/TagApi'));
  }
}(function(ApiClient, BulkResult, BulkResults, ClassifierActivateSettings, ClassifierPrepareSettings, ClassifierRecommendationRequest, ClassifierRecommendationResult, ClassifierService, CompressSettings, DataSet, DataSetStats, DataSetUpdate, DocumentBulkSettings, DocumentCopySettings, DocumentFilterSettings, DocumentMoveSettings, DocumentSampleSettings, ErrorsModel, ExportDictionariesSettings, FileParser, FileParserResult, Filter, Order, PaginatedListObject, Pagination, PathItem, PrcActivateSettings, PrcIndexSettings, PrcKeywordsRequest, PrcKeywordsResult, PrcPrepareSettings, PrcRecommendationByIdRequest, PrcRecommendationRequest, PrcRecommendationResult, PrcService, Process, Service, Status, Tag, TagBulkSettings, TagProperties, TagsExportWordsSettings, Weight, ClassifierServiceApi, DataSetApi, DocumentApi, HelperApi, PrcServiceApi, ProcessApi, ServiceApi, StatusApi, TagApi) {
  'use strict';

  /**
   * Slamby SDK.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SlambySdk = require('./index'); // See note below*.
   * var xxxSvc = new SlambySdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SlambySdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SlambySdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SlambySdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BulkResult model constructor.
     * @property {module:model/BulkResult}
     */
    BulkResult: BulkResult,
    /**
     * The BulkResults model constructor.
     * @property {module:model/BulkResults}
     */
    BulkResults: BulkResults,
    /**
     * The ClassifierActivateSettings model constructor.
     * @property {module:model/ClassifierActivateSettings}
     */
    ClassifierActivateSettings: ClassifierActivateSettings,
    /**
     * The ClassifierPrepareSettings model constructor.
     * @property {module:model/ClassifierPrepareSettings}
     */
    ClassifierPrepareSettings: ClassifierPrepareSettings,
    /**
     * The ClassifierRecommendationRequest model constructor.
     * @property {module:model/ClassifierRecommendationRequest}
     */
    ClassifierRecommendationRequest: ClassifierRecommendationRequest,
    /**
     * The ClassifierRecommendationResult model constructor.
     * @property {module:model/ClassifierRecommendationResult}
     */
    ClassifierRecommendationResult: ClassifierRecommendationResult,
    /**
     * The ClassifierService model constructor.
     * @property {module:model/ClassifierService}
     */
    ClassifierService: ClassifierService,
    /**
     * The CompressSettings model constructor.
     * @property {module:model/CompressSettings}
     */
    CompressSettings: CompressSettings,
    /**
     * The DataSet model constructor.
     * @property {module:model/DataSet}
     */
    DataSet: DataSet,
    /**
     * The DataSetStats model constructor.
     * @property {module:model/DataSetStats}
     */
    DataSetStats: DataSetStats,
    /**
     * The DataSetUpdate model constructor.
     * @property {module:model/DataSetUpdate}
     */
    DataSetUpdate: DataSetUpdate,
    /**
     * The DocumentBulkSettings model constructor.
     * @property {module:model/DocumentBulkSettings}
     */
    DocumentBulkSettings: DocumentBulkSettings,
    /**
     * The DocumentCopySettings model constructor.
     * @property {module:model/DocumentCopySettings}
     */
    DocumentCopySettings: DocumentCopySettings,
    /**
     * The DocumentFilterSettings model constructor.
     * @property {module:model/DocumentFilterSettings}
     */
    DocumentFilterSettings: DocumentFilterSettings,
    /**
     * The DocumentMoveSettings model constructor.
     * @property {module:model/DocumentMoveSettings}
     */
    DocumentMoveSettings: DocumentMoveSettings,
    /**
     * The DocumentSampleSettings model constructor.
     * @property {module:model/DocumentSampleSettings}
     */
    DocumentSampleSettings: DocumentSampleSettings,
    /**
     * The ErrorsModel model constructor.
     * @property {module:model/ErrorsModel}
     */
    ErrorsModel: ErrorsModel,
    /**
     * The ExportDictionariesSettings model constructor.
     * @property {module:model/ExportDictionariesSettings}
     */
    ExportDictionariesSettings: ExportDictionariesSettings,
    /**
     * The FileParser model constructor.
     * @property {module:model/FileParser}
     */
    FileParser: FileParser,
    /**
     * The FileParserResult model constructor.
     * @property {module:model/FileParserResult}
     */
    FileParserResult: FileParserResult,
    /**
     * The Filter model constructor.
     * @property {module:model/Filter}
     */
    Filter: Filter,
    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order: Order,
    /**
     * The PaginatedListObject model constructor.
     * @property {module:model/PaginatedListObject}
     */
    PaginatedListObject: PaginatedListObject,
    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination: Pagination,
    /**
     * The PathItem model constructor.
     * @property {module:model/PathItem}
     */
    PathItem: PathItem,
    /**
     * The PrcActivateSettings model constructor.
     * @property {module:model/PrcActivateSettings}
     */
    PrcActivateSettings: PrcActivateSettings,
    /**
     * The PrcIndexSettings model constructor.
     * @property {module:model/PrcIndexSettings}
     */
    PrcIndexSettings: PrcIndexSettings,
    /**
     * The PrcKeywordsRequest model constructor.
     * @property {module:model/PrcKeywordsRequest}
     */
    PrcKeywordsRequest: PrcKeywordsRequest,
    /**
     * The PrcKeywordsResult model constructor.
     * @property {module:model/PrcKeywordsResult}
     */
    PrcKeywordsResult: PrcKeywordsResult,
    /**
     * The PrcPrepareSettings model constructor.
     * @property {module:model/PrcPrepareSettings}
     */
    PrcPrepareSettings: PrcPrepareSettings,
    /**
     * The PrcRecommendationByIdRequest model constructor.
     * @property {module:model/PrcRecommendationByIdRequest}
     */
    PrcRecommendationByIdRequest: PrcRecommendationByIdRequest,
    /**
     * The PrcRecommendationRequest model constructor.
     * @property {module:model/PrcRecommendationRequest}
     */
    PrcRecommendationRequest: PrcRecommendationRequest,
    /**
     * The PrcRecommendationResult model constructor.
     * @property {module:model/PrcRecommendationResult}
     */
    PrcRecommendationResult: PrcRecommendationResult,
    /**
     * The PrcService model constructor.
     * @property {module:model/PrcService}
     */
    PrcService: PrcService,
    /**
     * The Process model constructor.
     * @property {module:model/Process}
     */
    Process: Process,
    /**
     * The Service model constructor.
     * @property {module:model/Service}
     */
    Service: Service,
    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status: Status,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The TagBulkSettings model constructor.
     * @property {module:model/TagBulkSettings}
     */
    TagBulkSettings: TagBulkSettings,
    /**
     * The TagProperties model constructor.
     * @property {module:model/TagProperties}
     */
    TagProperties: TagProperties,
    /**
     * The TagsExportWordsSettings model constructor.
     * @property {module:model/TagsExportWordsSettings}
     */
    TagsExportWordsSettings: TagsExportWordsSettings,
    /**
     * The Weight model constructor.
     * @property {module:model/Weight}
     */
    Weight: Weight,
    /**
     * The ClassifierServiceApi service constructor.
     * @property {module:api/ClassifierServiceApi}
     */
    ClassifierServiceApi: ClassifierServiceApi,
    /**
     * The DataSetApi service constructor.
     * @property {module:api/DataSetApi}
     */
    DataSetApi: DataSetApi,
    /**
     * The DocumentApi service constructor.
     * @property {module:api/DocumentApi}
     */
    DocumentApi: DocumentApi,
    /**
     * The HelperApi service constructor.
     * @property {module:api/HelperApi}
     */
    HelperApi: HelperApi,
    /**
     * The PrcServiceApi service constructor.
     * @property {module:api/PrcServiceApi}
     */
    PrcServiceApi: PrcServiceApi,
    /**
     * The ProcessApi service constructor.
     * @property {module:api/ProcessApi}
     */
    ProcessApi: ProcessApi,
    /**
     * The ServiceApi service constructor.
     * @property {module:api/ServiceApi}
     */
    ServiceApi: ServiceApi,
    /**
     * The StatusApi service constructor.
     * @property {module:api/StatusApi}
     */
    StatusApi: StatusApi,
    /**
     * The TagApi service constructor.
     * @property {module:api/TagApi}
     */
    TagApi: TagApi
  };

  return exports;
}));
