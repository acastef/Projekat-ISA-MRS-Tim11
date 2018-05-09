package bioskopi.rs.services;

import bioskopi.rs.domain.CaTAdmin;
import bioskopi.rs.domain.FanZoneAdmin;
import bioskopi.rs.domain.util.ValidationException;
import bioskopi.rs.repository.CaTAdminRepository;
import bioskopi.rs.repository.FanZoneAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Implementation of fan-zone admin service
 */
@Service
public class AdminsServiceImpl implements AdminsService {

    @Autowired
    private FanZoneAdminRepository fanZoneAdminRepository;

    @Autowired
    private CaTAdminRepository caTAdminRepository;

    @Override
    public List<FanZoneAdmin> getAllFanZoneAdmins() {
        return fanZoneAdminRepository.findAll();
    }

    @Override
    public FanZoneAdmin getByIdFanZoneAdmin(long id) {
        return fanZoneAdminRepository.findById(id).orElse(new FanZoneAdmin(-1,null,
                null,null,false,null));
    }

    @Override
    @Transactional
    public FanZoneAdmin addFanZoneAdmin(FanZoneAdmin admin) {
        try {
            return fanZoneAdminRepository.save(admin);
        }catch (DataIntegrityViolationException e){
            throw new ValidationException("User name or email is already taken");
        }
    }

    @Override
    public List<CaTAdmin> getAllCaTAdmins() {
        return caTAdminRepository.findAll();
    }

    @Override
    public CaTAdmin getByIdCaTAdmins(long id) {
        return caTAdminRepository.findById(id).orElse(new CaTAdmin(-1,null,null,
                null,false,null));
    }

    @Override
    public CaTAdmin addCaTAdmin(CaTAdmin admin) {
        try {
            return caTAdminRepository.save(admin);
        }catch (DataIntegrityViolationException e){
            throw new ValidationException("User name or email is already taken");
        }
    }
}