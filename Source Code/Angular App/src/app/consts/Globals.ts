
// To use it in another file 
//import myGlobals = require('./globals');
// export helloString: string="hello " + myGlobals.sep + " there"; or 
//import * as myGlobals from './path/to/globals';
'use strict';

//local config path
export const CONFIG_FILE_PATH = "src/app/appConfig.xml"; //remember to change to sharepoint path
//List of APIs
export const GET_APP_STORAGE_API = "/api/Wizard/GetAppStorage";
export const GET_WF_TEMPLATE_API = "/api/Wizard/GetWFTemplate";
export const GET_WF_TEMPLATE_INFO_API = "/api/Wizard/GetWFTemplateInfo";
export const GET_DOC_FOR_TEMPLATE_API = "/api/Wizard/GetDocForTemplate";
export const GET_WF_STEP_USERS_API = "/api/Wizard/GetStepUsers";
export const GET_VDOC_BY_DOCID_API = "/api/Wizard/GetVdocByDocId";
export const GET_ALL_TRAINING_RECORDS = "/api/Wizard/GetAllTrainingRecords";
export const SAVE_LAUNCH_ROUTE_API = "/api/Wizard/SaveLaunchRoute";



export const FAILED_TO_PROCEED_STRING = "The packet failed to qualified and cannot procceed to next step. </br>"
export const DUPLICATE_RULE_STRING = "These document(s) are found duplicate on the packet and may cause ambiguous status transition in the workflow. Please discard them to proceed. </br>"
export const REMOVE_UNQUALIFIED_DOCS_STRING = "These document(s) have been removed from your packet due to not qualifying your selected template </br>";

export const GUID_EMPTY = "00000000-0000-0000-0000-000000000000";

export const LOADING_TEMPLATE_MSG: string = "Loading templates, Please Wait ...";
export const LOADING_TEMPLATE_STEP_MSG: string = "Loading Template Steps, Please Wait...";
export const NO_TEMPLATE_MSG: string = "- The selected documents do not qualify for at least one common workflow template. </br>- Ensure the selected documents qualify for at least one workflow template to continue.";
export const NO_TEMPLATE_MSG_SINGLE_DOC_SELECTED: string = "- Document '${0}'${1} does not qualify for at least one common workflow template. </br>- Ensure document '${0}'${2} qualifies for at least one workflow template to continue. ";
export const MSG_TITLE: string = "Error";
export const NOT_LATEST_MSG: string = "The packet contains at least one document that are not at latest version or user does not have permission on the latest version of the document. \n Ensure all the documents are latest version to continue. ";
export const CONFIRM_MSG_TITLE:string = "Workflow Confirmation Message";

export const AUTONAMING_DATABASE_CONNECTION_NAME = "AutoNamingDataStore";
export const AUTONUMBERING_DATABASE_CONNECTION_NAME = "AutoNumberingDataStore";
export const CONTROLLED_PRINTTING_DATABASE_CONNECTION_NAME = "TemplateMappingDataStore";
export const CONVERSION_TEMPLATE_DATABASE_CONNECTION_NAME = "ZorchRoutesDataStore";
export const DELEGATE_TASK_HISTORY_DATABASE_CONNECTION_NAME = "ZorchRoutesDataStore";
export const EMAIL_TEMPLATE_DATABASE_CONNECTION_NAME = "TemplateMappingDataStore";
export const GUIDED_PATH_DATABASE_CONNECTION_NAME = "GuidedPathDataStore";
export const MANUAL_STATE_CHANGE_DATABASE_CONNECTION_NAME = "TemplateMappingDataStore";
export const RESTRICTED_EDIT_DATABASE_CONNECTION_NAME = "RestrictedEditDataStore";
export const SECURITY_TEMPLATE_DATABASE_CONNECTION_NAME = "SecurityTemplateDataStore";
export const SHAREPOINT_DATABASE_CONNECTION_NAME = "SharePointDataStore";
export const STORAGE_PATH_DATABASE_CONNECTION_NAME = "ZorchRoutesDataStore";
export const TEMPLATE_MAPPING_DATABASE_CONNECTION_NAME = "TemplateMappingDataStore";
export const VALIDATIONS_ACTIONS_DATABASE_CONNECTION_NAME = "ValidationsActionsDataStore";
export const WORKFLOW_DATABASE_CONNECTION_NAME = "ZorchRoutesDataStore";
export const METADATA_FORMULA_DATABASE_CONNECTION_NAME = "MetadataFormulaDataStore";
export const GROUP_COLLECTIONS_DATABASE_CONNECTION_NAME = "GroupCollectionsDataStore";
export const DISPLAYED_CHARACTER = ",";
export const COMMENT_FIELD = "CheckedInComment";

export const ComponentName = ["Workflow", "Documents", "Participants", "Summary", "Launch Workflow"];
export const Next = "Next: ";
export const Previous = "Previous: ";

