class UsersController < ApplicationController
  def new
    @user = User.new
    3.times{@user.responses.build}
    @responses = @user.responses
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user #todo: where do we want to redirect?
    else
      render 'new'
    end
  end

  def show
    @user = User.find(params[:id])
    @responses = @user.responses
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :responses)
  end
end
