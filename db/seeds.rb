# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# rides = Ride.create([
#     { user_id: 500,  latitude: 33.7550, longitude: -84.390033, end_latitude: 33.794793, end_longitude: -84.374446 }, 
#     { user_id: 417,  latitude: 33.809485, longitude: -84.343290, end_latitude: 33.804207, end_longitude: -84.356679 },
#     { user_id: 303,  latitude: 33.777315, longitude: -84.451866, end_latitude: 33.805562, end_longitude: -84.261836 },
#     { user_id: 700,  latitude: 33.648802, longitude: -84.463367, end_latitude: 33.873432, end_longitude: -84.420967 }
# ])



user = User.create ([
  { id: 500, email: 'blob1@jingo.com', password_digest: '458b545nf9n439fdnfd9n4r9fnf9n4', remember_token: '5985nfd9dfndf9news9%%J3i8fk4k' },
  { id: 417, email: 'blob2@jingo.com', password_digest: '458b545nf9n439fdnfd9n4r9fnf9n4', remember_token: '5985nfd9dfndf9news9%%J3i8fk4k' },
  { id: 303, email: 'blob3@jingo.com', password_digest: '458b545nf9n439fdnfd9n4r9fnf9n4', remember_token: '5985nfd9dfndf9news9%%J3i8fk4k' },
  { id: 700, email: 'blob4@jingo.com', password_digest: '458b545nf9n439fdnfd9n4r9fnf9n4', remember_token: '5985nfd9dfndf9news9%%J3i8fk4k' }
  ])