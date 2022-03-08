import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart({
  stockDetail
})
{
  const history=[];
  stockDetail.map((day)=>(
    history.push(
      {x:day.createAt,y:day.endPrice}
    )
  ));
  const data = {
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(152, 128, 101)',
        borderWidth: 4,
        pointRadius: 1,
        pointBorderColor: 'white',
        data: history
        ,
      },
    ],
  };
  
  const option = {
    spanGaps: true,
    plugins: {
      legend: {
        //범례 스타일링
        display: false,
      },
      tooltip: {
        intersect: false,
        displayColors: false,
        callbacks: {
          title: () => {
            return null;
          },
          label: function (tooltipItem) {
            return tooltipItem.label + ' : ' + tooltipItem.formattedValue;
          },
        },
      },
    },
  };
  return (
    <StyledChart>
      <Line type="line" data={data} options={option} />
    </StyledChart>
  );
};

const StyledChart = styled.div`
  margin: 10px auto;
  width: 80vw;
  max-width: 900px;
`;
