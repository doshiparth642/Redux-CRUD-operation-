import axios from 'axios';
import React from 'react';

class PostData2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' name='userId' value={userId} onChange={this.changeHandler} placeholder='Enter userId...' />
                    </div>
                    <div>
                        <input type='text' name='title' value={title} onChange={this.changeHandler} placeholder='Enter title...' />
                    </div>
                    <div>
                        <input type='text' name='body' value={body} onChange={this.changeHandler} placeholder='Enter data...' />
                    </div>
                    <button type='submit'>Post</button>

                </form>
            </div>
        )
    }
}

export default PostData2