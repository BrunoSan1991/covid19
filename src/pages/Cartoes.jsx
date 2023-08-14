import React, { useState } from 'react';
import { Card, Button, Container, Col, Row, Modal } from 'react-bootstrap';
import styles from '../Cartoes.module.css';  // Atualize o caminho conforme a localização do arquivo CSS
import { marcaMs, relatorio, twitter, youtube, facebook, flickr, i } from '../img';  // Atualize o caminho conforme necessário
import { Link } from 'react-router-dom';

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
        <div>
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
            <br/>
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
  
        <div> 
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
             
        </div>
      </div>
    );
  };
  
  export default Cartoes;