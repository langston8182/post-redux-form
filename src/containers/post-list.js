import React, {Component} from 'react';
import {readAllPost} from "../actions";
import {connect} from "react-redux";
import PostListItem from '../components/post-list-item';

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
                  <tbody>
                    {this.renderPosts()}
                  </tbody>
              </table>
          </div>
        );

    }

    renderPosts() {
        const {posts} = this.props;
        if (posts) {
            return posts.map(post =>
                <PostListItem key={post.id} post={post} />
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
    readAllPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);