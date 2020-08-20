var xhr = XMLHttpRequest(); // This object is an inbuilt object that JavaScript provides to allow us to consume APIs.

xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://swapi.co/api/");

xhr.send();