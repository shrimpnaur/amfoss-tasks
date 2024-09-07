def print_diamond(n)
  (0...n).each do |i|
    puts ' ' * (n - i - 1) + '*' * (2 * i + 1)
  end
  (n - 2).downto(0) do |i|
    puts ' ' * (n - i - 1) + '*' * (2 * i + 1)
  end
end

print "Enter a number: "
n = gets.to_i
print_diamond(n)

