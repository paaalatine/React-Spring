package lab9.service;

import lab9.model.Point;
import lab9.repository.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * Created by sonya on 24.06.17.
 */
@Service
public class PointService implements IPointService {
    @Autowired
    private PointRepository pointRepository;

    public Point addPoint(Point point) { return pointRepository.saveAndFlush(point); }
    public List<Point> getByOwner(String owner) {
        return pointRepository.findByOwner(owner);
    }
}