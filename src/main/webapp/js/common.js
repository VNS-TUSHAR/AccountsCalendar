function formLoading(type) {
    if (type == 1) {
        $('#loading').show();
    } else {
        $('#loading').hide();
    }
}

function page_redirect(url) {
    window.location = url;
}

function alertMessage(type, message, position) {
    var alertTitle = 'Success';
    var alertIcon = 'success';
    var alertPosition = 'bottom-left';
    if (type == 'warning') {
        alertTitle = 'Warning';
        alertIcon = 'warning';
    } else if (type == 'error') {
        alertTitle = 'Error';
        alertIcon = 'error';
    } else if (type == 'info') {
        alertTitle = 'Information';
        alertIcon = 'info';
    }
    if (typeof position != 'undefined' && position != '') {
        alertPosition = position;
    }
    $.toast({
        heading: alertTitle,
        text: message,
        showHideTransition: 'slide',
        icon: alertIcon,
        loader: true,
        loaderBg: '#FFFF',
        position: alertPosition,
    })
}

function save(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    if (formname == 'CustomerTrunkAdd' || formname == 'VendorTrunkAdd') {
        jQuery.each(jQuery('#SSLFile')[0].files, function(i, file) {
            formData.append('file', file);
        });
    }
    if (formname == 'CampaignStep1') {
        jQuery.each(jQuery('#ImportFile')[0].files, function(i, file) {
            formData.append('file', file);
        });
    }
    if (formname == 'DocsValidate') {
        jQuery.each(jQuery('#FileName')[0].files, function(i, file) {
            formData.append('file', file);
        });
    }
    if (formname == 'BusinessCompanyForm') {
        jQuery.each(jQuery('#ComapnyLogo')[0].files, function(i, file) {
            formData.append('file', file);
        });
        jQuery.each(jQuery('#InvoiceFormatFile')[0].files, function(i, file) {
            formData.append('file', file);
        });
        jQuery.each(jQuery('#RateTemplateFileName')[0].files, function(i, file) {
            formData.append('file', file);
        });
        jQuery.each(jQuery('#SOAFormatFileName')[0].files, function(i, file) {
            formData.append('file', file);
        });
    }
    $.ajax({
        url: path,
        data: formData,
        cache: false,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            if (formname == 'CampaignStep1') {
                if (typeof response.RateType != "undefined" && response.RateType == 'Campaign') {
                    $('#confirmTempTableData').empty();
                    $('#confirmTempTableData').html(response.TempTableData);
                    var tableHistoryID = 'CampaignTableConfirmation';
                    var modalConfirmID = 'modalCampaignTableConfirmation';
                    var pathImportTable = app_url + '/campaign/temp/testTable';
                    $('.confirmLoadingMessage').addClass('hidden');
                    $('.confirmRateButton').prop('disabled', false);

                    var oTableLog = $('#' + tableHistoryID).DataTable({
                        processing: true,
                        serverSide: true,
                        "scrollX": true,
                        "scrollY": "350px",
                        "scrollCollapse": true,
                        aLengthMenu: paginationLimit,
                        "ajax": {
                            "url": pathImportTable,
                            "data": function(d) {
                                d.tempTableName = $("#tempTableName").val();
                                d.searchBy = $("#" + tableHistoryID + "_wrapper #searchby").val();
                            }
                        },
                        initComplete: function() {
                            var input = $("#" + tableHistoryID + "_filter input").unbind(),
                                self = this.api(),
                                $searchButton = $('<button>')
                                .text('Search')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    self.search(input.val()).draw();
                                }),
                                $clearButton = $('<button>')
                                .text('Clear')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    input.val('');
                                    $searchButton.click();
                                })
                            $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                            $("#" + tableHistoryID + "_filter input").unbind();
                            $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                                if (e.keyCode == 13) {
                                    oTableLog.search(this.value).draw();
                                }
                            });
                        },
                    });
                    $('#' + modalConfirmID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();
                } else {
                    alertMessage('success', response.message, '');
                    setTimeout(function() {
                        page_redirect(response.url);
                    }, default_timeout);
                }
            } else {
                alertMessage('success', response.message, '');
                setTimeout(function() {
                    page_redirect(response.url);
                }, default_timeout);
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function validateFormData(formname) {
    var path = $("#validateActionURL").val();
    var formData = $("form[name='" + formname + "']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            } else {
                save(formname);
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function deleteRecord(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            var moduleName = '';
            if (typeof response.module != "undefined") {
                moduleName = response.module;
            }
            if (moduleName == 'mastercodelist') {
                $('#MasterCode' + response.id).closest('tr').remove();
            } else {
                setTimeout(function() {
                    page_redirect(response.url);
                }, default_timeout);
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function enableAction(selectedVal) {
    if (selectedVal > 0) {
        $('#recordAction #btnEdit').removeClass('disabled');
        $('#recordAction #btnDelete').removeClass('disabled');
        $('#recordAction #btnRoute').removeClass('disabled');
        $('#recordAction #btnImportRoute').removeClass('disabled');
        $('#recordAction #btnImportRate').removeClass('disabled');
        $('#recordAction #btnExprot').removeClass('disabled');
        $('#recordAction #btnImportTrunkRate').removeClass('disabled');
        $('#recordAction #btnRate').removeClass('disabled');
        $('#recordAction #btnImportHistory').removeClass('disabled');
        $('#recordAction #btnView').removeClass('disabled');
        $('#recordAction #btnImport').removeClass('disabled');
        /* set value */
        $('#recordAction #btnEdit').val(selectedVal);
        $('#recordAction #btnDelete').val(selectedVal);
        $('#recordAction #btnRoute').val(selectedVal);
        $('#recordAction #btnImportRoute').val(selectedVal);
        $('#recordAction #btnImportRate').val(selectedVal);
        $('#recordAction #btnExprot').val(selectedVal);
        $('#recordAction #btnImportTrunkRate').val(selectedVal);
        $('#recordAction #btnRate').val(selectedVal);
        $('#recordAction #btnImportHistory').val(selectedVal);
        $('#recordAction #btnView').val(selectedVal);
        $('#recordAction #btnImport').val(selectedVal);
        $('#recordAction .btnClassSetID').val(selectedVal);
    }
}

function optRecord(selectedVal, type, module) {
    if (selectedVal > 0) {
        if (type == 'delete') {
            $('#formModalDelete #deleteID').val(selectedVal);
            $('#modalDelete').modal('show');
        } else if (type == 'clone') {
            console.log(app_url + '/' + module + '/' + type + '/' + selectedVal);
            page_redirect(app_url + '/' + module + '/' + type + '/' + selectedVal);
        } else if (type == 'route') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/route');
        } else if (type == 'importroute') {
            page_redirect(app_url + '/' + module + '/route/' + selectedVal);
        } else if (type == 'importtrunkrate') {
            page_redirect(app_url + '/' + module + '/vendortrunk/rate/' + selectedVal);
        } else if (type == 'rate') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/rate');
        } else if (type == 'vendortrunkrate') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/rate');
        } else if (type == 'importrate') {
            page_redirect(app_url + '/' + module + '/rate/' + selectedVal);
        } else if (type == 'exportrate') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/rate/export');
        } else if (type == 'exportroute') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/route/export');
        } else if (type == 'exportVendorInfo') {
            page_redirect(app_url + '/' + module + '/export/Vendorinfo');
        } else if (type == 'importhistory') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/importhistory');
        } else if (type == 'editRoute') {
            page_redirect(app_url + '/' + module + '/edit/' + selectedVal + '/route');
        } else if (type == 'editRate') {
            page_redirect(app_url + '/' + module + '/edit/' + selectedVal + '/rate');
        } else if (type == 'view') {
            page_redirect(app_url + '/' + module + '/view/' + selectedVal);
        } else if (module == 'contactgroup') {
            page_redirect(app_url + '/' + module + '/contact/' + selectedVal);
        } else if (module == 'resellercontactgroup') {
            page_redirect(app_url + '/' + module + '/contact/' + selectedVal);
        } else if (type == 'list' && module == 'numberlist') {
            page_redirect(app_url + '/' + module + '/list/' + selectedVal);
        } else if (type == 'export' && (module == 'mccmnc' || module == 'country' || module == 'mastercode' || module == 'transaction' || module == 'currency' || module == 'numberlist' || module == 'invoices' || module == 'vendorinvoice')) {
            if (module == 'mastercode' || module == 'transaction' || module == 'numberlist') {
                page_redirect(app_url + '/' + module + '/' + type + '/' + selectedVal);
            } else {
                page_redirect(app_url + '/' + module + '/' + type);
            }
        } else if (type == 'statusapprove') {
            $('#formModalStatusApprove #ApproveDataID').val(selectedVal);
            $('#modalStatusApprove').modal('show');
        } else if (type == 'statusrejected') {
            $('#formModalStatusRejected #RejectedDataID').val(selectedVal);
            $('#modalStatusRejected').modal('show');
        } else {
            page_redirect(app_url + '/' + module + '/edit/' + selectedVal);
        }
    } else if (type == 'importimsicode') {
        page_redirect(app_url + '/' + module + '/imsicode');
    } else if (type == 'export' && (module == 'mccmnc' || module == 'country' || module == 'mastercode' || module == 'transaction' || module == 'currency')) {
        if (module == 'mastercode' || module == 'transaction') {
            page_redirect(app_url + '/' + module + '/' + type + '/' + selectedVal);
        } else {
            page_redirect(app_url + '/' + module + '/' + type);
        }
    } else {
        if (selectedVal != '' && type == 'delete' && module == 'numberlist') {
            $('#formModalDelete #deleteID').val(selectedVal);
            $('#modalDelete').modal('show');
        } else if (type == 'delete' && module == 'contactgroup-contact') {
            console.log('module::' + module);
            $('#formModalDelete #deleteID').val(selectedVal);
            $('#modalDelete').modal('show');
        } else {
            alertMessage('error', 'Please select record', '');
        }
    }
}

/**
 * Comment
 */
function changeRountHuntPolicy(type, id) {
    if (type == '2') {
        $(id).show();
    } else {
        $(id).hide();
    }
}

/**
 * Comment
 */
function changeDigitRuleType(type, conversionClass, translationClass) {
    if (type == '0') {
        $(conversionClass).show();
        $(translationClass).hide();
    } else {
        $(conversionClass).hide();
        $(translationClass).show();
    }
}

/**
 * Comment
 */
function changeDigitRuleGroupType(type, showId, hideId) {
    if (type == '0') {
        $(showId).show();
        $(hideId).hide();
    } else {
        $(showId).hide();
        $(hideId).show();
    }
}

function importFile(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    formData.append('file', $('#ImportFile')[0].files[0]);
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        mimeType: 'multipart/form-data',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            setTimeout(function() {
                page_redirect(response.url);
            }, default_timeout);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function saveFileData(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            $('#import_success_file').addClass('hidden');
            $('#import_error_file').addClass('hidden');
            $('#import_error_file_text').addClass('hidden');
            var importType = $('#ImportType').val();
            var type = $('#type').val();
            if (response.status == 1) {
                if (response.FutureStep == 2) {
                    alertMessage('success', response.message, '');
                    $('#confirmTempTableData').empty();
                    $('#confirmTempTableData').html(response.TempTableData);
                    var tableHistoryID = 'FutureRateTableConfirmation';
                    var modalConfirmID = 'modalFutureRateTableConfirmation';
                    var pathImportTable = app_url + '/import/vendorRate/testTable';
                    if (response.RateType == 'CustomerRate') {
                        pathImportTable = app_url + '/import/customerRate/testTable';
                    }

                    $('.confirmLoadingMessage').addClass('hidden');
                    $('.confirmRateButton').prop('disabled', false);

                    var oTableLog = $('#' + tableHistoryID).DataTable({
                        processing: true,
                        serverSide: true,
                        "scrollX": true,
                        "scrollY": "350px",
                        "scrollCollapse": true,
                        aLengthMenu: paginationLimit,
                        "ajax": {
                            "url": pathImportTable,
                            "data": function(d) {
                                d.tempTableName = $("#tempTableName").val();
                                d.searchBy = $("#" + tableHistoryID + "_wrapper #searchby").val();
                            }
                        },
                        initComplete: function() {
                            var input = $("#" + tableHistoryID + "_filter input").unbind(),
                                self = this.api(),
                                $searchButton = $('<button>')
                                .text('Search')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    self.search(input.val()).draw();
                                }),
                                $clearButton = $('<button>')
                                .text('Clear')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    input.val('');
                                    $searchButton.click();
                                })
                            $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                            $("#" + tableHistoryID + "_filter input").unbind();
                            $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                                if (e.keyCode == 13) {
                                    oTableLog.search(this.value).draw();
                                }
                            });
                        },
                    });

                    if (response.RateType == 'CustomerRate') {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    } else {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '<option value="ChangeType">Change Type</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    }

                    $('#' + modalConfirmID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();


                    //                    var modelID = '#modalFutureImportConfirm';
                    //                    $(modelID+' #FutureImportTitle').text(response.ImportTitle);
                    //                    $(modelID+' #FutureImportSummaryTable tbody').html(response.FutureTableData);
                    //                    $(modelID+' .btnFutureImport').val(response.FileImportID);
                    //                    $(modelID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();
                } else if (response.ConfirmRateStep == 1) {
                    $('#confirmTempTableData').empty();
                    $('#confirmTempTableData').html(response.TempTableData);
                    if (response.RateType == 'CustomerRate') {
                        var tableHistoryID = 'RateTableConfirmation';
                        var modalConfirmID = 'modalRateTableConfirmation';
                        var pathImportTable = app_url + '/import/customerRate/testTable';
                    } else if (response.RateType == 'Campaign') {
                        var tableHistoryID = 'CampaignTableConfirmation';
                        var modalConfirmID = 'modalCampaignTableConfirmation';
                        var pathImportTable = app_url + '/campaign/temp/testTable';
                    } else {
                        var tableHistoryID = 'VendorRateTableConfirmation';
                        var modalConfirmID = 'modalVendorRateTableConfirmation';
                        var pathImportTable = app_url + '/import/vendorRate/testTable';
                    }
                    $('.confirmLoadingMessage').addClass('hidden');
                    $('.confirmRateButton').prop('disabled', false);

                    var oTableLog = $('#' + tableHistoryID).DataTable({
                        processing: true,
                        serverSide: true,
                        "scrollX": true,
                        "scrollY": "350px",
                        "scrollCollapse": true,
                        aLengthMenu: paginationLimit,
                        "ajax": {
                            "url": pathImportTable,
                            "data": function(d) {
                                d.tempTableName = $("#tempTableName").val();
                                d.searchBy = $("#" + tableHistoryID + "_wrapper #searchby").val();
                            }
                        },
                        initComplete: function() {
                            var input = $("#" + tableHistoryID + "_filter input").unbind(),
                                self = this.api(),
                                $searchButton = $('<button>')
                                .text('Search')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    self.search(input.val()).draw();
                                }),
                                $clearButton = $('<button>')
                                .text('Clear')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    input.val('');
                                    $searchButton.click();
                                })
                            $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                            $("#" + tableHistoryID + "_filter input").unbind();
                            $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                                if (e.keyCode == 13) {
                                    oTableLog.search(this.value).draw();
                                }
                            });
                        },
                    });

                    if (response.RateType == 'CustomerRate') {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    } else if (response.RateType != 'Campaign') {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '<option value="ChangeType">Change Type</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    }

                    $('#' + modalConfirmID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();
                } else {
                    $('#modalRateTableConfirmation').modal('hide');
                    $('#import_success_file').find('#successMessage').css('text-align', 'left');
                    alertMessage('success', response.message, '');
                    if (importType == '3' || type == '7') {
                        $('#import_success_file').find('#successMessage').text(response.message).css('text-align', 'left');
                    }
                    $('#import_success_file').removeClass('hidden');
                }
            } else {
                alertMessage('error', response.message, '');
                if (response.status == 0) {
                    $('#err_file_import_label').attr('onclick', 'page_redirect("' + response.data.error_file + '"); return false;');
                    $('#import_error_file').removeClass('hidden');
                    showFileIcon(response.data.error_file);
                    return false;
                }
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function saveFutureFileData(importID, status) {
    var path = app_url + '/import/futureconfirm/' + importID;
    var formData = {
        Status: status
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
            $('.confirmLoadingMessage').removeClass('hidden');
            $('.confirmRateButton').prop('disabled', true);
        },
        success: function(response) {
            formLoading(0);
            $('#import_success_file').addClass('hidden');
            $('#import_error_file').addClass('hidden');
            $('#import_error_file_text').addClass('hidden');
            var importType = $('#ImportType').val();
            if (response.status == 1) {
                var modelID = '#modalFutureRateTableConfirmation';
                $(modelID).modal('hide');

                $('#import_success_file').find('#successMessage').css('text-align', 'left');
                alertMessage('success', response.message, '');
                $('#import_success_file').find('#successMessage').text(response.message).css('text-align', 'left');
                $('#import_success_file').removeClass('hidden');
            } else {
                alertMessage('error', response.message, '');
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function confirmFileImport(importID, action, rateType) {
    var path = app_url + '/import/confirm/' + importID;
    var formData = {
        Action: action,
        RateType: rateType
    };
    if (rateType == 'campaign') {
        path = app_url + '/campaign/confirm/' + importID;
        formData = {
            Action: action,
            RateType: rateType,
            ContactGroup: $('#ContactGroup').val()
        };
    }
    var targetID = '#modalImportBody';
    var modalId = '#modalImportID';
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
            $('.confirmLoadingMessage').removeClass('hidden');
            $('.confirmRateButton').prop('disabled', true);
        },
        success: function(response) {
            formLoading(0);
            $('#import_success_file').addClass('hidden');
            $('#import_error_file').addClass('hidden');
            $('#import_error_file_text').addClass('hidden');
            $('#modalRateTableConfirmation').modal('hide');
            $('#modalVendorRateTableConfirmation').modal('hide');
            $('#modalCampaignTableConfirmation').modal('hide');
            $(modalId).modal('hide');
            if (response.status == 1) {
                $('#import_success_file').find('#successMessage').css('text-align', 'left');
                alertMessage('success', response.message, '');
                $('#import_success_file').find('#successMessage').text(response.message).css('text-align', 'left');
                $('#import_success_file').removeClass('hidden');
                if (rateType == 'campaign') {
                    var targetID = '#modalImportBody';
                    var modalId = '#modalImportID';
                    $(targetID).html(response.message);
                    $(targetID).css('color', 'green');
                    $(modalId).modal('show');
                    $('#import_success_file').removeClass('hidden');
                    $('#CampainDataTable').DataTable().ajax.reload();
                }
            } else {
                alertMessage('error', response.message, '');
                $('#import_error_file_text').removeClass('hidden');
                $('#import_error_file_text_label').text(response.message);
                return false;
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function downloadFile(type, filename) {
    var path = app_url + '/import/getdownload';
    $.ajax({
        url: path,
        data: {
            _token: $('#_token').val(),
            type: type,
            file: filename
        },
        method: 'GET',
        type: 'GET',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            setTimeout(function() {
                page_redirect(response.url);
            }, default_timeout);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

/**
 * Comment
 */
function load_jquery_data_table(tableID, url) {
    console.log('tableID = ' + tableID);
    console.log('url = ' + url);
    $('#' + tableID).dataTable().fnDestroy();
    $('#' + tableID).DataTable({
        "serverSide": true,
        "bLengthChange": false,
        //        "createdRow": function(row, data, rowIndex){
        //            var tmp = ["ID", "NAME", "COUNTRY_CODE", "DIAL_CODE", "UPDATED_BY"];
        //            $.each($('td', row), function(colIndex){
        //                $(this).attr('data-th', tmp[colIndex]);
        //            });
        //        },
        "ordering": false,
        "info": false,
        aLengthMenu: paginationLimit,
        "oLanguage": {
            "sSearch": '<i class="fa fa-search"></i>'
        },
        "ajax": {
            'url': url,
            'cache': false,
        },
        "initComplete": function() {
            $('[rel="tooltip"]').tooltip();
        }
    });
}

function getFileExtension(fileName) {
    return fileName.substring(fileName.lastIndexOf('.') + 1);
}

function showFileIcon(fileName) {
    var extenstion = getFileExtension(fileName);
    if (extenstion == 'csv') {
        $('#error_xls').removeClass('hidden');
        $('#error_csv').addClass('hidden');
    } else {
        $('#error_xls').addClass('hidden');
        $('#error_csv').removeClass('hidden');
    }
}

function setCheckedCount(multiCheckBoxID, targetID) {
    var countCheckboxes = $('input[name="' + multiCheckBoxID + '[]"]:checked').length;
    $('#' + targetID).text(countCheckboxes);
}

function protocolOption(protocol, className) {
    if (protocol == '0') {
        /* SMPP */
        $(className + '0').show();
        $(className + '1').hide();
        $('#portSMPP').removeClass('hidden');
        $('#portHTTP').addClass('hidden');
    } else {
        /* HTTP */
        $(className + '0').hide();
        $(className + '1').show();
        $('#portSMPP').addClass('hidden');
        $('#portHTTP').removeClass('hidden');
    }
}

function routeSimulator(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.message, '');
            } else {
                $('#routeSimulatorResult').html(response.data.html);
                $('#routeSimulatorResult').collapse();
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error while route simulator processing. Try again', '');
        }
    })
}

function signalingDeck(optType, formname) {
    var path = app_url + '/signalingdeck/' + optType;
    var formData = $("form[name='" + formname + "']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 2) {
                alertMessage('info', response.message, '');
                setTimeout(function() {
                    page_redirect(response.url);
                }, default_timeout);
                return false;
            }

            if (response.status == 0) {
                alertMessage('error', response.message, '');
                if (optType == 'start') {
                    $('#spanSignalingDeck').text('Start');
                    $('#btnSignalingDeck').val('start');
                    $('#btnSignalingDeck').addClass('btn-success');
                    $('#btnSignalingDeck').removeClass('btn-danger');
                }
                return false;
            } else {
                if (optType == 'start') {
                    $('#spanSignalingDeck').text('Stop');
                    $('#btnSignalingDeck').val('stop');
                    $('#btnSignalingDeck').addClass('btn-danger');
                    $('#btnSignalingDeck').removeClass('btn-success');
                } else {
                    $('#spanSignalingDeck').text('Start');
                    $('#btnSignalingDeck').val('start');
                    $('#btnSignalingDeck').addClass('btn-success');
                    $('#btnSignalingDeck').removeClass('btn-danger');
                }

                if (optType == 'stop') {
                    setReloadDataTable(response.data.html, '#fileInfoTable', 'signalingdeck');
                }
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error while signaling deck processing. Try again', '');
        }
    })
}

function refreshProviderStatus(type) {
    var path = app_url + '/providerstatus';
    var formData = {
        trunk: type
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.message, '');
            } else {
                var tableID = '#VendorProviderStatusTable';
                if (type == '') {
                    type = 'customer';
                    tableID = '#CustomerProviderStatusTable';
                }
                setReloadDataTable(response.data.html, tableID, type);
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error while provider status processing. Try again', '');
        }
    })
}

function changeProviderStatus(id, type, requestType) {
    var path = app_url + '/providerstatus/changestatus';
    var formData = {
        id: id,
        type: type,
        requestType: requestType
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.message, '');
            } else {
                var reloadPath = app_url + '/providerstatus';
                if (requestType == 'VENDOR') {
                    reloadPath = reloadPath + '?trunk=vendor';
                }
                page_redirect(reloadPath);
                //refreshProviderStatus(requestType);
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error while change provider status processing. Try again', '');
        }
    })
}

/**
 * Set data and Reload Jquery DataTable
 */
function setReloadDataTable(data, id, type) {
    $(id).DataTable().destroy();
    $(id + ' tbody').html(data);
    $(id).DataTable().draw();
    $(function() {
        if (type == 'customer' || type == 'vendor') {
            var getSearchText = localStorage.getItem("NetworkStatus" + type);
            $(id + "_wrapper input").val(getSearchText);

            $(id + "_wrapper input").bind('keyup', function(e) {
                localStorage.setItem("NetworkStatus" + type, this.value);
                if (e.keyCode == 13) {
                    oTable.search(this.value).draw();
                }
            });
            $(id + "_wrapper input").keyup();
        }
    });
}

/**
 * Set storage search textbox
 */
function setDataTableSearchTextBoxValue(tableId, searchBoxName) {
    $(function() {
        if (type == 'customer' || type == 'vendor') {
            var getSearchText = localStorage.getItem(searchBoxName);
            $(tableId + "_wrapper input").val(getSearchText);

            $(tableId + "_wrapper input").bind('keyup', function(e) {
                localStorage.setItem(searchBoxName, this.value);
                if (e.keyCode == 13) {
                    oTable.search(this.value).draw();
                }
            });
            $(tableId + "_wrapper input").keyup();
        }
    });
}

/**
 * Show Entity Value Option
 */
function showEntityOption(option) {
    if (option == "") {
        $('#divEntityValueOption').addClass('hidden');
    } else {
        $('#divEntityValueOption .entityValueOption').addClass('hidden');
        $('#divEntityValueOption .EntityValue').attr('name', '');
        $('#divEntityValueOption #divID' + option).removeClass('hidden');
        $('#divEntityValueOption #divID' + option + ' .EntityValue').attr('name', 'EntityValue');
        $('#divEntityValueOption').removeClass('hidden');
    }
}

function updateDialCode(masterID) {
    var path = app_url + '/mastercode/save/dialcode/' + masterID;
    var dialCode = $('#MasterCode' + masterID).val();
    var mccmnc = $('#MCCMNC' + masterID).val();
    var formData = {
        dialcode: dialCode,
        mccmnc: mccmnc
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
            } else {
                alertMessage('success', response.message, '');
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error while update dial code processing. Please try again', '');
        }
    })
}

function chargesCalculator(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#result').html(response.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in charges calculator operation. Try again', '');
        }
    })
}

function request(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            setTimeout(function() {
                page_redirect(response.url);
            }, default_timeout);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function requestEgressDigitRuleInfo(digitrulegroupId) {
    var path = app_url + '/rouetsimulator/egressruleinfo';
    var formData = {
        DigitRuleGroupID: digitrulegroupId,
        ANI: $('#ANI').val(),
        DNID: $('#DNID').val(),
        MCCMNC: $('#MCCMNC').val(),
        MessageText: $('#MessageText').val(),
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#modalEgressRuleInfo .modal-body').html(response.data.html);
            $('#modalEgressRuleInfo').modal('show');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in get Translation rule info operation. Try again', '');
        }
    })
}

/**
 * LCR Inactive Entities Checkbox
 */
function updateEntities() {
    getVendorByProductCategory();
}

//LCR Get Vendor List By Product Category
function getVendorByProductCategory() {
    var path = app_url + '/lcr/getTrunkByProductCategory';
    var ids = new Array();
    $("input[name='ProductCategory[]']:checked").each(function() {
        ids.push($(this).val());
    });
    var isChecked = $('#CheckInactiveEntities').is(":checked") ? 1 : 0;
    var formData = {
        ProductCategoryIDS: ids,
        checkInactiveEntities: isChecked
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            setCheckedCount('ProductCategory', 'count_ProductCategory');
            $('.VendorTrunkList1').html(response.data.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Get RateTable List By Product Category
function getRateTableByProductCategory(ProductCategory, enterpriseId) {
    var path = app_url + '/customertrunk/ratetable/' + ProductCategory;
    var formData = {
        enterpriseId: enterpriseId
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#RateTableList').html(response.data.html);
            $(".sortableList").sortable();
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

/**
 * Change filter
 */
function changeDashboardFilter(option) {
    if (option == 5) {
        $('#FilterDuration').removeClass('hidden');
    } else {
        $('#FilterDuration').addClass('hidden');
    }
}

// Save Dashboard Filter
function saveDashboardFilter(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Get Trunk List By Enterprise
function getTrunkByEnterprise(Enterprise, target, type) {
    var path = app_url + '/report/trunklist';
    var formData = {
        EnterpriseID: Enterprise
    };
    var enterpriseType = $('input[name="EnterpriseType"]:checked').val();
    if (target == '#EnterpriseTrunk') {
        formData = {
            EnterpriseID: Enterprise,
            EnterpriseType: enterpriseType
        };
    } else if (type != '') {
        formData = {
            EnterpriseID: Enterprise,
            EnterpriseType: type
        };
    }

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $(target).html(response.data.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Get Network By Country
function getNetworkByCountry(country, target, divClass) {
    var path = app_url + '/report/getNetwork';
    var formData = {
        Country: country
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $(target).html(response.data.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Get Report
function getReport(formname, target) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#ReportFilter').addClass('collapsed-box');
            $('#ReportFilter2').addClass('collapsed-box');
            $('#ReportButtonCollapse i').removeClass('fa fa-minus');
            $('#ReportButtonCollapse i').addClass('fa fa-plus');
            $(target).html(response.data.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

/**
 * Report by selection onchange
 */
function changeReportBy(option) {
    $('.ReportBy').addClass('hidden');
    if (option == '2' || option == '3') { //Daily OR Weekly
        $('#ReportMonth').removeClass('hidden');
    } else if (option == '5') { //Custom
        $('#ReportCustom').removeClass('hidden');
    } else if (option == '1') { //Hourly
        $('#ReportHourly').removeClass('hidden');
    } else if (option == '4') { //Monthly
        $('#ReportMonthYearList').removeClass('hidden');
    }
}

/**
 * Report change enterprise type
 */
function reportChangeEnterpriseType(option) {
    $('#Enterprise').trigger('change');
}

/**
 * Report change enterprise type
 */
function getEnterpriseList(enterpriseType, target) {
    var path = app_url + '/report/get/enterprises';
    var formData = {
        EnterpriseType: enterpriseType
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $(target).html(response.data.html);
            $('#Enterprise').trigger('change');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

/**
 * Report change enterprise type
 */
function getEnterpriseListCommon(enterpriseType, target) {
    var path = app_url + '/transaction/getAllEnterpriseList';
    var formData = {
        EnterpriseType: enterpriseType
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $(target).html(response.data.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
    showHideInvoiceNumberByEnterpriseType(enterpriseType);
}

/**
 * redirectDashboard
 */
function redirectDashboard(type) {
    page_redirect(app_url + '/dashboard?type=' + type);
}

/**
 * Dashboard Get Level Report
 */
function dashboardGetLevelData(type, levelId, levelNo, selectLevelValue, tableTRId) {
    var path = app_url + '/dashboard/getDashboardLevel';
    var formData = {
        type: type,
        levelId: levelId,
        levelNo: levelNo,
        selectLevelValue: selectLevelValue
    };
    for (let i = 0; i < levelNo; i++) {
        switch (i) {
            case 0:
                formData.Level0 = $('#Level' + i).val();
                formData.LevelValue0 = $('#LevelValue' + i).val();
                break;
            case 1:
                formData.Level1 = $('#Level' + i).val();
                formData.LevelValue1 = $('#LevelValue' + i).val();
                break;
            case 2:
                formData.Level2 = $('#Level' + i).val();
                formData.LevelValue2 = $('#LevelValue' + i).val();
                break;
            case 3:
                formData.Level3 = $('#Level' + i).val();
                formData.LevelValue3 = $('#LevelValue' + i).val();
                break;
            case 4:
                formData.Level4 = $('#Level' + i).val();
                formData.LevelValue4 = $('#LevelValue' + i).val();
                break;
            case 5:
                formData.Level5 = $('#Level' + i).val();
                formData.LevelValue5 = $('#LevelValue' + i).val();
                break;
            case 6:
                formData.Level6 = $('#Level' + i).val();
                formData.LevelValue6 = $('#LevelValue' + i).val();
                break;
        }
    }
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#DashboardDataTable tbody').append(response.data.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function showEnterpriseList(type) {
    $('.CustomerList').hide();
    $('.VendorTrunkList').hide();
    if (type == '0') { //check
        $('.CustomerList').show();
    } else {
        $('.VendorTrunkList').show();
    }
}

function checkUncheckAll(target, action, multiCheckBoxName, countID) {
    if (action == '1') { //check
        $(target).each(function() {
            if ($(this).is(':visible')) {
                $(this).prop('checked', true);
            }
        });
    } else { //Uncheck
        $(target).each(function() {
            if ($(this).is(':visible')) {
                $(this).prop('checked', false);
            }
        });
    }
    if (countID != '') {
        var countCheckboxes = $('input[name="' + multiCheckBoxName + '[]"]:checked').length;
        $(countID).text(countCheckboxes);
    }
}

function checkUncheckAllTableColumn(target, action, btnId) {
    if (action == '1') { //check
        $(target + ' tr:has(td)').find('input[type="checkbox"]').prop('checked', true);
        $(btnId).val(0);
        if (target == '#numberListRecordDataTable') {
            $('#recordAction #btnDelete').removeClass('disabled');
            var ids = new Array();
            $('input[type="checkbox"]').each(function() {
                ids.push($(this).val());
            });
            var jsonArray = JSON.parse(JSON.stringify(ids));
            $('#recordAction #btnDelete').val(jsonArray);
        }
    } else { //Uncheck
        $(target + ' tr:has(td)').find('input[type="checkbox"]').prop('checked', false);
        $(btnId).val(1);
        if (target == '#numberListRecordDataTable') {
            $('#recordAction #btnDelete').addClass('disabled');
            $('#recordAction #btnDelete').val('');
        }
    }
}

function deleteButtonEnableDisableAction(multiCheckBoxName, target, btnId) {
    var countCheckboxes = $('input[name="' + multiCheckBoxName + '[]"]:checked').length;
    if (countCheckboxes > 0) {
        //check
        $(target + ' tr:has(td)').find('input[name="' + multiCheckBoxName + '[]"]:checked').prop('checked', true);
        $(btnId).val(0);
        $('#recordAction #btnDelete').removeClass('disabled');
        var ids = new Array();
        $('input[name="' + multiCheckBoxName + '[]"]:checked').each(function() {
            ids.push($(this).val());
        });
        var jsonArray = JSON.parse(JSON.stringify(ids));
        $('#recordAction #btnDelete').val(jsonArray);
    } else {
        //Uncheck
        $(target + ' tr:has(td)').find('input[name="' + multiCheckBoxName + '[]"]:checked').prop('checked', false);
        $(btnId).val(1);
        $('#recordAction #btnDelete').addClass('disabled');
        $('#recordAction #btnDelete').val('');
    }
}

/**
 * Report change enterprise type
 */
function submitReprocessingRequest(id, type) {
    var path = app_url + '/reprocessing/submit/' + id + '/' + type;
    var formData = {};
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            page_redirect(app_url + '/reprocessing');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

/**
 * Report change enterprise type
 */
function submitReprocessingSummaryRequest(id, type) {
    var path = app_url + '/reprocessing/submit/summary/' + id + '/' + type;
    var formData = {};
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            page_redirect(app_url + '/reprocessing');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

/**
 * Generate password
 */
function generatePassword(target, length) {
    var pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-[]@";
    var pwdLen = parseInt(length);
    var randPassword = Array(pwdLen).fill(pwdChars).map(function(x) {
        return x[Math.floor(Math.random() * x.length)]
    }).join('');
    $(target).val(randPassword);
}

/**
 * Disable Check MCCMNC
 */
function disableCheckMCCMNC(value, targetDiv) {
    if (value > 0) {
        $(targetDiv).attr("disabled", true);
    } else {
        $(targetDiv).removeAttr('disabled');
    }
}

function optRecordv2(selectedVal, type, module) {
    if (selectedVal > 0) {
        if (type == 'delete') {
            $('#formModalDelete #deleteID').val(selectedVal);
            $('#modalDelete').modal('show');
        } else if (type == 'route') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/route');
        } else if (type == 'importroute') {
            page_redirect(app_url + '/' + module + '/route/' + selectedVal);
        } else if (type == 'importtrunkrate') {
            page_redirect(app_url + '/' + module + '/vendortrunk/rate/' + selectedVal);
        } else if (type == 'rate') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/rate');
        } else if (type == 'vendortrunkrate') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/rate');
        } else if (type == 'importrate') {
            page_redirect(app_url + '/' + module + '/rate/' + selectedVal);
        } else if (type == 'exportrate') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/rate/export');
        } else if (type == 'exportroute') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/route/export');
        } else if (type == 'importhistory') {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/importhistory');
        } else if (type == 'editRoute') {
            page_redirect(app_url + '/' + module + '/edit/' + selectedVal + '/route');
        } else if (type == 'editRate') {
            page_redirect(app_url + '/' + module + '/edit/' + selectedVal + '/rate');
        } else if (type == 'view') {
            page_redirect(app_url + '/' + module + '/' + selectedVal);
        } else {
            page_redirect(app_url + '/' + module + '/' + selectedVal + '/edit/');
        }
    } else if (type == 'importimsicode') {
        page_redirect(app_url + '/' + module + '/imsicode');
    } else {
        alertMessage('error', 'Please select record', '');
    }
}

/**
 * Append Key/Value Pair Div
 */
function appendKeyValue(targetId) {
    var clone = $(document).find('#KeyValueDiv').clone();
    $(document).find(targetId).append(clone.html());
}

//Get MCCMNC By Country - RateTableRate
function getMCCMNCByCountry(country, target) {
    var path = app_url + '/ratetable/getMCCMNC';
    var formData = {
        Country: country
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $(target).html(response.data.html);
            $('.MCCMCNHideClassDiv').removeClass('hidden');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//set Network Value by MCCMNC
function setNetworkValueByMCCMNC(MCCMNC, target) {
    var path = app_url + '/ratetable/getNetworkByMCCMNC';
    var formData = {
        MCCMNC: MCCMNC
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $(target).val(response.data.network);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Send customer rate email
function showCustomerRateEmail(customerTrunkID, module) {
    $('.confirmLoadingMessage').addClass('hidden');
    $('.confirmButton').prop('disabled', false);
    $('#CustomerEmailRateNotification #CustomerTrunkID').val(customerTrunkID);
    $('#CustomerEmailRateNotification').modal('show');
    var ids = new Array();
    $("input[name='CustomerTrunk[]']:checked").each(function() {
        ids.push($(this).val());
    });
    if (ids.length == 1) {
        $('#CustomerEmailRateNotification .ViewButton').removeClass('hidden');
    } else {
        $('#CustomerEmailRateNotification .ViewButton').addClass('hidden');
    }
    if (module == 'customertrunk') {
        $('#CustomerEmailRateNotification .ViewButton').removeClass('hidden');
        $('#CustomerEmailRateNotification .btnClassSetID').val(customerTrunkID);
    }
    setCurrentDateTimeModalPopup();
}

function sendCustomerRateEmail(customerTrunkID) {
    var path = app_url + '/customertrunk/sendrate/' + customerTrunkID;
    var date = $('#CustomerEmailRateNotification #FromDate').val();
    var formData = {
        Date: date
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            $('.confirmLoadingMessage').removeClass('hidden');
            $('.confirmButton').prop('disabled', true);
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                $('.confirmLoadingMessage').addClass('hidden');
                $('.confirmButton').prop('disabled', false);
                return false;
            }
            $('#CustomerEmailRateNotification').modal('hide');
            alertMessage('success', response.message, '');
        },
        error: function() {
            $('.confirmLoadingMessage').addClass('hidden');
            $('.confirmButton').prop('disabled', false);
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function sendMutliCustomerRateEmail() {
    var ids = new Array();
    $("input[name='CustomerTrunk[]']:checked").each(function() {
        ids.push($(this).val());
    });
    var path = app_url + '/notification/sendRateMulti';
    var date = $('#CustomerEmailRateNotification #FromDate').val();
    var formData = {
        CustomerTrunkIDS: ids,
        Date: date
    };

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            $('.confirmLoadingMessage').removeClass('hidden');
            $('.confirmButton').prop('disabled', true);
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                $('.confirmLoadingMessage').addClass('hidden');
                $('.confirmButton').prop('disabled', false);
                return false;
            }
            $('#CustomerEmailRateNotification').modal('hide');
            alertMessage('success', response.message, '');
        },
        error: function() {
            $('.confirmLoadingMessage').addClass('hidden');
            $('.confirmButton').prop('disabled', false);
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function viewCustomerRate(customerTrunkID) {
    var ids = new Array();
    $("input[name='CustomerTrunk[]']:checked").each(function() {
        ids.push($(this).val());
    });
    var path = app_url + '/notification/viewRateTable';
    var date = $('#CustomerEmailRateNotification #FromDate').val();
    if (customerTrunkID != '') {
        ids.push(customerTrunkID);
    }
    var formData = {
        CustomerTrunkIDS: ids,
        Date: date
    };

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                $('.confirmLoadingMessage').addClass('hidden');
                $('.confirmButton').prop('disabled', false);
                return false;
            }
            $('#viewRateTableDataDiv').empty();
            $('#viewRateTableDataDiv').html(response.RateTableData);
            var tableHistoryID = 'CustomerRateTableData';
            var modalConfirmID = 'modalCustomerRateTableData';
            var pathImportTable = app_url + '/import/vendorRate/testTable';
            var sortColumnIndex = 3;
            if (response.rnColumnListSort) {
                sortColumnIndex = response.rnColumnListSort;
            }

            $('#' + modalConfirmID).modal('show');

            var oTable = $('#' + tableHistoryID).DataTable({
                "search": true,
                "scrollX": true,
                "scrollY": "350px",
                "scrollCollapse": true,
                "order": [
                    [sortColumnIndex, "asc"]
                ],
                aLengthMenu: paginationLimit,
                initComplete: function() {
                    var input = $("#" + tableHistoryID + "_filter input").unbind(),
                        self = this.api(),
                        $searchButton = $('<button>')
                        .text('Search')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            self.search(input.val()).draw();
                        }),
                        $clearButton = $('<button>')
                        .text('Clear')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            input.val('');
                            $searchButton.click();
                        })
                    $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                    $("#" + tableHistoryID + "_filter input").unbind();
                    $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                        if (e.keyCode == 13) {
                            oTable.search(this.value).draw();
                        }
                    });
                    $("#" + tableHistoryID + "_filter").css('display', 'block');
                }
            });
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
    //    $('[data-toggle="tooltip"]').tooltip();
}

//Send customer rate email
function sendCustomerTechInfo(customerTrunkID) {
    var path = app_url + '/customertrunk/sendtech/' + customerTrunkID;
    var formData = {};
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function sendMultiCustomerTechInfo() {
    var ids = new Array();
    $("input[name='CustomerTrunk[]']:checked").each(function() {
        ids.push($(this).val());
    });
    var path = app_url + '/notification/sendTechInfoMulti';
    var date = $('#CustomerEmailRateNotification #FromDate').val();
    var formData = {
        CustomerTrunkIDS: ids,
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Check SMTP Connection Mail Notification
function checkSMTPConnection(emailID, type) {
    var testEmailAddress = $(emailID).val();
    if (testEmailAddress == '') {
        alertMessage('error', 'Please enter email address', '');
        return false;
    } else {
        var pattern = /^\b[A-Z0-9._+$%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        if (!pattern.test(testEmailAddress)) {
            alertMessage('error', 'Please enter valid email address', '');
            return false;
        }
    }

    var path = app_url + '/businesscompany/checkSMTP';
    var formData = {
        Type: type,
        TestEmailAddress: testEmailAddress,
        Email: $('#' + type + 'Email').val(),
        SMTPSecure: $('#' + type + 'SMTPSecure').val(),
        Host: $('#' + type + 'Host').val(),
        Port: $('#' + type + 'Port').val(),
        UserName: $('#' + type + 'UserName').val(),
        Password: $('#' + type + 'Password').val()
    };

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function customerBillingTypeChange(type) {
    if (type == 1) {
        $('#CustomerCreditLimitDiv').removeClass('hidden');
    } else {
        $('#CustomerCreditLimitDiv').addClass('hidden');
    }
}

//Send invocie mail notification
function sendInvoiceMail() {
    var getAllInvoiceIdsArr = $("input[name='InvoiceIDMulti[]']:checked").map(function() {
        return this.value;
    }).get();

    var path = app_url + '/invoices/sendInvoiceMail';
    var formData = {
        InvoiceIdsArr: getAllInvoiceIdsArr
    };

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Send SOA Statement email notification
function sendSOAStatement() {
    var getAllInvoiceIdsArr = $("input[name='InvoiceIDMulti[]']:checked").map(function() {
        return this.value;
    }).get();

    var path = app_url + '/invoices/sendSOAStatement';
    var formData = {
        InvoiceIdsArr: getAllInvoiceIdsArr
    };

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Send SOA Statement email notification by Enterprise
function sendSOAStatementByEnterprise() {
    var getAllEnterpriseIdsArr = $("input[name='EnterpriseIDMulti[]']:checked").map(function() {
        return this.value;
    }).get();

    var path = app_url + '/enterprisebalance/sendSOAStatement';
    var formData = {
        EnterpriseIdsArr: getAllEnterpriseIdsArr
    };

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Send customer rate email
function showRateTableToCustomerEmail(rateTableID) {
    $('.confirmLoadingMessage').addClass('hidden');
    $('.confirmButton').prop('disabled', false);
    $('#RateTableCustomerEmailNotification #RateTableID').val(rateTableID);
    $('#RateTableCustomerEmailNotification').modal('show');
    setCurrentDateTimeModalPopup();
}

function sendRateTableToCustomerEmail(rateTableID) {
    var path = app_url + '/ratetable/sendrate/' + rateTableID;
    var date = $('#RateTableCustomerEmailNotification #FromDate').val();
    var formData = {
        Date: date
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            $('#RateTableCustomerEmailNotification .confirmLoadingMessage').removeClass('hidden');
            $('#RateTableCustomerEmailNotification .confirmButton').prop('disabled', true);
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                $('#RateTableCustomerEmailNotification .confirmLoadingMessage').addClass('hidden');
                $('#RateTableCustomerEmailNotification .confirmButton').prop('disabled', false);
                return false;
            }
            $('#RateTableCustomerEmailNotification').modal('hide');
            alertMessage('success', response.message, '');
        },
        error: function() {
            $('#RateTableCustomerEmailNotification .confirmLoadingMessage').addClass('hidden');
            $('#RateTableCustomerEmailNotification .confirmButton').prop('disabled', false);
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Route Table - Type on change - HuntPolicy show/hide
function routeTypeChangeHuntPolicyDisplay(type) {
    $('.non_static_type').addClass('hidden');
    $('.block_type').addClass('hidden');
    $('.static_type').addClass('hidden');
    $('.non_block_type').addClass('hidden');
    $('.commonTrunkLoad').addClass('hidden');
    $('.qbr_type').addClass('hidden');
    $('.not_block_type').removeClass('hidden');
    if (type == 2) {
        $('.static_type').removeClass('hidden');
        var huntType = $('#HuntPolicy').val();
        huntPolicyDisplayChanged(huntType);
    } else if (type == 1) {
        $('.block_type').removeClass('hidden');
        $('.non_static_type').removeClass('hidden');
        $('.non_block_type').addClass('hidden');
        $('.not_block_type').addClass('hidden');
    } else {
        if (type == 4) {
            $('.qbr_type').removeClass('hidden');
        }
        $('.non_static_type').removeClass('hidden');
    }
}

//LCR Get Customer List By Product Category
function getCustomerByProductCategory() {
    var path = app_url + '/routerule/getTrunkByProductCategory';
    var ids = new Array();
    $("input[name='ProductCategory[]']:checked").each(function() {
        ids.push($(this).val());
    });

    var CustomerTrunkList = new Array();
    $("input[name='CustomerTrunk[]']:checked").each(function() {
        CustomerTrunkList.push($(this).val());
    });

    var formData = {
        ProductCategoryIDS: ids,
        CustomerTrunkList: CustomerTrunkList,
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            setCheckedCount('ProductCategory', 'count_ProductCategory');
            $('.CustomerTrunkList1').html(response.data.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Get Vendor List By Product Category
function getAllVendorByProductCategory() {
    var path = app_url + '/lcr/getTrunkByProductCategory';
    var ids = new Array();
    $("input[name='ProductCategory[]']:checked").each(function() {
        ids.push($(this).val());
    });

    var VendorTrunkIDS = new Array();
    $("input[name='VendorTrunk[]']:checked").each(function() {
        VendorTrunkIDS.push($(this).val());
    });

    var isChecked = 1;
    var formData = {
        ProductCategoryIDS: ids,
        checkInactiveEntities: isChecked,
        VendorTrunkIDS: VendorTrunkIDS,
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            setCheckedCount('ProductCategory', 'count_ProductCategory');
            $('.VendorTrunkList1').html(response.data.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//HuntPolicy on change Trunk Load show/hide
function huntPolicyDisplayChanged(type) {
    if (type == 3) {
        $('.commonTrunkLoad').removeClass('hidden');
    } else {
        $('.commonTrunkLoad').addClass('hidden');
    }
}

//Continue Routing on change
function continueRoutingChanged(type) {
    if (type == 3) {
        $('.colRouteTable').addClass('hidden');
        $('.colNextGroup').removeClass('hidden');
    } else {
        $('.colRouteTable').removeClass('hidden');
        $('.colNextGroup').addClass('hidden');
    }
}

function checkAutoUploadStatus(id) {
    var tableID = 'VendorRateTableStatus';
    $('#' + tableID).DataTable().destroy();
    $(document).ready(function() {
        var path = app_url + '/autouploadreport/getRecordsJsonData';
        $('#modalVendorRateTableStatus').modal('show');
        if ($.fn.DataTable.isDataTable('#' + tableID)) {
            // Clear table
            $('#' + tableID).DataTable().clear();
        }

        var oTableLog = $('#' + tableID).DataTable({
            processing: true,
            serverSide: true,
            "bSort": false,
            "paging": false,
            "scrollX": true,
            "searching": false,
            "scrollY": "350px",
            "scrollCollapse": true,
            "ajax": {
                "url": path,
                "data": function(d) {
                    d.id = id;
                    //                    d.searchBy = $("#"+tableID+"_wrapper #searchby").val();
                }
            },
            initComplete: function() {
                var input = $("#" + tableID + "_filter input").unbind(),
                    self = this.api(),
                    $searchButton = $('<button>')
                    .text('Search')
                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                    .click(function() {
                        self.search(input.val()).draw();
                    }),
                    $clearButton = $('<button>')
                    .text('Clear')
                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                    .click(function() {
                        input.val('');
                        $searchButton.click();
                    })
                $("#" + tableID + "_filter label").append($searchButton, $clearButton);
                $("#" + tableID + "_filter input").unbind();
                $("#" + tableID + "_filter input").bind('keyup', function(e) {
                    if (e.keyCode == 13) {
                        oTableLog.search(this.value).draw();
                    }
                });
            },
        });

    });

    return false;


    //    $('#modalVendorRateTableStatus').modal('show');
    //    var tableID = 'VendorRateTableStatus';
    //    var path = app_url+'/autouploadreport/getRecordsJsonData';
    //    var oTableLog = $('#'+tableID).DataTable({
    //        processing: true,
    //        serverSide: true,
    //        "scrollX": true,
    //        "scrollY": "350px",
    //        "scrollCollapse": true,
    //        "ajax": {
    //            "url": path,
    //            "data": function(d){
    //                d.id = id;
    //                d.searchBy = $("#"+tableID+"_wrapper #searchby").val();
    //            }
    //        },
    //        initComplete: function(){
    //            var input = $("#"+tableID+"_filter input").unbind(),
    //                    self = this.api(),
    //                    $searchButton = $('<button>')
    //                    .text('Search')
    //                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
    //                    .click(function(){
    //                        self.search(input.val()).draw();
    //                    }),
    //                    $clearButton = $('<button>')
    //                    .text('Clear')
    //                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
    //                    .click(function(){
    //                        input.val('');
    //                        $searchButton.click();
    //                    })
    //            $("#"+tableID+"_filter label").append($searchButton, $clearButton);
    //            $("#"+tableID+"_filter input").unbind();
    //            $("#"+tableID+"_filter input").bind('keyup', function(e){
    //                if(e.keyCode==13){
    //                    oTableLog.search(this.value).draw();
    //                }
    //            });
    //        },
    //    });


    //    var path = app_url+'/autouploadreport/getRecordsJsonData/'+id;
    //    var formData = {};
    //    $.ajax({
    //        url: path,
    //        data: formData,
    //        method: 'POST',
    //        type: 'POST',
    //        dataType: 'JSON',
    //        beforeSend: function(){
    //            formLoading(1);
    //        },
    //        success: function(response){
    //            formLoading(0);
    //            if(response.status==0){
    //                alertMessage('error', response.errors, '');
    //                return false;
    //            }
    //
    //        },
    //        error: function(){
    //            formLoading(0);
    //            alertMessage('error', 'Error in operation. Try again', '');
    //        }
    //    })
}

function downloadAnalyticsReportEDR(myCurrentRow, myParentRow) {
    let currentRow = JSON.parse(decodeURIComponent(myCurrentRow));
    let parentRow = JSON.parse(decodeURIComponent(myParentRow));
    var firstKey = Object.keys(currentRow)[0];
    var path = app_url + '/analytics/exportAnalyticsEDR';
    var formData = {};

    formData[firstKey] = currentRow[firstKey];
    let defaultSearchValuesObj = "";
    if (typeof parentRow['defaultSearchValues'] != 'undefined') {
        defaultSearchValuesObj = parentRow['defaultSearchValues'];
    } else {
        defaultSearchValuesObj = parentRow;
    }

    defaultSearchValuesObj.filter((row) => {
        formData[row.name] = row.value;
    });

    if (typeof parentRow['dataParams'] != 'undefined' && typeof parentRow['dataParams']['track'] != 'undefined') {
        let tempTrack = parentRow['dataParams']['track'];
        for (const prop in tempTrack) {
            let innerTract = tempTrack[prop];
            formData[innerTract.key] = innerTract.value;
        }
    }
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            page_redirect(response.url);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

/**
 * Show/Hide Password
 */
function showHidePassword(inputID, inputIconID) {
    var checkInputType = $(inputID).attr('type');
    if (checkInputType == 'text') {
        $(inputID).attr('type', 'password');
        $(inputIconID).removeClass('fas fa-eye');
        $(inputIconID).addClass('fas fa-eye-slash');
    } else {
        $(inputID).attr('type', 'text');
        $(inputIconID).removeClass('fas fa-eye-slash');
        $(inputIconID).addClass('fas fa-eye');
    }
}

/**
 * Comment
 */
function analyticsReportPartForB(tableID, formData) {
    $('#' + tableID).DataTable().destroy();

    var firstColumnWidth = "40%";
    var restColumnWidth = "5%";
    var dynamicColumnCount = 8;
    var dynamicColumn = [{
            "width": firstColumnWidth,
            "targets": 0
        }, //Total
        {
            "width": restColumnWidth,
            "targets": 1
        }, //Attempt
        {
            "width": restColumnWidth,
            "targets": 2
        }, //Successfull
        {
            "width": restColumnWidth,
            "targets": 3
        }, //Submitted
        {
            "width": restColumnWidth,
            "targets": 4
        }, //Billable(C)
        {
            "width": restColumnWidth,
            "targets": 5
        }, //Billable(V)
        {
            "width": restColumnWidth,
            "targets": 6,
            "createdCell": function(td, cellData, rowData, row, col) {
                if (cellData <= 30) {
                    $(td).addClass('error_bold');
                } else if (cellData >= 31 && cellData <= 60) {
                    $(td).addClass('text_bold_orange');
                } else {
                    $(td).addClass('text_bold_green');
                }
            }
        }, //ASR(%)
        {
            "width": restColumnWidth,
            "targets": 7,
            "createdCell": function(td, cellData, rowData, row, col) {
                if (cellData <= 30) {
                    $(td).addClass('error_bold');
                } else if (cellData >= 31 && cellData <= 60) {
                    $(td).addClass('text_bold_orange');
                } else {
                    $(td).addClass('text_bold_green');
                }
            }
        }, //DLR(C)
        {
            "width": restColumnWidth,
            "targets": dynamicColumnCount,
            "createdCell": function(td, cellData, rowData, row, col) {
                if (cellData <= 30) {
                    $(td).addClass('error_bold');
                } else if (cellData >= 31 && cellData <= 60) {
                    $(td).addClass('text_bold_orange');
                } else {
                    $(td).addClass('text_bold_green');
                }
            }
        }, //DLR(V)
    ];
    if ($('#Access_Margin').val() == '1') {
        dynamicColumnCount++;
        var newItem = {
            "width": restColumnWidth,
            "targets": dynamicColumnCount,
            "createdCell": function(td, cellData, rowData, row, col) {
                if (cellData < 0) {
                    $(td).addClass('error_bold');
                } else {
                    $(td).addClass('text_bold_green');
                }
            }
        }; //Margin
        dynamicColumn.push(newItem);
    }
    if ($('#Access_Cost_Revenue').val() == '1') {
        dynamicColumnCount++;
        dynamicColumn.push({
            "width": restColumnWidth,
            "targets": dynamicColumnCount
        }); //Revenue
    }
    dynamicColumnCount++;
    dynamicColumn.push({
        "width": restColumnWidth,
        "targets": dynamicColumnCount
    }); //Delivered
    dynamicColumnCount++;
    dynamicColumn.push({
        "width": restColumnWidth,
        "targets": dynamicColumnCount
    }); //Reported
    dynamicColumnCount++;
    dynamicColumn.push({
        "width": restColumnWidth,
        "targets": dynamicColumnCount
    }); //HLR
    dynamicColumnCount++;
    dynamicColumn.push({
        "width": restColumnWidth,
        "targets": dynamicColumnCount
    }); //HLR Ported Count
    if ($('#Access_Rate').val() == '1') {
        dynamicColumnCount++;
        dynamicColumn.push({
            "width": restColumnWidth,
            "targets": dynamicColumnCount
        }); //Rate(C)
        dynamicColumnCount++;
        dynamicColumn.push({
            "width": restColumnWidth,
            "targets": dynamicColumnCount
        }); //Rate(V)
    }
    if ($('#Access_Cost_Revenue').val() == '1') {
        dynamicColumnCount++;
        dynamicColumn.push({
            "width": restColumnWidth,
            "targets": dynamicColumnCount
        }); //Cost
    }
    dynamicColumnCount++;
    dynamicColumn.push({
        "width": restColumnWidth,
        "targets": dynamicColumnCount
    }); //Delivery Delay

    $(document).ready(function() {
        var path = app_url + '/analytics/analyticsreportpartb';
        if ($.fn.DataTable.isDataTable('#' + tableID)) {
            // Clear table
            $('#' + tableID).DataTable().clear();
        }
        //        $('#analyticsReportDivPartB').removeClass('hidden');
        $('#analyticsTablePartB').removeClass('hidden');
        var firstColumnWidth = "40%";
        var restColumnWidth = "5.83%";
        var oTableLog = $('#' + tableID).DataTable({
            processing: true,
            serverSide: true,
            "bSort": false,
            "paging": false,
            info: false,
            // "scrollX": true,
            "searching": false,
            // "scrollY": "350px",
            "scrollCollapse": true,
            "ajax": {
                "url": path,
                "data": formData,
            },
            fixedColumns: true,
            columnDefs: dynamicColumn,
            //            columnDefs: [
            //                {"width": firstColumnWidth, "targets": 0}, //Date
            //                {"width": restColumnWidth, "targets": 1}, //ATTEMPT
            //                {"width": restColumnWidth, "targets": 2}, //SUCCESSFULL
            //                {"width": restColumnWidth, "targets": 3}, //SUBMITTED
            //                {"width": restColumnWidth, "targets": 4}, //BILLABLE(C)
            //                {"width": restColumnWidth, "targets": 5}, //BILLABLE(V)
            //                {
            //                    "width": restColumnWidth,
            //                    "targets": 6,
            //                    "createdCell": function(td, cellData, rowData, row, col){
            //                        if(cellData<=30){
            //                            $(td).addClass('error_bold');
            //                        }else if(cellData>=31&&cellData<=60){
            //                            $(td).addClass('text_bold_orange');
            //                        }else{
            //                            $(td).addClass('text_bold_green');
            //                        }
            //                    }
            //                }, //ASR(%)
            //                {
            //                    "width": restColumnWidth,
            //                    "targets": 7,
            //                    "createdCell": function(td, cellData, rowData, row, col){
            //                        if(cellData<=30){
            //                            $(td).addClass('error_bold');
            //                        }else if(cellData>=31&&cellData<=60){
            //                            $(td).addClass('text_bold_orange');
            //                        }else{
            //                            $(td).addClass('text_bold_green');
            //                        }
            //                    }
            //                }, //DLR(C)
            //                {
            //                    "width": restColumnWidth,
            //                    "targets": 8,
            //                    "createdCell": function(td, cellData, rowData, row, col){
            //                        if(cellData<=30){
            //                            $(td).addClass('error_bold');
            //                        }else if(cellData>=31&&cellData<=60){
            //                            $(td).addClass('text_bold_orange');
            //                        }else{
            //                            $(td).addClass('text_bold_green');
            //                        }
            //                    }
            //                }, //DLR(V)
            //                {
            //                    "width": restColumnWidth,
            //                    "targets": 9,
            //                    "createdCell": function(td, cellData, rowData, row, col){
            //                        if(cellData<0){
            //                            $(td).addClass('error_bold');
            //                        }else{
            //                            $(td).addClass('text_bold_green');
            //                        }
            //                    }
            //                }, //MARGIN
            //                {"width": restColumnWidth, "targets": 10}, //REVENUE
            //                {"width": restColumnWidth, "targets": 11}, //DELIVERED
            //                {"width": restColumnWidth, "targets": 12}, //REPORTED
            //                {"width": restColumnWidth, "targets": 13}, //HLR
            //                {"width": restColumnWidth, "targets": 14}, //HLR PORTED COUNT
            //                {"width": restColumnWidth, "targets": 15}, //RATE(C)
            //                {"width": restColumnWidth, "targets": 16}, //RATE(V)
            //                {"width": restColumnWidth, "targets": 17}//COST
            //            ]
        });
    });
    return true;
}

/**
 * Change period anaylicts report date hide/show
 */
function changePeriodAnalyticsReport(periodType) {
    $('#FromDateDiv').addClass('hidden');
    $('#ToDateDiv').addClass('hidden');
    $('#FromHoursDiv').addClass('hidden');
    $('#ToHoursDiv').addClass('hidden');
    $('.FromHoursRowDiv').addClass('hidden');
    $('.ToDateRowDiv').addClass('hidden');
    $('.MonthRowDiv').addClass('hidden');
    $('.YearRowDiv').addClass('hidden');

    if (periodType == 'Hour' || periodType == 'Day') {
        $('#FromDateDiv').removeClass('hidden');
        $('#ToDateDiv').removeClass('hidden');
        $('#FromHoursDiv').removeClass('hidden');
        $('#ToHoursDiv').removeClass('hidden');
        $('.FromHoursRowDiv').removeClass('hidden');
        $('.ToDateRowDiv').removeClass('hidden');
    } else if (periodType == 'Minute') {
        $('#FromHoursDiv').removeClass('hidden');
        $('#ToHoursDiv').removeClass('hidden');
        $('.FromHoursRowDiv').removeClass('hidden');
        $('.ToDateRowDiv').removeClass('hidden');
    } else if (periodType == 'Weekly') {
        $('.MonthRowDiv').removeClass('hidden');
    } else if (periodType == 'Monthly') {
        $('.YearRowDiv').removeClass('hidden');
    }
}

function editMultiCustomerRate(rateTableID) {
    var ids = new Array();
    $("input[name='RateTableRateMCCMNCMulti[]']:checked").each(function() {
        ids.push($(this).val());
    });
    var path = app_url + '/ratetable/multiedit/' + rateTableID + '/rate';
    var formData = {
        MCCMNCList: ids,
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            page_redirect(response.url);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}
//Show customer rate table for close
function showCustomerRateTableClose() {
    $('.confirmLoadingMessage').addClass('hidden');
    $('.confirmButton').prop('disabled', false);
    $('#CustomerRateCloseModal').modal('show');
    setCurrentDateTimeModalPopup();
}

//Show customer rate table for close
function showVendorRateTableClose() {
    $('.confirmLoadingMessage').addClass('hidden');
    $('.confirmButton').prop('disabled', false);
    $('#VendorRateCloseModal').modal('show');
}

function sendCustomerRateClose(rateTableID) {
    var path = app_url + '/ratetable/multiclose/' + rateTableID + '/rate';
    var ids = new Array();
    $("input[name='RateTableRateMCCMNCMulti[]']:checked").each(function() {
        ids.push($(this).val());
    });
    var date = $('#CustomerRateCloseModal #FromDate').val();
    var formData = {
        MCCMNCList: ids,
        Date: date
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            $('.confirmLoadingMessage').removeClass('hidden');
            $('.confirmButton').prop('disabled', true);
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                $('.confirmLoadingMessage').addClass('hidden');
                $('.confirmButton').prop('disabled', false);
                return false;
            }
            $('#CustomerRateCloseModal').modal('hide');
            alertMessage('success', response.message, '');
            page_redirect(response.url);
        },
        error: function() {
            $('.confirmLoadingMessage').addClass('hidden');
            $('.confirmButton').prop('disabled', false);
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function sendVendorRateClose(vendorTrunkID) {
    var path = app_url + '/vendortrunk/multiclose/' + vendorTrunkID + '/rate';
    var ids = new Array();
    $("input[name='VendorTrunkRateMCCMNCMulti[]']:checked").each(function() {
        ids.push($(this).val());
    });
    var date = $('#VendorRateCloseModal #FromDate').val();
    var formData = {
        MCCMNCList: ids,
        Date: date
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            $('.confirmLoadingMessage').removeClass('hidden');
            $('.confirmButton').prop('disabled', true);
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                $('.confirmLoadingMessage').addClass('hidden');
                $('.confirmButton').prop('disabled', false);
                return false;
            }
            $('#VendorRateCloseModal').modal('hide');
            alertMessage('success', response.message, '');
            page_redirect(response.url);
        },
        error: function() {
            $('.confirmLoadingMessage').addClass('hidden');
            $('.confirmButton').prop('disabled', false);
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

/**
 * Report change enterprise type
 */
function getEnterpriseAndTrunkList(enterpriseType, enterpriseTarget, trunkTarget) {
    var path = app_url + '/edrdeck/getEnterpriseTrunkList';
    var formData = {
        EnterpriseType: enterpriseType
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $(enterpriseTarget).html(response.EnterpriseListHTML);
            $(trunkTarget).html(response.TrunkListHTML);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

/**
 * Report Analytics Total Data
 */
function getAnalyticsReportTotalData(searchDataValues) {
    var path = app_url + '/analytics/creategridTotal';
    var formData = {
        searchDataValues
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#AlayticsDataReportTotal').html(response.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function edrDeckSearchModal(formname) {
    var path = app_url + '/edrdeck/edrDeckSearchModel';
    var formData = $("form[name='" + formname + "']").serializeArray();

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            var newExportExcel = function() {
                edrDeckReportExport('excel');
            };

            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#EDRDeckResult').empty();
            $('#EDRDeckResult').html(response.EDRDeckTableData);
            var tableHistoryID = 'EDRDeckTableData';
            var modalConfirmID = 'modalEDRDeckSearchTableData';

            $('#' + modalConfirmID).modal('show');

            var oTable = $('#' + tableHistoryID).DataTable({
                stateSave: true,
                // processing: true,
                // "search": false,
                "scrollX": true,
                "scrollY": "350px",
                "scrollCollapse": true,
                "paging": false,
                "order": [],
                dom: 'Bfrtip',
                buttons: [{
                        extend: 'csv',
                        title: gatewayName + ' - EDR'
                    },
                    {
                        extend: 'excel',
                        title: gatewayName + ' - EDR',
                        action: newExportExcel
                    },
                ],
                initComplete: function() {
                    /* var input = $("#"+tableHistoryID+"_filter input").unbind(),
                     self = this.api(),
                     $searchButton = $('<button>')
                     .text('Search')
                     .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                     .click(function(){
                     self.search(input.val()).draw();
                     }),
                     $clearButton = $('<button>')
                     .text('Clear')
                     .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                     .click(function(){
                     input.val('');
                     $searchButton.click();
                     })
                     $("#"+tableHistoryID+"_filter label").append( $clearButton);
                     $("#"+tableHistoryID+"_filter input").unbind();
                     $("#"+tableHistoryID+"_filter input").bind('keyup', function(e){
                     if(e.keyCode==13){
                     oTable.search(this.value).draw();
                     }
                     }); */
                    var i = 0;
                    var state = this.api().state()['columns'];
                    var stateMsg = state.map((val, key) => {
                        return val['search']['search'];
                    });

                    this.api().columns().every(function() {
                        var that = this;
                        $('.dsearch', this.header())
                            .val(stateMsg[i++])
                            .on('keyup change', function(e) {
                                if (e.keyCode == 13) {
                                    if (that.search() !== this.value) {
                                        that.search(this.value).draw();
                                    }
                                }
                            });
                    });
                    $('th.sorting .searchbtn').click(function(e) {
                        e.stopPropagation();
                    });
                    $("#" + tableHistoryID + "_filter").css('display', 'block');
                }
            });
            clearData = function() {
                oTable.state.clear();
                window.location.reload();
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

//Vendor Trunk Rate MulitEdit
function editMultiVendorRate(vendorTrunkID) {
    var ids = new Array();
    $("input[name='VendorTrunkRateMCCMNCMulti[]']:checked").each(function() {
        ids.push($(this).val());
    });
    var path = app_url + '/vendortrunk/multiedit/' + vendorTrunkID + '/rate';
    var formData = {
        MCCMNCList: ids,
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            page_redirect(response.url);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Get product category wise trunk
function getTrunkByProductCategory(enterpriseType) {
    var path = app_url + '/common/getTrunkByProductCategory';
    var ids = new Array();
    $("input[name='ProductCategory[]']:checked").each(function() {
        ids.push($(this).val());
    });
    var formData = {
        ProductCategoryIDS: ids,
        checkInactiveEntities: 0,
        enterpriseType: enterpriseType,
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            setCheckedCount('ProductCategory', 'count_ProductCategory');
            $('.trunkListHideClassDiv').removeClass('hidden');
            $('.TrunkListHTML').html(response.data.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function commonSearchGridModal(formname, module, trunkType) {
    var path = app_url + '/ratelookup/getAllRateList/' + trunkType;
    var formData = $("form[name='" + formname + "']").serializeArray();

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#SearchResult').empty();
            $('#SearchResult').html(response.TableData);
            var tableHistoryID = 'RateTableData';
            var modalConfirmID = 'modalSearchTableData';

            $('#' + modalConfirmID).modal('show');

            var oTable = $('#' + tableHistoryID).DataTable({
                stateSave: true,
                "paging": false,
                "search": true,
                "scrollX": true,
                "scrollY": "350px",
                "scrollCollapse": true,
                "searching": true,
                "order": [],
                initComplete: function() {
                    var input = $("#" + tableHistoryID + "_filter input").unbind(),
                        self = this.api(),
                        $searchButton = $('<button>')
                        .text('Search')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            self.search(input.val()).draw();
                        }),
                        $clearButton = $('<button>')
                        .text('Clear')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            input.val('');
                            $searchButton.click();
                            clearData();
                        })
                    $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                    $("#" + tableHistoryID + "_filter input").unbind();
                    $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                        if (e.keyCode == 13) {
                            oTable.search(this.value).draw();
                        }
                    });
                    $("#" + tableHistoryID + "_filter").css('display', 'block');
                    var colNumber = 0;
                    var colState = this.api().state()['columns'];
                    var colSearchTxt = colState.map((val, key) => {
                        return val['search']['search'];
                    });

                    this.api().columns().every(function() {
                        var that = this;
                        $('.dsearch', this.header()).val(colSearchTxt[colNumber++]).on('keyup', function(e) {
                            if (e.keyCode == 13) {
                                if (that.search() !== this.value) {
                                    that
                                        .search(this.value)
                                        .draw();
                                }
                            }
                        });
                    });
                    $('th.sorting .searchbtn').click(function(e) {
                        e.stopPropagation();
                    });
                }
            });
            clearData = function() {
                oTable.state.clear();
                window.location.reload();
            }

            var detailRows = [];
            $('#RateTableData tbody').on('click', 'tr td button.rateDetails', function() {
                var tr = $(this).closest('tr');
                var row = oTable.row(tr);
                var idx = detailRows.indexOf(tr.attr('id'));
                var rowIndex = tr.index();
                var buttonVal = $(this).attr('data-id');
                var mccmncCode = this.value;

                if (buttonVal == 1) {
                    $('.rowDiv' + mccmncCode).remove();
                    $('.btnRate' + mccmncCode).attr("data-id", "0");
                    $('.btnRate' + mccmncCode).data('id', '0');
                    $('#spanRate' + mccmncCode).html('<i class="fa fa-chevron-right"></i>');
                } else {
                    //Get Rate Details
                    var path = app_url + '/ratelookup/getRateDetails/' + trunkType + '/' + mccmncCode;
                    $.ajax({
                        url: path,
                        data: formData,
                        method: 'POST',
                        type: 'POST',
                        dataType: 'JSON',
                        beforeSend: function() {
                            formLoading(1);
                        },
                        success: function(response) {
                            formLoading(0);
                            if (response.status == 0) {
                                alertMessage('error', response.errors, '');
                                return false;
                            }
                            var table = document.getElementById("RateTableData");
                            var rowIndexNumber = rowIndex + 2;
                            $.each(response.data, function(index, recordData) {
                                var row = table.insertRow(rowIndexNumber);
                                row.className = "rowDiv" + mccmncCode;
                                var cell1 = row.insertCell(0);
                                var cell2 = row.insertCell(1);
                                var cell3 = row.insertCell(2);
                                var cell4 = row.insertCell(3);
                                var cell5 = row.insertCell(4);
                                var cell6 = row.insertCell(5);
                                var cell7 = row.insertCell(6);
                                var cell8 = row.insertCell(7);
                                var cell9 = row.insertCell(8);
                                cell1.innerHTML = "";
                                cell2.innerHTML = "";
                                cell3.innerHTML = recordData.Name;
                                cell4.innerHTML = "";
                                cell5.innerHTML = "";
                                cell6.innerHTML = recordData.Rate;
                                cell7.innerHTML = "";
                                cell8.innerHTML = recordData.SysRate;
                                cell9.innerHTML = "";
                                rowIndexNumber = rowIndexNumber + 1;
                            });
                            $('.btnRate' + mccmncCode).attr("data-id", "1");
                            $('.btnRate' + mccmncCode).data('id', '1');
                            $('#spanRate' + mccmncCode).html('<i class="fa fa-chevron-down"></i>');
                        },
                        error: function() {
                            formLoading(0);
                            alertMessage('error', 'Error in operation. Try again', '');
                        }
                    });
                }
            });

            //            $('.rateDetails').on('click', function(){
            //                oTable.row.add(['1', '2', '3', 4, 5, 6, 7]).draw();
            //            });

            tableSearchFilterClear('#' + tableHistoryID);
            $('#' + tableHistoryID + '_filter').css('display', 'none');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

function marginPercentageCheck(type, spanID) {
    if (type == '1') {
        $('#' + spanID).addClass('hidden');
    } else {
        $('#' + spanID).removeClass('hidden');
    }
}

$(function() {
    $('input[name="ChangeCountry[]"]').on('change', function() {
        setTimeout(function() {
            getMCCMNCDetailsByCountry('ChangeCountry');
        }, 100);
    });
    $('.onCheckCountryGetMCCMNC').on('click', function() {
        setTimeout(function() {
            getMCCMNCDetailsByCountry('ChangeCountry');
        }, 100);
    });
});

function getMCCMNCDetailsByCountry(multiCheckBoxID) {
    var ids = new Array();
    $('input[name="' + multiCheckBoxID + '[]"]:checked').each(function() {
        ids.push($(this).val());
    });
    var path = app_url + '/common/getMCCMNCByCountry';
    var formData = {
        Country: ids
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#MCCMNCListHTML').html(response.data.html);
            $('.MCCMCNHideClassDiv').removeClass('hidden');
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

/**
 * Set Current Date Time Modal Popup
 */
function setCurrentDateTimeModalPopup() {
    var path = app_url + '/common/getCurrentDateTime';
    var formData = {};
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            $('.datepicker_yyyymmdd_hms').val('');
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', 'Error in operation. Try again', '');
                return false;
            }
            $('.datepicker_yyyymmdd_hms').val(response.data);
        },
        error: function() {
            $('.confirmLoadingMessage').addClass('hidden');
            $('.confirmButton').prop('disabled', false);
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

function customerTrunkDetailModal(routeRuleID) {
    var path = app_url + '/routerule/getCustomerTrunkList/' + routeRuleID;
    var formData = {};

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#CustomerTrunkListResult').empty();
            $('#CustomerTrunkListResult').html(response.TableData);
            var tableHistoryID = 'CustomerTrunkData';
            var modalConfirmID = 'modalCustomerTrunkData';
            $('#' + modalConfirmID).modal('show');

            var oTable = $('#' + tableHistoryID).DataTable({
                "paging": false,
                "search": true,
                "scrollX": true,
                "scrollY": "350px",
                "scrollCollapse": true,
                "order": [],
                initComplete: function() {
                    var input = $("#" + tableHistoryID + "_filter input").unbind(),
                        self = this.api(),
                        $searchButton = $('<button>')
                        .text('Search')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            self.search(input.val()).draw();
                        }),
                        $clearButton = $('<button>')
                        .text('Clear')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            input.val('');
                            $searchButton.click();
                        })
                    $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                    $("#" + tableHistoryID + "_filter input").unbind();
                    $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                        if (e.keyCode == 13) {
                            oTable.search(this.value).draw();
                        }
                    });
                    $("#" + tableHistoryID + "_filter").css('display', 'block');
                }
            });
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

function mccmncRouteRuleDetailModal(routeRuleID) {
    var path = app_url + '/routerule/getMCCMNCList/' + routeRuleID;
    var formData = {};

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#DestinationListResult').empty();
            $('#DestinationListResult').html(response.TableData);
            var tableHistoryID = 'MCCMNCTableData';
            var modalConfirmID = 'modalMCCMNCData';
            $('#' + modalConfirmID).modal('show');

            var oTable = $('#' + tableHistoryID).DataTable({
                "paging": false,
                "search": true,
                "scrollX": true,
                "scrollY": "350px",
                "scrollCollapse": true,
                "order": [],
                initComplete: function() {
                    var input = $("#" + tableHistoryID + "_filter input").unbind(),
                        self = this.api(),
                        $searchButton = $('<button>')
                        .text('Search')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            self.search(input.val()).draw();
                        }),
                        $clearButton = $('<button>')
                        .text('Clear')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            input.val('');
                            $searchButton.click();
                        })
                    $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                    $("#" + tableHistoryID + "_filter input").unbind();
                    $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                        if (e.keyCode == 13) {
                            oTable.search(this.value).draw();
                        }
                    });
                    $("#" + tableHistoryID + "_filter").css('display', 'block');
                }
            });
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

function vendorTrunkRouteTableDetailModal(routeTableID) {
    var path = app_url + '/routetable/getVendorTrunkList/' + routeTableID;
    var formData = {};

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#VendorTrunkListResult').empty();
            $('#VendorTrunkListResult').html(response.TableData);
            var tableHistoryID = 'TableVendorTrunkData';
            var modalConfirmID = 'modalVendorTrunkData';
            $('#' + modalConfirmID).modal('show');

            var oTable = $('#' + tableHistoryID).DataTable({
                "paging": false,
                "search": true,
                "scrollX": true,
                "scrollY": "350px",
                "scrollCollapse": true,
                "order": [],
                initComplete: function() {
                    var input = $("#" + tableHistoryID + "_filter input").unbind(),
                        self = this.api(),
                        $searchButton = $('<button>')
                        .text('Search')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            self.search(input.val()).draw();
                        }),
                        $clearButton = $('<button>')
                        .text('Clear')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            input.val('');
                            $searchButton.click();
                        })
                    $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                    $("#" + tableHistoryID + "_filter input").unbind();
                    $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                        if (e.keyCode == 13) {
                            oTable.search(this.value).draw();
                        }
                    });
                    $("#" + tableHistoryID + "_filter").css('display', 'block');
                }
            });
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

function customerRateHirsoty(rateTableId) {
    var tableID = 'RateHistoryTableData';
    if (rateTableId == '0' || rateTableId == '') {
        alertMessage('error', 'Please select Rate Table', '');
        return false;
    }
    $('#' + tableID).DataTable().destroy();
    $(document).ready(function() {
        var path = app_url + '/ratetable/getRateHistory/' + rateTableId;
        $('#modalRateHistory').modal('show');
        if ($.fn.DataTable.isDataTable('#' + tableID)) {
            // Clear table
            $('#' + tableID).DataTable().clear();
        }

        var oTableLog = $('#' + tableID).DataTable({
            processing: true,
            serverSide: true,
            "scrollX": true,
            "scrollY": "350px",
            "scrollCollapse": true,
            aLengthMenu: paginationLimit,
            "ajax": {
                "url": path,
                "data": function(d) {
                    d.searchBy = $("#" + tableID + "_wrapper #searchby").val();
                }
            },
            initComplete: function() {
                var input = $("#" + tableID + "_filter input").unbind(),
                    self = this.api(),
                    $searchButton = $('<button>')
                    .text('Search')
                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                    .click(function() {
                        self.search(input.val()).draw();
                    }),
                    $clearButton = $('<button>')
                    .text('Clear')
                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                    .click(function() {
                        input.val('');
                        $searchButton.click();
                    })
                $("#" + tableID + "_filter label").append($searchButton, $clearButton);
                $("#" + tableID + "_filter input").unbind();
                $("#" + tableID + "_filter input").bind('keyup', function(e) {
                    if (e.keyCode == 13) {
                        oTableLog.search(this.value).draw();
                    }
                });
            },
        });
        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
            '<select class="" id="searchby">' +
            '<option value="FromDate">FromDate</option>' +
            '<option value="MCCMNC">MCCMNC</option>' +
            '<option value="MasterCode">DialCode</option>' +
            '<option value="Country">Country</option>' +
            '<option value="Network">Network</option>' +
            '<option value="Currency">Currency</option>' +
            '</select>' +
            '</span>').appendTo("#" + tableID + "_filter label"); //example is our table id
    });
}

/**
 * Report change enterprise type
 */
function getEnterpriseMultipleList(enterpriseType, target) {
    var path = app_url + '/report/get/enterprises/multiple';
    var formData = {
        EnterpriseType: enterpriseType
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $(target).html(response.data.html);
            setTimeout(function() {
                getEnterpriseTrunkListMultiple('ChangeEnterprise', enterpriseType);
            }, 100);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

$(function() {
    $('input[name="ChangeEnterprise[]"]').on('change', function() {
        setTimeout(function() {
            getEnterpriseTrunkListMultiple('ChangeEnterprise', '');
        }, 100);
    });
    $('.onCheckChangeEnterprise').on('click', function() {
        setTimeout(function() {
            getEnterpriseTrunkListMultiple('ChangeEnterprise', '');
        }, 100);
    });
});

function getEnterpriseTrunkListMultiple(multiCheckBoxID, enterpriseType) {
    var ids = new Array();
    $('input[name="' + multiCheckBoxID + '[]"]:checked').each(function() {
        ids.push($(this).val());
    });
    var path = app_url + '/report/get/trunk/multiple';
    if (enterpriseType == '') {
        enterpriseType = $('#EnterpriseType').val();
    }
    var formData = {
        EnterpriseIds: ids,
        EnterpriseType: enterpriseType
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#EnterpriseTrunkHTMLList').html(response.data.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

function getVendorRateHirsoty(vendorTrunkId) {
    var tableID = 'VendorRateHistoryTableData';
    if (vendorTrunkId == '0' || vendorTrunkId == '') {
        alertMessage('error', 'Please select Vendor Trunk', '');
        return false;
    }
    $('#' + tableID).DataTable().destroy();
    $(document).ready(function() {
        var path = app_url + '/vendortrunk/getRateHistory/' + vendorTrunkId;
        $('#modalRateHistory').modal('show');
        if ($.fn.DataTable.isDataTable('#' + tableID)) {
            // Clear table
            $('#' + tableID).DataTable().clear();
        }

        var oTableLog = $('#' + tableID).DataTable({
            processing: true,
            serverSide: true,
            "scrollX": true,
            "scrollY": "350px",
            "scrollCollapse": true,
            aLengthMenu: paginationLimit,
            "ajax": {
                "url": path,
                "data": function(d) {
                    d.searchBy = $("#" + tableID + "_wrapper #searchby").val();
                }
            },
            initComplete: function() {
                var input = $("#" + tableID + "_filter input").unbind(),
                    self = this.api(),
                    $searchButton = $('<button>')
                    .text('Search')
                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                    .click(function() {
                        self.search(input.val()).draw();
                    }),
                    $clearButton = $('<button>')
                    .text('Clear')
                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                    .click(function() {
                        input.val('');
                        $searchButton.click();
                    })
                $("#" + tableID + "_filter label").append($searchButton, $clearButton);
                $("#" + tableID + "_filter input").unbind();
                $("#" + tableID + "_filter input").bind('keyup', function(e) {
                    if (e.keyCode == 13) {
                        oTableLog.search(this.value).draw();
                    }
                });
            },
        });
        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
            '<select class="" id="searchby">' +
            '<option value="FromDate">FromDate</option>' +
            '<option value="MCCMNC">MCCMNC</option>' +
            '<option value="MasterCode">DialCode</option>' +
            '<option value="Country">Country</option>' +
            '<option value="Network">Network</option>' +
            '<option value="Currency">Currency</option>' +
            '</select>' +
            '</span>').appendTo("#" + tableID + "_filter label"); //example is our table id
    });
}

function masterReportExport(exportType) {
    var path = app_url + '/report/master/export/' + exportType;
    var formData = $("form[name='FormReport']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            setTimeout(function() {
                page_redirect(response.url);
            }, default_timeout);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

function getReportExport(type, exportType) {
    var path = app_url + '/report/enterprise/export/' + exportType;
    var formData = $("form[name='FormReport']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            setTimeout(function() {
                page_redirect(response.url);
            }, default_timeout);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

/**
 * Show/Hide Billing Type Weekly Days
 */
function clickBillingTypeWeekly() {
    var billingCycleType = $('#BillingType').val();
    $('.UsageDaysDiv').removeClass('hidden');
    $('.BillingTypeWeeklyDayDiv').removeClass('hidden');

    if (billingCycleType == 'Weekly') {
        $('.UsageDaysDiv').addClass('hidden');
    } else if (billingCycleType == 'Custom') {
        $('.BillingTypeWeeklyDayDiv').addClass('hidden');
    } else {
        $('.BillingTypeWeeklyDayDiv').addClass('hidden');
        $('.UsageDaysDiv').addClass('hidden');
    }
}

function edrDeckSearchModalCPenal(formname) {
    var path = app_url + '/cpedrdeck/edrDeckSearchModel';
    var formData = $("form[name='" + formname + "']").serializeArray();

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#EDRDeckResult').empty();
            $('#EDRDeckResult').html(response.EDRDeckTableData);
            var tableHistoryID = 'EDRDeckTableData';
            var modalConfirmID = 'modalEDRDeckSearchTableData';

            $('#' + modalConfirmID).modal('show');

            var oTable = $('#' + tableHistoryID).DataTable({
                "search": true,
                "scrollX": true,
                "scrollY": "350px",
                "scrollCollapse": true,
                "paging": false,
                "order": [],
                dom: 'Bfrtip',
                buttons: [{
                        extend: 'csv',
                        title: gatewayName + ' - EDR'
                    },
                    {
                        extend: 'excel',
                        title: gatewayName + ' - EDR'
                    },
                ],
                initComplete: function() {
                    var input = $("#" + tableHistoryID + "_filter input").unbind(),
                        self = this.api(),
                        $searchButton = $('<button>')
                        .text('Search')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            self.search(input.val()).draw();
                        }),
                        $clearButton = $('<button>')
                        .text('Clear')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            input.val('');
                            $searchButton.click();
                        })
                    $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                    $("#" + tableHistoryID + "_filter input").unbind();
                    $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                        if (e.keyCode == 13) {
                            oTable.search(this.value).draw();
                        }
                    });
                    $("#" + tableHistoryID + "_filter").css('display', 'block');
                }
            });
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

function cpViewCustomerRate(formname) {
    var formData = $("form[name='" + formname + "']").serializeArray();
    var path = app_url + '/cprateproduct/viewRateTable';

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                $('.confirmLoadingMessage').addClass('hidden');
                $('.confirmButton').prop('disabled', false);
                return false;
            }
            $('#viewRateTableDataDiv').empty();
            $('#viewRateTableDataDiv').html(response.RateTableData);
            var tableHistoryID = 'CustomerRateTableData';
            var modalConfirmID = 'modalCustomerRateTableData';

            $('#' + modalConfirmID).modal('show');

            var oTable = $('#' + tableHistoryID).DataTable({
                "search": true,
                "scrollX": true,
                "scrollY": "350px",
                "scrollCollapse": true,
                "order": [
                    [3, "asc"]
                ],
                aLengthMenu: paginationLimit,
                initComplete: function() {
                    var input = $("#" + tableHistoryID + "_filter input").unbind(),
                        self = this.api(),
                        $searchButton = $('<button>')
                        .text('Search')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            self.search(input.val()).draw();
                        }),
                        $clearButton = $('<button>')
                        .text('Clear')
                        .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                        .click(function() {
                            input.val('');
                            $searchButton.click();
                        })
                    $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                    $("#" + tableHistoryID + "_filter input").unbind();
                    $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                        if (e.keyCode == 13) {
                            oTable.search(this.value).draw();
                        }
                    });
                    $("#" + tableHistoryID + "_filter").css('display', 'block');
                }
            });
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
    //    $('[data-toggle="tooltip"]').tooltip();
}

/**
 * Show/Hide Invoice Request Due Date
 */
function showInvoiceRequestDueDate(type) {
    if (type == 'Manual') {
        $("#DueDateID").removeClass('hidden');
    } else {
        $("#DueDateID").addClass('hidden');
    }
}

function edrDeckReportExport(exportType) {
    var path = app_url + '/edrdeck/export/' + exportType;
    var formData = $("form[name='EDRDeckSearchData']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            setTimeout(function() {
                page_redirect(response.url);
            }, default_timeout);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

/**
 * selectContactGroup
 */
function selectContactGroup(contactGroupID) {
    if (contactGroupID == '') {
        $('.fileDiv').show();
    } else {
        $('.fileDiv').hide();
    }
}

//Button onclick import popup dialog
function importStep1(importURL) {
    var path = importURL;
    var formData = {};
    var targetID = '#modalImportBody';
    var modalId = '#modalImportID';
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $(targetID).html(response.data);
            $(modalId).modal('show');
            $(targetID).css('color', 'black');
            return false;
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function importStep1WithID(type, id) {
    var path = '';
    if (type == 'vendortrunkrate') {
        path = app_url + '/import/vendortrunk/rate/' + id;
    } else if (type == 'customerrate') {
        path = app_url + '/import/rate/' + id;
    } else if (type == 'numberlist') {
        path = app_url + '/import/numberlist/' + id;
    }
    var formData = {};
    var targetID = '#modalImportBody';
    var modalId = '#modalImportID';
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $(targetID).html(response.data);
            $(modalId).modal('show');
            $(targetID).css('color', 'black');
            return false;
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function importFileStep1Modal(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    var importType = $('#type').val();
    var targetID = '#modalImportBody';
    var modalId = '#modalImportID';

    var form = $("form[name='" + formname + "']")[0];
    var formData = new FormData(form);

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        mimeType: 'multipart/form-data',
        contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
        processData: false, // NEEDED, DON'T OMIT THIS
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            $(targetID).html('');
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            $(targetID).html(response.data);
            $(modalId).modal('show');

            if (typeof response.ConfirmRateStep != 'undefined' && response.ConfirmRateStep == 1) {
                if (typeof response.RateType && response.RateType == 'Campaign') {
                    $('#confirmTempTableData').empty();
                    $('#confirmTempTableData').html(response.TempTableData);
                    $(modalId).modal('hide');
                    var tableHistoryID = 'CampaignTableConfirmation';
                    var modalConfirmID = 'modalCampaignTableConfirmation';
                    var pathImportTable = app_url + '/campaign/temp/testTable';

                    $('.confirmLoadingMessage').addClass('hidden');
                    $('.confirmRateButton').prop('disabled', false);

                    var oTableLog = $('#' + tableHistoryID).DataTable({
                        processing: true,
                        serverSide: true,
                        "scrollX": true,
                        "scrollY": "350px",
                        "scrollCollapse": true,
                        aLengthMenu: paginationLimit,
                        "ajax": {
                            "url": pathImportTable,
                            "data": function(d) {
                                d.tempTableName = $("#tempTableName").val();
                                d.searchBy = $("#" + tableHistoryID + "_wrapper #searchby").val();
                            }
                        },
                        initComplete: function() {
                            var input = $("#" + tableHistoryID + "_filter input").unbind(),
                                self = this.api(),
                                $searchButton = $('<button>')
                                .text('Search')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    self.search(input.val()).draw();
                                }),
                                $clearButton = $('<button>')
                                .text('Clear')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    input.val('');
                                    $searchButton.click();
                                })
                            $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                            $("#" + tableHistoryID + "_filter input").unbind();
                            $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                                if (e.keyCode == 13) {
                                    oTableLog.search(this.value).draw();
                                }
                            });
                        },
                    });

                    $('#' + modalConfirmID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();
                }
            }

            return false;
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//saveFileDataModal
function importFileStep2Modal(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    var importType = $('#type').val();
    var targetID = '#modalImportBody';
    var modalId = '#modalImportID';
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            $('#import_success_file').addClass('hidden');
            $('#import_error_file').addClass('hidden');
            $('#import_error_file_text').addClass('hidden');
            var importType = $('#ImportType').val();
            var type = $('#type').val();
            if (response.status == 1) {
                if (response.FutureStep == 2) {
                    alertMessage('success', response.message, '');
                    $('#confirmTempTableData').empty();
                    $('#confirmTempTableData').html(response.TempTableData);
                    var tableHistoryID = 'FutureRateTableConfirmation';
                    var modalConfirmID = 'modalFutureRateTableConfirmation';
                    var pathImportTable = app_url + '/import/vendorRate/testTable';
                    if (response.RateType == 'CustomerRate') {
                        pathImportTable = app_url + '/import/customerRate/testTable';
                    }

                    $('.confirmLoadingMessage').addClass('hidden');
                    $('.confirmRateButton').prop('disabled', false);

                    var oTableLog = $('#' + tableHistoryID).DataTable({
                        processing: true,
                        serverSide: true,
                        "scrollX": true,
                        "scrollY": "350px",
                        "scrollCollapse": true,
                        aLengthMenu: paginationLimit,
                        "ajax": {
                            "url": pathImportTable,
                            "data": function(d) {
                                d.tempTableName = $("#tempTableName").val();
                                d.searchBy = $("#" + tableHistoryID + "_wrapper #searchby").val();
                            }
                        },
                        initComplete: function() {
                            var input = $("#" + tableHistoryID + "_filter input").unbind(),
                                self = this.api(),
                                $searchButton = $('<button>')
                                .text('Search')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    self.search(input.val()).draw();
                                }),
                                $clearButton = $('<button>')
                                .text('Clear')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    input.val('');
                                    $searchButton.click();
                                })
                            $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                            $("#" + tableHistoryID + "_filter input").unbind();
                            $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                                if (e.keyCode == 13) {
                                    oTableLog.search(this.value).draw();
                                }
                            });
                        },
                    });

                    if (response.RateType == 'CustomerRate') {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    } else {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '<option value="ChangeType">Change Type</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    }

                    $('#' + modalConfirmID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();


                    //                    var modelID = '#modalFutureImportConfirm';
                    //                    $(modelID+' #FutureImportTitle').text(response.ImportTitle);
                    //                    $(modelID+' #FutureImportSummaryTable tbody').html(response.FutureTableData);
                    //                    $(modelID+' .btnFutureImport').val(response.FileImportID);
                    //                    $(modelID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();
                } else if (response.ConfirmRateStep == 1) {
                    $('#confirmTempTableData').empty();
                    $('#confirmTempTableData').html(response.TempTableData);
                    $(modalId).modal('hide');
                    if (response.RateType == 'CustomerRate') {
                        var tableHistoryID = 'RateTableConfirmation';
                        var modalConfirmID = 'modalRateTableConfirmation';
                        var pathImportTable = app_url + '/import/customerRate/testTable';
                    } else if (response.RateType == 'Campaign') {
                        var tableHistoryID = 'CampaignTableConfirmation';
                        var modalConfirmID = 'modalCampaignTableConfirmation';
                        var pathImportTable = app_url + '/campaign/temp/testTable';
                    } else {
                        var tableHistoryID = 'VendorRateTableConfirmation';
                        var modalConfirmID = 'modalVendorRateTableConfirmation';
                        var pathImportTable = app_url + '/import/vendorRate/testTable';
                    }
                    $('.confirmLoadingMessage').addClass('hidden');
                    $('.confirmRateButton').prop('disabled', false);

                    if (response.RateType == 'Campaign') {
                        var oTableLog = $('#' + tableHistoryID).DataTable({
                            processing: true,
                            serverSide: true,
                            "scrollX": true,
                            "scrollY": "350px",
                            "scrollCollapse": true,
                            aLengthMenu: paginationLimit,
                            "ajax": {
                                "url": pathImportTable,
                                "data": function(d) {
                                    d.tempTableName = $("#tempTableName").val();
                                    d.searchBy = $("#" + tableHistoryID + "_wrapper #searchby").val();
                                }
                            },
                            initComplete: function() {
                                var input = $("#" + tableHistoryID + "_filter input").unbind(),
                                    self = this.api(),
                                    $searchButton = $('<button>')
                                    .text('Search')
                                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                    .click(function() {
                                        self.search(input.val()).draw();
                                    }),
                                    $clearButton = $('<button>')
                                    .text('Clear')
                                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                    .click(function() {
                                        input.val('');
                                        $searchButton.click();
                                    })
                                $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                                $("#" + tableHistoryID + "_filter input").unbind();
                                $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                                    if (e.keyCode == 13) {
                                        oTableLog.search(this.value).draw();
                                    }
                                });
                            },
                        });
                    }

                    if (response.RateType == 'CustomerRate') {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    } else if (response.RateType != 'Campaign') {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '<option value="ChangeType">Change Type</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    }

                    $('#' + modalConfirmID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();
                } else {
                    $('#modalRateTableConfirmation').modal('hide');
                    // $('#modalImportID').modal('hide');
                    $('#import_success_file').find('#successMessage').css('text-align', 'left');
                    //alertMessage('success', response.message, '');
                    $(targetID).html(response.message);
                    $(targetID).css('color', 'green');
                    $(modalId).modal('show');

                    if (importType == '3' || type == '7') {
                        //                        $('#import_success_file').find('#successMessage').text(response.message).css('text-align', 'left');
                    }
                    $('#import_success_file').removeClass('hidden');
                }
            } else {
                alertMessage('error', response.message, '');
                if (response.status == 0) {
                    $('#err_file_import_label').attr('onclick', 'page_redirect("' + response.data.error_file + '"); return false;');
                    $('#import_error_file').removeClass('hidden');
                    showFileIcon(response.data.error_file);
                    return false;
                }
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Campaign message count
function messageChange() {
    var isGSM7Msg = isGSM7Message($("#MsgTemplate").val());
    if (isGSM7Msg) {
        $('#messageSmsMode').text("GSM7");
        $('#DataCodingValue').val(0);
        $('#dataCoding').val(0);
    } else {
        $('#messageSmsMode').text("UCS2");
        $('#DataCodingValue').val(8);
        $('#dataCoding').val(8);
    }
    var bitsPerChar = isGSM7Msg ? 7 : 16;
    if ($('#dataCoding').val() == 8)
        bitsPerChar = 16;
    var sms_len = 0;
    if (isGSM7Msg) {
        for (let i = 0; i < $("#MsgTemplate").val().length; i++) {
            sms_len += unicodeToGsm[$("#MsgTemplate").val().charCodeAt(i)].length;
        }
    } else
        sms_len = $("#MsgTemplate").val().length;
    var sms_count = 0;
    var sms_concat_space = (140 * 8 - 6 * 8) / bitsPerChar;
    if (sms_len > 0) {
        if (sms_len <= Math.floor(140 * 8 / bitsPerChar))
            sms_count = 1;
        else {
            sms_count = Math.floor(sms_len / sms_concat_space);
            if ((sms_len % sms_concat_space) > 0)
                sms_count++;
        }
        $('#message_sms_counter').html(sms_count);
    }
    $('#message_sms_counter').html(sms_count);
    var remainingCars = 160;
    if ($('#dataCoding').val() == 8) {
        remainingCars = 70;
    }
    remainingCars = remainingCars - sms_len;
    if (sms_count > 1) {
        $('.message_remaining_chars_class').addClass('hidden');
    } else {
        $('#message_remaining_chars').html(remainingCars);
        $('.message_remaining_chars_class').removeClass('hidden');
    }
    //    var modRemainingChar = sms_len%sms_concat_space;
    //    $('#message_remaining_chars').html(modRemainingChar);
    $('#message_char_counter').html(sms_len + " chars (" + bitsPerChar * sms_len + " bits)");
}

function isGSM7Message(message) {
    for (var i = 0; i < message.length; i++) {
        var char = message[i];
        if (!(char && unicodeToGsm[char.charCodeAt(0)] ? true : false))
            return false;
    }
    return true;
}

const unicodeToGsm = {
    0x000a: [0x0a],
    0x000c: [0x1b, 0x0a],
    0x000d: [0x0d],
    0x0020: [0x20],
    0x0021: [0x21],
    0x0022: [0x22],
    0x0023: [0x23],
    0x0024: [0x02],
    0x0025: [0x25],
    0x0026: [0x26],
    0x0027: [0x27],
    0x0028: [0x28],
    0x0029: [0x29],
    0x002a: [0x2a],
    0x002b: [0x2b],
    0x002c: [0x2c],
    0x002d: [0x2d],
    0x002e: [0x2e],
    0x002f: [0x2f],
    0x0030: [0x30],
    0x0031: [0x31],
    0x0032: [0x32],
    0x0033: [0x33],
    0x0034: [0x34],
    0x0035: [0x35],
    0x0036: [0x36],
    0x0037: [0x37],
    0x0038: [0x38],
    0x0039: [0x39],
    0x003a: [0x3a],
    0x003b: [0x3b],
    0x003c: [0x3c],
    0x003d: [0x3d],
    0x003e: [0x3e],
    0x003f: [0x3f],
    0x0040: [0x00],
    0x0041: [0x41],
    0x0042: [0x42],
    0x0043: [0x43],
    0x0044: [0x44],
    0x0045: [0x45],
    0x0046: [0x46],
    0x0047: [0x47],
    0x0048: [0x48],
    0x0049: [0x49],
    0x004a: [0x4a],
    0x004b: [0x4b],
    0x004c: [0x4c],
    0x004d: [0x4d],
    0x004e: [0x4e],
    0x004f: [0x4f],
    0x0050: [0x50],
    0x0051: [0x51],
    0x0052: [0x52],
    0x0053: [0x53],
    0x0054: [0x54],
    0x0055: [0x55],
    0x0056: [0x56],
    0x0057: [0x57],
    0x0058: [0x58],
    0x0059: [0x59],
    0x005a: [0x5a],
    0x005b: [0x1b, 0x3c],
    0x005c: [0x1b, 0x2f],
    0x005d: [0x1b, 0x3e],
    0x005e: [0x1b, 0x14],
    0x005f: [0x11],
    0x0061: [0x61],
    0x0062: [0x62],
    0x0063: [0x63],
    0x0064: [0x64],
    0x0065: [0x65],
    0x0066: [0x66],
    0x0067: [0x67],
    0x0068: [0x68],
    0x0069: [0x69],
    0x006a: [0x6a],
    0x006b: [0x6b],
    0x006c: [0x6c],
    0x006d: [0x6d],
    0x006e: [0x6e],
    0x006f: [0x6f],
    0x0070: [0x70],
    0x0071: [0x71],
    0x0072: [0x72],
    0x0073: [0x73],
    0x0074: [0x74],
    0x0075: [0x75],
    0x0076: [0x76],
    0x0077: [0x77],
    0x0078: [0x78],
    0x0079: [0x79],
    0x007a: [0x7a],
    0x007b: [0x1b, 0x28],
    0x007c: [0x1b, 0x40],
    0x007d: [0x1b, 0x29],
    0x007e: [0x1b, 0x3d],
    0x00a1: [0x40],
    0x00a3: [0x01],
    0x00a4: [0x24],
    0x00a5: [0x03],
    0x00a7: [0x5f],
    0x00bf: [0x60],
    0x00c4: [0x5b],
    0x00c5: [0x0e],
    0x00c6: [0x1c],
    0x00c9: [0x1f],
    0x00d1: [0x5d],
    0x00d6: [0x5c],
    0x00d8: [0x0b],
    0x00dc: [0x5e],
    0x00df: [0x1e],
    0x00e0: [0x7f],
    0x00e4: [0x7b],
    0x00e5: [0x0f],
    0x00e6: [0x1d],
    0x00c7: [0x09],
    0x00e8: [0x04],
    0x00e9: [0x05],
    0x00ec: [0x07],
    0x00f1: [0x7d],
    0x00f2: [0x08],
    0x00f6: [0x7c],
    0x00f8: [0x0c],
    0x00f9: [0x06],
    0x00fc: [0x7e],
    0x0393: [0x13],
    0x0394: [0x10],
    0x0398: [0x19],
    0x039b: [0x14],
    0x039e: [0x1a],
    0x03a0: [0x16],
    0x03a3: [0x18],
    0x03a6: [0x12],
    0x03a8: [0x17],
    0x03a9: [0x15],
    0x20ac: [0x1b, 0x65],
};

function campaignSendSMS(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                $('#modalSendSMSFailed #sendFailedID').text(response.errors);
                $('#modalSendSMSFailed').modal('show');
                return false;
            }
            alertMessage('success', response.message, '');
            $('#modalSendSMSSuccess #sendSuccessID').text(response.data);
            $('#modalSendSMSSuccess').modal('show');
            return false;
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Get Campign List By Customer Trunk
function getCampignListByCustomerTrunk(customerTrunk, target) {
    var path = app_url + '/cpreport/getCampaignList';
    var formData = {
        CustomerTrunkID: customerTrunk
    };

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $(target).html(response.data.html);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

/**
 * Clear table data searh filter
 */
function tableSearchFilterClear(tableHistoryID) {
    var tableClear = $(tableHistoryID).DataTable();
    $('.dsearch').val('');
    tableClear.search('').columns().search('').draw();
}

/**
 * Show/Hide DNID Number List
 */
function showHideDNIDNumberList(type) {
    var getDNIDNumberListType = jsTrans['JS_CONVERSATION_TYPE_LIST_RANDOM_NUMBER'];
    var getSenderIDTemplateNumberListType = jsTrans['JS_CONVERSATION_TYPE_LIST_SENDER_ID_TEMPLATE'];
    $('#SenderID').hide();
    $('#randomNumberList').hide();
    $('#senderIDTemplateList').hide();
    if (type == getDNIDNumberListType) {
        $('#randomNumberList').show();
    } else if (type == getSenderIDTemplateNumberListType) {
        $('#senderIDTemplateList').show();
    } else {
        $('#SenderID').show();
    }
}

//Get Invoice By Enterprise
function getInvoiceNumberByEnterprise(Enterprise, target) {
    var path = app_url + '/transaction/invoicelist';
    var formData = {
        EnterpriseID: Enterprise
    };
    var enterpriseType = $('input[name="EnterpriseType"]:checked').val();

    if (enterpriseType == 0) {
        $.ajax({
            url: path,
            data: formData,
            method: 'POST',
            type: 'POST',
            dataType: 'JSON',
            beforeSend: function() {
                formLoading(1);
            },
            success: function(response) {
                formLoading(0);
                if (response.status == 0) {
                    alertMessage('error', response.errors, '');
                    return false;
                }
                $(target).html(response.data.html);
            },
            error: function() {
                formLoading(0);
                alertMessage('error', 'Error in operation. Try again', '');
            }
        });
    }
}

/**
 * Show/hide invoice number on enterprise type
 */
function showHideInvoiceNumberByEnterpriseType(enterpriseType) {
    $('#VendorInvoiceNumber').val('');
    if (enterpriseType == 0) {
        $('#VendorInvoiceNumber').hide();
        $('#InvoiceNumber').show();
    } else {
        $('#VendorInvoiceNumber').show();
        $('#InvoiceNumber').hide();
    }
}

//Start/stop campaign
function startStopCampaign(status) {
    var getAllIdsArr = $("input[name='CampaignIDMulti[]']:checked").map(function() {
        return this.value;
    }).get();

    var path = app_url + '/campaign/isactivestatus';
    var formData = {
        CampaignIdsArr: getAllIdsArr,
        Status: status,
    };

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            $('#btnCampainCheckBox').val(1);
            $('#CampainDataTable').DataTable().ajax.reload();
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Start/stop campaign
function deleteContact() {
    var getAllIdsArr = $("input[name='ContactIDMulti[]']:checked").map(function() {
        return this.value;
    }).get();

    var path = app_url + '/campaign/isactivestatus';
    var formData = {
        CampaignIdsArr: getAllIdsArr,
        Status: status,
    };

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            $('#btnCampainCheckBox').val(1);
            $('#CampainDataTable').DataTable().ajax.reload();
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function soaSearchModal(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            var newExportExcel = function() {
                soaReportExport('SOASearchData', 'excel');
            };
            var newExportPDF = function() {
                soaReportExport('SOASearchData', 'pdf');
            };

            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            $('#SOAResult').empty();
            $('#SOAResult').html(response.SOAData);
            var tableHistoryID = 'SOADataTable';

            var oTable = $('#' + tableHistoryID).DataTable({
                stateSave: true,
                "scrollX": true,
                "scrollY": "350px",
                "scrollCollapse": true,
                dom: 'Bfrtip',
                buttons: [{
                        extend: 'excel',
                        title: gatewayName + ' - SOA',
                        action: newExportExcel
                    },
                    {
                        extend: 'pdf',
                        title: gatewayName + ' - SOA',
                        action: newExportPDF
                    },
                ],
                initComplete: function() {
                    var i = 0;
                    var state = this.api().state()['columns'];
                    var stateMsg = state.map((val, key) => {
                        return val['search']['search'];
                    });

                    this.api().columns().every(function() {
                        var that = this;
                        $('.dsearch', this.header())
                            .val(stateMsg[i++])
                            .on('keyup change', function(e) {
                                if (e.keyCode == 13) {
                                    if (that.search() !== this.value) {
                                        that.search(this.value).draw();
                                    }
                                }
                            });
                    });
                    $('th.sorting .searchbtn').click(function(e) {
                        e.stopPropagation();
                    });
                    $("#" + tableHistoryID + "_filter").css('display', 'block');
                },
                "aaSorting": [],
                "order": [
                    [0, "asc"]
                ]
            });
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

function soaReportExport(formname, exportType) {
    var path = app_url + '/soa/searchExportData/' + exportType;
    var formData = $("form[name='" + formname + "']").serializeArray();
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            setTimeout(function() {
                page_redirect(response.url);
            }, default_timeout);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}
//Start/stop campaign
function deleteTransactions() {
    var getAllIdsArr = $("input[name='TransactionIDMulti[]']:checked").map(function() {
        return this.value;
    }).get();

    if (getAllIdsArr.length > 0) {
        json = {
            TransactionIDs: getAllIdsArr
        };
        var path = app_url + '/transaction/isdelete';
        $.ajax({
            url: path,
            data: json,
            method: 'POST',
            type: 'POST',
            dataType: 'JSON',
            beforeSend: function() {
                formLoading(1);
            },
            success: function(response) {
                formLoading(0);
                $('#modalDelete').modal('hide');
                if (response.status == 0) {
                    alertMessage('error', response.errors, '');
                    return false;
                }
                alertMessage('success', response.message, '');
                $('#btnTransactionCheckBox').val(1);
                $('#TransactionDataTable').DataTable().ajax.reload();
            },
            error: function() {
                formLoading(0);
                alertMessage('error', 'Error in operation. Try again', '');
            }
        })
    } else {
        alertMessage('error', "Kindly select one or more transactions(s)", '');
        $('#modalDelete').modal('hide');
    }
}

function deleteInvoice() {
    var getAllInvoiceIdsArr = $("input[name='InvoiceIDMulti[]']:checked").map(function() {
        return this.value;
    }).get();

    if (getAllInvoiceIdsArr.length > 0) {
        json = {
            InvoiceIdsArr: getAllInvoiceIdsArr
        };
        var path = app_url + '/invoices/deleteInvoice';
        $.ajax({
            url: path,
            data: json,
            method: 'POST',
            type: 'POST',
            dataType: 'JSON',
            beforeSend: function() {
                formLoading(1);
            },
            success: function(response) {
                formLoading(0);
                $('#modalDelete').modal('hide');
                if (response.status == 0) {
                    alertMessage('error', response.errors, '');
                    return false;
                }
                alertMessage('success', response.message, '');
                $('#btnInvoiceCheckBox').val(1);
                $('#InvoiceDataTable').DataTable().ajax.reload();
            },
            error: function() {
                formLoading(0);
                alertMessage('error', 'Error in operation. Try again', '');
            }
        })
    } else {
        alertMessage('error', "Kindly select one or more invoice(s)", '');
        $('#modalDelete').modal('hide');
    }
}

function markSendEmail() {
    var getAllInvoiceIdsArr = $("input[name='InvoiceIDMulti[]']:checked").map(function() {
        return this.value;
    }).get();

    if (getAllInvoiceIdsArr.length > 0) {
        json = {
            InvoiceIdsArr: getAllInvoiceIdsArr
        };
        var path = app_url + '/invoices/markSend';
        $.ajax({
            url: path,
            data: json,
            method: 'POST',
            type: 'POST',
            dataType: 'JSON',
            beforeSend: function() {
                formLoading(1);
            },
            success: function(response) {
                formLoading(0);
                $('#modalDelete').modal('hide');
                if (response.status == 0) {
                    alertMessage('error', response.errors, '');
                    return false;
                }
                alertMessage('success', response.message, '');
                $('#btnInvoiceCheckBox').val(1);
                $('#InvoiceDataTable').DataTable().ajax.reload();
            },
            error: function() {
                formLoading(0);
                alertMessage('error', 'Error in operation. Try again', '');
            }
        })
    } else {
        alertMessage('error', "Kindly select one or more invoice(s)!", '');
        $('#modalDelete').modal('hide');
    }
}

function deleteBusinessCompany() {
    var getAllIdsArr = $("input[name='BusinessCompanyIDMulti[]']:checked").map(function() {
        return this.value;
    }).get();

    if (getAllIdsArr.length > 0) {
        json = {
            idsArr: getAllIdsArr
        };
        var path = app_url + '/businesscompany/delete';
        $.ajax({
            url: path,
            data: json,
            method: 'POST',
            type: 'POST',
            dataType: 'JSON',
            beforeSend: function() {
                formLoading(1);
            },
            success: function(response) {
                formLoading(0);
                $('#modalDelete').modal('hide');
                if (response.status == 0) {
                    alertMessage('error', response.errors, '');
                    return false;
                }
                alertMessage('success', response.message, '');
                $('#btnCheckBox').val(1);
                $('#BusinessCompanyTable').DataTable().ajax.reload();
            },
            error: function() {
                formLoading(0);
                alertMessage('error', 'Error in operation. Try again', '');
            }
        })
    } else {
        alertMessage('error', "Kindly select one or more Business Company(s)", '');
        $('#modalDelete').modal('hide');
    }
}

function TopBottomSectionToggle(status = 'show') {

    var TopBottomSection = (status == 'show') ? 1 : 0;
    var json = {
        TopBottomSection: TopBottomSection
    }

    var path = app_url + '/users/topbottomsection';
    $.ajax({
        url: path,
        data: json,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        success: function(response) {
            if (status == 'show') {
                $('.main-header').fadeIn();
                $('.main-footer').fadeIn();
                $('.top_bottom_collapse').hide();
                $('.top_bottom_expand').show();
            } else {
                $('.main-header').fadeOut();
                $('.main-footer').fadeOut();
                $('.top_bottom_expand').hide();
                $('.top_bottom_collapse').show();
            }
        },
        error: function() {
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function sendResellerCustomerRateClose(UserID) {
    var path = app_url + '/resellerusers/ratetable/multiclose/' + UserID;
    var ids = new Array();
    $("input[name='RateTableRateMCCMNCMulti[]']:checked").each(function() {
        ids.push($(this).val());
    });
    var date = $('#CustomerRateCloseModal #FromDate').val();
    var formData = {
        MCCMNCList: ids,
        Date: date
    };
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            $('.confirmLoadingMessage').removeClass('hidden');
            $('.confirmButton').prop('disabled', true);
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                $('.confirmLoadingMessage').addClass('hidden');
                $('.confirmButton').prop('disabled', false);
                return false;
            }
            $('#CustomerRateCloseModal').modal('hide');
            alertMessage('success', response.message, '');
            page_redirect(response.url);
        },
        error: function() {
            $('.confirmLoadingMessage').addClass('hidden');
            $('.confirmButton').prop('disabled', false);
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function sendResellerCustomerExport(UserID) {
    var path = app_url + '/resellerusers/ratetable/export/' + UserID;
    var ids = new Array();
    $("input[name='RateTableRateMCCMNCMulti[]']:checked").each(function() {
        ids.push($(this).val());
    });
    var date = $('#CustomerRateCloseModal #FromDate').val();
    var formData = {
        MCCMNCList: ids,
        Date: date
    };

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            setTimeout(function() {
                page_redirect(response.url);
            }, default_timeout);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    });
}

function delFirewallIPAddress(IPAddress, type, Filter) {
    var path = app_url + '/firewall/delIPAddress';
    var formData = {
        IPAddress: IPAddress,
        type: type,
        Filter: Filter
    };
    $.ajax({
        url: path,
        data: formData,
        cache: false,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            setTimeout(function() {
                page_redirect(response.url);
            }, default_timeout);
        },

        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//Start/stop campaign
function ResStartStopCampaign(status) {
    var getAllIdsArr = $("input[name='CampaignIDMulti[]']:checked").map(function() {
        return this.value;
    }).get();

    var path = app_url + '/resellercampaign/isactivestatus';
    var formData = {
        CampaignIdsArr: getAllIdsArr,
        Status: status,
    };

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            $('#btnCampainCheckBox').val(1);
            $('#CampainDataTable').DataTable().ajax.reload();
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function resImportFileStep1Modal(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    var importType = $('#type').val();
    var targetID = '#modalImportBody';
    var modalId = '#modalImportID';

    var form = $("form[name='" + formname + "']")[0];
    var formData = new FormData(form);

    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        mimeType: 'multipart/form-data',
        contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
        processData: false, // NEEDED, DON'T OMIT THIS
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            $(targetID).html('');
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            $(targetID).html(response.data);
            $(modalId).modal('show');

            if (typeof response.ConfirmRateStep != 'undefined' && response.ConfirmRateStep == 1) {
                if (typeof response.RateType && response.RateType == 'Campaign') {
                    $('#confirmTempTableData').empty();
                    $('#confirmTempTableData').html(response.TempTableData);
                    $(modalId).modal('hide');
                    var tableHistoryID = 'CampaignTableConfirmation';
                    var modalConfirmID = 'modalCampaignTableConfirmation';
                    var pathImportTable = app_url + '/resellercampaign/temp/testTable';

                    $('.confirmLoadingMessage').addClass('hidden');
                    $('.confirmRateButton').prop('disabled', false);

                    var oTableLog = $('#' + tableHistoryID).DataTable({
                        processing: true,
                        serverSide: true,
                        "scrollX": true,
                        "scrollY": "350px",
                        "scrollCollapse": true,
                        aLengthMenu: paginationLimit,
                        "ajax": {
                            "url": pathImportTable,
                            "data": function(d) {
                                d.tempTableName = $("#tempTableName").val();
                                d.searchBy = $("#" + tableHistoryID + "_wrapper #searchby").val();
                            }
                        },
                        initComplete: function() {
                            var input = $("#" + tableHistoryID + "_filter input").unbind(),
                                self = this.api(),
                                $searchButton = $('<button>')
                                .text('Search')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    self.search(input.val()).draw();
                                }),
                                $clearButton = $('<button>')
                                .text('Clear')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    input.val('');
                                    $searchButton.click();
                                })
                            $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                            $("#" + tableHistoryID + "_filter input").unbind();
                            $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                                if (e.keyCode == 13) {
                                    oTableLog.search(this.value).draw();
                                }
                            });
                        },
                    });

                    $('#' + modalConfirmID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();
                }
            }

            return false;
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

//saveFileDataModal
function resImportFileStep2Modal(formname) {
    var path = $("form[name='" + formname + "']").attr('action');
    var formData = $("form[name='" + formname + "']").serializeArray();
    var importType = $('#type').val();
    var targetID = '#modalImportBody';
    var modalId = '#modalImportID';
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            $('#import_success_file').addClass('hidden');
            $('#import_error_file').addClass('hidden');
            $('#import_error_file_text').addClass('hidden');
            var importType = $('#ImportType').val();
            var type = $('#type').val();
            if (response.status == 1) {
                if (response.FutureStep == 2) {
                    alertMessage('success', response.message, '');
                    $('#confirmTempTableData').empty();
                    $('#confirmTempTableData').html(response.TempTableData);
                    var tableHistoryID = 'FutureRateTableConfirmation';
                    var modalConfirmID = 'modalFutureRateTableConfirmation';
                    var pathImportTable = app_url + '/import/vendorRate/testTable';
                    if (response.RateType == 'CustomerRate') {
                        pathImportTable = app_url + '/import/customerRate/testTable';
                    }

                    $('.confirmLoadingMessage').addClass('hidden');
                    $('.confirmRateButton').prop('disabled', false);

                    var oTableLog = $('#' + tableHistoryID).DataTable({
                        processing: true,
                        serverSide: true,
                        "scrollX": true,
                        "scrollY": "350px",
                        "scrollCollapse": true,
                        aLengthMenu: paginationLimit,
                        "ajax": {
                            "url": pathImportTable,
                            "data": function(d) {
                                d.tempTableName = $("#tempTableName").val();
                                d.searchBy = $("#" + tableHistoryID + "_wrapper #searchby").val();
                            }
                        },
                        initComplete: function() {
                            var input = $("#" + tableHistoryID + "_filter input").unbind(),
                                self = this.api(),
                                $searchButton = $('<button>')
                                .text('Search')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    self.search(input.val()).draw();
                                }),
                                $clearButton = $('<button>')
                                .text('Clear')
                                .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                .click(function() {
                                    input.val('');
                                    $searchButton.click();
                                })
                            $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                            $("#" + tableHistoryID + "_filter input").unbind();
                            $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                                if (e.keyCode == 13) {
                                    oTableLog.search(this.value).draw();
                                }
                            });
                        },
                    });

                    if (response.RateType == 'CustomerRate') {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    } else {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '<option value="ChangeType">Change Type</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    }

                    $('#' + modalConfirmID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();


                    //                    var modelID = '#modalFutureImportConfirm';
                    //                    $(modelID+' #FutureImportTitle').text(response.ImportTitle);
                    //                    $(modelID+' #FutureImportSummaryTable tbody').html(response.FutureTableData);
                    //                    $(modelID+' .btnFutureImport').val(response.FileImportID);
                    //                    $(modelID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();
                } else if (response.ConfirmRateStep == 1) {
                    $('#confirmTempTableData').empty();
                    $('#confirmTempTableData').html(response.TempTableData);
                    $(modalId).modal('hide');
                    if (response.RateType == 'CustomerRate') {
                        var tableHistoryID = 'RateTableConfirmation';
                        var modalConfirmID = 'modalRateTableConfirmation';
                        var pathImportTable = app_url + '/import/customerRate/testTable';
                    } else if (response.RateType == 'Campaign') {
                        var tableHistoryID = 'CampaignTableConfirmation';
                        var modalConfirmID = 'modalCampaignTableConfirmation';
                        var pathImportTable = app_url + '/resellercampaign/temp/testTable';
                    } else {
                        var tableHistoryID = 'VendorRateTableConfirmation';
                        var modalConfirmID = 'modalVendorRateTableConfirmation';
                        var pathImportTable = app_url + '/import/vendorRate/testTable';
                    }
                    $('.confirmLoadingMessage').addClass('hidden');
                    $('.confirmRateButton').prop('disabled', false);

                    if (response.RateType == 'Campaign') {
                        var oTableLog = $('#' + tableHistoryID).DataTable({
                            processing: true,
                            serverSide: true,
                            "scrollX": true,
                            "scrollY": "350px",
                            "scrollCollapse": true,
                            aLengthMenu: paginationLimit,
                            "ajax": {
                                "url": pathImportTable,
                                "data": function(d) {
                                    d.tempTableName = $("#tempTableName").val();
                                    d.searchBy = $("#" + tableHistoryID + "_wrapper #searchby").val();
                                }
                            },
                            initComplete: function() {
                                var input = $("#" + tableHistoryID + "_filter input").unbind(),
                                    self = this.api(),
                                    $searchButton = $('<button>')
                                    .text('Search')
                                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                    .click(function() {
                                        self.search(input.val()).draw();
                                    }),
                                    $clearButton = $('<button>')
                                    .text('Clear')
                                    .addClass('btn btn-primary btn-sm edit margin-r-5 m-l-5')
                                    .click(function() {
                                        input.val('');
                                        $searchButton.click();
                                    })
                                $("#" + tableHistoryID + "_filter label").append($searchButton, $clearButton);
                                $("#" + tableHistoryID + "_filter input").unbind();
                                $("#" + tableHistoryID + "_filter input").bind('keyup', function(e) {
                                    if (e.keyCode == 13) {
                                        oTableLog.search(this.value).draw();
                                    }
                                });
                            },
                        });
                    }

                    if (response.RateType == 'CustomerRate') {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    } else if (response.RateType != 'Campaign') {
                        $('<span class="pull-right" style="padding-left:5px;">Search By:&nbsp;&nbsp;' +
                            '<select class="" id="searchby">' +
                            '<option value="RateAction">Rate Action</option>' +
                            '<option value="MCCMNC">MCCMNC</option>' +
                            '<option value="DialCode">Dial Code</option>' +
                            '<option value="Rate">Rate</option>' +
                            '<option value="Country">Country</option>' +
                            '<option value="Network">Network</option>' +
                            '<option value="FromDate">From Date</option>' +
                            '<option value="RateNote">Rate Note</option>' +
                            '<option value="ChangeType">Change Type</option>' +
                            '</select>' +
                            '</span>').appendTo("#" + tableHistoryID + "_filter label");
                    }

                    $('#' + modalConfirmID).modal('show');
                    $('[data-toggle="tooltip"]').tooltip();
                } else {
                    $('#modalRateTableConfirmation').modal('hide');
                    // $('#modalImportID').modal('hide');
                    $('#import_success_file').find('#successMessage').css('text-align', 'left');
                    //alertMessage('success', response.message, '');
                    $(targetID).html(response.message);
                    $(targetID).css('color', 'green');
                    $(modalId).modal('show');

                    if (importType == '3' || type == '7') {
                        //                        $('#import_success_file').find('#successMessage').text(response.message).css('text-align', 'left');
                    }
                    $('#import_success_file').removeClass('hidden');
                }
            } else {
                alertMessage('error', response.message, '');
                if (response.status == 0) {
                    $('#err_file_import_label').attr('onclick', 'page_redirect("' + response.data.error_file + '"); return false;');
                    $('#import_error_file').removeClass('hidden');
                    showFileIcon(response.data.error_file);
                    return false;
                }
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function resConfirmFileImport(importID, action, rateType) {
    var path = app_url + '/import/confirm/' + importID;
    var formData = {
        Action: action,
        RateType: rateType
    };
    if (rateType == 'campaign') {
        path = app_url + '/resellercampaign/confirm/' + importID;
        formData = {
            Action: action,
            RateType: rateType,
            ContactGroup: $('#ContactGroup').val()
        };
    }
    var targetID = '#modalImportBody';
    var modalId = '#modalImportID';
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
            $('.confirmLoadingMessage').removeClass('hidden');
            $('.confirmRateButton').prop('disabled', true);
        },
        success: function(response) {
            formLoading(0);
            $('#import_success_file').addClass('hidden');
            $('#import_error_file').addClass('hidden');
            $('#import_error_file_text').addClass('hidden');
            $('#modalRateTableConfirmation').modal('hide');
            $('#modalVendorRateTableConfirmation').modal('hide');
            $('#modalCampaignTableConfirmation').modal('hide');
            $(modalId).modal('hide');
            if (response.status == 1) {
                $('#import_success_file').find('#successMessage').css('text-align', 'left');
                alertMessage('success', response.message, '');
                $('#import_success_file').find('#successMessage').text(response.message).css('text-align', 'left');
                $('#import_success_file').removeClass('hidden');
                if (rateType == 'campaign') {
                    var targetID = '#modalImportBody';
                    var modalId = '#modalImportID';
                    $(targetID).html(response.message);
                    $(targetID).css('color', 'green');
                    $(modalId).modal('show');
                    $('#import_success_file').removeClass('hidden');
                    $('#CampainDataTable').DataTable().ajax.reload();
                }
            } else {
                alertMessage('error', response.message, '');
                $('#import_error_file_text').removeClass('hidden');
                $('#import_error_file_text_label').text(response.message);
                return false;
            }
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}

function autoUploadRuleRetry(id) {
    var path = app_url + '/autouploadreport/retry/' + id;
    var formData = {};
    $.ajax({
        url: path,
        data: formData,
        method: 'POST',
        type: 'POST',
        dataType: 'JSON',
        beforeSend: function() {
            formLoading(1);
        },
        success: function(response) {
            formLoading(0);
            if (response.status == 0) {
                alertMessage('error', response.errors, '');
                return false;
            }
            alertMessage('success', response.message, '');
            setTimeout(function() {
                page_redirect(response.url);
            }, default_timeout);
        },
        error: function() {
            formLoading(0);
            alertMessage('error', 'Error in operation. Try again', '');
        }
    })
}