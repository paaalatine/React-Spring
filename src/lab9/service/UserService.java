package lab9.service;

import lab9.model.User;
import lab9.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by sonya on 12.07.17.
 */
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User addUser(User user) { return userRepository.saveAndFlush(user); }
    public User getByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
