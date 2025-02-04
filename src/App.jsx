
import './App.css'
import { HEADER_IMG, WEBSITE_DESCRIPTION, WEBSITE_NAME, BUTTON1,BUTTON2,BUTTON_STYLES} from './config'

function App() {
 

  return (
    <>
    <div className='bg-amber-100 min-h-screen'>
    <h1 className=' text-center text-5xl  mx-10 text-orange-400 font-bold'>{WEBSITE_NAME}</h1>
      <p className='  text-lg text-orange-500 mx-10 my-5 '>{WEBSITE_DESCRIPTION}</p>
    
    <img src={HEADER_IMG} className='h-{200px} object-cover  mx-auto rounded-md shadow-black shadow-lg mb-6'></img>
    <div className='flex justify-center  '>
      <button className=' m-5 px-4 py-2 text-white rounded-md'style={BUTTON_STYLES}>
{BUTTON1}
      </button>
      <button className=' m-5 px-4 py-2 text-white rounded-md' style={BUTTON_STYLES} >
{BUTTON2}
      </button>
    </div>
    </div>
    </>
  )
}

export default App
