/**
 * Created by divyesh on 7/10/14.
 */
$(document).ready(function () {
    $(".search_data").on('click', 'li a', function () {
        var id = $(this).attr("id");
        var msg = "";
        if (id == 0)
            msg = "Experience Search";
        else if (id == 1)
            msg = "Country you are visiting";
        else if (id == 2)
            msg = "City or Region you are visiting";
        else if (id == 3)
            msg = "Place you are visiting";
        else
            msg = "Category Search";

        $(".btnn:first-child").text($(this).text()).css("font-weight", "bold");
        $(".btnn:first-child").val($(this).text());
        $(".search_input").attr("placeholder", msg);
    });
});
