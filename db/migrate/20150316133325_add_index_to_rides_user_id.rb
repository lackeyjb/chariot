class AddIndexToRidesUserId < ActiveRecord::Migration
  def change
    add_index :rides, :user_id
  end
end
