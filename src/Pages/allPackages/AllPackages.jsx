import React from 'react'
import usePackages from '../../Hook/usePackages'
import PackageCard from './PackageCard';
import Loading from '../../Components/Loding'
import { IoSearchSharp } from 'react-icons/io5';
import axios from 'axios';
const AllPackages = () => {
  const {packages,setPackages,loading} = usePackages()
  console.log(packages);
  
  console.log("work");
  
  if(loading) return <Loading></Loading>
  const handleSearch=(e)=>{
    e.preventDefault()
    
    const searchQuery = e.target.search.value
// console.log(searchQuery);

    axios.get(`http://localhost:3000/packages/search?query=${searchQuery}`).then(res => setPackages(res.data))
  }
  return (
    <div>
      <h2>AllPackages</h2>
      <form className='my-5 flex' onSubmit ={handleSearch} >
        <input type="text" name='search' placeholder="Type here" className="input"/>
     
      <input type="submit" className='btn btn-primary' value='search' />
      </form>

      <div className='grid grid-cols-3'>
{packages?.map((singlePackage)=><PackageCard key={singlePackage._id} singlePackage={singlePackage}></PackageCard>)}
      </div>
    </div>
  )
}

export default AllPackages