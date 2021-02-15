import React ,{useState}from 'react'
import PanelLayout from '../../components/Layouts/PanelLayout/Index'
import Feed from '../../components/feed/Feed'
import FeedHead from '../../components/feed/FeedHead'


function Main() {

const [page, setPage] = useState(null)

    return (
        <>
            <PanelLayout selected={1}>
                <Feed/>
            </PanelLayout>

        </>

    )
}

export default Main
