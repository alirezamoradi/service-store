angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function(mvToastr){
    return {
        notifySuccess: function(msg) {
            mvToastr.success(msg, {timeOut : 1200});
            console.log(msg);
        },
        notifyFailure: function(msg) {
            mvToastr.error(msg, {timeOut : 1200});
            console.log(msg);
        }
    }
})