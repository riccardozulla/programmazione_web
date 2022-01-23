package it.units.programmazione_web;


import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class MyFilter implements Filter {

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest req = (HttpServletRequest) request;
        String stringToken = req.getHeader("Authorization");
        if (stringToken == null || !stringToken.contains("Bearer")) {
            throw new ServletException("Authorization header not found");
        }

        chain.doFilter(request,response);
    }



}
