class CharacterEquipmentsController < ApplicationController
    
    
    def show
        render json: CharacterEquipment.find(params[:id])
    end

    # * This allows changing of gear (for stretch goal)
    def update
        CharacterEquipment.update!(ce_params)
        render json: Character.find(params[:id]).equipment
    end
    
    private

    def ce_params
        params.permit(:character_id, :equipment_id)
    end
end