import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";


export default function MainComponent(){
    return (
        <div className="container-fluid p-3 container-body">
            <header>
                <HeaderComponent />
            </header>
            <section>
                <div className="main-container d-flex row">
                    <div className="col-4">
                        <img src="images/1.png" height={580} alt="1st"/>
                    </div>
                    <div className="col-8">
                        <p style={{marginBottom:'2px',fontSize:'15px'}}><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>
                        <ul>
                            <li>
                                <p style={{marginBottom:'0px', fontSize:'13px', fontWeight:'550'}}>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p>
                            </li>
                            <li>
                                <p style={{marginBottom:'0px', fontSize:'13px', fontWeight:'550'}}>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p>
                            </li>
                        </ul>
                        <img src="images/2.png" height={400} alt="2nd"/>
                        <p style={{marginTop:'5px', fontSize:'14px', fontWeight:'500'}}>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>
                <div className="text-center">
                    <p style={{fontSize:'14px', fontWeight:'600'}}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                    <img src="images/3.png"  alt="3rd" className="mx-auto" style={{width:'90%'}}/>
                    <p style={{marginTop:'5px', marginBottom:'10px'}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
                </div>
                <hr style={{color:'red', borderWidth: '2px', marginBottom:'10px'}}/>
                <div className="text-center item-container">
                    <p><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></p>
                    <ul className="d-flex flex-wrap list-unstyled justify-content-center">
                        <li className="mx-1">CHEMICALS & PROCESS</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">POWER</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">WATER & WASTE WATER</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">OILS & GAS</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">PHARMA</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">SUGARS & DISTILLERIES</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">PAPER & PULP</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">MARINE & DEFENCE</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">METAL & MINING</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">FOOD & BEVERAGE</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">PETROCHEMICAL & REFINERIES</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">SOLAR</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">BUILDING</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">HVAC</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">FIRE FIGHTING</li>
                        <span className="text-danger mx-1"> | </span>
                        <li className="mx-1">AGRICULTURE & RESIDENTIAL</li>
                    </ul>
                </div>
            </section>
            <footer>
                <FooterComponent />
            </footer>
        </div>
    )
}