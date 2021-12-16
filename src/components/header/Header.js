import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Header extends Component {

  render() {
    return (
      <header className="App-header">
        <nav class="sidenav">
          <ul class="main-buttons">

            <li><Link to="/">
              <i class="fa fa-circle fa-2x"></i>
              Home
              </Link>
            </li>

            <li>
              <i class="fa fa-circle fa-2x"></i>
              Catégories
              <ul class="hidden">
                <li>Commerce</li>
                <li>Web  </li>
                <li>Art</li>
                <li>???</li>
              </ul>
            </li>
            <li>
              <i class="fa fa-circle fa-2x"></i>
              Avis
              <ul class="hidden">
                <li>Donner son avis</li>
                <li>Tout les avis</li>
                <li>Les meilleur établissement</li>

              </ul>
            </li>

            <li>
              <i class="fa fa-circle fa-2x"></i>
              Connexion
              <ul class="hidden">
                <li>Se connceter</li>
                <li>S'inscrire</li>
                <li> <a href='' > Admin </a> </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

    )
  }

}
