import React from 'react';
import axios from 'axios';

class Function extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data)
                this.setState({ posts: res.data })
            })
            .catch(err => {
                console.log(err)

            })

    }

    render() {
        const {posts} = this.state
        return (
            <div>
                <h3 style={{ 'textAlign': 'center' }}>List Of Posts</h3>
                {posts.map(post => <div key={post.id} style={{ 'textAlign': 'center' }}><b>{post.title}</b></div>)}

            </div>
        )
    }
}





export default Function