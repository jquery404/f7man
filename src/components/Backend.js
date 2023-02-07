import React from 'react';

import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

function Backend() {

    const [myItem, setMyItem] = useState('');

    useEffect(()=>{
      fetchItem();
    }, []);

    async function fetchItem() {
      API.get('foodapi', '/categories')
        .then(response => {
          setMyItem(response.success);
        })
        .catch(error => {
          console.log(error.response);
        });
    }

    return (
        <>
            <h1>Api says what?</h1>
            <p>{myItem}</p>
        </>
    )
}

export default Backend;