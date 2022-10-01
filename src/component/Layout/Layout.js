import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { UserProvider } from './Header/Context';
import { BrowserRouter } from "react-router-dom";


class Layout extends React.Component {
  render(){
    return (
       <UserProvider>
      <BrowserRouter>
      <Header />
        <main>{this.props.children}</main>
        <Footer />
   
       </BrowserRouter>
     </UserProvider>
   
      
    )
  }
}export default Layout;