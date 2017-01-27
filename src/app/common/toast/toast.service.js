(function () {
    'use strict';

    angular.module('ttdDemo')
      .factory('ToastService', ToastService);

    function ToastService(appConf, $mdToast) {
      return {
        info : info,
        success : success,
        warning : warning,
        error : error
      };

      /**
      * [String] type - Defaulted to appConf.Toast.Type.Info
      * [String] content - Defaulted to ""
      * [String] title - Defaulted to null
      * [Boolean/String] close - Defaulted to false, can be true for x button or String for label button
      * [String] position - Defaulted to appConf.Positions.Default, see appConf.Positions for options
      */
      function showToast(type, content, title, close, position){
        type = type || appConf.Toast.Type.Info;
        content = content || '';
        title = title || null;
        close = close || false;
        var closeText = (typeof close === 'boolean') ? null : close;
        position = position || appConf.Toast.Positions.Default;

        $mdToast.show({
          controller: 'ToastCtrl',
          controllerAs: 'toastCtrl',
          templateUrl: 'app/common/toast/toast.template.html',
          hideDelay: appConf.Toast.Timeout,
          position: position,
          bindToController: true,
          locals:{
            type: type,
            content: content,
            title: title,
            close: close,
            closeText: closeText
          }
        });
      }

      function info(content, title, close, position){
        showToast(appConf.Toast.Type.Info, content, title, close, position);
      }
      function success(content, title, close, position){
        showToast(appConf.Toast.Type.Success, content, title, close, position);
      }
      function warning(content, title, close, position){
        showToast(appConf.Toast.Type.Warning, content, title, close, position);
      }
      function error(content, title, close, position){
        showToast(appConf.Toast.Type.Error, content, title, close, position);
      }
    }
  })();