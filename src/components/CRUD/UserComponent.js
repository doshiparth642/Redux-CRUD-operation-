import React, { Component } from "react";
import { connect } from "react-redux";
import { get } from 'lodash';
import { Table } from 'react-bootstrap';
import { getUserList } from '../../actions/dataActions/usersAction';
import history from "../../config/history";





class UserList extends Component {
  
  componentDidMount() {
    this.props.loadUsersList();
     console.log(this.props)
  }

handleLogout = ()=>{
  localStorage.removeItem('token', 'randomvalue')
  history.push('/login')
}

  render() {
    const { userlist } = this.props;

    return (
      <div style={{ margin: 110 }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>

            </tr>
          </thead>
          <tbody>
            {userlist.map(user => {
              return <tr key={user.name}>
                 <td>#</td>
                <td>{user.name}</td>
                <td>{user.email}</td>


              </tr>;
            })}
          </tbody>
        </Table>

        <button onClick={this.handleLogout}>Logout</button>

      </div>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    userlist: get(state, ['users', 'data'], [])
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadUsersList: () => dispatch(getUserList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
