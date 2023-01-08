var i = 91;
if(i>90){
    document.write("good")
}
else if(i>50){
    document.write("average")
}
else{
    document.write("fail")
}
//////for//////

for(i=1;i<=5;i++){
    document.write("hello <br>")
}
///while/////
var i=0;
while(i<=10){
    document.write(i + "<br>");
    i++;
}
//////do -while////
var a=1;
do{
    document.write(a + "<br>");
    a=a+2;
}
while(a<=50);
////switch///
var marks =94;
switch(true){
    case marks>90:result = "a grade";
    break;
    case marks>70:result = "b grade";
    break;
    case marks>50:result = "c grade";
    break;
    case marks>35:result = "d grade";
    break;
    default : result = "fail";

}
{
    document.write(result);
}