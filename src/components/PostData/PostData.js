import React from 'react'
import { connect } from 'react-redux';
import { addUser } from '../../actions/dataActions/fetchActions';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf']



const validation = Yup.object().shape({
    userId: Yup.string()
        .required("Id is required"),
    title: Yup.string()
        .required("Title is required"),
    body: Yup.string()
        .required("body is required"),
    files: Yup
        .mixed()
        .nullable()
        .required()
        .test('filesize', 'File cannot be greather than 2MB,Please upload less than 2MB',
            (initialValues) => !initialValues || (initialValues && initialValues.size <= 2000000)

        )
        .test('format',
            'Uploaded file is not supported :upload only pdf and img files',

            (initialValues) => !initialValues || (initialValues && SUPPORTED_FORMATS.includes(initialValues.type))),


})

class PostData extends React.Component {
    /* constructor(props) {
         super(props)
 
         this.state = {
             userId: '',
             title: '',
             body: ''
         }
     }*/

    /* handleChange = (e) => {
         this.setState({ [e.target.name]: e.target.value })
  
     }*/

    /*
    
        submitHandler = () => {
            // e.preventDefault()
            //console.log(this.state)
            this.props.addUser(this.state);
            this.setState({
                userId: '',
                title: '',
                body: ''
            })
    
        }*/

    render() {
        // const { userId, title, body } = this.state


        return (

            <div style={{ textAlign: 'center' }}>

                <Formik

                    initialValues={{
                        userId: '',
                        title: '',
                        body: '',
                        files: null

                    }}

                    validationSchema={validation}
                    onSubmit={(initialValues) => {
                        this.props.addUser(initialValues)
                        console.log(initialValues)
                        
                    }}


                >
                    {({ touched, errors, handleSubmit, setFieldValue, handleChange }) => (
                        <Form onSubmit={handleSubmit}>
                            <div>

                                <input name='userId' type='input'  onChange={handleChange}
                                    placeholder='Enter id' />
                                {touched.userId && errors.userId ? (<small className='text-danger'>{errors.userId}</small>) : null}

                            </div>
                            <div>
                                <input name='title' type='input' onChange={handleChange} placeholder='Enter title' />
                                {touched.title && errors.title ? (<small className='text-danger'>{errors.title}</small>) : null}

                            </div>
                            <div>
                                <input name='body' type='input' onChange={handleChange} placeholder='Enter body' />
                                {touched.body && errors.body ? (<small className='text-danger'>{errors.body}</small>) : null}

                            </div>

                            <div>
                                <input name='files' type="file" multiple onChange={(event) => {
                                    setFieldValue("files", event.currentTarget.files[0])
                                }} />
                                {touched.files ? <small className='text-danger'>{errors.files}</small> : null}
                            </div>
                            <button type='submit'>Post</button>


                        </Form>
                    )}


                </Formik>
            </div>

        )
    }
}
export default connect(null, { addUser })(PostData)



























{/*<form onSubmit={this.submitHandler}>
                    <div>

                        <input type='text' name='userId' value={userId} onChange={this.changeHandler} placeholder='Enter userId...' />
                    </div>
                    <div >
                        <input type='text' name='title' value={title} onChange={this.changeHandler} placeholder='Enter title...' />
                    </div>
                    <div>
                        <input type='text' name='body' value={body} onChange={this.changeHandler} placeholder='Enter data...' />
                    </div>
                    <button type='submit' style={{ margin: '8px', padding: '5px' }}>Post</button>
                </form>*/}