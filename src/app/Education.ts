export class  Education{
  eduId: number;
  eduName: string;
  degree: string;
  field: string;
  eduStart: Date;
  eduStop: Date;
  grade: string;

  constructor(eduName: string, degree: string, field: string, eduStart: Date,
              eduStop: Date, grade: string) {
    this.eduName = eduName;
    this.degree = degree;
    this.field = field;
    this.eduStart = eduStart;
    this.eduStop = eduStop;
    this.grade = grade;
  }
}
