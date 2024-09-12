defmodule Diamond do
  def main do
    {:ok, contents} = File.read("input.txt")

    number =
      contents
      |> String.split("\n")
      |> Enum.find(fn line -> String.starts_with?(line, "n=") end)
      |> String.slice(2..-1)
      |> String.to_integer()

    if rem(number, 2) == 0 do
      number = number + 1
    end

    mid = div(number + 1, 2)

    top = for i <- 1..mid do
      String.duplicate(" ", mid - i) <> String.duplicate("*", 2 * i - 1)
    end

    bottom = for i <- mid - 1..1 do
      String.duplicate(" ", mid - i) <> String.duplicate("*", 2 * i - 1)
    end

    pattern = Enum.join(top ++ bottom, "\n") <> "\n"
    File.write!("output.txt", pattern)
  end
end

Diamond.main()
