import React, {Component} from 'react';
import {readAllPost, deletePost} from "../actions";
import {connect} from "react-redux";
import PostListItem from '../components/post-list-item';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {Link} from "react-router";

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {displayOnlyMine: false}
    }

    componentWillMount() {
        this.props.readAllPost();
    }

    render() {
        return (
          <div>
              <h1>Liste des posts</h1>
              <input type="checkbox" onChange={event => this.setState({displayOnlyMine: event.target.checked})} /> Afficher uniquement mes posts
              <div className="button_add">
                  <Link to={'create-post'}><button className="btn btn-primary btn-circle btn-lg">+</button></Link>
              </div>
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

    filterMyPosts(posts) {
        return posts.filter(post => {
           return post.author === "Moi";
        });
    }

    renderPosts() {
        const {posts} = this.props;
        let arrayPosts;
        if (posts) {
            if (this.state.displayOnlyMine) {
                arrayPosts = this.filterMyPosts(posts);
            } else {
                arrayPosts = posts;
            }
        }
        if (arrayPosts) {
            return arrayPosts.map(post =>
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