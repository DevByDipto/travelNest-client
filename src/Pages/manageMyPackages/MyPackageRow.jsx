import React from 'react'

const MyPackageRow  = ({packageData,index}) => {
    console.log(packageData);
    
  return (
 <tr>
        <th>{index+1}</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Update</td>
        <td>Delete</td>
      </tr>
  )
}

export default MyPackageRow 