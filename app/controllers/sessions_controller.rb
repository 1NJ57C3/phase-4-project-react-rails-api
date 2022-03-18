class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
# Finding user by username , authenticating if user exists by password. If so creating session id.
    def create
        user = User.find_by(username: params[:username])
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: ["Not authorized"]},status: :unauthorized 
        end            
    end

    def destroy        
        session.delete(:user_id)
        head :no_content        
    end
end
