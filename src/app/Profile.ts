export class Profile{

  pid: number;
  name: string;
  title: string;
  about: string;
  location: string;
  phoneNo: number;
  emailId: string;

  constructor(name: string, title: string, about: string, location: string, phoneNo: number, emailId: string) {
    this.name = name;
    this.title = title;
    this.about = about;
    this.location = location;
    this.phoneNo = phoneNo;
    this.emailId = emailId;
  }

}
