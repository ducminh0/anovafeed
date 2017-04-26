import * as Constant from '../consts/globals'

export class SelectRouteData {
  public selectedRoute: number;
  public wfTemplates: any;
  public wfTemplatesInfo: any;
  public wfRoute: any;
  public routeName: string;

  constructor() {
    this.wfTemplates = new Array<any>();
    this.selectedRoute = -1;
    this.wfTemplatesInfo = new Object();
    this.wfRoute = new Object();
  }
}

export class SelecDocumentData {
  public selectDocuments;
  public selectedDocuments;

  constructor() {
    this.selectDocuments = new Array<Object>();
    this.selectedDocuments = new Array<Object>();
  }
}

export class SelecParticipantData {
  public selectParticipants;
  public selectedParticipants;
  public participantsAtStep; // array
  public selectedStep;
  public notSkippedSteps;
  public trainingRecords;

  constructor() {
    this.selectParticipants = new Array<any>();
    this.selectedParticipants = new Array<any>();
    this.participantsAtStep = new Array<any>();
    this.selectedStep = 0;
    this.notSkippedSteps = new Array<any>();
    this.trainingRecords = new Array<any>();
  }
}

export class SummaryData {
  public wfInstruction;
}

export enum IndexValidation
{
  NotSet,
  Failed,
  Passed
}
export class NavInfo {
 
    constructor(public currentIndex, public nextIndex, public isValid? : IndexValidation, public errorMessage?:string)
    {
      if (isValid == null)
      {
        this.isValid = IndexValidation.NotSet;
      }

      if (errorMessage ==null)
      {
        errorMessage = "";
      }
    }
}

export enum QualifiedState
{
  Passed,
  FilteredUnqualifiedDocs,
  Duplicate,
  FailedToProceed
}
export class QualifiedInfo {
    public UnqualifiedDocs;
    public DuplicateDocs;
    public FailedToProceedDocs;
    public QualifiedState: QualifiedState;
    public MessageError:string;
    
    constructor() 
    {
   
    }

    public setUnqualifiedDoc(unqualifiedDocs:Array<any>)
    {
        this.UnqualifiedDocs = unqualifiedDocs.slice();
         var docString:string = "";
        unqualifiedDocs.forEach(docUrl=> {
            docString += "  + " + docUrl + "</br>";
        });
        this.QualifiedState = QualifiedState.FilteredUnqualifiedDocs;
        this.MessageError = Constant.REMOVE_UNQUALIFIED_DOCS_STRING +docString;
    }

    public  setDuplicateDoc(duplicateDocs: Array<any>){
        this.DuplicateDocs = duplicateDocs.slice();
        this.QualifiedState = QualifiedState.Duplicate;
        var docString:string= "";
        duplicateDocs.forEach(docUrl=> {
            docString += "  + " + docUrl + "</br>";
        });
        this.MessageError = Constant.DUPLICATE_RULE_STRING + docString;
    }
    public  setFailedToProceed(failedToProceedDocs: Array<any>){
        this.FailedToProceedDocs = failedToProceedDocs.slice();
        var docString:string= "";
        failedToProceedDocs.forEach(docUrl=> {
            docString += "  + " + docUrl + "</br>";
        });
        this.QualifiedState = QualifiedState.FailedToProceed;
        this.MessageError = Constant.FAILED_TO_PROCEED_STRING + docString;
    }

    public  setPassed(){
    this.QualifiedState = QualifiedState.Passed;
    }
}



export class NgTableData {

  public ref:any;
  public rows: Array<any> = [];
  public columns: Array<any> = [
    { title: 'Document Name', name: 'name' },
    {
      title: 'Title',
      name: 'position',
      sort: false
    },
    { title: 'Version', name: 'office', sort: false },
    { title: 'Lifecycle Status.', name: 'ext', sort: false },
    { title: 'Content Type', name: 'startDate' },

  ];
  public dataLoaded: boolean = false;
  public page: number = 1;
  public itemsPerPage: number = 3;
  public maxSize: number = 10;
  public numPages: number = 2;
  public length: number = 0;
  public valueString: string = "";
  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: 'table-none'
  };
  public data: Array<any>;


  constructor(_data: Array<any>, _config: any, _columns: Array<any>, _page: number, _itemsPerPage: number, maxSize: number, numPages: number, ) {
    this.config = _config;
    this.columns = _columns;
    this.data = _data.slice(0);
    this.length = this.data.length;
    this.page = _page;
    this.itemsPerPage = _itemsPerPage;
    this.maxSize = maxSize;
    this.numPages = numPages;
  }


  public ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    let start = 0;
    if(data.length > page.itemsPerPage * (page.page - 1)){
      start = (page.page - 1) * page.itemsPerPage;
    }else{
      start = (page.page - 2) * page.itemsPerPage;
    }    
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;        
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);    
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any, property): any {
    console.log(data);
    this.data = this.data.filter(function (m) {
      return (m[property] != data.row[property]);
    })
    //this.selectedDoc.push(data.row);
    this.length = this.data.length;
    this.onChangeTable(this.config)
    //this.onChangeTable(this.config){}
  }

}
