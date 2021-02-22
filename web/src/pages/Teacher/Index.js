import React, { useState } from 'react'
import PanelLayout from '../../components/Layouts/PanelLayout/Index'
import Feed from '../../components/feed/Feed'
import { useHistory } from 'react-router-dom'


function Main() {
    const history = useHistory()
    history.block()
    const [page, setPage] = useState(null)

    return (
        <>
            <PanelLayout selected={1} role="teacher">
                <Feed />
            </PanelLayout>

        </>

    )
}

export default Main
