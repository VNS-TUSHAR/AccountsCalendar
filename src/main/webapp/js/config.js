$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $.validator.addMethod('filesize', function(value, element, arg) {
        var minsize = 1000; // min 1kb
        if ((value > minsize) && (value <= arg)) {
            return true;
        } else {
            return false;
        }
    }); // filesize: 200000   //max size 200 kb

    //    $("table tr").click(function(){
    //        $(this).closest('table').find('input:radio').attr('checked', false);
    //        $(this).find('td input:radio').attr('checked', true);
    //        $(this).find('td input:radio').trigger('onchange');
    //    });

    $('#buttonSaveStting').click(function() {
        var elm = document.getElementById('SaveSetting');
        if (elm.checked) {
            $("#SaveSetting").attr("checked", false);
        } else {
            $("#SaveSetting").attr("checked", true);
        }
    });

    $('.select2').select2({
        //			placeholder: 'Choose one',
        //			searchInputPlaceholder: 'Search'
    });
    $('.select2-no-search').select2({
        minimumResultsForSearch: Infinity,
        placeholder: 'Choose one'
    });


    $('.table-select-row tbody').on('click', 'tr', function() {
        $('.table-select-row tbody tr').removeClass('selected');
        $(this).closest('table').find('input:radio').attr('checked', false);
        $(this).find('td input:radio').attr('checked', true);
        $(this).find('td input:radio').trigger('onchange');
        $(this).addClass('selected');
    });

    // AmazeUI Datetimepicker
    //    $(".datepicker_yyyymmdd_hm").datetimepicker({
    //        format: 'yyyy-mm-dd hh:ii:ss',
    //        autoclose: true,
    //        todayBtn: true,
    //    });
    //    $('.datepicker_yyyymmdd_hms').datetimepicker({
    //        format: 'yyyy-mm-dd hh:ii:ss',
    //        autoclose: true,
    //        todayBtn: true
    //    });
    //    $(".datepicker_yyyymmdd").datetimepicker({
    //        format: 'yyyy-mm-dd',
    //        minView: 2,
    //        maxView: 4,
    //        autoclose: true,
    //        todayBtn: true,
    //        pickTime: false
    //    });

    //    $(".datepicker_yyyymmdd_hm").datetimepicker({
    //        format: 'yyyy-mm-dd hh:ii:ss',
    //        autoclose: true,
    //        todayBtn: true
    //    });
    //    $(".datepicker_yyyymmdd_hms").datetimepicker({
    //        format: 'yyyy-mm-dd hh:ii:ss',
    //        autoclose: true,
    //        todayBtn: true,
    //    });

    $(".datepicker_yyyymmdd_hms").daterangepicker({
        "autoApply": true,
        "showDropdowns": true,
        timePicker: true,
        timePickerSeconds: true,
        singleDatePicker: true,
        timePicker24Hour: true,
        locale: {
            format: 'YYYY-MM-DD HH:mm:ss'
        }
    });
    $(".datepicker_yyyymmdd_hm").daterangepicker({
        "autoApply": true,
        "showDropdowns": true,
        timePicker: true,
        timePickerSeconds: true,
        singleDatePicker: true,
        timePicker24Hour: true,
        locale: {
            format: 'YYYY-MM-DD HH:mm:ss'
        }
    });
    $(".datepicker_yyyymmdd").daterangepicker({
        "autoApply": true,
        "showDropdowns": true,
        singleDatePicker: true,
        locale: {
            format: 'YYYY-MM-DD'
        }
    });
    //    $(".datepicker_yyyymmdd").datetimepicker({
    //        format: 'yyyy-mm-dd',
    //        minView: 2,
    //        maxView: 4,
    //        autoclose: true,
    //        todayBtn: true,
    //        pickTime: false
    //    });

    //    var getTomorrowDate = new Date();
    //    getTomorrowDate.setDate(getTomorrowDate.getDate()+1);
    //    $(".datepicker_yyyymmdd_minDate_Tommorrow").datetimepicker({
    //        format: 'yyyy-mm-dd',
    //        minView: 2,
    //        maxView: 4,
    //        autoclose: true,
    //        pickTime: false,
    //        startDate: getTomorrowDate
    //    });

    setInterval(function() {
        let options = {
                timeZone: 'UTC',
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false,
                timeZoneName: 'short'
            },
            formatter = new Intl.DateTimeFormat([], options);
        var currentTime = formatter.format(new Date());
        $("#CurrentDateTime").html(currentTime);
    }, 1000);

    //Drag sortable list
    $(".sortableList").sortable();
    showEnterpriseList(0);

    // Search Multi Select Option
    $('.searchMultiOption').keyup(function() {
        var that = this,
            $allListElements = $('.searchMultiOption ul > li');

        var $matchingListElements = $allListElements.filter(function(i, li) {
            var listItemText = $(li).text().toUpperCase(),
                searchText = that.value.toUpperCase();
            return ~listItemText.indexOf(searchText);
        });

        $allListElements.hide();
        $matchingListElements.show();

    });
    //    $('#ImagePreview').change(function(){
    //        const file = this.files[0];
    //        console.log('file='+file);
    //        if(file){
    //            let reader = new FileReader();
    //            reader.onload = function(event){
    //                console.log('result='+event.target.result);
    //                $('#ImagePreviewResult').attr('src', event.target.result);
    //            }
    //            reader.readAsDataURL(file);
    //        }
    //    });
    //    displayTimeOut();
    $(document).on('click', ".dropdown-content1 a", function() {
        var parentID = this.parentNode.id;
        showDropDown(parentID);
        //        document.getElementById(parentID).classList.toggle("hide");
    });
    //    $(".dropdown-content1 a").bind('click', function(){
    //        console.log('click');
    //        console.log(this.id);
    //    });

    $(document).on('shown.bs.modal', '.modalShowDateTimePicker', function() {
        $(".datepicker_yyyymmdd_hms").daterangepicker({
            "autoApply": true,
            "showDropdowns": true,
            timePicker: true,
            timePickerSeconds: true,
            singleDatePicker: true,
            timePicker24Hour: true,
            locale: {
                format: 'YYYY-MM-DD HH:mm:ss'
            }
        });
    });

});

//function displayTimeOut(){
//    var refresh = 1000; // Refresh rate in milli seconds
//    mytime = setTimeout('displayCurrentDateTime()', refresh);
//}

//function displayCurrentDateTime(){
//    var x = new Date;
//    var x1 = x.toString();
//
//    document.getElementById('CurrentDateTime').innerHTML = x1;
//    displayTimeOut();
//}

/* Search Multi list option */
function searhMultiOptions(textID, ulID, elementType, chidElement) {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById(textID);
    filter = input.value.toUpperCase();
    ul = document.getElementById(ulID);
    li = ul.getElementsByTagName(chidElement);

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName(elementType)[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//Image preview
function previewFile(input, target) {
    //    const file = $(input).files[0];
    //    if(file){
    //        let reader = new FileReader();
    //        reader.onload = function(event){
    //            $(target).attr('src', event.target.result);
    //        }
    //        reader.readAsDataURL(file);
    //    }

    var file = $(input).get(0).files[0];
    var ext = $(input).val().split('.').pop().toLowerCase();
    if ($.inArray(ext, ['png', 'jpg', 'jpeg']) == 1) {
        if (file) {
            var reader = new FileReader();
            reader.onload = function() {
                $(target).attr("src", reader.result);
            }
            reader.readAsDataURL(file);
        }
    }
}

/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
function showDropDown(id) {
    document.getElementById(id).classList.toggle("show");
    let menuHeight = $("#" + id).height() + 85;
    $("#kt_datatable_analytics_wrapper").attr('style', 'min-height : ' + menuHeight + 'px !important;');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtnTest1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Session timeout check and redirect current target URL
$(function() {
    //Disabled datatable error
    $.fn.dataTable.ext.errMode = 'none';
    $(document).on("ajaxError", function(event, request, settings) {
        if (typeof request.status != 'undefined' && request.status == 401) {
            var defaultURL = app_url + '/logout';
            if (typeof event.currentTarget != 'undefined' && typeof event.currentTarget.URL != 'undefined' && event.currentTarget.URL != '') {
                defaultURL = event.currentTarget.URL;
            }
            window.location = defaultURL;
        }
    });
});