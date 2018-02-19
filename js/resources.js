(function(){

  // fetching  resources.json
  fetch('/resources/resources.json')
  .then(response => response.json())
  .then(json => {
    var topics = Object.keys(json);
    
    // creating sublist for each group
    topics.forEach(function(elem){
      var group = $('<ul class="group"></ul>')

      json[elem].forEach(function(eachLink){
        group.append('<li><a href="'+eachLink+'">'+ eachLink +'</a></li>')
      })

      $('#list')
        .append('<li><h3>'+ elem +'</h3></li>')
        .append('<li>')
        .append(group);

    })

  });

})();