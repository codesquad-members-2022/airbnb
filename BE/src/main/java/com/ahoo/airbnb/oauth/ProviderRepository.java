package com.ahoo.airbnb.oauth;

import com.ahoo.airbnb.entity.OAuth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderRepository extends JpaRepository<OAuth, String> {

}
