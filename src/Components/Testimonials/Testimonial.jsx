
import './testimonial.css'
import nextIcon from '../../Assest/next-icon.png'
import bacIcon from '../../Assest/back-icon.png'
import user1 from '../../Assest/user-1.png'
import user2 from '../../Assest/user-2.png'
import user3 from '../../Assest/user-3.png'
import user4 from '../../Assest/user-4.png'
import { useRef } from 'react'

const Testimonial = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx>-50){
      tx-=25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = ()=>{
    if(tx<0){
      tx +=25
    }
    slider.current.style.transform = `translatex(${tx}%)`
  }

 
  return (
    <div className='testimonials containeer'>
      <img src={nextIcon} className='next-btn' onClick={slideForward} />
      <img src={bacIcon} className='back-btn' onClick={slideBackward} />
      <div className="slider" >
        <ul ref={slider}>
          <li>
            <div  className='slide'>
              <div className='user-info'>
                <img src={user1} alt="" />
                <div>
                  <h3>Willium Jackson</h3>
                  <span>Fusion Technologies, Texas</span>
                </div>
              </div>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error molestias 
                cupiditate, aliquid esse dicta ullam perferendis expedita quis. Quo magnam velit
                 dolores saepe? Aliquid, nulla atque dignissimos qui facere quasi corporis illo 
                 explicabo fugit sint ullam reiciendis, numquam, illum at doloremque nisi rerum a 
                 laudantium soluta autem laboriosam totam. Dicta.</p>
            </div>
            
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user2} alt="" />
                <div>
                  <h3>Willium Jackson</h3>
                  <span>Fusion Technologies, Texas</span>
                </div>
              </div>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error molestias 
                cupiditate, aliquid esse dicta ullam perferendis expedita quis. Quo magnam velit
                 dolores saepe? Aliquid, nulla atque dignissimos qui facere quasi corporis illo 
                 explicabo fugit sint ullam reiciendis, numquam, illum at doloremque nisi rerum a 
                 laudantium soluta autem laboriosam totam. Dicta.</p>
            </div>
            
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user3} alt="" />
                <div>
                  <h3>Willium Jackson</h3>
                  <span>Fusion Technologies, Texas</span>
                </div>
              </div>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error molestias 
                cupiditate, aliquid esse dicta ullam perferendis expedita quis. Quo magnam velit
                 dolores saepe? Aliquid, nulla atque dignissimos qui facere quasi corporis illo 
                 explicabo fugit sint ullam reiciendis, numquam, illum at doloremque nisi rerum a 
                 laudantium soluta autem laboriosam totam. Dicta.</p>
            </div>
            
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user4} alt="" />
                <div>
                  <h3>Willium Jackson</h3>
                  <span>Fusion Technologies, Texas</span>
                </div>
              </div>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error molestias 
                cupiditate, aliquid esse dicta ullam perferendis expedita quis. Quo magnam velit
                 dolores saepe? Aliquid, nulla atque dignissimos qui facere quasi corporis illo 
                 explicabo fugit sint ullam reiciendis, numquam, illum at doloremque nisi rerum a 
                 laudantium soluta autem laboriosam totam. Dicta.</p>
            </div>
            
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Testimonial