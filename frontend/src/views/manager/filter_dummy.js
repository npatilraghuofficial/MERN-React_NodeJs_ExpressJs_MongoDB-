import React from 'react'
import { Table   ,
    Header,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell,} from '@table-library/react-table-library/table';


function filter() {

    const [filters, setFilters] = React.useState(['SETUP', 'LEARN']);

    const handleFilter = (filter) => {
      filters.includes(filter)
        ? setFilters(filters.filter((value) => value !== filter))
        : setFilters(filters.concat(filter));
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
        nodes: list.filter(
          (item) =>
            (filters.includes('SETUP') && item.type === 'SETUP') ||
            (filters.includes('LEARN') && item.type === 'LEARN')
        ),
      };


  return (
<>

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

export default filter




<div className="App">
<header className='header'>
  <h3>ENTER BUS DETAILS TO GENERATE QR</h3>
  
  <form onSubmit={generateCode}>
    <Form.Control
      type='text'
      placeholder='Enter the data'
      value={url}
      onChange={(e)=> setUrl(e.target.value)}
    />
    <br/>

             



    <button type='submit'>Generar QR Code</button>
  </form>
  {qr ? (
    <>
      <div>
          <br/>
              <img src={qr} alt='Image QRCODE'/>
          <br/>
      </div>
      <div className='download'>
      
          <a href={qr} download='codeQR+BUSNO .png'  className='download'>Download </a>
      </div>
    </>
  )
  :''
  }
</header>
</div>
