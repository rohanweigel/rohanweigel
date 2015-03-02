var body = d3.select("body");
var p = body.append("p");
p.text("New paragraph!");

var dataset = [ 5, 10, 15, 20, 25 ];

d3.csv("food.csv", function (data) {
    console.log(data);
});