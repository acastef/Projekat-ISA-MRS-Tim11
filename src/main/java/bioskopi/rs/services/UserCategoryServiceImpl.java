package bioskopi.rs.services;

import bioskopi.rs.domain.UserCategory;
import bioskopi.rs.repository.UserCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Implementation of UserCategory interface
 */
@Service
public class UserCategoryServiceImpl implements UserCategoryService {

    @Autowired
    private UserCategoryRepository userCategoryRepository;

    @Override
    public List<UserCategory> findAll() {
        return userCategoryRepository.findAll();
    }
}
