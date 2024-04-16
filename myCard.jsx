
import React from 'react';

function Card(props) {
  const chunkSize = 6; 

  
  const chunkedData = props.datav.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; 
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div>
      {chunkedData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap items-center p-4">
          {row.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="rounded-full overflow-hidden border-4 border-white w-24 h-24 flex-shrink-0">
                <img className="w-full h-full object-cover" src={item.image} alt={item.firstName} />
              </div>
              <div>
                <h2 className="text-xl font-bold">{item.firstName}</h2>
                <p className="text-gray-500">{item.jobTitle}</p>
              </div>
            </div>
          ))}
          {}
          {row.length < chunkSize && (
            Array.from({ length: chunkSize - row.length }, (_, index) => (
              <div key={`placeholder-${index}`} className="flex items-center space-x-4">
                <div className="rounded-full overflow-hidden border-4 border-transparent w-24 h-24 flex-shrink-0"></div>
                <div>
                  <h2 className="text-xl font-bold">&nbsp;</h2>
                  <p className="text-gray-500">&nbsp;</p>
                </div>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
