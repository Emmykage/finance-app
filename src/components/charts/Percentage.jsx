import React, { PureComponent, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Martured', value: 610 },
  { name: 'Active', value: 338 },
  { name: 'Outlook', value: 135 },
  { name: 'Default', value: 77},
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`save ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rates ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const PercentageChat = () =>  {
const [state, setState] = useState({activeIndex: 0})
  
 const  onPieEnter = (_,index) => {
    setState({
      activeIndex: index,
    });
  };

 
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <PieChart  width={40} height={40}>
          <Pie
            activeIndex={state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
            // className='border'
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }


export default PercentageChat