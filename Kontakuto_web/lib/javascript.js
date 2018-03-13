var app = angular.module('kontakuto', []);

app.controller('contacts_controller', ['$scope', '$http', function ($scope, $http) {

    // List of contact
    $scope.contacts = [];

    // Contact Object
    $scope.contact = {};

    // Contact Details
    $scope.contact_details = {};

    // Errors Array
    $scope.errors = [];

    // read records
    $scope.listContacts = function () {
        $http.get('php/list.php', {})
            .then(function success(e) {
                $scope.contacts = e.data.contacts;
            }, function error(e) {
                $scope.errors = e.data.errors;
            });
    };
    $scope.listContacts();

    // Add new contact
    $scope.addContact = function () {
        $http.post('php/create.php', {
            contact: $scope.contact
        })
            .then(function success(e) {

                $scope.errors = [];

                $scope.contacts.push(e.data.contact);

                var modal_element = angular.element('#add_new_contact_modal');
                modal_element.modal('hide');

            }, function error(e) {
                $scope.errors = e.data.errors;
            });
    };

    // open edit contact details popup
    $scope.edit = function (index) {
        $scope.contact_details = $scope.contacts[index];
        var modal_element = angular.element('#modal_update_contact');
        modal_element.modal('show');
    };

    // update the contact
    $scope.updateContact = function () {
        $http.post('php/update.php', {
            contact: $scope.contact_details
        })
            .then(function success(e) {
                $scope.listContacts();
            
                $scope.errors = [];

                var modal_element = angular.element('#modal_update_contact');
                modal_element.modal('hide');

            }, function error(e) {
                $scope.errors = e.data.errors;
            });
        
    };

    // delete the contact
    $scope.delete = function (index) {

        var conf = confirm("Do you really want to delete the contact?");

        if (conf == true) {
            $http.post('php/delete.php', {
                contact: $scope.contacts[index]
            })
                .then(function success(e) {

                    $scope.errors = [];

                    //$scope.contacts.splice(index, 1);

                }, function error(e) {
                    $scope.errors = e.data.errors;
                });
        }
    };
    
    $scope.show_details = function(index){
        console.log("hola");
        var contacts = document.getElementsByClassName('contact_details');
        for (var i = 0; i < contacts.length; i++){
            $scope.hide_details(i);
        }
        contacts[index].style.display='block';
    };
    
    $scope.hide_details = function(index){
        contact = document.getElementsByClassName('contact_details')
        [index]
        contact.style.display='none';
    };
}]);