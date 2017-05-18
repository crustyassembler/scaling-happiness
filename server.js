var http = require('http'); var express = require('express'); var sqlite = require('sqlite'); var moustache = require('mustache'); var fs = require('fs');

var app = express();

sqlite.open('db.sqlite').then(function(db) {

  app.get('/courses', function(req, res) {
    db.all("SELECT * FROM Courses").then(function(rows) {
      var file = fs.readFileSync('templates/courses.mst', 'utf-8');
      var html = moustache.to_html(file, {courses: rows});
      return res.send(html);
    });
  });

  app.get('/courses/search', function(req, res) {
    db.all('SELECT * FROM Courses WHERE name LIKE \'%\'||$search||\'%\'', {$search: req.query.q}).then(function(rows) {
      var file = fs.readFileSync('templates/courses.mst', 'utf-8');
      var html = moustache.to_html(file, {courses: rows});
      return res.send(html);
    });
  });

  app.get('/course/:course_id', function(req, res) {
    db.get("SELECT * FROM Courses WHERE id=$id", {$id: req.params.course_id}).then(function(row) {
      var file = fs.readFileSync('templates/course.mst', 'utf-8');
      var html = moustache.to_html(file, {course: row});
      return res.send(html);
    });
  });

}).catch(function(err) {
  console.error(err.stack);
});

app.use(function(req, res, next) {
  console.log('resource requested: ' + req.originalUrl);
  next();
});

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
console.log("Listening on http:\/\/127.0.0.1:8080");
server.listen('8080', '127.0.0.1');
