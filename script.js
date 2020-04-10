



var hour = moment().hours();
console.log(hour);

$(document).ready(function(){
    
    function getDate(){
        $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    };
    
    
    setInterval(getDate,1000);


    $('.saveBtn').click(function(){
      
        var value = $(this).siblings(".description").val();
        var locationId = $(this).parent().attr("id");
      
        localStorage.setItem(locationId, value);
    });

    $(".description").each(function(){
        var id = $(this).parent().attr("id");
        $(this).val(localStorage.getItem(id));
    })

    $(".description").each(function(){
        var rowHour = $(this).parent().attr("id")
        var rowNumber = parseInt(rowHour);
        console.log(rowNumber);
        if (rowNumber === hour) {
            $(this).addClass("present");
        } else if (rowNumber < hour) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        };
    
    });
    
});



