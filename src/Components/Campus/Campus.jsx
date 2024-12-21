import './campus.css'
import gallery_01 from '../../Assest/gallery-1.png'
import gallery_02 from '../../Assest/gallery-2.png'
import gallery_03 from '../../Assest/gallery-3.png'
import gallery_04 from '../../Assest/gallery-4.png'
import whiteArrow from '../../Assest/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_01} alt="" />
        <img src={gallery_02} alt="" />
        <img src={gallery_03} alt="" />
        <img src={gallery_04} alt="" />
      </div>
      <button className='btn dark-btn'>See More Here..<img src={whiteArrow} alt="" /> </button>
    </div>
  )
}

export default Campus