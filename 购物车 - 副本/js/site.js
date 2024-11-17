//自定义的js函数


//计算每行商品的小计
//参数row：当前商品所在的数据行tr元素
function calculateSubTotal(row) {
    //商品的价格
    var priceStr = row.find(".price").text();
    //console.log(priceStr);
    var price = parseFloat(priceStr);

    //商品的数量
    var numberStr = row.find(".numberInput").val();
    var number = parseInt(numberStr);

    //计算商品的小计：价格*数量
    //toFixed(2)：保留2位小数
    var subTotal = (price * number).toFixed(2);
    
    //显示小计
    row.find(".subTotal").text(subTotal);
}


//计算总计：全部商品小计的累加
function calculateTotal() {
    var total = 0;
    var numberTotal=0;

    //对每个商品行的小计进行累加
    $("table tbody tr").each(function() {
        if($(this).find(":checkbox").is(":checked")){
            var subTotalStr = $(this).find(".subTotal").text();
            total = total + parseFloat(subTotalStr);
            var numberStr=$(this).find(".numberInput").val(); 
            var number=parseInt(numberStr);
            numberTotal=numberTotal+number;
        }
    });

    $(".total").text(total.toFixed(2));
    $(".numberTotal").text(numberTotal);
}


//设置“-”的状态
//当“数量”文本框的值<=1时，数量不能减1（点击“-”无反应，并清除文本“-”)
function setMinusLinkState(row) {

    var minus = row.find(".minus");
    var numberStr = row.find(".numberInput").val();
    var number = parseInt(numberStr);
    
    if(number <=1) {
        minus.addClass("disableLink");
        minus.text("");
    }
    else {
        minus.removeClass("disableLink");
        minus.text("-");
    }
}