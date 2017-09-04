package ru.srg.security.util;

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
        String email = userProfile.getEmail();
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, null, null);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        logger.info("User {} {} connected.", userProfile.getFirstName(), userProfile.getLastName());
    }
}
