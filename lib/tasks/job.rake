namespace :job do
  desc "TODO"
  task work: :environment do
      Dir.chdir("app/helpers/pyaiml")
      system "python matchbot.py"
  end

end
