<%@ page import="java.util.List" %>
<%@ page import="lab9.model.Point" %><%--
  Created by IntelliJ IDEA.
  User: sonya
  Date: 24.06.17
  Time: 19:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
  <head>
    <title>$Title$</title>
    <script src="http://code.jquery.com/jquery-1.8.3.js"></script>
  </head>
  <body>
  <form>
    <canvas id="chart" height="500px" width="500px" style="border: 2px solid black"></canvas>

    x: <input type="text" id="x"/>
    y: <input type="text" id="y"/>
    r: <input type="button" class="r" value="3" onclick="newRadius(3)"/>
       <input type="button" class="r" value="4" onclick="newRadius(4)"/>
       <input type="button" class="r" value="5" onclick="newRadius(5)"/>
    <input type="button" id="compute" value="OK" onclick="okHand()"/>
    <%List<Point> points = (List<Point>)request.getAttribute("points");
      out.println("<table id=\"answer\">");
      for (Point point: points) {
        out.println("<tr><td>"+point.getX()+"</td><td>"+point.getY()+"</td><td>"+ point.getR()+"</td><td>"+point.isEntry()+"</td></tr>");
      }
      out.println("</table>");
    %>
  </form>

  <c:url value="/j_spring_security_logout" var="logoutUrl" />
  <form action="${logoutUrl}" method="post" id="logoutForm">
  </form>
  <script>
      function formSubmit() {
          document.getElementById("logoutForm").submit();
      }
  </script>

  <c:if test="${pageContext.request.userPrincipal.name != null}">
    <h2>
      User : ${pageContext.request.userPrincipal.name} | <a
            href="javascript:formSubmit()"> Logout</a>
    </h2>
  </c:if>
  </body>
  <script>
      var canvas = document.getElementById("chart");
      var ctx = canvas.getContext("2d");
      var r = 0;

      function newRadius( num) {
          r = num;
          $.post(
              "/sonya9_war_exploded/radiusChanged",
              {
                  r: num
              },
              function( data ) {
                  ctx.clearRect(0, 0, canvas.width, canvas.height);
                  for(var i = 0; i < data.length; i++){
                      ctx.beginPath();
                      ctx.fillStyle = data[i].entry ? "#00FF00" : "#FF0000";
                      ctx.arc(data[i].x*30+250, data[i].y*30+250, 3, 0, Math.PI * 2, false);
                      ctx.closePath();
                      ctx.fill();
                  }
              });
      }

      function okHand() {
          var x = document.getElementById("x").value;
          var y = document.getElementById("y").value;
          $.post(
              "/sonya9_war_exploded/newPoint",
              {
                  x: x,
                  y: y,
                  r: r
              },
              function( data ) {
                  document.getElementById("answer").innerHTML+="<tr><td>"+data.x+"</td><td>"+data.y+"</td><td>"+ data.r+"</td><td>"+data.entry+"</td></tr>";
                  ctx.beginPath();
                  ctx.fillStyle = data.entry ? "#00FF00" : "#FF0000";
                  ctx.arc(data.x*30+250, data.y*30+250, 3, 0, Math.PI * 2, false);
                  ctx.closePath();
                  ctx.fill();
              }
          );
      }

      function canvasClickHandler( event ) {
          var x = (event.clientX - canvas.getBoundingClientRect().left - 250) / 30
          var y = (event.clientY - canvas.getBoundingClientRect().top - 250) / 30

          $.post(
              "/sonya9_war_exploded/newPoint",
              {
                  x: x,
                  y: y,
                  r: r
              },
              function( data ) {
                  if(data.x != undefined) {
                      document.getElementById("answer").innerHTML+="<tr><td>"+data.x+"</td><td>"+data.y+"</td><td>"+ data.r+"</td><td>"+data.entry+"</td></tr>";
                      ctx.beginPath();
                      ctx.fillStyle = data.entry ? "#00FF00" : "#FF0000";
                      ctx.arc(data.x*30+250, data.y*30+250, 3, 0, Math.PI * 2, false);
                      ctx.closePath();
                      ctx.fill();
                  }
                  else {
                      ctx.beginPath();
                      ctx.fillStyle = "#000000";
                      ctx.arc(30*x+250, 30*y+250, 3, 0, Math.PI * 2, false);
                      ctx.closePath();
                      ctx.fill();
                  }
              }
          );
      }

      canvas.addEventListener("click", canvasClickHandler);
  </script>
</html>
