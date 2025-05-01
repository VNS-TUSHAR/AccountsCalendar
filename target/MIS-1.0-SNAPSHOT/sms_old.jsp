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
    <!--<link rel="stylesheet" href="https://amp.sms24hours.com/css/bootstrap-datetimepicker.min.css">-->

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
                                <a class="dropdown-item" href="https://amp.sms24hours.com/users/3/edit" style=""><i class="bx bx-cog"></i> Edit Profile</a>
                                <a class="dropdown-item" href="https://amp.sms24hours.com/logout"><i class="bx bx-log-out"></i> Sign Out</a>
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
                                <a href="https://amp.sms24hours.com/dashboard" class="">
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
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/invoices" class="slide-item">Invoice</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/currency" class="slide-item">Currency</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/currencyconversion" class="slide-item">Currency Exchange</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/enterprisebalance" class="slide-item">Enterprise Balance</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/billingcycle" class="slide-item">Billing Cycle</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/vendorinvoice" class="slide-item">Vendor Invoice</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/soa" class="slide-item">SOA</a></li>
                                </ul>
                            </li>
                            <li aria-haspopup="true">
                                <a href="javascript:void(0)" class="sub-icon">
                                    <i class="fa fa-table"></i>
                                    SMS Schedule
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/productcategory" class="slide-item">Product Category</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/country" class="slide-item">Country</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/mastercode" class="slide-item">Master Table</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/mccmnc" class="slide-item">MCCMNC Unique Codes</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/moreferencebook" class="slide-item">MO Reference Book</a></li>
                                    <li aria-haspopup="true" class="sub-menu-sub">
                                        <span class="horizontalMenu-click02">
                                            <i class="horizontalMenu-arrow fe fe-chevron-down"></i>
                                        </span>
                                        <a href="javascript:void(0)">
                                            Sender ID
                                        </a>
                                        <ul class="sub-menu">
                                            <li aria-haspopup="true"><a href="https://amp.sms24hours.com/smtpmailaccount" class="slide-item">IMAP Mail Account</a></li>
                                            <li aria-haspopup="true"><a href="https://amp.sms24hours.com/filetemplate" class="slide-item">File Template</a></li>
                                            <li aria-haspopup="true"><a href="https://amp.sms24hours.com/autouploadrules" class="slide-item">Auto Upload Rules</a></li>
                                            <li aria-haspopup="true"><a href="https://amp.sms24hours.com/autouploadreport" class="slide-item">Auto Upload Report</a></li>
                                            <li aria-haspopup="true"><a href="https://amp.sms24hours.com/ratetable" class="slide-item">Rate Table</a></li>
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
                                            <li aria-haspopup="true"><a href="https://amp.sms24hours.com/routerulegroup" class="slide-item">Route Rule Group</a></li>
                                            <li aria-haspopup="true"><a href="https://amp.sms24hours.com/routetable" class="slide-item">Route Table</a></li>
                                            <li aria-haspopup="true"><a href="https://amp.sms24hours.com/routerule" class="slide-item">Route Rule</a></li>
                                        </ul>
                                    </li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/lcr" class="slide-item">LCR</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/reprocessing" class="slide-item">Re-Rating</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/ratelookup" class="slide-item">Rate Lookup</a></li>
                                </ul>
                            </li>
                            <li aria-haspopup="true">
                                <a href="javascript:void(0)" class="sub-icon">
                                    <i class="fa fa-sitemap"></i>
                                    Sender ID
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/digitrule" class="slide-item">Translation Rule</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/digitrulegroup" class="slide-item">Translation Rule Group</a></li>
                                    <li aria-haspopup="true" class="sub-menu-sub">
                                        <span class="horizontalMenu-click02">
                                            <i class="horizontalMenu-arrow fe fe-chevron-down"></i>
                                        </span>
                                        <a href="javascript:void(0)">
                                            HLR
                                        </a>
                                        <ul class="sub-menu">
                                            <li aria-haspopup="true"><a href="https://amp.sms24hours.com/hlrprovider" class="slide-item">HLR Provider</a></li>
                                            <li aria-haspopup="true"><a href="https://amp.sms24hours.com/hlrrule" class="slide-item">HLR Rule</a></li>
                                            <li aria-haspopup="true"><a href="https://amp.sms24hours.com/hlrrulegroup" class="slide-item">HLR Rule Group</a></li>
                                        </ul>
                                    </li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/notification" class="slide-item">Notification</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/emaillogs" class="slide-item">Email Logs</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/numberlist" class="slide-item">Number List</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/vendorstats" class="slide-item">Vendor Stats</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/firewall/banip" class="slide-item">Firewall</a></li>
                                </ul>
                            </li>
                            <!-- <li aria-haspopup="true">
                                <a href="javascript:void(0)" class="sub-icon">
                                    <i class="fas fa-tachometer-alt"></i>
                                    Observation Deck
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/signalingdeck" class="slide-item">Signaling Deck</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/edrdeck" class="slide-item">EDR Search</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/edrdownloadtemplate" class="slide-item">EDR Template</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/edrdownload" class="slide-item">EDR Download</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/rouetsimulator" class="slide-item">Route Simulator</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/providerstatus" class="slide-item">Network Status</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/networktrace" class="slide-item">PCAP Trace</a></li>
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
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/report/0" class="slide-item">Master Report</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/report/1" class="slide-item">Customize</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/report/2" class="slide-item">Enterprise</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/report/10" class="slide-item">Master Grouping</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/report/11" class="slide-item">Usage Enterprise</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/analytics" class="slide-item">Analytics Report</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/bilateral" class="slide-item">Bilateral Report</a></li>
                                </ul>
                            </li>
                            <li aria-haspopup="true">
                                <a href="javascript:void(0)" class="sub-icon ">
                                    <i class="fa fa-users"></i>
                                    SMS Report
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
                                <ul class="sub-menu">
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/businesscompany" class="slide-item">Business Company</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/departments" class="slide-item ">Departments</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/users" class="slide-item">Users</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/guiaccessgroup" class="slide-item ">GUI Access Group</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/audit_trial" class="slide-item">Audit Trail</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/userlicense" class="slide-item">License</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/emailtemplate" class="slide-item">Email Template</a></li>
                                    <li aria-haspopup="true"><a href="https://amp.sms24hours.com/customerusers" class="slide-item">Customer Portal</a></li>
                                </ul>
                            </li>
                            <li aria-haspopup="true" class="top_bottom_ in_mobile_view_hide">
                                <a data-bs-placement="left" data-bs-toggle="tooltip-gray" title="Collapase" href="javascript:void(0)" onclick="TopBottomSectionToggle('show')" class="slide-item top_bottom_collapse" style="display: block;">
                                    <img src="https://amp.sms24hours.com/image/icon/bi-arrows-collapse.svg">
                                </a>
                                <a data-bs-placement="left" data-bs-toggle="tooltip-gray" title="Expand" href="javascript:void(0)" onclick="TopBottomSectionToggle('hide')" class="slide-item top_bottom_expand" style="display: none;">
                                    <img src="https://amp.sms24hours.com/image/icon/bi-arrows-expand.svg">
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
                    <div class="d-flex my-xl-auto right-content">
                        <select id="DashboardTimeInterval" class="form-control-dashboard">
                        <option value="2 MINUTE">Last 2 Minutes</option>
                        <option value="5 MINUTE">Last 5 Minutes</option>
                        <option value="15 MINUTE">Last 15 Minutes</option>
                        <option value="30 MINUTE">Last 30 Minutes</option>
                        <option value="1 HOUR">Last Hour</option>
                        <option value="4 HOUR">Last 4 Hours</option>
                        <option value="12 HOUR">Last 12 Hours</option>
                        <option value="24 HOUR">Last 24 Hours</option>
                    </select> &nbsp;
                        <button type="button" onclick="refreshDashboard(); return false;" class="btn btn-primary btn-sm margin-r-5">&nbsp;&nbsp;Refresh</button>
                    </div>
                </div>
					<div class="row">
			<div class="section-body col-md-8 fleft">
          
          	<div class="card card-primary">
              

              <div class="card-body">
                <form action="Controller" name="uForm"
				method="post">
				 <input type="hidden" name="action" value="sendQuickSMS">
				 <div class="row">
					 <div class="form-group col-6">
                      <label for="sendtype" class="control-label">Send Type</label>
                      <select class="form-control-custom valid" id="send_type" name="send_type">
                        <option value="Single/Multiple">Single/Multiple</option>
                      </select>
                   </div>
					
					<div class="form-group col-6">
							 <label for="senderid" class="control-label">Sender ID</label>
							<select class="form-control-custom valid" id="sender_id" name="sender_id" oninput="setSenderID()">
								<option value="FORMSD">FORMSD</option>
								<option value="VNSOFT">VNSOFT</option>
							</select>
						</div> 
					</div>
				 
				 <div class="row">
						 <div class="col-md-12">
						 <div class="form-group">
								<label>Enter Mobile Numbers</label>
								<textarea required="required" rows="10" cols="10" class="form-control" id="mobile" name="mobile" style="height: 100px !important"></textarea>
							</div>
						</div>
					</div>
				 
				 <!-- <div class="row">
						 <div class="col-md-4">
						 <div class="form-group">
								<label>Message Type</label>
								<div class="toggle-container">
							        <span class="label-text">Unicode</span>
							        <input type="checkbox" id="toggle" class="toggle" checked="checked">
							        <label for="toggle" class="toggle-label"></label>
							        <span class="label-text">Text</span>
							    </div>
							</div>
						</div>
					
						<div class="col-md-4">
						 <div class="form-group">
								<label>Enable Smart Link</label>
								<div class="toggle-container">
							        <span class="label-text">No</span>
							        <input type="checkbox" id="toggle1" class="toggle toggle1">
							        <label for="toggle1" class="toggle-label"></label>
							        <span class="label-text">Yes</span>
							    </div>
							</div>
						</div>
						<div class="col-md-4">
								<label>Remove Duplicates</label><br>
								<div class="toggle-container">
							        <span class="label-text">No</span>
							        <input type="checkbox" id="toggle2" class="toggle toggle2" checked="checked">
							        <label for="toggle2" class="toggle-label"></label>
							        <span class="label-text">Yes</span>
							    </div>
									
						</div>
					</div>
				 
				 <div class="row">
						<div class="col-md-4" style="margin-left: 67%;">
								<label>Send as Flash SMS</label><br>
								<div class="toggle-container">
							        <span class="label-text">No</span>
							        <input type="checkbox" id="toggle3" class="toggle toggle1" checked="checked">
							        <label for="toggle3" class="toggle-label"></label>
							        <span class="label-text">Yes</span>
							    </div>
									
						</div>
					</div> -->
					
					<div class="row">
						 <div class="col-md-12">
							 <div class="form-group">
									<label>Text Message</label>
									<textarea required="required" rows="10" cols="10" oninput="showMessage()" class="form-control" id="message" name="message" style="height: 100px !important"></textarea>
							</div>
						</div>
					
					</div>
					
					<div class="row">
					 <div class="col-md-6">
					 <div class="form-group">
							<label>DLT Templates List</label>
							<select class="form-control-custom valid" id="send_type" name="send_type">
								<option value="Single/Multiple">Append DLT Templates</option>
							</select>
						</div>
					</div>
					
					<div class="col-md-6">
					 <div class="form-group">
							<label>DLT Template ID</label>
							<input type="text" required="required" name="temp_id" id="temp_id" class="form-control-custom valid" placeholder="Enter your DLT Template ID"/>
						</div>
						
					</div>
					</div>
					<label style="font-weight: 600;color: #34395e;font-size: 12px;letter-spacing: .5px;">Schedule</label><br>
					<div class="row form-group">
						 <div class="col-md-1">
						 	<input type="checkbox" class="form-control" id="check">
						 </div>
						 <div class="col-md-3">
		                      <input type="text" class="form-control datepicker" id="schedule" name="schedule" disabled="disabled">
						 </div>
						 <div class="col-md-2">
		                      <div class="input-group">
		                        <!-- <div class="input-group-prepend">
		                          <div class="input-group-text">
		                            <i class="fas fa-clock"></i>
		                          </div>
		                        </div> -->
		                        <input type="text" class="form-control timepicker" id="time" name="time" disabled="disabled">
		                      </div>
						 </div>
					 </div>
					
					<div class="form-group">
                    <button type="submit" class="btn btn-primary" style="float: right;">
                      <!-- <i class="fas fa-sms" style='font-size:24px'></i> --> Send Message
                    </button>
                  </div>
			</form>
              </div>
            </div>
          
          </div>
          
          <div class="section-body col-md-3">
          	<div class="col-md-3 mt-20">
		   <!--  <div class="whatsapp-message"> -->				
							<div id="sticky-anchor"></div>
							<div class="marvel-device nexus5" style="height: 530px; ">
								<div class="top-bar"></div>
								<div class="sleep"></div>
								<div class="volume"></div>
								<div class="camera"></div>
								<div class="screen">
									<div class="screen-container">
										<div>
											<img src="assets/img/phone-top-1.png" height="80px;" width="100%" />
										</div>
										
										<div class="inner">
												<div class="inner-top">
													<div class="phone-message-box">
														<div class="from">
															XX-<span id="phone-from">FORMSD</span>
														</div>
														<div class="phone-message-time">
															Text Message<br>
															Today, <span id="phone-time"></span>
														</div>
														<div class="phone-message" id="phone-message" data-clone-message="">Your Message</div>
													</div>
							
												</div>
												<div class="inner-bottom"></div>
											</div>
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
    <script src="https://amp.sms24hours.com/assets/plugins/jquery-sparkline/jquery.sparkline.min.js"></script>

    <!-- Moment js -->
    <script src="assets/plugins/raphael/raphael.min.js"></script>

    <!-- Internal Select2.min js -->
    <script src="assets/plugins/select2/js/select2.min.js"></script>

    <!--Internal Sumoselect js-->
    <script src="https://amp.sms24hours.com/assets/plugins/sumoselect/jquery.sumoselect.js"></script>

    <!-- Internal sweet-alert.min js -->
    <script src="assets/plugins/sweet-alert/sweetalert.min.js"></script>

    <!--- Internal Accordion Js -->
    <script src="assets/plugins/accordion/accordion.min.js"></script>

    <!--Internal  jquery-simple-datetimepicker js -->
    <!--<script src="https://amp.sms24hours.com/js/bootstrap-datetimepicker.min.js"></script>-->

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
</body>

</html>