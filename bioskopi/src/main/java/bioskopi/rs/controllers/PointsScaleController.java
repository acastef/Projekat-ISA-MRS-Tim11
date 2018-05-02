package bioskopi.rs.controllers;

import bioskopi.rs.domain.ErrorDetails;
import bioskopi.rs.domain.PointsScale;
import bioskopi.rs.services.PointsScaleServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

/**
 * Communicates with points scale REST calls
 */
@ControllerAdvice
@RestController
@RequestMapping("/points_scale")
public class PointsScaleController {

    private static final Logger logger = LoggerFactory.getLogger(PropsController.class);

    @Autowired
    private PointsScaleServiceImpl pointsScaleService;




    /**
     * @return collection of all available points scales in database
     */
    @RequestMapping(method = RequestMethod.GET ,value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<PointsScale>> getAll(){
        logger.info("Fetching all points scale");
        return new ResponseEntity<List<PointsScale>> (pointsScaleService.getAll(), HttpStatus.OK) ;
    }

    /**
     * @param id of targeted points scale
     * @return points scale with given id
     */
    @RequestMapping(method = RequestMethod.GET, value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<PointsScale> getByName(@PathVariable String id){
        logger.info("Fetching points scale with id {}", id);
        return new ResponseEntity<PointsScale>(pointsScaleService.getById(Long.parseLong(id)),HttpStatus.OK) ;
    }

    /**
     * @param scale points scale that needs to be added
     * @param bindingResult result of validation
     * @return message of action result
     */
    @RequestMapping(method = RequestMethod.PUT, value = "/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<Object> save(@Valid @RequestBody PointsScale scale, BindingResult bindingResult){
        logger.info("Saving points scale with id {}", scale.getId());
        if (bindingResult.hasErrors()){
            logger.info(bindingResult.getFieldErrors().toString());
            return new ResponseEntity<>(new ErrorDetails(new Date(),"Validation failed","error"),
                    HttpStatus.BAD_REQUEST);
        }
        PointsScale temp = pointsScaleService.getById(scale.getId());
        temp.setUserCategories(scale.getUserCategories());
        //temp.setUserCategories(scale.getUserCategories());
        //scale.setFacility(temp.getFacility());
        //temp.getFacility().setPointsScales(scale);

        return new ResponseEntity<>( pointsScaleService.save(temp), HttpStatus.CREATED);
    }

}
