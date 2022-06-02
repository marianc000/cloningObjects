class A  { 
    a= 1; 
    b= 'qwerty';
    c= true;
    d= null;
    e= undefined;
 };

 class B extends A { 
    f= [1,2,3];
    g= {f1:'asdfg'};
    h= new Date();
    i= new Set([1, 2, 3]);
    j= /abc/;
 };

const o1=new B();
const o2=JSON.parse(JSON.stringify(o1));
const o3=structuredClone(o1) ;
console.log(o1,o2,o3);
console.log(o1 instanceof B,o2  instanceof B,o3 instanceof B);
//

const o4={};
o4.child={parent:o4};

console.log(structuredClone(o4));
try {
    console.log(JSON.parse(JSON.stringify(o4)));
} catch (ex){
     console.error(ex);
}
 //
const o5={
    a:1,
    b:()=>'zxcv'
};
 
const o6=JSON.parse(JSON.stringify(o5));
console.log(o5,o6);
try {
const o6=structuredClone(o5) ;
} catch (ex){
   console.error(ex);
}
 


 

