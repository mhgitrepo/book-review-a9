import React from 'react';
import { 
    LineChart, 
    Line, 
    CartesianGrid, 
    XAxis, 
    YAxis, 
    Tooltip, 
    Legend, 
    AreaChart, 
    Area, 
    BarChart, 
    Bar, 
    PieChart, 
    Pie } from 'recharts';
import useCharts from '../../hooks/useCharts';

const Dashboard = () => {
    const [chart] = useCharts();

    return (
        <div className='w-8/12 mx-auto mt-12 mb-10 grid grid-cols-2 justify-items-center gap-12'>
            <div>
                <h2 style={{"color" : "#fa8072"}} className='text-2xl font-bold text-center mb-12'>Month Wise Sell</h2>
                <LineChart width={600} height={400} data = {chart}>
                    <Line type="monotone" dataKey="sell" stroke="#fa8072"/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <Tooltip stroke="#fa8072" />
                    <YAxis />
                    <Legend/>
                </LineChart>
            </div>
            <div>
                <h2 style={{"color" : "#fa8072"}} className='text-2xl font-bold text-center mb-12'>Investment VS Revenue</h2>
                <AreaChart width={600} height={400} data = {chart}>
                    <Area type="monotone" dataKey="investment" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="revenue" stroke="#ffc658" fill="#ffc658"/>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <Tooltip stroke="#5f9ea0" />
                        <YAxis />
                        <Legend/>
                </AreaChart>
            </div>
            <div>
                <h2 style={{"color" : "#fa8072"}} className='text-2xl font-bold text-center mb-12'>Investment VS Revenue</h2>
                <BarChart width={600} height={400} data = {chart}>
                    <Bar type="monotone" dataKey="investment" stroke="#8884D8" fill="#8884D8"/>
                    <Bar type="monotone" dataKey="revenue" stroke="#82CA9D" fill="#82CA9D"/>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <Tooltip stroke="#5f9ea0" />
                        <YAxis />
                        <Legend/>
                </BarChart>
            </div>
            <div>
                <h2 style={{"color" : "#fa8072"}} className='text-2xl font-bold text-center mb-12'>Investment VS Revenue</h2>
                <PieChart width={600} height={400}>
                    <Pie data = {chart} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data = {chart} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Legend/>
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;