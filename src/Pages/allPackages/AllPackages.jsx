import React from 'react'
import usePackages from '../../Hook/usePackages'
import PackageCard from './PackageCard';
import Loading from '../../Components/Loding'
const AllPackages = () => {
  const {packages,loading} = usePackages()
  if(loading) return <Loading></Loading>
  
  return (
    <div>
      <h2>AllPackages</h2>
      <div className='grid grid-cols-3'>
{packages.map((singlePackage)=><PackageCard key={singlePackage._id} singlePackage={singlePackage}></PackageCard>)}
      </div>
    </div>
  )
}

export default AllPackages