class CreateDesserts < ActiveRecord::Migration[6.1]
  def change
    create_table :desserts do |t|
      t.string :flavor
      t.string :variety
      t.string :topping
      t.integer :likes

      t.timestamps
    end
  end
end
