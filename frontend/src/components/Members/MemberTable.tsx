import React from 'react';
import ResponsiveTable from '../App/ResponsiveTable';

const MemberTable: React.FC = () => {
    const headers = [
        'Code', 'Type', 'Rank', 'Name', 'Starting Date',
        'Referral Details', 'Bonus 1', <>Bonus 2<br />Payment<br /> Date</>,
        'Amount', <>Bonus 3<br />Qualification<br /> Date</>, 'Amount',
        'Total Earnings', 'Action',
    ];


    const data = [
        [
            '000001', 'A', '👤', 'Htet Myat', '01/07/2025',
            'A / 5 | B / 5', '1000฿ 2000฿', '06/07/2025',
            '500฿', '01/08/2025', '100฿', '3600฿',  <>
            <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
        </>,
        ],
        [
            '000001', 'B', '👤', 'Myat Myat', '01/07/2025',
            'A / 0 | B / 10', '0฿ 4000฿', '06/07/2025',
            '1000฿', '01/08/2025', '200฿', '5200฿',  <>
            <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
        </>,
        ],
        [
            '000001', 'A', '👤', 'Htet Myat', '01/07/2025',
            'A / 5 | B / 5', '1000฿ 2000฿', '06/07/2025',
            '500฿', '01/08/2025', '200฿', '3700฿',  <>
            <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
        </>,
        ],
         [
            '000001', 'A', '👤', 'Htet Myat', '01/07/2025',
            'A / 5 | B / 5', '1000฿ 2000฿', '06/07/2025',
            '500฿', '01/08/2025', '100฿', '3600฿',  <>
            <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
        </>,
        ],
        [
            '000001', 'B', '👤', 'Myat Myat', '01/07/2025',
            'A / 0 | B / 10', '0฿ 4000฿', '06/07/2025',
            '1000฿', '01/08/2025', '200฿', '5200฿',  <>
            <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
        </>,
        ],
        [
            '000001', 'A', '👤', 'Htet Myat', '01/07/2025',
            'A / 5 | B / 5', '1000฿ 2000฿', '06/07/2025',
            '500฿', '01/08/2025', '200฿', '3700฿',  <>
            <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
        </>,
        ],
         [
            '000001', 'A', '👤', 'Htet Myat', '01/07/2025',
            'A / 5 | B / 5', '1000฿ 2000฿', '06/07/2025',
            '500฿', '01/08/2025', '100฿', '3600฿',  <>
            <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
        </>,
        ],
        [
            '000001', 'B', '👤', 'Myat Myat', '01/07/2025',
            'A / 0 | B / 10', '0฿ 4000฿', '06/07/2025',
            '1000฿', '01/08/2025', '200฿', '5200฿',  <>
            <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
        </>,
        ],
        [
            '000001', 'A', '👤', 'Htet Myat', '01/07/2025',
            'A / 5 | B / 5', '1000฿ 2000฿', '06/07/2025',
            '500฿', '01/08/2025', '200฿', '3700฿',  <>
            <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
        </>,
        ],

    ];

    return (
        <div className="">
            <ResponsiveTable headers={headers} data={data} />
        </div>
    );
};

export default MemberTable;
