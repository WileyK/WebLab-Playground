

//problem 2


<input type="hidden" value="'+image_url+'" name="webcampics[]" id="webcampics">
<input type="hidden" value="'+image_url+'" name="webcampics[]" id="webcampics">
<input type="hidden" value="'+image_url+'" name="webcampics[]" id="webcampics">
<input type="hidden" value="'+image_url+'" name="webcampics[]" id="webcampics">


  var elem = document.getElementById("webcampics");
  var names = [];
  for (var i = 0; i < elem.length; ++ i) {
     names += elem[i]+'|';
  }
  var webcamval = names;
  

  
  
  
  
  
  var elem = document.getElementsByTagName("input");
  var names = [];
  for (var i = 0; i < elem.length; ++i) {
    if (typeof elem[i].attributes.id !== "undefined") {
      if (elem[i].attributes.id.value == "webcampics") {
        names.push(elem[i].value);
      }
    }
  }
  var webcamval = names;