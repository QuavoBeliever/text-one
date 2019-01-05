




function getMoney()
{    
    var pro = document.getElementById("province");
    var index=pro.selectedIndex;
    for(var i=0;i<4;i++){
        document.getElementById('cc').innerHTML='<p style="color: red;width: 50px;height: 25px;margin: 5px -10px 0px 0px;padding: 0px 0px 0px 0px;font-size: 15px;">'+'¥'+pro.options[index].value+'</p>';
    }
}