import React from 'react'
import Layout from '../components/Layout'
import Button from '../examples/Button'

const Tours = () => {
    return (
        <Layout>
            <div>
                <Button textColor="yellow" bgColor='black'>Button One</Button>
                <Button textColor="white" bgColor='blue' big>Button Two</Button>
            </div>
        </Layout>
    )
}

export default Tours
