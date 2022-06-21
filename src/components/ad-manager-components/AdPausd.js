import React from 'react'
import AdManagerHeader from './AdManagerHeader'
import AdManagerMenu from './AdManagerMenu'
import AdManagerSearch from './AdManagerSearch'
import AdManagerTable from './AdManagerTable'
import AdSidebar from './AdSidebar'
import AdsTopComponents from './AdsTopComponents'

const AdPausd = () => {
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

export default AdPausd