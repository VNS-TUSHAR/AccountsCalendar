/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.mis;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 *
 * @author tushar
 */
public class AddUsers extends HttpServlet {

    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/AccountsInfo";
//    private static final String JDBC_URL = "jdbc:mysql://111.118.177.68:3306/AccountsInfo";
    private static final String JDBC_USER = "reports";
    private static final String JDBC_PASSWORD = "reports@#123";

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet AddUsers</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet AddUsers at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

//        int sno = 0;
        String Task = null;
        String Priority = null;
        String Status = null;
        Date startDate = null;
        Date dueDate = null;

        Connection conn = null;
        Statement stmt = null;

        try {

            if (request.getContentType().contains("multipart")) {
                List<FileItem> items = new ServletFileUpload(new DiskFileItemFactory()).parseRequest(request);

                for (FileItem item : items) {
                    if (item.isFormField()) {
                        String name = item.getFieldName();
                        String value = item.getString();
                        if (name.equals("Task")) {
                            Task = value;
                        }
                        if (name.equals("Priority")) {
                            Priority = value;
                        }

                        if (name.equals("startDate")) {
                            try {
                                startDate = Date.valueOf(value);
                            } catch (IllegalArgumentException e) {
                                System.out.println("Invalid startDate format: " + value);
                            }
                        }

                        if (name.equals("dueDate")) {
                            try {
                                dueDate = Date.valueOf(value);
                            } catch (IllegalArgumentException e) {
                                System.out.println("Invalid startDate format: " + value);
                            }
                        }

                    }
                }
            }

            try {

                if (Task == null || Priority == null || startDate == null || dueDate == null) {
                    response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Missing parameters.");
                    return;
                }

                System.out.println("Task " + Task + " Priority " + Priority + " Status " + Status + " startDate " + startDate + " dueDate " + dueDate);

                Class.forName("com.mysql.cj.jdbc.Driver");

                conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);

                String sql = "Insert Into TaskList(Task,Priority,StartDate,DueDate) values(?,?,?,?);";

                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setString(1, Task);
                ps.setString(2, Priority);
                ps.setDate(3, startDate);
                ps.setDate(4, dueDate);

                int rowsUpdated = ps.executeUpdate();
                System.out.println(rowsUpdated + " New Field Inserted.");

                ps.close();
                conn.close();

            } catch (Exception e) {
                e.printStackTrace();
            }

            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().write("New Field Added successfully");

        } catch (Exception ex) {

            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Failed to Insert task");
        }
 
    }
}
