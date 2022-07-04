
        let i = 0;
        var arr=new Array();
        function load() 
        {
            arr=new Array("hinh0.jpg","hinh1.jpg","hinh2.jpg");
        }
        function back() 
        {
            if(i>0){
                i--;
            }
            else {
                i=2;
            }
            document.getElementById("hinh").src="./image/"+arr[i];
        }
        function next() 
        {
          if(i<2){
            i++;
        }
        else{
            i=0;
        }
          document.getElementById("hinh").src = './image/hinh' + i + '.jpg'
        }
    