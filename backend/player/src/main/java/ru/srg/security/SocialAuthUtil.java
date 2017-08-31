package ru.srg.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.UserProfile;

public class SocialAuthUtil {

    private static final Logger logger = LoggerFactory.getLogger(SocialAuthUtil.class);

    public static void authenticate(Connection<?> connection) {
        UserProfile userProfile = connection.fetchUserProfile();
        String username = userProfile.getFirstName();
        if (username == null || "".equals(username)) {
            username = userProfile.getLastName();
        } else {
            username = username + " " + userProfile.getLastName();
        }
        if (username == null || "".equals(username)) {
            username = userProfile.getUsername();
        }
        // TODO

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, null, null);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        logger.info("User {} {} connected.", userProfile.getFirstName(), userProfile.getLastName());
    }
}
