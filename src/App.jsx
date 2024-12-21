import 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contacts from './Components/Contacts/Contacts'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Title subtitle='our program' title='what we offer'></Title>
      <div className='containeer'>
        <Programs></Programs>
        <About/>

      </div>
      
      <Title subtitle='Gallery' title='College Photos'></Title>
      <Campus></Campus>
      <Title subtitle='Testimonials' title='What Student Says'></Title>
      <div className='containeer'>
      <Testimonial/>
      </div>
      <Title subtitle='Contact Us' title='Get In Touch'></Title>
      <Contacts></Contacts>
    </div>
  )
}

export default App