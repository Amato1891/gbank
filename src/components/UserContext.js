// import React from 'react';

//     const users=
//         [
//           {name:'Jim', email:'amato1891@yahoo.com',password:'secret',balance:0}, {name:'John', email:'john@yahoo.com',password:'secret',balance:0}];

//     const UserContext= React.createContext(users);
//     const UserProvider = ({ children }) => {
//         const [user, setUser] = React.useState(UserContext);
      
//         return (
//           <UserContext.Provider value={[user, setUser]}>
//             {children}
//           </UserContext.Provider>
//         );
//     }
// export default UserProvider