class AddStartLocationAndEndLocationToRides < ActiveRecord::Migration
  def change
    add_column :rides, :start_location, :float, array: true
    add_column :rides, :end_location, :float, array: true
  end
end
