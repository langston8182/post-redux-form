import React, {Component} from 'react';
import {Link} from "react-router";
import {reduxForm} from 'redux-form';
import {createPost} from "../actions";
import {connect} from 'react-redux';

const formConfig = {
    form: "createPostForm",
    fields: ['title', 'content', 'author']
}

class PostForm extends Component {

    render() {
        const {fields} = this.props;
        //Eclate tous les champs : evite d'ecrire default="..." ...
        return (
          <div>
              <h1>Nouveau post</h1>
              <form>
                  <div className="form-group">
                      <label>Titre</label>
                      <input className="form-control" type="text" {...fields.title} />
                      <div></div>
                  </div>
                  <div className="form-group">
                      <label>Description</label>
                      <input className="form-control" type="textarea" {...fields.content} />
                      <div></div>
                  </div>
                  <div className="form-group">
                      <label>Auteur</label>
                      <input className="form-control" type="text" {...fields.author} />
                      <div></div>
                  </div>
                  <Link to={'/'} className="button_space"><button className="btn btn-danger">Retour</button></Link>
                  <button type="submit" className="btn btn-primary">Créer</button>
              </form>
          </div>
        );
    }

}

export default connect(null, null)(reduxForm(formConfig)(PostForm));