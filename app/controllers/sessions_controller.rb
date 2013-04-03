class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.where(username: params[:username]).first
    if @user.try(:authenticate, params[:password])
      session[:user_id] = @user.id
      redirect_to root_path, notice: 'Welcome back'
    else
      flash[:alert] = "Username or password incorrect. Try again"
      render :new
    end
  end

  def destroy
  end
end
