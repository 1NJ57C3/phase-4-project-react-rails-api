class Equipment < ApplicationRecord
    has_many :character_equipment
    has_many :characters, through: :character_equipment

    validates :item_name, uniqueness: true
end
