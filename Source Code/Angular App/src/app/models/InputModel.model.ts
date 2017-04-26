export class OutputBase{
   public data:any;
   public comment:string;
}

export abstract class InputBase {
   public iD:string;
   public company:string;
   public productCode:string;
   public hDPrice:number;
   public netPrice:number;
   public area:number;
   public tartget:string;
   public date:Date;

   //data from service
   public data:any;

   abstract process():OutputBase 
   public attachData(dataFromService:any){
        this.data = dataFromService;
   }
}

//feature 2
export class InputPriceCompare extends InputBase {
 
    process():OutputBase {
        // how to make data for graph, comment and alike
           return new OutputBase();
    }
}


//feature 3    
export class InputTrend5Year extends InputBase {
    
     process():OutputBase {
        // how to make data for graph, comment and alike
           return new OutputBase();
    }

}
