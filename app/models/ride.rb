class Ride < ActiveRecord::Base
  belongs_to :user, dependent: :destroy

  reverse_geocoded_by :latitude, :longitude,
    address: :start_address
  after_validation :reverse_geocode

  def self.lat_long_to_s
    "#{ latitude }, #{ longitude }"
  end

  # def self.nearby_start_and_end(ride) 
  #   { nearby_start: nearby(ride.latitude, ride.longitude) ,
  #     nearby_end:   nearby(ride.end_latitude, ride.end_longitude)  
  #   }
  # end
  # private

  # def nearby(latitude, longitude)
  #   self.near([latitude,longitude]) 
  # end
  


end
