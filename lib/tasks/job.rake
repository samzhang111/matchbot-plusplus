namespace :job do
  desc "TODO"
  task work: :environment do
      Dir.chdir("app/helpers/pyaiml/dbus-python-0.84.0")
      system "./configure"
      system "make"
      system "make install"
      Dir.chdir("app/helpers/pyaiml")
      system "python matchbot.py"
  end

end
