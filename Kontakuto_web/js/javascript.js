var Contact = function(id, name, phone, email){
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
}
function check(element, limit){
    var a = document.getElementById(element).value;
    console.log(a)
    if (a.length > limit){
        document.getElementById("message_"+element).innerHTML ="<span style = \"color: red;\">Maximum "+element+" length is " + limit + " </span>";
        return false;
        }else{
        document.getElementById("message_"+element).innerHTML ="";
        return true;
        }
}
var kontakuto = angular.module('kontakuto',[]);
kontakuto.controller('showing_contacts', function ($scope) {
    $scope.contacts = [new Contact(0,"Oscar","666666666","oscar@gmail.com"),
            new Contact(1,"Jessi","666666667","jessi@gmail.com"), 
            new Contact(2,"Isaac","666666668","isaac@gmail.com")];
    $scope.show_details = function(pos){
        var contacts = document.getElementsByClassName('contact_details');
        for (var i = 0; i < contacts.length; i++){
            $scope.hide_details(i);
        }
        contacts[pos].style.display='block';
    };
    $scope.hide_details = function(pos){
        contact = document.getElementsByClassName('contact_details')
        [pos]
        contact.style.display='none';
    }
});