import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const withRouter = (WrappedComponent) => (props) => {
    const navigate = useNavigate()
    const params = useParams()

    return <WrappedComponent {...props} params={params} navigate={navigate} />
}

export default withRouter