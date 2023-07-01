
// withlLoader jsx component
    // importing modules
import React, { useState } from "react";
import User from './User'

function WithLoader(Wrapper) {
    return (props) => {
        const [loader, setLoader] = useState(true)

        setTimeout(() => {
            setLoader(false)
        }, 3000)

        return (
            <>
                {loader ? <h1>Loading...</h1> : <Wrapper {...props} />}
            </>
        )
    }
}

export default WithLoader
