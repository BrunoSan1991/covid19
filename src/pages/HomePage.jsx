import React from 'react';
import cnes from '../img/cnes.jpg';
import { Link } from 'react-router-dom';
import styles from '../Cartoes.module.css';
import { Card, Button, Container, Col, Row, Modal } from 'react-bootstrap';

function HomePage() {
  return (
  
  <div>
      <div className = {styles.imagemCnes}>
              <img width="400" height="400" src ={cnes} alt = "Minha Imagem" style={{ marginRight: '3px' }}/>
      </div>
      <div className= {styles.span1}>
            <span> O painel informa o número total de doses aplicadas das vacinas COVID Monovalente 
              (Todos os tipos de doses) e Bivalente por Estabelecimento de Saúde (CNES).</span>
      </div>
      <div className={styles.lines20}>
          <div className={styles.line20}></div>
          <span className={styles.nameSpan}>ACESSE OS PAINÉIS</span>
          <div className={styles.line20}></div>
      </div>
        <div className={styles.buttonContainer01}>
          <Link to = "/cartoes">
            <Button className={styles.btnHome}>Vacinação por Estabelecimento de Saúde de Residência</Button>
          </Link>
          <Link to = "/cartoes">
            <Button className={styles.btnHome}>Vacinação por Estabelecimento de Saúde de Ocorrência</Button>
          </Link>
        </div>
    </div>
      
  );
}

export default HomePage;
