
$(document).ready(function () {
    
    $.getJSON("https://hivelab.org/static/students.json", function (grads_elmts) {
        
        for (var i=0; i < grads_elmts.length; i++) {
            var rowid;
            var Total;
            rowid = $('<tr/>');
            rowid.append("<td>" + grads_elmts[i].Name + "</td>");
            rowid.append("<td>" + grads_elmts[i].GPA + "</td>");
            rowid.append("<td>" + grads_elmts[i].GRE_V + "</td>");
            rowid.append("<td>" + grads_elmts[i].GRE_Q + "</td>");
            rowid.append("<td>" + grads_elmts[i].Essay + "</td>");
            rowid.append("<td>" + grads_elmts[i].Recom + "</td>");
            $('#grad_data').append(rowid);
        }
    });
});