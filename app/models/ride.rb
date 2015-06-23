class Ride < ActiveRecord::Base

  belongs_to :user

  class << self

    def close_to(user, current_start_location, current_end_location)
      all_rides              = find_rides(user)
      rides_near_start_point = find_nearby_start(all_rides, current_start_location)
      rides_near_end_point   = find_nearby_end(rides_near_start_point, current_end_location)
      rides_near_end_point.uniq { |ride| ride.start_location && ride.end_location }
    end

    private

      def find_rides(user)
        if user.rides.last.driver
          where.not(user_id: user.id, driver: true)
        else
          where.not(user_id: user.id, driver: false)
        end
      end

      def distance_between(first_location, second_location)
        Geocoder::Calculations.distance_between(first_location, second_location)
      end

      def find_nearby_start(rides, location)
        rides.select { |ride| distance_between(location, ride.start_location) < 2 }
      end

      def find_nearby_end(rides, location)
        rides.select { |ride| distance_between(location, ride.end_location) < 2 }
      end
  end

end
