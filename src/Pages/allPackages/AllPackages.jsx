import React from 'react'
import usePackages from '../../Hook/usePackages'
import PackageCard from './PackageCard';
import Loading from '../../Components/Loding'
import { IoSearchSharp } from 'react-icons/io5';
import axios from 'axios';
import Button from '../../Components/common/Button';
import toast from 'react-hot-toast';
const AllPackages = () => {
  const {packages,setPackages,loading} = usePackages()
  // console.log(packages);
  
  // console.log("work");
  
  if(loading) return <Loading></Loading>
  const handleSearch=(e)=>{
    e.preventDefault()
    
    const searchQuery = e.target.search.value
// console.log(searchQuery);

    axios.get(`${import.meta.env.VITE_API_BASE_URL}/packages/search?query=${searchQuery}`).then(res => setPackages(res.data)).catch(err=> toast.error(err.message))
  }
  return (
    <div className="bg-gray-100 pb-32 dark:bg-[#1D232A]">
      <div className='container'>
      <div className='text-center pt-16 pb-4'>
      <h2 className="text-3xl md:text-4xl font-bold">All <span className='text-amber-500'>Packages</span></h2>
      <p className=" md:text-xl lg:text-lg font-medium text-gray-700 dark:text-[#ECF9FF] pt-5">Discover top-rated tour packages tailored for every traveler—adventure, <br />relaxation, and more.  Book easily and travel with confidence!</p>
      </div>
      <form className='mt-5 mb-15 flex gap-1 justify-center items-center' onSubmit ={handleSearch} >
        <input type="text" name='search' placeholder="searce by package name" className="input"/>
     
      <Button className='text-white'><input type="submit" className='' value='search' /></Button>
      </form>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
{packages?.map((singlePackage)=><PackageCard key={singlePackage._id} singlePackage={singlePackage}></PackageCard>)}
      </div>
    </div>
      </div>
  )
}

export default AllPackages