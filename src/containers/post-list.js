import React, {Component} from 'react';
import {readAllPost, deletePost} from "../actions";
import {connect} from "react-redux";
import PostListItem from '../components/post-list-item';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class PostList extends Component {

    componentWillMount() {
        this.props.readAllPost();
    }

    render() {
        return (
          <div>
              <h1>Liste des posts</h1>
              <table className="table table-hover">
                  <thead>
                  <tr>
                      <th>Title</th>
                      <th>Action</th>
                  </tr>
                  </thead>
                  <ReactCSSTransitionGroup component="tbody"
                    transitionEnterTimeout={500}
                    trnansitionLeaveTimeout={300}
                    transitionName="fade">
                    {this.renderPosts()}
                  </ReactCSSTransitionGroup>
              </table>
          </div>
        );

    }

    deletePostCallback(post) {
        this.props.deletePost(post.id);
    }

    renderPosts() {
        const {posts} = this.props;
        if (posts) {
            return posts.map(post =>
                <PostListItem key={post.id} post={post} deletePostCallBack={(post) => this.deletePostCallback(post)} />
            )
        }
    }
}

const mapStateToProps = (state) => {
  return {
      posts: state.posts
  }
};

const mapDispatchToProps = {
    readAllPost,
    deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);