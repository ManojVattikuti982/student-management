sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"studentui/test/integration/pages/StudentsList",
	"studentui/test/integration/pages/StudentsObjectPage"
], function (JourneyRunner, StudentsList, StudentsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('studentui') + '/test/flp.html#app-preview',
        pages: {
			onTheStudentsList: StudentsList,
			onTheStudentsObjectPage: StudentsObjectPage
        },
        async: true
    });

    return runner;
});

