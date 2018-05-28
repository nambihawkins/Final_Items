/**
 * Created by Nambi on 6/24/16.
 */
$(function() {

    $( "#add-item" ).button({
        icons: {primary: "url-icon-circle-plus"}
    }).click(function(){
        $("#new-item").dialog("open");
    });
    $( "#new-item" ).dialog({
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
            $("#new-item, input").val("");
        },
        buttons: {
            "Add item" : function() {
                var itemName = $('#item').val(),
                    quantity = $('#quantity').val(),
                    beginLi = "<li><span class='done'></span><span class='delete'>x</span>",
                    itemLi = "<span class='item'>" + itemName + "</span>",
                    quantityLi = "<span class='quantity'>" + quantity + "</span>",
                    endLi = "</li>",
                    td = $('#items-list');
                td.prepend(beginLi + itemLi + quantityLi + endLi);
                td.hide().slideDown(250).find('li:first').animate({'background-color': 'rgb(255,255,204'}, 250).animate({'background-color': 'white'
                }, 750).animate();
                $(this).dialog('close');
            },
            "Cancel" : function(){
                $(this).dialog('close');
            }
        }
    });
    $('#items-list').on('click', '.done', function () {
        var itemItem = $(this).parent('li');
        itemItem.slideUp(250, function () {
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
