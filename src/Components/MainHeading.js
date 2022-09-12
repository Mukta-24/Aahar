import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import './MainHeading.css'
function MainHeading() {
  return (
    <>
    <Container className='main'>
      <Row className='main_container'>
        <Col className='main_content'>
          <p className='main_heading'>The Best Way to <span>Connect</span> with your college</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi minus repellat, consequatur beatae aspernatur similique vero eos numquam est, quae distinctio impedit saepe veritatis delectus voluptatem dicta. Blanditiis, voluptas!</p>
          <div className="btn">
            <Button>Order Now</Button>
          </div>
        </Col>
        <Col className='main_image'>
          <div className="main_bg">
            <img src='https://restaurantapp-c2ed6.web.app/static/media/heroBg.c43c4862422e70d88698.png'/>
          </div>
        </Col>
      </Row>
    </Container>
    </>
    
  )
}

export default MainHeading
