class Ride < ActiveRecord::Base
  
  belongs_to :user
  
  def self.close_to(user, start_location, end_location)
    all_rides              = all - user.rides
    rides_near_start_point = all_rides.select { |ride| Geocoder::Calculations.distance_between(start_location, ride.start_location) < 2 }
    rides_near_end_point   = rides_near_start_point.select { |ride| Geocoder::Calculations.distance_between(end_location, ride.end_location) < 2 }
    if user.rides.last.driver
      rides_near_end_point.select { |ride| ride.driver == false }.uniq { |ride| ride.start_location && ride.end_location }
    else
      rides_near_end_point.select { |ride| ride.driver }.uniq { |ride| ride.start_location && ride.end_location }
    end
  end
  
end
