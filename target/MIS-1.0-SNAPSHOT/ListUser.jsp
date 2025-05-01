<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="csrf-token" content="0ouAGTkuETYDnMBMcE0FhB6labH1anUhbUbPGvFm" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- Title -->
        <title> Task Management </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Favicon -->
        <link rel="icon" href="image/company/01.png" type="image/x-icon" />

        <!-- Icons css -->
        <link href="assets/css/icons.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
        <!-- Bootstrap css -->
        <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Internal Data table css -->
        <link href="assets/plugins/datatable/css/dataTables.bootstrap5.min.css" rel="stylesheet" />
        <link href="assets/plugins/datatable/css/buttons.bootstrap5.min.css" rel="stylesheet">
        <link href="assets/plugins/datatable/responsive.bootstrap5.css" rel="stylesheet" />
        <link href="assets/plugins/datatable/css/jquery.dataTables.min.css" rel="stylesheet">
        <link href="assets/plugins/datatable/responsive.dataTables.min.css" rel="stylesheet">
        <link href="assets/plugins/sweet-alert/sweetalert.css" rel="stylesheet">
        <link href="assets/plugins/select2/css/select2.min.css" rel="stylesheet">

        <link href="css/jquery-ui.min.css" rel="stylesheet">

        <!--Internal  Datetimepicker-slider css -->
        <!--<link rel="stylesheet" href="#css/bootstrap-datetimepicker.min.css">-->

        <!--Internal Sumoselect css-->
        <link href="assets/plugins/sumoselect/sumoselect.css" rel="stylesheet">

        <!--  Custom Scroll bar-->
        <link href="assets/plugins/mscrollbar/jquery.mCustomScrollbar.css" rel="stylesheet" />

        <!--- Style css-->
        <link href="assets/css/style.css" rel="stylesheet">
        <link href="assets/css/style-dark.css" rel="stylesheet">
        <link href="assets/css/boxed.css" rel="stylesheet">
        <link href="assets/css/dark-boxed.css" rel="stylesheet">

        <!--  Sidebar css -->
        <link href="assets/plugins/sidebar/sidebar.css" rel="stylesheet">

        <!--- Internal Morris css-->
        <link href="assets/plugins/morris.js/morris.css" rel="stylesheet">

        <!--- Style css --->
        <link href="assets/css/style.css" rel="stylesheet">
        <link href="assets/css/boxed.css" rel="stylesheet">
        <link href="assets/css/dark-boxed.css" rel="stylesheet">

        <!--- Dark-mode css --->
        <link href="assets/css/style-dark.css" rel="stylesheet">

        <!---Skinmodes css-->
        <link href="assets/css/skin-modes.css" rel="stylesheet" />

        <!---daterangepicker css-->
        <link href="css/daterangepicker.css" rel="stylesheet" />

        <link rel="stylesheet" href="css/jquery.toast.css">

        <link rel="stylesheet" href="css/custom.css">
        <!-- JQuery min js -->
        <script src="assets/plugins/jquery/jquery.min.js"></script>




        <!--  <script>
             var app_url = "https://amp.sms24hours.com";
             var loginID = "3";
             var gatewayName = "Alpha Messaging Platform";
             var default_timeout = 1000;
             //Set default pagination limit
             var paginationLimit = [
                 [10, 25, 50, 100, 500, 1000, 2000],
                 [10, 25, 50, 100, 500, 1000, 2000],
             ];
             $.ajaxSetup({
                 headers: {
                     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                 }
             });
             var jsTrans = {
                 "JS_RULE_ENTITY_LIST": ["Message Text", "Sender Ton", "Sender NPI", "Destination TON", "Destination NPI"],
                 "JS_SENDER_TON_LIST": ["Unknown", "International", "National", "Network Specific", "Subscriber Number", "Alphanumeric", "Abbreviated"],
                 "JS_SENDER_NPI_LIST": {
                     "0": "Unknown",
                     "1": "ISDN\/Telephone numbering plan(E163\/E164)",
                     "3": "Data Numbering plan (X.121)",
                     "4": "Telex Numbering plan(F.69)",
                     "6": "Land Mobile(E.212)",
                     "8": "National Numering plan",
                     "9": "private Numbering Plan",
                     "10": "ERMES Numbering plan (ETSI DE\/PS 3 01-3)",
                     "14": "Internet (IP)",
                     "18": "WAP Client Id (to be defined by WAP Forum)"
                 },
                 "JS_VALIDATE_EXCEPT_SEMICOLON": "constants.validate_except_semicolon",
                 "JS_ENTERPRISE_CUSTOMER": "0",
                 "JS_ENTERPRISE_VENDOR": "1",
                 "JS_ENTERPRISE_RECIPROCAL": "2",
                 "JS_IMPORT_TYPE_DELETE": null,
                 "JS_CONVERSATION_TYPE_LIST_RANDOM_NUMBER": "5",
                 "JS_CONVERSATION_TYPE_LIST_SENDER_ID_TEMPLATE": "6"
             };
         </script> -->

        <!-- Internal Data tables -->
        <script src="assets/plugins/datatable/js/jquery.dataTables.min.js"></script>
        <script src="assets/plugins/datatable/datatables.min.js"></script>
        <script src="assets/plugins/datatable/js/dataTables.bootstrap5.js"></script>
        <script src="assets/plugins/datatable/js/dataTables.buttons.min.js"></script>
        <script src="assets/plugins/datatable/js/buttons.bootstrap5.min.js"></script>
        <script src="assets/plugins/datatable/js/jszip.min.js"></script>
        <script src="assets/plugins/datatable/js/buttons.html5.min.js"></script>
        <script src="assets/plugins/datatable/js/buttons.print.min.js"></script>
        <script src="assets/plugins/datatable/js/buttons.colVis.min.js"></script>
        <script src="assets/plugins/datatable/pdfmake/pdfmake.min.js"></script>
        <script src="assets/plugins/datatable/pdfmake/vfs_fonts.js"></script>
        <script src="assets/plugins/chart.js/Chart.bundle.min.js"></script>
        <!--  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        -->
        <script src="js/jquery-ui.min.js"></script>

        <script src="js/jquery.validate.min.js"></script>
        <script src="js/additional-methods.min.js"></script>

        <script src="js/customValidate.js"></script>
        <script src="js/common.js"></script>
        <script src="js/jquery.toast.js"></script>
        <script src="js/config.js"></script>

        <style>

            table {
                width: 100%;
                margin-top: 20px;
                border-collapse: collapse;
            }

            th, td {
                padding: 10px;
                border: 1px solid #ddd;
                text-align: left;
            }

            th {
                background-color: #f2f2f2;
            }

            .dataTables_wrapper {
                margin-top: 20px;
            }

            #cover-spin {
                position: absolute;
                margin-left: 46%;
                top: 46%;
            }
            .custom-add-task-btn:hover {
                color: green;
                text-decoration: none;
            }


        </style>

    </head>

    <body class="main-body">
        <input type="hidden" id="loginUserID" value="3" />
        <!-- <div id="loading" style="display: none;"></div> -->
        <!-- Loader -->
        <div id="global-loader">
            <img src="assets/img/loader.svg" class="loader-img" alt="Loader">
        </div>
        <!-- /Loader -->

        <!-- Page -->
        <div class="page">
            <!-- main-header opened -->
            <div class="main-header nav nav-item hor-header">
                <div class="container">
                    <div class="main-header-left">
                        <h4 class="content-title mb-0 my-auto">
                            <img src="image/company/01.png" class="desktop-logo"> 
                        </h4>
                        <a class="animated-arrow hor-toggle horizontal-navtoggle"><span></span></a>
                    </div>
                    <!-- search -->
                    <div class="main-header-right">
                        <ul class="nav nav-item  navbar-nav-right ms-auto">
                            <li class="nav">
                                <div class="dropdown  nav-itemd-none d-md-flex">
                                    <a href="javascript:void(0)" class="d-flex  nav-item country-flag1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span style="color: black;font-weight: 500;margin-right: 10px;" id="CurrentDateTime" class="align-self-center bg-transparent">
                                            01/07/2025, 07:31:22 UTC
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <li class="dropdown nav-item main-header-notification">
                                <a class="new nav-link" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                    </svg>
                                    <span class=" pulse"></span>
                                </a>
                                <div class="dropdown-menu">
                                    <div class="menu-header-content bg-primary text-start">
                                        <div class="d-flex">
                                            <h6 class="dropdown-title mb-1 tx-15 text-white fw-semibold">Notifications</h6>
                                        </div>
                                        <p class="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">License Expire Information</p>
                                    </div>
                                    <div class="main-notification-list Notification-scroll">
                                        <a class="d-flex p-3 border-bottom" href="javascript::void(0)">
                                            <div class="ms-3">
                                                <h5 class="notification-label mb-1">Your license will expire in 4 day(s)</h5>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item full-screen fullscreen-button">
                                <a class="new nav-link full-screen-link" href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" class="header-icon-svgs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></a>
                            </li>
                            <li class="dropdown main-profile-menu nav nav-item nav-link">
                                <a class="profile-user d-flex" href="">
                                    <div class="demo-avatar-group avatar-list">
                                        <div class="avatar bg-info rounded-circle">
                                            AA
                                        </div>
                                    </div>
                                </a>
                                <div class="dropdown-menu">
                                    <div class="main-header-profile bg-primary p-3">
                                        <div class="d-flex wd-100p">
                                            <div class="main-img-user">
                                                <div class="demo-avatar-group avatar-list">
                                                    <div class="avatar bg-info rounded-circle">
                                                        AA
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ms-3 my-auto">
                                                <h6>Altmish Azam</h6><span>ADMIN</span>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="dropdown-item" href="#" style=""><i class="bx bx-cog"></i> Edit Profile</a>
                                    <a class="dropdown-item" href="#"><i class="bx bx-log-out"></i> Sign Out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /main-header -->

            <!--Horizontal-main -->
            <div class="sticky">

                <div class="horizontal-main hor-menu clearfix side-header">
                    <div class="horizontal-mainwrapper container clearfix">
                        <!--Nav-->
                        <nav class="horizontalMenu clearfix">
                            <ul class="horizontalMenu-list">
                                <li aria-haspopup="true">
                                    <a href="#dashboard" class="">

                                        <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"/>
                                        <path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"/>
                                        </svg>

                                        <!--Dashboard--> 
                                        <button class="btn btn-link p-0 m-0 align-baseline" data-bs-toggle="modal" data-bs-target="#addModal"> 
                                            Add Task 
                                        </button>

                                    </a>
                                </li>

                                <li aria-haspopup="true">

                                    <a href="javascript:void(0)" class="sub-icon">
                                        <i class="fa fa-university"></i>
                                        User Management
                                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                                    </a>

                                    <ul class="sub-menu">

                                        <li aria-haspopup="true">
                                            <a href="#transaction/0" class="slide-item text-link" data-bs-toggle="modal" data-bs-target="#addEmailUsers"> Add Users</a>
                                        </li>
                                        <li aria-haspopup="true">
                                            <!--<a href="ListUser.jsp" class="slide-item text-link" target="_blank">View Users</a>-->

                                            <a href="#" class="slide-item text-link" onclick="openUsersModal()">Show Email Users</a>

                                            <!--<button class="btn btn-primary" onclick="openUsersModal()">Show Email Users</button>-->

                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </nav>   
                        <!--Nav-->
                    </div>       
                </div>           
            </div>               
            <!--Horizontal-main -->

            <!-- main-content opened -->
            <div class="main-content horizontal-content">  
                <div class="container"> 
                    <h2> Task Management </h2> 

                    <!--    <button class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#addModal">Add Task</button>-->
                    <!--    <table id="taskTable" class="display">-->

                    <div class="table-responsive">
                        <table id="taskTable" class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Sno</th>
                                    <th>Task</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Start Date</th>
                                    <th>Due Date</th>
                                    <th>Percent Complete</th>
                                    <!--<th>DONE</th>-->
                                    <th>Notes</th>
                                    <th>Proof</th>
                                    <th>Actions</th>
                                </tr>
                            </thead> 
                            <tbody id="tableBody" role="rowgroup"> 
                            </tbody> 
                        </table> 
                    </div> 

                    <!-- MODAL EDIT STRUCTURE -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Edit Task</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body">
                                    <form id="editForm">

                                        <div class="form-group" hidden>
                                            <label><b>Sno</b></label>
                                            <input type="text" class="form-control" id="modal-sno">
                                        </div>

                                        <div class="form-group" >
                                            <label><b>Task</b></label>
                                            <input type="text" class="form-control" id="modal-Task" readonly>
                                        </div>

                                        <!--                                        <div class="form-group">
                                                                                    <label><b>Status</b></label>
                                                                                    <input type="text" class="form-control" id="modal-status">
                                                                                </div>-->


                                        <div class="form-group">
                                            <label><b>Status</b></label> 
                                            <br>   
                                            <select class="form-control" id="modal-status" required> 
                                                <option value="" disabled selected hidden>-- Select Status --</option>
                                                <option value="Started">Started</option>
                                                <option value="Partially Completed">Partially Completed</option>
                                                <option value="Completed">Completed</option>
                                            </select>  
                                        </div> 


                                        <div class="form-group">
                                            <label><b>Start Date</b></label>
                                            <input type="date" class="form-control" id="modal-startDate" readonly>
                                        </div>

                                        <div class="form-group">
                                            <label><b>Due Date</b></label>
                                            <input type="date" class="form-control" id="modal-dueDate" readonly>
                                        </div>

                                        <div class="form-group">
                                            <label> <b>Complete %</b></label>
                                            <input type="number" class="form-control" id="modal-percentComplete" step="1" required>
                                        </div>

                                        <!--                                        
                                                                                <div class="form-group"> 
                                                                                    <label><b>Done?</b></label> 
                                                                                    <input type="text" class="form-control" id="modal-done"> 
                                                                                </div>
                                        -->

                                        <div class="form-group">
                                            <label><b>Notes</b></label>
                                            <textarea class="form-control" id="modal-notes"></textarea>
                                        </div>

                                        <div class="form-group">
                                            <label><b>Proof</b></label> 
                                            <!--<input type="file" class="form-control" id="modal-proof" accept="application/pdf,image/*" required>-->

                                            <input type="file" class="form-control" id="modal-proof" accept="application/pdf,image/*" multiple>

                                        </div>

                                        <div id="cover-spin" class="spinner-border text-muted" style="display:none;"></div>
                                        <p id="saveResult" style="display:none; text-align: center;"><b>Please wait...</b></p>

                                    </form>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" id="saveChangesBtn">Save changes</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- MODAL ADD STRUCTURE -->
                    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Task</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body">
                                    <form id="editForm"> 
                                        <div class="form-group" hidden>
                                            <label><b>Sno</b></label>
                                            <input type="text" class="form-control" id="modal-Addsno">
                                        </div> 

                                        <div class="form-group" >
                                            <label><b>Task</b></label>
                                            <input type="text" class="form-control" id="modal-AddTask" required>
                                        </div>


                                        <div class="form-group">
                                            <label><b>Priority</b></label> 
                                            <br>   
                                            <select class="form-control" id="modal-AddPriority" required> 
                                                <option value="" disabled selected hidden>-- Select Priority --</option>
                                                <option value="High">High</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Low">Low</option>
                                            </select>  
                                        </div>

                                        <!--                                        <div class="form-group" >
                                                                                    <label><b>Status</b></label>
                                                                                    <input type="text" class="form-control" id="modal-AddStatus" required>
                                                                                </div>-->


                                        <div class="form-group">
                                            <label><b>Start Date</b></label>
                                            <input type="date" class="form-control" id="modal-AddstartDate">
                                        </div>

                                        <div class="form-group">
                                            <label><b>Due Date</b></label>
                                            <input type="date" class="form-control" id="modal-AdddueDate">
                                        </div>

                                        <!--                                        <div class="form-group">
                                                                                    <label> <b>Complete %</b></label>
                                                                                    <input type="number" class="form-control" id="modal-AddpercentComplete" step="1">
                                                                                </div>-->

                                        <!--                                        <div class="form-group">
                                                                                    <label><b>Done?</b></label>
                                                                                    <input type="text" class="form-control" id="modal-Adddone">
                                                                                </div>-->

                                        <!--                                        <div class="form-group">
                                                                                    <label><b>Notes</b></label>
                                                                                    <textarea class="form-control" id="modal-Addnotes"></textarea>
                                                                                </div>-->

                                        <!--                                        <div class="form-group">
                                                                                    <label><b>Proof</b></label> 
                                                                                    <input type="file" class="form-control" id="modal-Addproof" accept="application/pdf,image/*" > 
                                                                                </div>-->


                                        <div id="cover-spin" class="spinner-border text-muted" style="display:none;"></div>
                                        <p id="addResult" style="display:none; text-align: center;"><b>Please wait...</b></p> 
                                    </form>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" id="addChangesBtn">Add changes</button>
                                </div>

                            </div>
                        </div>
                    </div>


                    <!-- MODAL ADD STRUCTURE -->
                    <div class="modal fade" id="addEmailUsers" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Task</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body">
                                    <form id="editForm"> 

                                        <div class="form-group" >
                                            <label><b>Add user</b></label> 
                                            <input type="email" class="form-control" id="modal-AddEmail" name="email" placeholder="Enter Email ID" required title="Please enter a valid Gmail address (e.g., example@gmail.com)">
                                        </div>

                                        <!--
                                                <div class="form-group">
                                                <label><b>Proof</b></label> 
                                                <input type="file" class="form-control" id="modal-Addproof" accept="application/pdf,image/*" ></div>
                                        -->

                                        <div id="cover-spin" class="spinner-border text-muted" style="display:none;"></div>

                                        <p id="addResult" style="display:none; text-align: center;"><b>Please wait...</b></p> 
                                    </form>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" id="addUsersBtn">Add User</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- Users Modal -->
                    <div class="modal fade" id="usersModal" tabindex="-1" aria-labelledby="usersModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg"> 
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="usersModalLabel">Email Users List</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body">
                                    <table id="usersTable" class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <script src="#assets/plugins/sumoselect/jquery.sumoselect.js"></script>

                    <script>



                                                function loadUsersIntoModal() {
                                                    var xhr = new XMLHttpRequest();
                                                    var url = "AddEmailUserss";  // your backend endpoint

                                                    xhr.open("GET", url, true);
                                                    xhr.onreadystatechange = function () {
                                                        if (xhr.readyState == 4 && xhr.status == 200) {
                                                            var data = JSON.parse(xhr.responseText);

                                                            var tableBody = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
                                                            tableBody.innerHTML = '';

                                                            data.forEach(function (task) {
                                                                var row = document.createElement('tr');
                                                                var emailCell = document.createElement('td');

                                                                emailCell.textContent = task.email || 'N/A';
                                                                row.appendChild(emailCell);

                                                                tableBody.appendChild(row);
                                                            });

                                                            // Optional: Initialize DataTables (if you want paging/sorting)
                                                            // Destroy first if already initialized
                                                            if ($.fn.DataTable.isDataTable('#usersTable')) {
                                                                $('#usersTable').DataTable().destroy();
                                                            }
                                                            $('#usersTable').DataTable();
                                                        }
                                                    };
                                                    xhr.send();
                                                }

                                                function openUsersModal() {
                                                    loadUsersIntoModal();
                                                    var myModal = new bootstrap.Modal(document.getElementById('usersModal'));
                                                    myModal.show();
                                                }

                                                window.onload = function () {

                                                    // Create an XMLHttpRequest object
                                                    var xhr = new XMLHttpRequest();
                                                    var url = "AddEmailUserss";         // The endpoint that returns your data

                                                    xhr.open("GET", url, true);
                                                    xhr.onreadystatechange = function () {
                                                        if (xhr.readyState == 4 && xhr.status == 200) {
                                                            var data = JSON.parse(xhr.responseText);
                                                            var tableBody = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
                                                            tableBody.innerHTML = '';
                                                            data.forEach(function (task)
                                                            {
                                                                var row = document.createElement('tr');
                                                                var snoCell = document.createElement('td');

                                                                snoCell.textContent = task.email || 'N/A';
                                                                row.appendChild(snoCell);


                                                                tableBody.appendChild(row);
                                                            });
                                                            $('#taskTable').DataTable();
                                                        }
                                                    };
                                                    xhr.send();
                                                };

                                                window.onload = function () {

                                                    // Create an XMLHttpRequest object
                                                    var xhr = new XMLHttpRequest();
                                                    var url = "dashboard"; // The endpoint that returns your data

                                                    xhr.open("GET", url, true);
                                                    xhr.onreadystatechange = function () {
                                                        if (xhr.readyState == 4 && xhr.status == 200) {
                                                            var data = JSON.parse(xhr.responseText);
                                                            var tableBody = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
                                                            tableBody.innerHTML = '';

                                                            var serialNumber = 1;

                                                            data.forEach(function (task)
                                                            {
                                                                var row = document.createElement('tr');

                                                                var snoCell = document.createElement('td');
                                                                snoCell.textContent = task.sno || 'N/A';
                                                                row.appendChild(snoCell);

//                                                                var snoCell = document.createElement('td');
//                                                                snoCell.textContent = serialNumber++;
//                                                                row.appendChild(snoCell);

                                                                var taskCell = document.createElement('td');
                                                                taskCell.textContent = task.Task || 'N/A';
                                                                row.appendChild(taskCell);

                                                                var priorityCell = document.createElement('td');
                                                                priorityCell.textContent = task.Priority || 'N/A';
                                                                row.appendChild(priorityCell);

                                                                var statusCell = document.createElement('td');
                                                                statusCell.textContent = task.Status || 'N/A';
                                                                row.appendChild(statusCell);

                                                                var startDateCell = document.createElement('td');
                                                                startDateCell.textContent = task.StartDate || 'N/A';
                                                                row.appendChild(startDateCell);

                                                                var dueDateCell = document.createElement('td');
                                                                dueDateCell.textContent = task.DueDate || 'N/A';
                                                                row.appendChild(dueDateCell);

                                                                var percentCompleteCell = document.createElement('td');
                                                                percentCompleteCell.textContent = task.PercentComplete || 'N/A';
                                                                row.appendChild(percentCompleteCell);


//                                                                var doneCell = document.createElement('td');
//                                                                doneCell.textContent = task.DONE || 'N/A';
//                                                                row.appendChild(doneCell);


                                                                var notesCell = document.createElement('td');
                                                                notesCell.textContent = task.Notes || 'N/A';
                                                                row.appendChild(notesCell);


                                                                var proofCell = document.createElement('td');

//                                                                if (task.Proof && (task.Proof.startsWith("/usr/local/") || task.Proof.startsWith("/usr/local/")))
//                                                                {
//                                                                    var fileName = task.Proof.split('img/');
//                                                                    proofCell.innerHTML = '<button class="btn btn-sm btn-success" onclick="window.open(\'http://111.118.177.68:8021/AccountInfo/img/' + fileName[1] + '\', \'_blank\')">View</button>';
//                                                                }
//                                                                else
//                                                                {
//                                                                    proofCell.textContent = 'N/A';
//                                                                }

                                                                if (task.Proof && (task.Proof.startsWith("/usr/local/") || task.Proof.startsWith("/usr/local/"))) {
                                                                    var filePaths = task.Proof.split(',');
                                                                    filePaths.forEach(function (path) {
                                                                        var fileName = path.split('img/')[1];
                                                                        var viewBtn = document.createElement('button');
                                                                        viewBtn.className = 'btn btn-sm btn-success m-1';
                                                                        viewBtn.textContent = 'View';
                                                                        viewBtn.onclick = function () {
                                                                            window.open('http://111.118.177.68:8021/AccountInfo/img/' + fileName, '_blank');
                                                                        };
                                                                        proofCell.appendChild(viewBtn);
                                                                    });
                                                                } else {
                                                                    proofCell.textContent = 'N/A';
                                                                }

 

                                                                row.appendChild(proofCell);


                                                                var actionCell = document.createElement('td');
                                                                var editBtn = document.createElement('button');
                                                                editBtn.textContent = 'Edit';
                                                                editBtn.className = 'btn btn-sm btn-primary';
                                                                editBtn.onclick = function () {
                                                                    editRow(row);
                                                                };
                                                                actionCell.appendChild(editBtn);
                                                                row.appendChild(actionCell);
                                                                tableBody.appendChild(row);



                                                            });
                                                            $('#taskTable').DataTable();
                                                        }
                                                    };
                                                    xhr.send();
                                                };


                                                function editRow(row)
                                                {
                                                    var cells = row.getElementsByTagName('td');
                                                    document.getElementById('modal-sno').value = cells[0].textContent;
                                                    document.getElementById('modal-Task').value = cells[1].textContent;

//                                                  document.getElementById('modal-status').value = cells[3].textContent;

                                                    document.getElementById('modal-startDate').value = cells[4].textContent;
                                                    document.getElementById('modal-dueDate').value = cells[5].textContent;
                                                    document.getElementById('modal-percentComplete').value = cells[6].textContent;

//                                          document.getElementById('modal-done').value = cells[7].textContent;

                                                    document.getElementById('modal-notes').value = cells[7].textContent;

                                                    document.getElementById('modal-proof').value = "";

                                                    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));

                                                    modal.show();
                                                }



                                                document.getElementById('saveChangesBtn').addEventListener('click', function ()
                                                {
                                                    var sno = document.getElementById('modal-sno').value;

                                                    var Task = document.getElementById('modal-Task').value;

                                                    var status = document.getElementById('modal-status').value;

                                                    var startDate = document.getElementById('modal-startDate').value;

                                                    var dueDate = document.getElementById('modal-dueDate').value;

                                                    var percentComplete = document.getElementById('modal-percentComplete').value;

                                                    var notes = document.getElementById('modal-notes').value;

                                                    var fileInput = document.getElementById('modal-proof');

                                                    var fileInputText = document.getElementById('modal-proof').value;

                                                    var fileInputs = document.getElementById('modal-proof').files;


//                                                    var file = fileInput.files[0];

                                                    var files = fileInputs;

//                                                    if (file === "undefined")
//                                                    {
//                                                        file = "";
//                                                    }

                                                    document.getElementById('cover-spin').style.display = "unset";
                                                    document.getElementById('saveResult').style.display = "unset";

                                                    function sendUpdateRequest(fileUrl, fileName, proofPath)
                                                    {
                                                        var formData = new FormData();


                                                        formData.append("sno", sno);
                                                        formData.append("status", status);
                                                        formData.append("startDate", startDate);
                                                        formData.append("dueDate", dueDate);
                                                        formData.append("percentComplete", percentComplete);
                                                        // formData.append("done", done);  
                                                        formData.append("notes", notes);
                                                        formData.append("task", Task);

                                                        for (let i = 0; i < files.length; i++)
                                                        {
                                                            formData.append("files", files[i]);
                                                        }

                                                        if (fileName === "")
                                                        {
                                                            console.log("Proof is not valid");
                                                        } else
                                                        {
                                                            formData.append("proof", proofPath);
                                                        }

                                                        var xhr = new XMLHttpRequest();
                                                        xhr.open("POST", "dashboard", true);
                                                        xhr.onreadystatechange = function ()
                                                        {
                                                            if (xhr.readyState === 4) {
                                                                document.getElementById('saveResult').style.display = "none";
                                                                document.getElementById('cover-spin').style.display = "none";
                                                                if (xhr.status === 200) {
                                                                    var rows = document.querySelectorAll("table tbody tr");
                                                                    rows.forEach(row =>
                                                                    {
                                                                        if (row.cells[0].textContent.trim() === sno)
                                                                        {
                                                                            row.cells[3].textContent = status;
                                                                            row.cells[4].textContent = startDate;
                                                                            row.cells[5].textContent = dueDate;
                                                                            row.cells[6].textContent = percentComplete;

                                                                            row.cells[7].textContent = notes;

                                                                            if (fileName === "")
                                                                            {

                                                                            } else
                                                                            {

//                                                                                row.cells[8].innerHTML = '<a href="' + fileUrl + '" target="_blank" class="btn btn-sm btn-success" style="background: #198754; color: white;" >View</a>';

                                                                                let links = "";
                                                                                for (let i = 0; i < files.length; i++) {
                                                                                    var fileName = encodeURIComponent(files[i].name);
                                                                                    var fileUrl = "http://111.118.177.68:8021/AccountInfo/img/" + fileName;
                                                                                    links += '<a href="' + fileUrl + '" target="_blank" class="btn-success">View</a><br>';
                                                                                }
                                                                                row.cells[8].innerHTML = links;


                                                                            }

                                                                            var editBtn = row.cells[9].querySelector('button');
                                                                            if (editBtn)
                                                                            {
                                                                                editBtn.disabled = true;
                                                                                // editBtn.style.cursor = "pointer";  
                                                                            }
                                                                        }
                                                                    });

                                                                    sendChanges(Task, sno, status, startDate, dueDate, percentComplete, fileName);

                                                                    bootstrap.Modal.getInstance(document.getElementById('exampleModal')).hide();

                                                                } else
                                                                {
                                                                    alert("Error updating task.");
                                                                }
                                                            }
                                                        };
                                                        xhr.send(formData);
                                                    }

//                                                    if (!file)

                                                    if (!files)
                                                    {
                                                        var fileUrl = "";
                                                        var fileName = "";

                                                        var proofPath = "/usr/local/apache-tomcat-9.0.84/webapps/AccountInfo/img/" + fileName;

                                                        sendUpdateRequest(fileUrl, fileName, proofPath);

                                                    } else
                                                    {

                                                        var uploadForm = new FormData();

//                                                        uploadForm.append("file", files);

                                                        var uploadForm = new FormData();
                                                        for (var i = 0; i < files.length; i++) {
                                                            uploadForm.append("file", files[i]);
                                                        }


                                                        var uploadXhr = new XMLHttpRequest();
                                                        uploadXhr.open("POST", "UploadMedia", true);

                                                        uploadXhr.onreadystatechange = function ()
                                                        {
                                                            if (uploadXhr.readyState === 4) {
                                                                if (uploadXhr.status === 200)
                                                                {
                                                                    let fileUrl = uploadXhr.responseText;
                                                                    try {
                                                                        fileUrl = JSON.parse(fileUrl).url;
                                                                    } catch (e)
                                                                    {

                                                                    }

                                                                    var fileName = fileUrl.split(': ').pop();
                                                                    var fullUrl = "http://111.118.177.68:8021/AccountInfo/img/" + fileName;
                                                                    var proofPath = "/usr/local/apache-tomcat-9.0.84/webapps/AccountInfo/img/" + fileName;
                                                                    sendUpdateRequest(fullUrl, fileName, proofPath);
                                                                } else {
                                                                    document.getElementById('saveResult').style.display = "none";
                                                                    document.getElementById('cover-spin').style.display = "none";
                                                                    alert("File upload failed: " + uploadXhr.responseText);
                                                                }
                                                            }
                                                        };
                                                        uploadXhr.send(uploadForm);
                                                    }
                                                });
//                                                addUsersBtn 
                                                document.getElementById('addUsersBtn').addEventListener('click', function ()
                                                {

                                                    var addEmail = document.getElementById('modal-AddEmail').value;
                                                    var xhr = new XMLHttpRequest();
                                                    var url = "AddEmailUserss?email=" + encodeURIComponent(addEmail);
                                                    xhr.open("POST", url, true);
                                                    xhr.onreadystatechange = function () {
                                                        if (xhr.readyState === 4) {
                                                            if (xhr.status === 200) {
                                                                alert("User added successfully");
                                                                bootstrap.Modal.getInstance(document.getElementById('addEmailUsers')).hide();
                                                            }
                                                        }
                                                    };
                                                    xhr.send();
                                                });

                                                document.getElementById('addChangesBtn').addEventListener('click', function ()
                                                {

                                                    var Task = document.getElementById('modal-AddTask').value;
                                                    if (Task === "")
                                                    {
                                                        alert("Please Enter Task Details Field");
                                                        return;
                                                    }
                                                    var status = "";
                                                    var Priority = document.getElementById('modal-AddPriority').value;

                                                    if (Priority === "")
                                                    {
                                                        alert("Please Select Priority of the task");
                                                        return;
                                                    }

                                                    var startDate = document.getElementById('modal-AddstartDate').value;
                                                    var dueDate = document.getElementById('modal-AdddueDate').value;
                                                    var percentComplete = '';
                                                    var notes = '';
                                                    var fileButton = '';

                                                    var formData = new FormData();
                                                    formData.append("Task", Task);
                                                    formData.append("Priority", Priority);
                                                    formData.append("startDate", startDate);
                                                    formData.append("dueDate", dueDate);

//                                                    var url = "AddUsers?Task=" + encodeURIComponent(Task) + "&Priority=" + encodeURIComponent(Priority) + "&startDate=" + encodeURIComponent(startDate) + "&dueDate=" + encodeURIComponent(dueDate);

                                                    var xhr = new XMLHttpRequest();
                                                    xhr.open("POST", "AddUsers", true);

                                                    xhr.onreadystatechange = function () {
                                                        if (xhr.readyState === 4)
                                                        {
                                                            if (xhr.status === 200)
                                                            {
                                                                bootstrap.Modal.getInstance(document.getElementById('addModal')).hide();

                                                                var tableBody = document.getElementById('taskTable').getElementsByTagName('tbody')[0];

                                                                var row = document.createElement('tr');

                                                                var newSno = tableBody.rows.length + 1;

                                                                row.innerHTML =
                                                                        '<td>' + newSno + '</td>' +
                                                                        '<td>' + Task + '</td>' +
                                                                        '<td>' + Priority + '</td>' +
                                                                        '<td>' + status + '</td>' +
                                                                        '<td>' + startDate + '</td>' +
                                                                        '<td>' + dueDate + '</td>' +
                                                                        '<td>' + (percentComplete || '') + '</td>' +
                                                                        '<td>' + (notes || '') + '</td>' +
                                                                        '<td>' + (fileButton || '') + '</td>' +
                                                                        '<td><button class="btn btn-sm btn-primary" onclick="editRow(this.parentElement.parentElement)">Edit</button></td>';
                                                                tableBody.appendChild(row);
                                                            } else
                                                            {
                                                                alert("Error updating task.");
                                                            }
                                                        }
                                                    };
                                                    xhr.send(formData);
                                                });

//                                                function sendAddFile(file)
//                                                {
//                                                    // Upload new file  addModal
//                                                    var uploadForm = new FormData();
//                                                     
//                                                    uploadForm.append("file", file);
//                                                    
//                                                    var uploadXhr = new XMLHttpRequest();
//                                                    
//                                                    uploadXhr.open("POST", "UploadMedia", true);
//                                                    
//                                                    uploadXhr.onreadystatechange = function ()
//                                                    {
//                                                        if (uploadXhr.readyState === 4)
//                                                        {
//                                                            if (uploadXhr.status === 200)
//                                                            {
//                                                                let fileUrl = uploadXhr.responseText;
//                                                                try 
//                                                                {
//                                                                    fileUrl = JSON.parse(fileUrl).url;
//                                                                }
//                                                                catch (e) 
//                                                                {
//                                                                    
//                                                                }
//
//                                                            } else {
//                                                                alert("File upload failed: " + uploadXhr.responseText);
//                                                            }
//                                                        }
//                                                    };
//                                                    uploadXhr.send(uploadForm);
//                                                }

                                                function sendChanges(Task, sno, status, startDate, dueDate, percentComplete, fileName)
                                                {
                                                    var uploadXhr = new XMLHttpRequest();
                                                    var url = "UploadMedia?status=" + encodeURIComponent(status) + "&startDate=" + encodeURIComponent(startDate) + "&dueDate=" + encodeURIComponent(dueDate) + "&percentComplete=" + encodeURIComponent(percentComplete) + "&fileName=" + encodeURIComponent(fileName) + "&sno=" + encodeURIComponent(sno) + "&Task=" + encodeURIComponent(Task);

                                                    uploadXhr.onreadystatechange = function ()
                                                    {
                                                        if (uploadXhr.readyState === 4)
                                                        {
                                                            if (uploadXhr.status === 200)
                                                            {
                                                                let response = uploadXhr.responseText;
                                                            } else
                                                            {
                                                                alert("Error sending mail " + uploadXhr.responseText);
                                                            }
                                                        }
                                                    };
                                                    uploadXhr.open("GET", url, true);
                                                    uploadXhr.send();
                                                }

                                                $(function () {
                                                    // DataTable
                                                    var columnsList = [{
                                                            data: 'LevelData'
                                                        },
                                                        {
                                                            data: 'Attempts'
                                                        },
                                                        {
                                                            data: 'Successfull'
                                                        },
                                                        {
                                                            data: 'Submitted'
                                                        },
                                                        {
                                                            data: 'ASR'
                                                        },
                                                        {
                                                            data: 'VendorDLR'
                                                        }
                                                    ];
                                                    var accessMargin = "1";
                                                    if (accessMargin == 1) {
                                                        columnsList.push({
                                                            data: 'Margin'
                                                        });
                                                    }
                                                    var table = $('#CustomerEnterpriseDashboardDataTable').DataTable({
                                                        lengthChange: false,
                                                        //            dom: 'Bfrtip',
                                                        //            buttons: [
                                                        //                'excel', 'csv',
                                                        //                {
                                                        //                    extend: 'colvis',
                                                        //                    text: "Columns selection",
                                                        //                    postfixButtons: ['colvisRestore']
                                                        //                },
                                                        //            ],
                                                        //            responsive: true,
                                                        "ajax": {
                                                            "url": "#dashboard/customerEnterprise",
                                                            async: false,
                                                            "data": function (d) {
                                                                d.reportType = "CUSTOMER";
                                                                d.interval = $("#DashboardTimeInterval").val();
                                                            },
                                                            error: function (xhr, status, err) {
                                                                if (xhr.status == 401) {
                                                                    window.location.href = "#";
                                                                }
                                                            },
                                                            beforeSend: function () {
                                                                //formLoading(1);
                                                            }
                                                        },
                                                        serverSide: true,
                                                        searching: false,
                                                        scrollY: "300px",
                                                        scrollX: true,
                                                        scrollCollapse: true,
                                                        paging: false,
                                                        info: false,
                                                        columns: columnsList,
                                                    });
                                                    table.buttons().container().appendTo('#CustomerEnterpriseDashboardDataTable_wrapper .col-md-6:eq(0)');
                                                    setInterval(function () {
                                                        $('#CustomerEnterpriseDashboardDataTable').DataTable().ajax.reload();
                                                    }, 60000);
                                                    var vendorTable = $('#VendorEnterpriseDashboardDataTable').DataTable({
                                                        lengthChange: false,
                                                        //            dom: 'Bfrtip',
                                                        //            buttons: [
                                                        //                'excel', 'csv',
                                                        //                {
                                                        //                    extend: 'colvis',
                                                        //                    text: "Columns selection",
                                                        //                    postfixButtons: ['colvisRestore']
                                                        //                },
                                                        //            ],
                                                        //            responsive: true,
                                                        "ajax": {
                                                            "url": "#dashboard/customerEnterprise",
                                                            async: false,
                                                            "data": function (d) {
                                                                d.reportType = "VENDOR";
                                                                d.interval = $("#DashboardTimeInterval").val();
                                                            },
                                                            error: function (xhr, status, err) {
                                                                if (xhr.status == 401) {
                                                                    window.location.href = "#";
                                                                }
                                                            }
                                                        },
                                                        serverSide: true,
                                                        searching: false,
                                                        scrollY: "300px",
                                                        scrollX: true,
                                                        scrollCollapse: true,
                                                        paging: false,
                                                        info: false,
                                                        columns: columnsList,
                                                    });
                                                    vendorTable.buttons().container().appendTo('#VendorEnterpriseDashboardDataTable_wrapper .col-md-6:eq(0)');
                                                    setInterval(function () {
                                                        $('#VendorEnterpriseDashboardDataTable').DataTable().ajax.reload();
                                                    }, 60000);
                                                    var customerTrunkTable = $('#CustomerTrunkDashboardDataTable').DataTable({
                                                        lengthChange: false,
                                                        //            dom: 'Bfrtip',
                                                        //            buttons: [
                                                        //                'excel', 'csv',
                                                        //                {
                                                        //                    extend: 'colvis',
                                                        //                    text: "Columns selection",
                                                        //                    postfixButtons: ['colvisRestore']
                                                        //                },
                                                        //            ],
                                                        //            responsive: true,
                                                        "ajax": {
                                                            "url": "#dashboard/customerEnterprise",
                                                            async: false,
                                                            "data": function (d) {
                                                                d.reportType = "CUSTOMER_TRUNK";
                                                                d.interval = $("#DashboardTimeInterval").val();
                                                            },
                                                            error: function (xhr, status, err) {
                                                                if (xhr.status == 401) {
                                                                    window.location.href = "#";
                                                                }
                                                            }
                                                        },
                                                        serverSide: true,
                                                        searching: false,
                                                        scrollY: "300px",
                                                        scrollX: true,
                                                        scrollCollapse: true,
                                                        paging: false,
                                                        info: false,
                                                        columns: columnsList,
                                                    });
                                                    customerTrunkTable.buttons().container().appendTo('#CustomerTrunkDashboardDataTable_wrapper .col-md-6:eq(0)');
                                                    setInterval(function () {
                                                        $('#CustomerTrunkDashboardDataTable').DataTable().ajax.reload();
                                                    }, 60000);
                                                    var vendorTrunkTable = $('#VendorTrunkDashboardDataTable').DataTable({
                                                        lengthChange: false,
                                                        //            dom: 'Bfrtip',
                                                        //            buttons: [
                                                        //                'excel', 'csv',
                                                        //                {
                                                        //                    extend: 'colvis',
                                                        //                    text: "Columns selection",
                                                        //                    postfixButtons: ['colvisRestore']
                                                        //                },
                                                        //            ],
                                                        //            responsive: true,
                                                        "ajax": {
                                                            "url": "#dashboard/customerEnterprise",
                                                            async: false,
                                                            "data": function (d) {
                                                                d.reportType = "VENDOR_TRUNK";
                                                                d.interval = $("#DashboardTimeInterval").val();
                                                            },
                                                            error: function (xhr, status, err) {
                                                                if (xhr.status == 401) {
                                                                    window.location.href = "#";
                                                                }
                                                            },
                                                            beforeSend: function () {
                                                                //formLoading(0);
                                                            }
                                                        },
                                                        serverSide: true,
                                                        searching: false,
                                                        scrollY: "300px",
                                                        scrollX: true,
                                                        scrollCollapse: true,
                                                        paging: false,
                                                        info: false,
                                                        columns: columnsList,
                                                    });
                                                    vendorTrunkTable.buttons().container().appendTo('#VendorTrunkDashboardDataTable_wrapper .col-md-6:eq(0)');
                                                    setInterval(function () {
                                                        $('#VendorTrunkDashboardDataTable').DataTable().ajax.reload();
                                                    }, 60000);
                                                });
                                                /**
                                                 * refreshDashboard
                                                 */
                                                function refreshDashboard() {
                                                    formLoading(1);
                                                    $('#CustomerEnterpriseDashboardDataTable').DataTable().ajax.reload();
                                                    $('#VendorEnterpriseDashboardDataTable').DataTable().ajax.reload();
                                                    $('#CustomerTrunkDashboardDataTable').DataTable().ajax.reload();
                                                    $('#VendorTrunkDashboardDataTable').DataTable().ajax.reload();
                                                    formLoading(0);
                                                    lodChartData();
                                                }

                                                /* LINE CHART */

                                                var chart_options = {
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                    animation: {
                                                        duration: 0
                                                    },
                                                    legend: {
                                                        display: false,
                                                        labels: {
                                                            display: true
                                                        }
                                                    },
                                                    scales: {
                                                        yAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                    fontColor: "#000000",
                                                                },
                                                                gridLines: {
                                                                    display: true,
                                                                    color: 'rgba(171, 167, 167,0.2)',
                                                                    drawBorder: false
                                                                },
                                                            }],
                                                        xAxes: [{
                                                                // display: false,
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                    fontColor: "#000000",
                                                                },
                                                                gridLines: {
                                                                    display: true,
                                                                    color: 'rgba(171, 167, 167,0.2)',
                                                                    drawBorder: false
                                                                },
                                                            }]
                                                    }
                                                };
                                                /** START: ENTERPRISE SELECT: This is multiple selection for the customer enterprise selection */
                                                $('.CUST_ENT_SELECT').SumoSelect({
                                                    okCancelInMulti: true,
                                                    selectAll: true,
                                                    search: true,
                                                    searchText: 'SELECT ENTERPRISE',
                                                    placeholder: "SELECT ENTERPRISE",
                                                    triggerChangeCombined: true,
                                                });
                                                var CUST_ENT_SELECTED_LIST = $('.CUST_ENT_SELECT').val();
                                                $('.CUST_ENT_SELECT').change(function (event) {
                                                    if ($(this).val().length > 10) {
                                                        // if ($(this).val().length > 100) {
                                                        var CUST_ENT_SELECTED_LIST_OLD = CUST_ENT_SELECTED_LIST;
                                                        alert('Kindly choose maximum 10 enterprises.');
                                                        var $this = $(this);
                                                        console.log(CUST_ENT_SELECTED_LIST);
                                                        $this[0].sumo.unSelectAll();
                                                        $.each(CUST_ENT_SELECTED_LIST_OLD, function (i, e) {
                                                            $this[0].sumo.selectItem($this.find('option[value="' + e + '"]').index());
                                                        });
                                                    } else {
                                                        CUST_ENT_SELECTED_LIST = $(this).val();
                                                    }
                                                    console.log(CUST_ENT_SELECTED_LIST);
                                                });
                                                var CUST_ENT_CHART = document.getElementById('CUST_ENT_CHART');
                                                window.CUST_ENT_CHART_WIN = new Chart(CUST_ENT_CHART, {
                                                    type: 'line',
                                                    data: {
                                                        labels: [],
                                                        datasets: []
                                                    },
                                                    responsive: true,
                                                    options: chart_options
                                                });
                                                function getChartDataCE(reportType) {
                                                    var apiUrl = "#dashboard/chartData";
                                                    var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                                                    var enterprise_list = CUST_ENT_SELECTED_LIST;
                                                    var json = {
                                                        _token: CSRF_TOKEN,
                                                        interval: $("#DashboardTimeInterval").val(),
                                                        enterprise_list: enterprise_list,
                                                        reportType: reportType,
                                                    }

                                                    axios.post(apiUrl, json).then(res => {
                                                        if (res.status == 200 && res.data) {
                                                            if (res.data && res.data.chart_data) {
                                                                window.CUST_ENT_CHART_WIN.data.labels = res.data.chart_data.labels;
                                                                window.CUST_ENT_CHART_WIN.data.datasets = res.data.chart_data.datasets;
                                                                window.CUST_ENT_CHART_WIN.update();
                                                            }
                                                        }
                                                    }).catch(error => {
                                                        console.log(error)
                                                    })
                                                }

                                                /** END: ENTERPRISE SELECT: This is multiple selection for the customer enterprise selection */

                                                $('.VEND_ENT_SELECT').SumoSelect({
                                                    okCancelInMulti: true,
                                                    selectAll: true,
                                                    search: true,
                                                    searchText: 'SELECT ENTERPRISE',
                                                    placeholder: "SELECT ENTERPRISE",
                                                    triggerChangeCombined: true,
                                                });
                                                var VEND_ENT_SELECTED_LIST = $('.VEND_ENT_SELECT').val();
                                                $('.VEND_ENT_SELECT').change(function (event) {
                                                    if ($(this).val().length > 10) {
                                                        // if ($(this).val().length > 100) {
                                                        var VEND_ENT_SELECTED_LIST_OLD = VEND_ENT_SELECTED_LIST;
                                                        alert('Kindly choose maximum 10 enterprises.');
                                                        var $this = $(this);
                                                        console.log(VEND_ENT_SELECTED_LIST);
                                                        $this[0].sumo.unSelectAll();
                                                        $.each(VEND_ENT_SELECTED_LIST_OLD, function (i, e) {
                                                            $this[0].sumo.selectItem($this.find('option[value="' + e + '"]').index());
                                                        });
                                                    } else {
                                                        VEND_ENT_SELECTED_LIST = $(this).val();
                                                    }
                                                    console.log(VEND_ENT_SELECTED_LIST);
                                                });
                                                var VEND_ENT_CHART = document.getElementById('VEND_ENT_CHART');
                                                window.VEND_ENT_CHART_WIN = new Chart(VEND_ENT_CHART, {
                                                    type: 'line',
                                                    data: {
                                                        labels: [],
                                                        datasets: []
                                                    },
                                                    responsive: true,
                                                    options: chart_options
                                                });
                                                function getChartDataVE(reportType) {
                                                    var apiUrl = "#dashboard/chartData";
                                                    var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                                                    var enterprise_list = VEND_ENT_SELECTED_LIST;
                                                    var json = {
                                                        _token: CSRF_TOKEN,
                                                        interval: $("#DashboardTimeInterval").val(),
                                                        enterprise_list: enterprise_list,
                                                        reportType: reportType,
                                                    }

                                                    axios.post(apiUrl, json).then(res => {
                                                        if (res.status == 200 && res.data) {
                                                            if (res.data && res.data.chart_data) {
                                                                window.VEND_ENT_CHART_WIN.data.labels = res.data.chart_data.labels;
                                                                window.VEND_ENT_CHART_WIN.data.datasets = res.data.chart_data.datasets;
                                                                window.VEND_ENT_CHART_WIN.update();
                                                            }
                                                        }
                                                    }).catch(error => {
                                                        console.log(error)
                                                    })
                                                }

                                                /** STACKED BAR CHART **/
                                                var bar_options = {
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                    animation: {
                                                        duration: 0
                                                    },
                                                    legend: {
                                                        display: false,
                                                        labels: {
                                                            display: true
                                                        }
                                                    },
                                                    scales: {
                                                        yAxes: [{
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                    fontColor: "#000000",
                                                                },
                                                                gridLines: {
                                                                    display: true,
                                                                    color: 'rgba(171, 167, 167,0.2)',
                                                                    drawBorder: false,
                                                                },
                                                            }],
                                                        xAxes: [{
                                                                display: false,
                                                                maxBarThickness: 25,
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                    fontColor: "#000000",
                                                                },
                                                                gridLines: {
                                                                    display: false,
                                                                    color: 'rgba(171, 167, 167,0.2)',
                                                                    drawBorder: false
                                                                },
                                                            }]
                                                    }
                                                };
                                                var TOP_CUST_ENT_BAR = document.getElementById('TOP_CUST_ENT_BAR');
                                                window.TOP_CUST_ENT_BAR_ = new Chart(TOP_CUST_ENT_BAR, {
                                                    type: 'bar',
                                                    data: {
                                                        labels: [],
                                                        datasets: []
                                                    },
                                                    responsive: true,
                                                    options: bar_options
                                                });
                                                function getTopChartDataCE(reportType, limit = 10) {
                                                    var apiUrl = "#dashboard/topChartData";
                                                    var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                                                    var json = {
                                                        _token: CSRF_TOKEN,
                                                        interval: $("#DashboardTimeInterval").val(),
                                                        reportType: reportType,
                                                        limit: limit,
                                                    }
                                                    axios.post(apiUrl, json)
                                                            .then(res => {
                                                                if (res.status == 200 && res.data) {
                                                                    if (res.data && res.data.chart_data) {
                                                                        window.TOP_CUST_ENT_BAR_.data = res.data.chart_data;
                                                                        window.TOP_CUST_ENT_BAR_.update();
                                                                    }
                                                                }
                                                            })
                                                            .catch(error => {
                                                                console.log(error)
                                                            })
                                                }

                                                var TOP_VEND_ENT_BAR = document.getElementById('TOP_VEND_ENT_BAR');
                                                window.TOP_VEND_ENT_BAR_ = new Chart(TOP_VEND_ENT_BAR, {
                                                    type: 'bar',
                                                    data: {
                                                        labels: [],
                                                        datasets: []
                                                    },
                                                    responsive: true,
                                                    options: bar_options
                                                });
                                                function getTopChartDataVE(reportType, limit = 10) {
                                                    var apiUrl = "#dashboard/topChartData";
                                                    var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
                                                    var json = {
                                                        _token: CSRF_TOKEN,
                                                        interval: $("#DashboardTimeInterval").val(),
                                                        reportType: reportType,
                                                        limit: limit,
                                                    }
                                                    axios.post(apiUrl, json)
                                                            .then(res => {
                                                                if (res.status == 200 && res.data) {
                                                                    if (res.data && res.data.chart_data) {
                                                                        window.TOP_VEND_ENT_BAR_.data = res.data.chart_data;
                                                                        window.TOP_VEND_ENT_BAR_.update();
                                                                    }
                                                                }
                                                            })
                                                            .catch(error => {
                                                                console.log(error)
                                                            })
                                                }

                                                function lodChartData() {
                                                    getChartDataCE("CUST_ENT");
                                                    getChartDataVE("VEND_ENT");
                                                    getTopChartDataCE("CUST_ENT_BAR");
                                                    getTopChartDataVE("VEND_ENT_BAR");
                                                }

                                                lodChartData();
                                                setInterval(() => {
                                                    lodChartData();
                                                }, 60000);
                    </script>
                    <div id="confirmTempTableData"></div>
                </div>
            </div>
            <!-- Container closed -->

            <!-- Footer opened -->
            <div class="main-footer ht-40">
                <div class="container-fluid pd-t-0-f ht-100p">
                    <span>Copyright © 2025 <a href="javascript:void(0)">VNS</a>.</span>
                </div>
            </div>
            <!-- Footer closed -->

        </div>
        <!-- End Page -->

        <!-- Back-to-top -->
        <!--<a href="#top" id="back-to-top"><i class="las la-angle-double-up"></i></a>-->
        <!-- Bootstrap Bundle js -->
        <script src="assets/plugins/bootstrap/js/popper.min.js"></script>
        <script src="assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- Ionicons js -->
        <script src="assets/plugins/ionicons/ionicons.js"></script>

        <!-- Moment js -->
        <script src="assets/plugins/moment/moment.js"></script>

        <!-- Include Date Range Picker v3.14.1 -->
        <script src="js/daterangepicker.min.js"></script>


        <!--Internal Sparkline js -->
        <script src="#assets/plugins/jquery-sparkline/jquery.sparkline.min.js"></script>

        <!-- Moment js -->
        <script src="assets/plugins/raphael/raphael.min.js"></script>

        <!-- Internal Select2.min js -->
        <script src="assets/plugins/select2/js/select2.min.js"></script>

        <!--Internal Sumoselect js-->
        <script src="#assets/plugins/sumoselect/jquery.sumoselect.js"></script>

        <!-- Internal sweet-alert.min js -->
        <script src="assets/plugins/sweet-alert/sweetalert.min.js"></script>

        <!--- Internal Accordion Js -->
        <script src="assets/plugins/accordion/accordion.min.js"></script>

        <!--Internal  jquery-simple-datetimepicker js -->
        <!--<script src="#js/bootstrap-datetimepicker.min.js"></script>-->

        <!-- Eva-icons js -->
        <script src="assets/js/eva-icons.min.js"></script>

        <!-- Horizontalmenu js-->
        <script src="assets/plugins/horizontal-menu/horizontal-menu-2/horizontal-menu.js"></script>

        <!-- Sticky js -->
        <script src="assets/js/sticky.js"></script>
        <!-- Tooltip js -->
        <script src="assets/js/tooltip.js"></script>

        <!-- custom js -->
        <script src="assets/js/custom.js"></script>
        <script src="assets/js/jquery.vmap.sampledata.js"></script>


        <script>
                                                $(document).find('.horizontalMenu-list .sub-menu').each(function () {
                                                    if ($(this).find('li').length == 0) {
                                                        $(this).parent().hide();
                                                    }
                                                });
                                                function TopBottomSection() {
                                                    $('.main-header').fadeIn();
                                                    $('.main-footer').fadeIn();
                                                    $('.top_bottom_collapse').hide();
                                                    $('.top_bottom_expand').show();
                                                }
                                                if ($(window).width() > 991.98) {
                                                    TopBottomSection()
                                                }


                                                setInterval(function () {
                                                    $.ajax({
                                                        url: app_url + '/setIntervalData',
                                                        data: {},
                                                        method: 'POST',
                                                        type: 'POST',
                                                        dataType: 'JSON',
                                                        success: function (response) {},
                                                        error: function () {}
                                                    })
                                                }, 10000);
        </script>
        <style>
            .desktop-logo {
                height: 3rem;
                text-align: center;
                margin: 0 auto;
                justify-content: center;
            }
        </style>
    </body>

</html>