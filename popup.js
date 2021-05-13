//this will run in background //

console.log('POPUP.JS LOADED');

document.getElementById("droptime").onclick=function(){

    loadScript("content.js", function(){
       console.log('loaded js script');
    });

}

function loadScript(url, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";
    script.setAttribute

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}