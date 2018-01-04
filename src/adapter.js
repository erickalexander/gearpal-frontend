class Adapter {
  static getUser() {

    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(json => User.createUsers(json))
    .then(()=> User.currentUser() )
    // .then(data => User.createUsers(data))
  }

  static getListings() {
    fetch('http://localhost:3000/listings')
    .then(res => res.json())
    .then(json => Listing.createListings(json))
  }

  static getReservations(userId) {

    fetch('http://localhost:3000/reservations')
    .then(res => res.json())
    .then(json => Reservation.createReservations(json))
    // .then(data => User.createUsers(data))
  }

}
