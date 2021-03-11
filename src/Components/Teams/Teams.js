import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import css from '../Teams/Teams.css'
const Teams = (props) => {
    const {idTeam, strTeam, strLeague, strTeamBadge} = props.team;
    const history = useHistory();
    const handleClickExplore = (idTeam) =>{
        history.push(`/team/${idTeam}`)
    }
    return (

        <div className="team-card col-md-3 mt-5">
            <div className="card  h-100 shadow">
                <div className="card-photo m-auto w-75">
                    <img src={strTeamBadge} className="card-img-top w-75" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{strTeam} </h5>

                    <p className="card-text">{strLeague}</p>
                </div>
                <div className="card-footer">
                <Button onClick={()=> handleClickExplore(idTeam)} variant="info">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </div>
            </div>
        </div>
            
    );
};

export default Teams;