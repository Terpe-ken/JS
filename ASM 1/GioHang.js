var giohang = [];

function addcart(x){
    var pro = x.parentNode;
    var hinh = pro.children[0].src;
    var ten = pro.children[1].innerText;
    var gia = pro.children[2].children[0].innerText;
    var soluong = 1;
    var flag = 1;
    
    for(var i =0; i<giohang.length;i++){
        var sp = giohang[i][1];
        if(ten == sp){
            var sl_giohang = giohang[i][3];
            soluong += sl_giohang;
            giohang[i][3] = soluong;
            flag = 0;
            break;
        }
    }

    if(flag ==1){
        var item = [hinh,ten,gia,soluong];
        giohang.push(item);
        console.log(giohang)
    }

    showmycart();

    function showmycart(){
        var thongtin = "";
        var tong = 0;
        for(var i=0;i<giohang.length;i++){
            thongtin += 
            "<tr>" + 
                "<td>" + (i + 1) + "</td>" +
                "<td> <img src =' " + giohang[i][0] + "' </td>" +
                "<td>" + giohang[i][1] + "</td>" +
                "<td>" + giohang[i][2] + "</td>" +
                "<td>" + giohang[i][3] + "</td>" +
                "<td>" + giohang[i][2] * giohang[i][3] + "</td>" +
            "</tr>";
            tt = giohang[i][2] * giohang[i][3]
            tong += tt;    
        }
        thongtin +=
        '<tr>' +
        '<td colspan="5" style = "font-size: 30px">THÀNH TIỀN</td>' +
        '<td style = "font-size: 30px">'+ tong+ '</td>' +
'</tr>'
document.getElementById("mycart").innerHTML = thongtin
}

}

function h2(){
    var gh = document.getElementById("cart");
    if(gh.style.display == "none" ){
        gh.style.display = "";
    }else{
        gh.style.display = "none";
    }   
}