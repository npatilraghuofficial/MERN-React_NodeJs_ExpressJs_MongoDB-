import React from 'react'
import { Table   ,
    Header,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell,} from '@table-library/react-table-library/table';


function DocumentVerify() {

    const [search, setSearch] = React.useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
      };


    const list = [
        {
          id: '1',
          name: 'VSCode',
          deadline: new Date(2020, 1, 17),
          type: 'SETUP',
          isComplete: true,
        },
        {
          id: '2',
          name: 'JavaScript',
          deadline: new Date(2020, 2, 28),
          type: 'LEARN',
          isComplete: true,
        },
        {
          id: '3',
          name: 'React',
          deadline: new Date(2020, 3, 8),
          type: 'LEARN',
          isComplete: false,
        }
      ];

      const data = {
        nodes: list.filter((item) =>
          item.name.includes(search)
        ),
      };

  return (
<>
<label htmlFor="search">
        Search by Task:
        <input id="search" type="text" onChange={handleSearch} />
      </label>

<div>
        <label htmlFor="setup">
          Include SETUP:
          <input
            id="setup"
            type="checkbox"
            checked={filters.includes('SETUP')}
            onChange={() => handleFilter('SETUP')}
          />
        </label>
      </div>

      <div>
        <label htmlFor="learn">
          Include LEARN:
          <input
            id="learn"
            type="checkbox"
            checked={filters.includes('LEARN')}
            onChange={() => handleFilter('LEARN')}
          />
        </label>
      </div>


<Table data={data}>
      {(tableList) => (
        <>
          <Header>
            ...
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>{item.name}</Cell>
                <Cell>
                  {item.deadline.toLocaleDateString(
                    'en-US',
                    {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    }
                  )}
                </Cell>
                <Cell>{item.type}</Cell>
                <Cell>{item.isComplete.toString()}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
    
    </>
  )
}

export default DocumentVerify
