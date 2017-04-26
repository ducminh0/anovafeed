	export const enum VoteOn {
		Packet = 0,
		IndividualDocument = 1,
	}
    export const enum ActiveStatus {
		InActive = 0,
		Active = 1,
		RunOnce = 2,
		ActivateAsOf = 3,
		Unspecified = 99,
	}
	export const enum PermsisionSet {
		NotSet = 0,
		FullControl = 1,
		Design = 2,
		Contribute = 3,
		Read = 4,
		Delete = 5,
		Create = 6,
		ContributeAndDelete = 7,
	}
	export const enum LaunchOptions {
		NotSet = 0,
		RulesDriven = 1,
		Manual = 2,
		DateDriven = 3,
	}
	export const enum IRMPermsisions {
		NotSet = 0,
		ReadAccess = 1,
		ChangeAccess = 2,
		FullAccess = 3,
	}
	export const enum AfterRetry {
		NotSet = 0,
		Continue = 1,
		Abort = 2,
	}
	export const enum PdfPublishOption {
		No = 0,
		WithSignatureSheetOnTop = 1,
		WithSignatureSheetOnBottom = 3,
		WithoutSignatureSheet = 2,
	}
	export const enum MdaApplication {
		DocumentManagement = 1,
		Submission = 2,
	}
	export const enum YesNoOption {
		No = 0,
		Yes = 1,
	}
	export const enum VersionRule {
		CreateNewMajorVersion = 0,
		CreateNewMinorVersion = 1,
		KeepSameVersion = 2,
	}
	export const enum NotifyAllRecipients {
		Never = 0,
		CompletionOnly = 1,
		TerminatedOnly = 2,
		CompletionAndTerminated = 3,
	}
	interface PermsisionSetValues {
	}
	/** Options for the type of vote. Used in route designer. */
	export const enum VotingType {
		All = 0,
		Majority = 1,
		Percentage = 2,
		MinimumNeeded = 3,
	}
	/** Task Completion Mode */
	export const enum TaskCompletionMode {
		eSignature = 0,
		AuthenticatedeAcknowledgement = 1,
		eAcknowledgement = 2,
		NotSet = 3,
	}
	/** Full Voting rules class. These are parsed into stepParameter Class. */
	interface VotingRules {
	}
	/** Populates TimeOut units for any timeout prop data type. */
	export const enum TimeoutUnits {
		None,
		Minutes,
		Hours,
		Days,
		Weeks,
		Months,
		Years,
	}
	/** Populates time units for any PR time prop data type. */
	export const enum PRTimeUnits {
		None,
		Days,
		Weeks,
		Months,
		Years,
	}
	/** Class for PR node */
	interface PRInterval {
	}
	
	export const enum StepTypes {
		NotSet = 0,
		Approve = 1,
		Collaborate = 2,
		eSign = 3,
		Review = 4,
		Training = 5,
		Validation = 6,
	}
	export const enum RequiredReason {
		No = 0,
		YesFromListOnly = 1,
		YesFromListAndFreeTextEntry = 2,
	}
	export const enum RecordComments {
		No = 0,
		AllComments = 1,
		NegativeCommentsOnly = 2,
	}
	/** Class allowing Timeout to have good range/resolution. */
	interface StepTimeout {
		span: any;
	}
	/** Content to include in workspace. */
	export const enum ContentIncludeInWorkspace {
		PDF_and_Document = 0,
		Document_Only = 1,
		PDF_Only = 2,
	}
	/** Route Type */
	export const enum RouteType {
		Training = 0,
		Standard = 1,
		Periodic_Review = 2,
	}
	export const enum PolicyId {
		Template = 0,
		Policy = 1,
	}
	export const enum QualifiedDocStatus {
		NotInProcess = 0,
		InProcess = 1,
	}
	export const enum NodeType {
		Root = 0,
		Template = 1,
		Steps = 6,
		Step = 7,
		Colaborators = 8,
		DocumentFormula = 11,
		RouteSetting = 100,
		RouteType = 101,
		RouteCompletionOnApproval = 111,
		TemplateOwner = 103,
		RouteCompletion = 109,
		Packet = 2,
		PacketCount = 107,
		PacketTimeoutUnits = 110,
		PacketTimeoutAmount = 117,
		StepStatus = 105,
		StepTimeout = 106,
		StepTimeoutUnits = 129,
		StepTimeoutAmout = 130,
		StepUserFeedbackOnApproval = 12,
		StepUserFeedbackOnReject = 13,
		StepUserFeedbackOnPending = 14,
		AllowDelegation = 15,
		AutoAddRouteInitiator = 35,
		StepType = 16,
		RequiredReason = 17,
		RecordComments = 18,
		OnSuccessCollaboratorStatus = 235,
		OnSuccessLifecycleStatus = 236,
		OnFailureCollaboratorStatus = 237,
		OnFailureLifecycleStatus = 238,
		RouteInitiationCollaboratorStatus = 271,
		RouteInitiationLifecycleStatus = 272,
		CommentReviewTimeoutUnits = 206,
		CommentReviewTimeoutAmount = 207,
		Permissions = 166,
		LaunchOption = 167,
		VoteOn = 168,
		TrackChanges = 239,
		CommentRequired = 240,
		YesPrompt = 171,
		NoPrompt = 172,
		StepYesPrompt = 175,
		StepNoPrompt = 176,
		StepInitiationIsApproved = 179,
		StepPermissions = 9,
		Priority = 400,
		AllowSkipStep = 21,
		SkipStep = 10,
		CollaboratorUnavailableWaitTimeoutUnits = 53,
		CollaboratorUnavailableWaitTimeoutAmount = 54,
		CollaboratorUnavailableNotifyUnits = 56,
		CollaboratorUnavailableNotifyAmount = 57,
		VotingRulesType = 135,
		VotingRulesMinimum = 136,
		CancelOnStepFailure = 112,
		AlwaysFinishStep = 113,
		StepCompletionRequiresComments = 122,
		EscalationSteps = 22,
		EscalationStep = 23,
		EscalationStatus = 116,
		EscalationCollaborators = 146,
		EscalationTimeoutUnits = 133,
		EscalationTimeoutAmount = 134,
		EscalationDelegationAllowed = 115,
		EscalationUserFeedbackOnApproval = 32,
		EscalationUserFeedbackOnReject = 33,
		EscalationUserFeedbackOnPending = 34,
		ActivateCondition = 140,
		ActiveAsOf = 141,
		RetryCount = 201,
		RetryTimeUnits = 202,
		RetryTimeAmount = 203,
		AfterRetry = 211,
		IpTemplateName = 220,
		IpFormLocation = 221,
		PacketApproved = 226,
		ContentTypeRequiredInPacket = 227,
		RenderToPDF = 232,
		RenderingTemplate = 233,
		EffectiveDateOption = 242,
		EffectiveStatus = 243,
		EffectiveDateUser = 244,
		PublishToMajorVersion = 245,
		NotifyOnRouteCompletion = 265,
		NotifyOnPacketPause = 266,
		NotifyOnStepPause = 267,
		NotifyAllRecipients = 268,
		IncludeDocuments = 301,
		StepDueDefaultFolder = 304,
		StepDueDefaultUnits = 305,
		StepDueDefaultAmount = 306,
		VersionRuleOnSuccess = 246,
		VersionRuleOnFailure = 350,
		PRIntervalUnits = 312,
		PRIntervalAmount = 313,
		PRZoneUnits = 315,
		PRZoneAmount = 316,
		EffectiveDocumentPeriodUnits = 318,
		EffectiveDocumentPeriodAmount = 319,
		SetPreviousVersionLifecycleStatus = 320,
		ContentIncludeInWorkspace = 275,
		DefaultManualWorkflowName = 351,
		DefaultWorkflowInstructions = 352,
	}
	export const enum NodePropertyType {
		Default = 0,
		RouteType = 1,
		TemplateApprovalStatus = 2,
		PacketStatus = 3,
		StepStatus = 4,
		VotingRules = 5,
		TimeoutUnits = 6,
		Templates = 7,
		CollaboratorStatus = 8,
		LifeCycleStatus = 9,
		ActivationStatus = 10,
		Permissions = 11,
		IRM = 12,
		AfterRetry = 13,
		LaunchOptions = 14,
		IpTemplateNames = 15,
		IpFormLocations = 16,
		EffectDateOptions = 17,
		UserList = 18,
		PdfPublishOptions = 20,
		VersionRule = 21,
		RenderingTemplate = 22,
		PRTimeUnits = 23,
		VoteOn = 24,
		AllowDelegation = 25,
		StepType = 26,
		ContentTypeRequiredInPacket = 27,
		Priority = 28,
		NotifyAllRecipients = 29,
		RecordComments = 30,
		RequiredReason = 31,
		ContentIncludeInWorkspace = 32,
		TaskCompletionMode = 33,
	}
	export interface ConvertNodeType {
	}

