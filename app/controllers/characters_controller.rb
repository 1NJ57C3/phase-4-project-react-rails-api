class CharactersController < ApplicationController

    def index
        render json: u.characters.all
    end

    def show
        render json: u.characters.find(params[:id])
    end

    # * Extra two lines append one each piece of starter gear on Character Creation
    def create
        c = u.characters.create!(c_params)
        c.character_equipment.create!(starter_weapon)
        c.character_equipment.create!(starter_armor)
        render json: c, status: 201
    end

    def update
        c = u.characters.find_by(id: params[:id])
        c.character_equipment.first.update!(rand_weapon)
        c.character_equipment.second.update!(rand_armor)
        render json: c
    end

    def destroy
        c = u.characters.find(params[:id])
        c.destroy!
        render json: {}, status: 204
    end

    private

    def u
        User.find_by(id: session[:user_id])
    end

    def starter_weapon
        {equipment_id: Equipment.where(item_type: 's_weapon').sample.id}
    end

    def starter_armor
        {equipment_id: Equipment.where(item_type: 's_armor').sample.id}
    end

    def rand_weapon
        {equipment_id: Equipment.where(stat: 'atk').sample.id}
    end

    def rand_armor
        {equipment_id: Equipment.where(stat: 'arm').sample.id}
    end

    def c_params
        params.permit(:char_name, :job, :atk, :acc, :vit, :luk, :arm)
    end
end
