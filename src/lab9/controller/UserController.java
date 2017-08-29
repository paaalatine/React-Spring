package lab9.controller;

import lab9.model.User;
import lab9.service.PointService;
import lab9.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.portlet.ModelAndView;

import java.security.Principal;
import java.util.List;

/**
 * Created by sonya on 12.07.17.
 */
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = {"/login"}, method = RequestMethod.GET)
    public String nuGo() {
        return "kek";
    }

    @RequestMapping(value = "/reg", method = RequestMethod.POST)
    public String reg(@RequestParam("log") String log, @RequestParam("pass") String pass) {
        User user= new User();
        user.setUsername(log);
        user.setPassword(pass);
        user.setRole("ROLE_USER");
        user.setEnabled(true);
        userService.addUser(user);
        return "kek";
    }

}
