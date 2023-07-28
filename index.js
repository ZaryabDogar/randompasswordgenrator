class password{
    
    genrate_sspassword(num){
        let str='abcdf?\ghijklmVWXY_-+>Z12nopqrsx#$%^yzABCDEF][{}GHIJKL$~!``@&*()MNOPQR;STU3456tuvw7890,./|"'
        this.num=num;
        let a=document.getElementById("input")
        let p=""
        for(let i=0;i<=num;i++){
            var char = Math.floor(Math.random()
            * str.length);
            p+=str.charAt(char)
            
        }
        console.log(p);
    a.value=p
}
    genrate_spassword(num){
        let str='abefg123zABWXC45hijklopqQRSDEFGHIJKLMNrstuvwcdmnxyOPTUVYZ67890'
        this.num=num;
        let a=document.getElementById("input")
        let p=""
        for(let i=0;i<=num;i++){
            var char = Math.floor(Math.random()
            * str.length );
            p+=str.charAt(char)
            
        }
        console.log(p);
    a.value=p
}
    genrate_wpassword(num){
        let str='abcdefghijklmnopqrstuvwxyz1234567890'
        this.num=num;
        let a=document.getElementById("input")
        let p=""
        for(let i=0;i<=num;i++){
            var char = Math.floor(Math.random()
            * str.length );
            p+=str.charAt(char)
            
        }
        console.log(p);
    a.value=p
}
    genrate_fpassword(){
        let arr=["password","I Forgot My Password ","ImTooGood4This ","KissMyPassword","ptaa nai ki password aa","ptaa nai ywr hun ki krna to aedaa","Hahaha","nothing","changeme"]
        
        let a=document.getElementById("input")
        var p=""
        
            var char = Math.floor(Math.random()
            *arr.length);
            console.log(arr[char]);
            p+=arr[char]
            
    
    a.value=p
}

}



let a=new password()
let ssp=document.getElementById("ss");
let sp=document.getElementById("s");
let wp=document.getElementById("w");
let fp=document.getElementById("f");

document.getElementById("get").addEventListener("click",function get() {
    if(ssp.checked){
        
        a.genrate_sspassword(20)
        document.getElementById("output").classList.add("hide")
    }
    else
    if(sp.checked){
        
        a.genrate_spassword(15)
        document.getElementById("output").classList.add("hide")
    }
    else
    if(wp.checked){

        a.genrate_wpassword(10)
        document.getElementById("output").classList.add("hide")
    }
    else
    if(fp.checked){
        
        a.genrate_fpassword(10)
        document.getElementById("output").classList.add("hide")
    }

        

    
})


    
    
    document.getElementById("gett").addEventListener("click",
    function copy() {
        let a=document.getElementById("input")
        a.select()
        document.execCommand("copy")
        console.log(a.value)
        document.getElementById("output").innerHTML=a.value;
        navigator.clipboard.writeText(a.value)
        if(a.value===""){
            
        }else{
            
            
            document.getElementById("output").classList.remove("hide")
        }
        setTimeout(() => {
            document.getElementById("output").classList.add("hide")
            
        }, 5000);
        
    })





// var el_down = document.getElementById("geeks");

/* Function to generate combination of password */
// function generateP() {
//     var pass = '';
//     var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
//             'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
//     for (let i = 1; i <= 8; i++) {
//         var char = Math.floor(Math.random()
//                     * str.length + 1);
          
//         pass += str.charAt(char)
//     }
      
//     return pass;
// }
