
const tasks = $('.task').val()
const time = $(this).siblings(".hr").text()

$(document).ready(function () {
    //date
    $('#currentDay').append(new Date(Date.now()).toDateString())
    //onclick
    $(".saveBtn").on("click", function () {
        let tasks = $(this).siblings('.task').val()
        //let time = $(this).siblings('.hr').text()
        let time = $(this).parent().attr("id")
        localStorage.setItem(time, tasks)
        console.log(localStorage)
    })
    //storage display
    $("#8 .task").val(localStorage.getItem("8"))
    $("#9 .task").val(localStorage.getItem("9"))
    $("#10 .task").val(localStorage.getItem("10"))
    $("#11 .task").val(localStorage.getItem("11"))
    $("#12 .task").val(localStorage.getItem("12"))
    $("#13 .task").val(localStorage.getItem("13"))
    $("#14 .task").val(localStorage.getItem("14"))
    $("#15 .task").val(localStorage.getItem("15"))
    $("#16 .task").val(localStorage.getItem("16"))
    $("#17 .task").val(localStorage.getItem("17"))

    //add color to blocks
    $(".time-block").each(function () {
    var timeNow = new Date().getHours()
    var blockTime = parseInt($(this).attr("id"))
    
        if (blockTime < timeNow) {
            $(this).addClass("past")
        } else if (blockTime === timeNow) {
            $(this).addClass("present")
        } else if (blockTime > timeNow) {
            $(this).addClass("future")        }})
    
        }
)






  /*          for(let i=0; i < localStorage.length; i++) {
        
                savedTasks = localStorage.getItem(tasks) 
            
                $('#' + time[i]).children('.task').text(savedTasks)

    }

        for(let i=0; i < localStorage.length; i++) {
        localStorage.getItem(time[i])
    let input = tasks[i].task
    $("#" + tasks[i].time).children(".task").text(input)
    $('.task').append(localStorage.getItem('#' + tasks[i].time))
    }
    */