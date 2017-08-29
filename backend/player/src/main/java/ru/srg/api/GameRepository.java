package ru.srg.api;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import ru.srg.domain.Game;

import java.util.List;

@RepositoryRestResource(path = "game", collectionResourceRel = "game")
public interface GameRepository extends PagingAndSortingRepository<Game, Long> {

    List<Game> findByName(@Param("name") String name);
}
