import React from 'react'
import {FaEye,FaInfo,FaLink,FaStar,FaUtensils} from 'react-icons/fa'

import PropTypes from 'prop-types'

function RepoItem({repo}) {
    const { name, 
        html_url, 
        description, 
        language, 
        watchers_count, 
        forks, 
        open_issues, 
        stargazers_count,
      } = repo
  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
        <div className="card-body">
         <h3 className='mb-2 text-xl font-semibold'>
            < a href = {html_url} >
                <FaLink className='inline mr-1'/>
                {name}
                 </a>
            </h3> 
            <p className="mb-3">
                {description}
                </p>  
            <div>
                <div className="mr-2 badge badge-info badge-lg">
                <FaEye className='mr-2'>
                  
                </FaEye>
                {watchers_count}
                </div>
                <div className="mr-2 badge badge-success badge-lg">
                <FaStar className='mr-2'>
                  
                </FaStar>
                {stargazers_count}
                </div>
                <div className="mr-2 badge badge-error badge-lg">
                <FaInfo className='mr-2'>
                  
                </FaInfo>
                {open_issues}
                </div>
                <div className="mr-2 badge badge-warning badge-lg">
                <FaUtensils className='mr-2'>
                  
                </FaUtensils>
                {forks}
                </div>
            </div>
        </div>

    </div>
  )
  
}
RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem