require 'spec_helper'

describe User do

  context "validations" do
    before(:each) { FactoryGirl.create(:user) }

    it { should validate_uniqueness_of :username }
    it { should validate_uniqueness_of :email }
  end
end
