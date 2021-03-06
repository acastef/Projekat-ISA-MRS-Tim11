package bioskopi.rs.repository;

import bioskopi.rs.domain.Facility;
import bioskopi.rs.domain.Projection;
import bioskopi.rs.domain.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

/**
 * Interface that communicates with database for facility data
 */
public interface FacilityRepository extends JpaRepository<Facility,Long> {


    @Query("SELECT p FROM Projection p WHERE p.facility.id = ?1")
    List<Projection> findRepertoireById(long id);

    @Query(value = "SELECT * FROM facility f WHERE f.type = :type", nativeQuery = true)
    List<Facility> findFacilityByType(@Param("type") String type);

    @Query(value = "SELECT f.type FROM facility f WHERE f.id = ?1", nativeQuery = true)
    List<String> getType(long id);

//    @Query("SELECT t FROM Ticket t WHERE t.facility.id = ?1")
//    List<Ticket> getFastTickets(long id);

}

