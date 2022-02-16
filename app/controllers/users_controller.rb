class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id        
        render json: user, status: 201
        
    end

    def show
        u = User.find_by(id: session[:user_id])
        render json: u, status: 201
    end

    private

    def user_params
        params.permit(:username,:password)
    end
end