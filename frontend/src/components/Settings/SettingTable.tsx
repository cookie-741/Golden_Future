import React from 'react'
import ResponsiveTable from '../App/ResponsiveTable'

const SettingTable: React.FC =()=>{
    const header =[
        'Code', 'Type', 'Rank', 'Name','Total Earnings','Bonus Detail'
    ]
    const data = [
        [
            '000001', 'A', '👤', 'Htet Myat', '3600฿', 
            <>
             <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
            </>
        ],
        [
            '000001', 'A', '👤', 'Htet Myat', '3600฿',
             <>
             <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
            </>
        ],
        [
            '000001', 'A', '👤', 'Htet Myat', '3600฿',
             <>
             <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
            </>
        ],
        [
            '000001', 'A', '👤', 'Htet Myat', '3600฿',
             <>
             <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
            </>
        ],[
            '000001', 'A', '👤', 'Htet Myat', '3600฿',
             <>
             <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
            </>
        ],
        [
            '000001', 'A', '👤', 'Htet Myat', '3600฿',
             <>
             <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
            </>
        ],
        [
            '000001', 'A', '👤', 'Htet Myat', '3600฿',
             <>
             <span role="img" aria-label="view">👁️</span>
            <span role="img" aria-label="edit">✏️</span>
            <span role="img" aria-label="delete">🗑️</span>
            </>
        ],

    ]
  return (
    <div className='text-center'>
        <ResponsiveTable headers={header} data={data} />
    </div>
  )
}

export default SettingTable