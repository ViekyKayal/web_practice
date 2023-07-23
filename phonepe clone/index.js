var a = 10;
// // alert(a)
// console.log($(".headingmotto button"))
// word Image
$("document").ready(function () {

    $(".bigphone img").click(function () {
        $(" .bigphone img").attr({
            src: ' /PhonePe Project/images/rocket.svg',
            width: '100px'  //width style is there in HTML but CSS class property was applied
        });
    });


});