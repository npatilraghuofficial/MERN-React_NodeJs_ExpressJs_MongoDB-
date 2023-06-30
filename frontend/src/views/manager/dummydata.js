import React from 'react'


import { CompactTable } from '@table-library/react-table-library/compact';

const nodes = [
  {
    id: '0',
    name: 'Shopping List',
    deadline: new Date(2020, 1, 15),
    type: 'TASK',
    isComplete: true,
    nodes: 3,
  },
];


  

function dummydata() {
    const data = { nodes };

    return (
        <div>
CompactTable columns={COLUMNS} data={data} 
        </div>
    );
}

export default dummydata
