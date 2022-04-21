import api from "./api";

export default class UserAPI {
  getUsers() {
    return api.get("/users");
  
  };

  postUsers(data){
    return api.post("/users", data );
  };

  deleteUsers(id){
    return api.delete(`/users/${id}`);
  }

  updateUsers(id,data){
    return api.patch(`/users/${id}`,data);
  }

}
