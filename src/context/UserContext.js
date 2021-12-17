import React, { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const UserData = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={UserData}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider }
export default UserContext;