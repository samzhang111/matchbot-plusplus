class CreateUsersTable < ActiveRecord::Migration
  def change
    remove_column :users, :username
    add_column :users, :freqs, :text
    add_column :users, :total_words, :integer
    add_column :users, :nonstoplist_freq, :text
  end
end
