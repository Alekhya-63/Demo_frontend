export class Profile{

  pid: number;
  name: string;
  title: string;
  about: string;
  location: string;

  constructor(name: string, title: string, about: string, location: string) {
    this.name = name;
    this.title = title;
    this.about = about;
    this.location = location;
  }
}
