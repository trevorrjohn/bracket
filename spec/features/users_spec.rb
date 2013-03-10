require 'spec_helper'

describe "User sign up" do
  it "has a link to a sign up page" do
    visit root_path

    click_link "Sign up"

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
    current_path.should == "/users/" + User.last.id.to_s
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
