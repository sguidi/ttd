(function () {
  'use strict';

  angular.module('ttdDemo')
    .factory('TableDataAccessService', TableDataAccessService);

  function TableDataAccessService() {

    var service = {
      getData: getData,
      getQueryObject: getQueryObject
    };

    return service;

    function getData(controllerVM, EntityService, firstParentEntity, secondParentEntity, filterCallback) {
      var tableData = controllerVM.tableData;
      tableData.isLoading = true;
      tableData.loadError = null;
      var queryObject = getQueryObject(tableData.tableState);
      EntityService.query(queryObject, {}, firstParentEntity, secondParentEntity).then(function (response) {
        if (typeof filterCallback === 'function') {
          controllerVM.serverItems = filterCallback(response.data);
        } else {
          controllerVM.serverItems = response.data;
        }
        var quantity = response.headers('Content-Range');
        quantity = (quantity != null && quantity.indexOf('/') >= 0) ? quantity.split('/')[1] : '0';
        tableData.tableState.pagination.totalItemCount = parseInt(quantity);
        tableData.tableState.pagination.numberOfPages = parseInt(tableData.tableState.pagination.totalItemCount / queryObject.count) + ((tableData.tableState.pagination.totalItemCount % queryObject.count) !== 0 ? 1 : 0);
        tableData.isLoading = false;
      }, function (err) {
        tableData.loadError = err;
        tableData.isLoading = false;
      });
    }

    function getQueryObject(tableState) {
      var queryObject = {
        start: 0,
        count: 10
      };
      if (tableState !== undefined) {
        // The index of item in the data
        queryObject.start = tableState.pagination.start || 0;
        // Number of entries to be retrieved
        queryObject.count = tableState.pagination.number || 10;

        if (tableState.search.predicateObject !== undefined) {
          var filters = tableState.search.predicateObject;
          Object.keys(filters).forEach(function (k) {
            if (filters[k] !== '') {
              if (k === '$') {
                queryObject.q = filters[k];
              } else {
                if (_.isDate(filters[k])) {
                  queryObject[k] = moment(filters[k]).format('YYYY-MM-DD');
                } else {
                  queryObject[k] = filters[k];
                }
              }
            }
          });
        }
        if (tableState.sort.predicate != null) {
          queryObject.sort = (tableState.sort.reverse ? '' : '-') + tableState.sort.predicate;
        }
      }
      return queryObject;
    }
  }
})();
