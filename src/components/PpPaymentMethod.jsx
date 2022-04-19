import React, { useEffect, useState } from "react";

export default function PpPaymentMethod({ pmDescription }) {

  const [instalments, setInstalments] = useState([]);

  // Parse the description string to get the get rid of <br/> and to get the instalments to display them nicely
  useEffect(() => {
    let insArray = [];

    pmDescription.map((p) => {
      const cleanText = p.replace("\r\n", '');
      // Slicing the entire description string to get just the insalments part
      const indexOfInstalment = cleanText.search(/\d+ cuotas/);
      const ins = cleanText.slice(indexOfInstalment);
      // Because 'ins' has empty objetcs, this makes sure is just working with strings, splits the instalment string into two parts to be desplayed separately
      // and pushes them into 'insArray' to be set lates to the state
      insArray.push((typeof(ins) === 'string') && ins.split(' de '));
    })
    
    // Deleting first or last element if they are empty
    if (insArray[0] = ' ') insArray.shift();
    insArray.pop()

    setInstalments(insArray);
  }, []);

  return(
    <>
    <div className="description">
      {instalments.map((p, k) => {
        return <div key={k} className="instalments">
          <div className="instalment-months">{ p[0] }</div>
          <div className="instalment-price">{ p[1] }</div>
        </div>
      })}
    </div>
    <div>{pmDescription[0]}</div>
    </>
  )
}