import React, {Component} from 'react';
import {Link} from "react-router";
import {reduxForm} from 'redux-form';
import {createPost} from "../actions";
import {connect} from 'react-redux';
import {browserHistory} from "react-router";

const formConfig = {
    form: "createPostForm",
    fields: ['title', 'content', 'author'],
    validate: validate
}

class PostForm extends Component {

    render() {
        const {fields: {title, content, author}, handleSubmit, errors} = this.props;
        console.log('---------------');
        console.log('', errors);
        console.log('---------------');

        //Eclate tous les champs : evite d'ecrire default="..." ...
        return (
          <div>
              <h1>Nouveau post</h1>
              <form onSubmit={handleSubmit(this.createPost.bind(this))}>
                  <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                      <label>Titre</label>
                      <input className="form-control" type="text" {...title} />
                      <div>{title.touched && errors.title}</div>
                  </div>
                  <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                      <label>Description</label>
                      <input className="form-control" type="textarea" {...content} />
                      <div>{content.touched && errors.content}</div>
                  </div>
                  <div className={`form-group ${author.touched && author.invalid ? 'has-danger' : ''}`}>
                      <label>Auteur</label>
                      <input className="form-control" type="text" {...author} />
                      <div>{author.touched && errors.author}</div>
                  </div>
                  <Link to={'/'} className="button_space"><button className="btn btn-danger">Retour</button></Link>
                  <button type="submit" className="btn btn-primary" disabled={this.props.invalid}>Créer</button>
              </form>
          </div>
        );
    }

    createPost(post) {
        this.props.createPost(post);
        browserHistory.push('/');
    }

}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = "Veuillez remplir le champ titre";
    }
    if (!values.content) {
        errors.content = "Veuillez remplir le champ contenu";
    }
    if (!values.author) {
        errors.author = "Veuillez remplir le champ auteur";
    }

    return errors
}

const mapDispatchToProps = {
    createPost
};

export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(PostForm));