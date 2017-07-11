package lab9.repository;

import lab9.model.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * Created by sonya on 24.06.17.
 */

@Repository
public interface PointRepository extends JpaRepository<Point, Long> {
    List<Point> findByOwner(String owner);
    List<Point> findAll();
}