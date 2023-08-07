import React, { useState } from 'react';
import { Card, Button, Container, Col, Row, Modal} from 'react-bootstrap';
import styles from './Cartoes.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import marcaMs from './img/marca_MS.png'; 
import relatorio from './img/relatorio.js';
import twitter from './img/twitter.svg';
import youtube from './img/youtube.svg';
import facebook from './img/facebook.svg';
import flickr from './img/flickr.svg';
import i from './img/i.svg';

const Cartoes = () => {
  // Defina seus dados aqui. Por exemplo, você pode buscar de uma API ou banco de dados.
  const data = new Array(14).fill({ title: 'Vacinometro', number: "85%" });

  // Mova os hooks useState para dentro do componente funcional.
  const [show, setShow] = useState(false);  // Estado para controlar a exibição do modal
  const [modalTitle, setModalTitle] = useState("");  // Estado para o título do modal

  const handleClose = () => setShow(false); // Função para fechar o modal
  const handleShow = (title) => {  // Função para abrir o modal com título específico
    setModalTitle(title);
    setShow(true);
  };

  // Função de impressão - isto é apenas um exemplo. Adapte isto às suas necessidades.
  const print_page = () => {
    const link = document.createElement('a');
    link.href = {relatorio};
    link.download = 'Relatório';
    link.click();
  };

  return (
    <div>
      <div className="col-xl-10 col-lg-8 col-md-8 col-sm-12">
        <br/>
        <p className="h2 px-3"><b>Ministério da Saúde</b> - Vacinômetro COVID-19 - 
          <br/>Estabelecimento de Saúde (CNES)
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="primary" className={styles.btn01}>
        <img width="18" height="18" src ={i} alt = "Minha Imagem" style={{ marginRight: '6px' }}/>
          Informações</Button>
        <Button variant="primary" className={styles.btn02} onClick={print_page}>
        <img width="18" height="18" src="https://img.icons8.com/ios-filled/50/1351b4/print.png" alt="print" style={{ marginRight: '10px' }}/>
          Exportar Relatorio</Button>
      </div>
      <hr className= {styles.top}></hr>
      <h2 className = {styles.filtros}>Filtros</h2>

      <div className={styles.containerCenter}>
        <div className={styles.retangContainer}>
          <Row className={styles.btn03Group}>
            <Col md={4} className="mb-3">
              <Button variant="primary" onClick={() => handleShow('UF Residência')}>UF Residência</Button>
            </Col>
            <Col md={4} className="mb-3">
              <Button variant="primary" onClick={() => handleShow('Múnicipio Residência')}>Múnicipio Residência</Button>
            </Col>
            <Col md={4} className="mb-3">
              <Button variant="primary" onClick={() => handleShow('Estabelecimento de Saúde')}>Estabelecimento de Saúde</Button>
            </Col>
          </Row>
          <Row className={styles.btn03Group}>
            <Col md={4} className="mb-3">
              <Button variant="primary" onClick={() => handleShow('Sexo')}>Sexo</Button>
            </Col>
            <Col md={4} className="mb-3">
              <Button variant="primary" onClick={() => handleShow('Faixa Etaria')}>Faixa Etaria</Button>
            </Col>
            <Col md={4} className="mb-3">
              <Button variant="primary" onClick={() => handleShow('Raça/Cor')}>Raça/Cor</Button>
            </Col>
          </Row>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Conteúdo do modal para {modalTitle} aqui...</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className ={styles.btn01} onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
          <div className={styles.buttonContainer}>
              <Button variant="primary" className={styles.btn010}>Limpar Filtros</Button>
          </div>
      <hr className= {styles.botton}></hr>
 
      <Container className={styles.cartoesContainer}>
        {data.map((item, idx) => (
          <Card key={idx} className={styles.cardContainer}>
            <Card.Body>
              <Card.Title className={styles.title}>{item.title}</Card.Title>
              <Card.Text className={styles.number}>{item.number}</Card.Text>
              <Button variant="primary" className={styles.btn}>Mais Informações</Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
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
  );
};

export default Cartoes;
