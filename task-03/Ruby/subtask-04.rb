# Read number from input.txt
n = File.read('input.txt').strip.to_i

# Function to generate diamond pattern
def generate_diamond(n)
  pattern = []
  (0...n).each do |i|
    stars = '*' * (2 * i + 1)
    pattern << stars.center(2 * n - 1)
  end
  (n - 2).downto(0) do |i|
    stars = '*' * (2 * i + 1)
    pattern << stars.center(2 * n - 1)
  end
  pattern
end

# Write pattern to output.txt
File.open('output.txt', 'w') do |file|
  generate_diamond(n).each do |line|
    file.puts(line)
  end
end

