import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';
import Topbar from '../Topbar/Topbar';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data =>{
            setTeams(data.teams)
        } )
    },[])
    
    return (
        <div className="text-center" style={{backgroundColor: "#283747"}}>
            <div>
                <Topbar></Topbar>
                <Header></Header>
            </div>
            <div className="teams mt-5 container">
                <div className='text-center row row-cols-1 row-cols-md-3 g-4 '>
                    {
                        teams.map(team => <Teams className="row" key={team.idTeam} team={team}></Teams>)
                    }
                </div>

            </div>
            <div className="footer mt-5 p-5 text-white">
                <p>Copyright©2021.premier_league. All rights reserved.England.</p>
            </div>
        </div>
    );
};

export default Home;