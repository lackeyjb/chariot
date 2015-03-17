class Api::UsersController < ApplicationController

  respond_to :json

  def index
    render json: User.select("id", "email")
  end

  def show
    user = User.find(params[:id])
    render json: user, status: 200
  end

  # This is our user registration action
  def create
    user = User.new(user_params)
    if user.save
      sign_in user
      render json: user, status: 201, location: [:api, user]
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_params)
      render json: user, status: 200, location: [:api, user]
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head 204
  end

  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :username)
    end

end