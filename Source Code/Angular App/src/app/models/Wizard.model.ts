import * as DBDataModel from './DatabaseDataModel.model'

export enum RouteStatus {

    ///  Route has been created but not started.
    /// Must be before Status Running.

    NotStarted = 0,


    /// Route has been created but not started.
    /// Must be before Status Running.

    PacketPaused = 1,


    /// The Packet was approved but the Hearbeat hasn't processed it yet.
    /// Must be before Status Running.

    PendingStart = 2,


    /// Started and currenly running

    Running = 5,


    /// Waiting for step approval.
    /// Must be After Status Running.

    StepPaused = 6,


    /// Step is approved but Heartbeat hasn't picket it up yet.
    /// Must be After Status Running.

    PendingStep = 7,


    /// Route is completed. No longer active
    /// Must be after all active Statuese.
    /// 1.5 databases will have the value 4 here

    Finished = 10,


    /// It wasn't completed but was aborted prior to finishing.
    /// 1.5 databases will have the value 5 here

    Aborted = 11,

}
export class WizardRoute {

    /// Gets or sets workflow owner

    public RouteOwner: string;


    /// Gets or sets workflow status display name

    public StatusDisplayName: string;


    /// Default constructor

    constructor() {
        /*Packet = new Collection<WizardDoc>();
        Steps = new Collection<WizardStep>();
        Id = string.Empty;
        Name = string.Empty;
        TemplateName = string.Empty;
        InstanceId = string.Empty;
        TemplateId = string.Empty;
        VoteOn = VoteOn.IndividualDocument;*/
    }


    /// Gets or sets workflow status

    public Status: RouteStatus;


    /// Gets or sets workflow name


    public Name: string;


    /// Gets or sets workflow id

    public Id: string; // Really a 


    /// Gets or sets template id

    public TemplateId: string;


    /// Gets or sets template name

    public TemplateName: string;


    /// Gets or sets workflow instruction

    public Instructions: string;        // FP-1214


    /// Gets or sets workflow priority

    public Priority: string;


    /// Gets or sets workflow instance id

    public InstanceId: string;


    /// Gets or sets documents in workflow

    public Packet: Array<WizardDoc>;


    /// Gets or sets steps in workflow

    public Steps: Array<WizardStep>;


    /// Gets or sets workflow owner

    public Owner: string;


    /// Gets or sets workflow type

    public RouteType: DBDataModel.RouteType;

    /// Gets or sets workflow vote-on value

    public VoteOn: DBDataModel.VoteOn;
}

export class WizardStep {

    /// Gets or sets step status

    public Status: WizardStepStatus;


    /// Gets or sets step name

    public Name: string;

    /// Gets or sets step number

    public StepNum: number;


    /// Gets or sets step id

    public Id: string; // Used to get Participant Rule


    /// Gets or sets step type

    public StepType: DBDataModel.StepTypes;


    /// Gets or sets step images

    public Image: WizardStepImage;


    /// Gets or sets value indicates a step is skipped or not

    public SkipStep: boolean;


    /// Gets or sets value indicates a step allows to be skipped or not

    public AllowSkipStep: boolean;


    /// Gets or sets step due amount

    public DueAmount: number;


    /// Gets or sets step due unit

    public DueUnits: string;


    /// Gets or sets step participants

    public Participants: Array<WizardParticipant>;


    /// Gets or sets actual step id

    public UserStepId: string; // Really a 


    /// Gets or sets value indicates a step is paused or not

    public IsStepPaused: boolean;


    /// Gets or sets step full name

    public FullName: string;


    /// Gets or sets step priority

    public Priority: FPPriority;


    /// Gets or sets value indicates a step allow auto-added route initiator

    public AutoAddRouteInitiator: boolean;


    /// Gets or sets value indicates a step is an escalation step or not

    public IsEscalationStep: boolean;


    /// Gets or sets step qualified participants

    public QualifiedParticipants: Array<WizardParticipant>;


    /// Gets or sets list of step actions when manage workflow

    public Actions: Array<WizardStepAction>;


    /// Gets or sets reassigned users in a step

    public ReassignedUsers: Array<Reassignment>;


    /// Gets or sets removed users in a step

    public RemovedUsers: Array<WizardParticipant>;


    /// Gets or sets added users in a step

    public AddedUsers: Array<WizardParticipant>;


    /// Gets or sets step start date

    public StartDate: Date;

    /// Gets or sets step end date

    public EndDate: Date;


    /// Gets or sets number of tasks required in a step

    public RequiredTaskAcceptanceNumber: Date;


    /// Gets or sets value indicates a step is vote-on packet

    public IsVoteOnPacket: boolean;


    /// Gets or sets Voting Rules Type

    public VotingRulesType: string;


    /// Gets or sets Voting Rules Minimum

    public VotingRulesMinimum: string;


    /// Default constructor

    constructor() {
        /* Participants = new Collection<WizardParticipant>();
         QualifiedParticipants = new Collection<WizardParticipant>();
         Actions = new Collection<WizardStepAction>();
         AddedUsers = new Collection<WizardParticipant>();
         RemovedUsers = new Collection<WizardParticipant>();
         ReassignedUsers = new Collection<Reassignment>();
         RequiredTaskAcceptanceNumber = "0";
         IsVoteOnPacket = false;*/
    }
}
export class WizardParticipant {

    /// Gets or sets participant name for sorting

    public SortedName: string;


    /// Gets or sets participant name

    public Name: string;


    /// Gets or sets participant login name

    public Login: string;


    /// Gets or sets participant title name


    public Title: string;


    /// Gets or sets participant id


    public UserId: number;


    /// Gets or sets if participant is out-of-office or not


    public OutOfOffice: boolean;


    /// Gets or sets participant return date from out-of-office


    public ReturnDate: Date;


    /// Gets or sets if participant has finished 1 task or not


    public HasFinshedOneTask: boolean;    // True if user has completed at least 1 task. Needed to know so we can reassign


    /// Gets or sets if participant has finished all tasks


    public HasFinshedAllTasks: boolean;   // Needed to know so we can't delete or reassign.


    /// Gets or sets participant start date from out-of-office


    public FromDate: Date;


    /// Gets or sets participant task status


    public TaskStatus: WizardTaskStatus;


    /// Gets or sets participant state in workflow


    public State: WizardParticipantState;


    /// Gets or sets if participant is a SharePoint domain user or not


    public IsDomainGroup: boolean;


    /// Gets or sets if participant is a SharePoint group or not


    public IsGroup: boolean;


    /// Gets or sets all child participants of a participant if it is a SharePoint group


    public ChildParticipants: Array<WizardParticipant>;
}



export enum WizardParticipantState {

    /// Original participant who is being recorded in workflow.

    Original,

    /// Newly added participant who has not been recorded in workflow.

    Added,

    /// Newly reassgined participant who has not been recorded in workflow.

    Reassigned,


    /// Newly removed participant who has not been recorded in workflow.

    Removed
}
export enum WizardTaskStatus {

    /// Inprogress task

    InProgress,


    /// Completed task

    Completed,


    /// Not-start task

    NotStart

}
export enum WizardStepStatus {

    /// Finished step

    Finished = 1,


    /// Current step

    Current = 2,


    /// Future step

    Future = 3
}
export class WizardDoc {
    constructor() {
        this.IsLatestVersion = true;
    }


    /// Gets or sets document id


    public DocId: string; // Really a 


    /// Gets or sets value indicate document has relationship or not


    public HasRelationship: boolean;


    /// Gets or sets document name


    public DocName: string;


    /// Gets or sets document url


    public DocUrl: string;


    /// Gets or sets document version


    public Version; string;


    /// Gets or sets document content type


    public ContentType: string;


    /// Gets or sets document lifecycle status value


    public LifeCycleStatus: string;


    /// Gets or sets document routing status value


    public RoutingStatus: string;  // not being filled in.


    /// Gets or sets document title


    public Title: string;        // FP-1214


    /// Gets or sets list id that contains document


    public ListId: string;


    /// Gets or sets document item id


    public ItemId: number;


    /// Document Properties


    public Properties: Array<DocumentProperty>;



    /// Gets or sets a value indicating whether this document's version is latest.

    /// <value>
    ///   <c>true</c> if this document is latest; otherwise, <c>false</c>.
    /// </value>

    public IsLatestVersion: boolean;



    /// Gets or sets the virtual document unique id to determine which virtual document this belongs to.

    /// <value>
    /// The virtual document unique id.
    /// </value>

    public VirtualDocumentId: string;

}

export class DocumentProperty {

    /// Gets or sets name

    public Name: string;


    /// Gets or sets value

    public Value: any;
}

export class Reassignment {

    /// The user who is currently assiged to the task.


    public OldUser: string;


    /// The user who will be reassigned to the task.


    public NewUser: string;

    /// Login user.


    public LoginUser: string;


    /// The route holds the task to be reassinged.


    public RouteId: string
}

export class WizardStepAction {
    //empty
}


/// Add user action


export class AddUserAction extends WizardStepAction {

    /// Gets or sets added user


    public AddedUser: WizardParticipant;
}


/// Remove user action


export class RemoveUserAction extends WizardStepAction {

    /// Gets or sets removed user


    public RemovedUser: WizardParticipant;
}


/// Reassigned user action


export class ReassignUserAction extends WizardStepAction {

    /// Gets or sets unique id for reassignment


    public Id: string;


    /// Gets or sets reassignment


    public ReassignedUser: Reassignment;
}

export class WizardStepImage
    {
       
        /// Gets or sets step type icon url
    
        
        public  TypeIcon: string;

       
        /// Gets or sets step type large icon url
    
        
        public  LargeTypeIcon: string;

       
        /// Gets or sets step type mouse-over large icon url
    
        
        public  MouseOverLargeTypeIcon: string;

       
        /// Gets or sets step type icon url for workflow manager
    
        
        public  WorkflowManagerIcon: string;

       
        /// Gets or sets step type mouse-over icon url for workflow manager
    
        
        public  WorkflowManagerMouseOverIcon: string;

       
        /// Gets or sets step bar image url for active step
    
        
        public  ActiveStepBarIcon: string;

       
        /// Gets or sets step bar image url for inactive step
    
        
        public  InactiveStepBarIcon: string;
    }

export class FPPriority
    {
       
        /// Gets or sets priority value
    
        
        public  Value : string; 

       
        /// Gets or sets priority image
    
        
        public  Image: string;

       
        /// Gets or sets priority display value
    
        
        public  DisplayValue: string;

       
        /// Gets or sets if a priory is selected or not
    
        
        public  IsSelected: boolean;
    }

   export enum UrlSource
    {
        Unspecified = 0,
        ChangeRequestForm = 1,
        WindowsClient = 2,
        SharepointContext = 3,
        CreateDocumentWebpart = 4,
        WorkspaceEditForm=5,
        WorkspaceEditRoute=6
    }

    export enum TemplateClass
    {
        Route = 0,
        Template = 1,
        Policy = 2,
    }

    export enum StepTypes
    {
        NotSet = 0,
        Approve = 1,
        Collaborate = 2,
        eSign = 3,
        Review = 4,
        Training = 5,
        Validation = 6
    }

     export class BaseNodeId
    {
       
        /// Root node.
    
        
        public static    Root ="4C83BFB1-3EBE-4C76-895E-4A34D62FAEA8"; //0        

       
        /// Template Node.
    
        
        public static   Template ="ED2D1EE5-E4D1-4A70-A619-39122AB607DD" //1

       
        /// Steps root.
    
        
        public static   Steps  ="231C0001-4C45-4E16-98E0-B581602B8E94" //6

       
        /// Represents a template step.
    
        
        public static  Step  ="231C0001-4C45-4E16-98E0-B581602B8E94" //7

       
        /// Represents a collaborator formula.
    
        
        public static   CollaboratorFormula  ="EAE35148-87E7-4ACC-A9AF-778EC3310EB5" //8

       
        /// Represents a document formula.
    
        
        public static   DocumentFormula  ="22629D8F-E4C4-40B1-BE07-A2F0F8FA97DC"//11

       
        /// Workflow Setting node.
    
        
        public static   WorkflowSetting  ="FF03A77F-2B94-48CD-BB15-9F8D7AC48DE3"//100

       
        /// Represents type of workflow. It can be one for standard workflow or two for training workflow
    
        
        public static   WorkflowType  ="40F0B487-EC10-4C4E-A61E-13867A5C3C07"//101

       
        /// WorkflowCompletionOnApproval node.
    
        
        public static   WorkflowCompletionOnApproval  ="8B961754-5FB5-4740-B907-2FBE45C47B6F"//111

       
        /// Template Owner node.
    
        
        public static   TemplateOwner  ="C7E0A846-0682-4C34-BB2F-DA715FF8190E"//103

       
        /// Workflow Completion node.
    
        
        public static   WorkflowCompletion  ="365B02EC-ED50-473F-B467-6B161DF20E42"//109

       
        /// Packet root node.
    
        
        public static   Packet  ="98107129-C670-40DA-869C-60EA793CAABD" //2

       
        /// Packet Count for Date driven and Rule driven workflows. 
    
        
        public static   PacketCount  ="51D8B5F1-BBD5-46DC-8725-6696368FD5D5" //107

       
        /// Packet TimeOut Units node.
    
        
        public static   PacketTimeOutUnits  ="817FD26C-F095-4243-8E4A-BB7E09836ACC" //110

       
        /// Packet TimeOut Amount node.
    
        
        public static   PacketTimeOutAmount  ="27F78E84-442B-4194-ADC5-6048DED530C8" //117

       
        /// StepStatus node.
    
        
        public static   StepStatus  ="4F349D22-2F7E-47D6-A5D4-91DCA51864C7" //105

       
        /// Step TimeOut node.
    
        
        public static   StepTimeOut  ="B6DF0BF8-75DF-4949-8DE4-F38430F38E2C" //106

       
        /// Step TimeOut Units node.
    
        
        public static   StepTimeOutUnits  ="0CB592D5-88D0-4E18-94CF-2A3FDE1E21C4" //129

       
        /// Steps TimeOut Amount node.
    
        
        public static   StepTimeOutAmount  ="6E9FEFA7-7186-48AF-8321-E8B7660074EB" //130

       
        /// StepUserFeedbackOnApproval node.
    
        
        public static   StepUserFeedbackOnApproval  ="383E874A-74AA-4317-9548-8A07EC527565" //12

       
        /// StepUserFeedbackOnReject node.
    
        
        public static   StepUserFeedbackOnReject  ="F3DC515C-28BF-4596-8099-5E26314BC319" //13

       
        /// StepUserFeedbackOnPending node.
    
        
        public static   StepUserFeedbackOnPending  ="49AD95D3-568D-4D91-9E10-19F40168EDE7" //14

       
        /// AllowDelegation node.
    
        
        public static   AllowDelegation  ="7B76C9BC-45DC-446B-9562-922269238344" //15

       
        /// AutoAddRouteInitiator node.
    
        
        public static   AutoAddRouteInitiator  ="7EFF4763-8FA8-40B0-A0F9-85C5501C6BAB" //35

       
        /// StepType node.
    
        
        public static   StepType  ="465A890C-5AF2-42E7-A791-BB630C23CB3B" //16

       
        /// RequiredReason node.
    
        
        public static   RequiredReason  ="43E3D4BB-E870-415C-858E-6247404257AD" //17

       
        /// RecordComments node.
    
        
        public static   RecordComments  ="8080F3D1-8E19-46FE-897B-3C8015424D15" //18

       
        /// OnSuccessRoutingStatus node.
    
        
        public static   OnSuccessRoutingStatus  ="26D2417E-BC04-4697-BE83-BB66A4390CAF" //235

       
        /// OnSuccessLifecycleStatus node.
    
        
        public static   OnSuccessLifecycleStatus  ="0265A741-F034-4236-86A6-D8AFB5811C44"//236

       
        /// OnFailureRoutingStatus node.
    
        
        public static   OnFailureRoutingStatus  ="BDE25289-735A-49BA-8448-940B14DA2A5C" //237

       
        /// OnFailureLifecycleStatus node.
    
        
        public static   OnFailureLifecycleStatus  ="5790AC49-3715-4D86-91D8-E402A730417E" //238

       
        /// WorkflowInitiationRoutingStatus node.
    
        
        public static   WorkflowInitiationRoutingStatus  ="2D5624CD-5CEE-4AC5-B4C5-737AE4AD7C7E" //271

       
        /// WorkflowInitiationLifecycleStatus node.
    
        
        public static   WorkflowInitiationLifecycleStatus  ="408AB1E6-1285-48AD-A3DD-ACA3E854E7EF" //272

       
        /// CommentReviewTimeOutUnits node.
    
        
        public static   CommentReviewTimeOutUnits  ="065AF57B-42C6-40B3-9016-78D93BED9DE2"//206

       
        /// CommentReviewTimeOutAmount node.
    
        
        public static   CommentReviewTimeOutAmount  ="339BDF09-E7C8-462D-B37B-DE7AA0C4F193" //207

       
        /// Permission node.
    
        
        public static   Permission  ="88B3B2ED-22FC-4668-8501-EE6F6F359A6E" //166        

       
        /// LaunchOption node.
    
        
        public static   LaunchOption  ="ED4B9BB1-1422-4864-B1C1-544A2E0DB252" //167

       
        /// VoteOn node. Its value can be Packet/Individual.
    
        
        public static   VoteOn  ="37426E67-B2E2-4C39-AB90-5ECC863F8A7C" //168

       
        /// Turn on/off track changes  on Workflow documents when editing them with Office.
    
        
        public static   TrackChanges  ="3DFE84A0-FF3E-4FE0-B787-69C1792DD6A5" //239

       
        /// CommentRequired node.
    
        
        public static   CommentRequired  ="127826FC-7DD7-4984-BF87-7A2E55E9E4D4"//240

       
        /// YesPrompt node.
    
        
        public static   YesPrompt  ="2DF8AB02-A76D-4338-8CC2-A752D1501749" //171

       
        /// NoPrompt node.
    
        
        public static   NoPrompt  ="72646476-A5F3-489D-B6B8-41B6C9E2994A" //172

       
        /// StepYesPrompt node.
    
        
        public static   StepYesPrompt  ="E943E4B3-0CB5-4592-B035-F11BFDE8F1D4" //175

       
        /// StepNoPrompt node.
    
        
        public static   StepNoPrompt  ="89D3C5F6-943E-4B73-A9D7-343ECE2BAA84" //176

       
        /// StepInitiationIsApproved node.
    
        
        public static   StepReady ="ECA8AAF9-922D-43AA-BD77-AE482AC25095" //179

       
        /// StepPermission node.
    
        
        public static   StepPermission  ="2CD684EC-A8C0-425E-B242-1CDEAFBD8376"//9

       
        /// Priority node.
    
        
        public static   Priority  ="B9FB1E0A-42A4-4E80-9921-C1E76026FEA1" //400

       
        /// AllowSkipStep node.
    
        
        public static   AllowSkipStep  ="2AB74C74-B7E9-49A0-989D-E9EDDD7C31CC" //21

       
        /// SkipStep node.
    
        
        public static   SkipStep  ="F5C50F5B-7531-4244-8D53-F0D1AB75C63C" //10

       
        /// CollaboratorUnavailableWaitTimeoutUnits node.
    
        
        public static   CollaboratorUnavailableWaitTimeoutUnits  ="19914DBB-9FB5-4553-946A-70F063E1F880" //53

       
        /// CollaboratorUnavailableWaitTimeoutAmount node.
    
        
        public static   CollaboratorUnavailableWaitTimeoutAmount  ="7D70CB59-A688-4267-8C46-A95FA2AF6954" //54

       
        /// CollaboratorUnavailableNotifyUnits node.
    
        
        public static   CollaboratorUnavailableNotifyUnits  ="1B32474C-6048-49A4-8201-2528A1F5CA47" //56

       
        /// CollaboratorUnavailableNotifyAmount node.
    
        
        public static   CollaboratorUnavailableNotifyAmount  ="26E55EBB-5A3D-4616-8791-4F5AD7C40FA0" //57

       
        /// VotingRulesType node.
    
        
        public static   VotingRulesType  ="F44C52AB-DA7B-4A96-9BE1-2FD6D20C7060" //135

       
        /// VotingRulesMinimum node.
    
        
        public static   VotingRulesMinimum  ="F5B29988-F166-4D6E-9853-1FCE51DE2385" //136

       
        /// CancelOnStepFailure node.
    
        
        public static   CancelOnStepFailure  ="D4193AD3-8C2D-4F10-AC0C-60048C9D5998" //112

       
        /// AlwaysFinishStep node.
    
        
        public static   AlwaysFinishStep  ="E3EA60B9-728D-4767-9598-6E100F8BD581" //113

       
        /// StepCompletionRequiresComments node.
    
        
        public static   StepCompletionRequiresComments  ="D4FF379A-16E9-4CB5-8E60-9A49778B55A1" //122

       
        /// EscalationSteps node.
    
        
        public static   EscalationSteps  ="DAA3C4B9-B60B-4B36-938B-67C94CA91036" //22

       
        /// EscalationStep node.
    
        
        public static   EscalationStep  ="37166AB6-BC84-47FD-9598-BDC566B2BD4E" //23

       
        /// EscalationStatus node.
    
        
        public static   EscalationStatus  ="A9380F61-1956-4FC7-BB29-ECD9AAF3B26F" //116

       
        /// EscalationCollaborators node.
    
        
        public static   EscalationCollaborators  ="24460E71-A3FA-43A1-9095-2FFEDB843D8F" //146
        
      
            
        public static   RetryCount  ="3962F07E-8225-4942-872E-499CA9F22EC8" //201
        
       
        /// 
    
        
        public static   RetryTimeUnits  ="936B3ADB-BD73-44EF-A7E0-ED38CB6977AB" //202
        
       
        /// 
    
        
        public static   RetryTimeAmount  ="93A9ACF7-03C0-47EA-B022-C7EF99D278D0" //203

       
        /// 
    
        
        public static   AfterRetry  ="B09D96A5-F106-4216-A0D9-3944FEEAB577" //211
        
        public static   IpTemplateName  ="4882BE30-3716-4933-BB42-CC1E6EBCCEB8" //220
        
        public static   IpFormLocation  ="40D5CD20-7E59-4F06-9CF8-05650A989E8B" //221
        
        public static   PacketApproved  ="9AD9554F-58B5-47FE-AD3A-0FB7E0720BD4" //226
        
        public static   ContentTypeRequiredInPacket  ="B2EA1C30-BC85-47AA-AE6F-FE2838B38F53" //227
        
        public static   RenderToPDF  ="D9117F8C-1E28-4A0C-9CF1-0C48A0E73791" //232
        
        public static   RenderingTemplate  ="B73973C8-249E-4ABD-83EA-290E23788995" //233
        
        public static   EffectiveDateOption  ="DA21A529-943B-4D5F-8D14-F6CD4C82E75F" //242
        
        public static   EffectiveStatus  ="EFB53F89-43BB-434D-8C71-7A388EC05B52" //243
        
        public static   EffectiveDateUser  ="F0B4687A-F6E0-4442-8992-A8BDBB2A1146" //244
        
        public static   PublishToMajorVersion  ="70022EE3-13E6-4922-9139-0E045F42C597" //245
        
        public static   NotifyOnRouteCompletion  ="D1E63F1E-669B-4ED7-BDAD-4520943AE129" //265
        
        public static   NotifyOnPacketPause  ="54DC3CEC-52C1-4533-BC9C-6DFA4A5202F1" //266
        
        public static   NotifyOnStepPause  ="BAE63B8F-858C-4951-91BA-83C594DD85FE" //267
        
        public static   NotifyAllRecipients  ="348A709E-4A29-4FB5-A969-65391F2D58BF" //268
        
        public static   IncludeDocuments  ="13EA65FD-B2F2-4A2E-B746-3B48348F9ECA" //301
        
        public static   StepDueDefaultFolder  ="9239078C-E6E4-4F43-A1AB-AFD4C6BD5B75" //304
        
        public static   StepDueDefaultUnits  ="1B0F2606-56F0-4166-89CC-35F401B88C62" //305
        
        public static   StepDueDefaultAmount  ="EBE1D7BC-2E77-44FB-B533-13054610DDEF" //306
        
        public static   VersionRuleOnSuccess  ="CABFE2B6-F659-4E17-8EC8-987FBA71DB65" //246
        
        public static   VersionRuleOnFailure  ="2BEACB37-F7F0-41FF-9640-61A9C4C4E960" //350
        
        public static   PRIntervalUnits  ="FD2554ED-34BC-40F5-BDF4-BDAD577861BF" //312
        
        public static   PRIntervalAmount  ="82B81363-B4DF-4822-B40F-C82F9A92A403" //313
        
        public static   PRZoneUnits  ="9F350DA6-9897-4C41-B527-AE561F1BBB72" //315
        
        public static   PRZoneAmount  ="F41160C2-F92D-429D-8ABE-1C88D34F2E2C" //316
        
        public static   EffectiveDocumentPeriodUnits  ="F21E1BAA-54C6-4709-ABAF-38F627BD66E9" //318
        
        public static   EffectiveDocumentPeriodAmount  ="8A1C7D9B-9FF8-4C6A-B61F-0F3CDF97E0D4" //319
        
        public static   SetPreviousVersionLifecycleStatus  ="7C2A6AFC-DC53-43DF-BA6B-F82BA5CEC739" //320
        
        public static   ContentIncludeInWorkspace  ="59CFEEA1-706C-49AD-83F6-79E30770248C" //275
        
        public static   DefaultManualWorkflowName  ="FAD765EB-9698-4607-8651-2785040D31BB" //351
        
        public static   DefaultWorkflowInstructions  ="FC5A386F-253F-49F3-8120-600CCC48E4B9" //352
        
        public static   TaskCompletionMode  ="0E3A849D-8AE3-4701-9F5F-CB39149FB305" //355
        
        public static   StepTaskCompletionMode  ="E9AC6A6A-7074-4E0A-90F3-BFB4B8C94B56" //356
        
        public static   RouteWorkflowTaskCompletionText  ="DF7E145B-4778-4F80-8B21-046F2DF33E1D" //357
        
        public static   StepWorkflowTaskCompletionText  ="C73D2711-48AC-4100-9425-004DAD013D9E" //358    

        public static   RequiredTaskAcceptanceNumber  ="0A374387-EA35-4509-B53F-2205BCFAF816" //Not in 3.0         

       
        /// Launch Date Field
    
        public static   LaunchDateField  ="2D6D00DD-00AD-4EF2-BC1F-874859799257"

       
        /// Launch Date Operator
    
        public static   LaunchDateOperator  ="4B657BDF-B65B-40E4-8A0A-F24D9F047BE3"

       
        /// Launch Date Amount
    
        public static   LaunchDateAmount  ="ECF2F8E0-C284-44B9-906B-CDE4B975E688"

       
        /// Launch Date Unit
    
        public static   LaunchDateUnit  ="C25A640B-F9D0-455F-BD11-5DAE962A0646"

       
        /// Notify Before Amount
    
        public static   NotifyBeforeAmount  ="D4855B81-68CE-4972-A265-453A1AF68F41"

       
        /// Notify Before Unit
    
        public static   NotifyBeforeUnit  ="2EC9E8F1-5C74-4BB6-85CC-6F82DDB99EC6"

       
        /// Notify Before Recipients
    
        public static   NotifyBeforeRecipients  ="52B0117A-3ED5-4530-AF08-ECF6F51BFF78"

       
        /// Allow Multiple Web Forms
    
        public static   AllowMultipleWebForms  ="8A5CD6E2-04B0-4011-8EC3-436308FE5519"        
    
    }
export enum RouteType {
        Training = 0,
        Standard = 1,
        Periodic_Review = 2,
    }

export enum StatusChangeRule
    {
       // [Description("Root Only")]
        RootOnly,
      //  [Description("Implicit")]
        Implicit,
     //   [Description("Explicit")]
        Explicit
    }
