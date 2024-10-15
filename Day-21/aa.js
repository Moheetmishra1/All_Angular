const { log } = require("@angular-devkit/build-angular/src/builders/ssr-dev-server");

var merge = function(intervals) {
    let res=[]
    for(let i of intervals){
        console.log(i);
        
        for(let j=i[0];j<=i[1];++j){
            
            res.push(j);
        }
    }

    let obj= new Set(res)
    res= Array.from(obj);

    res= res.map((ele,index)=>{
        
    })


     return res

};



merge([[1,3],[2,6],[8,10],[15,18]]);