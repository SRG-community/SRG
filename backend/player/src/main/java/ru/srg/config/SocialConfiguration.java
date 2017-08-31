package ru.srg.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.social.connect.web.SignInAdapter;
import ru.srg.security.SocialAuthUtil;

@Configuration
public class SocialConfiguration {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Bean
    public SignInAdapter authSignInAdapter() {
        return (userId, connection, request) -> {

            logger.info("UserId: {}, connection: {}, request: {}", userId, connection, request);

            SocialAuthUtil.authenticate(connection);
            return null;
        };
    }
}
