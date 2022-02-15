class Character < ApplicationRecord
  belongs_to :user
  has_many :character_equipment
  has_many :equipment, through: :character_equipment
end
