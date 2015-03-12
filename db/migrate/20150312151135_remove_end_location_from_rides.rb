class RemoveEndLocationFromRides < ActiveRecord::Migration
  def change
    remove_column :rides, :end_address
    remove_column :rides, :start_address
  end
end
