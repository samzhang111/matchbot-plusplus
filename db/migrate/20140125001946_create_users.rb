class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.text :freqs
      t.text :nonstoplist_freqs
      t.float :avg_length
      t.integer :total_words

      t.timestamps
    end
  end
end
