namespace :job do
  desc "TODO"
  task work: :environment do
      Dir.chdir("app/helpers/howie-src")
      system "./runme.py"
  end

end
