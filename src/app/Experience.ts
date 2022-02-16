export class Experience{
    expId: number;
    companyName: string;
    role: string;
    empType: string;
    startDate: Date;
    stopDate: Date;
    description: string;

   constructor(companyName: string, role: string, empType: string, startDate: Date,
               stopDate: Date, description: string) {

     this.companyName = companyName;
     this.role = role;
     this.empType = empType;
     this.startDate = startDate;
     this.stopDate = stopDate;
     this.description = description;
   }

}
