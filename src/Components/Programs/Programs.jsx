import './programs.css'
import program01 from '../../Assest/program-1.png'
import program02 from '../../Assest/program-2.png'
import program03 from '../../Assest/program-3.png'
import programIcon01 from '../../Assest/program-icon-1.png'
import programIcon02 from '../../Assest/program-icon-2.png'
import programIcon03 from '../../Assest/program-icon-3.png'



const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program01} alt="" />
        <div className='caption'>
          <img src={programIcon01} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className='program'>
        <img src={program02} alt="" />
        <div className='caption'>
          <img src={programIcon02} alt="" />
          <p>Master Degree</p>
        </div>
      </div>

      <div className='program'>
        <img src={program03} alt="" />
        <div className='caption'>
          <img src={programIcon03} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs