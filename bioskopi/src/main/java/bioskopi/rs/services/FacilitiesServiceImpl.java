package bioskopi.rs.services;

import bioskopi.rs.domain.Facility;
import bioskopi.rs.repository.FacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Implementation of facility service
 */
@Service("facilityService")
public class FacilitiesServiceImpl implements FacilitiesService {

    @Autowired
    private FacilityRepository facilityRepository;

    @Override
    public List<Facility> findAllFacilities() {
        return facilityRepository.findAll();
    }
}
