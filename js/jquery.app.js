// Your solution here
$(document).ready(function (){

// GET FUNCTION
  $.ajax({
    url: "http://api.doughnuts.ga/doughnuts/",
    method: "GET",
    success: function (response, status) {
      console.log(response);
      response.forEach(function(elem, index){
        //create the new li
        //append each elem to the list
        var newLi = '<li>' + elem.flavor + '-' + elem.style + '<button class="btn btn-warning">edit</button>' + ' ' + '<button class="btn btn-danger">delete</button>'  + '</li>'
        $('#doughnuts').append(newLi);
      bindEditButton();
      bindDeleteButton();
      })
    },
    error: function (response, status) {
      console.log(response);
    }
  });

// EDIT FUNCTION
// $('.btn.btn-warning').on('click', function(){
//   $("#edit-modal").modal("show");
// });

function bindEditButton(){
  $(".btn.btn-warning").on("click", function(){
  $("#edit-modal").modal("show");
    console.log("edit");
  });
}
// DELETE FUNCTION

function bindDeleteButton(){
  $(".btn.btn-danger").on("click", function(){
    console.log("delete");
    $.ajax({
    url: "http://api.doughnuts.ga/doughnuts/",
    method: "DELETE",
    success: function (response, status) {
      response.forEach(function(elem, index){
        //delete the applicable doughnut from the list
        $('#doughnuts').on('click', function() {
          $(this).parent(newLi).remove();
});
      })
    },
    error: function (response, status) {
    }
  });
  });
}


// PUT FUNCTION
  // $.ajax({
  //   url: "http://api.doughnuts.ga/doughnuts/1",
  //   method: "PUT",
  //   data: {
  //     style: "Cream",
  //     flavor: "Chocolate"
  //   },
  //   success: function (response, status) {
  //     console.log(response);
  //     console.log(status);
  //   },
  //   error: function (response, status) {
  //     console.log(response);
  //     console.log(status);
  //   }
  // });



// POST FUNCTION
  // var style = $('input').val()
  // $.ajax({
  //   url: "http://api.doughnuts.ga/doughnuts",
  //   method: "POST",
  //   data: {
  //     style: "Jelly",
  //     flavor: "Peanut"
  //   },
  //   success: function (response, status) {
  //     console.log(response);
  //     console.log(status);
  //   },
  //   error: function (response, status) {
  //     console.log(response);
  //     console.log(status);
  //   }
  // });


// TO SUBMIT THE FORM; USE THE FORM ID AND INSTEAD OF CLICK FUNCTION YOU PUT SUBMIT
});