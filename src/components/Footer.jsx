import React, { useState } from 'react';
import styles from '../Cartoes.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { marcaMs, twitter, youtube, facebook, flickr } from '../img';

export default function Footer() {
  return (
    <div>
            <br/>
            <br/>
            <br/>
        <footer>
      <div className= {styles.footer}>
      <a href="https://www.gov.br/saude/pt-br" target="_blank" rel="noopener noreferrer">
        <img src={marcaMs} className= {styles.imgMs}alt="Minha Imagem"  />
      </a>
        </div>
        <div className = {styles.footer01}> 
          <a href="https://twitter.com/minsaude" target="_blank" rel="noopener noreferrer">
            <img src ={twitter} className= {styles.imgMs01} alt = "Minha Imagem " />
          </a>
          <a href="https://www.youtube.com/user/MinSaudeBR" target="_blank" rel="noopener noreferrer">
            <img src ={youtube} className= {styles.imgMs01} alt = "Minha Imagem" />
          </a>
          <a href="https://www.facebook.com/minsaude/" target="_blank" rel="noopener noreferrer"> 
            <img src ={facebook} className= {styles.imgMs02} alt = "Minha Imagem " />
          </a>
          <a href="https://www.flickr.com/photos/ministeriodasaude/" target="_blank" rel="noopener noreferrer">
            <img src ={flickr} className= {styles.imgMs01} alt = "Minha Imagem" />
          </a>
        </div>
      </footer>



    </div>
  )
}
