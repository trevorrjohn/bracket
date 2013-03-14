namespace :db do
  desc "Migrate the database then create the test database"
  task :do => :environment do
    Rake::Task["db:migrate"].invoke
    Rake::Task["db:test:prepare"].invoke
  end

  desc "Rollback then migrate the database then create the test database"
  task 'do-over' => :environment do
    Rake::Task['db:rollback'].invoke
    Rake::Task["db:migrate"].invoke
    Rake::Task["db:test:prepare"].invoke
  end
end
