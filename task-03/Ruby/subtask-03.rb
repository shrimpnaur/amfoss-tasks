
puts "Enter the number of rows (odd number) for the diamond:"
n = gets.to_i

 
n += 1 if n.even?


(1..n).step(2) do |i|
  puts ' ' * ((n - i) / 2) + '*' * i
end
(n - 2).step(1, -2) do |i|
  puts ' ' * ((n - i) / 2) + '*' * i
end


