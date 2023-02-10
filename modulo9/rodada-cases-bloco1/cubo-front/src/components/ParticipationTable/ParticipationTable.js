import React, { useEffect, useState } from "react";
import '../../components/ParticipationTable/ParticipationTable.css'
import axios from "axios";
import { BASE_URL } from "../../constants/url";

function ParticipationTable() {

    const [dataParticipation, setDataParticipation] = useState([]);

    useEffect(() => {

        axios.get(`${BASE_URL}`)
            .then((res) => {
                setDataParticipation(res.data.users);
                console.log(res.data.users)
            })
            .catch((error) => {
                // console.log(error.response)
            })

    }, []);

    

    return (
        <div className="tableContainer">
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last name</th>
                        <th className="participation">Participation</th>
                    </tr>
                    {dataParticipation.map((data) => {
                        let index = dataParticipation.indexOf(data) + 1
                        return (
                            <tr>
                                <th>{index}</th>
                                <th>{data.name}</th>
                                <th>{data.lastname}</th>
                                <th class="participation">{data.participation}%</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ParticipationTable





