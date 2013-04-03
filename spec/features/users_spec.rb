require 'spec_helper'

describe "User sign up" do
  it "has a link to a sign up page" do
    visit root_path

    within ".navbar" do
      click_link "Sign up"
    end

    current_path.should == "/users/new"
  end

  it "creates a user", js: true do
    visit new_user_path

    fill_in "user[username]", with: "newuser"
    fill_in "user[email]", with: "user@example.com"
    fill_in "user[password]", with: "password"
    fill_in "user[password_confirmation]", with: "password"

    click_button "Sign up"

    page.should have_content "Welcome"
    current_path.should == user_path(User.last)
  end

  it "does not allow missmatched passwords", js: true do
    visit new_user_path

    fill_in "user[username]", with: "newuser"
    fill_in "user[email]", with: "user@example.com"
    fill_in "user[password]", with: "password"
    fill_in "user[password_confirmation]", with: "not a password"

    find("#matchFields")['disabled'].should == true
  end
end

describe "User sign in" do
  before { visit root_path }

  it "has a link to a sign in page" do
    within ".navbar" do
      click_link "Sign in"
    end

    current_path.should == "/login"
  end

  context "with valid params" do
    let!(:user) { FactoryGirl.create(:user) }

    it "should link to user page after sign in" do
      click_link "Sign in"

      fill_in "username", with: user.username
      fill_in "password", with: user.password

      click_button "Sign in"

      page.should have_content "Welcome back"
      page.should_not have_link "Sign in"
      page.should_not have_link "Sign up"
      current_path.should == user_path(user)
    end
  end

  context "with invalid params" do
    it "should not allow a user sign in" do
      click_link "Sign in"

      fill_in "username", with: "noone"
      fill_in "password", with: "invalid_pass"

      click_button "Sign in"

      page.should have_content "Username or password incorrect. Try again"
      page.should have_link "Sign in"
      page.should have_link "Sign up"
      current_path.should == "/login"
    end
  end
end
