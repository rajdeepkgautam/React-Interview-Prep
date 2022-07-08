import React from 'react';

function Parent(){
    const data = 'Data from parent';
    return(
        <div>
            <Child dataParentToChild = {data}/>
        </div>
    )
}
export default Parent