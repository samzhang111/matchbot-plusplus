namespace :job do
  desc "TODO"
  task work: :environment do
      Dir.chdir("app/..")
      system "tar xf dbus-1.8.0.tar.gz"
      system "mkdir dbus-lib"
      system "cd dbus-1.8.0"
      system "./configure --prefix=/app/dbus-lib"
      system "make"
      system "make install"

      puts "Installed dbus-lib"

      ENV['PATH'] = ENV['PATH'] + ":/app/dbus-lib/lib"

  end

end
