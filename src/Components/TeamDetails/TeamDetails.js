import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMars, faClock, faGlobe, faVenus} from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import '../TeamDetails/TeamDetails.css'
import male from '../../Photo/male.png'
import female from '../../Photo/female.png'
import Topbar from '../Topbar/Topbar';

const TeamDetails = (props) => {
    const {strTeam, strSport, strCountry, strGender, intFormedYear, strTeamBadge, strDescriptionEN, strStadiumThumb,strWebsite, strFacebook, strTwitter, strInstagram} = props.detail;

    return (
        <div className="team-details text-center">
            <Topbar></Topbar>
            <div className="banner" style={{ height: 250, backgroundImage: `url(${strStadiumThumb})`,  backgroundPosition: 'center', backgroundSize: 'cover' ,opacity: 0.7 }}>
                   <img src={strTeamBadge}alt=""/>
            </div>
            <div className="container">
            <div className="text-center">
            <div className="team-info row d-flex justify-content-around pt-5 pb-5 mt-5">
                <div className="col-sm-12 col-md-5 d-flex justify-content-center align-items-center">
                    <div className="text-sm-center text-md-left">
                        <h1 style={{fontSize:'50px'}}>{strTeam}</h1>
                        <h6><FontAwesomeIcon icon={faClock}/> Founded Year: {intFormedYear}</h6>
                        <h6><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</h6>
                        <h6><FontAwesomeIcon icon={faFutbol}/> Sport Type: {strSport}</h6>
                        <h6>
                            {
                                strGender === "Male" ?<FontAwesomeIcon icon={faMars}/> : <FontAwesomeIcon icon={faVenus}/> 
                            }  Gender: {strGender}
                        </h6>
                        
                    </div>
                </div>

                <div className="col-sm-12 col-md-7">
                    {
                        strGender === "Male" ? <img className='gender-img img-fluid' src={male} alt=""/> : <img className='gender-img img-fluid' src={female} alt=""/> 
                    }
                </div>
            </div>
            </div>
            <div className="pt-5 pb-5">
                <h2 className="text-center">More About {strTeam}</h2>
                <p className="text-justify">{strDescriptionEN}</p>
            </div>
            </div>
            <div className="icon">
                <a  href={`https://${strWebsite}`}><FontAwesomeIcon className="brand-icon" icon={faGlobe} /></a>
                <a className="fb-icon" href={`https://${strFacebook}`}><FontAwesomeIcon className="brand-icon" icon={faFacebook} /></a>
                <a className="twit-icon" href={`https://${strTwitter}`}><FontAwesomeIcon className="brand-icon" icon={faTwitterSquare} /></a>
                <a className="instra-icon" href={`https://${strInstagram}`}><FontAwesomeIcon className="brand-icon" icon={faInstagram} /></a>
                
            </div>
        </div>
    );
};

export default TeamDetails;