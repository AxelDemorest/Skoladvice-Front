import React, { Component } from 'react';
import './Home.style.css';
import headerImg from '../../img/header-home-img.jpg'
import infoCategory from '../../img/info-category.jpg'
import commerceCategory from '../../img/commerce-category.jpg'
import communicationCategory from '../../img/communication-category.jpg'
import designCategory from '../../img/design-category.jpg'

export class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="header_title">
          <h1 className="home_title">Découvre les différentes écoles<br />supérieures françaises</h1>
          <div className='header-container-img mt-5'>
            <input placeholder="Indiquez une domaine d'apprentissage" type="text" className='input-search'></input>
            <img className="header-img" src={headerImg} width="100%" height="350px" />
          </div>
        </div>

        <div className="category_container mt-5 mb-5">
          <h1 className="title_category">Principales catégories</h1>
          <div className='list-category mt-5 d-flex justify-content-between'>
            <div className="category-img info-category">
              <h2>Informatique</h2>
            </div>
            <div className="category-img communication-category">
              <h2>Communication</h2>
            </div>
            <div className="category-img commerce-category">
              <h2>Commerce</h2>
            </div>
            <div className="category-img design-category">
              <h2>Design</h2>
            </div>
          </div>
        </div>

      </div>
    )
  }

}
