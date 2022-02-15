class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :char_name, :race, :str, :dex, :vit, :luk, :def
  has_one :user
end
