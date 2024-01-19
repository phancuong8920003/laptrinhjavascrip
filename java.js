 //ngày 19/1/2024
 //bai1
 var y =["Thứ hai" , "Thứ ba" ,"Thứ tư","Thứ năm" ,"Thứ sáu","Thứ bảy","Chủ nhật"];
 var x = 5;
 console.log(y[x-2]);
 switch(x){
    case 2:
        console.log("Thứ hai");
        break;
    case 3:
        console.log("Thứ ba");
        break;
    case 4:
        console.log("Thứ tư");
        break;
    case 5:
        console.log("Thứ năm");
        break;
    case 6:
        console.log("Thứ sáu");
        break;
    case 7:
        console.log("Thứ bảy");
        break;
    case 8:
        console.log("Chủ nhật");
        break;
 }
 //bai 2 
 function array1(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n>1;
}

var numberToCheck = 10;
if (array1(numberToCheck)) {
    console.log(numberToCheck + ' là số nguyên tố.');
} else {
    console.log(numberToCheck + ' không phải là số nguyên tố.');
}
 //bai3
 var a =[[1,1,1],[1,0,0],[0,1,0],[0,0,1]];
 for(var i=0 ; i<4 ; i++){
    for(j=0;j<3;j++){
        document.write(a[i][j]+"");
    }
    document.write("<br/>");
 }