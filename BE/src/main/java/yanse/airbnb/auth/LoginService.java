package yanse.airbnb.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import yanse.airbnb.auth.dto.AccessToken;
import yanse.airbnb.auth.github.GithubUser;
import yanse.airbnb.domain.member.Members;
import yanse.airbnb.domain.member.repository.MembersRepository;

@RequiredArgsConstructor
@Service
public class LoginService {

	private final MembersRepository membersRepository;

	//TODO:예외처리
	public Members findLoginUser(Members members) {
		if (!isDuplicate(members)) {
			membersRepository.save(members);
			return members;
		}
		return members;
	}

	private boolean isDuplicate(Members members) {
		return membersRepository.findByGithubId(members.getGithubId()).isPresent();
	}
}
