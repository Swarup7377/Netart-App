import { BsFillTelephoneFill } from 'react-icons/bs';
import { CgFacebook } from "react-icons/cg";
import { IoIosGlobe } from "react-icons/io";

export default function FooterComponent(){
    return(
        <div className="footer-container container-fluid bg-danger p-4 d-flex justify-content-around">
            <div className='d-flex'>
                <div>
                    <BsFillTelephoneFill style={{ background: '#ffffff', borderRadius: '50%', padding: '5px' }} color='#dc3545' size={31} />
                </div>
                &nbsp;&nbsp;
                <div className='text-white'><p style={{position:'relative',top:'10px'}}>Toll free <b>1800 200 1234</b></p></div>
            </div>
            <div className='d-flex'>
                <div>
                    <a href="https://www.facebook.com/cripumps" target="_blank" rel="noreferrer">
                        <CgFacebook  style={{ background: '#ffffff', borderRadius: '50%', paddingTop: '6px' }} color='#dc3545' size={31}/>
                    </a>
                </div>
                &nbsp;&nbsp;
                <div className='text-white'><p style={{position:'relative',top:'10px'}}>www.facebook.com/cripumps</p></div>
            </div>
            <div className='d-flex'>
                <div>
                    <a href="https://www.crigroups.com" target="_blank" rel="noreferrer">
                        <IoIosGlobe  style={{ background: '#ffffff', borderRadius: '50%'}} color='#dc3545' size={31}/>
                    </a>
                </div>
                &nbsp;&nbsp;
                <div className='text-white'><p style={{position:'relative',top:'10px'}}>www.crigroups.com</p></div>
            </div>
        </div>
    )
}