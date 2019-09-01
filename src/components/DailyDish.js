import React from 'react';
import Card from './Card';

const DailyDish = () => {
  return (
    <div className="daily-dish">
      <h2>Dish of the day</h2>
      <div className="card-container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default DailyDish;
