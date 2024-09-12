IO.write("Enter a number: ")
input = IO.gets("")
n = String.to_integer(String.trim(input))

if rem(n, 2) == 0 do
  n = n + 1
end

mid = div(n + 1, 2)

for i <- 1..mid do
  spaces = String.duplicate(" ", mid - i)
  stars = String.duplicate("*", 2 * i - 1)
  IO.write(spaces)
  IO.puts(stars)
end

for i <- (mid - 1)..1 do
  spaces = String.duplicate(" ", mid - i)
  stars = String.duplicate("*", 2 * i - 1)
  IO.write(spaces)
  IO.puts(stars)
end
