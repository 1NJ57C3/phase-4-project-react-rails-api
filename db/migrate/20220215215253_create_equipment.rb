class CreateEquipment < ActiveRecord::Migration[7.0]
  def change
    create_table :equipment do |t|
      t.string :item_name
      t.string :stat
      t.integer :mod
      t.boolean :is_positive
      t.string :item_type

      t.timestamps
    end
  end
end
