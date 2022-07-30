class Tab{
    constructor(id){
      //获取元素
      this.main=document.querySelector(id);//根据传过来的id获取最大盒子tab
      this.lis=this.main.querySelectorAll('li');
      this.sections=this.main.querySelectorAll('section');
      this.init();
    }
    init(){
      //init初始化操作让相关的元素绑定事件
      for(let i=0;i<this.lis.length;i++){
        // this.lis[i].index=i;
        this.lis[i].onclick=function(){
            console.log(i);
        }
      }
    }
  //1.切换功能
  toggleTab(){}
  //2.添加功能
  addTab(){}
  //3.删除功能
  remove(){}
  //4.修改功能
  editTab(){}
  }
  new Tab('#tab');