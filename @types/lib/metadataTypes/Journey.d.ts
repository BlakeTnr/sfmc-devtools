export default Journey;
export type BuObject = import('../../types/mcdev.d.js').BuObject;
export type CodeExtract = import('../../types/mcdev.d.js').CodeExtract;
export type CodeExtractItem = import('../../types/mcdev.d.js').CodeExtractItem;
export type MetadataTypeItem = import('../../types/mcdev.d.js').MetadataTypeItem;
export type MetadataTypeItemDiff = import('../../types/mcdev.d.js').MetadataTypeItemDiff;
export type MetadataTypeItemObj = import('../../types/mcdev.d.js').MetadataTypeItemObj;
export type MetadataTypeMap = import('../../types/mcdev.d.js').MetadataTypeMap;
export type MetadataTypeMapObj = import('../../types/mcdev.d.js').MetadataTypeMapObj;
export type SoapRequestParams = import('../../types/mcdev.d.js').SoapRequestParams;
export type TemplateMap = import('../../types/mcdev.d.js').TemplateMap;
/**
 * @typedef {import('../../types/mcdev.d.js').BuObject} BuObject
 * @typedef {import('../../types/mcdev.d.js').CodeExtract} CodeExtract
 * @typedef {import('../../types/mcdev.d.js').CodeExtractItem} CodeExtractItem
 * @typedef {import('../../types/mcdev.d.js').MetadataTypeItem} MetadataTypeItem
 * @typedef {import('../../types/mcdev.d.js').MetadataTypeItemDiff} MetadataTypeItemDiff
 * @typedef {import('../../types/mcdev.d.js').MetadataTypeItemObj} MetadataTypeItemObj
 * @typedef {import('../../types/mcdev.d.js').MetadataTypeMap} MetadataTypeMap
 * @typedef {import('../../types/mcdev.d.js').MetadataTypeMapObj} MetadataTypeMapObj
 * @typedef {import('../../types/mcdev.d.js').SoapRequestParams} SoapRequestParams
 * @typedef {import('../../types/mcdev.d.js').TemplateMap} TemplateMap
 */
/**
 * Journey MetadataType
 * ! BETA RELEASE of journey support (v4.3.0); it so far only resolves a limited amount of dependencies and will likely break during cross-BU deployments!
 * id: A unique id of the journey assigned by the journey’s API during its creation
 * key: A unique id of the journey within the MID. Can be generated by the developer
 * definitionId: A unique UUID provided by Salesforce Marketing Cloud. Each version of a journey has a unique DefinitionID while the Id and Key remain the same. Version 1 will have id == definitionId
 *
 * @augments MetadataType
 */
declare class Journey extends MetadataType {
    /**
     * Retrieves Metadata of Journey
     *
     * @param {string} retrieveDir Directory where retrieved metadata directory will be saved
     * @param {void | string[]} [_] unused parameter
     * @param {void | string[]} [__] unused parameter
     * @param {string} [key] customer key of single item to retrieve
     * @returns {Promise.<MetadataTypeMapObj>} Promise
     */
    static retrieve(retrieveDir: string, _?: void | string[], __?: void | string[], key?: string): Promise<MetadataTypeMapObj>;
    /**
     * Updates a single item
     *
     * @param {MetadataTypeItem} metadata a single item
     * @returns {Promise} Promise
     */
    static update(metadata: MetadataTypeItem): Promise<any>;
    /**
     * Creates a single item
     *
     * @param {MetadataTypeItem} metadata a single item
     * @returns {Promise} Promise
     */
    static create(metadata: MetadataTypeItem): Promise<any>;
    /**
     * helper for Journey's {@link Journey.saveResults}. Gets executed after retreive of metadata type and
     *
     * @param {MetadataTypeMap} metadataMap key=customer key, value=metadata
     */
    static _postRetrieveTasksBulk(metadataMap: MetadataTypeMap): Promise<void>;
    /**
     * manages post retrieve steps
     * ! BETA RELEASE of journey support (v4.3.0); it so far only resolves a limited amount of dependencies and will likely break during cross-BU deployments!
     *
     * @param {MetadataTypeItem} metadata a single item
     * @returns {MetadataTypeItem} Array with one metadata object
     */
    static postRetrieveTasks(metadata: MetadataTypeItem): MetadataTypeItem;
    /**
     * helper for {@link Journey.postRetrieveTasks}
     *
     * @private
     * @param {MetadataTypeItem} metadata a single item
     */
    private static _postRetrieveTasks_activities;
    /**
     * prepares a TSD for deployment
     * ! BETA RELEASE of journey support (v4.3.0); it so far only resolves a limited amount of dependencies and will likely break during cross-BU deployments!
     *
     * @param {MetadataTypeItem} metadata of a single TSD
     * @returns {Promise.<MetadataTypeItem>} metadata object
     */
    static preDeployTasks(metadata: MetadataTypeItem): Promise<MetadataTypeItem>;
    /**
     * helper for {@link Journey.preDeployTasks}
     *
     * @private
     * @param {MetadataTypeItem} metadata a single item
     */
    private static _preDeployTasks_activities;
    /**
     *
     * @param {MetadataTypeItem} item single metadata item
     * @returns {Promise.<MetadataTypeItem>} key of the item that was updated
     */
    static replaceCbReference(item: MetadataTypeItem): Promise<MetadataTypeItem>;
}
declare namespace Journey {
    let definition: {
        folderType: string;
        bodyIteratorField: string;
        dependencies: string[];
        folderIdField: string;
        hasExtended: boolean;
        idField: string;
        keyIsFixed: boolean;
        keyField: string;
        nameField: string;
        createdDateField: string;
        createdNameField: any;
        lastmodDateField: string;
        lastmodNameField: any;
        restPagination: boolean;
        restPageSize: number;
        type: string; /**
         * Retrieves Metadata of Journey
         *
         * @param {string} retrieveDir Directory where retrieved metadata directory will be saved
         * @param {void | string[]} [_] unused parameter
         * @param {void | string[]} [__] unused parameter
         * @param {string} [key] customer key of single item to retrieve
         * @returns {Promise.<MetadataTypeMapObj>} Promise
         */
        typeDescription: string;
        typeRetrieveByDefault: boolean;
        typeName: string;
        priorityMapping: {
            High: number;
            Medium: number;
            Low: number;
        };
        fields: {
            activities: {
                skipValidation: boolean;
            };
            categoryId: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            channel: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            createdDate: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'defaults.email': {
                skipValidation: boolean;
            };
            'defaults.mobileNumber': {
                skipValidation: boolean;
            };
            'defaults.properties.analyticsTracking.enabled': {
                isCreateable: any;
                isUpdateable: any;
                retrieving: any;
                template: any;
            };
            'defaults.properties.analyticsTracking.analyticsType': {
                isCreateable: any;
                isUpdateable: any;
                retrieving: any;
                template: any;
            };
            'defaults.properties.analyticsTracking.urlDomainsToTrack': {
                isCreateable: any;
                isUpdateable: any;
                retrieving: any;
                template: any;
            };
            definitionId: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            definitionType: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            description: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            entryMode: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            executionMode: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            exits: {
                skipValidation: boolean;
            };
            goals: {
                skipValidation: boolean;
            };
            healthStats: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            id: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            key: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            lastPublishedDate: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'metaData.templateId': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            modifiedDate: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            name: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            scheduledStatus: {
                isCreateable: any;
                isUpdateable: any;
                retrieving: any;
                template: any;
            };
            stats: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            status: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            triggers: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].id': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].key': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].name': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].description': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].type': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].outcomes': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].arguments': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].arguments.startActivityKey': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].arguments.dequeueReason': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].arguments.lastExecutedActivityKey': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].arguments.filterResult': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.eventDataConfig': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.primaryObjectFilterCriteria': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.relatedObjectFilterCriteria': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.salesforceTriggerCriteria': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.objectAPIName': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.version': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.contactKey': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.contactPersonType': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.primaryObjectFilterSummary': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.relatedObjectFilterSummary': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.eventDataSummary': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.evaluationCriteriaSummary': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.applicationExtensionKey': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.passThroughArgument': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.filterDefinitionId': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.criteria': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].configurationArguments.schemaVersionId': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            }; /**
             * Deploys metadata - merely kept here to be able to print {@link Util.logBeta} once per deploy
             *
             * @param {MetadataTypeMap} metadata metadata mapped by their keyField
             * @param {string} deployDir directory where deploy metadata are saved
             * @param {string} retrieveDir directory where metadata after deploy should be saved
             * @returns {Promise.<MetadataTypeMap>} Promise of keyField => metadata map
             */
            'triggers[].metaData': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].metaData.sourceInteractionId': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].metaData.eventDefinitionId': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].metaData.eventDefinitionKey': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].metaData.chainType': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].metaData.configurationRequired': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].metaData.iconUrl': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            'triggers[].metaData.title': {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            version: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            workflowApiVersion: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean;
                template: boolean;
            };
            metaData: {
                skipValidation: boolean;
            };
            notifiers: {
                skipValidation: boolean;
            };
            tags: {
                skipValidation: boolean;
            };
            r__folder_Path: {
                isCreateable: boolean;
                isUpdateable: boolean;
                retrieving: boolean; /**
                 * helper for Journey's {@link Journey.saveResults}. Gets executed after retreive of metadata type and
                 *
                 * @param {MetadataTypeMap} metadataMap key=customer key, value=metadata
                 */
                template: boolean;
            };
        };
    };
}
import MetadataType from './MetadataType.js';
//# sourceMappingURL=Journey.d.ts.map