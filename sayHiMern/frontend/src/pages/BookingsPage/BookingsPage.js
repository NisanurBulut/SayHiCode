import React, { Component } from 'react'
import AuthContext from '../../context/auth-context';
export class BookingsPage extends Component {
    static contextType = AuthContext;
    state={
        isLoading:false,
        bookings:[],
    }
    componentDidMount(){
        this.fetchBookings();
    }
    fetchBookings() {
        this.setState({ isLoading: true });
        const requestBody = {
          query: `
              query {
                bookings {
                  _id
                 createdat
                 event {
                     _id
                     title
                     date
                 }
                }
              }
            `,
        };

        fetch('http://localhost:8000/graphql', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.context.token
          },
        })
          .then((res) => {
            if (res.status !== 200 && res.status !== 201) {
              throw new Error('Failed!');
            }
            return res.json();
          })
          .then((resData) => {
            const bookings = resData.data.bookings;
            this.setState({ bookings: bookings, isLoading: false });
          })
          .catch((err) => {
            this.setState({ isLoading: false });
          });
      }
    render() {
        return (
            <div>
               <ul>
                   {this.state.bookings.map(booking=>{
                       <li>{booking.date}</li>
                   })}
               </ul>
            </div>
        )
    }
}

export default BookingsPage;
