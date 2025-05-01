$(function() {
    $.validator.addMethod('IP4Checker', function(value) {
        var ip = "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";
        if (value != '') {
            return value.match(ip);
        } else {
            return true;
        }
    }, 'Invalid IP address');

    $.validator.addMethod('CheckPhoneNumber', function(value) {
        var phoneNumber = /^[+-]?\d+$/;
        return phoneNumber.test(value);
    }, 'Please enter valid number');

    $.validator.addMethod('checkDecimalValue', function(value) {
        var valueNumber = /^\d+$/;
        return valueNumber.test(value);
    }, 'Please enter only digits number');

    jQuery.validator.addMethod("ExceptSemicolon", function(value, element) {
        return this.optional(element) || value == value.match(/^[^;]*$/);
    }, "Semicolon special character not allowed");

    $("form.validateform").validate({
        rules: {
            Title: "required",
            Alias: "required",
            SalesEmail: "required",
            NOCEmail: "required",
            RatesEmail: "required",
            AccountsEmail: "required"
        },
        messages: {
            Title: "Enterprise name can not be empty",
            Alias: "Alias can not be empty",
            SalesEmail: {
                required: "Commercial Email must not be empty"
            },
            NOCEmail: {
                required: "Technical Email must not be empty"
            },
            RatesEmail: {
                required: "Rates Email must not be empty"
            },
            AccountsEmail: {
                required: "Finance Email must not be empty"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.countryvalidate").validate({
        rules: {
            CountryName: "required",
            CountryISO: "required",
            CountryDialingCode: "required",
        },
        messages: {
            CountryName: "Country name can not be empty",
            CountryISO: "Country ISO can not be empty",
            CountryDialingCode: "Country dial code can not be empty",
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.masterCodeValidate").validate({
        rules: {
            CountryID: "required",
            DialCodes: "required",
        },
        messages: {
            CountryID: "Please select country",
            DialCodes: "Dial codes must not be empty",
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.productCategoryValidate").validate({
        rules: {
            ProductCategoryName: "required",
        },
        messages: {
            ProductCategoryName: "Please enter category name",
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.RouteTableValidate").validate({
        rules: {
            ProductCategoryName: "required",
        },
        messages: {
            ProductCategoryName: "Please enter category name",
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    $("form.FormBillingEdit").validate({
        //        rules: {
        //            BillingCycle: "required",
        //            Timezone: "required",
        //            CurrencyInfo: "required",
        //            BillingType: "required",
        //            VendorBillingCycle: "required",
        //            VendorTimezone: "required",
        //            VendorCurrencyInfo: "required",
        //            VendorBillingType: "required",
        //        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    $("form.DigitRuleValidate").validate({
        rules: {
            DigitRuleName: {
                required: true,
                ExceptSemicolon: true
            },
            ANIPattern: {
                ExceptSemicolon: true
            },
            DNIDPattern: {
                ExceptSemicolon: true
            },
            MCCMNCPattern: {
                ExceptSemicolon: true
            },
            EntityValue: {
                ExceptSemicolon: true
            },
            ANIMinLength: {
                required: true,
                number: true,
                min: 0,
                max: 40
            },
            ANIMaxLength: {
                required: true,
                number: true,
                min: 0,
                max: 40
            },
            DNIDMinLength: {
                required: true,
                number: true,
                min: 0,
                max: 40
            },
            DNIDMaxLength: {
                required: true,
                number: true,
                min: 0,
                max: 40
            },
            Entity: {
                required: true
            },
            EntityValue: {
                required: true
            },
        },
        messages: {
            DigitRuleName: {
                required: "Translation rule name must not be empty"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.DigitRuleGroupValidate").validate({
        rules: {
            GroupName: "required",
            //            "DigitRuleIngress[]": {
            //                required: function(){
            //                    return ($('#Type').val()==0) ? true : false;
            //                }
            //            },
            //            "DigitRuleEgress[]": {
            //                required: function(){
            //                    return ($('#Type').val()==1) ? true : false;
            //                }
            //            },
        },
        messages: {
            GroupName: "Please enter Translation rule group name",
            "DigitRuleIngress[]": "Please select atleast one Translation rule ingress",
            "DigitRuleEgress[]": "Please select atleast one Translation rule egress",
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.VendorTrunkValidate").validate({
        rules: {
            TrunkName: "required",
            Category: "required",
            Protocol: "required",
            Username: "required",
            Password: "required",
            HostName: "required",
            URL: "required",
            //            DigitRuleGroupID: "required",
            Capacity: {
                required: true,
                digits: true
            },
            CPS: {
                required: true,
                digits: true
            },
            EnquireLinkRespTimeOutSec: {
                digits: true
            },
            //            SubmitInerval: {digits: true},
            //            Port: {required: true, digits: true},
            VendorOverflowBufferSize: {
                digits: true
            },
            VendorWindowSize: {
                digits: true
            },
            AddrRange: {
                digits: true
            },
            //            "GatewayIP[]": {
            //                IP4Checker: true
            //            },
            //            "GatewayPort[]": {
            //                digits: true
            //            },
            //            "GatewayCapacity[]": {
            //                digits: true
            //            },
            //            "GatewayCPS[]": {
            //                digits: true
            //            },
        },
        messages: {
            TrunkName: "Trunk Name must not be empty",
            Username: {
                required: 'Username must not be empty'
            },
            Password: {
                required: 'Password must not be empty'
            },
            HostName: {
                required: 'HostName must not be empty'
            },
            Port: {
                required: 'Port must not be empty'
            },
            URL: {
                required: 'URL must not be empty'
            },
            Category: "Please Select Category",
            Protocol: "Please Select Protocol",
            DigitRuleGroupID: "Please Select Translation Rule Group",
            Capacity: {
                required: 'TPS must not be empty',
                digits: 'TPS must contains digits'
            },
            CPS: {
                required: 'CPS must not be empty',
                digits: 'CPS must contains digits'
            },
            "VendorTrunkGateway[IP0]": "IP Addeess must not be empty",
            "VendorTrunkGateway[Port0]": "Port must not be empty",
            "VendorTrunkGateway[Capacity0]": "Capacity must not be empty",
            "VendorTrunkGateway[CPS0]": "CPS must not be empty",
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.RateTableValidate").validate({
        rules: {
            RateTableName: "required",
            Category: "required",
            Currency: "required",
        },
        messages: {
            RateTableName: "RateTable Name must not be empty",
            Category: "Please Select Category",
            Currency: "Please Select Currency",
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.RateEditValidate").validate({
        rules: {
            MCCMNC: {
                required: true,
                number: true
            },
            Rate: {
                required: true,
                number: true
            },
            MarginControl: "required",
            Margin: {
                number: true
            },
            Status: "required",
            FromDate: "required",
        },
        messages: {
            MCCMNC: {
                required: "MCCMNC Code must not be empty"
            },
            Rate: "Rate must not be empty",
            MarginControl: "Please select margin control",
            //            Margin: "Margin must not be empty",
            Status: "Please select status",
            FromDate: "Please select from date",
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.CustomerTrunkValidate").validate({
        rules: {
            TrunkName: "required",
            HostName: "required",
            Username: "required",
            Password: "required",
            //            DigitRuleGroupID: "required",
            Capacity: {
                required: true,
                digits: true
            },
            CPS: {
                required: true,
                digits: true
            },
            CustomerOverflowBuffer: {
                digits: true
            },
        },
        messages: {
            TrunkName: "Trunk name must not be empty",
            HostName: {
                required: 'HostName must not be empty'
            },
            Username: {
                required: 'Username must not be empty'
            },
            Password: {
                required: 'Password must not be empty'
            },
            DigitRuleGroupID: "Please select Translation rule group",
            Capacity: {
                required: 'TPS must not be empty',
                digits: 'TPS must contains digits'
            },
            CPS: {
                required: 'CPS must not be empty',
                digits: 'CPS must contains digits'
            },
            CustomerOverflowBuffer: {
                digits: 'Customer Overflow Buffer must contains digits'
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.AssignRouetTableValidate").validate({
        rules: {
            RateTable: {
                required: true
            },
            RouteTable: {
                required: true
            },
        },
        messages: {
            RateTable: {
                required: 'Select rate table'
            },
            RouteTable: {
                required: 'Select route table'
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.ProductImportStep1").validate({
        rules: {
            ImportFile: {
                required: true,
                //                extension: "xls|xlsx|csv"
                //                extension: "csv"
            },
            SkipRow: {
                number: true
            },
            EffectiveDate: {
                required: true
            },
            CountryID: {
                required: true
            },
        },
        messages: {
            //            ImportFile: {required: 'Select a file for import', extension: 'File type should be csv, xls or xlsx'},
            ImportFile: {
                required: 'Select a file for import',
                extension: 'File type should be csv'
            },
            CountryID: {
                required: "Please select country"
            },
            EffectiveDate: {
                required: "Please select Effective Date"
            },
        },
        submitHandler: function(form) {
            console.log('import file');
            importFile(form.name);
            return false;
        }
    });
    $("form.ProductImportStep2").validate({
        rules: {
            "SelHeader[]": {
                required: true
            }
        },
        messages: {
            ImportFile: {
                "SelHeader[]": 'Select import file column'
            },
        },
        submitHandler: function(form) {
            console.log('save file data file');
            saveFileData(form.name);
            return false;
        }
    });
    $("form.RouteSimulatorValidate").validate({
        rules: {
            CustomerTrunkID: {
                required: true
            },
            DNID: {
                required: true,
                CheckPhoneNumber: true
            },
        },
        messages: {
            CustomerTrunkID: {
                required: 'Select Customer Trunk ID'
            },
            DNID: {
                required: 'DNID must not be empty'
            },
        },
        submitHandler: function(form) {
            routeSimulator(form.name);
            return false;
        }
    });
    $("form.RouteSimulatorValidateLatest").validate({
        rules: {
            CustomerTrunkID: {
                required: true
            },
            DNID: {
                required: true,
                CheckPhoneNumber: true
            },
        },
        messages: {
            CustomerTrunkID: {
                required: 'Select Customer Trunk ID'
            },
            DNID: {
                required: 'DNID must not be empty'
            },
        },
        submitHandler: function(form) {
            routeSimulator(form.name);
            return false;
        }
    });
    $("form.TransactionValidate").validate({
        rules: {
            EnterpriseName: {
                required: true
            },
            TransactionTime: {
                required: true
            },
            ModeOfPayment: {
                required: true
            },
            PaymentType: {
                required: true
            },
            TransactionType: {
                required: true
            },
            Amount: {
                required: true,
                number: true
            }
        },
        messages: {
            EnterpriseName: {
                required: 'Select Enterprise Name'
            },
            TransactionTime: {
                required: 'Select Transaction Time'
            },
            ModeOfPayment: {
                required: 'Select Mode of Payment'
            },
            PaymentType: {
                required: 'Select Payment Type'
            },
            TransactionType: {
                required: 'Select Transaction Type'
            },
            Amount: {
                required: 'Amount must not empty'
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.MCCMNCValidate").validate({
        rules: {
            MCC: {
                required: true,
                number: true
            },
            MNC: {
                number: true
            },
            Country: {
                required: true
            },
        },
        messages: {
            MCC: {
                required: 'MCC Code must not be empty',
                number: 'MCC Code must be digits'
            },
            MNC: {
                number: 'MNC Code must be digits'
            },
            Country: {
                required: 'Please select country'
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.UserLicenseValidate").validate({
        rules: {
            //            User: {required: true},
            StartDate: {
                required: true
            },
            Days: {
                required: true,
                number: true,
                min: 1
            },
        },
        messages: {
            User: {
                required: "Please select User"
            },
            StartDate: {
                required: "Please select Start Date"
            },
            Days: {
                required: "Days must not be empty"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
    $("form.CurrencyConversionAdd").validate({
        rules: {
            Currency: {
                required: true
            },
            CurrencyRate: {
                required: true
            },
        },
        messages: {
            Currency: {
                required: "Please select Currency"
            },
            CurrencyRate: {
                required: "Currency Rate must not be empty"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    //    $('form.CurrencyConversionEdit input[name^="CurrencyInfoID"]').each(function(){
    //        $(this).rules('add', {
    //            required: true
    //        });
    //    });

    $("form.CurrencyForm").validate({
        rules: {
            ISO: {
                required: true,
                maxlength: 3
            },
        },
        messages: {
            ISO: {
                required: "Currency ISO must not be empty"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    $("form.DefaultSettingForm").validate({
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    $("form.BusinessCompanyForm").validate({
        onfocusout: false,
        rules: {
            CompanyName: {
                required: true
            },
            //            CommercialEmail: {required: true},
            TechnicalEmail: {
                required: true
            },
            RatesEmail: {
                required: true
            },
            FinanceEmail: {
                required: true
            },
            ComapnyLogo: {
                extension: "png"
            },
            InvoiceFormatFile: {
                extension: "xlsx"
            },
            //            CommercialHost: {required: true},
            //            CommercialPort: {required: true},
            //            CommercialUserName: {required: true},
            //            CommercialPassword: {required: true},
            TechnicalHost: {
                required: true
            },
            TechnicalPort: {
                required: true
            },
            TechnicalUserName: {
                required: true
            },
            TechnicalPassword: {
                required: true
            },
            RatesHost: {
                required: true
            },
            RatesPort: {
                required: true
            },
            RatesUserName: {
                required: true
            },
            RatesPassword: {
                required: true
            },
            FinanceHost: {
                required: true
            },
            FinancePort: {
                required: true
            },
            FinanceUserName: {
                required: true
            },
            FinancePassword: {
                required: true
            },
            RateTemplateName: {
                required: true
            },
            BusinessCompanyIP: {
                IP4Checker: true
            },
        },
        messages: {
            CompanyName: {
                required: "Company Name must not be empty"
            },
            CommercialEmail: {
                required: "Commercial Email must not be empty"
            },
            TechnicalEmail: {
                required: "Technical Email must not be empty"
            },
            RatesEmail: {
                required: "Rates Email must not be empty"
            },
            FinanceEmail: {
                required: "Finance Email must not be empty"
            },
            ComapnyLogo: {
                extension: "Please select valid image file: png"
            },
            InvoiceFormatFile: {
                extension: "Please select valid invoice format file: xlsx"
            },
            CommercialHost: {
                required: "SMTP Host must not be empty"
            },
            CommercialPort: {
                required: "SMTP Port must not be empty"
            },
            CommercialUserName: {
                required: "SMTP UserName must not be empty"
            },
            CommercialPassword: {
                required: "SMTP Password must not be empty"
            },
            TechnicalHost: {
                required: "SMTP Host must not be empty"
            },
            TechnicalPort: {
                required: "SMTP Port must not be empty"
            },
            TechnicalUserName: {
                required: "SMTP UserName must not be empty"
            },
            TechnicalPassword: {
                required: "SMTP Password must not be empty"
            },
            RatesHost: {
                required: "SMTP Host must not be empty"
            },
            RatesPort: {
                required: "SMTP Port must not be empty"
            },
            RatesUserName: {
                required: "SMTP UserName must not be empty"
            },
            RatesPassword: {
                required: "SMTP Password must not be empty"
            },
            FinanceHost: {
                required: "SMTP Host must not be empty"
            },
            FinancePort: {
                required: "SMTP Port must not be empty"
            },
            FinanceUserName: {
                required: "SMTP UserName must not be empty"
            },
            FinancePassword: {
                required: "SMTP Password must not be empty"
            },
            RateTemplateName: {
                required: "Rate File Name must not be empty"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // HLR Provider
    $("form.HLRProviderSaveForm").validate({
        rules: {
            ProviderName: {
                required: true,
                maxlength: 50
            },
            Protocol: {
                required: true
            },
            UserName: {
                maxlength: 50
            },
            Password: {
                maxlength: 50
            },
            IP: {
                required: true
            },
            //            Port: {required: true},
        },
        messages: {
            ProviderName: {
                required: "Provider Name must not be empty",
                maxlength: "Provider Name maximum length 50 chars"
            },
            UserName: {
                maxlength: "UserName maximum length 50 chars"
            },
            Password: {
                maxlength: "Password maximum length 50 chars"
            },
            IP: {
                required: "URL must not be empty"
            },
            Port: {
                required: "Port must not be empty"
            }
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // HLR Rule
    $("form.HLRRuleSaveForm").validate({
        rules: {
            RuleName: {
                required: true,
                maxlength: 50
            },
            HLRProviderID: {
                required: true
            },
            DNIDPattern: {
                required: true,
                maxlength: 150
            }
        },
        messages: {
            RuleName: {
                required: "Rule Name must not be empty",
                maxlength: "Rule Name maximum length 50 chars"
            },
            HLRProviderID: {
                required: "Please select Provider Name"
            },
            DNIDPattern: {
                required: "DNID Pattern must not be empty",
                maxlength: "DNID Pattern maximum length 150 chars"
            }
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // HLR Rule Group
    $("form.HLRRuleGroupSaveForm").validate({
        rules: {
            RuleGroupName: {
                required: true,
                maxlength: 50
            }
        },
        messages: {
            RuleGroupName: {
                required: "Rule Group Name must not be empty",
                maxlength: "Rule Group Name maximum length 50 chars"
            }
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // Route Rule Group
    $("form.RouteRuleGroupSaveForm").validate({
        rules: {
            RouteRuleGroupName: {
                required: true
            }
        },
        messages: {
            RouteRuleGroupName: {
                required: "Route Rule Group Name must not be empty",
            }
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // Route Table
    $("form.RouteTableSaveForm").validate({
        rules: {
            RouteTableName: {
                required: true
            },
            //            MarginPercentage: {required: true}
        },
        messages: {
            RouteTableName: {
                required: "Route Table Name must not be empty",
            },
            MarginPercentage: {
                required: "Margin Percentage must not be empty",
            }
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // Route Rule
    $("form.RouteRuleSaveForm").validate({
        //        rules: {
        //            RouteTableName: {required: true},
        //            MarginPercentage: {required: true}
        //        },
        //        messages: {
        //            RouteTableName: {
        //                required: "Route Table Name must not be empty",
        //            },
        //            MarginPercentage: {
        //                required: "Margin Percentage must not be empty",
        //            }
        //        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // SMTPMailAccount
    $("form.SMTPMailAccountSaveForm").validate({
        rules: {
            SMTPMailAccountName: {
                required: true
            },
            SMTPMailAccountEmail: {
                required: true
            },
            SMTPServer: {
                required: true
            },
            SMTPPort: {
                required: true,
                checkDecimalValue: true
            },
            AccountUserID: {
                required: true
            },
            AccountPassword: {
                required: true
            },
        },
        messages: {
            SMTPMailAccountName: {
                required: "SMTP Mail Account Name must not be empty",
            },
            SMTPMailAccountEmail: {
                required: "SMTP Mail Account Email must not be empty",
            },
            SMTPServer: {
                required: "SMTP Server must not be empty",
            },
            SMTPPort: {
                required: "SMTP Port must not be empty",
            },
            AccountUserID: {
                required: "Account User ID must not be empty",
            },
            AccountPassword: {
                required: "Account Password must not be empty",
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // FileTemplate
    $("form.FileTemplateSaveForm").validate({
        rules: {
            FileTemplateName: {
                required: true
            },
            SkipRows: {
                required: true,
                checkDecimalValue: true
            },
        },
        messages: {
            FileTemplateName: {
                required: "File Template Name must not be empty",
            },
            SkipRows: {
                required: "Skip Row must not be empty",
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // AutoUploadRules
    $("form.AutoUploadRulesSaveForm").validate({
        rules: {
            AutoUploadRuleName: {
                required: true
            },
            NotificationEmail: {
                required: true
            },
            EnterpriseID: {
                required: true
            },
            VendorTrunk: {
                required: true
            },
            SMTPMailAccountID: {
                required: true
            },
            FileTemplateID: {
                required: true
            },
        },
        messages: {
            AutoUploadRuleName: {
                required: "Auto Upload Rule Name must not be empty",
            },
            NotificationEmail: {
                required: "Notification Email must not be empty",
            },
            EnterpriseID: {
                required: "Please select Enterprise",
            },
            VendorTrunk: {
                required: "Please select VendorTrunk",
            },
            SMTPMailAccountID: {
                required: "Please select SMTP Mail Account Name",
            },
            FileTemplateID: {
                required: "Please select File Template Name",
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // Billing Cycle
    $("form.BillingCycleSaveForm").validate({
        rules: {
            BillingCycleName: {
                required: true
            },
            UsageDays: {
                required: true,
                checkDecimalValue: true
            },
            DueDays: {
                required: true,
                checkDecimalValue: true
            },
        },
        messages: {
            BillingCycleName: {
                required: "Billing Cycle Name must not be empty",
            },
            UsageDays: {
                required: "Usage Days must not be empty",
            },
            DueDays: {
                required: "Due Days must not be empty",
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // EDR Download Template
    $("form.EDRDownloadTemplateSaveForm").validate({
        rules: {
            EDRDownloadTemplateName: {
                required: true
            },
        },
        messages: {
            EDRDownloadTemplateName: {
                required: "EDR Template Name must not be empty",
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    // Email Template
    $("form.EmailTemplateSaveForm").validate({
        rules: {
            EmailTemplateName: {
                required: true,
                maxlength: 50
            },
            EmailTemplateSubject: {
                required: true
            },
            EmailTemplateBody: {
                required: true
            },
        },
        messages: {
            EmailTemplateName: {
                required: "Email Template Name must not be empty",
                maxlength: "Email Template Name maximum length 50 chars"
            },
            EmailTemplateSubject: {
                required: "Email Template Subject must not be empty",
                maxlength: "Email Template Subject maximum length 100 chars"
            },
            EmailTemplateBody: {
                required: "Email Template Body must not be empty",
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    //Campaign
    $("form.CampaignStep1").validate({
        rules: {
            ImportFile: {
                required: true,
                extension: "csv"
            },
            SkipRow: {
                required: true
            },
            CampaignName: {
                required: true
            },
            CustomerTrunkID: {
                required: true
            },
            StartTime: {
                required: true
            },
            SenderID: {
                required: true
            },
            MsgTemplate: {
                required: true
            },
        },
        messages: {
            ImportFile: {
                extension: "Please select CSV file",
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    //MO Reference Book
    $("form.MOReferenceBookSaveForm").validate({
        rules: {
            CustomerTrunkID: {
                required: true
            },
            Number: {
                required: true
            }
        },
        messages: {
            CustomerTrunkID: {
                required: "Please select Customer Trunk"
            },
            Number: {
                required: "Number must not be empty"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    //Campaign Send SMS
    $("form.campaignSendSMSValidate").validate({
        rules: {
            CustomerTrunkID: {
                required: true
            },
            DNID: {
                required: true
            },
            MsgTemplate: {
                required: true
            },
        },
        messages: {
            CustomerTrunkID: {
                required: "Please select Customer Trunk"
            },
            DNID: {
                required: "DNID must not be empty"
            },
            MsgTemplate: {
                required: "Msg Template must not be empty"
            },
        },
        submitHandler: function(form) {
            campaignSendSMS(form.name);
            return false;
        }
    });

    //Number List
    $("form.numberListValidate").validate({
        rules: {
            NumberListName: {
                required: true
            },
        },
        messages: {
            NumberListName: {
                required: "Name must not be empty"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    //Number List - Add Number Validation
    $("form.numberListAddValidate").validate({
        rules: {
            Number: {
                required: true
            },
        },
        messages: {
            Number: {
                required: "Number must not be empty"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    //Documents
    $("form.DocsValidate").validate({
        rules: {
            'DocumentName[1]': {
                required: true
            },
        },
        messages: {
            'DocumentName[1]': {
                required: "Please enter name"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    //Vendor Invoice
    $("form.VendorInvoiceSaveForm").validate({
        rules: {
            'EnterpriseID': {
                required: true
            },
            'ChargeAmount': {
                required: true
            },
        },
        messages: {
            'EnterpriseID': {
                required: "Please select Enterprise"
            },
            'ChargeAmount': {
                required: "Please enter Charge Amount"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    //Vendor Stats
    $("form.VendorStatsSaveForm").validate({
        rules: {
            'VendorTrunkID': {
                required: true
            },
            'MCCMNC': {
                required: true
            },
        },
        messages: {
            'VendorTrunkID': {
                required: "Please select Vendor Trunk"
            },
            'MCCMNC': {
                required: "Please select MCCMNC"
            },
        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });

    //Firewall
    $("form.FirewallValidate").validate({
        //        rules: {
        //            IPAddress: {
        //                IP4Checker: true
        //            },
        //            Filter: {
        //                required: true
        //            },
        //        },
        //        messages: {
        //            'Filter': {required: "Please select Filter"},
        //        },
        submitHandler: function(form) {
            save(form.name);
            return false;
        }
    });
});