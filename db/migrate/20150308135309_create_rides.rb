class CreateRides < ActiveRecord::Migration
  def change
    create_table :rides do |t|
      t.integer :user_id
      t.string :start_address
      t.string :end_address

      t.timestamps null: false
    end
  end
end
