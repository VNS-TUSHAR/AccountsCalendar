package com.mycompany.mis;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriBuilderException;

@MultipartConfig
public class UploadMedia extends HttpServlet {

    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/AccountsInfo";
//    private static final String JDBC_URL = "jdbc:mysql://111.118.177.68:3306/AccountsInfo";
    private static final String JDBC_USER = "reports";
    private static final String JDBC_PASSWORD = "reports@#123";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
 
        String uploadPath = getServletContext().getRealPath("") + "img" + File.separator;
        String applicationName = request.getContextPath().replace("/", "");
        uploadPath = uploadPath.replace(applicationName, "AccountInfo");

        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

//        Part filePart = request.getPart("file");
//
//        if (filePart == null || filePart.getSize() == 0) {
//            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
//            response.getWriter().write("No file uploaded.");
//            return;
//        }
//
//        // Validate file type (server-side)
//        String contentType = filePart.getContentType();
//        if (!contentType.equals("application/pdf") && !contentType.startsWith("image/")) {
//            response.setStatus(HttpServletResponse.SC_UNSUPPORTED_MEDIA_TYPE);
//            response.getWriter().write("Only PDF or image files are allowed.");
//            return;
//        }
//
//        String fileName = filePart.getSubmittedFileName();
//        File file = new File(uploadPath + File.separator + fileName);
//
//        try (InputStream fileContent = filePart.getInputStream(); FileOutputStream outputStream = new FileOutputStream(file)) {
//
//            byte[] buffer = new byte[1024];
//            int bytesRead;
//            while ((bytesRead = fileContent.read(buffer)) != -1) {
//                outputStream.write(buffer, 0, bytesRead);
//            }
//
//            System.out.println("File saved to: " + file.getAbsolutePath());
//            response.getWriter().write("File uploaded successfully: " + fileName);
//
//        } catch (IOException e) {
//            e.printStackTrace();
//            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
//            response.getWriter().write("File upload failed: " + e.getMessage());
//        }
        Collection<Part> parts = request.getParts();

        for (Part part : parts) {
            if (part.getName().equals("file") && part.getSize() > 0) {
                String contentType = part.getContentType();
                if (!contentType.equals("application/pdf") && !contentType.startsWith("image/")) {
                    response.setStatus(HttpServletResponse.SC_UNSUPPORTED_MEDIA_TYPE);
                    response.getWriter().write("Only PDF or image files are allowed.");
                    return;
                }

                String fileName = part.getSubmittedFileName();
                File file = new File(uploadPath + File.separator + fileName);

                try (InputStream fileContent = part.getInputStream(); FileOutputStream outputStream = new FileOutputStream(file)) {
                    byte[] buffer = new byte[1024];
                    int bytesRead;
                    while ((bytesRead = fileContent.read(buffer)) != -1) {
                        outputStream.write(buffer, 0, bytesRead);
                    }

                    System.out.println("File saved to: " + file.getAbsolutePath());
                } catch (IOException e) {
                    e.printStackTrace();
                    response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                    response.getWriter().write("File upload failed: " + e.getMessage());
                    return;
                }
            }
        }
        response.getWriter().write("All files uploaded successfully.");

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String Task = request.getParameter("Task");

        String sno = request.getParameter("sno");

        String status = request.getParameter("status");

        String startDate = request.getParameter("startDate");

        String dueDate = request.getParameter("dueDate");

        String percentComplete = request.getParameter("percentComplete");

        String done = request.getParameter("done");

        String fileName = request.getParameter("fileName");

//        sendMail(Task);

//        System.out.println("sno " + sno + "status " + status + " startDate" + startDate + " dueDate " + dueDate + " percentComplete " + percentComplete + " done " + done + " fileName " + fileName);
////        /usr/local/apache-tomcat-9.0.84/webapps/AccountInfo/img/
//        response.setContentType("application/json");
//        response.setCharacterEncoding("UTF-8");
//
////        JSONArray tasks = new JSONArray();
//        Connection conn = null;
//        Statement stmt = null;
//        ResultSet rs = null;
//
//        try {
//            // Load MySQL JDBC driver
//            Class.forName("com.mysql.cj.jdbc.Driver");
//
//            // Connect to database
//            conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
//            stmt = conn.createStatement();
//            String sql = "SELECT sno,Task, Priority, Status, StartDate, DueDate, PercentComplete, DONE, Notes, Proof FROM TaskList where sno='" + sno + "' ";
//            rs = stmt.executeQuery(sql);
//
//            while (rs.next()) {
//
//                int dbSno = rs.getInt("sno");
//                String dbTask = rs.getString("Task");
//                String dbPriority = rs.getString("Priority");
//                String dbStatus = rs.getString("Status");
//                String dbStartDate = safeGetDate(rs, "StartDate");
//                String dbDueDate = safeGetDate(rs, "DueDate");
//                double dbPercentComplete = rs.getDouble("PercentComplete");
//                String dbProof = rs.getString("Proof");
//                System.out.println(" dbSno " + dbSno + " dbTask " + dbTask + " dbPriority " + dbPriority + " dbStatus " + dbStatus + " dbStartDate " + dbStartDate + " dbDueDate " + dbDueDate + " dbPercentComplete " + dbPercentComplete + " dbProof " + dbProof);
//
//            }
//
////            sendMail();
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        } finally {
//            // Clean up
//            try {
//                if (rs != null) {
//                    rs.close();
//                }
//                if (stmt != null) {
//                    stmt.close();
//                }
//                if (conn != null) {
//                    conn.close();
//                }
//            } catch (SQLException e) {
//                e.printStackTrace();
//            }
//        }
//
//        PrintWriter out = response.getWriter();
////        out.print(tasks.toString());
//        out.flush();
    }

    public static void sendMail(String Task) {

        String recipients = getAllusers();

        final String username = "tusharmahajan814@gmail.com";
        final String password = "tlgmeweqcluvbdsl";

        Properties props = new Properties();

        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com"); // Your SMTP server host
        props.put("mail.smtp.debug", "true");

        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));

            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipients)); //Receiver Email Address
//            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("tusharmahajan762@gmail.com,vishalk@virtuosonetsoft.com,altmish@virtuosonetsoft.com"));

            message.setSubject("Changes");
            message.setText("There are some changes in the row " + Task);

            Transport.send(message);

//            System.out.println("OTP sent to " + userEmail);
        } catch (MessagingException e) {
//            System.out.println("OTP not sent to " + userEmail);

            throw new RuntimeException(e);
        }
    }

    public static String getAllusers() {

        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        StringBuilder emailList = new StringBuilder();

        try {

            Class.forName("com.mysql.cj.jdbc.Driver");

            conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);

            stmt = conn.createStatement();

            String sql = "SELECT email FROM AccountUsers;";

            rs = stmt.executeQuery(sql);

            while (rs.next()) {
                if (emailList.length() > 0) {
                    emailList.append(",");
                }
                emailList.append(rs.getString("email"));
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
            } catch (Exception e) {
            }
            try {
                if (stmt != null) {
                    stmt.close();
                }
            } catch (Exception e) {
            }
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (Exception e) {
            }
        }

        return emailList.toString();
    }

    private String safeGetDate(ResultSet rs, String column) throws SQLException {
        java.sql.Date date = rs.getDate(column);
        return date != null ? date.toString() : "";
    }

    @Override
    public String getServletInfo() {
        return "Handles file uploads (PDF & images)";
    }
}
