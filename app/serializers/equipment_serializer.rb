class EquipmentSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :stat, :mod, :is_positive, :item_type
end
