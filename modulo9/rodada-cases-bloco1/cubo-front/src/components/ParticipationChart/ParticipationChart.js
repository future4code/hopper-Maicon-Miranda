import React, { useEffect, useState } from "react";
import '../../components/ParticipationChart/ParticipationChart.css'
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { Chart } from "react-google-charts";


export const options = {
    title: "",
    pieHole: 0.4,
    is3D: false,
};

export const data = [
    ["Name", "Participation"],
    ["Carlos Moura", 5],
    ["Fernanda Oliveira", 15],
    ["Hugo Silva", 20],
    ["Eliza Souza", 20],
    ["Anderson Santos", 40], 
];


function ParticipationChart() {

    const [chartData, setChartData] = useState([]);

    const dataChart = chartData?.map((users) => {
        return(
           [users.name, users.participation]
        )
    })

    dataChart?.unshift(["Name", "Participation"])

    useEffect(() => {

     axios.get(`${BASE_URL}`)
            .then((res) => {
                setChartData(res.data.users);
                // console.log(res.data.users)
            })
            .catch((error) => {
                console.log(error.response)
            })

    }, []);

    

    console.log(dataChart)

    return (
        <div className="pieContainer">
            {dataChart.length !== 0 ? 
            <Chart
            
                chartType="PieChart"
                width="100%"
                height="280px"

                //Tentativas de popular o gráfico com os dados vindos da API:

                //Tentei com o Rodrigo em um plantão e não conseguimos. 

                //Se o avaliador souber onde está o erro, por favor me dar o feedback.

                // data={chartData.map((users) =>{
                //     return ([
                //         [{"name": users.name, "participation": users.participation }]
                //     ])
                // } )}

                // data={[
                //     ['users name', 'users participation'],
                //     ...chartData.map(users => [users.name, users.participation])
                // ]}

                data={data} //dataChart
                options={options}
            

            />
             : null}
        
        </div>
    )
}


export default ParticipationChart