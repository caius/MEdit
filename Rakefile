require "pathname"

ROOT = Pathname.new(File.dirname(__FILE__))

namespace :generate do
  desc "Generate the depends.js"
  task :depends do
    excludes = %w(appinfo.json depends.js framework_config.json index.html Rakefile) | [/^mock/]
    files = Dir[ROOT + "**/*"].map do |f|
      f = Pathname.new(f)
      f = f.relative_path_from(ROOT)
      next if excludes.any? {|e| e.is_a?(Regexp) ? f.to_s =~ e : f.to_s == e } || f.directory?
      f.to_s
    end.compact
    str = depends_content(files)
    File.open(ROOT + "depends.js", "w+") do |f|
      f.puts str
    end
    puts "Wrote content:"
    puts str
  end
  
  def depends_content files
    a = ["enyo.depends(", ")"]
    # Add these between the brackets
    a.insert 1, files.map {|f| "  #{f.to_s.inspect}," }
    a.join("\n")
  end
end
