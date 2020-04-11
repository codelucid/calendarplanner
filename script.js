



var hour = moment().hours();
console.log(hour);   
 function getDate(){
        $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    };

$(document).ready(function(){
    

    getDate();
    
    setInterval(getDate,1000);


    $('.saveBtn').click(function(){
      
        var value = $(this).siblings(".description").val();
        var locationId = $(this).parent().attr("id");
      
        localStorage.setItem(locationId, value);
    });

    
    $('.clearBtn').click(function(){
      
        var value = $(this).siblings(".description").val();
        var locationId = $(this).parent().attr("id");

        localStorage.removeItem(locationId);
        location.reload();
    });



    $(".description").each(function(){
        //get storage
        var id = $(this).parent().attr("id");
        $(this).val(localStorage.getItem(id));

        //change color
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



