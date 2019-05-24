// alert("connected");

//Check of specific todos by clicking
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
}); 

//-there is a distinct difference between  click() and on("click"). click() only works on existing elements but not potential. 

//-have to use a listener "ul" that exist when code is originally run the first time.

//-----------------------------------------------

//Click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    }); 
    //without .parent(), only <span>X</span> will remove but <li>to do</li> will remain.
event.stopPropagation();
});

//- EVENT BUBBLING- event bubbles up into to parent elements....i.e.: putting a click event on a span, li, ul, body....will fire in that order. event.stopPropagation() stops this from happening. This is specifically a JQuery property. 

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //console.log("Enter");
        //grabbong new todo text from input
       var todoText = $(this).val()
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
//    console.log("Key Press"); 
});

$("#plus").click(function(){
    $("input[type='text']").fadeToggle();
});