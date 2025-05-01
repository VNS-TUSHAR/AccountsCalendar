package com.mycompany.mis;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

//import ram_rcs.ActivityLog;
//import com.fasterxml.jackson.databind.JsonNode;
//import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Base64;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.json.JSONArray;
import org.json.JSONObject;
import java.sql.Date;
import java.util.ArrayList;

public class dashboard extends HttpServlet {
//String url = "jdbc:mysql://111.118.177.68:3306/";

    // Replace with your actual DB info
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/AccountsInfo"; 
//    private static final String JDBC_URL = "jdbc:mysql://111.118.177.68:3306/AccountsInfo";
    private static final String JDBC_USER = "reports";
    private static final String JDBC_PASSWORD = "reports@#123";

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        JSONArray tasks = new JSONArray();
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            // Load MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Connect to database
            conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
            stmt = conn.createStatement();
            String sql = "SELECT sno,Task, Priority, Status, StartDate, DueDate, PercentComplete, Notes, Proof FROM TaskList";
            rs = stmt.executeQuery(sql);

            while (rs.next()) {

                JSONObject task = new JSONObject();

                task.put("sno", rs.getInt("sno"));

                task.put("Task", safeGet(rs, "Task"));

                task.put("Priority", safeGet(rs, "Priority"));

                task.put("Status", safeGet(rs, "Status"));

                task.put("StartDate", safeGetDate(rs, "StartDate"));

                task.put("DueDate", safeGetDate(rs, "DueDate"));

                task.put("PercentComplete", rs.getDouble("PercentComplete"));

                task.put("Notes", safeGet(rs, "Notes"));

                task.put("Proof", safeGet(rs, "Proof"));

                tasks.put(task);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            // Clean up
            try {
                if (rs != null) {
                    rs.close();
                }
                if (stmt != null) {
                    stmt.close();
                }
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        PrintWriter out = response.getWriter();
        out.print(tasks.toString());
        out.flush();
    }

//    @Override
//    protected void doPost(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException {
//
//        int sno = 0;
//        String status = null;
//        Date startDate = null;
//        Date dueDate = null;
//        int percentComplete = 0;
//
//        String notes = null;
//        String proof = null;
//
//        String task = null;
//
//        Connection conn = null;
//        Statement stmt = null;
////        ResultSet rs = null;
//
//        if (ServletFileUpload.isMultipartContent(request)) {
//            try {
//                List<FileItem> items = new ServletFileUpload(new DiskFileItemFactory()).parseRequest(request);
//                for (FileItem item : items) {
//                    if (item.isFormField()) {
//                        String name = item.getFieldName();
//                        String value = item.getString();
//
//                        switch (name) {
//                            case "sno":
//                                sno = Integer.parseInt(value);
//                                break;
//                            case "status":
//                                status = value;
//                                break;
//                            case "startDate":
//                                startDate = Date.valueOf(value);
//                                break;
//                            case "dueDate":
//                                dueDate = Date.valueOf(value);
//                                break;
//                            case "percentComplete":
//                                percentComplete = Integer.parseInt(value);
//                                break;
//
//                            case "notes":
//                                notes = value;
//                                break;
//                            case "proof":
//                                proof = value;
//                                break;
//                            case "task":
//                                task = value;
//                                break;
//                        }
//                    }
//                }
//
//                // Now update the database with the values (this is just an example)
//                System.out.println("Updating task #" + sno);
//                System.out.println("Status: " + status);
//                System.out.println("StartDate: " + startDate);
//                System.out.println("DueDate: " + dueDate);
////                System.out.println("Percent: " + percentComplete);
//
//                System.out.println("Notes: " + notes);
//                System.out.println("Proof: " + proof);
//                System.out.println("Task: " + task);
//
//                try {
//                    Class.forName("com.mysql.cj.jdbc.Driver");
//                    conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
//
//                    PreparedStatement ps = null;
//
////                    if (proof.equals("") || proof.equals(null))
//                    if (proof == null || proof.isEmpty()) {
//
////              String sql = "UPDATE TaskList SET Status = ?, StartDate = ?, DueDate = ?, PercentComplete = ?, DONE = ?, Notes = ? WHERE sno = ?";
//                        String sql = "UPDATE TaskList SET Status = ?, StartDate = ?, DueDate = ?, PercentComplete = ?, Notes = ? WHERE task = ?";
//
//                        ps = conn.prepareStatement(sql);
//                        ps.setString(1, status);
//                        ps.setDate(2, startDate);
//                        ps.setDate(3, dueDate);
//                        ps.setInt(4, percentComplete);
//                        ps.setString(5, notes);
//                        ps.setString(6, task);
//
////                        ps.setString(7, proof);
////                        ps.setInt(7, sno);
//                        int rowsUpdated = ps.executeUpdate();
//
//                        System.out.println(rowsUpdated + " row(s) updated.");
//
//                    } else {
//                        String sql = "UPDATE TaskList SET Status = ?, StartDate = ?, DueDate = ?, PercentComplete = ?, Notes = ?,  Proof = ?  WHERE Task = ?";
//
//                        ps = conn.prepareStatement(sql);
//
//                        ps.setString(1, status);
//                        ps.setDate(2, startDate);
//                        ps.setDate(3, dueDate);
//                        ps.setInt(4, percentComplete);
//                        ps.setString(5, notes);
//                        ps.setString(6, proof);
//                        ps.setString(7, task);
//
////                        ps.setInt(8, sno);
//                        int rowsUpdated = ps.executeUpdate();
//
//                        System.out.println(rowsUpdated + " row(s) updated.");
//                    }
//
//                    ps.close();
//                    conn.close();
//
//                } catch (Exception e) {
//                    e.printStackTrace();
//                }
//
//                response.setStatus(HttpServletResponse.SC_OK);
//                response.getWriter().write("Task updated successfully");
//
//            } catch (Exception ex) {
//
//                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Failed to update task");
//            }
//        } else {
//            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Request is not multipart/form-data");
//        }
//    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        int sno = 0;
        String status = null;
        Date startDate = null;
        Date dueDate = null;
        int percentComplete = 0;
        String notes = null;
        String task = null;

        String UPLOAD_DIR = "/usr/local/apache-tomcat-9.0.84/webapps/AccountInfo/img/";

        List<String> uploadedFileNames = new ArrayList<>();

        if (ServletFileUpload.isMultipartContent(request)) {
            try {
                List<FileItem> items = new ServletFileUpload(new DiskFileItemFactory()).parseRequest(request);

                for (FileItem item : items) {
                    if (item.isFormField()) {
                        String name = item.getFieldName();
                        String value = item.getString("UTF-8"); // To support Unicode

                        switch (name) {
                            case "sno":
                                sno = Integer.parseInt(value);
                                break;
                            case "status":
                                status = value;
                                break;
                            case "startDate":
                                startDate = Date.valueOf(value);
                                break;
                            case "dueDate":
                                dueDate = Date.valueOf(value);
                                break;
                            case "percentComplete":
                                percentComplete = Integer.parseInt(value);
                                break;
                            case "notes":
                                notes = value;
                                break;
                            case "task":
                                task = value;
                                break;
                        }
                    } else if (item.getName() != null && !item.getName().isEmpty()) {

                        // It's a file field
                        String fileName = Paths.get(item.getName()).getFileName().toString();

                        File uploadedFile = new File(UPLOAD_DIR + fileName);

                        item.write(uploadedFile);
                        uploadedFileNames.add(fileName);
                    }
                }

                String proof = String.join(",", uploadedFileNames);

                try (Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD)) {
                    String sql;
                    PreparedStatement ps;

                    if (proof.isEmpty()) {
                        sql = "UPDATE TaskList SET Status = ?, StartDate = ?, DueDate = ?, PercentComplete = ?, Notes = ? WHERE Task = ?";
                        ps = conn.prepareStatement(sql);
                        ps.setString(1, status);
                        ps.setDate(2, startDate);
                        ps.setDate(3, dueDate);
                        ps.setInt(4, percentComplete);
                        ps.setString(5, notes);
                        ps.setString(6, task);
                    }
                    else {
                        sql = "UPDATE TaskList SET Status = ?, StartDate = ?, DueDate = ?, PercentComplete = ?, Notes = ?, Proof = ? WHERE Task = ?";
                        ps = conn.prepareStatement(sql);
                        ps.setString(1, status);
                        ps.setDate(2, startDate);
                        ps.setDate(3, dueDate);
                        ps.setInt(4, percentComplete);
                        ps.setString(5, notes);
                        ps.setString(6, proof);
                        ps.setString(7, task);
                    }
                    int rowsUpdated = ps.executeUpdate();
                    System.out.println(rowsUpdated + " row(s) updated.");
                    ps.close();
                }

                response.setStatus(HttpServletResponse.SC_OK);
                response.getWriter().write("Task updated successfully");

            } catch (Exception ex) {
                ex.printStackTrace();
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Failed to update task");
            }
        } else {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Request is not multipart/form-data");
        }
    }

    private String safeGet(ResultSet rs, String column) throws SQLException {
        String val = rs.getString(column);
        return val != null ? val : "";
    }

    private String safeGetDate(ResultSet rs, String column) throws SQLException {
        java.sql.Date date = rs.getDate(column);
        return date != null ? date.toString() : "";
    }

    @Override
    public String getServletInfo() {
        return "Dashboard data provider";
    }
    
}