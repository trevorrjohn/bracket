require 'spec_helper'

describe "users/new" do
  before(:each) do
    assign(:user, stub_model(User,
      :username => "MyText",
      :email => "MyText",
      :password => "MyText"
    ).as_new_record)
  end

  it "renders new user form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", users_path, "post" do
      assert_select "textarea#user_username[name=?]", "user[username]"
      assert_select "textarea#user_email[name=?]", "user[email]"
      assert_select "textarea#user_password[name=?]", "user[password]"
    end
  end
end
