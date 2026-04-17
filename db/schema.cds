namespace sms;

entity Students {
  key ID      : String;
      name    : String;
      email   : String;
      age     : Integer;
}

entity Courses {
  key ID      : String;
      title   : String;
      credits : Integer;
}

entity Enrollments {
  key ID        : String;
      student   : Association to Students;
      course    : Association to Courses;
      date      : Date;
}