class AddIndexToRides < ActiveRecord::Migration
  def change
  end
  add_index :rides, :user_id
end
