import React, {Component} from 'react';
import {readAllPost} from "../actions";
import {connect} from "react-redux";

class PostList extends Component {

    componentWillMount() {
        this.props.readAllPost();
    }

    render() {
        console.log('---------------');
        console.log('', this.props.posts);
        console.log('---------------');

        return (
          <div>
              <h1>Liste des posts</h1>
          </div>
        );

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