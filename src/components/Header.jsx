import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <Navbar style={{zIndex:'1'}} expand="lg" className="bg-primary ">
    <Container>
      <Navbar.Brand className='fs-3'><Link to={'/'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}} ><i className="fa-solid fa-truck-fast me-2"></i>E Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded'><Link to={'/wishlist'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}} ><i class="fa-solid fa-heart me-2" style={{color: '#ff0026'}}></i>WishList<Badge className='ms-2 rounded' bg="light">{wishlist.length}</Badge></Link></Nav.Link>
          <Nav.Link className='btn border rounded ms-3' ><Link to={'/cart'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}} ><i class="fa-solid fa-cart-plus me-2" style={{color:'#eaed0c'}}></i>Cart<Badge className='ms-2 rounded' bg="light">{cart.length}</Badge></Link></Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header