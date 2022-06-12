package yanse.airbnb.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yanse.airbnb.domain.member.Members;
import yanse.airbnb.domain.member.repository.MembersRepository;

@RequiredArgsConstructor
@Service
public class MembersService {

	private final MembersRepository membersRepository;

	@Transactional
	public void saveJwtToken(Long id, String jwtToken) {
		Members members = membersRepository.findById(id).orElseThrow();
		members.saveJwtToken(jwtToken);
	}
}
