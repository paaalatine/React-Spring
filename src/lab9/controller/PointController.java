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

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getMain(Principal principal, Model model) {
        List<Point> points = pointService.getByOwner(principal.getName());
        model.addAttribute("points", points);
        return "cheburek";
    }

    @RequestMapping(value = "/getPoints", method = RequestMethod.POST)
    @ResponseBody
    public List<Point> getPoints(Principal principal) {
        List<Point> points = pointService.getByOwner(principal.getName());
        return points;
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
        point.setOwner(principal.getName());
        return pointService.addPoint(point);
    }

    @RequestMapping(value = "/radiusChanged", method = RequestMethod.POST)
    @ResponseBody
    public List<Point> radiusChanged (Principal principal, @RequestParam("r") double r) {
        List<Point> points = pointService.getByOwner(principal.getName());

        for (Point point: points) {
            point.setEntry(checkPoint(point.getX(), point.getY(), r));
        }

        return points;
    }

    private boolean checkPoint(double x, double y, double r) {
        if(x > 0 && x < r && y < r/2 && y > -Math.sqrt(r*r-x*x) || x <= 0 && y > 0 && y < x+r/2)
            return true;
        else return false;
    }
}