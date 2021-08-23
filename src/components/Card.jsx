import React from 'react';
import ItemCard from './ItemCard';

export default function Card({ title, reports, annualSum, annualPercentage }) {
  const textColor = annualSum > 0 ? 'text-green-600' : 'text-red-600';
  return (
    <div className="border mb-2 p-2 flex content-center justify-center flex-col">
      <h2 className="text-center font-semibold text-2xl p-2">{title}</h2>
      <h4 className="text-center font-semibold p-2">
        Rendimento total:{' '}
        <span className={textColor}>
          {`${annualSum.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })} (${annualPercentage}%)`}
        </span>
      </h4>
      <table className="bg-white">
        <tbody>
          {reports.map(({ id, month, value, year, monthlyPercentage }) => {
            return (
              <ItemCard
                key={id}
                month={month}
                year={year}
                monthlyPercentage={monthlyPercentage}
                value={value}
              />
            );
          })}
        </tbody>
      </table>
      {reports.length <= 0 && (
        <div className="text-center leading-8">
          Não existem relatórios para esse fundo!
        </div>
      )}
    </div>
  );
}
