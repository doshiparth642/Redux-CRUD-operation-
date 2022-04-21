import api from "./apis/api";
import {hydrateUsers, hydrateUser} from './transformers/userTransformer';

class UserService {
  getUsers() {
    return api.user.getUsers().then(hydrateUsers);
  };

  postUsers(data){
    return api.user.postUsers(data).then(hydrateUser(data))
  };

  deleteUsers(id){
    return api.user.deleteUsers(id);
  };

  patchUsers(id,data){
    return api.user.updateUsers(id,data)
  }
}

export default new UserService();
