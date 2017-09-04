package ru.srg.security.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.srg.domain.User;

import javax.servlet.http.HttpSession;
import java.math.BigDecimal;
import java.security.Principal;

@RestController
@RequestMapping("/api/session")
public class AuthenticationController {

    private final Logger logger = LoggerFactory.getLogger(getClass());

//    @Autowired
//    private AuthenticationManager authenticationManager;

    @RequestMapping(method = RequestMethod.GET)
    public User login(Principal principal) {

        logger.info("Principal: {}", principal);

        String name = principal == null ? null : principal.getName();

        // TODO Get user from store (session or db?)
        User user = new User(name);
        user.setBalance(BigDecimal.valueOf(100));
        return user;
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void logout(HttpSession httpSession) {
        httpSession.invalidate();
    }
}
