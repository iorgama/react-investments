import React from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Card from '../components/Card';
import { allInvestments } from '../data/investments';

export default function Investments() {
  allInvestments.forEach((investments) => {
    let sum = 0;
    let percentage = 0;
    for (let i = 0; i < investments.reports.length; i++) {
      if (i === 0) {
        investments.reports[i]['monthlyPercentage'] = 0;
      }
      if (i > 0) {
        const percentage =
          ((investments.reports[i]['value'] -
            investments.reports[i - 1]['value']) /
            investments.reports[i - 1]['value']) *
          100;
        investments.reports[i]['monthlyPercentage'] = percentage;
      }

      if (i === 11) {
        sum = investments.reports[i]['value'] - investments.reports[0]['value'];
        percentage = (sum / investments.reports[0]['value']) * 100;
      }
    }
    investments.annualSum = sum;
    investments.annualPercentage = percentage.toFixed(2);
  });
  return (
    <div>
      <Header>React Investments v1.0.1</Header>
      <Main>
        {allInvestments.map(
          ({ id, description, reports, annualSum, annualPercentage }) => {
            return (
              <Card
                key={id}
                title={description}
                annualSum={annualSum}
                annualPercentage={annualPercentage}
                reports={reports}
              />
            );
          },
        )}
      </Main>
    </div>
  );
}
