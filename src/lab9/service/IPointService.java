package lab9.service;

import lab9.model.Point;
import java.util.List;

/**
 * Created by sonya on 24.06.17.
 */
public interface IPointService {
    Point addPoint(Point point);
    List<Point> getByOwner(String owner);
}
