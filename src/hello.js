exports.handler = function(event, context, callback) {

  console.log("Hello World");
  console.log(event);

  callback(null, {
    statusCode: 200,
    body: "Hello, Chennai-js!"
  });
}
