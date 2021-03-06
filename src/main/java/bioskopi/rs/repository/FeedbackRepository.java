package bioskopi.rs.repository;

import bioskopi.rs.domain.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    @Query("SELECT f FROM Feedback f WHERE f.registeredUser.id = ?1")
    List<Feedback> findByUserId(Long id);

    @Query(value = "SELECT AVG(f.score) FROM Feedback f WHERE f.projection.id = ?1")
    Double getAverageScore(long projId);

    @Query(value = "SELECT AVG(f.score) FROM Feedback f WHERE f.facility.id = ?1")
    Double getFacilityAverageScore(long facId);
}
