<%--
  Created by IntelliJ IDEA.
  User: sonya
  Date: 12.07.17
  Time: 18:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page session="true"%>
<html>
<head>
    <title>Login Page</title>
    <style>
        .error {
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid transparent;
            border-radius: 4px;
            color: #a94442;
            background-color: #f2dede;
            border-color: #ebccd1;
        }

        .msg {
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid transparent;
            border-radius: 4px;
            color: #31708f;
            background-color: #d9edf7;
            border-color: #bce8f1;
        }

        #login-box {
            width: 300px;
            padding: 20px;
            margin: 100px auto;
            background: #fff;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border: 1px solid #000;
        }
    </style>
</head>
<body onload='document.loginForm.username.focus();'>
<c:if test="${not empty SPRING_SECURITY_LAST_EXCEPTION}">
        Your login attempt was not successful due to <br/><br/>
        <c:out value="${SPRING_SECURITY_LAST_EXCEPTION.message}"/>.
</c:if>

<div id="login-box">

    <h2>Login with Username and Password</h2>

    <c:url value="/j_spring_security_check" var="loginUrl" />

    <form name='loginForm'
          action="${loginUrl}" method="post">

        <table>
            <tr>
                <td>User:</td>
                <td><input type='text' name='username'/></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type='password' name='password' /></td>
            </tr>
            <tr>
                <td colspan='2'><input name="submit" type="submit"
                                       value="submit" /></td>
            </tr>
        </table>
    </form>

    <form name='reg' action="/sonya9_war_exploded/reg" method="post">
        <input type="text" name="log" id="log"/>
        <input type="text" name="pass" id="pass"/>
        <input type="submit" value="ok"/>
    </form>
</div>

</body>
</html>
