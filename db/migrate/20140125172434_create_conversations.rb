class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.integer :user_id
      t.float :avg_length

      t.timestamps
    end
  end
end
