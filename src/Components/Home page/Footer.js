import React from 'react'
import { Row, Col} from 'react-bootstrap'
function Footer() {
  return (
    <>
    <div className='footer'>
      <Row className='upper_footer'>
        <Col className = "footer_image foot">
          <img src='images/image.png' />
        </Col>
        <Col className='quick foot'>
          <h6>HOME</h6>
          <h6>ABOUT US</h6>
          <h6>PRICING</h6>
        </Col>
        <Col className='help foot'>
          <h6>CONTACT US</h6>
          <h6>ORDER CANCELATION</h6>
          <h6>PRIVACY POLICY</h6>
        </Col>
      </Row>
      <div className="mid_footer">
        <h2>Social Media</h2>
        <div className="social_icons">
          <Row>
            <Col><i className="fa-brands fa-instagram fa-2x"></i></Col>
            <Col><i className="fa-solid fa-envelope fa-2x"></i></Col>
            <Col><i className="fa-solid fa-phone fa-2x"></i></Col>
          </Row>
        </div>
      </div>
      <div className="lower_footer">
        <p>copyright@2022</p>
      </div>
    </div>
    </>
  )
}
export default Footer
