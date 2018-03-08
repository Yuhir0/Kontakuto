function check(element, limit){
    var a = document.getElementById(element).value;
    console.log(a)
    if (a.length > limit){
        document.getElementById("message_"+element).innerHTML ="<span style = \"color: red;\">Maximum "+element+" length is " + limit + " </span>";
        var i = i +1;
        return false;
    }else if(a.length == 0) {
        document.getElementById("message_"+element).innerHTML ="";
        return false;
    }
    return true;
}
function final_check(){
    var a = check('name', 20);
    var b = check('lastname', 20);
    var c = check('phone', 15);
    var d = check('email', 40);
    var p1 = check('facebook', 40);
    var p2 = check('twitter', 40);
    var p3 = check('instagram', 40);
    if (a || b || c || d || p1 || p2 || p3){
        document.getElementById("error").innerHTML = "";

        save()
    }else{
        document.getElementById("error").innerHTML = "<span style = 'color: red;'> Cant save the data, check the fields.</span>";
    }

}
