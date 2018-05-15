package bioskopi.rs.services;

import bioskopi.rs.domain.Facility;
import bioskopi.rs.domain.Seat;
import bioskopi.rs.domain.ViewingRoom;

import java.util.List;

public interface ViewingRoomService {

    /**
     *
     * @param id of needed viewing room
     * @return viewing room with given id
     */
    public ViewingRoom getById(Long id);

    /**
     *
     * @param id of a viewing room
     * @return list of seats of given viewing room
     */
    public List<Seat> getSeatsById(Long id);

    /**
     * @param id of a viewing room
     * @return list of all seats in viewing room with given id
     */
    public List<ViewingRoom> getAll();

    /**
     *
     * @param id of facility
     * @return list of viewing rooms in facility with given id
     */
    public List<ViewingRoom> getAllForFacility(Long id);

    /**
     *
     * @param id of viewing room
     * @return a facility that has viewing room with given id
     */
    public Facility getFacility(Long id);

}
