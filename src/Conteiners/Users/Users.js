import React from 'react';

const Users = () => {
    return (
        <div>
            <h1> Users Page</h1>
        </div>
    );
};

export default Users;
// import React, { Component } from 'react';
// // import Form from '../../Components/Form/Form';
// import List from '../../Components/List/List';
// import Loader from 'react-loader-spinner'
// import { withCredentials, request } from '../../helpers/request'


// class Users extends Component {
//     state = {
//         users: [],
//         loader: true,
//         error: false,
//         search: '',
//         page: 1,
//         perPage: 9,
//         totalItemCount: 20
//     }
//     componentDidMount() {
//         this.getUsers()
//     }
//     getUsers = async () => {
//         // const { page, perPage } = this.state;

//         const url = withCredentials(`https://developers.themoviedb.org/3/trending/get-trending/all/day?`);
//         try {
//             const result = await request('get', url);
//             this.updateUsers(result.result)
//         } catch (error) {
//             this.errorToggle(true)
//         } finally {
//             this.loaderToggle(false)
//         }
//     }
//     updateUsers = (users) => {
//         this.setState({ users })
//     }
//     loaderToggle = (status) => {
//         this.setState({ loader: status })
//     }
//     errorToggle = (status) => {
//         this.setState({ error: status })
//     }

//     render() {
//         const { users, loader, error, } = this.state;
//         return (
//             <>
//                 {loader && <Loader type="Puff"
//                     color="#00BFFF"
//                     height={100}
//                     width={100}
//                     timeout={3000} />}
//                 {/* <Form /> */}
//                 <List users={users}/>

//             </>
//         );
//     }
// }

// export default Users;