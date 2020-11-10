import React from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';


const List = ({users}) => {
  return (
    <div className='container'>
      {users.map(card => <ListItem key={card.id} {...card} />)}
    </div>
  );
};

export default List;

// import React, { Component } from 'react';
// import axios from 'axios';
// import { withCredentials, request } from '../../helpers/request'
// import ListItem from '../ListItem/ListItem';
// import Loader from 'react-loader-spinner'
// import './List.css'
// import Form from '../Form/Form'
// import { makeStyles } from '@material-ui/core/styles';
// import Pagination from '@material-ui/lab/Pagination';

// class List extends Component {
//   state = {
//     users: [],
//     loader: true,
//     error: false,
//     message: '',
//     page: 1,
//     perPage: 9,
//     totalItemCount: 20
//   }
//   updeteUsers = (users) => {
//     this.setState({ users })
//   }
//   // loaderToggle = () => {
//   //   this.setState(prev => ({
//   //     loader: !prev.loader
//   //   }))
//   // }
//   // errorToggle = (status) => {
//   //   this.setState({ error: status })
//   // }
  // handleChange = (event, value) => {
  //   this.setState({
  //     page: value
  //   })
  // }
//   // async componentDidMount(){
//   //   const { page, perPage } = this.state;

//   //   const url = withCredentials(`https://api.github.com/search/users?q=react&page=${page}&&per_page=${perPage}&`);
//   //     try {
//   //       const result = await request('get', url);
//   //       this.setState({
//   //         users: result.items,
//   //       })
//   //     } catch (error) {
//   //       this.setState({
//   //         error: true,
//   //         loader: false,
//   //         message: error
//   //       })
//   //     } finally {
//   //       this.setState({
//   //         loader: false,
//   //       })
//   //     }
//   // }
//   async componentDidUpdate(prevProps, prevState) {
//     const { page, perPage } = this.state;
//     if (page !== prevState.page) {
//       const url = withCredentials(`https://api.github.com/search/users?q=react&page=${page}&&per_page=${perPage}&`);
//       try {
//         const result = await request('get', url);
//         this.setState({
//           users: result.items,
//         })
//       } catch (error) {
//         this.setState({
//           error: true,
//           loader: false,
//           message: error
//         })
//       } finally {
//         this.setState({
//           loader: false,
//         })
//       }
//     }

//   }

//   render() {
//     const { users, loader, error, page, totalItemCount, perPage } = this.state
//     return (
//       <>
//         <Form onSubmit={this.updeteUsers} loaderToggle={this.loaderToggle} errorToggle={this.errorToggle} />
//         <div className='container'>
//           {error && <h1>Some error, try later</h1>}
//           {loader && <Loader type="Puff"
//             color="#00BFFF"
//             height={100}
//             width={100}
//             timeout={3000} />}
//           {!error && !loader && users.map(card => <ListItem key={card.id} {...card} />)}
//         </div>
//         <Pagination count={Math.floor(totalItemCount / perPage)} color="primary" page={page} onChange={this.handleChange} />
//       </>
//     );
//   }
// }

// export default List;