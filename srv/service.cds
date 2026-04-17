using sms from '../db/schema';

annotate StudentService with @requires: 'authenticated-user';

service StudentService {
  entity Students     as projection on sms.Students;
  entity Courses      as projection on sms.Courses;
  entity Enrollments  as projection on sms.Enrollments;
}