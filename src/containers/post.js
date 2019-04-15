import React, {Component} from 'react';
import PostContent from '../components/post-content';
import {connect} from "react-redux";
import {readPost} from "../actions";

class Post extends Component {

    componentWillMount() {
        this.props.readPost(this.props.params.id);
    }

    /**
     * On ne met pas le <PostContent> dans le render principal car sinon this.props est null
     * car l'appel a readPost est asynchrone
     */
    renderPostContent() {
        const {post} = this.props;
        if (post) {
            return <PostContent post={post} />
        }
    }

    render() {
        return (
          <div>
              {this.renderPostContent()}
          </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        post: state.activePost
    }
};

const mapDispatchToProps = {
    readPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);