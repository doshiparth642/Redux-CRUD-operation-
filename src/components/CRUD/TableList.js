import React from 'react';
import { connect } from 'react-redux';
import { Form, Table } from 'react-bootstrap';
import { fetchUserList, deletePost, addPost, editPost } from '../../actions/dataActions/listActions';
import { get, debounce, sortBy, orderBy } from 'lodash';
import { Formik } from 'formik'
import * as Yup from 'yup'

const validation = Yup.object().shape({
    name: Yup.string()
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address format")
        .required("email is required"),
    phone: Yup.string()
        .required("number is required")
        .matches(

            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Invalid phone number"
        ),
    website: Yup.string()
        .required("website is required"),

    street: Yup.string()
        .required("street is required"),


})

const invertDiretion = {
    asc: 'desc',
    desc: 'asc'
}

class TableList extends React.Component {
    constructor(props) {
    
        super(props)
        this.state = {
            isEdit: false,
            search: '',
            searchResults: [],
            sortById: 'asc',
            sortByName: 'asc',
            // sortType:'desc',
            columnTosort: ''

        }
    }

    componentDidMount() {
        this.props.loadTableList();
            console.log(this.props)
    }



    handleDelete(id) {
        this.props.deletePosts(id);
    }       
                                                   

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value

        })

        if (this.state.search !== " ") {
            const filterData = this.props.tableList.filter((user) => {
                const data = Object.values(user).toString().toLowerCase().includes(this.state.search.toLowerCase())
                const address = Object.values(user.address).toString().toLowerCase().includes(this.state.search.toLowerCase())

                const filter = data || address
                return filter
            })

            this.setState({
                searchResults: filterData
            })
        } else {
            this.setState({
                searchResults: this.props.tableList
            })
     }
    }

    debounceFunction = debounce((e) => this.handleOnChange(e), 1000)

    handleEdit = (list, setFieldValue) => {
        setFieldValue('name', list.name);
        setFieldValue('email', list.email);
        setFieldValue('phone', list.phone);
        setFieldValue('website', list.website);
        setFieldValue('id', list.id);
        setFieldValue('street', list.address.street);

        this.setState({
            isEdit: true
        })
    };

    handleSortById = column => {

        this.setState({
            columnTosort: column,
            sortById: this.state.columnTosort === column ? invertDiretion[this.state.sortById]: "desc",
           sortByName:'asc'
            
        });
    }

    handleSortByName = column => {

        this.setState({
            columnTosort: column,
            sortByName: this.state.columnTosort === column ?  invertDiretion[this.state.sortByName] : "desc",
            sortById: 'asc' 
        });
    }

    downloadCSVFromJson = (filename) => {
        // convert JSON to CSV
     
       var csv = 'id,name,email,phone,address,website \n'
        filename.map(element => {
         csv += `${element.id},${element.name},${element.email},${element.phone},${element.address.street},${element.website}\n`
       })
    
        // Create link and download
        var link = document.createElement('a');
        var blob = new Blob(["\ufeff", csv]);
        var url = URL.createObjectURL(blob);
        link.href = url;
        link.download = "Tablelist.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

      };
 
    render() {
        const { tableList } = this.props
          //const debounceFunction = debounce((e)=>this.handleOnChange(e),3000)       
         var sorted;
         if(this.state.search.length > 0){
             sorted = this.state.searchResults
         }
         else {
        if (this.state.columnTosort == 'id'){
            sorted = orderBy(tableList, this.state.columnTosort, this.state.sortById)                      
        }
        else {       
        sorted = orderBy(tableList, this.state.columnTosort, this.state.sortByName)
        }
    }
        return (
            <>
                <div style={{ margin: 110 }}>

                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            website: '',
                            address: {
                                street: ''
                            }
                        }}
                        validationSchema={validation}

                        onSubmit={(initialValues) => {


                            if (initialValues) {

                                if (!this.state.isEdit) {
                                    this.props.addNewpost(initialValues);

                                }
                                else {

                                    this.props.updatePost(initialValues)
                                    this.setState({
                                        isEdit: false
                                    })
                                }
                            }
                        }}
                    >

                        {({ errors, handleSubmit, handleChange, setFieldValue, touched, values }) => (
                            <> 
                                <Form onSubmit={handleSubmit}>

                                    {this.state.isEdit ? <h4 style={{ 'textAlign': 'center' }}>EDIT USER</h4> :
                                        <h4 style={{ 'textAlign': 'center' }}>ADD USER</h4>
                                    }

                                    <div>
                                        <input type='hidden' value={values.id || ''} name="id" />
                                        <input placeholder="Name" value={values.name} name="name" type='text' onChange={handleChange} />
                                        {touched.name && errors.name ? (<small className='text-danger'>{errors.name}</small>) : null}
                                    </div>
                                    <div>
                                        <input placeholder="Email" value={values.email} name="email" type='email' onChange={handleChange} />
                                        {touched.email && errors.email ? (<small className='text-danger'>{errors.email}</small>) : null}
                                    </div>
                                    <div>
                                        <input placeholder="Phone no" value={values.phone} name="phone" type='text' onChange={handleChange} />
                                        {touched.phone && errors.phone ? (<small className='text-danger'>{errors.phone}</small>) : null}
                                    </div>
                                    <div>
                                        <input placeholder="Website" value={values.website} name="website" type='text' onChange={handleChange} />
                                        {touched.website && errors.website ? (<small className='text-danger'>{errors.website}</small>) : null}
                                    </div>

                                    <div>
                                        <input placeholder="Street" value={values.street || ""} name='street' type='text' onChange={handleChange} />
                                        {errors.street && touched.street ? (<small className='text-danger'>{errors.street}</small>) : null}
                                    </div>
                                    <div>

                                        {this.state.isEdit ?
                                            <button type='submit' onSubmit={handleSubmit}>SAVE</button>
                                            : <button type='submit' onSubmit={handleSubmit}>ADD</button>

                                        }
                                    </div>
                                    <div>
                                        <input type='text' placeholder='Search Name...' name='search' onChange={this.debounceFunction} />
                                    </div>
                                </Form>
                             <div>
                            <button onClick={() => this.handleSortById('id')}>SortId {this.state.sortById}</button>
                            <button onClick={() => this.handleSortByName('name')}>SortName {this.state.sortByName}</button>
                            </div>
                            <div>
                             {
                             this.state.search.length> 1 ? 
                             <button onClick={() => this.downloadCSVFromJson(sorted)} className='btn btn-success'>Export to excel</button>
                             :<button onClick={() => this.downloadCSVFromJson(sorted)} className='btn btn-success'>Export to excel</button>
                             }
                             </div>
                             <div>
                        {tableList.length > 0 && 
                            <Table striped bordered hover>
                              <thead>
                                 <tr>
                                      <th>id</th>
                                      <th>Name</th>
                                      <th>Email</th>
                                      <th>Phone No</th>
                                      <th>Address</th>
                                      <th>Website</th>
                                 </tr>
                             </thead>                            
                                <tbody>
                                      {sorted.map((user)=>{
                                                 return (
                                                    <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.address.street}</td>
                                                    <td><a href='/'>{user.website}</a></td>
                                                    <td>
                                                        <button onClick={() => this.handleDelete(user.id)}>Delete</button>
                                                    </td>

                                                    <td>
                                                        <button onClick={() => this.handleEdit(user, setFieldValue)}>Edit</button>
                                                    </td>
                                                </tr>
                                             )
                                             })}
                                 </tbody>
                            </Table>

                        } 
                                </div>                                 
                            </>
                        )}
                    </Formik>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tableList: get(state, ['listReducer', 'posts'], [])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadTableList: () => dispatch(fetchUserList()),
        deletePosts: (id) => dispatch(deletePost(id)),
        addNewpost: (data) => dispatch(addPost(data)),
        updatePost: (data) => dispatch(editPost(data.id, data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TableList)