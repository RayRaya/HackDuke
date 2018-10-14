function clicked() {
    var vt = 'Virginia Tech';
    var gt = 'Georgia Tech';
    var asu = 'Arizona State University';
    var brown = 'Brown University';
    var clemson = 'Clemson University';
    var cornell = 'Cornell University';
    var ncsu = 'North Carolina State University';
    var purdue = 'Purdue University';
    var mich = 'Michigan State University';
    var user = document.getElementById('college');
    if(user.value == vt){
        window.location.href = 'vt.html';
    } 
    else if(user.value==gt){
        window.location.href = 'gt.html';
    } else if(user.value==asu){
        window.location.href = 'asu.html';
    } else if(user.value==brown){
        window.location.href = 'brown.html';
    } else if(user.value==clemson){
        window.location.href = 'clemson.html';
    } else if(user.value==cornell){
        window.location.href = 'cornell.html';
    } else if(user.value==ncsu){
        window.location.href = 'ncsu.html';
    } else if(user.value==purdue){
        window.location.href = 'purdue.html';
    } else if(user.value==mich){
        window.location.href = 'nich.html';
    } else if(!user) {
        window.alert("Please enter the name of your college!");
    }else{
        alert("Since this is just a prototype, our database is limited.")
    }
}