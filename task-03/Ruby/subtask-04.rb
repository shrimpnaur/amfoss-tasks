
n = File.read('input.txt').to_i
n += 1 if n.even?

pattern = ""

(1..n).step(2) { |i| pattern << "#{' ' * ((n - i) / 2)}#{'*' * i}\n" }

(n - 2).step(1, -2) { |i| pattern << "#{' ' * ((n - i) / 2)}#{'*' * i}\n" }

File.write('output.txt', pattern)


