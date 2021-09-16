import React from 'react'
import { Container, Title, MainDiv } from './style'
import Card from './Card/Card'
import WebProg from '../../public/assets/WebProg.png'
import SmartPhone from '../../public/assets/smartphone.png'
import Banco from '../../public/assets/BancoDados.png'
import Codig from '../../public/assets/codificacao.png'

export default function Servicos() {
  return (
    <Container id="servico_me">
      <Title>Serviços</Title>
      <MainDiv>
        <Card Svg={WebProg} title="Front-End">
          Desenvolvimento de sites, blogs, e-commerces e sistemas web
          especialista em HTML, CSS, JavaScript, ReactJs,Sass e
          Style-Components.
        </Card>
        <Card Svg={SmartPhone} title="Mobile">
          Desenvolvimento de Aplicativos para Celulares usando React/Native.
        </Card>
        <Card Svg={Banco} title="Back-End">
          Criação de aplicações back-end com uso de NodeJs com auxilo de
          MongoDb,Mysql e PostgreSQl ou aplicativos serveless usando firebase.
        </Card>
        <Card Svg={Codig} title="Seo">
          Uso de boas praticas pra melhor formatação , responsividade do codigo
          ,sua manutenção e boas medidas melhorar o posicionamento nos sites de
          busca.
        </Card>
      </MainDiv>
    </Container>
  )
}
