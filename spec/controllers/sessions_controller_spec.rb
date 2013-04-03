require 'spec_helper'

describe SessionsController do

  describe "GET 'new'" do
    it "returns http success" do
      get :new
      response.should be_success
    end
  end

  describe "POST 'create'" do
    context "with valid params" do

      let!(:user){ FactoryGirl.create(:user) }

      it "should redirect to root" do
        post :create, { username: user.username, password: user.password }
        session[:user_id].should == user.id
        response.should redirect_to(root_path)
      end
    end

    context "with invalid params" do
      it "should render login" do
        post :create, { username: 'noone', password: 'password' }
        session[:user_id].should == nil
        response.should render_template :new
      end
    end
  end
end
