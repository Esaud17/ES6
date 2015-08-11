var miFuncion = (num) => num + num;  

(function() {
    if(true) {
        let x = "hola mundo";
    }
    console.log(x); 
    //Da error, porque "x" ha sido definida dentro del "if"
})();