export class TestData {
  private _hostname :string;  
  private _dataObject: {  
  };
  
  public get hostname():string {
    return this._hostname;
  }
  
  private ToanObject = {
  'source': 'spLibrary',
  'action': 'initiate',
  'docId': '{301d5212-0700-448f-8fe8-72a40977c577}',
  'referrer': 'aHR0cDovL2ZwLXRkdW9uZzIyLXZtOjIzNDUvQ2xpbmljYWwvRm9ybXMvQnklMjBTdHVkeS5hc3B40',
  'type': 'standard',
  'loginname': 'FP\\fpadmin',
  'DocIds':'',
  'returnUrl':'http://fp-tduong22-vm:2345'
  }

  private ChiLinhObject = {
  'source': 'spLibrary',
  'action': 'initiate',
  'docId': '{82fa1b67-88d9-415e-ae2b-fb29d729ec53}',
  //'{b11fd201-0655-4de1-943e-3a4bca5e92ea}',
  'referrer': 'aHR0cDovL2xwaGFtMjEtdm06MjM0NS9DbGluaWNhbC9Gb3Jtcy9CeSUyMFN0dWR5LmFzcHg1',
  'type': 'standard',
  'loginname': 'i:0#.w|fp\\user01',
   'DocIds':'',
   'returnUrl':'http://linhpham21-vm:2345'
  }

   get DataObject():Object {
     if (this._hostname == "fp-tduong22-vm")
    {  
      localStorage.setItem('DocIds', this.ToanObject.DocIds);
      return this.ToanObject;
    }
    else {

      return this.ChiLinhObject;
    }
  }
  
  constructor(UrlApi:string)
  {
    this._hostname = this.extractDomain(UrlApi);   
  }
  
  /*set hostname(shostname:string){
      this._hostname = shostname;
  }*/

  extractDomain(url:string) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}
     
}