<%-- 
    Document   : testjsp
    Created on : 04/03/2017, 14:14:10
    Author     : jesimar
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>JSP Simples</h1>
        
        <%-- Codigo Java em JSP --%>
        <% int size = 10; %>
        <% for (int i = 0; i < size; i++){ %>
        <p><%= i%></p>
        <% } %>
    </body>
</html>
