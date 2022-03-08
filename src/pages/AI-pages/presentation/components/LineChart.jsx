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
const data = {
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(152, 128, 101)',
      borderWidth: 4,
      pointRadius: 1,
      pointBorderColor: 'white',
      data: [
        { x: 'January', y: 10000 },
        { x: 'February', y: 20000 },
        { x: 'March', y: 13000 },
        { x: 'April', y: 4000 },
        { x: 'May', y: 5000 },
      ],
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
          console.log(tooltipItem);
          return tooltipItem.label + ' : ' + tooltipItem.formattedValue;
        },
      },
    },
  },
};
const Chart = () => {
  return (
    <StyledChart>
      <Line type="line" data={data} options={option} />
    </StyledChart>
  );
};

export default Chart;

const StyledChart = styled.div`
  margin: 10px auto;
  width: 80vw;
  max-width: 900px;
`;
