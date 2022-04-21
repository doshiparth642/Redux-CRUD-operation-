//import React from "react";;
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/dataActions/fetchActions';
import { get } from 'lodash';


class FetchData extends React.Component {

   componentDidMount() {
        this.props.fetchPosts()
    }
    render() {
        return (
            <div>
                <h3 style={{ 'textAlign': 'center' }}>List Of Posts</h3>
                {this.props.postList.map(post => <ul key={post.id} style={{ textAlign: 'center' }}><b><li>{post.title}</li></b></ul>)}

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        postList: get(state, ['fetchReducer', 'posts'], [])

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchData)
