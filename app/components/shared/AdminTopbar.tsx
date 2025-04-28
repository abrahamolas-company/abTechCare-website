import React from 'react'
import { Icons } from '../ui/icons'

function AdminTopbar() {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center w-1/2 gap-2 border border-[#717170] bg-[#383434] rounded-xl py-2 px-4">
                <Icons.Search />
                <input placeholder='Search' className='bg-transparent w-full outline-none text-base placeholder:text-sm placeholder:text-[#717170]' />
            </div>
            <div className="flex items-center gap-1">
                <Icons.AdminUser className='!fill-white' />
                <p className='text-sm'>Israel</p>
            </div>

        </div>
    )
}

export default AdminTopbar