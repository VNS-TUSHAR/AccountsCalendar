<!DOCTYPE html>
<html lang="en">
<%@page import="java.util.Calendar"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="java.time.LocalDateTime"%>
<%@page import="java.time.format.DateTimeFormatter"%>
<%
String responseCode = (String)request.getAttribute("responseCode");
String schedule = (String)request.getAttribute("schedule");
%>
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="0ouAGTkuETYDnMBMcE0FhB6labH1anUhbUbPGvFm" />
    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Title -->
    <title>SMS</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Favicon -->
    <link rel="icon" href="image/company/01.png" type="image/x-icon" />

    <!-- Icons css -->
    <link href="assets/css/icons.css" rel="stylesheet">

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
	<link rel="stylesheet" href="assets/css/mobile.css">
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
	    <style type="text/css">
   .toggle-container {
            position: relative;
            display: flex;
            align-items: center;
        }

        .toggle {
            display: none; /* Hide the checkbox */
        }

        .toggle-label {
           width: 135px;
		    height: 43px;
		    background-color: #ccc;
		    border-radius: 7px;
		    cursor: pointer;
		    position: relative;
		    transition: background-color 0.3s;
		    margin-top: 15px;
        }

        .toggle-label:before {
            content: '';
		    position: absolute;
		    width: 18px;
		    height: 37px;
		    border-radius: 20%;
		    background: white;
		    top: 3px;
		    left: 3px;
		    transition: transform 0.3s;
        }

        .toggle:checked + .toggle-label {
            background-color: #3c8dbc;
        }
        
        .toggle1:checked + .toggle-label {
            background-color: #f7bf65;
        }
        
        .toggle2:checked + .toggle-label {
            background-color: #4CAF50;
        }

        .toggle:checked + .toggle-label:before {
            transform: translateX(112px);
        }

        .label-text {
            font-size: 16px;
        }
        .mt-20 {
    		margin-top: 30px;
		}
		
   </style>
</head>

<body class="main-body">
    <input type="hidden" id="loginUserID" value="3" />
    <!-- <div id="loading" style="display: none;"></div> -->
    <!-- Loader -->
 
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
				<div class="card">
                            <div>
                                <div class="panel panel-primary tabs-style-2">
                                    <div class=" tab-menu-heading">
                                        <div class="tabs-menu1">
                                            <ul class="nav panel-tabs main-nav-line">
                                                <li>
                                                    <a href="javascript:void(0)" onclick="page_redirect('dashboard.html'); return false;" class="nav-link active" data-bs-toggle="tab">
                                        SMS
                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" onclick="page_redirect('Whatsapp.html'); return false;" class="nav-link " data-bs-toggle="tab">
                                        Whatsapp
                                    </a>
                                                </li> <li>
                                                    <a href="javascript:void(0)" onclick="page_redirect('RCS.html'); return false;" class="nav-link " data-bs-toggle="tab">
                                        RCS
                                    </a>
                                                </li> <li>
                                                    <a href="javascript:void(0)" onclick="page_redirect('Voice.html'); return false;" class="nav-link " data-bs-toggle="tab">
                                        Voice
                                    </a>
                                                </li> 
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
						
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
                                    Dashboard
                                </a>
                            </li>
                           
                            <li aria-haspopup="true">
                                <a href="javascript:void(0)" class="sub-icon">
                                    <i class="fa fa-university"></i>
                                    Compose SMS
                                   <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="sms.jsp" class="slide-item">Quick SMS</a></li>
                                   <!-- <li aria-haspopup="true"><a href="#" class="slide-item">Charges Calculator</a></li>
                                    <li aria-haspopup="true"><a href="#invoices" class="slide-item">Invoice</a></li>
                                    <li aria-haspopup="true"><a href="#currency" class="slide-item">Currency</a></li>
                                    <li aria-haspopup="true"><a href="#currencyconversion" class="slide-item">Currency Exchange</a></li>
                                    <li aria-haspopup="true"><a href="#enterprisebalance" class="slide-item">Enterprise Balance</a></li>
                                    <li aria-haspopup="true"><a href="#billingcycle" class="slide-item">Billing Cycle</a></li>
                                    <li aria-haspopup="true"><a href="#vendorinvoice" class="slide-item">Vendor Invoice</a></li>
                                    <li aria-haspopup="true"><a href="#soa" class="slide-item">SOA</a></li> -->
                                </ul>
                            </li>
                            <li aria-haspopup="true">
                                <a href="javascript:void(0)" class="sub-icon">
                                    <i class="fa fa-table"></i>
                                    SMS Schedule
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="#productcategory" class="slide-item">Product Category</a></li>
                                    <li aria-haspopup="true"><a href="#country" class="slide-item">Country</a></li>
                                    <li aria-haspopup="true"><a href="#mastercode" class="slide-item">Master Table</a></li>
                                    <li aria-haspopup="true"><a href="#mccmnc" class="slide-item">MCCMNC Unique Codes</a></li>
                                    <li aria-haspopup="true"><a href="#moreferencebook" class="slide-item">MO Reference Book</a></li>
                                    <li aria-haspopup="true" class="sub-menu-sub">
                                        <span class="horizontalMenu-click02">
                                            <i class="horizontalMenu-arrow fe fe-chevron-down"></i>
                                        </span>
                                        <a href="javascript:void(0)">
                                            Sender ID
                                        </a>
                                        <ul class="sub-menu">
                                            <li aria-haspopup="true"><a href="#smtpmailaccount" class="slide-item">IMAP Mail Account</a></li>
                                            <li aria-haspopup="true"><a href="#filetemplate" class="slide-item">File Template</a></li>
                                            <li aria-haspopup="true"><a href="#autouploadrules" class="slide-item">Auto Upload Rules</a></li>
                                            <li aria-haspopup="true"><a href="#autouploadreport" class="slide-item">Auto Upload Report</a></li>
                                            <li aria-haspopup="true"><a href="#ratetable" class="slide-item">Rate Table</a></li>
                                        </ul>
                                    </li>
                                    <li aria-haspopup="true" class="sub-menu-sub">
                                        <span class="horizontalMenu-click02">
                                            <i class="horizontalMenu-arrow fe fe-chevron-down"></i>
                                        </span>
                                        <a href="javascript:void(0)">
                                           Message Template
                                        </a>
                                        <ul class="sub-menu">
                                            <li aria-haspopup="true"><a href="#routerulegroup" class="slide-item">Route Rule Group</a></li>
                                            <li aria-haspopup="true"><a href="#routetable" class="slide-item">Route Table</a></li>
                                            <li aria-haspopup="true"><a href="#routerule" class="slide-item">Route Rule</a></li>
                                        </ul>
                                    </li>
                                    <li aria-haspopup="true"><a href="#lcr" class="slide-item">LCR</a></li>
                                    <li aria-haspopup="true"><a href="#reprocessing" class="slide-item">Re-Rating</a></li>
                                    <li aria-haspopup="true"><a href="#ratelookup" class="slide-item">Rate Lookup</a></li>
                                </ul>
                            </li>
                            <li aria-haspopup="true">
                                <a href="javascript:void(0)" class="sub-icon">
                                    <i class="fa fa-sitemap"></i>
                                    Sender ID
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="#digitrule" class="slide-item">Translation Rule</a></li>
                                    <li aria-haspopup="true"><a href="#digitrulegroup" class="slide-item">Translation Rule Group</a></li>
                                    <li aria-haspopup="true" class="sub-menu-sub">
                                        <span class="horizontalMenu-click02">
                                            <i class="horizontalMenu-arrow fe fe-chevron-down"></i>
                                        </span>
                                        <a href="javascript:void(0)">
                                            HLR
                                        </a>
                                        <ul class="sub-menu">
                                            <li aria-haspopup="true"><a href="#hlrprovider" class="slide-item">HLR Provider</a></li>
                                            <li aria-haspopup="true"><a href="#hlrrule" class="slide-item">HLR Rule</a></li>
                                            <li aria-haspopup="true"><a href="#hlrrulegroup" class="slide-item">HLR Rule Group</a></li>
                                        </ul>
                                    </li>
                                    <li aria-haspopup="true"><a href="#notification" class="slide-item">Notification</a></li>
                                    <li aria-haspopup="true"><a href="#emaillogs" class="slide-item">Email Logs</a></li>
                                    <li aria-haspopup="true"><a href="#numberlist" class="slide-item">Number List</a></li>
                                    <li aria-haspopup="true"><a href="#vendorstats" class="slide-item">Vendor Stats</a></li>
                                    <li aria-haspopup="true"><a href="#firewall/banip" class="slide-item">Firewall</a></li>
                                </ul>
                            </li>
                            <!-- <li aria-haspopup="true">
                                <a href="javascript:void(0)" class="sub-icon">
                                    <i class="fas fa-tachometer-alt"></i>
                                    Observation Deck
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="#signalingdeck" class="slide-item">Signaling Deck</a></li>
                                    <li aria-haspopup="true"><a href="#edrdeck" class="slide-item">EDR Search</a></li>
                                    <li aria-haspopup="true"><a href="#edrdownloadtemplate" class="slide-item">EDR Template</a></li>
                                    <li aria-haspopup="true"><a href="#edrdownload" class="slide-item">EDR Download</a></li>
                                    <li aria-haspopup="true"><a href="#rouetsimulator" class="slide-item">Route Simulator</a></li>
                                    <li aria-haspopup="true"><a href="#providerstatus" class="slide-item">Network Status</a></li>
                                    <li aria-haspopup="true"><a href="#networktrace" class="slide-item">PCAP Trace</a></li>
                                </ul>
                            </li> -->
                            <li aria-haspopup="true">
                                <a href="javascript:void(0)" class="sub-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" opacity=".3"/>
                                    <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
                                    </svg>
                                    Message Template
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="#report/0" class="slide-item">Master Report</a></li>
                                    <li aria-haspopup="true"><a href="#report/1" class="slide-item">Customize</a></li>
                                    <li aria-haspopup="true"><a href="#report/2" class="slide-item">Enterprise</a></li>
                                    <li aria-haspopup="true"><a href="#report/10" class="slide-item">Master Grouping</a></li>
                                    <li aria-haspopup="true"><a href="#report/11" class="slide-item">Usage Enterprise</a></li>
                                    <li aria-haspopup="true"><a href="#analytics" class="slide-item">Analytics Report</a></li>
                                    <li aria-haspopup="true"><a href="#bilateral" class="slide-item">Bilateral Report</a></li>
                                </ul>
                            </li>
                            <li aria-haspopup="true">
                                <a href="javascript:void(0)" class="sub-icon ">
                                    <i class="fa fa-users"></i>
                                    SMS Report
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="#businesscompany" class="slide-item">Business Company</a></li>
                                    <li aria-haspopup="true"><a href="#departments" class="slide-item ">Departments</a></li>
                                    <li aria-haspopup="true"><a href="#users" class="slide-item">Users</a></li>
                                    <li aria-haspopup="true"><a href="#guiaccessgroup" class="slide-item ">GUI Access Group</a></li>
                                    <li aria-haspopup="true"><a href="#audit_trial" class="slide-item">Audit Trail</a></li>
                                    <li aria-haspopup="true"><a href="#userlicense" class="slide-item">License</a></li>
                                    <li aria-haspopup="true"><a href="#emailtemplate" class="slide-item">Email Template</a></li>
                                    <li aria-haspopup="true"><a href="#customerusers" class="slide-item">Customer Portal</a></li>
                                </ul>
                            </li>
                            <li aria-haspopup="true" class="top_bottom_ in_mobile_view_hide">
                                <a data-bs-placement="left" data-bs-toggle="tooltip-gray" title="Collapase" href="javascript:void(0)" onclick="TopBottomSectionToggle('show')" class="slide-item top_bottom_collapse" style="display: block;">
                                    <img src="#image/icon/bi-arrows-collapse.svg">
                                </a>
                                <a data-bs-placement="left" data-bs-toggle="tooltip-gray" title="Expand" href="javascript:void(0)" onclick="TopBottomSectionToggle('hide')" class="slide-item top_bottom_expand" style="display: none;">
                                    <img src="#image/icon/bi-arrows-expand.svg">
                                </a>
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

            <!-- container opened -->
            <div class="container">
            <div class="breadcrumb-header justify-content-between">
                    <div class="my-auto">
                        <div class="d-flex">
                            <h4 class="content-title mb-0 my-auto">Quick SMS</h4>
                        </div>
                    </div>
                 
                </div>
					<div class="row">
	<div class="col-lg-9 col-xl-9 col-md-9 col-sm-9">
          
            <div class="card  box-shadow-0 ">
                <div class="card-header">
                    <h4 class="card-title mb-1">Send Quick SMS</h4>
                </div>
                <div class="card-body pt-0">
                    <div class="">
					
					 <div class="form-group">
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="row row-xs align-items-center mg-b-10">
                                        <div class="col-md-12 mg-t-5 mg-md-t-0">
                                            <label for="sendtype" class="control-label">Send Type</label>
                                            <select id="sendtype" name="sendtype" class="form-control select2 select2-hidden-accessible" data-select2-id="sendtype" tabindex="-1" aria-hidden="true">
                                <option value="" data-select2-id="2">Select</option>
                                                                <option value="Single">Single</option>
                                                                
																</select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="row row-xs align-items-center mg-b-10">
                                        <div class="col-md-12 mg-t-5 mg-md-t-0">
                                            <label for="senderid" class="control-label">Sender ID</label>
                                           <select id="senderid" name="senderid" class="form-control select2 select2-hidden-accessible" data-select2-id="senderid" tabindex="-1" aria-hidden="true">
                                <option value="" data-select2-id="2">Select</option>
                                                                <option value="TESTIN">TESTIN</option>
                                                                
																</select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
						
                        <div class="form-group">
                            <label for="mobileno" class="control-label">Enter Mobile Numbers <span class="text-danger">*</span></label>
                            <textarea rows="3" class="form-control" id="mobileno" name="mobileno"></textarea>
                        </div>
                         <div class="form-group">
                            <label for="message" class="control-label">Text Message <span class="text-danger">*</span></label>
                            <textarea rows="5" class="form-control" id="message" name="message"></textarea>
                        </div>
                       
 <div class="form-group">
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="row row-xs align-items-center mg-b-10">
                                        <div class="col-md-12 mg-t-5 mg-md-t-0">
                                            <label for="dlt_tmp_list" class="control-label">DLT Templates List</label>
                                            <select id="dlt_tmp_list" name="dlt_tmp_list" class="form-control select2 select2-hidden-accessible" data-select2-id="dlt_tmp_list" tabindex="-1" aria-hidden="true">
                                <option value="" data-select2-id="2">Append DLT Templates</option>
                                                                <option value="Single">Single</option>
                                                                
																</select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="row row-xs align-items-center mg-b-10">
                                        <div class="col-md-12 mg-t-5 mg-md-t-0">
                                            <label for="dlt_tmp_id" class="control-label">DLT Template ID</label>
                                          <input type="text" name="dlt_tmp_id" id="dlt_tmp_id" class="form-control" >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
					 
                        <div class="form-group">
                            <div class="row">
                                <div class="col-lg-2 col-md-12">
                                    <div class="checkbox">
                                                                                                                                                                <label class="custom-checkbox custom-control">
                                            <input type="checkbox" name="schedulesms" value="1" data-checkboxes="mygroup" class="custom-control-input" id="schedulesms">
                                            <label for="schedulesms" class="custom-control-label mt-1">Schedule</label>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <!-- calander -->
									<div class="row row-xs align-items-center mg-b-10">
                                
                                <div class="col-md-6 mg-t-5 mg-md-t-0">
                                    <input type="text" class="form-control datepicker_yyyymmdd" name="FromDate" placeholder="FromDate" id="FromDate" autocomplete="off" value="2025-01-09">
                                </div>
                                <div class="col-md-4 mg-t-5 mg-md-t-0">
                                    <select class="form-control-custom" name="FromHours">
                                                                                                                                                                                                        <option value="00" selected="&quot;&quot;">
                                            00</option>
                                                                                                                                                                                                        <option value="01">
                                            01</option>
                                                                                                                                                                                                        <option value="02">
                                            02</option>
                                                                                                                                                                                                        <option value="03">
                                            03</option>
                                                                                                                                                                                                        <option value="04">
                                            04</option>
                                                                                                                                                                                                        <option value="05">
                                            05</option>
                                                                                                                                                                                                        <option value="06">
                                            06</option>
                                                                                                                                                                                                        <option value="07">
                                            07</option>
                                                                                                                                                                                                        <option value="08">
                                            08</option>
                                                                                                                                                                                                        <option value="09">
                                            09</option>
                                                                                                                                                                                                        <option value="10">
                                            10</option>
                                                                                                                                                                                                        <option value="11">
                                            11</option>
                                                                                                                                                                                                        <option value="12">
                                            12</option>
                                                                                                                                                                                                        <option value="13">
                                            13</option>
                                                                                                                                                                                                        <option value="14">
                                            14</option>
                                                                                                                                                                                                        <option value="15">
                                            15</option>
                                                                                                                                                                                                        <option value="16">
                                            16</option>
                                                                                                                                                                                                        <option value="17">
                                            17</option>
                                                                                                                                                                                                        <option value="18">
                                            18</option>
                                                                                                                                                                                                        <option value="19">
                                            19</option>
                                                                                                                                                                                                        <option value="20">
                                            20</option>
                                                                                                                                                                                                        <option value="21">
                                            21</option>
                                                                                                                                                                                                        <option value="22">
                                            22</option>
                                                                                                                                                                                                        <option value="23">
                                            23</option>
                                                                            </select>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
						
						<button type="button" data-toggle="tooltip" data-original-title="" id="btnsend" value="0" onclick="customerRateHirsoty(this.value); return false;" class="mb-1 btn btn-primary btn-sm margin-r-5 btnClassSetID" data-bs-original-title="" title=""><i class="fa"></i> Send</button>
						
                    </div>
                </div>
            </div>
        </div>
         
          	<div class="col-lg-3 col-xl-3 col-md-3 col-sm-3">
			 <div class="section-body col-md-3">
		   <!--  <div class="whatsapp-message"> -->				
							<div id="sticky-anchor"></div>
<div class="iphone">
    <div class="iphone-notch"></div>
    <div class="iphone-screen">
        <div class="iphone-header">
            <div class="iphone-status-bar">
                <span class="iphone-clock">4:00 PM</span>
                <div class="iphone-icons">
                    <span class="iphone-network">4G</span>
                    <span class="iphone-signal">&#x1F4F6;</span>
                    <span class="iphone-battery">&#x1F50B;</span>
                </div>
            </div>
            <div class="iphone-title-bar">
                <span>&larr;</span>
                <span>XX-FORMSD</span>
                <span>?</span>
            </div>
        </div>
        <div class="iphone-message-container">
            <div class="iphone-message-box">Your Message</div>
            <div class="iphone-timestamp">Today, 06:20 PM</div>
        </div>
    </div>
</div>

						</center>
					<!-- </div> -->
	    </div>
          
          </div>
          
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
        $(document).find('.horizontalMenu-list .sub-menu').each(function() {
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


        setInterval(function() {
            $.ajax({
                url: app_url + '/setIntervalData',
                data: {},
                method: 'POST',
                type: 'POST',
                dataType: 'JSON',
                success: function(response) {},
                error: function() {}
            })
        }, 10000);
    </script>
      <script type="text/javascript">
  <%
	// Create a Date object representing the current time
  Date now = new Date();
  
  // Create a SimpleDateFormat object with the desired format
  SimpleDateFormat formatter = new SimpleDateFormat("hh:mm a");
  
  // Format the current time
  String formattedTime = formatter.format(now);
  if(formattedTime != null){%>
  	document.getElementById("phone-time").innerHTML = "<%=formattedTime%>";
  <%}
	%>
	
	$(document).ready(function() {
		document.getElementById("schedule").value = "";
		document.getElementById("time").value = "";
	  });
		document.getElementById('check').addEventListener('click', function() {
	        var textField = document.getElementById('schedule');
	        if (textField.disabled) {
	            textField.disabled = false;
	            
	            <%
	        	// Get the current date and time
	            LocalDateTime now1 = LocalDateTime.now();
	            
	            // Define the desired format
	            DateTimeFormatter formatter1 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	            
	            // Format the current date and time
	            String formattedDateTime = now1.format(formatter1);
	            
	            if(formattedDateTime != null){%>
	        	  	document.getElementById("schedule").value = "<%=formattedDateTime%>";
	        	  <%}
	        		%>
	        } else {
	            textField.disabled = true;
	            document.getElementById("schedule").value = "";
	        }
	        
	        var textField1 = document.getElementById('time');
	        if (textField1.disabled) {
	            textField1.disabled = false;
	            
	            <%
	         // Create a Calendar instance
	            Calendar calendar = Calendar.getInstance();

	            // Add one hour to the current time
	            calendar.add(Calendar.HOUR, 1);

	            // Format the date and time
	            SimpleDateFormat sdf = new SimpleDateFormat("hh:mm a");
	            String formattedDate = sdf.format(calendar.getTime());
	            
	            if(formattedDate != null){%>
	        	  	document.getElementById("time").value = "<%=formattedDate%>";
	        	  <%}
	        		%>
	        } else {
	            textField1.disabled = true;
	            document.getElementById("time").value = "";
	        }
	    });
		
		
	function setSenderID() {
      var sender = document.getElementById("sender_id").value;
      document.getElementById("phone-from").innerHTML = sender;
  	}

	function showMessage(){
		if(document.getElementById('message').value == ""){
			document.getElementById('phone-message').innerHTML='Your Message';
		} else{
			document.getElementById('phone-message').innerHTML = document.getElementById('message').value;
		}
	}
	
	<%
	if(schedule != null){%>
		Swal.fire({
	        toast: true,
	        icon: 'success',
	        title: "Message Successfully Scheduled on <%=schedule%>",
	        animation: true,
	        width: '30%',
	        position: 'bottom',
	        showConfirmButton: false,
	        timer: 10000,
	        timerProgressBar: true,
	        didOpen: (toast) => {
	          toast.addEventListener('mouseenter', Swal.stopTimer)
	          toast.addEventListener('mouseleave', Swal.resumeTimer)
	        }
	      });
	<%}
	%>
	
  <%
	if(responseCode != null){
		if(responseCode.equals("200") == true){%>
		Swal.fire({
          toast: true,
          icon: 'success',
          title: "Send Message Success",
          animation: true,
          width: '30%',
          position: 'bottom',
          showConfirmButton: false,
          timer: 10000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        });
		<%} else {%>
			Swal.fire({
	            toast: true,
	            icon: 'error',
	            title: "SomeThing Went Wrong",
	            animation: true,
	            width: '30%',
	            position: 'bottom',
	            showConfirmButton: false,
	            timer: 10000,
	            timerProgressBar: true,
	            didOpen: (toast) => {
	              toast.addEventListener('mouseenter', Swal.stopTimer)
	              toast.addEventListener('mouseleave', Swal.resumeTimer)
	            }
	          });
		<%}
	}
	%>
  </script>
	<style>
	.desktop-logo {
    height: 3rem;
    text-align: center;
    margin: 0 auto;
    justify-content: center;
}
	</style>
	
<style>
    .iphone {
    width: 279px;
    height: 638px;
    background: #000;
    border-radius: 40px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    margin: 0px auto;
    overflow: hidden;
}

    .iphone-notch {
        width: 150px; /* Adjusted width for a thinner design */
        height: 25px;
        background: #000;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
    }

    .iphone-screen {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        padding-top: 35px; /* Space for the notch */
    }

    .iphone-header {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
    }

    .iphone-status-bar {
        height: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        font-size: 10px;
        color: #888;
    }

    .iphone-icons {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .iphone-clock {
        font-weight: bold;
    }

    .iphone-network {
        font-weight: bold;
    }

    .iphone-signal {
        font-size: 14px;
    }

    .iphone-battery {
        font-size: 14px;
    }

    .iphone-title-bar {
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        font-size: 12px;
    }

    .iphone-message-container {
        flex: 1;
        padding: 15px;
        background-color: #f8f9fa;
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: left;
    }

    .iphone-sender {
        font-size: 14px;
        font-weight: bold;
        color: #000;
        margin-bottom: 10px;
        text-align: center;
    }

    .iphone-message-box {
        background: #e9ecef;
        border-radius: 8px;
        padding: 10px 15px;
        color: #000;
        font-size: 12px;
        max-width: 250px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .iphone-timestamp {
        font-size: 10px;
        color: #888;
        margin-top: 8px;
        text-align: center;
    }
    .btn-sm {
    padding: 8px 20px;
    font-size: 17px;
}
</style>


</body>

</html>