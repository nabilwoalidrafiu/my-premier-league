import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetails from '../TeamDetails/TeamDetails';

const SingleTeam = () => {
    const {idTeam} = useParams();
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setDetails(data.teams)})
    },[idTeam])
    return (
        <div>
            {
                details.map(detail => <TeamDetails key={idTeam} detail={detail}></TeamDetails>)
            }
        </div>
    );
};

export default SingleTeam;