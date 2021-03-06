package bioskopi.rs.services;

import bioskopi.rs.domain.Ad;
import bioskopi.rs.domain.Bid;
import bioskopi.rs.domain.RegisteredUser;

import java.util.List;

/**
 * Interface that provides service for ad
 */
public interface AdService {

    /**
     * @return all active ads in database
     */
    List<Ad> getAllActive();


    /**
     * @return all ads in database with wait state
     */
    List<Ad> getAllWait();

    /**
     * @param id of targeted ad
     * @return ad with given id
     */
    Ad findById(long id);

    /**
     * @param ad that needs to be saved
     * @return saved ad to database
     */
    Ad add(Ad ad);

    /**
     * @param ad that needs to be accepted
     */
    void accept(Ad ad);

    /**
     * @param ad that needs to be rejected
     */
    void reject(Ad ad);

    /**
     * @param ad that needs to be deleted
     */
    void delete(Ad ad);

    /**
     * @param bid that needs to be added
     * @return saved bid to database
     */
    Ad addBid(Bid bid);


    /**
     * @param bid that needs to be accepted
     * @return updated ad
     */
    Ad acceptOffer(Bid bid, RegisteredUser currentUser);
}
