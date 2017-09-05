package lab9.controller;

import lab9.model.User;
import lab9.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;

/**
 * Created by sonya on 12.07.17.
 */
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @RequestMapping(value = {"/login"}, method = RequestMethod.GET)
    public String nuGo() {
        return "login";
    }

    @RequestMapping(value = "/reg", method = RequestMethod.POST)
    @ResponseBody
    public String reg(@RequestParam("log") String log, @RequestParam("pass") String pass) {
        if(userService.getByUsername(log) == null) {
            User user = new User();
            user.setUsername(log);
            user.setPassword(encoder.encode(pass));
            user.setRole("ROLE_USER");
            user.setEnabled(true);
            if(userService.addUser(user)==null)
                return "{\"error\": 1}";
            else return "{\"error\": 0}";
        }
        else return "{\"error\": 2}";
    }

    @RequestMapping(value = "/getUsername", method = RequestMethod.POST)
    @ResponseBody
    public String reg(Principal principal) {
        return principal.getName();
    }
}
