import React from 'react';
import { Typography } from "antd";
import { BarChart as RechartsBarChart, CartesianGrid, ResponsiveContainer, Tooltip, Legend, XAxis, Bar } from 'recharts';

const data = [
  { month: "Enero", cats: 10 },
  { month: "Febrero", cats: 8 },
  { month: "Marzo", cats: 9 },
  { month: "Abril", cats: 10 },
  { month: "Mayo", cats: 14 },
  { month: "Junio", cats: 5 },
  { month: "Julio", cats: 20 },
  { month: "Agosto", cats: 15 },
  { month: "Septiembre", cats: 10 },
  { month: "Octubre", cats: 9 },
  { month: "Noviembre", cats: 6 },
  { month: "Diciembre", cats: 30 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { month, cats } = payload[0].payload;
    return (
      <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <p>{month}</p>
        <p>cats: {cats}</p>
      </div>
    );
  }
  return null;
};

const BarChart = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: '85vh',
      width: '90vw'
    }}>
      <Typography.Title level={4} style={{ marginBottom: '20px' }}>Gatitos Adoptados Este Año</Typography.Title>
      <ResponsiveContainer width="80%" height="70%">
        <RechartsBarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="cats" fill="#d946ef" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
