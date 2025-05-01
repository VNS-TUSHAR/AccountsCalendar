<%-- 
    Document   : dashboard
    Created on : 21 Apr 2025, 6:00:33 pm
    Author     : tushar
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>

        <style>

            body {
                font-family: Arial, sans-serif;
                margin: 20px;
            }

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


        </style>


    </head>
    <body>

        <h2>Task Management Data Table</h2>

        <button class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#addModal">Add Task</button>
        <!--<button class="btn btn-sm btn-success"> Add User </button>--> 
        <table id="taskTable" class="display">
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th>Due Date</th>
                    <th>Percent Complete</th>
                    <th>DONE</th>
                    <th>Notes</th>
                    <th>Proof</th>
                    <th>Actions</th>
                </tr>
            </thead> 

            <tbody id="tableBody" role="rowgroup"> 
            </tbody>

        </table>


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

                            <div class="form-group">
                                <label><b>Status</b></label>
                                <input type="text" class="form-control" id="modal-status">
                            </div>
                            <div class="form-group">
                                <label><b>Start Date</b></label>
                                <input type="date" class="form-control" id="modal-startDate">
                            </div>
                            <div class="form-group">
                                <label><b>Due Date</b></label>
                                <input type="date" class="form-control" id="modal-dueDate">
                            </div>
                            <div class="form-group">
                                <label> <b>Complete %</b></label>
                                <input type="number" class="form-control" id="modal-percentComplete" step="1">
                            </div>
                            <div class="form-group">
                                <label><b>Done?</b></label>
                                <input type="text" class="form-control" id="modal-done">
                            </div>
                            <div class="form-group">
                                <label><b>Notes</b></label>
                                <textarea class="form-control" id="modal-notes"></textarea>
                            </div>
                            <div class="form-group">
                                <label><b>Proof</b></label>


                                <input type="file" class="form-control" id="modal-proof" accept="application/pdf,image/*" >

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

                            <div class="form-group" >
                                <label><b>Status</b></label>
                                <input type="text" class="form-control" id="modal-AddStatus" required>
                            </div>


                            <div class="form-group">
                                <label><b>Start Date</b></label>
                                <input type="date" class="form-control" id="modal-AddstartDate">
                            </div>

                            <div class="form-group">
                                <label><b>Due Date</b></label>
                                <input type="date" class="form-control" id="modal-AdddueDate">
                            </div>

                            <div class="form-group">
                                <label> <b>Complete %</b></label>
                                <input type="number" class="form-control" id="modal-AddpercentComplete" step="1">
                            </div>
                            <div class="form-group">
                                <label><b>Done?</b></label>
                                <input type="text" class="form-control" id="modal-Adddone">
                            </div>

                            <div class="form-group">
                                <label><b>Notes</b></label>
                                <textarea class="form-control" id="modal-Addnotes"></textarea>
                            </div>

                            <div class="form-group">
                                <label><b>Proof</b></label> 
                                <input type="file" class="form-control" id="modal-Addproof" accept="application/pdf,image/*" > 
                            </div>
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


        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>



        <script>


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
                        data.forEach(function (task) {
                            var row = document.createElement('tr');
                            var snoCell = document.createElement('td');
                            snoCell.textContent = task.sno || 'N/A';
                            row.appendChild(snoCell);
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

                            var doneCell = document.createElement('td');
                            doneCell.textContent = task.DONE || 'N/A';
                            row.appendChild(doneCell);

                            var notesCell = document.createElement('td');
                            notesCell.textContent = task.Notes || 'N/A';
                            row.appendChild(notesCell);

                            var proofCell = document.createElement('td');

                            if (task.Proof && (task.Proof.startsWith("/usr/local/") || task.Proof.startsWith("/usr/local/")))
                            {
                                var fileName = task.Proof.split('img/');

                                proofCell.innerHTML = '<button class="btn btn-sm btn-success" onclick="window.open(\'http://111.118.177.68:8021/AccountInfo/img/' + fileName[1] + '\', \'_blank\')">View</button>';
                            } else
                            {
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

            function handleFileUpload() {
                var proofFile = document.getElementById('modal-proof').files[0];
                if (!proofFile) {
                    alert("Please select a file.");
                    return;
                }
                var allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif'];
                if (!allowedTypes.includes(proofFile.type)) {
                    alert("Only PDF or image files are allowed.");
                    return;
                }

                var formData = new FormData();
                formData.append("file", proofFile);

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "UploadMedia", true);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            var fileUrl = xhr.responseText;

                            try {
                                var json = JSON.parse(fileUrl);
                                fileUrl = json.url;
                            } catch (e) {

                            }
                            document.getElementById('modal-notes').value = fileUrl;

                            var fileName = fileUrl.split(': ').pop();

                            fileUrl = "http://111.118.177.68:8021/AccountInfo/img/" + fileName;


                            var sno = document.getElementById('modal-sno').value;
                            var rows = document.querySelectorAll("table tbody tr");

                            rows.forEach(function (row)
                            {
                                var rowSno = row.cells[0].textContent.trim();
                                if (rowSno === sno)
                                {
                                    var notesCell = row.cells[8];

                                    if (notesCell.innerHTML.includes("Download")) {
                                        notesCell.innerHTML = '';
                                    }

//                           fileUrl = "http://111.118.177.68:8021/AccountInfo/img/" + fileName;

                                    var proofCell = row.cells[9];

                                    var downloadButtonHtml = '<button class="btn btn-sm btn-success" onclick="window.open(\'' + fileUrl + '\', \'_blank\')">View</button>';
                                    proofCell.innerHTML = downloadButtonHtml;
                                }
                            });
//                                                    alert("File uploaded successfully.");
                        } else {
                            alert("Upload failed: " + xhr.responseText);
                        }
                    }
                };

                xhr.send(formData);
            }

            function editRow(row)
            {
                var cells = row.getElementsByTagName('td');

                document.getElementById('modal-sno').value = cells[0].textContent;
                document.getElementById('modal-Task').value = cells[1].textContent;
                document.getElementById('modal-status').value = cells[3].textContent;
                document.getElementById('modal-startDate').value = cells[4].textContent;
                document.getElementById('modal-dueDate').value = cells[5].textContent;
                document.getElementById('modal-percentComplete').value = cells[6].textContent;
                document.getElementById('modal-done').value = cells[7].textContent;
                document.getElementById('modal-notes').value = cells[8].textContent;

                // Show the modal (Bootstrap 5)
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
                var done = document.getElementById('modal-done').value;
                var notes = document.getElementById('modal-notes').value;
                var fileInput = document.getElementById('modal-proof');
                var file = fileInput.files[0];

                document.getElementById('cover-spin').style.display = "unset";
                document.getElementById('saveResult').style.display = "unset";


                function sendUpdateRequest(fileUrl, fileName, proofPath)
                {
                    const formData = new FormData();
                    formData.append("sno", sno);
                    formData.append("status", status);
                    formData.append("startDate", startDate);
                    formData.append("dueDate", dueDate);
                    formData.append("percentComplete", percentComplete);
                    formData.append("done", done);
                    formData.append("notes", fileUrl);
                    formData.append("proof", proofPath);

                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", "dashboard", true);
                    xhr.onreadystatechange = function () {
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
                                        row.cells[7].textContent = done;
                                        row.cells[8].textContent = fileName;
                                        row.cells[9].innerHTML = '<a href="' + fileUrl + '" target="_blank" class="btn btn-sm btn-success" style="background: #198754; color: white;" >View</a>';

                                        var editBtn = row.cells[10].querySelector('button');

                                        if (editBtn) {
                                            editBtn.disabled = true;
                                            // editBtn.style.cursor = "pointer";  
                                        }
                                    }
                                });

//                                status startDate dueDate percentComplete done fileName

                                sendChanges(Task, sno, status, startDate, dueDate, percentComplete, done, fileName);

                                bootstrap.Modal.getInstance(document.getElementById('exampleModal')).hide();
                            } else {
                                alert("Error updating task.");
                            }
                        }
                    };
                    xhr.send(formData);
                }

                if (!file) {
                    // Use existing fileUrl from notes field
                    var fileUrl = notes;
                    var fileName = fileUrl.split('/').pop();
                    var proofPath = "/usr/local/apache-tomcat-9.0.84/webapps/AccountInfo/img/" + fileName;
                    sendUpdateRequest(fileUrl, fileName, proofPath);
                } else
                {
                    // Upload new file 
                    var uploadForm = new FormData();
                    uploadForm.append("file", file);

                    var uploadXhr = new XMLHttpRequest();
                    uploadXhr.open("POST", "UploadMedia", true);
                    uploadXhr.onreadystatechange = function () {
                        if (uploadXhr.readyState === 4) {
                            if (uploadXhr.status === 200) {
                                let fileUrl = uploadXhr.responseText;
                                try {
                                    fileUrl = JSON.parse(fileUrl).url;
                                } catch (e) {
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


            document.getElementById('addChangesBtn').addEventListener('click', function ()
            {
                var Task = document.getElementById('modal-AddTask').value;

                if (Task === "")
                {
                    alert("Please Enter Task Details Field");
                    return;
                }

                var status = document.getElementById('modal-AddStatus').value;

                var Priority = document.getElementById('modal-AddPriority').value;

                if (Priority === "")
                {
                    alert("Please Select Priority of the task");
                    return;
                }


                var sno = document.getElementById('modal-Addsno').value;

                var startDate = document.getElementById('modal-AddstartDate').value;

                var dueDate = document.getElementById('modal-AdddueDate').value;

                var percentComplete = document.getElementById('modal-AddpercentComplete').value;
//                modal-AddpercentComplete 
                var done = document.getElementById('modal-Adddone').value;

                var notes = document.getElementById('modal-Addnotes').value;

                var fileInput = document.getElementById('modal-Addproof');

                var file = fileInput.files[0];

                var fileName = "";

                if (file)
                {
                    fileName = file.name;
                    console.log(fileName);
                } else {
                    console.log("No file selected.");
                }

                var proofPath = "";

                if (file)
                {
                    sendAddFile(file);
                    proofPath = "/usr/local/apache-tomcat-9.0.84/webapps/AccountInfo/img/" + fileName;
                } else {
                    proofPath = "No File Uploaded";
                }

                var formData = new FormData();
                formData.append("Task", Task);
                formData.append("Priority", Priority);
                formData.append("Status", status);
                formData.append("startDate", startDate);
                formData.append("dueDate", dueDate);
                formData.append("percentComplete", percentComplete);
                formData.append("done", done);
                formData.append("notes", notes);
                formData.append("proof", proofPath);

//                sendAddRequest(formData);

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
                            var fileButton = '';
                            if (fileName && fileName !== "No File Uploaded") {
                                fileButton = '<button class="btn btn-sm btn-success" onclick="window.open(\'http://111.118.177.68:8021/AccountInfo/img/' + fileName + '\', \'_blank\')">View</button>';
                            } else {
                                fileButton = 'N/A';
                            }

                            row.innerHTML =
                                    '<td>' + newSno + '</td>' +
                                    '<td>' + Task + '</td>' +
                                    '<td>' + Priority + '</td>' +
                                    '<td>' + status + '</td>' +
                                    '<td>' + startDate + '</td>' +
                                    '<td>' + dueDate + '</td>' +
                                    '<td>' + percentComplete + '</td>' +
                                    '<td>' + done + '</td>' +
                                    '<td>' + (notes || 'N/A') + '</td>' +
                                    '<td>' + fileButton + '</td>' +
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

            function sendAddFile(file)
            {
                // Upload new file  addModal
                var uploadForm = new FormData();
                uploadForm.append("file", file);

                var uploadXhr = new XMLHttpRequest();

                uploadXhr.open("POST", "UploadMedia", true);

                uploadXhr.onreadystatechange = function ()
                {
                    if (uploadXhr.readyState === 4)
                    {
                        if (uploadXhr.status === 200)
                        {
                            let fileUrl = uploadXhr.responseText;

                            try {
                                fileUrl = JSON.parse(fileUrl).url;
                            } catch (e) {
                            }

                        } else {
                            alert("File upload failed: " + uploadXhr.responseText);
                        }
                    }
                };
                uploadXhr.send(uploadForm);
            }


            function sendChanges(Task, sno, status, startDate, dueDate, percentComplete, done, fileName)
            {

//                alert(" Changes need to sent " + status + " startDate " + " dueDate " + dueDate + " percentComplete " + percentComplete + " startDate " + startDate + " done " + done + " fileName " + fileName);

                var uploadXhr = new XMLHttpRequest();

                var url = "UploadMedia?status=" + encodeURIComponent(status) + "&startDate=" + encodeURIComponent(startDate) + "&dueDate=" + encodeURIComponent(dueDate) + "&percentComplete=" + encodeURIComponent(percentComplete) + "&done=" + encodeURIComponent(done) + "&fileName=" + encodeURIComponent(fileName) + "&sno=" + encodeURIComponent(sno) + "&Task=" + encodeURIComponent(Task);

                uploadXhr.onreadystatechange = function ()
                {
                    if (uploadXhr.readyState === 4)
                    {
                        if (uploadXhr.status === 200)
                        {
                            let response = uploadXhr.responseText;

//                            alert("Response " + response); 
                        } else
                        {
                            alert("Error sending mail " + uploadXhr.responseText);
                        }
                    }
                };
                uploadXhr.open("GET", url, true);
                uploadXhr.send();
            }

        </script>

    </body>
</html>
