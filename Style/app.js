// function readURL(input) {

//   if (input.files && input.files[0]) {
//     var reader = new FileReader();

//     reader.onload = function(e) {
//       $('#blah').attr('src', e.target.result);

//       $('#blah').hide();
//       $('#blah').fadeIn(650);
//     }
//     reader.readAsDataURL(input.files[0]);
//   }
// }

// $("#imgInp").change(function() {
//   readURL(this);
// });



function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('img_contain').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
