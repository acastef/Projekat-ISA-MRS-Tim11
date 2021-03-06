package bioskopi.rs.domain.DTO;

import bioskopi.rs.domain.AuthorityEnum;

public class CaTAdminDTO extends UserDTO {

    private long facility;

    private AuthorityEnum authorities;

    private String password;

    private boolean firstLogin;

    public CaTAdminDTO() {

    }

    public CaTAdminDTO(long id, String name, String surname, String email, String username, String avatar,
                       String telephone, String address, long facility,AuthorityEnum authorities,String password
            , boolean firstLogin) {
        super(id, name, surname, email, username, avatar, telephone, address);
        this.facility = facility;
        this.authorities = authorities;
        this.password = password;
        this.firstLogin = firstLogin;
    }

    public long getFacility() {
        return facility;
    }

    public void setFacility(long facility) {
        this.facility = facility;
    }

    public AuthorityEnum getAuthorities() {
        return authorities;
    }

    public void setAuthorities(AuthorityEnum authorities) {
        this.authorities = authorities;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isFirstLogin() {
        return firstLogin;
    }

    public void setFirstLogIn(boolean firstLogin) {
        this.firstLogin = firstLogin;
    }
}
