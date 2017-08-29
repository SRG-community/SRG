package ru.srg.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;
import org.springframework.social.config.annotation.ConnectionFactoryConfigurer;
import org.springframework.social.config.annotation.EnableSocial;
import org.springframework.social.config.annotation.SocialConfigurerAdapter;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.connect.jdbc.JdbcUsersConnectionRepository;
import org.springframework.social.google.api.Google;
import org.springframework.social.google.connect.GoogleConnectionFactory;

import javax.sql.DataSource;

@Configuration
@EnableSocial
public class SRGGoogleSocialConfig extends SocialConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Override
    public UsersConnectionRepository getUsersConnectionRepository(ConnectionFactoryLocator connectionFactoryLocator) {
        TextEncryptor textEncryptor = Encryptors.noOpText();
        return new JdbcUsersConnectionRepository(dataSource, connectionFactoryLocator, textEncryptor);
    }

    @Override
    public void addConnectionFactories(ConnectionFactoryConfigurer connectionFactoryConfigurer, Environment environment) {
        // connectionFactoryConfigurer.addConnectionFactory(new GoogleConnectionFactory(properties.getAppId(), properties.getAppSecret()));
        GoogleConnectionFactory googleConnectionFactory = new GoogleConnectionFactory(environment.getProperty("spring.social.google.app-id"), environment.getProperty("spring.social.google.app-secret"));
        //googleConnectionFactory.setScope("https://www.googleapis.com/auth/plus.login");
        googleConnectionFactory.setScope("email profile");
        connectionFactoryConfigurer.addConnectionFactory(googleConnectionFactory);
    }

    @Bean
    @Scope(value = "request", proxyMode = ScopedProxyMode.INTERFACES)
    public Google google(ConnectionRepository repository) {
        Connection<Google> connection = repository.findPrimaryConnection(Google.class);
        return connection != null ? connection.getApi() : null;
    }
}
