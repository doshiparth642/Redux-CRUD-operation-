import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import history from '../../config/history';


const validation = Yup.object().shape({
    name: Yup.string()
        .required("Name is required"),

    password: Yup.string()
        .required("Please enter password same as name")

        
})


class Login extends React.Component {

  
 

    /*state = {
        userName: 'Parth',
        showName: false,
        passWord: '',
        showPassword: false,

    }
    


    displayNameHandler = (e) => {
        let updatedName = e.target.value;
        this.setState({ userName: updatedName });
        //console.log(updatedName);  
    }

    displayPasswordHandler = (e) => {
        let updatedPassword = e.target.value;
        this.setState({ passWord: updatedPassword });
        //console.log(updatedName);  
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            showName: true,
            showPassword: true
        });
    }*/

    render() {
        
        return (
            <div>
                <Formik
                  
                  initialValues={{
                    name:'' ,
                    password: '',
               

                  }}

                  validationSchema={validation}

                  onSubmit={(values)=>{

                    if(values.name == 'Parth'){
                      if(values.name == values.password){

                        alert(`Login Successful ${values.name} Doshi`)
                        localStorage.setItem('token', 'randomvalue')
                        history.push('/usercomp')
                    
                     }else if(values.name !== values.password){
                        
                 alert(`Login fail, please enter same password as ${values.name}` )

                        
                      }
                    }else{
                        alert(`Sorry!,Login only by Parth,Not by ${values.name}`)
                    }
            
                      
                  }}                
                >
                    {({handleChange,handleSubmit,touched,errors,values,resetForm})=>(
                        <Form onSubmit={handleSubmit}>
                          <center><h1>Login Form</h1></center>
                          <div>
                              <label>Name</label>
                              <input type='text' name='name' value={values.name}  className={errors.name && touched.name && "error"} onChange={handleChange} placeholder='Enter name' />
                              {touched.name && errors.name ? (<small className='text-danger'>{errors.name}</small>): null}
                          </div>
                          <div>
                              <label>Password</label>
                              <input type='text' name='password' value={values.password}  className={errors.password && touched.password && "error"} onChange={handleChange} placeholder='Enter password'/>
                              {touched.password && errors.password ? (<small className='text-danger'>{errors.password}</small>): null}     

                          </div>
                          <div>
                          <button type='submit'>Login</button>
                          </div>
                           {values.name == values.password && values.name== 'Parth'? <div>
                                <b>Name: {values.name}</b>
                                <br/>
                                <b>Password: {values.password}</b>
                            </div> : null}
                        <div>
                            <button type='button' onClick={resetForm}>Reset</button>
                        </div>
                     
                        </Form>
                    )}

                </Formik>
            
              {/*  <form onSubmit={this.handleSubmit}>
                    <label><p>Username</p></label>
                    <input type="text" name="userName" onChange={this.displayNameHandler} value={this.state.userName} />

                    <br />

                    <label><p>Password</p></label>
                    <input type="password" name="passWord" onChange={this.displayPasswordHandler} value={this.state.passWord} />

                    <div>
                        <button type="submit" onClick={this.handleSubmit}>Login</button>
                    </div>
                    {this.state.showName && <p>"userName:" {this.state.userName}</p>}
                    {this.state.showPassword && <p>"passWord:" {this.state.passWord}</p>}
                    <br />


                </form>*/}
            </div>
        );
    }
}



export default Login