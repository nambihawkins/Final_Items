/**
 * Created by Nambi on 6/24/16.
 */
$(function() {
    $( "#due-date" ).datepicker();
    $( "#add-todo" ).button({
        icons: {primary: "url-icon-circle-plus"}
    }).click(function(){
        $("#new-todo").dialog("open");
    });
    $( "#new-todo" ).dialog({
        width: 350,
        height: 300,
        modal:true,
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        close: function () {
            $("#new-todo, input").val("");
        },
        buttons: {
            "Add task" : function() {
                var taskName = $('#task').val(),
                    dueDate = $('#due-date').val(),
                    beginLi = "<li><span class='done'></span><span class='delete'>x</span>",
                    taskLi = "<span class='task'>" + taskName + "</span>",
                    dateLi = "<span class='due-date'>" + dueDate + "</span>",
                    endLi = "</li>",
                    td = $('#todo-list');
                td.prepend(beginLi + taskLi + dateLi + endLi);
                td.hide().slideDown(250).find('li:first').animate({'background-color': 'rgb(255,255,204'}, 250).animate({'background-color': 'white'
                }, 750).animate();
                $(this).dialog('close');
            },
            "Cancel" : function(){
                $(this).dialog('close');
            }
        }
    });
    $('#todo-list').on('click', '.done', function () {
        var taskItem = $(this).parent('li');
        taskItem.slideUp(250, function () {
            var $this = $(this);
            $this.detach();
            $('completed-list').prepend($this);
            $this.slideDown();

        })

    });

    $('sortlist').sortable({
        connectWith : '.sortlist',
        cursor : 'pointer',
        placeholder : 'ui-state-highlight',
        cancel : '.delete,.done'
    });
    $(".sortlist").on("click", ".delete", function () {
        $(this).parent('li').effect('puff', function () {
            $(this).remove();

        })

    })
});
