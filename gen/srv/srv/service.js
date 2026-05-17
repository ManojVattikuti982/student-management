const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

  this.on('getCourseEnrollmentCount', async () => {

    const db = await cds.connect.to('db');

    return await db.run(
      SELECT.from('sms.Enrollments as e')
        .join('sms.Courses as c')
        .on('e.course_ID = c.ID')
        .columns([
          'c.ID as courseID',
          'c.title as courseName',
          'count(e.ID) as count'
        ])
        .groupBy('c.ID', 'c.title')
    );

  });

});