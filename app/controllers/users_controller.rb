class UsersController < ApplicationController

    skip_before_action :authorize, only: :create
    # Creating a user if none exists and creating a session id.
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
        params.permit(:username,:password,:password_confirmation)
    end
end