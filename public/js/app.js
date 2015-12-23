var belowHeader = document.getElementById('belowHeader');

window.onload = function() {
//this waits for entire HTML page to load and then
//activates javascript
$.getJSON('./api/get_the_app.json', function(data)  {//normally we would probably point
//to the url unless we have local json data which we have here.  So 2
//arguments here: 1)src of json data, and 2) the callback function(what
//you want to do)
  var dataChild = data.data.children;
  for(i=0; i < dataChild.length; i++)  {
    var image = dataChild[i].data.thumbnail;
    var title = dataChild[i].data.title;
    var author = dataChild[i].data.author;
    var age = dataChild[i].data.created;
    var views = dataChild[i].data.score;

    var postBx = $('<div>');
      postBx.addClass('postbox').attr('id', 'first');
      $("#allposts").append(postBx);

    var pic = $('<img>', {src: image});
      pic.addClass('image');
      postBx.append(pic);

    var head = $('<div>');
      head.addClass('heading');
      postBx.append(head);

    var postTitle = $('<h2>');
      postTitle
        .addClass('titles');
      postTitle.text(title);
      $(postBx).append(postTitle);

    var authDateViews = $('<div>');
      authDateViews.addClass('authdateview');
      postBx.append(authDateViews);

    var auth = $('<span>');
      auth.addClass('authors');
      auth.text(author);
      authDateViews.append(auth);

    var date = $('<span>');
      date.addClass('date');
      date.text(age);
      authDateViews.append(date);

    var viewed = $('<span>');
      viewed.addClass('view');
      date.text(views + " views");
      authDateViews.append(viewed);

    var text = $('<div>');
      text.addClass('text holder');
      postBx.append(text);

    var para = $('<p>');
      para.addClass('paragraph');
      text.append(para);


  }
  // var title = data;
  // $(belowHeader).append(title);
  // var image = document.createElement('img');
  // image.id= 'image';
  // image.src= dataChild[0].data.thumbnail;
  // $(belowHeader).append(image);
console.log(data);


});
};