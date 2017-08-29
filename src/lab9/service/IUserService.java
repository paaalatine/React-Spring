package lab9.service;

import lab9.model.User;

/**
 * Created by sonya on 12.07.17.
 */
public interface IUserService {
    User addUser(User user);
    User getByUsername(String username);
}
