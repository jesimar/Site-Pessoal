<%-- 
    Document   : msg_send_success
    Created on : 04/03/2017, 15:54:12
    Author     : jesimar
--%>

<%@page import="java.util.Properties, javax.mail.*, javax.mail.internet.*, javax.activation.*, java.io.*, javax.servlet.*, javax.servlet.http.*"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="serviços msg send success">
        <meta name="author" content="Jesimar da Silva Arantes">
        <link rel="icon" href="../img/favicon.ico">
        <title>
            Web Page - Jesimar - Sucesso
        </title>
        <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href = "../css/styles.css" rel = "stylesheet" />
        <script src="../js/javascript.js"></script>
    </head>
    <body>	
        <div class="container-fluid">
            <div id="topo"> 
                <h1>Sucesso</h1>
                <h2>Jesimar da Silva Arantes</h2>
                <div id = "barra-topo">
                    <a href="../index.html" class="btn btn-primary" role="button">Principal</a>
                    <a href="professional.html" class="btn btn-primary" role="button">Profissional</a>
                    <a href="production.html" class="btn btn-primary" role="button">Produção Científica</a>
                    <a href="contact.html" class="btn btn-primary" role="button">Contato</a>
                    <a href="services.html" class="btn btn-primary" role="button">Serviços em Geral</a>
                    <a href="downloads.html" class="btn btn-primary" role="button">Downloads</a>
                    <a href="videos.html" class="btn btn-primary" role="button">Vídeos</a>
                </div>
            </div>

            <div id = "geral">				
                <div id = "conteudo">
                    <center>
                        <p><b>Mensagem enviada com sucesso!</b></p>
                        <p>
                            Nome: <%= request.getAttribute("name")%>
                            <br>
                            Email: <%= request.getAttribute("email")%>
                            <br>
                            Assunto: <%= request.getAttribute("subject")%>
                            <br>
                            Comentário <%= request.getAttribute("comments")%>
                            <br>

                            <%
                                try {
                                    String to = "jesimar.arantes@gmail.com";
                                    String from = request.getParameter("email");
                                    Properties props = new Properties();
                                    //props.put("mail.smtp.from", "jesimar.arantes@gmail.com");
                                    //props.put("mail.smtp.host", "localhost");
                                    props.put("mail.smtp.host", "smtp.infolink.com.br");

                                    Session sessao = Session.getInstance(props);
                                    sessao.setDebug(true);

                                    MimeMessage message = new MimeMessage(sessao);
                                    message.setFrom(new InternetAddress(from));

                                    Address toAddress = new InternetAddress(to);
                                    message.addRecipient(Message.RecipientType.TO, toAddress);
                                    message.setSubject(request.getParameter("subject"));
                                    message.setText(request.getParameter("comments"));
                                    
                                    Transport.send(message);
                                    out.println("E-mail enviado");
                                } catch (MessagingException e) {
                                    out.println("Email nao pode ser enviado! " + e.getMessage());
                                }
                            %>
                        </p>
                        <input type="button" value="Retornar" onclick="history.back()"> 
                        <br />
                        <br />
                    </center>
                </div>
            </div>

            <div class = "center">
                <a href="http://validator.w3.org/check?uri=referer">
                    <img src="http://www.w3.org/Icons/valid-xhtml10"
                         alt="Valid XHTML 1.0 Transitional" height="31" width="88" />
                </a>

                <a href="http://jigsaw.w3.org/css-validator/check/referer">
                    <img style="border:0;width:88px;height:31px"
                         src="http://jigsaw.w3.org/css-validator/images/vcss"
                         alt="CSS v&aacute;lido!" />
                </a>
            </div>

            <div id="rodape"> 
                <h2>CopyLeft - Jesimar da Silva Arantes - 2017</h2>
            </div>
        </div>
        <script src="../jquery/jquery-3.1.1.min.js"></script>
        <script src="../bootstrap/js/bootstrap.min.js"></script>
    </body>
</html>
