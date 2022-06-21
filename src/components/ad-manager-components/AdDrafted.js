import React from 'react'
import AdManagerHeader from './AdManagerHeader'
import AdManagerMenu from './AdManagerMenu'
import AdManagerSearch from './AdManagerSearch'
import AdsTopComponents from './AdsTopComponents'
import AdSidebar from './AdSidebar'
import AdManagerTable from './AdManagerTable'

const AdDrafted = () => {
    return (
        <>
            <div className='d-flex'>
                <AdSidebar></AdSidebar>
                <div>

                    <AdManagerHeader></AdManagerHeader>

                    <AdsTopComponents></AdsTopComponents>

                    <AdManagerSearch></AdManagerSearch>

                    <AdManagerTable></AdManagerTable>

                </div>
            </div>
        </>
    )
}

export default AdDrafted