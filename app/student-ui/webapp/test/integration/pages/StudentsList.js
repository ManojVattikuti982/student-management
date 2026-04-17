sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'studentui',
            componentId: 'StudentsList',
            contextPath: '/Students'
        },
        CustomPageDefinitions
    );
});