package lab9.controller;

import lab9.model.Point;
import lab9.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;
import java.util.List;

/**
 * Created by sonya on 24.06.17.
 */
@Controller
public class PointController {

    @Autowired
    private PointService pointService;

    @RequestMapping(value = {"/"}, method = RequestMethod.GET)
    public String getStart() {
        return "start";
    }

    @RequestMapping(value = "/getPoints", method = RequestMethod.GET)
    public String getPoints(Model model, Principal principal) {
        model.addAttribute("points", pointService.getByOwner("sonya"));
        return "index";
    }

    @RequestMapping(value = "/newPoint", method = RequestMethod.POST)
    @ResponseBody
    public Point newPoint(Principal principal, @RequestParam("x") double x, @RequestParam("y") double y, @RequestParam("r") double r) {
        if(r == 0) {
            return null;
        }

        Point point = new Point();
        point.setX(x);
        point.setY(y);
        point.setR(r);
        point.setEntry(checkPoint(x, y, r));
        point.setOwner("sonya");
        return pointService.addPoint(point);
    }

    @RequestMapping(value = "/radiusChanged", method = RequestMethod.POST)
    @ResponseBody
    public List<Point> radiusChanged (Principal principal, @RequestParam("r") double r) {
        List<Point> points = pointService.getByOwner("sonya");

        for (Point point: points) {
            point.setEntry(checkPoint(point.getX(), point.getY(), r));
        }

        return points;
    }

    private boolean checkPoint(double x, double y, double r) {
        if(x >= 0) {
            return (y >= 0) ? (x*x + y*y <= (r*r)/4) :
                    y >= (-r + x)/2;
        } else {
            return (y >= 0) && x >= -r/2 && y <= r;
        }
    }
}