package com.ahoo.airbnb.oauth;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderRepository extends JpaRepository<OAuth, String> {

}
