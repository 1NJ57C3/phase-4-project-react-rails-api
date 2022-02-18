class Character < ApplicationRecord
  belongs_to :user
  has_many :character_equipment,dependent: :destroy
  has_many :equipment, through: :character_equipment

  validates :char_name, uniqueness: true

  def u_atk
    total = self.atk + self.equipment.find_by(stat: 'atk').mod
  end

  def u_arm
    total = self.arm + self.equipment.find_by(stat: 'arm').mod
  end

end
