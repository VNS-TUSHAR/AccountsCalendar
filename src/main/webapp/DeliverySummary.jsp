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
    <title>Alpha Messaging Platform</title>
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
                                <a class="dropdown-item" href="#users/3/edit" style=""><i class="bx bx-cog"></i> Edit Profile</a>
                                <a class="dropdown-item" href="#logout"><i class="bx bx-log-out"></i> Sign Out</a>
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
                                    <li aria-haspopup="true"><a href="sms.jsp" class="slide-item">Charges Calculator</a></li>
                                    <li aria-haspopup="true"><a href="#invoices" class="slide-item">Invoice</a></li>
                                    <li aria-haspopup="true"><a href="#currency" class="slide-item">Currency</a></li>
                                    <li aria-haspopup="true"><a href="#currencyconversion" class="slide-item">Currency Exchange</a></li>
                                    <li aria-haspopup="true"><a href="#enterprisebalance" class="slide-item">Enterprise Balance</a></li>
                                    <li aria-haspopup="true"><a href="#billingcycle" class="slide-item">Billing Cycle</a></li>
                                    <li aria-haspopup="true"><a href="#vendorinvoice" class="slide-item">Vendor Invoice</a></li>
                                    <li aria-haspopup="true"><a href="#soa" class="slide-item">SOA</a></li>
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
                                    <li aria-haspopup="true"><a href="DeliverySummary.jsp" class="slide-item">Delivery Summary</a></li>
                                   
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

                <form class="analyticreportfilter" name="FormReport" id="FormReport" method="POST" onsubmit="getReport(this.name, '#ReportData'); return false;">
                    <input type="hidden" id="CurrentDate" class="CurrentDate" value="2025-01-10">
                    <input type="hidden" id="Access_Margin" class="Access_Margin" value="1">
                    <input type="hidden" id="Access_Cost_Revenue" class="Access_Cost_Revenue" value="1">
                    <input type="hidden" id="Access_Rate" class="Access_Rate" value="1">
                    <div class="breadcrumb-header justify-content-between">
                        <div class="my-auto">
                            <div class="d-flex">
                                <h4 class="content-title mb-0 my-auto">
                                   Delivery Summary
                                </h4>
                            </div>
                        </div>

                        <div class="d-flex my-xl-auto right-content" id="recordAction">
                            <select id="AnalyticsIntervalTime" class="form-control-dashboard">
                                <option value="60000">1 Minute</option>
                                <option value="300000">5 Minutes</option>
                                <option value="900000">15 Minutes</option>
                            </select> &nbsp;
                            <button type="button" onclick="getReportRenderGridContent('analytics', 'drilldown');" class="btn btn-primary btn-sm margin-r-5">Search</button> &nbsp;
                            <a aria-controls="collapseReport" aria-expanded="true" class="btn ripple btn-primary btn-sm margin-r-5" data-bs-toggle="collapse" href="#collapseReport" role="button">+</a>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12 p-0">
                        <div class="card collapse show" id="collapseReport">
                            <div class="card-body pb-0 pt-2 px-2">
                                <!--                <div class="main-content-label mg-b-5">
                                    Search Criteria
                                </div>-->
                                <!--<hr>-->
                                <div class="pd-sm-0-f">

                                    <div class="row" id="ReportCustom">
                                        <div class="col-lg-3 col-md-12 hidden">
                                            <div class="row row-xs align-items-center mg-b-10">
                                                <div class="col-md-3 text-right">
                                                    <label for="ReportBy" class="control-label"><b>Report By</b></label>
                                                </div>
                                                <div class="col-md-9 mg-t-5 mg-md-t-0">
                                                    <input type="hidden" name="ReportBy" value="">
                                                    <select class="form-control-custom" id="ReportBy">
                                                                                                                                                                                                        <option value="Customer" >Customer</option>
                                                                                                                                                                                                        <option value="TrunkName" >Customer Trunk</option>
                                                                                                                                                                                                        <option value="Country" >Customer Country</option>
                                                                                                                                                                                                        <option value="Network" >Customer Network</option>
                                                                                                                                                                                                        <option value="CustomerMCCMNC" >Customer MCCMNC</option>
                                                                                                                                                                                                        <option value="VendorName" >Vendor</option>
                                                                                                                                                                                                        <option value="VendorTrunk" >Vendor Trunk</option>
                                                                                                                                                                                                        <option value="VendorCountry" >Vendor Country</option>
                                                                                                                                                                                                        <option value="VendorNetwork" >Vendor Network</option>
                                                                                                                                                                                                        <option value="VendorMCCMNC" >Vendor MCCMNC</option>
                                                                                                                                                                                                        <option value="AccountManager" >Customer Account Manager</option>
                                                                                                                                                                                                        <option value="VendorAccountManager" >Vendor Account Manager</option>
                                                                                                                                                                                                        <option value="SenderID" >Sender ID</option>
                                                                            </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-12">
                                            <div class="row row-xs align-items-center mg-b-10">
                                                <div class="col-md-3 text-right">
                                                    <label for="Period" class="control-label"><b>Period</b></label>
                                                </div>
                                                <div class="col-md-9 mg-t-5 mg-md-t-0">
                                                    <select class="form-control-custom" name="Period" id="Period" onchange="changePeriodAnalyticsReport(this.value);">
                                                                                                                                                                                                        <option value="Minute" >Minute</option>
                                                                                                                                                                                                        <option value="Hour" >Hour</option>
                                                                                                                                                                                                        <option value="Day" >Day</option>
                                                                                                                                                                                                        <option value="Weekly" >Weekly</option>
                                                                                                                                                                                                        <option value="Monthly" >Monthly</option>
                                                                            </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-12 FromHoursRowDiv">
                                            <div class="row row-xs align-items-center mg-b-10">
                                                <div class="col-md-3 text-right">
                                                    <label for="FromDate" class="control-label"><b>From Date</b></label>
                                                </div>
                                                <div class="col-md-5 mg-t-5 mg-md-t-0 hidden" id="FromDateDiv">
                                                    <input type="text" class="form-control datepicker_yyyymmdd" name="FromDate" placeholder="FromDate" id="FromDate" autocomplete="off" value="2025-01-10">
                                                </div>
                                                <div class="col-md-4 mg-t-5 mg-md-t-0 FromHoursDiv">
                                                    <select class="form-control-custom" name="FromHours">
                                                                                                                                                                                                        <option value="00" selected=&quot;&quot;>00</option>
                                                                                                                                                                                                        <option value="01" >01</option>
                                                                                                                                                                                                        <option value="02" >02</option>
                                                                                                                                                                                                        <option value="03" >03</option>
                                                                                                                                                                                                        <option value="04" >04</option>
                                                                                                                                                                                                        <option value="05" >05</option>
                                                                                                                                                                                                        <option value="06" >06</option>
                                                                                                                                                                                                        <option value="07" >07</option>
                                                                                                                                                                                                        <option value="08" >08</option>
                                                                                                                                                                                                        <option value="09" >09</option>
                                                                                                                                                                                                        <option value="10" >10</option>
                                                                                                                                                                                                        <option value="11" >11</option>
                                                                                                                                                                                                        <option value="12" >12</option>
                                                                                                                                                                                                        <option value="13" >13</option>
                                                                                                                                                                                                        <option value="14" >14</option>
                                                                                                                                                                                                        <option value="15" >15</option>
                                                                                                                                                                                                        <option value="16" >16</option>
                                                                                                                                                                                                        <option value="17" >17</option>
                                                                                                                                                                                                        <option value="18" >18</option>
                                                                                                                                                                                                        <option value="19" >19</option>
                                                                                                                                                                                                        <option value="20" >20</option>
                                                                                                                                                                                                        <option value="21" >21</option>
                                                                                                                                                                                                        <option value="22" >22</option>
                                                                                                                                                                                                        <option value="23" >23</option>
                                                                            </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-12 ToDateRowDiv">
                                            <div class="row row-xs align-items-center mg-b-10">
                                                <div class="col-md-3 text-right">
                                                    <label for="ToDate" class="control-label"><b>To Date</b></label>
                                                </div>
                                                <div class="col-md-5 mg-t-5 mg-md-t-0 hidden" id="ToDateDiv">
                                                    <input type="text" class="form-control datepicker_yyyymmdd" name="ToDate" placeholder="ToDate" id="ToDate" autocomplete="off" value="2025-01-10">
                                                </div>
                                                <div class="col-md-4 mg-t-5 mg-md-t-0 ToHoursDiv">
                                                    <select class="form-control-custom" name="ToHours">
                                                                                                                                                                                                        <option value="00" >00</option>
                                                                                                                                                                                                        <option value="01" >01</option>
                                                                                                                                                                                                        <option value="02" >02</option>
                                                                                                                                                                                                        <option value="03" >03</option>
                                                                                                                                                                                                        <option value="04" >04</option>
                                                                                                                                                                                                        <option value="05" >05</option>
                                                                                                                                                                                                        <option value="06" >06</option>
                                                                                                                                                                                                        <option value="07" >07</option>
                                                                                                                                                                                                        <option value="08" >08</option>
                                                                                                                                                                                                        <option value="09" >09</option>
                                                                                                                                                                                                        <option value="10" >10</option>
                                                                                                                                                                                                        <option value="11" >11</option>
                                                                                                                                                                                                        <option value="12" >12</option>
                                                                                                                                                                                                        <option value="13" >13</option>
                                                                                                                                                                                                        <option value="14" >14</option>
                                                                                                                                                                                                        <option value="15" >15</option>
                                                                                                                                                                                                        <option value="16" >16</option>
                                                                                                                                                                                                        <option value="17" >17</option>
                                                                                                                                                                                                        <option value="18" >18</option>
                                                                                                                                                                                                        <option value="19" >19</option>
                                                                                                                                                                                                        <option value="20" >20</option>
                                                                                                                                                                                                        <option value="21" >21</option>
                                                                                                                                                                                                        <option value="22" >22</option>
                                                                                                                                                                                                        <option value="23" selected=&quot;&quot;>23</option>
                                                                            </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-12 MonthRowDiv hidden">
                                            <div class="row row-xs align-items-center mg-b-10">
                                                <div class="col-md-3 text-right">
                                                    <label for="Month" class="control-label"><b>Month</b></label>
                                                </div>
                                                <div class="col-md-5 mg-t-5 mg-md-t-0 MonthDiv">
                                                    <select class="form-control-custom" name="Month">
                                                                                                                                                                                                        <option value="1" selected=&quot;&quot;>January</option>
                                                                                                                                                                                                        <option value="2" >February</option>
                                                                                                                                                                                                        <option value="3" >March</option>
                                                                                                                                                                                                        <option value="4" >April</option>
                                                                                                                                                                                                        <option value="5" >May</option>
                                                                                                                                                                                                        <option value="6" >June</option>
                                                                                                                                                                                                        <option value="7" >July</option>
                                                                                                                                                                                                        <option value="8" >August</option>
                                                                                                                                                                                                        <option value="9" >September</option>
                                                                                                                                                                                                        <option value="10" >October</option>
                                                                                                                                                                                                        <option value="11" >November</option>
                                                                                                                                                                                                        <option value="12" >December</option>
                                                                            </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-12 YearRowDiv hidden">
                                            <div class="row row-xs align-items-center mg-b-10">
                                                <div class="col-md-3 text-right">
                                                    <label for="Year" class="control-label"><b>Year</b></label>
                                                </div>
                                                <div class="col-md-4 mg-t-5 mg-md-t-0 YearDiv">
                                                    <select class="form-control-custom" name="Year">
                                                                                                                                                                                                        <option value="2020" >2020</option>
                                                                                                                                                                                                        <option value="2021" >2021</option>
                                                                                                                                                                                                        <option value="2022" >2022</option>
                                                                                                                                                                                                        <option value="2023" >2023</option>
                                                                                                                                                                                                        <option value="2024" >2024</option>
                                                                                                                                                                                                        <option value="2025" selected=&quot;&quot;>2025</option>
                                                                            </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </form>
                <div id="ReportData"></div>
                <div class="card-body pt-0 pb-2 px-0">
                    <div class="row row-sm panel-main m-0">
                        <div class="col-xl-12 panel-top p-0">
                            <div class="card">
                                <div class="card-body overflow-x-auto overflow-y-auto" id="analytics-grid-block"></div>
                            </div>
                        </div>
                        <div class="col-xl-12 panel-top hidden" id="partTop">
                            <div class="card">
                                <div class="card-body" id="AlayticsDataReportTotal"></div>
                            </div>
                        </div>
                        <div class="col-xl-12 panel-middle hidden" id="partMiddel">
                            <div class="card">
                                <div class="card-body" id="analytics-search-block">search for part B or part A</div>
                            </div>
                        </div>

                        <div class="col-xl-12 analyticsReportDivPartB panel-bottom p-0" id="analyticsReportDivPartB">
                            <div class="card">
                                <div class="card-body overflow-x-auto overflow-y-auto" id="analytics-grid-block-b">
                                    <table id="analyticsTablePartB" class="analyticsTablePartB table table-bordered hidden">
                                        <thead>
                                            <tr class="tab_header_bbcolor">
                                                <th>Date</th>
                                                <th>Attempt</th>
                                                <th>Successfull</th>
                                                <th>Submitted</th>
                                                <th>Billable(C)</th>
                                                <th>Billable(V)</th>
                                                <th>ASR(%)</th>
                                                <th>DLR(s)</th>
                                                <th>DLR(t)</th>
                                                <th>Margin</th>
                                                <th>Revenue</th>
                                                <th>Delivered</th>
                                                <th>Reported</th>
                                                <th>HLR</th>
                                                <th>HLR Ported Count</th>
                                                <th>Rate(C)</th>
                                                <th>Rate(V)</th>
                                                <th>Cost</th>
                                                <th>Delivery Delay</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="confirmTempTableData"></div>
            </div>
        </div>
        <!-- Container closed -->

        <!-- Footer opened -->
        <div class="main-footer ht-40">
            <div class="container-fluid pd-t-0-f ht-100p">
                <span>Copyright © 2025 <a href="javascript:void(0)">Alpha Messaging Platform</a>.</span>
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
        $("#partTop").resizable({
            handleSelector: ".splitter-horizontal",
            resizeWidth: false
        });

        function SetHeight() {
            let WindowHeight = $(window).height();
            let HeaderHeight = $('.main-header').outerHeight();
            let StickyMenu = $('.sticky').outerHeight();
            let AnalyticReportFilter = $('.analyticreportfilter').outerHeight();
            let FooterHeight = $('.main-footer').outerHeight();
            let TotalHeight = HeaderHeight + StickyMenu + AnalyticReportFilter + FooterHeight
            let FinalHeight = WindowHeight - TotalHeight
            /* 70% height*/
            let Aheight = FinalHeight * 70 / 100
            /* 30% height*/
            let Bheight = FinalHeight * 30 / 100
            $('#analytics-grid-block').css('height', Aheight - 40)
            $('#analytics-grid-block-b').css('height', Bheight)

        }
        $(document).ready(function() {
            if ($(window).width() > 991) {
                SetHeight();
            } else {
                $('#analytics-grid-block').css('height', '250px')
                $('#analytics-grid-block-b').css('height', '250px')
            }
        })
        $(window).resize(function() {
            if ($(window).width() > 991) {
                SetHeight();
            } else {
                $('#analytics-grid-block').css('height', '250px')
                $('#analytics-grid-block-b').css('height', '250px')
            }
        })
    </script>
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
</body>

</html>