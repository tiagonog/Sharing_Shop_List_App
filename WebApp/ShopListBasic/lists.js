$(document).ready(initializeForm);

function initializeForm() {

        var listCount = 0;
        var listInput = $("input#list");
        listInput.val("");

        // define what happens when we click the "Add Item" link
        $("a#add-list").click(shoppingLists);
        $("#list").keydown(function (enter) {
            if (enter.keyCode == 13) {
                shoppingLists();
            }
        });

        function shoppingLists() {
            if (listInput.val() === '') {
                return;
            }
            // get the items list and item to add
            var lists = $("ul#lists");
            //var purchased = $("ul#purchasedLists");
            var newList = listInput.val();
            listInput.val("");

            // create a lists item and checkbox, assigning an id to it.
            var listsItem = $("<li><a href='listDetails.html'>"+newList +"</a>"+ "<a class='delete' href='#'><strong>-</strong> Delete</a></li>");
            listsItem.attr("id", "item[" + listCount+++"]");
            addList(listsItem);

            //delete items
            listsItem.find("a.delete").click(function () {
                $(this).parent().hide('slow', function () {
                    $(this).remove();
                });
            });

            // add the item to the list. initially hidden, then slide in slowly
            function addList(listsItem) {
                listsItem.hide();
                lists.append(listsItem);
                listsItem.show('slow');
            }
            // move the corresponding list item to 'purchased' when checkbox is clicked.
            // function purchasedLists(listsItem) {
            //     listsItem.hide();
            //     purchased.append(listsItem);
            //     listsItem.show('slow');
            // }
            //toggle!! (sorta)
            // listsItem.find("input:checkbox").click(function () {
            //     this.checked ? purchasedLists(listsItem) : addList(listsItem);
            // });

            // clear input and refocus
            listInput.focus();
        }
}
