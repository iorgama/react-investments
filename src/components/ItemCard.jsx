import React from 'react';
import { months } from '../data/investments';

export default function ItemCard({ month, value, year, monthlyPercentage }) {
  const textColor = monthlyPercentage > 0 ? 'text-green-600' : 'text-red-600';

  return (
    <tr>
      <td className="border-b px-2 py-4">{`${months[month - 1]}/${year}`}</td>
      <td className={`border-b font-semibold px-2 py-4 ${textColor}`}>
        {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </td>
      <td
        className={`border-b font-semibold px-8 py-4 ${textColor}`}
      >{`${monthlyPercentage.toFixed(2)}%`}</td>
    </tr>
  );
}
