  //  1、浏览器环境、规格
        /* // a、window根对象，是全局对象代表浏览器窗口，提供了控制它的方法 
        function sayHi(){
            alert("hello");
        }
        window.sayHi();//全局函数是全局对象的方法 
        alert(window.innerHeight);
        console.log(window.innerHeight);*/
        /* //b.DOM；document对象是页面的主要入口点
        document.body.style.background="red";//需要移到body里面
        setTimeout(()=>document.body.style.background='red',1000);//全页面可用 */

        /* //c.BOM
        alert(location.href);//http://127.0.0.1:5500/demo.html
        if (confirm("Go to Wikipedia?")) {
            location.href = "https://wikipedia.org"; // 将浏览器重定向到另一个 URL
        } */
        
        //2.DOM数
        //3.DOM遍历
        //alert(document.body);//[object HTMLBodyElement]

        // alert(document.documentElement.parentNode);//[object HTMLDocument](返回父亲节点)
        // alert(document.document