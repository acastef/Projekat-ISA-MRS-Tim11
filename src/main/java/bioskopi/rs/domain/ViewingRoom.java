package bioskopi.rs.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;


/**
 * Represents viewing rooms entity
 */
@Entity
@Table(name = "viewing_rooms")
public class ViewingRoom implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(nullable = false)
    private String name;

    @JsonManagedReference
    @OneToMany( fetch = FetchType.LAZY, mappedBy = "viewingRoom", cascade = CascadeType.MERGE)
    private Set<Seat> seats;

    @JsonBackReference
    @ManyToOne(optional = false)
    private Facility facility;

    public ViewingRoom() {
    }

    public ViewingRoom(long id, String name ,Set<Seat> seats, Facility facility) {
        this.id = id;
        this.name = name;
        this.seats = seats;
        this.facility = facility;
    }

    public ViewingRoom( String name ,Set<Seat> seats, Facility facility) {
        this.name = name;
        this.seats = seats;
        this.facility = facility;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Seat> getSeats() {
        return seats;
    }

    public void setSeats(Set<Seat> seats) {
        this.seats = seats;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Facility getFacility() {
        return facility;
    }

    public void setFacility(Facility facility) {
        this.facility = facility;
    }
}

