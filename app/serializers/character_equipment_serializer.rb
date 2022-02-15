class CharacterEquipmentSerializer < ActiveModel::Serializer
  attributes :id
  has_one :character
  has_one :equipment
end
